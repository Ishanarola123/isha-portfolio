import React from 'react';
import { Award, Trophy, Code2, Target } from 'lucide-react';
import { CertificationCategory } from '../types';

interface CertificationsProps {
  certifications: CertificationCategory[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Technical')) return <Code2 className="w-6 h-6" />;
    if (category.includes('Competition')) return <Trophy className="w-6 h-6" />;
    if (category.includes('Hackathons')) return <Target className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('Technical')) return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
    if (category.includes('Competition')) return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400';
    if (category.includes('Hackathons')) return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400';
    return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
  };

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications, competition wins, and notable achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(cert.category)}`}>
                  {getCategoryIcon(cert.category)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cert.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {cert.items.map((rawItem, itemIndex) => {
                  // support legacy string items and new objects with title and optional url
                  const isString = typeof rawItem === 'string';
                  const title = isString ? rawItem : (rawItem as any).title;
                  const url = isString ? undefined : (rawItem as any).url;

                  return (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leading-relaxed text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {title}
                        </a>
                      ) : (
                        <span className="leading-relaxed">{title}</span>
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