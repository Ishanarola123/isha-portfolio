import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {experience.position} at {experience.company} ({experience.duration})
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.position}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {experience.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {experience.duration}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Achievements:
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;