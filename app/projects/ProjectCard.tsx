import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectCardProps = {
    projectName: string,
    projectDescription: string,
    projectLink: string,
    techStack?: string[]
}



export default function ProjectCard(
    { projectName, projectDescription, projectLink, techStack }: ProjectCardProps
) {
    return <>
        <div
            className="rounded-lg border border-gray-400 shadow 
            hover:shadow-lg  hover:shadow-gray-700 p-3 md:p-4"
        >
            <div className="flex justify-between items-center py-2 sm:py-4">

                <Link href={projectLink}>
                    <div
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-400 hover:text-blue-500"
                    >{projectName}</div>
                </Link>

                <Link href={projectLink} className="text-lg sm:text-2xl hover:text-gray-400">
                    <HiOutlineExternalLink />
                </Link>
            </div>

            <div className="text-xs md:text-sm lg:text-base font-mono font-medium">
                {projectDescription}
            </div>
            
            <div className="flex justify-between items-center gap-x-1 gap-y-2
            p-1 pt-4 max-w-full flex-wrap flex-shrink">
                {techStack?.map( (lang, index) =>
                    <div className="bg-[#272727] p-0.5 px-1.5 sm:px-3 rounded-lg text-xs" key={index}>
                        {lang}
                    </div>
                )}
            </div>

        </div>
    </>
}