import Link from "next/link";
import { Geist } from "next/font/google";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectCardProps = {
    projectName: string,
    projectDescription: string,
    projectLink: string,
    techStack?: string[]
}


const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
})


export default function ProjectCard(
    { projectName, projectDescription, projectLink, techStack }: ProjectCardProps
) {
    return <>
        <div
            className={`${geist.className} sm:font-mono rounded-lg tracking-tight border dark:border-[#fff7] border-[#00000069] shadow flex flex-col justify-between
            hover:shadow-lg  dark:hover:shadow-gray-700 p-3 px-4 md:p-4 md:px-6 dark:bg-[#1b1b1b]`}
        >
            <div>
                <div className="flex justify-between items-center py-2 sm:py-4">

                    <Link href={projectLink}>
                        <div
                            className="sm:font-mono text-lg sm:text-xl md:text-2xl font-semibold
                        text-sky-600 hover:text-blue-800 dark:hover:text-blue-500 dark:text-sky-400"
                        >{projectName}</div>
                    </Link>

                    <Link href={projectLink} className="text-lg sm:text-2xl hover:text-gray-400">
                        <HiOutlineExternalLink />
                    </Link>
                </div>

                <div className={`text-sm sm:font-mono md:text-sm lg:text-base`}>
                    {projectDescription}
                </div>
            </div>

            <div className="flex justify-between items-center gap-x-1.5 gap-y-2
            p-1 pt-6 max-w-full flex-wrap flex-shrink font-mono">
                {techStack?.map((lang, index) =>
                    <div className="dark:bg-[#272727] dark:outline-none outline outline-1 
                    outline-sky-500
                    p-0.5 px-1.5 sm:px-3 sm:py-2 rounded-lg text-xs" key={index}>
                        {lang}
                    </div>
                )}
            </div>

        </div>
    </>
}