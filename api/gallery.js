// 관리자 전용 API — 갤러리 CRUD (이미지는 Supabase Storage 'gallery' 버킷)
// 환경변수: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_PASSWORD

function timingSafeEqual(a, b) {
  a = String(a || ''); b = String(b || '');
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

export default async function handler(req, res) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ADMIN_PASSWORD } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !ADMIN_PASSWORD) {
    return res.status(500).json({ error: '서버 환경변수가 설정되지 않았습니다.' });
  }
  if (!timingSafeEqual(req.headers['x-admin-password'] || '', ADMIN_PASSWORD)) {
    return res.status(401).json({ error: '인증 실패' });
  }

  const rest = `${SUPABASE_URL}/rest/v1/gallery_items`;
  const storage = `${SUPABASE_URL}/storage/v1/object/gallery`;
  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${rest}?select=*&order=sort_order.asc,created_at.desc`, { headers });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'POST') {
      const { title, dataUrl, sort_order, published } = req.body || {};
      const m = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(dataUrl || '');
      if (!m) return res.status(400).json({ error: '이미지 형식이 올바르지 않습니다. (jpg/png/webp)' });
      const buf = Buffer.from(m[2], 'base64');
      if (buf.length > 6 * 1024 * 1024) return res.status(413).json({ error: '이미지 용량이 큽니다. (6MB 이하)' });

      const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${EXT[m[1]]}`;
      const up = await fetch(`${storage}/${name}`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': m[1],
          'x-upsert': 'true',
        },
        body: buf,
      });
      if (!up.ok) return res.status(502).json({ error: '이미지 업로드 실패', detail: await up.text() });

      const r = await fetch(rest, {
        method: 'POST',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify({
          title: title || '',
          image_path: name,
          sort_order: Number.isFinite(+sort_order) ? +sort_order : 0,
          published: published !== false,
        }),
      });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'PATCH') {
      const { id, ...fields } = req.body || {};
      if (!id) return res.status(400).json({ error: 'id 누락' });
      const allowed = {};
      ['title', 'sort_order', 'published'].forEach((k) => { if (k in fields) allowed[k] = fields[k]; });
      const r = await fetch(`${rest}?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify(allowed),
      });
      return res.status(r.ok ? 200 : 502).json(await r.json());
    }

    if (req.method === 'DELETE') {
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: 'id 누락' });
      const row = await (await fetch(`${rest}?id=eq.${encodeURIComponent(id)}&select=image_path`, { headers })).json();
      const path = Array.isArray(row) && row[0] && row[0].image_path;
      if (path) {
        await fetch(`${storage}/${path}`, {
          method: 'DELETE',
          headers: { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}` },
        });
      }
      const r = await fetch(`${rest}?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE', headers });
      return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
    }

    res.setHeader('Allow', 'GET, POST, PATCH, DELETE');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: '서버 오류' });
  }
}
