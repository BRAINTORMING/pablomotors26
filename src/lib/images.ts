// import.meta.env does not exist in every runtime, so read it defensively. No .env here? Paste the PUBLIC access key
// from unsplash.com/developers between the quotes. Empty means curated photos only.
const ENV = (import.meta as any).env;
export const UNSPLASH_KEY: string = (ENV && ENV.VITE_UNSPLASH_ACCESS_KEY) || '';

// Curated Unsplash photo IDs by category. Categories are broad on purpose: use one ONLY if it fits the subject,
// otherwise pass category="none". If an ID returns 404, replace it with another; the placeholder covers it meanwhile.
export const POOL: Record<string, string[]> = {
  business: ['photo-1497366216548-37526070297c', 'photo-1522202176988-66273c2fd55f', 'photo-1460925895917-afdab827c52f', 'photo-1486312338219-ce68d2c6f44d'],
  tech: ['photo-1498050108023-c5249f4df085', 'photo-1486312338219-ce68d2c6f44d', 'photo-1460925895917-afdab827c52f', 'photo-1518770660439-4636190af475'],
  food: ['photo-1504674900247-0877df9cc836', 'photo-1517248135467-4c7edcad34c4', 'photo-1414235077428-338989a2e8c0', 'photo-1476224203421-9ac39bcb3327'],
  nature: ['photo-1506905925346-21bda4d32df4', 'photo-1469474968028-56623f02e42e', 'photo-1441974231531-c6227db76b6e', 'photo-1470071459604-3b5ec3a7fe05'],
  shop: ['photo-1441986300917-64674bd600d8', 'photo-1472851294608-062f824d29cc', 'photo-1523275335684-37898b6baf30', 'photo-1542291026-7eec264c27ff'],
};

export const direct = (id: string, w: number, h: number) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + w + '&h=' + h + '&q=80';

export const pick = (category: string, seed: number) => {
  const list = POOL[category];
  return list ? list[Math.abs(seed) % list.length] : '';
};

// The only place where hex colors are allowed: a data URI cannot read CSS variables.
export const placeholder = (label: string, w: number, h: number) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
    '<rect width="100%" height="100%" fill="#e5e7eb"/>' +
    '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="' + Math.round(Math.min(w, h) / 12) + '" fill="#64748b">' + label.replace(/[<>&"]/g, '') + '</text></svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

// First thing a slot shows: a curated photo if the category fits, otherwise the placeholder.
export const firstSrc = (category: string, seed: number, w: number, h: number, label: string) =>
  POOL[category] ? direct(pick(category, seed), w, h) : placeholder(label, w, h);

const inflight = new Map<string, Promise<string[]>>();

function fetchUrls(query: string): Promise<string[]> {
  if (!UNSPLASH_KEY) return Promise.resolve([]);
  const ck = 'unsplash:' + query;
  try {
    const hit = localStorage.getItem(ck);
    if (hit) { const cached: string[] = JSON.parse(hit); if (cached.length) return Promise.resolve(cached); }
  } catch { /* ignore */ }
  const running = inflight.get(ck);
  if (running) return running;
  const p = fetch('https://api.unsplash.com/search/photos?per_page=10&orientation=landscape&query=' + encodeURIComponent(query) + '&client_id=' + UNSPLASH_KEY)
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      const urls: string[] = ((data && data.results) || []).map((r: any) => r.urls && r.urls.raw).filter(Boolean);
      if (urls.length) { try { localStorage.setItem(ck, JSON.stringify(urls)); } catch { /* ignore */ } }
      return urls;
    })
    .catch(() => [] as string[])
    .finally(() => { inflight.delete(ck); });
  inflight.set(ck, p);
  return p;
}

export async function search(query: string, seed: number, w: number, h: number): Promise<string | null> {
  const urls = await fetchUrls(query);
  if (!urls.length) return null;
  const base = urls[Math.abs(seed) % urls.length];
  return base + (base.indexOf('?') === -1 ? '?' : '&') + 'w=' + w + '&h=' + h + '&fit=crop&auto=format&q=80';
}
