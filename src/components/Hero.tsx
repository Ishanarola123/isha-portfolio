import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, BarChart3, Sparkles } from "lucide-react";
import { PersonalInfo } from "../types";

interface HeroProps {
  personalInfo: PersonalInfo;
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, isLoaded }) => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>

          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {personalInfo.summary}
          </p>

          {/* Highlight Badges for Senior Consultant Role */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl mx-auto">
            <span className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800/50 shadow-sm transition-transform hover:scale-105">
              <MessageSquare className="w-4 h-4" />
              Client Communication
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-100 dark:border-purple-800/50 shadow-sm transition-transform hover:scale-105">
              <BarChart3 className="w-4 h-4" />
              Project Estimation & Scope
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-800/50 shadow-sm transition-transform hover:scale-105">
              <Sparkles className="w-4 h-4" />
              Technical Leadership
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </div>
            )}

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Surat, Gujarat, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
