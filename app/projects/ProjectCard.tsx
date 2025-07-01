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
            className={`rounded-lg border dark:border-[#ffffff1a] border-[#00000023] 
            flex flex-col justify-between
            shadow-lg dark:shadow-[#000000] p-3 px-4 md:p-4 md:px-6 dark:bg-[#252525]`}
        >
            <div>
                <div className="flex justify-between items-center py-2 sm:py-4">

                    <Link href={projectLink}>
                        <div
                            className="text-lg sm:text-xl md:text-2xl font-semibold
                        text-sky-600 hover:text-blue-800 dark:hover:text-blue-500 dark:text-sky-400"
                        >{projectName}</div>
                    </Link>

                    <Link href={projectLink} className="text-lg sm:text-2xl hover:text-gray-400">
                        <HiOutlineExternalLink />
                    </Link>
                </div>

                <div className={`text-sm md:text-sm lg:text-base`}>
                    {projectDescription}
                </div>
            </div>

            <div className="flex justify-between items-center gap-x-1.5 gap-y-2
            p-1 pt-6 max-w-full flex-wrap flex-shrink ">
                {techStack?.map((lang, index) =>
                    <div className="dark:bg-[#1e1e1e] dark:outline-none outline outline-1 
                    outline-sky-500
                    p-0.5 px-1.5 sm:px-3 sm:py-2 rounded-lg text-xs" key={index}>
                        {lang}
                    </div>
                )}
            </div>

        </div>
    </>
}