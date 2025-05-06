import { Metadata } from "next";
import { Geist, Open_Sans } from "next/font/google";
import ProjectPage from "./ProjectsPage";

export const metadata: Metadata = {
    title: "Vansh Anand Portfolio- About Me",
    description: "Portfolio of Vansh Anand",
}

const geist = Geist({
    variable: "--font-open-sans",
    subsets: ["latin"],
})



export default function Home() {
    return <div className={`${geist.className}`}>    
        <ProjectPage/>
    </div>
}
