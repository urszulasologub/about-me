import { highlights } from '@/data/highlights';
import { skillGroups } from '@/data/skills';

/**
 * Fails the build if a highlight uses a tag that has no matching skill,
 * so clickable tags never lead to an empty search.
 */
export function assertTagsMatchSkills(): void {
  const known = new Set(skillGroups.flatMap((g) => g.skills.map((s) => s.name)));
  const unknown = highlights.flatMap((h) => h.tags).filter((tag) => !known.has(tag));

  if (unknown.length > 0) {
    throw new Error(`Highlight tags without a matching skill: ${[...new Set(unknown)].join(', ')}`);
  }
}
