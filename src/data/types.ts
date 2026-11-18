export type SkillLevel = 'core' | 'strong' | 'familiar';

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Extra search words, e.g. "rspec" -> ["testing", "tdd"] */
  aliases?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  /** Full width, with an accent border */
  featured?: boolean;
  /** Small label next to the title, e.g. "In focus" */
  badge?: string;
  skills: Skill[];
}

export interface Highlight {
  title: string;
  summary: string;
  /** Always shown as a wide card */
  featured?: boolean;
  points: string[];
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Engagement {
  title: string;
  period: string;
  summary: string;
  points?: string[];
  tags?: string[];
}

export interface Experience {
  company: string;
  role: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM'; leave out while still working there */
  end?: string;
  location?: string;
  summary: string;
  engagements: Engagement[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  period?: string;
  note?: string;
}

export interface Language {
  name: string;
  level: string;
  note: string;
  /** 0–100, used only for the visual meter */
  meter: number;
}

export interface Profile {
  name: string;
  formerName?: string;
  role: string;
  tagline: string;
  location: string;
  linkedin: string;
  about: string[];
}

export interface Publication {
  kind: 'Article' | 'Talk';
  title: string;
  date: string;
  /** Where it was published or given */
  venue: string;
  summary: string;
  url: string;
}

export interface Event {
  name: string;
  place: string;
  when: string;
}
