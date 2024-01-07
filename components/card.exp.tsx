import React from "react";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col space-y-8 p-5">
      <div className="space-y-1">
        <h1 className="font-semibold">Weframetech - Next.js Intern</h1>
        <h1 className="text-xs">June 2023 - Dec 2023</h1>
      </div>
      <ol className="text-sm space-y-5 list-disc pl-5">
        <li>
          Collaborated in a team to develop a SaaS product, contributing to its
          successful completion.
        </li>
        <li>
          Led a project while working with Next.js and a headless CMS,
          showcasing multitasking abilities and technical proficiency
        </li>
      </ol>
    </div>
  );
};

export default ExperienceCard;
