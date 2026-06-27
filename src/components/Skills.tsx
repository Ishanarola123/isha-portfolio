import React, { useState } from "react";
import { Skills as SkillsType } from "../types";

interface SkillsProps {
  skills: SkillsType;
  selectedSkill?: string | null;
  onSelectSkill?: (skill: string) => void;
}

interface MainSkill {
  name: string;
  key: string;
  isPrimary?: boolean;
  borderColorClass: string;
  glowClass: string;
  textColor: string;
  bgClass: string;
  activeClass: string;
  icon: React.ReactNode;
}

const Skills: React.FC<SkillsProps> = ({ skills, selectedSkill, onSelectSkill }) => {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const mainSkills: MainSkill[] = [
    {
      name: "React",
      key: "React",
      isPrimary: true,
      borderColorClass: "border-sky-500/20 hover:border-sky-400 focus:border-sky-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] shadow-sky-500/10",
      textColor: "text-sky-400",
      bgClass: "bg-sky-500/5 hover:bg-sky-500/10",
      activeClass: "border-sky-400 ring-2 ring-sky-400/30 bg-sky-500/15 shadow-[0_0_25px_rgba(56,189,248,0.5)]",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-[#61dafb] fill-none stroke-current" strokeWidth="1.2">
          <circle cx="0" cy="0" r="2.05" className="fill-current" />
          <g>
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "NextJS",
      key: "Next",
      borderColorClass: "border-slate-700/40 hover:border-slate-200 focus:border-slate-200",
      glowClass: "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] shadow-slate-700/10",
      textColor: "text-slate-100",
      bgClass: "bg-slate-800/10 hover:bg-slate-800/20",
      activeClass: "border-slate-200 ring-2 ring-slate-200/30 bg-slate-800/20 shadow-[0_0_25px_rgba(255,255,255,0.35)]",
      icon: (
        <svg viewBox="0 0 180 180" className="w-12 h-12 fill-current text-white bg-black rounded-full p-1 border border-gray-800">
          <path d="M140 135.5L81.2 59H70v62h8.3v-49.4l49.9 64.9c4.2-3.8 8-8.1 11.8-11zM113.3 59h8.3v62h-8.3z" />
        </svg>
      )
    },
    {
      name: "Tailwind",
      key: "Tailwind",
      borderColorClass: "border-cyan-500/20 hover:border-cyan-400 focus:border-cyan-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] shadow-cyan-500/10",
      textColor: "text-cyan-400",
      bgClass: "bg-cyan-500/5 hover:bg-cyan-500/10",
      activeClass: "border-cyan-400 ring-2 ring-cyan-400/30 bg-cyan-500/15 shadow-[0_0_25px_rgba(6,182,212,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#38bdf8]">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )
    },
    {
      name: "MUI",
      key: "Material",
      borderColorClass: "border-blue-500/20 hover:border-blue-400 focus:border-blue-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] shadow-blue-500/10",
      textColor: "text-blue-400",
      bgClass: "bg-blue-500/5 hover:bg-blue-500/10",
      activeClass: "border-blue-400 ring-2 ring-blue-400/30 bg-blue-500/15 shadow-[0_0_25px_rgba(59,130,246,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#007fff]">
          <path d="M0 2.475v19.05L12 24V14.55L0 2.475zM12 0v9.45L24 21.525V2.475L12 0z" />
        </svg>
      )
    },
    {
      name: "Node-Express",
      key: "Express",
      borderColorClass: "border-green-500/20 hover:border-green-400 focus:border-green-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] shadow-green-500/10",
      textColor: "text-green-400",
      bgClass: "bg-green-500/5 hover:bg-green-500/10",
      activeClass: "border-green-400 ring-2 ring-green-400/30 bg-green-500/15 shadow-[0_0_25px_rgba(34,197,94,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#339933]">
          <path d="M12 0L3.13 5.12v10.24L12 20.48l8.87-5.12V5.12L12 0zm5.96 14.28L12 17.72l-5.96-3.44V7.4l5.96-3.44 5.96 3.44v6.88z" />
          <path d="M12 6.5l2 2-1 3h-2l-1-3 2-2z" className="text-white dark:text-gray-900 fill-current" />
        </svg>
      )
    },
    {
      name: "Docker",
      key: "Docker",
      borderColorClass: "border-sky-600/20 hover:border-sky-500 focus:border-sky-500",
      glowClass: "hover:shadow-[0_0_20px_rgba(14,165,233,0.35)] shadow-sky-600/10",
      textColor: "text-sky-400",
      bgClass: "bg-sky-500/5 hover:bg-sky-500/10",
      activeClass: "border-sky-500 ring-2 ring-sky-500/30 bg-sky-500/15 shadow-[0_0_25px_rgba(14,165,233,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#2496ed]">
          <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.12v-2.006h-2.12v2.006zm-2.737 0h2.119v-2.006H5.772v2.006zm-.004-2.228h2.119V6.844H5.768v2.006zm2.737 0h2.119V6.844h-2.119v2.006zm2.737 0h2.12V6.844h-2.12v2.006zm2.737 0h2.119V6.844h-2.119v2.006zm-5.474-2.231h2.119V4.62H8.504v1.997zm2.737 0h2.12V4.62h-2.12v1.997zM20.614 9.61c-.08-.03-.189-.05-.297-.05-.09 0-.178.01-.262.03-.456.09-.904.38-1.25.79-.34.4-.555.93-.615 1.5l-.01.07h.036c.075-.01.157-.02.247-.02.662 0 1.25.43 1.488 1.05.24.62.083 1.32-.387 1.77-.07.07-.15.13-.23.19.12.35.31.67.57.94.39.41.9.68 1.48.79.09.02.18.03.28.03.11 0 .22-.01.32-.03l.36-.08.12-.35c.65-1.92.35-4.04-.84-5.69l-.02-.03-.02-.01zM24 12.5c-.32 1.34-1.27 2.45-2.52 3.12-.34.18-.7.31-1.07.41a8.47 8.47 0 01-1.42.14 7.6 7.6 0 01-2.92-.61 7.15 7.15 0 01-2.45-1.94c-.21-.26-.39-.55-.54-.86-.15-.31-.26-.64-.32-.97L13 12h-.03l-.01-.01c-.13-.37-.32-.72-.56-1.03l-.1-.13-.16.03c-.22.04-.44.07-.67.09-.23.02-.46.02-.69.02h-.8v1.98h-1.98v-1.98h-1.98V14h-1.98v-1.98H2v2.96c0 .48.06.95.18 1.4l.08.28.27.12c1.37.59 2.9.72 4.33.37 1.43-.35 2.68-1.24 3.49-2.48.05-.08.1-.16.14-.24l.04-.08h.09c.47 0 .91.13 1.3.36.39.23.71.55.94.94.34.58.53 1.23.53 1.89v.03h6.92c.67.01 1.34-.11 1.97-.37.63-.26 1.2-.64 1.67-1.12.47-.48.83-1.06 1.05-1.69.22-.63.31-1.3.26-1.97l-.01-.35-.35.08z" />
        </svg>
      )
    },
    {
      name: "Redis",
      key: "Redis",
      borderColorClass: "border-red-500/20 hover:border-red-400 focus:border-red-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(239,68,68,0.35)] shadow-red-500/10",
      textColor: "text-red-400",
      bgClass: "bg-red-500/5 hover:bg-red-500/10",
      activeClass: "border-red-400 ring-2 ring-red-400/30 bg-red-500/15 shadow-[0_0_25px_rgba(239,68,68,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#d82c20]">
          <path d="M12 0L1.5 5.5l10.5 5.5 10.5-5.5L12 0zm0 13l-9.5-5v3.5L12 17l9.5-5.5V8L12 13zm0 6.5l-9.5-5v3.5l9.5 5.5 9.5-5.5v-3.5l-9.5 5z" />
        </svg>
      )
    },
    {
      name: "Cursor",
      key: "Cursor",
      borderColorClass: "border-purple-500/20 hover:border-purple-400 focus:border-purple-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] shadow-purple-500/10",
      textColor: "text-purple-400",
      bgClass: "bg-purple-500/5 hover:bg-purple-500/10",
      activeClass: "border-purple-400 ring-2 ring-purple-400/30 bg-purple-500/15 shadow-[0_0_25px_rgba(168,85,247,0.5)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current text-purple-400" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" className="fill-current" />
          <path d="M14 3l1 2.5L17.5 6 15 7l-1 2.5L13 7l-2.5-1 2.5-1.5z" className="text-pink-400 fill-current" />
        </svg>
      )
    }
  ];

  const tabGroups = [
    { id: "frontend", label: "Frontend & State", categories: ["frontend", "stateManagement"] },
    { id: "backend", label: "Backend & DevOps", categories: ["tools", "backendIntegration", "cloudAndDeployment"] },
    { id: "architecture", label: "Architecture & Performance", categories: ["architecture", "performanceAndOptimization"] },
    { id: "pm_ai", label: "PM & AI Tools", categories: ["projectManagement", "testing", "aiTools"] },
    { id: "others", label: "Others & OS", categories: ["other", "os"] }
  ];

  const formatCategoryName = (category: string) => {
    const specialNames: Record<string, string> = {
      aiTools: "AI Tools",
      stateManagement: "State Management",
      os: "Operating Systems",
      backendIntegration: "Backend Integration",
      cloudAndDeployment: "Cloud & Deployment",
      performanceAndOptimization: "Performance & Optimization",
      projectManagement: "Project Management"
    };

    if (specialNames[category]) return specialNames[category];

    return category
      .replace(/([A-Z])/g, " $1")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Skills Universe Box */}
        <div className="bg-[#0b0914] text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-950/40 relative overflow-hidden mb-12">
          {/* Cosmic background effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Skills Universe
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Interactive showcase of my core technologies. Click a card to filter my featured projects!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
            {mainSkills.map((skill) => {
              const isSelected = selectedSkill === skill.key;
              return (
                <button
                  key={skill.name}
                  onClick={() => onSelectSkill?.(skill.key)}
                  className={`
                    group flex flex-col items-center justify-center p-6 rounded-2xl border text-center relative
                    transition-all duration-300 cursor-pointer select-none outline-none
                    ${skill.bgClass} ${skill.borderColorClass} ${skill.glowClass}
                    ${isSelected ? skill.activeClass : ""}
                  `}
                >
                  {/* Primary Pulsing Badge */}
                  {skill.isPrimary && (
                    <span className="absolute top-3 right-3 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      Primary
                    </span>
                  )}

                  {/* Icon wrapper */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <span className={`text-base font-bold tracking-wide transition-colors ${skill.textColor}`}>
                    {skill.name}
                  </span>

                  {/* Selection indicator dots */}
                  {isSelected && (
                    <span className="absolute bottom-3 w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Skills Browser */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 border border-gray-200/80 dark:border-gray-700 shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              All Technical Expertise
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Browse the complete inventory of my engineering capabilities
            </p>
          </div>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-5">
            {tabGroups.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300
                  ${activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {tabGroups
              .find((t) => t.id === activeTab)
              ?.categories.map((category) => {
                const skillList = (skills as any)[category] || [];
                if (skillList.length === 0) return null;
                
                return (
                  <div
                    key={category}
                    className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="text-base font-extrabold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 uppercase tracking-wider text-xs">
                      {formatCategoryName(category)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-[1.03] hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
