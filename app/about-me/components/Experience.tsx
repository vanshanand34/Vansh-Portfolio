import React from "react";
import ExperienceList from "./ExperienceList";
import { Experience } from "@/app/types";

export default function ExperienceSection({ experience }: { experience: Experience }) {
    return (
        // <div className="px-4 py-8 md:py-16" id="experience">
        //     <div className="font-bold md:text-6xl sm:text-5xl text-3xl text-gray-800 dark:text-inherit">
        //         Work Experience
        //     </div>
        <div>
            <div className="flex items-center justify-between sm:gap-2 py-1 md:py-4">
                <div className="font-bold lg:text-4xl md:text-2xl text-base dark:text-blue-300
                     text-sky-700 py-0 sm:py-0">
                    {experience.role}
                </div>

                <div className="font-semibold md:text-base sm:text-sm text-xs dark:text-gray-400 text-gray-500 py-2 sm:py-0">
                    {experience.startDate} {experience.endDate ? "- " + experience.endDate : ""}
                </div>
            </div>

            <div className="md:text-xl font-semibold text-sky-500 py-1">
                {experience.companyName}
            </div>

            <ExperienceList experiencePoints={experience.descriptionPoints} />

        </div>
        // </div>
    )
}
