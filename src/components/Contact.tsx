import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { PersonalInfo } from "../types";

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss opportunities to work together. I&apos;m always
            interested in new projects and collaborations.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
          <div className="w-full max-w-md space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
