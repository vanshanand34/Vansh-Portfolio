'use client'

import React from "react";
import LinkButtons from "../components/LinkButtons";
import ParentLayout from "../ParentLayout";
import ExperienceSection from "./components/Experience";

export default function AboutMePage() {
  return (
    <ParentLayout
      ChildComponent={<AboutMe />}
      elementName="about-me"
    />
  )
}


function AboutMe() {

  const experiencePointsList = [
    "Developed and optimized Django backend and dashboard performance with efficient ORM queries.",
    "Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.",
    "Implemented chat and audio call functionality using Agora services in Django.",
    "Integrated seller APIs to enhance system capabilities."
  ]

  return (
    <>
      <div className={`tracking-wide  px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-32`}>
        <div className="p-4 py-8 pt-14 md:py-16" id="intro">

          <div className="md:text-7xl sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white">
            Vansh Anand
          </div>

          <div className="dark:text-blue-300 text-sky-600 md:text-3xl text-xl py-3 md:py-4">
            Full Stack Developer
          </div>

          <LinkButtons height={16} width={16} />

          <div className="md:font-medium text-gray-800 dark:text-white 
          xl:text-xl md:text-lg text-base pt-4 sm:pt-2">
            Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
          </div>

        </div>

        <ExperienceSection experiencePoints={experiencePointsList} />

        <div className="px-4 py-8" id="education">
          <div className="font-bold md:text-6xl text-4xl dark:text-inherit text-gray-800">
            Education
          </div>
          <div className="py-2 px-1">
            <div className="py-1 md:py-2">
              <div className="flex items-center justify-between">
                <div className="font-bold lg:text-2xl md:text-xl text-base dark:text-gray-300 text-gray-600 py-2">
                  GTBIT (IPU)
                </div>

                <div className="font-semibold md:text-lg text-sm dark:text-gray-400 text-gray-500">
                  NOV 2022 - AUG 2026
                </div>
              </div>

              <div className="md:text-base text-xs font-semibold text-blue-500 py-2 sm:py-0">
                B-TECH (IT)
              </div>
            </div>
            <div className="py-1 md:py-2">
              <div className="flex items-center justify-between">
                <div className="py-2 font-bold lg:text-2xl md:text-xl text-base dark:text-gray-300 text-gray-600">
                  K.V.S
                </div>

                <div className="font-semibold md:text-lg text-sm dark:text-gray-400 text-gray-500">
                  JUNE 2014 - AUG 2022
                </div>
              </div>

              <div className="md:text-base text-xs font-semibold text-blue-500 py-2 sm:py-0">
                5-12TH
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}