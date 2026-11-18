/** Feeds the pointer position to [data-spotlight] cards as CSS vars. */
export function initSpotlight(): void {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.addEventListener(
    'pointermove',
    (event) => {
      const card = (event.target as Element).closest<HTMLElement>('[data-spotlight]');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    },
    { passive: true },
  );
}
