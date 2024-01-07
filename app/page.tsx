"use client"
import AboutSection from "@/components/about";
import ContactForm from "@/components/contact";
import EducationSection from "@/components/education";
import ExperienceSection from "@/components/experience";
import IntroSection from "@/components/intro";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactForm />
      <h1 className="text-sm mb-5 flex text-center px-5 justify-center gap-y-5">Designed & Developed By Nitesh Agnihotri</h1>
    </main>
  )
}
