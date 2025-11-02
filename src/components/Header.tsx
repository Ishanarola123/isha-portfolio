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
} from "lucide-react";
import { NavigationItem } from "../types";
import ResumeDownloadButton from "./resume-generator/ResumeDownloadButton";
import portfolioData from "../data/portfolio.json"; // Adjust path as needed

interface HeaderProps {
  activeSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onSectionClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isMenuOpen,
  onMenuToggle,
  onSectionClick,
}) => {
  const navigation: NavigationItem[] = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Database },
    { id: "education", label: "Education", icon: GraduationCap },
    // { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Akshay Vadchhak
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}

            {/* <div className="desktop-download-wrapper">
              <ResumeDownloadButton
                portfolioData={portfolioData}
                isMobile={false}
              />
            </div> */}
          </div>

          <div className="md:hidden flex items-center space-x-4 mobile-menu-button-wrapper">
            <div className="mobile-download-wrapper">
              <ResumeDownloadButton
                portfolioData={portfolioData}
                isMobile={true}
              />
            </div>
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
