import React from "react";
import { motion } from "framer-motion";

export default function SkillsSlider({
  text,
  value,
  className,
}: {
  text: string;
  value: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.3 }}
      className="space-y-3"
    >
      <h1 className="text-sm font-medium">{text}</h1>
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className={
            "bg-[#7b95b3] text-xs font-semibold text-[#f3f8ff] text-center p-0.5 leading-none rounded-l-full " +
            className
          }
        >
          {value} %
        </div>
      </div>
    </motion.div>
  );
}
