'use client';

import React, { useState } from "react";
import { ExternalLink, Users, Calendar, X, Sparkles, FolderGit2, ArrowRight } from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
  selectedSkill?: string | null;
  onClearFilter?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, selectedSkill, onClearFilter }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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

  const getGradient = (id: number) => {
    const gradients = [
      "from-blue-900/60 via-purple-900/40 to-slate-900",
      "from-purple-900/60 via-pink-900/40 to-slate-900",
      "from-emerald-900/60 via-teal-900/40 to-slate-900",
      "from-rose-900/60 via-orange-900/40 to-slate-900",
      "from-indigo-900/60 via-blue-900/40 to-slate-900",
      "from-cyan-900/60 via-sky-900/40 to-slate-900"
    ];
    return gradients[id % gradients.length];
  };

  const getIconColor = (id: number) => {
    const colors = [
      "text-blue-400",
      "text-purple-400",
      "text-emerald-400",
      "text-rose-400",
      "text-indigo-400",
      "text-cyan-400"
    ];
    return colors[id % colors.length];
  };

  const getBorderHover = (id: number) => {
    const borders = [
      "hover:border-blue-500/40",
      "hover:border-purple-500/40",
      "hover:border-emerald-500/40",
      "hover:border-rose-500/40",
      "hover:border-indigo-500/40",
      "hover:border-cyan-500/40"
    ];
    return borders[id % borders.length];
  };

  return (
    <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
            <FolderGit2 className="w-4 h-4" /> Showcased Innovations
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Explore real-world applications featuring clean architecture, responsive layouts, and robust backend integrations.
          </p>
        </div>

        {/* Selected Skill Badge Filter */}
        {selectedSkill && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full shadow-sm">
              <span className="text-sm text-slate-300">
                Filtered by <strong className="text-blue-400">{selectedSkill}</strong>
              </span>
              <button
                onClick={onClearFilter}
                className="p-1 hover:bg-blue-500/20 rounded-full text-slate-400 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
                title="Clear filter"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl max-w-md mx-auto p-8">
            <p className="text-slate-400 text-lg">No projects found using {selectedSkill}.</p>
            <button
              onClick={onClearFilter}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform border-0 cursor-pointer"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-800 transition-all duration-300 ${getBorderHover(
                  project.id
                )}`}
              >
                {/* Visual Header */}
                <div className={`h-48 bg-gradient-to-tr ${getGradient(project.id)} relative p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-slate-900/60 text-slate-300 border border-slate-700/50">
                      {project.company}
                    </span>
                    <Sparkles className={`w-5 h-5 ${getIconColor(project.id)}`} />
                  </div>
                  <div className="z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-300 font-mono mt-1">
                      {project.duration}
                    </p>
                  </div>
                </div>

                {/* Project Brief Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-blue-400" />
                        Team: {project.teamSize}
                      </span>
                      {project.status && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn bg-transparent border-0 cursor-pointer"
                    >
                      <span>Details & Features</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Open live app"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details Modal popup */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative border border-blue-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-250">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800/60 bg-transparent border-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2 block">
              {activeProject.company}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{activeProject.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{activeProject.description}</p>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 mb-6 max-h-48 overflow-y-auto no-scrollbar pr-2">
              {activeProject.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Duration: {activeProject.duration} | Team Size: {activeProject.teamSize}
              </span>
              
              <div className="flex gap-3">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs font-semibold shadow-md transition-colors"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-full border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold bg-transparent cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
