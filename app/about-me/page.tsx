import Image from "next/image";
import Navbar from "../Navbar";
import { Metadata } from "next";
import MyImage from "../vansh_passport.jpg";

export const metadata: Metadata = {
  title: "Vansh Anand Portfolio- About Me",
  description: "Portfolio of Vansh Anand",
}

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar activeElement="about-me"></Navbar>
        <div className="font-mono fixed top-[15vh] left-[3vw] ">
          <div className="flex justify-between items-center font-semibold py-4">
            <div className="p-4 text-2xl">
              <div className="py-4 cursor-pointer">
                -- Introduction
              </div>
              <div className="py-4 cursor-pointer">
                -- Work Experience
              </div>
              <div className="py-4 cursor-pointer">
                -- Education
              </div>
            </div>
            {/* <div className="border border-white rounded-full shadow mix-blend-darken">
              <Image
                src={MyImage}
                style={{
                  objectFit: "cover",
                  height:"250px",
                  width:"250px"
                }}
                className="rounded-full"
                alt="My Passport Sized Image"
              ></Image>
            </div> */}
            <div></div>
          </div>
        </div>
        <div className="m-4 p-4 border border-red-500 h-[205vh] ml-[25vw]">
          <div className="mx-4 py-4">
            <div className="text-3xl font-sans font-semibold">
              Vansh Anand
            </div>
            <div className="text-gray-400 text-xl font-semibold font-sans">
              Backend Developer
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
