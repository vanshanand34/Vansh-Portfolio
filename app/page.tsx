import Image from "next/image";
import Navbar from "./Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Vansh Anand Portfolio",
  description: "Portfolio of Vansh Anand",
}

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar activeElement="home"></Navbar>
        <div className="text-3xl md:text-5xl lg:text-6xl text-gray-200 font-bold font-mono mx-[4vw] mt-[10vh]">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>
      </div >
    </>
  );
}
