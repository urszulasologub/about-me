/*
 * Date helpers. Dates are 'YYYY-MM' strings; a missing end means "now".
 * Values are computed at build time, so the deploy workflow rebuilds monthly.
 */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(date: string): { year: number; month: number } {
  const [year, month] = date.split('-').map(Number);
  return { year, month };
}

function today(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

/** Whole months from start to end, counting both the first and the last month. */
export function monthsBetween(start: string, end: string = today()): number {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

/** "Apr 2023 — now" */
export function formatPeriod(start: string, end?: string): string {
  const format = (date: string) => {
    const { year, month } = parse(date);
    return `${MONTHS[month - 1]} ${year}`;
  };
  return `${format(start)} — ${end ? format(end) : 'now'}`;
}

/**
 * Wording for a length of time, rounded up to the year you are in:
 * 6 years 4 months → "~7" / "almost 7"; exactly 6 years → "6".
 */
export function describeYears(months: number): { short: string; words: string } {
  const years = Math.floor(months / 12);
  if (months % 12 === 0) return { short: `${years}`, words: `${years}` };
  return { short: `~${years + 1}`, words: `almost ${years + 1}` };
}
