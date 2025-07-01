import { Metadata } from "next";
import ResumePage from "./ResumePage"

export const metadata: Metadata = {
    title: "Vansh Anand Portfolio- About Me",
    description: "Portfolio of Vansh Anand",
}


export default function Home() {
    return (
        <div className={``}>
            <ResumePage/>
        </div>
    );
}
