'use client'

import Navbar from "../ClientNavbar";
import trackCursor from "../MovingBackground";
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

                <div className="text-center text-3xl md:text-5xl font-bold pb-8">Projects</div>

                <div className="">

                    <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-6">

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/typescript"
                            projectName="Custom Select"
                            projectDescription="A custom TypeScript-based select component replacing the standard HTML select, offering enhanced styling, accessibility features, and interactivity (such as search and multi-selection) for a better user experience."
                            techStack={["Typescript", "CSS", "Reactjs"]}
                        />

                        <ProjectCard
                            projectName="Code Formatter"
                            projectLink="https://github.com/vanshanand34/code-formatter"
                            projectDescription="A TypeScript-React project using the dprint JS module to automatically format TypeScript, JavaScript, Python, HTML, and CSS files, ensuring consistent code style and readability across different programming languages."
                            techStack={["ReactJs", "ExpressJs", "Typescript", "Tailwind"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/Shoppers-Edge"
                            projectName="Shoppers Edge"
                            projectDescription="A price comparison website that allows users to search for products and compare prices across different e-commerce sites, with sorting options based on ratings, price, and other criteria."
                            techStack={["Django", "Playwright", "Bootstrap"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/stock_monitor"
                            projectName="Stock Monitor"
                            projectDescription="A React-Django app for managing a Stock Wishlist with real-time updates on stock value changes. It uses Django-Rest-Framework for API endpoints and TypeScript for strong typing in the frontend."
                            techStack={["Reactjs", "MUI", "Django", "Typescript"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/Notes-Project"
                            projectName="Notes Project"
                            projectDescription="A simple notes app using TypeScript, JavaScript, and React Bootstrap. It stores user data in localStorage, allowing for adding, editing, and deleting notes with a clean UI."
                            techStack={["ReactJs", "Typescript", "React-Bootstrap"]}
                        />

                        <ProjectCard
                            projectLink="https://github.com/vanshanand34/Blogs"
                            projectName="Blog Website"
                            projectDescription="A blog website where users can create and view blogs in a single-page app, built with Django, Python, and Bootstrap. Blogs are displayed in reverse chronological order for easy navigation."
                            techStack={["Django", "Python", "Bootstrap"]}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
