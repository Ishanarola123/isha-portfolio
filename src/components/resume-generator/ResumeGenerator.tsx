// components/ResumeGenerator.tsx
import React from "react";

// --- Interfaces for Portfolio Data ---
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  summary: string;
}

interface Skills {
  frontend: string[];
  stateManagement: string[];
  tools: string[];
  other: string[];
}

interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

interface Project {
  title: string;
  company: string;
  teamSize: number;
  duration: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string; // Optional property
}

interface Education {
  degree: string;
  institution: string;
  university?: string; // Optional property
  duration: string;
  cgpa?: string; // Optional property
  score?: string; // Optional property
}

interface CertificationItem {
  name: string;
  // Add other properties if your certification items have them, e.g., 'date', 'issuer'
}

interface CertificationCategory {
  category: string;
  items: (string | CertificationItem)[]; // Can be string or an object with a 'name' property
}

interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skills;
  experience: Experience;
  projects: Project[];
  education: Education[];
  certifications: CertificationCategory[];
}

// --- ResumeGenerator Class ---
class ResumeGenerator {
  private data: PortfolioData; // Use 'private' for encapsulation

  constructor(portfolioData: PortfolioData) {
    this.data = portfolioData;
  }

  // Generate HTML content for PDF
  public generateHTMLContent(): string {
    // Add public access modifier
    const {
      personalInfo,
      skills,
      experience,
      projects,
      education,
      certifications,
    } = this.data;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${personalInfo.name} - Resume</title>
        <link rel="stylesheet" href="/styles/resume.css">
      </head>
      <body>
        <div class="resume-container">
          <div class="header">
            <h1>${personalInfo.name}</h1>
            <h2>${personalInfo.title}</h2>
            <div class="contact-info">
              <span>📧 ${personalInfo.email}</span>
              <span>📱 ${personalInfo.phone}</span>
              <span>📍 ${personalInfo.address}</span>
            </div>
            <div class="contact-info">
              <span>🔗 LinkedIn: ${personalInfo.linkedin}</span>
              <span>💻 GitHub: ${personalInfo.github}</span>
            </div>
          </div>

          <div class="section">
            <h3>Professional Summary</h3>
            <p>${personalInfo.summary}</p>
          </div>

          <div class="section">
            <h3>Technical Skills</h3>
            <div class="skills-grid">
              <div class="skill-category">
                <h4>Frontend Technologies</h4>
                <div class="skills-list">
                  ${skills.frontend
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join("")}
                </div>
              </div>
              <div class="skill-category">
                <h4>State Management</h4>
                <div class="skills-list">
                  ${skills.stateManagement
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join("")}
                </div>
              </div>
              <div class="skill-category">
                <h4>Tools & Technologies</h4>
                <div class="skills-list">
                  ${skills.tools
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join("")}
                </div>
              </div>
              <div class="skill-category">
                <h4>Other Skills</h4>
                <div class="skills-list">
                  ${skills.other
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join("")}
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h3>Professional Experience</h3>
            <div class="experience-item">
              <h4>${experience.position}</h4>
              <div class="company">${experience.company}</div>
              <div class="duration">${experience.duration}</div>
              <div class="responsibilities">
                <strong>Key Responsibilities:</strong>
                <ul>
                  ${experience.responsibilities
                    .map((resp) => `<li>${resp}</li>`)
                    .join("")}
                </ul>
              </div>
              <div class="responsibilities">
                <strong>Key Achievements:</strong>
                <ul>
                  ${experience.achievements
                    .map((achievement) => `<li>${achievement}</li>`)
                    .join("")}
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h3>Key Projects</h3>
            ${projects
              .map(
                (project) => `
              <div class="project-item">
                <h4>${project.title}</h4>
                <div class="company">${project.company} | Team Size: ${
                  project.teamSize
                } | ${project.duration}</div>
                <p>${project.description}</p>
                <div class="tech-stack">
                  <strong>Technologies:</strong>
                  ${project.technologies
                    .map((tech) => `<span class="tech-tag">${tech}</span>`)
                    .join("")}
                </div>
                <div class="features">
                  <strong>Key Features:</strong>
                  <ul>
                    ${project.features
                      .map((feature) => `<li>${feature}</li>`)
                      .join("")}
                  </ul>
                </div>
                ${
                  project.liveUrl
                    ? `<div><strong>Live URL:</strong> ${project.liveUrl}</div>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>

          <div class="section">
            <h3>Education</h3>
            ${education
              .map(
                (edu) => `
              <div class="education-item">
                <h4>${edu.degree}</h4>
                <div class="company">${edu.institution}</div>
                ${
                  edu.university
                    ? `<div class="company">${edu.university}</div>`
                    : ""
                }
                <div class="duration">${edu.duration}</div>
                ${
                  edu.cgpa
                    ? `<div><strong>CGPA:</strong> ${edu.cgpa}</div>`
                    : ""
                }
                ${
                  edu.score
                    ? `<div><strong>Achievement:</strong> ${edu.score}</div>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>

          <div class="section certifications">
            <h3>Certifications & Achievements</h3>
            ${certifications
              .map(
                (category) => `
              <div>
                <h4>${category.category}</h4>
                <ul>
                  ${category.items
                    .map(
                      (item) => `
                    <li>${typeof item === "string" ? item : item.name}</li>
                  `
                    )
                    .join("")}
                </ul>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Generate text content for DOCX
  public generateTextContent(): string {
    // Add public access modifier
    const {
      personalInfo,
      skills,
      experience,
      projects,
      education,
      certifications,
    } = this.data;

    let content = `${personalInfo.name}\n`;
    content += `${personalInfo.title}\n\n`;
    content += `Contact Information:\n`;
    content += `Email: ${personalInfo.email}\n`;
    content += `Phone: ${personalInfo.phone}\n`;
    content += `Address: ${personalInfo.address}\n`;
    content += `LinkedIn: ${personalInfo.linkedin}\n`;
    content += `GitHub: ${personalInfo.github}\n\n`;

    content += `PROFESSIONAL SUMMARY\n`;
    content += `${personalInfo.summary}\n\n`;

    content += `TECHNICAL SKILLS\n`;
    content += `Frontend: ${skills.frontend.join(", ")}\n`;
    content += `State Management: ${skills.stateManagement.join(", ")}\n`;
    content += `Tools: ${skills.tools.join(", ")}\n`;
    content += `Other: ${skills.other.join(", ")}\n\n`;

    content += `PROFESSIONAL EXPERIENCE\n`;
    content += `${experience.position}\n`;
    content += `${experience.company} | ${experience.duration}\n\n`;
    content += `Responsibilities:\n`;
    experience.responsibilities.forEach((resp: string) => {
      // Type annotation for resp
      content += `• ${resp}\n`;
    });
    content += `\nAchievements:\n`;
    experience.achievements.forEach((achievement: string) => {
      // Type annotation for achievement
      content += `• ${achievement}\n`;
    });
    content += `\n`;

    content += `KEY PROJECTS\n`;
    projects.forEach((project: Project) => {
      // Type annotation for project
      content += `${project.title}\n`;
      content += `${project.company} | Team Size: ${project.teamSize} | ${project.duration}\n`; // Include teamSize in DOCX
      content += `${project.description}\n`;
      content += `Technologies: ${project.technologies.join(", ")}\n`;
      content += `Key Features:\n`;
      project.features.forEach((feature: string) => {
        // Type annotation for feature
        content += `• ${feature}\n`;
      });
      if (project.liveUrl) {
        content += `Live URL: ${project.liveUrl}\n`;
      }
      content += `\n`;
    });

    content += `EDUCATION\n`;
    education.forEach((edu: Education) => {
      // Type annotation for edu
      content += `${edu.degree}\n`;
      content += `${edu.institution}\n`;
      if (edu.university) content += `${edu.university}\n`;
      content += `${edu.duration}\n`;
      if (edu.cgpa) content += `CGPA: ${edu.cgpa}\n`;
      if (edu.score) content += `Achievement: ${edu.score}\n`;
      content += `\n`;
    });

    content += `CERTIFICATIONS & ACHIEVEMENTS\n`;
    certifications.forEach((category: CertificationCategory) => {
      // Type annotation for category
      content += `${category.category}:\n`;
      category.items.forEach((item: string | CertificationItem) => {
        // Type annotation for item
        const itemName = typeof item === "string" ? item : item.name;
        content += `• ${itemName}\n`;
      });
      content += `\n`;
    });

    return content;
  }

  // Download as PDF
  public downloadPDF(): void {
    // Add public access modifier and void return type
    const htmlContent: string = this.generateHTMLContent(); // Type annotation
    const printWindow: Window | null = window.open("", "_blank"); // Type annotation for printWindow
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();

      printWindow.onload = () => {
        printWindow.print();
        printWindow.onafterprint = () => {
          printWindow.close();
        };
      };
    }
  }

  // Download as DOCX
  public downloadDOCX(): void {
    // Add public access modifier and void return type
    const content: string = this.generateTextContent(); // Type annotation
    const blob: Blob = new Blob([content], {
      // Type annotation for blob
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const url: string = URL.createObjectURL(blob); // Type annotation for url
    const a: HTMLAnchorElement = document.createElement("a"); // Type annotation for a
    a.href = url;
    a.download = `${this.data.personalInfo.name.replace(
      /\s+/g,
      "_"
    )}_Resume.docx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// --- React Hook for Resume Download ---
const useResumeDownload = (portfolioData: PortfolioData) => {
  // Type annotation for portfolioData
  const resumeGenerator: ResumeGenerator = new ResumeGenerator(portfolioData); // Type annotation

  const downloadPDF = (): void => {
    // Type annotation for downloadPDF function
    resumeGenerator.downloadPDF();
  };

  const downloadDOCX = (): void => {
    // Type annotation for downloadDOCX function
    resumeGenerator.downloadDOCX();
  };

  return { downloadPDF, downloadDOCX };
};

export { ResumeGenerator, useResumeDownload };
