import { averageTenureYears, careerLength } from './experience';
import type { Language, Profile, Stat } from './types';

export const profile: Profile = {
  name: 'Urszula Paradowska',
  formerName: 'Sołogub',
  role: 'Senior Ruby on Rails Engineer',
  tagline:
    'I build and run the backend of long-lived Rails products — clean service layers, safe APIs, and code that the next person can trust.',
  location: 'Łódź, Poland · remote',
  linkedin: 'https://www.linkedin.com/in/urszula-paradowska-5394a0168/',
  about: [
    `${careerLength.words[0].toUpperCase()}${careerLength.words.slice(1)} years with Ruby on Rails on two long-running, business-critical products: a UK fintech platform and a US compliance SaaS. I know how to grow old codebases without breaking them.`,
    'I lean to the backend: clean architecture, APIs, integrations, background jobs, security and tests. I own work end to end and I like to lead — from planning with the team to presenting the results to management.',
    'I use AI every day, with care: I build LLM features with AWS Bedrock and write the Claude Code skills my team works with.',
  ],
};

export const stats: Stat[] = [
  { value: `${careerLength.short} yrs`, label: 'with Ruby on Rails' },
  { value: `~${averageTenureYears} yrs`, label: 'average time on one product' },
  { value: 'UK · US', label: 'clients' },
];

export const languages: Language[] = [
  {
    name: 'Polish',
    level: 'Native',
    note: 'First language.',
    meter: 100,
  },
  {
    name: 'English',
    level: 'C1',
    note: 'Daily work and calls with British and American clients.',
    meter: 82,
  },
  {
    name: 'German',
    level: 'A1 / A2',
    note: 'Basic.',
    meter: 25,
  },
];
