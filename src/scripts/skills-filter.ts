/**
 * Live search + area filter for the skills index.
 * The query is mirrored to ?skill= so a search can be shared as a link.
 * Tags elsewhere on the page ([data-tag-filter]) jump here with their name.
 */
export function initSkillsFilter(): void {
  const container = document.querySelector<HTMLElement>('[data-skills]');
  if (!container) return;

  const input = container.querySelector<HTMLInputElement>('[data-skills-input]')!;
  const count = container.querySelector<HTMLElement>('[data-skills-count]')!;
  const empty = container.querySelector<HTMLElement>('[data-skills-empty]')!;
  const groups = [...container.querySelectorAll<HTMLElement>('[data-group]')];
  const filters = [...container.querySelectorAll<HTMLButtonElement>('[data-skills-group]')];

  let activeGroup = 'all';

  const apply = () => {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;

    for (const group of groups) {
      const inGroup = activeGroup === 'all' || group.dataset.group === activeGroup;
      let groupMatches = 0;

      group.querySelectorAll<HTMLElement>('[data-skill]').forEach((skill) => {
        const haystack = skill.dataset.skill ?? '';
        const matches = terms.every((term) => haystack.includes(term));
        skill.classList.toggle('is-dimmed', terms.length > 0 && !matches);
        skill.classList.toggle('is-match', terms.length > 0 && matches);
        if (matches) groupMatches += 1;
      });

      const show = inGroup && groupMatches > 0;
      group.hidden = !show;
      if (show) visible += groupMatches;
    }

    count.textContent = String(visible);
    empty.hidden = visible > 0;

    const url = new URL(window.location.href);
    if (input.value.trim()) url.searchParams.set('skill', input.value.trim());
    else url.searchParams.delete('skill');
    history.replaceState(null, '', url);
  };

  const setGroup = (id: string) => {
    activeGroup = id;
    filters.forEach((button) => {
      const active = button.dataset.skillsGroup === id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    apply();
  };

  input.addEventListener('input', apply);
  filters.forEach((button) => button.addEventListener('click', () => setGroup(button.dataset.skillsGroup ?? 'all')));

  container.querySelector('[data-skills-reset]')?.addEventListener('click', () => {
    input.value = '';
    setGroup('all');
    input.focus();
  });

  // "/" focuses the search, like on GitHub.
  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement;
    if (event.key !== '/' || target.closest('input, textarea, [contenteditable]')) return;
    event.preventDefault();
    input.focus({ preventScroll: true });
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Clicking a tag anywhere searches for it and highlights the exact skill.
  document.addEventListener('click', (event) => {
    const tag = (event.target as Element).closest<HTMLElement>('[data-tag-filter]');
    if (!tag) return;
    event.preventDefault();

    const name = tag.dataset.tagFilter ?? '';
    input.value = name;
    setGroup('all');
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const exact = container.querySelector<HTMLElement>(`[data-skill-name="${CSS.escape(name.toLowerCase())}"]`);
    if (exact) {
      exact.classList.remove('is-flash');
      void exact.offsetWidth;
      exact.classList.add('is-flash');
    }
  });

  const initial = new URL(window.location.href).searchParams.get('skill');
  if (initial) input.value = initial;
  apply();
}
