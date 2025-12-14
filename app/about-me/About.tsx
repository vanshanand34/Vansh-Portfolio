'use client'

import LinkButtons from "../components/LinkButtons";
import { Experience } from "../types";
import ExperienceSection from "./components/Experience";

export function AboutMe() {

    const ayuvyaExperience: Experience = {
        companyName: "Ayuvya Ayurveda",
        startDate: "JULY 2024",
        endDate: "JAN 2024",
        role: "Backend Developer Intern",
        descriptionPoints: [
            "Developed and optimized Django backend and dashboard performance with efficient ORM queries.",
            "Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.",
            "Implemented chat and audio call functionality using Agora services in Django.",
            "Integrated seller APIs to enhance system capabilities."
        ]
    }

    const jtgExperience: Experience = {
        companyName: "Josh Technology Group",
        startDate: "JULY 2025",
        endDate: "Present",
        role: "Associate Software Developer",
        descriptionPoints: [
            // "Worked on developing automation scripts using python, selenium and playwright"
        ]
    }

    const collegeEducation: Experience = {
        companyName: "GTBIT (IPU)",
        startDate: "Nov 2022",
        endDate: "",
        descriptionPoints: ["Founding Vice President of Infinity: Mathematics society of GTBIT",
            "Organised events like Infinity Arena and inter college mathematics based hackathon (Math-e-thon)"
        ],
        role: "B-Tech (IT)"
    }


    return (
        <>
            <div className={`tracking-wide  px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-32`}>
                <div className="p-4 py-8 pt-14 md:py-16" id="intro">

                    <div className="md:text-7xl sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white">
                        Vansh Anand
                    </div>

                    <div className="dark:text-blue-300 text-sky-600 md:text-3xl text-xl py-3 md:py-4">
                        Full Stack Developer
                    </div>

                    <LinkButtons height={16} width={16} />

                    <div className="md:font-medium text-gray-800 dark:text-white 
          xl:text-xl md:text-lg text-base pt-4 sm:pt-2">
                        Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
                    </div>

                </div>

                <div className="flex flex-col gap-6 px-4 py-8 md:py-16" id="experience">
                    <div className="font-bold md:text-6xl sm:text-5xl text-3xl text-gray-800 dark:text-inherit">
                        Work Experience
                    </div>

                    <ExperienceSection experience={jtgExperience} />
                    <ExperienceSection experience={ayuvyaExperience} />
                </div>
                <div className="flex flex-col gap-6 px-4 py-8 md:py-16" id="experience">
                    <div className="font-bold md:text-6xl sm:text-5xl text-3xl text-gray-800 dark:text-inherit">
                        Education
                    </div>

                    <ExperienceSection experience={collegeEducation} />
                </div>


            </div>
        </>
    );
}