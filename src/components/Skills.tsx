import React from "react";
import { Code, Shield, Smartphone } from "lucide-react";
import { Skills as SkillsType } from "../types";

interface SkillsProps {
  skills: SkillsType;
}

interface SkillBadgeProps {
  skill: string;
  category: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, category }) => {
  const getSkillIcon = (skill: string, category: string) => {
    if (
      category === "frontend" &&
      (skill.includes("React") || skill.includes("Next"))
    )
      return <Code className="w-4 h-4" />;
    if (category === "tools" && skill.includes("AWS"))
      return <Shield className="w-4 h-4" />;
    if (category === "other" && skill.includes("Android"))
      return <Smartphone className="w-4 h-4" />;
    return null;
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "stateManagement":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "tools":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "testing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <span
      className={`
      inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
      transition-all duration-300 hover:scale-105 cursor-default
      ${getBadgeColor(category)}
    `}
    >
      {getSkillIcon(skill, category)}
      {skill}
    </span>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const formatCategoryName = (category: string) => {
    return category.replace(/([A-Z])/g, " $1").trim();
  };

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise in modern web technologies and development frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {formatCategoryName(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill: string, index: number) => (
                  <SkillBadge key={index} skill={skill} category={category} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
