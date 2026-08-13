'use client';

import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Experience as ExperienceType, Internship as InternshipType } from '../types';

interface ExperienceProps {
  experience: ExperienceType;
  internships?: InternshipType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience, internships }) => {
  return (
    <section id="experience" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-purple-400 uppercase mb-3">
            <Briefcase className="w-4 h-4" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Delivering high-impact solutions, scoping project architectures, and managing client collaborations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {/* Main Experience */}
          <div className="relative group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-900 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/50"></div>
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{experience.position}</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      Full-Time
                    </span>
                  </h3>
                  <p className="text-blue-400 font-medium text-sm">{experience.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.duration}
                </span>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-xs text-blue-400 mb-4 uppercase tracking-widest border-b border-slate-800 pb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xs text-purple-400 mb-4 uppercase tracking-widest border-b border-slate-800 pb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    {experience.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0"></span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Internships Node */}
          {internships && internships.map((intern, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-purple-600 border-4 border-slate-900 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/50"></div>
              
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{intern.position}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                        Internship
                      </span>
                    </h3>
                    <p className="text-purple-400 font-medium text-sm">{intern.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {intern.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;