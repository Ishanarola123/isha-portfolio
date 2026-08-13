'use client';

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Rocket, FileText, ArrowRight } from "lucide-react";
import { PersonalInfo } from "../types";

interface HeroProps {
  personalInfo: PersonalInfo;
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, isLoaded }) => {
  const roles = [
    "Senior Consultant",
    "React & Next.js Specialist",
    "Technical Delivery Lead",
    "Solutions Architect"
  ];

  const [currentRoleText, setCurrentRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timer = setTimeout(() => {}, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-8 animate-float">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-5"></span>
          <span>Available for Senior Consultant & Technical Leadership Roles</span>
        </div>

        {/* Profile Avatar with Neon Atmosphere */}
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-900 border-2 border-blue-400/50 flex items-center justify-center text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-purple-300 to-cyan-300 shadow-2xl">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
            <span className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-xs text-white shadow-md">
              🤝
            </span>
          </div>
        </div>

        {/* Name and Dynamic Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-4 text-white">
          Hi, I'm <span className="text-gradient">{personalInfo.name.trim()}</span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-slate-300 h-10 mb-6 flex items-center justify-center">
          <span className="text-blue-400 font-semibold">{currentRoleText}</span>
          <span className="w-[2px] h-6 sm:h-7 bg-blue-400 ml-1.5 animate-pulse inline-block align-middle"></span>
        </div>

        {/* Bio Description */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed mb-10 text-balance">
          {personalInfo.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            <span>Explore Featured Work</span>
          </a>

          <a
            href="/cv/CV-Isha Narola.pdf"
            download="CV-Isha Narola.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full glass-card hover:bg-slate-800/80 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Download CV</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Highlights Stats Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800/80">
          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-cyan mb-1">3+</div>
            <div className="text-xs sm:text-sm text-slate-400">Years Consulting & Dev</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">10+</div>
            <div className="text-xs sm:text-sm text-slate-400">Enterprise Applications</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-slate-400">Client satisfaction</div>
          </div>
          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-display font-bold text-purple-400 mb-1">20+</div>
            <div className="text-xs sm:text-sm text-slate-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
