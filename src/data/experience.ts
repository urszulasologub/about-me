import { describeYears, monthsBetween } from '@/lib/dates';
import type { Education, Experience } from './types';

export const experience: Experience[] = [
  {
    company: 'Visuality',
    role: 'Ruby on Rails Developer',
    start: '2023-04',
    location: 'Remote',
    summary: 'Ruby on Rails software house. One main long-term product for UK clients, plus shorter projects alongside.',
    engagements: [
      {
        title: 'B2B fintech platform',
        period: '2023 — now',
        summary:
          'Large Rails monolith on AWS, used by financial institutions, team of 15+ developers. Owner of the partner API and the UK bank integration.',
        tags: ['Rails 8', 'REST API', 'Hotwire', 'RSpec', 'Sidekiq', 'PostgreSQL', 'AWS'],
      },
    ],
  },
  {
    company: 'HTD Health',
    role: 'Full Stack Developer (Ruby on Rails)',
    start: '2020-07',
    end: '2023-04',
    location: 'Remote',
    summary: 'Software house building products for US clients. One main long-term product, plus shorter projects alongside. Started as an intern.',
    engagements: [
      {
        title: 'EHS compliance SaaS for US organisations',
        period: '2020 — 2023',
        summary:
          'Long-running American SaaS for safety and compliance. Day-to-day work in English with the US business.',
        tags: ['Ruby on Rails', 'REST API', 'RSpec', 'SSO (Okta)', 'jQuery', 'HAML', 'Heroku'],
      },
    ],
  },
];

const careerStart = experience.reduce((min, job) => (job.start < min ? job.start : min), experience[0].start);

/** Total time as a developer, e.g. { short: '6+', words: 'over 6' } */
export const careerLength = describeYears(monthsBetween(careerStart));

/** Average time spent on one main product (one per job) */
export const averageTenureYears = Math.round(
  experience.reduce((sum, job) => sum + monthsBetween(job.start, job.end), 0) / experience.length / 12,
);

export const education: Education[] = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    school: 'Lodz University of Technology',
    period: '2023',
    note: 'Finished while working full-time as a Rails developer.',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    school: 'Lodz University of Technology',
    period: '2021',
    note: 'Scholarship for academic results. Won university hackathons.',
  },
];
