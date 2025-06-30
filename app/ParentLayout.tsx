import React from "react";
import Navbar from "./components/ClientNavbar";
import ToggleButton from "./components/toggleButton";
import { Assistant } from "next/font/google";

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
                className={`${assistant.className} tracking-wide min-h-screen dark:text-white text-black 
                    w-full bg-white dark:bg-[#1a1a1a]`}
                id="container"
            >

                <ToggleButton />

                {ChildComponent}

            </div>
        </>
    )
}