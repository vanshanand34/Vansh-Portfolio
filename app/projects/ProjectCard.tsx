import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectCardProps = {
    projectName: string,
    projectDescription: string,
    projectLink: string,
}



export default function ProjectCard(
    { projectName, projectDescription, projectLink }: ProjectCardProps
) {
    return <>
        <div
            className="rounded-lg border border-gray-400 shadow 
            hover:shadow-lg  hover:shadow-gray-700 p-3 sm:p-6"
        >
            <div className="flex justify-between items-center gap-2 py-2 sm:py-4">

                <Link href={projectLink}>
                    <div
                        className="text-lg sm:text-2xl font-semibold text-sky-400 hover:text-blue-500"
                    >{projectName}</div>
                </Link>

                <Link href={projectLink} className="text-lg sm:text-2xl hover:text-gray-400">
                    <HiOutlineExternalLink />
                </Link>
            </div>

            <div className="text-xs sm:text-sm md:text-base">
                {projectDescription}
            </div>

        </div>
    </>
}