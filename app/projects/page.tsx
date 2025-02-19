import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import ProjectPage from "./ProjectsPage";

export const metadata: Metadata = {
    title: "Vansh Anand Portfolio- About Me",
    description: "Portfolio of Vansh Anand",
}

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
})

export default function Home() {
    return <div className={`${openSans.className}`}>    
        <ProjectPage/>
    </div>
}
