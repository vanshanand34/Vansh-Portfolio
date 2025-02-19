'use client'

import Navbar from "../ClientNavbar";
import trackCursor from "../MovingBackground";



// async function fetchResume(){
//     const apiEndpoint: string = "api/resume";
//     const response = await fetch(apiEndpoint);
//     if(!(response?.ok)) return;
//     console.log(response);
//     const data = response.bytes()!;
//     const url = window.URL.createObjectURL(new Blob([data]))
//     return response.body;
// }

export default function ResumePage() {
    return (
        <div className="min-h-screen text-white w-full bg-[#1b1b1b]" id="container" onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>
            <div id="cursor"
                className="-z-10 fixed w-[55vw] h-[55vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden">
            </div>

            <Navbar activeElement="resume">
            </Navbar>

            <div className="md:mt-24 mt-32 w-full text-center md:text-6xl text-4xl font-semibold">
                Download Resume
            </div>
            <div className="p-4 my-2 text-center font-mono text-gray-400">
                Click on the below link to download resume
            </div>

            <div className="my-8 flex justify-center w-full">
                <button onClick={() => window.location.href = "api/resume" }
                    className="hover:bg-gray-900 rounded-lg border border-blue-300 px-4 py-2 md:text-3xl text-lg shadow-lg">
                    Download Resume
                </button>
                {/* </Link> */}
            </div>

        </div>
    )
}
