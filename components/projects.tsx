import React from "react";
import ProjectCard from "./project.card";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="md:min-h-screen space-y-12 md:space-y-0 py-20 sm:py-0 pb-10">
      <h1 className="text-center text-2xl md:py-16 sm:text-3xl  font-semibold text-gray-700 uppercase">Personal Projects</h1>
      <div className=" lg:w-10/12 xl:w-10/12 px-10 mx-auto grid gap-16">
        <ProjectCard
          title="ChefCraft"
          description={[
            "Developed an application using Next.js, Node.js, MongoDB, Tailwind CSS",
            "Empowered chefs to create and store personalized recipes with features including title, description, steps, ingredients, and images",
          ]}
          link="https://recipesfrontend.vercel.app/login"
          src={"/recipes.png"}
        />
        <ProjectCard
          title="Fund Allocation System"
          description={[
            "Developed a platform where users can request funds from admin.",
            "Admins can approve or deny requests and provide funds in installments",
            "Requirements : Metamask enabled in the Browser",
            "Technologies Used: Next.js, Tailwind CSS, Solidity, Blockchain",
            "Application is not deployed yet due to IPFS depreciation"
        ]}
          link=""
          src={"/fund.png"}
        />
        <ProjectCard
          title="Fund Raising System"
          description={[
            "Developed a Fund Raising System using Blockchain",
            "Campaigns are verified with the help of anonymous doctors",
            "Requirements : Metamask enabled in the Browser",
            "Technologies Used: Next.js, Tailwind CSS, Solidity, Blockchain"
          ]}
          link="https://donate-ai.vercel.app/"
          src={"/donate.png"}
        />
      </div>
      <div className="text-center flex items-center justify-center py-16">
{/* <span>Github</span> */}
      <Link href={"https://github.com/niteshagnihotri"}>
            <BsGithub className="transition text-4xl ease-in delay-100 cursor-pointer text-[#496685] hover:text-gray-700" />
          </Link>
      </div>
    </div>
  );
}
