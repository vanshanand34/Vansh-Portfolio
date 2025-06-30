'use client'

import ProjectCard from "./ProjectCard";
import ParentLayout from "../ParentLayout";

export default function ProjectPage() {
    return (
        <ParentLayout
            ChildComponent={<ProjectPageComponent />}
            elementName="projects"
        />
    )
};


function ProjectPageComponent() {
    return (
        <>
            <div className="px-12 xs:px-18 sm:px-28 md:px-[8vw] lg:px-40 xl:px-54 py-28  md:py-32">

                <div className="text-center text-4xl md:text-5xl font-bold pb-12 py-4">Projects</div>

                <div className="">

                    <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-12">

                        <ProjectCard
                            projectName="AI Code Reviewer"
                            projectLink="https://github.com/vanshanand34/AI-Code-Review"
                            projectDescription="A web-based code review tool built with Next.js, TypeScript, and Tailwind CSS. It lets users write and run code in the browser using Monaco Editor, with AI help for reviewing and improving code."
                            techStack={["NextJs", "Tailwind CSS", "Typescript"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/Shoppers-Edge"
                            projectName="Customers Edge"
                            projectDescription="A Django-based price comparison website that scrapes real-time product listings from Amazon and Flipkart using Selenium. It delivers instant, dynamic search results with the help of Django Channels, making it easy to find the best deals quickly."
                            techStack={["Django", "Selenium", "CSS", "JS", "Django Channels"]}
                        />

                        <ProjectCard
                            projectName="Code Compiler"
                            projectLink="https://github.com/vanshanand34/code-formatter"
                            projectDescription="A web-based application that enables users to write, edit and run code directly in their browser. It leverages react monaco-editor module and piston API to provide a fast and responsive coding experience."
                            techStack={["ReactJs", "Chakra UI"]}
                        />

                        <ProjectCard
                            projectName="HTTP Server"
                            projectLink="https://github.com/vanshanand34/Javascript-Http-Server"
                            projectDescription="An HTTP server build using Javascript. It is capable of handling simple HTTP requests using the Javascript net module."
                            techStack={["Javascript"]}
                        />


                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/stock_monitor"
                            projectName="Stock Monitor"
                            projectDescription="A React-Django app for managing a Stock Wishlist with real-time updates on stock value changes. It uses Django-Rest-Framework for API endpoints and TypeScript for strong typing in the frontend."
                            techStack={["Reactjs", "MUI", "Django", "Typescript"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/typescript"
                            projectName="Custom Select"
                            projectDescription="A custom TypeScript-based select component replacing the standard HTML select, offering enhanced styling, accessibility features, and interactivity (such as search and multi-selection) for a better user experience."
                            techStack={["Typescript", "CSS", "Reactjs"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/Notes-Project"
                            projectName="Notes Project"
                            projectDescription="A simple notes app using TypeScript, JavaScript, and React Bootstrap. It stores user data in localStorage, allowing for adding, editing, and deleting notes with a clean UI."
                            techStack={["ReactJs", "Typescript", "React-Bootstrap"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/React-Projects/"
                            projectName="Bookstore Website"
                            projectDescription="A full-stack MERN application enabling users to create, edit, and delete books. It features a React frontend, Express.js backend, MongoDB database, and CRUD functionality."
                            techStack={["MongoDB", "ExpressJS", "Reactjs", "Tailwind"]}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
