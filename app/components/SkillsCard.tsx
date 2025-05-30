import { useEffect, JSX, useState } from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaPython,
    FaJava,
    FaCuttlefish
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiExpress, SiMongodb, SiMysql, SiCplusplus } from 'react-icons/si';




export function SkillCard({
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


    const skillIcons: { [key: string]: JSX.Element } = {
        HTML: <FaHtml5 color="#e34c26" />,
        CSS: <FaCss3Alt color="#264de4" />,
        Javascript: <FaJs color="#f0db4f" />,
        ReactJs: <FaReact color="#61DBFB" />,
        Typescript: <SiTypescript color="#007acc" />,
        NextJs: <SiNextdotjs color="black" />,
        Bootstrap: <FaBootstrap color="#563d7c" />,
        Tailwind: <SiTailwindcss color="#38bdf8" />,
        Django: <SiDjango color="#092e20" />,
        NodeJs: <FaNodeJs color="#68a063" />,
        ExpressJs: <SiExpress color="black" />,
        MongoDB: <SiMongodb color="#4DB33D" />,
        MySQL: <SiMysql color="#00758F" />,
        C: <FaCuttlefish color="#555555" />, // Approximation for C
        "C++": <SiCplusplus color="#00599C" />,
        Python: <FaPython color="#306998" />,
        Java: <FaJava color="#f89820" />
    };




    useEffect(() => {
        if (openDropdownId != id) {
            setIsCollapsed(true);
        } else {
            setIsCollapsed(prev => {
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
                        <svg className={`w-2 h-2 text-gray-800 transition-all dark:text-sky-300 ${isCollapsed ? "" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                    </div>
                </div>
                <div className={`skills-card animate-jump-in shadow-lg outline outline-1 outline-[#1a81ffc5] p-6 py-8 absolute z-10 w-[102%] top-[120%]  -left-0.5  bg-white dark:bg-[#1d1d1d] 
          text-gray-700 dark:text-white rounded-md ${isCollapsed ? "hidden" : "flex gap-x-6 gap-y-6 flex-wrap justify-center"}`}>
                    {
                        skills.map(
                            (skill, index) => (
                                <div key={index} className="grow basis-1/5 rounded flex-1 outline outline-1 p-2 flex 
                                outline-[#079cffce]  dark:outline-[#ffffff3b] flex-col items-center text-5xl ">

                                    <div className='pt-2 text-xl md:text-4xl'>{skillIcons[skill]} </div>
                                    <div className='pt-2 text-[0.2em] md:text-sm' >{skill}</div>
                                </div>

                            )
                        )
                    }
                </div>
            </div>
        </div>
    )

}