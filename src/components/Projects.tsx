import React, { useState } from "react";
import { ExternalLink, Users, Calendar, X } from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
  selectedSkill?: string | null;
  onClearFilter?: () => void;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "In Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.company}
            </p>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Project Info */}
        <div className="mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Team: {project.teamSize}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.duration}
            </span>
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {(showAllFeatures
              ? project.features
              : project.features.slice(0, 3)
            ).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li>
                <button
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="text-blue-600 dark:text-blue-400 text-xs underline hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {showAllFeatures
                    ? "Show less"
                    : `+${project.features.length - 3} more features`}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects, selectedSkill, onClearFilter }) => {
  const filteredProjects = selectedSkill
    ? projects.filter((project) => {
        const skillLower = selectedSkill.toLowerCase();
        
        // Node & Express match NodeJS or ExpressJS or Express
        if (skillLower.includes("node") && skillLower.includes("express")) {
          return project.technologies.some(
            (tech) => {
              const techLower = tech.toLowerCase();
              return techLower.includes("node") || techLower.includes("express");
            }
          );
        }
        
        // Cursor matches Cursor AI, Cursor, etc.
        if (skillLower.includes("cursor")) {
          return project.technologies.some(
            (tech) => tech.toLowerCase().includes("cursor")
          );
        }

        // Material UI matches Material-UI, MUI, Material UI, MaterialUI
        if (skillLower.includes("material") || skillLower.includes("mui")) {
          return project.technologies.some(
            (tech) => {
              const techLower = tech.toLowerCase();
              return techLower.includes("material") || techLower.includes("mui");
            }
          );
        }

        // Default match (sub-string match)
        return project.technologies.some((tech) => {
          const techLower = tech.toLowerCase();
          const normalizedTech = techLower.replace(/js$/, "");
          const normalizedSkill = skillLower.replace(/js$/, "");
          return normalizedTech.includes(normalizedSkill) || normalizedSkill.includes(normalizedTech);
        });
      })
    : projects;

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        {selectedSkill && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/85 rounded-full shadow-sm">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Filtered by <strong className="text-blue-600 dark:text-blue-400">{selectedSkill}</strong>
              </span>
              <button
                onClick={onClearFilter}
                className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Clear filter"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found using {selectedSkill}.</p>
            <button
              onClick={onClearFilter}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
