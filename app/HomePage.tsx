'use client'

import Navbar from "./ClientNavbar";
// import { Metadata } from "next";
import trackCursor from "./MovingBackground";
import Link from "next/link";
import LinkButtons from "./LinkButtons";
import ParentLayout from "./ParentLayout";


export default function HomePage() {
  return (
    <ParentLayout ChildComponent={<HomePageComponent />} elementName="home"/>
  )
}

function HomePageComponent() {
  return (
    <>
      <div className="px-10 sm:px-20 md:px-38 lg:px-56 xl:px-64 pt-28 pb-8 md:pt-44">
        <div className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-bold font-mono py-4 pt-8">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-xl text-base text-bold text-gray-300 font-mono py-4">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <div className="py-4 pb-24">
          <button className="border border-white hover:border-blue-600 shadow-lg rounded-lg md:text-lg px-3 py-2">
            <Link href={"/about-me"}>
              About Me
            </Link>
          </button>
        </div>


        <footer className="absolute bottom-6 flex justify-between items-center">
          <div className="text-gray-400 md:text-md text-sm">
            Created By Vansh Anand
          </div>

          <div>
            <LinkButtons isHomePage={true} height={14} width={14} />
          </div>

        </footer>
      </div>
    </>
  );
}