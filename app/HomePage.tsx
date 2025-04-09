'use client'

import Link from "next/link";
import ParentLayout from "./ParentLayout";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


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
    // console.log(dropdownElement?.id);
    if (dropdownElement) {
      setOpenDropDownId(prev => dropdownElement.id == prev ? '' : dropdownElement.id);
    } else {
      setOpenDropDownId('');
    }
  }


  return (
    <>
      <div className="px-10 sm:px-20 md:px-38 lg:px-56 xl:px-64 pt-28 pb-6 md:pt-44"
        onClick={handleClick} >
        <div className="text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 text-gray-800 font-bold font-mono py-4 pt-8">
          <div>Full Stack Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-xl text-base text-[#1d7ba3] text-bold  font-mono py-4">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <div className="py-4 pb-20">
          <button className="outline outline-1 dark:outline-sky-600 dark:hover:bg-[#343434]
          outline-sky-500 hover:outline-none hover:bg-sky-400 hover:text-white dark:hover:outline-none
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


function SkillCard({
  skills,
  skillType,
  id,
  openDropdownId,
}:
  {
    skills: string[],
    skillType: string,
    id: string,
    openDropdownId: string,
  }
) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // console.log(openDropdownId);
    if (openDropdownId != id) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(prev => {
        // console.log(prev);
        return !prev
      });
    }
  }, [openDropdownId])

  return (
    <div className="dropdown relative outline outline-1 outline-sky-500 dark:outline-sky-400 
      text-black dark:text-white shadow py-3 px-1 rounded-lg cursor-pointer" id={id} >
      <div
        className="p-2"
        defaultValue={skillType}
      >

        <div className="flex items-center justify-between">
          <div className="text-sm sm:text-base md:text-lg px-4">{skillType}
          </div>
          <div className="px-4">
            <svg className={`w-2 h-2 text-gray-800 dark:text-sky-300 ${isCollapsed ? "" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
            </svg>
          </div>
        </div>
        <div className={`absolute z-10 w-[100%] top-[120%] left-0 bg-white dark:bg-[#1d1d1d] 
          text-gray-700 dark:text-white shadow-[1px_1px_8px_#000000] rounded-md ${isCollapsed ? "hidden" : "block"}`}>
          {
            skills.map(
              (skill, index) => (
                <div key={index} className="px-2 py-2">
                  {skill}
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )

}