'use client'

import Navbar from "./ClientNavbar";
// import { Metadata } from "next";
import trackCursor from "./MovingBackground";
import Link from "next/link";
import LinkButtons from "./LinkButtons";


export default function HomePage() {
  return (
    <>
      <div className="h-screen w-full" id="container"
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>

        <div id="cursor"
          className="-z-10 fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden">
        </div>

        <Navbar activeElement="home"></Navbar>
        <div className="text-5xl md:text-6xl lg:text-7xl text-gray-200 font-bold font-mono mx-[4vw] mt-36">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-2xl text-lg text-bold text-gray-300 font-mono mx-[4vw] my-8">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <button className="px-4 py-1 border border-blue-500 shadow-lg mx-[4vw] hover:bg-gray-900  rounded-lg text-lg">
          <Link href={"/about-me"}>
            About Me
          </Link>
        </button>

        <footer className="flex justify-between p-4 items-center mt-24">
          <div className="text-gray-400 md:px-12">
            Created By Vansh Anand
          </div>

          <div>
            <LinkButtons isHomePage={true} height={12} width={12}/>
          </div>

        </footer>
      </div >
    </>
  );
}