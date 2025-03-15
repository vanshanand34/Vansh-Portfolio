'use client'

import Navbar from "../ClientNavbar";
import trackCursor from "../MovingBackground";
import ProjectCard from "./ProjectCard";

export default function ProjectPage() {
    return (
        <>
            <Navbar activeElement="projects">
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

                <div className="px-12 xs:px-18 sm:px-28 md:px-30 lg:px-48 xl:px-54 py-28  md:py-32">

                    <div className="text-center text-3xl md:text-5xl font-bold pb-8">Projects</div>

                    <div className="">

                        <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-6">

                            <ProjectCard
                                projectLink="https://github.com/vanshanand34/typescript"
                                projectName="Custom Select (Single/Mutli)"
                                projectDescription="A custom select component built with TypeScript, designed to replace the standard HTML select element. It provides enhanced customization options, such as better styling, accessibility, and interactivity (e.g., search and multi-selection). The project showcases how TypeScript can be used to create reusable, type-safe UI components with improved user experience."
                            />

                            <ProjectCard
                                projectName="Code Formatter"
                                projectLink="https://github.com/vanshanand34/code-formatter"
                                projectDescription="A TypeScript-React-based project that utilizes the dprint JS module to automatically format code files. It supports formatting for various file types, including TypeScript, JavaScript, Python, HTML, and CSS. The tool helps developers maintain consistent code style by automating the formatting process, ensuring clean and readable code across different programming languages."
                            />

                            <ProjectCard
                                projectLink="https://github.com/vanshanand34/Shoppers-Edge"
                                projectName="Shoppers Edge"
                                projectDescription="A price comparison website where you can search for the desired products and it will display the list of that product present on different E-commerce wesites with the available sort functions to sort the results by ratings,price."
                            />

                            <ProjectCard
                                projectLink="https://github.com/vanshanand34/stock_monitor"
                                projectName="Stock Monitor"
                                projectDescription="An innovative React and Django application for creating and managing a Stock Wishlist providing information such as latest value and change . Leveraged Django-Rest-Framework for developing API endpoints for frontend to backend connectivity and TypeScript in frontend to inculcate strong typing."
                            />

                            <ProjectCard
                                projectLink="https://github.com/vanshanand34/REST-API-notes-app"
                                projectName="REST API Notes Project"
                                projectDescription="This project is a Django-based Notes App which contains different API endpoints developed using DRF(Django Rest Framework) It consists of API Endpoints for login , registering new users , logout and Performing CRUD operations on the notes."
                            />

                            <ProjectCard
                                projectLink="https://github.com/vanshanand34/Blogs"
                                projectName="Blog Website"
                                projectDescription="A simple and sober blog website where users can create different blogs and view them with an attractive UI. It is developed using Django , Python , Bootstrap. Blogs are arranged in decreasing order of their time/date of creation. Latest blog created will be visible at the top of the webpage. It is a SPA (Single Page Application)."
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
