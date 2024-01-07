import React from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div className="md:min-h-[70vh] space-y-12 md:space-y-0 pb-10">
      <h1 className="text-center text-2xl md:py-16 sm:text-3xl uppercase">WORK EXPERIENCE</h1>
      <div className="grid gap-y-10 md:grid-cols-2 grid-rows-2 md:w-10/12 lg:w-9/12 mx-auto px-5 sm:px-0">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col space-y-8 p-5 "
        >
          <div className="space-y-1">
            <h1 className="font-semibold flex items-center text-base text-[#586c83]">
              <BsPersonVcardFill className="mr-2" /> Weframetech - Next.js
              Intern
            </h1>
            <h1 className="text-xs">June 2023 - Dec 2023</h1>
          </div>
          <ol className="text-xs sm:text-sm space-y-5 list-disc pl-5">
            <li>
              Collaborated in a team to develop a SaaS product, contributing to
              its successful completion.
            </li>
            <li>
              Led a project while working with Next.js and a headless CMS,
              showcasing multitasking abilities and technical proficiency
            </li>
          </ol>
        </motion.div>
        <div className="hidden md:block" />
        <div className="hidden md:block " />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col space-y-8 p-5 "
        >
          <div className="space-y-1">
            <h1 className="font-semibold flex items-center text-base text-[#586c83]">
              <BsPersonVcardFill className="mr-2" /> Upcred - Reactjs Intern
            </h1>
            <h1 className="text-xs">Aug 2022 - Sept 2022</h1>
          </div>
          <ol className="text-xs sm:text-sm space-y-5 list-disc pl-5">
            <li>
              Used Various Technologies including Next.js, Material UI,
              Bitbucket to optimize existing projects
            </li>
            <li>
              Worked with Co-founder and Senior Developer to optimize websites
              and write clean code from scratch
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
