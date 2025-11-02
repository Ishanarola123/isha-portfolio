import { Project, Skills } from "./index";

export interface Certification {
  title: string;
  issuer?: string;
  year?: string;
}

export interface IPortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  skills: Skills,
  academicProjects: Project[];
  certifications?: Certification[];
}
