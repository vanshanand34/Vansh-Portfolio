'use client'

import { JSX, useEffect, useState } from "react"
import Link from "next/link"
import { MdHomeFilled } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineWindow } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


export default function ResponsiveNavbar({ activeElement }: { activeElement: string }):
    JSX.Element {

    const [currTime, setCurrTime] = useState(new Date());

    const getNavStyling = (currNavItem: string): string => {
        return (
            activeElement == currNavItem ?
                "dark:bg-[#2d2d2d] bg-sky-800 dark:outline outline-1 outline-blue-800 dark:outline-0 text-white" :
                "dark:hover:bg-[#2d2d2d] dark:outline-0 outline outline-1 outline-[#0000004d] hover:outline hover:outline-1 dark:hover:outline-gray-600 hover:outline-white"
        )
    }

    useEffect(() => {
        if (document?.readyState == "complete") changeTime();
    }, [])

    function changeTime() {
        setInterval((() => setCurrTime(new Date())), 1000);
    }


    return (
        <>
            <div
                className="fixed text-white flex navbar justify-center
                font-sans font-semibold w-full p-2 py-4 pt-6 z-10">
                <div className="w-full px-3 h-12 text-sm flex justify-center">

                    <div className="dark:bg-[#1e1e1eaa] bg-sky-400 dark:text-inherit text-gray-800
                     dark:border dark:border-[#325bffa3] rounded-xl inline-flex items-center md:justify-between justify-between py-3 md:py-6 px-3 dark:shadow-[1px_1px_5px_#fff1] shadow-[1px_1px_7px_#2d2d2d] md:gap-4 gap-1.5 dark:backdrop-blur-xl">

                        <Link href={"/"}>
                            <div className={`py-1 px-2 rounded-lg cursor-pointer ${getNavStyling("home")}`}>
                                <MdHomeFilled className="text-base" />
                                {/* Home */}
                            </div>
                        </Link>

                        <Link href={"/resume"}>
                            <div className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("resume")}`}>
                                <LuBookMarked className="text-base" />
                                <div className="hidden md:block px-1">
                                    Resume
                                </div>
                            </div>
                        </Link>

                        <Link href={"/projects"}>
                            <div className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("projects")}`}>
                                <MdOutlineWindow className="text-lg" />
                                <div className="hidden md:inline px-1">
                                    Projects
                                </div>
                            </div>
                        </Link>

                        <Link href={"/about-me/"}>
                            <div
                                className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("about-me")}`}
                            >
                                <CgProfile className="text-lg" />
                                <span className="hidden md:inline px-1">
                                    About Me
                                </span>
                            </div>
                        </Link>

                    </div>
                </div >
            </div >

            <div className="p-2 pt-6 md:pt-4 rounded-lg fixed top-[2vh] md:right-[3vw] right-0 sm:right-[1vw] text-black dark:text-white md:text-base text-xs" id="currTime">
                {currTime?.toLocaleTimeString()}
            </div>
        </>
    )
}