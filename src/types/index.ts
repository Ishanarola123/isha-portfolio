export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Skills {
  frontend: string[];
  stateManagement: string[];
  tools: string[];
  testing: string[];
  other: string[];
  os: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  company: string;
  teamSize: number;
  technologies: string[];
  liveUrl?: string;
  stageUrl?: string;
  description: string;
  features: string[];
  status?: 'Live' | 'Completed' | 'In Development' | string;
  duration: string;
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  duration: string;
  cgpa?: string;
  score?: string;
}

export interface CertificationCategory {
  category: string;
  items: string[];
}

export interface Internship {
  company: string;
  position: string;
  description: string;
}

export interface AcademicProject {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skills;
  experience: Experience;
  projects: Project[];
  education: Education[];
  certifications: CertificationCategory[];
  internships: Internship[];
  academicProjects: AcademicProject[];
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
}