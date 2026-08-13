'use client';

import React from "react";
import {
  User,
  Code,
  Briefcase,
  Database,
  GraduationCap,
  Award,
  Menu,
  X,
  Download,
  Bot,
} from "lucide-react";
import { NavigationItem } from "../types";

interface HeaderProps {
  activeSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onSectionClick: (sectionId: string) => void;
  onToggleAiChat: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isMenuOpen,
  onMenuToggle,
  onSectionClick,
  onToggleAiChat,
}) => {
  const navigation: NavigationItem[] = [
    { id: "home", label: "Home", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Database },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl">
        {/* Brand Logo */}
        <button onClick={() => onSectionClick("home")} className="flex items-center gap-3 group bg-transparent border-0 cursor-pointer outline-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-display font-bold text-lg text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
            IN
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-white group-hover:text-blue-400 transition-colors">
            Isha<span className="text-blue-500">.dev</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 bg-transparent border-0 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleAiChat}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 transition-all flex items-center gap-1.5 group shadow-sm bg-transparent cursor-pointer"
          >
            <Bot className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          <a
            href="/cv/CV-Isha Narola.pdf"
            download="CV-Isha Narola.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden text-slate-300 hover:text-white p-2 bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 glass-panel rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-4 font-medium text-slate-200">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`flex items-center gap-2 w-full py-2 border-b border-slate-800/50 text-left bg-transparent border-0 cursor-pointer transition-colors ${
                    activeSection === item.id ? "text-blue-400 font-bold" : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
            <a
              href="/cv/CV-Isha Narola.pdf"
              download="CV-Isha Narola.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onMenuToggle}
              className="flex items-center gap-2 w-full py-2 text-slate-300 hover:text-white font-medium"
            >
              <Download className="w-4 h-4 text-blue-400" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
