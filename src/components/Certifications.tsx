'use client';

import React from "react";
import { Award, Trophy, Code2, Target } from "lucide-react";
import { CertificationCategory } from "../types";

interface CertificationsProps {
  certifications: CertificationCategory[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Technical")) return <Code2 className="w-5 h-5" />;
    if (category.includes("Competition")) return <Trophy className="w-5 h-5" />;
    if (category.includes("Hackathons")) return <Target className="w-5 h-5" />;
    return <Award className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes("Technical"))
      return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    if (category.includes("Competition"))
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    if (category.includes("Hackathons"))
      return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
    return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
  };

  return (
    <section id="certifications" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            <Award className="w-4 h-4" /> Credentials & Achievements
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Professional milestones, state-level coding contest wins, and achievements.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getCategoryColor(
                    cert.category
                  )}`}
                >
                  {getCategoryIcon(cert.category)}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {cert.category}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-4">
                {cert.items.map((rawItem, itemIndex) => {
                  const isString = typeof rawItem === "string";
                  const title = isString ? rawItem : (rawItem as any).title;
                  const url = isString ? undefined : (rawItem as any).url;
                  const image = isString ? undefined : (rawItem as any).image;

                  return (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>

                      {image ? (
                        <div className="flex flex-col gap-1">
                          {url ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                            >
                              {title}
                            </a>
                          ) : (
                            <a
                              href={image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                            >
                              {title}
                            </a>
                          )}
                        </div>
                      ) : url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                        >
                          {title}
                        </a>
                      ) : (
                        <span>{title}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
