/** Prefix a path with the configured base, so links work on GitHub Pages project sites. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Stable id for a skill name, used to link tags to the skills index. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, ' ')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}
