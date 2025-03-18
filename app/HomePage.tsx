'use client'

import Link from "next/link";
import LinkButtons from "./LinkButtons";
import ParentLayout from "./ParentLayout";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <ParentLayout ChildComponent={<HomePageComponent />} elementName="home"/>
  )
}

function HomePageComponent() {
  return (
    <>
      <div className="px-10 sm:px-20 md:px-38 lg:px-56 xl:px-64 pt-28 pb-6 md:pt-44">
        <div className="text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 text-[#2bbfff] font-bold font-mono py-4 pt-8">
          <div>Full Stack Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-xl text-base text-bold dark:text-gray-300 font-mono py-4">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <div className="py-4 pb-20">
          <button className="outline outline-1 dark:outline-white dark:hover:bg-[#343434]
          outline-black hover:outline-none hover:bg-sky-400 hover:text-white dark:hover:outline-none
          rounded-lg md:text-lg px-3 py-2">
            <Link href={"/about-me"}>
              About Me
            </Link>
          </button>
        </div>


        <Footer />
      </div>
    </>
  );
}