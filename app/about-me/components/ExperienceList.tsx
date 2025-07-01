import React from "react";


export default function ExperienceList({ experiencePoints }: { experiencePoints: string[] }) {
    return (
        <ul className="p-1 pl-4 marker:text-blue-300 list-disc list-outside 
                xl:text-lg md:text-base/4 sm:text-base text-sm md:font-medium dark:text-white">
            {
                experiencePoints.map(
                    (experiencePoint, index) =>
                        <ExperinceListItem key={index} item={experiencePoint} />)
            }
        </ul>
    )
}


function ExperinceListItem({ item }: { item: string }) {
    return <li className="py-1 ">{item}</li>
}