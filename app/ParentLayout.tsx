import React from "react";
import Navbar from "./components/ClientNavbar";
import ToggleButton from "./components/toggleButton";
import { Assistant } from "next/font/google";
import "./globals.css";

type ParentLayoutProps = {
    ChildComponent: React.ReactNode,
    elementName: string
}

const assistant = Assistant({
    weight: "500",
    subsets: ["latin"],
})

export default function ParentLayout(
    { ChildComponent, elementName }: ParentLayoutProps
) {
    return (
        <>
            <Navbar activeElement={elementName}></Navbar>
            <div
                className={`${assistant.className} lg:px-16 tracking-wide min-h-screen dark:text-white text-black 
                    w-[100dvw]  bg-white dark:bg-[#131313]`}
                id="container"
            >

                <ToggleButton />

                {ChildComponent}

            </div>
        </>
    )
}