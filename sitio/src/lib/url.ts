const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta interna respetando el base de GitHub Pages. */
export function u(path = '/'): string {
  if (/^https?:|^tel:|^mailto:|^#/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
