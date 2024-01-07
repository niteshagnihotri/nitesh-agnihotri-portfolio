import React from "react";
import SkillsSlider from "./skills.slider";

export default function SkillsSection() {
  return (
    <div className="md:min-h-screen space-y-12 md:space-y-0 pb-10">
      <h1 className="text-center text-2xl md:py-16 sm:text-3xl uppercase">Skills</h1>
      <div className="grid  sm:grid-cols-2 md:w-10/12 lg:w-9/12 mx-auto px-10 md:px-0 gap-x-10 md:gap-x-28 gap-y-10">
        <SkillsSlider text="C++ / Core Java" value={"50"} className="w-1/2" />
        <SkillsSlider text="Data Structures & Algorithms" value={"40"} className="w-2/5" />
        <SkillsSlider text="Reactjs / Next.js" value={"75"} className="w-3/4" />
        <SkillsSlider text="Nodejs / Express.js" value={"60"} className="w-3/5" />
        <SkillsSlider text="Tailwind CSS" value={"80"} className="w-4/5" />
        <SkillsSlider text="MySQL" value={"75"} className="w-3/4" />
        <SkillsSlider text="Mongodb" value={"40"} className="w-2/5" />
        <SkillsSlider text="Blockchain / Solidity" value={"40"} className="w-2/5" />
      </div>
    </div>
  );
}
