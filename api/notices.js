// 관리자 전용 API — 공지사항 CRUD
// 환경변수: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_PASSWORD

function timingSafeEqual(a, b) {
  a = String(a || ''); b = String(b || '');
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
  if (!timingSafeEqual(req.headers['x-admin-password'] || '', ADMIN_PASSWORD)) {
    return res.status(401).json({ error: '인증 실패' });
  }

  const base = `${SUPABASE_URL}/rest/v1/notices`;
  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${base}?select=*&order=pinned.desc,created_at.desc`, { headers });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'POST') {
      const { category, title, body, pinned, published } = req.body || {};
      if (!title || !body) return res.status(400).json({ error: '제목과 내용을 입력하세요.' });
      const r = await fetch(base, {
        method: 'POST',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify({
          category: category || '안내',
          title, body,
          pinned: !!pinned,
          published: published !== false,
        }),
      });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'PATCH') {
      const { id, ...fields } = req.body || {};
      if (!id) return res.status(400).json({ error: 'id 누락' });
      const allowed = {};
      ['category', 'title', 'body', 'pinned', 'published'].forEach((k) => {
        if (k in fields) allowed[k] = fields[k];
      });
      const r = await fetch(`${base}?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify(allowed),
      });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'DELETE') {
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: 'id 누락' });
      const r = await fetch(`${base}?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE', headers });
      return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
    }

    res.setHeader('Allow', 'GET, POST, PATCH, DELETE');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: '서버 오류' });
  }
}
