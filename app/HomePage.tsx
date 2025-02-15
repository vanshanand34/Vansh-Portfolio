'use client'

import Navbar from "./Navbar";
import { Metadata } from "next";
import trackCursor from "./MovingBackground";


export default function HomePage() {
  return (
    <>
      <div className="h-screen w-full" id="container"
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>

        <div id="cursor"
          className="-z-10 fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden">
        </div>

        <Navbar activeElement="home"></Navbar>
        <div className="text-3xl md:text-5xl lg:text-6xl text-gray-200 font-bold font-mono mx-[4vw] mt-[10vh]">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>
      </div >
    </>
  );
}