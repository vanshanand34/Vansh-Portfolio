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
        <>
            <Navbar activeElement="resume">
            </Navbar>
            <div
                className="min-h-screen text-white w-full bg-[#1b1b1b]"
                id="container"
                onMouseMove={(event: React.MouseEvent) => trackCursor(event)}
            >
                <div id="cursor"
                    className="fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none hidden md:block">
                </div>

                <div id="cursor"
                    className="md:hidden fixed right-[10vw] w-[100vw] h-[100vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none">
                </div>

                <div className="px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-48">


                    <div className="w-full text-center md:text-6xl text-4xl font-semibold">
                        Download Resume
                    </div>
                    <div className="text-center font-mono text-gray-400 py-4">
                        Click on the below link to download resume
                    </div>

                    <div className="flex justify-center items-center w-full py-12">
                        <button onClick={() => window.location.href = "api/resume"}
                            className="rounded-lg border border-white hover:border-blue-600 md:text-3xl text-lg shadow-lg py-2 px-3">
                            Download Resume
                        </button>
                        {/* </Link> */}
                    </div>

                </div>

            </div>
        </>
    )
}
