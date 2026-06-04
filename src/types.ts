export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  logoType: 'shriram' | 'consultant' | 'aidash' | 'neurafarms' | 'dehaat' | 'farmguide' | 'imd' | 'uprsac';
  points: string[];
}

export interface Consultancy {
  id: string;
  client: string;
  logoType: 'adb' | 'absolute' | 'fitastronaut' | 'bisa' | 'plutas';
  role: string;
  points: string[];
}

export interface Publication {
  id: string;
  type: 'book' | 'journal_special' | 'article' | 'chapter';
  authors?: string;
  year: number;
  title: string;
  publisherOrJournal: string;
  link?: string;
  impactFactor?: number;
  isbn?: string;
}

export interface Certification {
  id: string;
  name: string;
}

export interface Skill {
  category: 'technical' | 'agritech' | 'competency';
  name: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  duration: string;
}

export interface Reference {
  id: string;
  name: string;
  roleId: string;
  organization: string;
  contact?: string;
  email: string;
}
