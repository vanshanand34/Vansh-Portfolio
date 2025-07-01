import { Metadata } from "next";
import ProjectPage from "./ProjectsPage";

export const metadata: Metadata = {
    title: "Vansh Anand Portfolio- About Me",
    description: "Portfolio of Vansh Anand",
}


export default function Home() {
    return <div className={``}>    
        <ProjectPage/>
    </div>
}
