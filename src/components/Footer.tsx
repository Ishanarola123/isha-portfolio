'use client';

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="font-display font-bold text-lg text-white">
            Isha<span className="text-blue-500">.dev</span>
          </a>
          <p className="text-xs text-slate-400 mt-1">
            Senior Consultant • Crafting Digital Excellence
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
          <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
        </div>

        <div className="text-xs text-slate-500">
          &copy; {currentYear} Isha Narola. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
