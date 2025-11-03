import React, { useState } from "react";
import { ExternalLink, Users, Calendar } from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
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

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
