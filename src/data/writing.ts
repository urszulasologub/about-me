import type { Event, Publication } from './types';

export const publications: Publication[] = [
  {
    kind: 'Article',
    title: 'Rails Migrations Best Practices: Why Data Does Not Belong There',
    date: 'Feb 2026',
    venue: 'Visuality blog',
    summary:
      'Why data changes inside migrations break deploys and fresh setups, and safer, tested ways to change data in long-lived Rails apps.',
    url: 'https://www.visuality.pl/posts/rails-migrations-best-practices',
  },
  {
    kind: 'Talk',
    title: 'AI-Assisted Data Extraction',
    date: 'Sep 2024',
    venue: 'PLRUG, Warsaw Ruby meetup',
    summary:
      'From a vague business problem to a working feature that pulls structured data out of documents with AI tools.',
    url: 'https://www.youtube.com/watch?v=Y7GYO-RdyMk',
  },
  {
    kind: 'Article',
    title: 'The Deadly Sins in RoR Security: SQL Injection',
    date: 'Jun 2024',
    venue: 'Visuality blog',
    summary:
      'How raw SQL built from user input opens a Rails app to attacks, and how parameterized queries close the gap.',
    url: 'https://www.visuality.pl/posts/the-deadly-sins-in-ror-security---sql-injection',
  },
];

/** Conferences and meetups attended, newest first */
export const events: Event[] = [
  { name: 'EuRuKo', place: 'Brno', when: '2026' },
  { name: 'Ruby Community Conference', place: 'Kraków', when: '2025, 2026' },
  { name: 'wroc_love.rb', place: 'Wrocław', when: '2023' },
  { name: 'PLRUG meetups', place: 'Warsaw', when: 'regular' },
];
