'use client'

import ParentLayout from "../ParentLayout";


export default function ResumePage() {
    return (
        <ParentLayout 
            ChildComponent={<ResumeComponent />} 
            elementName="resume"
        />
    )
}

function ResumeComponent() {
    return (
        <>
            <div className="px-6 sm:px-16 md:px-42 lg:px-64 py-24 md:py-48">

                <div className="w-full text-center md:text-6xl text-4xl font-semibold">
                    Download Resume
                </div>
                <div className="text-center font-mono text-gray-400 py-4">
                    Click on the below link to download resume
                </div>

                <div className="flex justify-center items-center w-full py-12">
                    <button onClick={() => window.location.href = "api/resume"}
                        className="outline outline-1 outline-white hover:outline-none hover:bg-gray-800 
                        rounded-lg md:text-3xl text-lg py-3 px-4">
                        Download Resume
                    </button>
                </div>

            </div>
        </>
    )
}
