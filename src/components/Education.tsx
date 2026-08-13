'use client';

import React from "react";
import { GraduationCap, Calendar, Award, Target } from "lucide-react";
import { Education as EducationType } from "../types";

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">
            <GraduationCap className="w-4 h-4" /> Academic Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100">
            Education
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Academic qualifications and scholastic achievements.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    {edu.certiImage ? (
                      <a
                        href={edu.certiImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-blue-400 hover:underline text-xl transition-colors"
                      >
                        {edu.degree}
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    )}
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-blue-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-slate-400 text-sm mb-4">
                      {edu.university}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-4 text-xs">
                    {edu.cgpa && (
                      <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        <Target className="w-3.5 h-3.5" />
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    
                    {edu.score && (
                      edu.image ? (
                        <a
                          href={edu.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold hover:bg-purple-500/20 transition-colors"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>🏆 Score: {edu.score}</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">
                          <Award className="w-3.5 h-3.5" />
                          <span>🏆 Score: {edu.score}</span>
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
