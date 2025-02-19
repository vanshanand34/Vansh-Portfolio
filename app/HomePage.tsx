'use client'

import Navbar from "./ClientNavbar";
import { Metadata } from "next";
import trackCursor from "./MovingBackground";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      <div className="h-screen w-full" id="container"
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>

        <div id="cursor"
          className="-z-10 fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden">
        </div>

        <Navbar activeElement="home"></Navbar>
        <div className="text-3xl md:text-6xl lg:text-7xl text-gray-200 font-bold font-mono mx-[4vw] mt-36">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="text-2xl text-bold text-gray-300 font-mono mx-[4vw] my-8">
          I'm Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <button className="px-4 py-1 border border-blue-500 shadow-lg mx-[4vw] hover:bg-[#222220]  rounded-lg text-lg">
          <Link href={"/about-me"}>
            About Me
          </Link>
        </button>
      </div >
    </>
  );
}