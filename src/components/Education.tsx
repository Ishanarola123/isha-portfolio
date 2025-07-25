import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {edu.university}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      📅 {edu.duration}
                    </span>
                    {edu.cgpa && (
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        🎯 CGPA: {edu.cgpa}
                      </span>
                    )}
                    {edu.score && (
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        🏆 Score: {edu.score}
                      </span>
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