'use client'

import Navbar from "../ClientNavbar";
import trackCursor from "../MovingBackground";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <div className="min-h-screen text-white w-full bg-[#1b1b1b]" id="container" onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>
            <div id="cursor"
                className="fixed w-[55vw] h-[55vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none">
            </div>

            <Navbar activeElement="projects">
            </Navbar>

            <div></div>

            <div className="md:mt-12 mt-16 grid md:grid-cols-2 grid-cols-1 p-4">
                <div className="rounded-lg border border-gray-400 shadow hover:shadow-lg hover:shadow-gray-700 p-4 m-4 ">
                    <Link href={"https://github.com/vanshanand34/Shoppers-Edge"}>
                        <div className="text-2xl font-semibold text-blue-400 p-2 hover:text-blue-500">Shoppers Edge</div>
                    </Link>
                    <div className="p-2">
                        A price comparison website where you can search for the desired products and it will display the list of that product present on different E-commerce wesites with the available sort functions to sort the results by ratings,price.
                    </div>
                </div>



                <div className="rounded-lg border border-gray-400 shadow hover:shadow-lg hover:shadow-gray-700 p-4 m-4 ">
                    <Link href={"https://github.com/vanshanand34/stock_monitor"}>
                        <div className="text-2xl font-semibold text-blue-400 p-2 hover:text-blue-500">Stock Monitor</div>
                    </Link>
                    <div className="p-2">
                        An innovative React and Django application for creating and managing a Stock Wishlist providing information such as latest value and change . Leveraged Django-Rest-Framework for developing API endpoints for frontend to backend connectivity and TypeScript in frontend to inculcate strong typing.
                    </div>
                </div>



                <div className="rounded-lg border border-gray-400 shadow hover:shadow-lg hover:shadow-gray-700 p-4 m-4 ">
                    <Link href={"https://github.com/vanshanand34/REST-API-notes-app"}>
                        <div className="text-2xl font-semibold text-blue-400 p-2 hover:text-blue-500">REST API Notes Project</div>
                    </Link>
                    <div className="p-2">
                        This project is a Django-based Notes App which contains different API endpoints developed using DRF(Django Rest Framework) It consists of API Endpoints for login , registering new users , logout and Performing CRUD operations on the notes.
                    </div>
                </div>



                <div className="rounded-lg border border-gray-400 shadow hover:shadow-lg hover:shadow-gray-700 p-4 m-4 ">
                    <Link href={"https://github.com/vanshanand34/Blogs"}>
                        <div className="text-2xl font-semibold text-blue-400 p-2 hover:text-blue-500">Blog Website</div>
                    </Link>
                    <div className="p-2">
                        A simple and sober blog website where users can create different blogs and view them with an attractive UI. It is developed using Django , Python , Bootstrap. Blogs are arranged in decreasing order of their time/date of creation. Latest blog created will be visible at the top of the webpage. It is a SPA (Single Page Application).
                    </div>
                </div>


            </div>
        </div>
    )
}
