'use client'

import React from "react";
import LinkButtons from "../LinkButtons";
import ParentLayout from "../ParentLayout";

export default function AboutMePage() {
  return (
    <ParentLayout 
      ChildComponent={<AboutMe />} 
      elementName="about-me"
    />
  )
}

function AboutMe() {

  return (
    <>
      <div className="font-mono tracking-tight dark:tracking-normal px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-32">
        <div className="p-4 py-8 md:py-16" id="intro">

          <div className="md:text-7xl text-5xl font-bold text-gray-800 dark:text-white">
            Vansh Anand
          </div>

          <div className="dark:text-blue-300 text-sky-600 md:text-3xl text-xl py-3 md:py-4">
            Full Stack Developer
          </div>

          <LinkButtons height={16} width={16} />

          <div className="md:font-medium  font-mono text-gray-800 dark:text-white md:text-lg xl:text-xl text-base pt-4 sm:pt-2">
            Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
          </div>

        </div>

        <div className="px-4 py-8 md:py-16" id="experience">
          <div className="font-bold md:text-6xl text-4xl text-gray-800 dark:text-inherit">
            Work Experience
          </div>
          <div className="">
            <div className="sm:flex items-center justify-between gap-2 py-2 md:py-6">
              <div className="font-bold lg:text-3xl md:text-2xl text-base dark:text-blue-300 text-sky-500 py-1 sm:py-0">
                Ayuvya Ayurveda
              </div>

              <div className="font-semibold md:text-lg text-base dark:text-gray-400 text-gray-500 py-2 sm:py-0">
                JULY 2024 - JAN 2025
              </div>
            </div>

            <div className="md:text-xl font-semibold text-sky-400 py-1">
              Backend Developer Intern
            </div>

            <ul className="p-1 font-mono marker:text-blue-300 list-disc list-outside xl:text-lg md:text-lg sm:text-base md:font-medium dark:text-white">
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
          <div className="font-bold md:text-6xl text-4xl dark:text-inherit text-gray-800">
            Education
          </div>
          <div className="py-2 px-1">
            <div className="py-1 md:py-2">
              <div className="sm:flex items-center justify-between">
                <div className="font-bold lg:text-2xl md:text-xl text-md dark:text-gray-300 text-gray-600 py-2">
                  GTBIT (IPU)
                </div>

                <div className="font-semibold md:text-lg text-sm dark:text-gray-400 text-gray-500">
                  NOV 2022 - AUG 2026
                </div>
              </div>

              <div className="md:text-base text-xs font-semibold text-blue-400 py-2 sm:py-0">
                B-TECH (IT)
              </div>
            </div>
            <div className="py-1 md:py-2">
              <div className="sm:flex items-center justify-between">
                <div className="py-2 font-bold lg:text-2xl md:text-xl text-lg dark:text-gray-300 text-gray-600">
                  Kendriya Vidyalaya
                </div>

                <div className="font-semibold md:text-lg text-sm dark:text-gray-400 text-gray-500">
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
    </>
  );
}