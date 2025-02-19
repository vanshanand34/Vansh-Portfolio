'use client'

import { JSX, useEffect, useState } from "react"
import Link from "next/link"

export default function ResponsiveNavbar({ activeElement }: { activeElement: string }):
    JSX.Element {

    const [currTime, setCurrTime] = useState(new Date());

    const getNavStyling = (currNavItem: string): string => {
        return (
            activeElement == currNavItem ?
                "bg-gray-800 outline outline-1 outline-gray-600" :
                "hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-600"
        )
    }

    useEffect(() => {
        // console.log(document.readyState, typeof window);
        if (document?.readyState == "complete") changeTime();
    }, [])

    function changeTime() {
        setInterval((() => setCurrTime(new Date())), 1000);
    }
    // document.onload = () => changeTime();

    return (
        <>
            <div className="text-white flex navbar justify-center  font-sans font-semibold">
                <div className="w-full px-3 md:h-[7vh] text-sm flex justify-center">

                    <div className="fixed bg-[#1f1f1f] my-4 border border-blue-300 rounded-xl inline-flex items-center md:justify-between justify-between py-2 px-2 shadow-[1px_1px_5px_#1a1a1a] md:gap-4 gap-1">

                        <Link href={"/"}>
                            <div className={`py-1 px-2 rounded-lg cursor-pointer ${getNavStyling("home")}`}>
                                {/* home */}

                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg>
                            </div>
                        </Link>

                        <Link href={"/resume"}>
                            <div className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("resume")}`}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32h40v96l32-24,32,24V32Z" opacity="0.2"></path><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM120,40h48v72L148.79,97.6a8,8,0,0,0-9.6,0L120,112Zm80,144H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40h32v88a8,8,0,0,0,12.8,6.4L144,114l27.21,20.4A8,8,0,0,0,176,136a8.1,8.1,0,0,0,3.58-.84A8,8,0,0,0,184,128V40h16Z"></path></svg>
                                <div className="hidden md:block px-1">Resume</div>
                            </div>
                        </Link>

                        <Link href={"/projects"}>
                            <div className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("projects")}`}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z" opacity="0.2"></path><path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path></svg>
                                <div className="hidden md:inline px-1">Projects</div>
                            </div>
                        </Link>

                        <Link href={"/about-me/"}>
                            <div
                                className={`flex items-center py-1 px-2 rounded-lg cursor-pointer text-nowrap ${getNavStyling("about-me")}`}
                            >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
                                <span className="hidden md:inline px-1">About Me</span>
                            </div>
                        </Link>

                    </div>
                </div >
            </div >

            <div className="p-2 rounded-lg fixed top-[2vh] md:right-[3vw] right-[1vw] text-white md:text-md text-xs" id="currTime">
                {currTime?.toLocaleTimeString()}
            </div>
        </>
    )
}