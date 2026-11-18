import type { Highlight } from './types';

/*
 * Selected work. Client names and business details are kept out on purpose;
 * each card describes the engineering problem, not the product.
 */
export const highlights: Highlight[] = [
  {
    title: 'Partner API for a major UK bank',
    summary:
      'Owned the REST API that financial institutions integrate with, and led the technical calls with the bank\'s team.',
    points: [
      'Authentication and secure token handling for partner systems.',
      'Webhooks and API documentation that partners can build on.',
    ],
    tags: ['REST API', 'Webhooks', 'OAuth 2.0', 'Sidekiq', 'AWS'],
  },
  {
    title: 'Modernising a large Rails monolith',
    summary: 'Kept a years-old product current, smaller and well structured.',
    points: [
      'Led major Rails and gem upgrades.',
      'Kept business logic in clear layers: service, query and form objects, policies, serializers and components.',
      'Delivered a large redesign with safe, gradual rollout, and removed old legacy code.',
    ],
    tags: ['Ruby on Rails', 'Design patterns', 'Hotwire (Turbo, Stimulus)', 'ViewComponent', 'Feature flags'],
  },
  {
    title: 'Security hardening',
    summary: 'Fixed the findings of external pen tests and added checks so they stay fixed.',
    points: [
      'Fixed vulnerabilities from the OWASP Top 10.',
      'Owned the rich-text editor: safe handling of user content and a major-version migration for security.',
      'Added multi-factor authentication and automated security checks in CI.',
    ],
    tags: ['OWASP Top 10', 'Devise', 'Pundit', 'Brakeman'],
  },
  {
    title: 'AI in the product and in the team',
    summary: 'I use AI where it saves real work, with the same rules as any other code.',
    featured: true,
    points: [
      'Built an AI document-processing feature with AWS Bedrock, and gave a talk about it.',
      'Wrote shared Claude Code skills that speed up the team\'s planning, coding and testing.',
      'Follow clear team rules for safe AI use: reviews, tests and no sensitive data in prompts.',
    ],
    tags: ['LLM integration', 'AWS Bedrock', 'Claude Code', 'AI-assisted development', 'Prompt engineering'],
  },
  {
    title: 'Leading internal product teams',
    summary:
      'Led two short projects with new teams: product owner and developer in one. I organised the work and presented the results to management.',
    points: [
      'An AI tool that turns meeting recordings into searchable transcripts and summaries, connected to Google Drive.',
      'An internal marketplace for sharing AI tools, connected to GitHub.',
    ],
    tags: ['Team leadership', 'Presenting & public speaking', 'OpenAI API', 'Google Cloud APIs', 'GitHub API'],
  },
  {
    title: 'Three years on an American SaaS',
    summary:
      'Three years of full-stack work on a mature US compliance platform: new features on a large, established codebase.',
    points: [
      'Helped build a new integration API from scratch.',
      'Single sign-on integration and client environments on Heroku.',
    ],
    tags: ['REST API', 'RSpec', 'SSO (Okta)', 'HAML', 'Heroku'],
  },
];
