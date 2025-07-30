"use client";

import React, { useState, useEffect } from "react";
import {
  Award,
  Trophy,
  Code2,
  Target,
  Eye,
  ExternalLink,
  X,
} from "lucide-react";

interface CertificationItem {
  name: string;
  image?: string;
  link?: string;
}

interface CertificationCategory {
  category: string;
  items: (string | CertificationItem)[];
}

interface CertificationsProps {
  certifications: CertificationCategory[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // New state for client-side rendering

  // Set isClient to true only after the component mounts on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const openImageModal = (image: string, link?: string) => {
    setSelectedImage(image);
    setSelectedLink(link || null);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedLink(null);
  };

  const isString = (item: string | CertificationItem): item is string => {
    return typeof item === "string";
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Technical")) return <Code2 className="w-6 h-6" />;
    if (category.includes("Competition")) return <Trophy className="w-6 h-6" />;
    if (category.includes("Hackathons")) return <Target className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes("Technical"))
      return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400";
    if (category.includes("Competition"))
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400";
    if (category.includes("Hackathons"))
      return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400";
    return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400";
  };

  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications, competition wins, and notable
            achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index} // Consider using a stable unique ID if available for better performance with list changes
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(
                    cert.category
                  )}`}
                >
                  {getCategoryIcon(cert.category)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cert.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {cert.items.map((item, itemIndex) => {
                  const isStringItem = isString(item);
                  const itemName = isStringItem ? item : item.name;
                  const itemImage = isStringItem ? undefined : item.image;
                  const itemLink = isStringItem ? undefined : item.link;

                  return (
                    <li
                      key={itemIndex} // Consider using a stable unique ID if available
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div className="flex-1">
                        <span className="leading-relaxed block mb-2">
                          {itemName}
                        </span>
                        {itemImage && (
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() =>
                                openImageModal(itemImage, itemLink)
                              }
                              className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-xs"
                            >
                              <Eye className="w-3 h-3" />
                              View Certificate
                            </button>
                            {itemLink && (
                              <a
                                href={itemLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-xs"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Visit Link
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Image Modal: Only render on the client when an image is selected */}
        {isClient && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-w-full max-h-[80vh] object-contain"
              />

              {selectedLink && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                  <a
                    href={selectedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Original Link
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
