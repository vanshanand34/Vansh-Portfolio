import Navbar from "../Navbar";
import { Metadata } from "next";
import Link from "next/link";
import LinkButtons from "../LinkButtons";

export const metadata: Metadata = {
  title: "Vansh Anand Portfolio- About Me",
  description: "Portfolio of Vansh Anand",
}

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        {/* Navbar */}
        <Navbar activeElement="about-me"></Navbar>

        <div className="font-mono fixed top-[15vh] left-[3vw] ">
          <div className="flex justify-between items-center font-semibold py-4">
            <div className="lg:p-4 p-2 text-lg hidden lg:block">
              <div className="py-4 cursor-pointer">
                <Link href="#intro" >
                  - Introduction
                </Link>
              </div>
              <div className="py-4 cursor-pointer">
                <Link href="#experience">
                  - Work Experience
                </Link>
              </div>
              <div className="py-4 cursor-pointer">
                <Link href="#education">
                  - Education
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-4 mx-6 mt-12 p-4 border shadow shadow-gray-600 border-indigo-300 lg:ml-[24vw]" id="intro">
          <div className="mx-4 py-4">

            <div className="md:text-7xl text-4xl font-sans font-bold py-2">
              Vansh Anand
            </div>

            <div className="text-gray-400 md:text-3xl text-2xl font-bold font-sans py-2">
              Full Stack Developer
            </div>

            <LinkButtons />

            <div className="md:font-mono md:font-semibold md:text-lg text-sm p-2">
              Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
            </div>

          </div>
        </div>
        <div className="h-[50vh] my-12 lg:mx-4 mx-8 p-4 border shadow shadow-gray-600 border-indigo-300 lg:ml-[24vw]" id="education">
        </div>
        <div className="h-[50vh] my-12 p-4 lg:mx-4 mx-8 border shadow shadow-gray-600 border-indigo-300 lg:ml-[24vw]" id="experience">
        </div>
      </div >
    </>
  );
}
