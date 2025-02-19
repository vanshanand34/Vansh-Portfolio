import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "../Navbar";
import trackCursor from "../MovingBackground";
import ResumePage from "./ResumePage"

export const metadata: Metadata = {
    title: "Vansh Anand Portfolio- About Me",
    description: "Portfolio of Vansh Anand",
}

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
})

export default function Home() {
    return (
        <div className={`${openSans.className}`}>
            <ResumePage/>
        </div>
    );
}
