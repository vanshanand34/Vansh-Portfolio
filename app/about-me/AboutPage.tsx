'use client'

import React from "react";
import Navbar from "../ClientNavbar";
import Link from "next/link";
import LinkButtons from "../LinkButtons";
import trackCursor from "../MovingBackground";


export default function Home() {

  return (
    <>
      <div className="min-h-screen text-white w-full bg-[#1b1b1b]" id="container"
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>
        {/* Navbar */}
        <div id="cursor"
          className="fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none hidden md:block">
        </div>

        <div id="cursor"
          className="md:hidden fixed right-[10vw] w-[100vw] h-[100vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none">
        </div>

        <Navbar activeElement="about-me"></Navbar>

        {/* <div className="text-center w-full md:text-5xl text-5xl font-semibold mt-[6vh] text-blue-400 underline">About Me</div> */}

        {/* <div className="lg:block fixed top-[28vh] left-[3vw] hidden">
          <div className="flex justify-between items-center py-4">
            <div className="lg:p-4 p-2 text-lg">
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#intro" >
                  - Introduction
                </Link>
              </div>
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#experience">
                  - Work Experience
                </Link>
              </div>
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#education">
                  - Education
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-32">
          <div className="p-4 py-8 md:py-12" id="intro">

              <div className="md:text-7xl text-5xl font-bold">
                Vansh Anand
              </div>

              <div className="text-blue-300 md:text-3xl text-xl pt-2 md:py-6">
                Full Stack Developer
              </div>

              <LinkButtons height={16} width={16}/>

              <div className="md:font-semibold font-sans md:text-lg text-base">
                Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
              </div>

          </div>

          <div className="px-4 py-8 md:py-12" id="experience">
            <div className="font-bold md:text-6xl text-4xl">
              Work Experience
            </div>
            <div className="">
              <div className="sm:flex items-center justify-between gap-2 py-2 md:py-6">
                <div className="font-bold lg:text-3xl md:text-2xl text-base text-gray-300 py-1 sm:py-0">
                  Ayuvya Ayurveda
                </div>

                <div className="font-semibold md:text-md text-sm text-gray-400 py-2 sm:py-0">
                  JULY 2024 - JAN 2025
                </div>
              </div>

              <div className="md:text-lg font-semibold text-blue-400 py-1">
                Backend Developer Intern
              </div>

              <ul className="pl-4 p-1 font-sans marker:text-blue-300 list-disc list-outside md:text-lg sm:text-base text-sm md:font-semibold">
                <li className="md:p-1">
                  Developed and optimized Django backend and dashboard performance with efficient ORM queries.
                </li>
                <li className="md:p-1">
                  Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.
                </li>
                <li className="md:p-1">
                  Implemented chat and audio call functionality using Agora services in Django.
                </li>
                <li className="md:p-1">
                  Integrated seller APIs to enhance system capabilities.
                </li>
              </ul>

            </div>
          </div>

          <div className="px-4 py-8" id="education">
            <div className="font-bold md:text-6xl text-4xl">
              Education
            </div>
            <div className="py-2 px-1">
              <div className="py-1 md:py-2">
                <div className="sm:flex items-center justify-between">
                  <div className="font-bold lg:text-2xl md:text-xl text-md text-gray-300 py-2">
                    GTBIT (IPU)
                  </div>

                  <div className="font-semibold md:text-md text-sm text-gray-400">
                    NOV 2022 - AUG 2026
                  </div>
                </div>

                <div className="md:text-base text-xs font-semibold text-blue-400 py-2 sm:py-0">
                  B-TECH (IT)
                </div>
              </div>
              <div className="py-1 md:py-2">
                <div className="sm:flex items-center justify-between">
                  <div className="py-2 font-bold lg:text-2xl md:text-xl text-lg text-gray-300">
                    Kendriya Vidyalaya
                  </div>

                  <div className="font-semibold md:text-md text-sm text-gray-400">
                    JUNE 2014 - AUG 2022
                  </div>
                </div>

                <div className="md:text-base text-xs font-semibold text-blue-400 py-2 sm:py-0">
                  5-12TH
                </div>
              </div>

            </div>
          </div>

        </div>
      </div >
    </>
  );
}