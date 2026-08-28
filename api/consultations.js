// 관리자 전용 API — 상담 신청 조회 / 상태 변경
// Vercel 환경변수 필요:
//   SUPABASE_URL              = https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY = (Supabase > Settings > API > service_role, 절대 공개 금지)
//   ADMIN_PASSWORD            = 관리자 페이지 비밀번호

function timingSafeEqual(a, b) {
  a = String(a || '');
  b = String(b || '');
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export default async function handler(req, res) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_PASSWORD } = process.env;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !ADMIN_PASSWORD) {
    return res.status(500).json({ error: '서버 환경변수가 설정되지 않았습니다.' });
  }

  const auth = req.headers['x-admin-password'] || '';
  if (!timingSafeEqual(auth, ADMIN_PASSWORD)) {
    return res.status(401).json({ error: '인증 실패' });
  }

  const base = `${SUPABASE_URL}/rest/v1/consultations`;
  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${base}?select=*&order=created_at.desc`, { headers });
      const data = await r.json();
      return res.status(r.ok ? 200 : 502).json(data);
    }

    if (req.method === 'PATCH') {
      const { id, status } = req.body || {};
      if (!id || !['pending', 'done'].includes(status)) {
        return res.status(400).json({ error: '잘못된 요청' });
      }
      const r = await fetch(`${base}?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify({ status }),
      });
      const data = await r.json();
      return res.status(r.ok ? 200 : 502).json(data);
    }

    res.setHeader('Allow', 'GET, PATCH');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: '서버 오류' });
  }
}
