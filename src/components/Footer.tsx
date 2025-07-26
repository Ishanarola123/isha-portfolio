import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Isha Narola</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Software Engineer passionate about creating scalable web applications 
              with modern technologies and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Skills Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['ReactJS', 'NextJS', 'TypeScript', 'Node.js', 'AWS', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
              <span>by Isha Narola</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © {currentYear} Isha Narola. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;