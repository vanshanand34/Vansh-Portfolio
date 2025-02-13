'use client'

import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import LinkButtons from "../LinkButtons";

export default function Home() {

  const trackCursor = (event: React.MouseEvent) => {
    let xCoordinate: number = event.pageX;
    let yCoordinate: number = event.pageY;

    let windowWidth: number = window.innerWidth;
    let windowHeight: number = window.innerHeight;


    let xCoordinateWidth = (xCoordinate / windowWidth) * 100.0;
    let yCoordinateHeight = (yCoordinate / windowHeight) * 100.0;

    xCoordinate = xCoordinateWidth - 23;
    yCoordinate = yCoordinateHeight - 22;
    
    let element = document.getElementById("cursor");
    const cursorElement: HTMLElement = element!;

    console.log(xCoordinate, yCoordinate)

    if(xCoordinate > 52){
      cursorElement.style.right = `${100 - xCoordinate - 45}vw`;
      cursorElement.style.left = 'auto';
    }else{
      cursorElement.style.left = `${xCoordinate}vw`;
      cursorElement.style.right = `auto`;
    }
    cursorElement.style.top = `${yCoordinate}vh`;
  }
  return (
    <>
      <div className="h-screen w-full" id="container" onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>
        {/* Navbar */}
        <div id="cursor"
          className="-z-10 absolute w-[55vw] h-[55vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden"></div>
        <Navbar activeElement="about-me"></Navbar>

        <div className="fixed top-[15vh] left-[3vw] ">
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

        <div className="py-4 mr-32">
          <div className="lg:mx-4 mx-6 mt-12 p-4 lg:ml-[24vw]" id="intro">
            <div className="mx-4 py-4">

              <div className="md:text-7xl text-4xl font-bold py-4">
                Vansh Anand
              </div>

              <div className="text-blue-300 md:text-3xl text-2xl font-semibold  py-2">
                Full Stack Developer
              </div>

              <LinkButtons />

              <div className="md:font-semibold md:text-lg text-sm p-2">
                Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
              </div>

            </div>
          </div>

          <div className="my-12 lg:mx-4 mx-6 p-4 lg:ml-[24vw]" id="experience">
            <div className="font-bold md:text-5xl text-4xl my-10 mx-4">
              Work Experience
            </div>
            <div className="mx-4">
              <div className="flex items-center justify-between">
                <div className="py-4 font-bold lg:text-3xl text-2xl text-gray-300">
                  Ayuvya Ayurveda
                </div>

                <div className="font-semibold text-md text-gray-400">
                  JULY 2024- JAN 2025
                </div>
              </div>

              <div className="text-lg font-semibold text-blue-400 px-1">
                Backend Developer Intern
              </div>

              <ul className="marker:text-blue-300 list-disc list-inside py-4 text-lg px-2 font-semibold">
                <li className="py-2">
                  Developed and optimized Django backend and dashboard performance with efficient ORM queries.
                </li>
                <li className="py-2">
                  Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.
                </li>
                <li className="py-2">
                  Implemented chat and audio call functionality using Agora services in Django.
                </li>
                <li className="py-2">
                  Integrated seller APIs to enhance system capabilities.
                </li>
              </ul>

            </div>
          </div>

          <div className="h-[50vh] my-12 lg:mx-4 mx-6 p-4 lg:ml-[24vw]" id="education">
          </div>

        </div>
      </div >
    </>
  );
}