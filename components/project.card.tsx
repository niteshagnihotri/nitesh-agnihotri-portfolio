import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string[];
  link: string;
  src: string;
};

const ProjectCard = ({ title, description, link, src }: Props) => {
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ delay: 0.4 }}
      className="sm:space-y-10 md:space-y-0 grid md:grid-cols-2 gap-10 "
    >
      <div className="space-y-5 md:px-10 my-auto">
        <Link
          href={link}
          target="_blank"
          className="text-base font-semibold tracking-wide hover:text-opacity-75 text-gray-700"
        >
          {title}
        </Link>
        <ol className="list-disc pl-5 text-xs sm:text-sm space-y-5 text-justify">
          {description.map((feature: string, index: number) => {
            return <li key={index}>{feature}</li>;
          })}
        </ol>
      </div>
        {link !== "" ? (
          <Link href={`${link}`} target="_blank">
            {" "}
            <Image
              src={src}
              className="sm:w-3/4 mx-auto md:w-full h-44 sm:h-64 my-auto self-center rounded-md aspect-square object-fill shadow-md"
              alt={title}
              width={500}
              height={500}
            />
          </Link>
        ) : (
          <Image
            src={src}
            className="sm:w-3/4 mx-auto md:w-full h-44 sm:h-64 my-auto self-center rounded-md aspect-square object-fill shadow-md"
            alt={title}
            width={500}
            height={500}
          />
        )}
    </motion.div>
  );
};

export default ProjectCard;
