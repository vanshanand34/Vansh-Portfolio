'use client'

import Link from "next/link";
import ParentLayout from "./ParentLayout";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";
import {  useState } from "react";
import { SkillCard } from "./components/SkillsCard";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

export default function HomePage() {
  return (
    <ParentLayout ChildComponent={<HomePageComponent />} elementName="home" />
  )
}

function HomePageComponent() {
  const frontendSkills = ["HTML", "CSS", "Javascript", "ReactJs", "Typescript", "NextJs", "Bootstrap", "Tailwind"];
  const backendSkills = ["Django", "NodeJs", "ExpressJs"];
  const database = ["MongoDB", "MySQL"];
  const programmingLang = ["C", "C++", "Python", "Java"];

  const [openDropdownId, setOpenDropDownId] = useState('');

  function handleClick(e: React.MouseEvent) {
    const element: HTMLElement = e.target as HTMLElement;
    const dropdownElement = element.closest(".dropdown");

    if (dropdownElement) {
      setOpenDropDownId(prev => dropdownElement.id == prev ? '' : dropdownElement.id);
    } else {
      setOpenDropDownId('');
    }
  }


  return (
    <>
      <div className={`${geist.className} px-10 sm:px-20 md:px-38 lg:px-56 xl:px-64 pt-32 pb-6 md:pt-44`}
        onClick={handleClick} >
        <div className="text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 text-gray-800 font-bold sm:font-mono py-4 pt-8">
          <div>Full Stack Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-xl text-base text-sky-800 dark:text-[#71b5d2] text-bold sm:font-mono py-4">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <div className="py-4 pb-20">
          <button className="outline outline-1 dark:outline-sky-900 dark:hover:bg-[#343434]
          outline-sky-500 hover:outline-none hover:bg-sky-700 hover:text-white dark:hover:outline-none
          rounded-lg md:text-lg px-3 py-2">
            <Link href={"/about-me"}>
              About Me
            </Link>
          </button>
        </div>

        <div className="py-12 pb-48 pr-2 md:pr-0">
          <div className="py-4 pb-8 text-2xl sm:text-3xl md:text-5xl font-bold dark:text-gray-200 text-gray-800">
            Technical Skills
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 auto-cols-[1fr] gap-x-8 gap-y-6 py-6">
            <SkillCard
              skills={frontendSkills}
              skillType="Frontend"
              id="frontend"
              openDropdownId={openDropdownId}

            />
            <SkillCard
              skills={backendSkills}
              skillType="Backend"
              id="backend"
              openDropdownId={openDropdownId}
            />
            <SkillCard
              skills={programmingLang}
              skillType="Programming Languages"
              id="progLanguage"
              openDropdownId={openDropdownId}
            />
            <SkillCard
              skills={database}
              skillType="Database"
              id="database"
              openDropdownId={openDropdownId}
            />

          </div>
        </div>


        <Footer />
      </div>
    </>
  );
}

