/**
 * Everything driven by scroll position, batched in one rAF:
 * header state, reading progress, active nav link and timeline fill.
 */
export function initScrollEffects(): void {
  const root = document.documentElement;
  const progressBar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  const timelines = document.querySelectorAll<HTMLElement>('[data-timeline]');
  const links = new Map<string, HTMLAnchorElement>();

  document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((link) => {
    links.set(link.hash.slice(1), link);
  });

  let ticking = false;

  const update = () => {
    ticking = false;
    const scrollTop = window.scrollY;
    const max = root.scrollHeight - window.innerHeight;

    root.classList.toggle('is-scrolled', scrollTop > 24);
    progressBar?.style.setProperty('--progress', String(max > 0 ? scrollTop / max : 0));

    timelines.forEach((timeline) => {
      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const fill = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      timeline.querySelector<HTMLElement>('[data-timeline-fill]')?.style.setProperty('--fill', String(fill));
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();

  if (!('IntersectionObserver' in window) || links.size === 0) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link, id) => link.classList.toggle('is-active', id === entry.target.id));
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}
