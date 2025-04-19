import React from "react";
import SkillsSlider from "./skills.slider";
import SkillBadgeComponent from "./skillbadge";

export default function SkillsSection() {
  const fullStackSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
    "Bitbucket",
  ];

  const addOnSkills = [
    "DevOps practices",
    "Docker",
    "Redux",
    "Zustand",
    "Data Structures and Algorithms",
  ];

  return (
    <div className="md:min-h-screen space-y-12 md:space-y-0 pb-20">
      <h1 className="text-center text-2xl md:py-16 sm:text-3xl font-semibold text-gray-700 uppercase">
        Skills
      </h1>
      <div className="md:w-10/12 lg:w-9/12 mx-auto px-10 md:px-0 text-lg">
        <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="font-mono">Programming Language: </h3>
            <SkillBadgeComponent text="Java" />
          </div>
          <div className="space-y-2">
            <h3 className="font-mono">Full Stack Development:</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {fullStackSkills.map((skill, index) => (
                <SkillBadgeComponent key={index} text={skill} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
          <h3 className="font-mono">Additional Skills:</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {addOnSkills.map((skill, index) => (
                <SkillBadgeComponent key={index} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
