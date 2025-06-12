import React from "react";
import ExperienceList from "./ExperienceList";

export default function ExperienceSection( {experiencePoints} : {experiencePoints: string[]} ) {
    return (
        <div className="px-4 py-8 md:py-16" id="experience">
            <div className="font-bold md:text-6xl text-4xl text-gray-800 dark:text-inherit">
                Work Experience
            </div>
            <div className="">
                <div className="sm:flex items-center justify-between gap-2 py-2 md:py-6">
                    <div className="font-bold lg:text-3xl md:text-2xl text-base dark:text-blue-300
                     text-sky-700 py-1 sm:py-0">
                        Ayuvya Ayurveda
                    </div>

                    <div className="font-semibold md:text-lg text-base dark:text-gray-400 text-gray-500 py-2 sm:py-0">
                        JULY 2024 - JAN 2025
                    </div>
                </div>

                <div className="md:text-xl font-semibold text-sky-500 py-1">
                    Backend Developer Intern
                </div>

                <ExperienceList experiencePoints={experiencePoints}/>

            </div>
        </div>
    )
}
