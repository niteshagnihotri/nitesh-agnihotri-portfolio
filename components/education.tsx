import React from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <div className="md:min-h-[70vh] space-y-12 md:space-y-0 pb-20">
      <h1 className="text-center text-2xl md:py-16 font-semibold text-gray-700 sm:text-3xl uppercase ">Education</h1>
      <div className="grid gap-10 md:grid-cols-2 grid-rows-2 md:w-10/12 lg:w-9/12 mx-auto px-5 sm:px-0 ">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="px-5 sm:p-5"
        >
          <div className="space-y-1 text-sm md:text-right">
            <h1 className="font-semibold flex items-center text-base text-[#586c83] md:justify-end ">
              <BsPersonVcardFill className="mr-2" /> B.Tech. CSE
              
            </h1>
            <h1 >Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, M.P, India</h1>
            <h1>2020 - 2024</h1>
          </div>
          
        </motion.div>
        <div className="hidden md:block" />
        <div className="hidden md:block " />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col space-y-8 px-5 sm:p-5 "
        >
          <div className="space-y-1 text-sm">
            <h1 className="font-semibold flex items-center text-base text-[#586c83]">
              <BsPersonVcardFill className="mr-2" /> Senior Secondary
            </h1>
            <h1 >Ebenezer Senior Secondary School, Dewas, M.P, India</h1>
            <h1>2020 - 2024</h1>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
