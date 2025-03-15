import React from "react";
import Navbar from "./ClientNavbar";
import trackCursor from "./MovingBackground";

type ParentLayoutProps = {
    ChildComponent: React.ReactNode,
    elementName: string
}

export default function ParentLayout(
    { ChildComponent, elementName }: ParentLayoutProps
) {
    return (
        <>
            <Navbar activeElement={elementName}></Navbar>
            <div
                className="min-h-screen text-white w-full bg-[#181818]"
                id="container"
                onMouseMove={(event: React.MouseEvent) => trackCursor(event)}
            >
                <div id="cursor"
                    className="fixed w-[50vw] h-[50vw] bg-[#0a5e882b] rounded-full blur-3xl overflow-hidden pointer-events-none hidden md:block">
                </div>

                <div id="cursor"
                    className="md:hidden fixed right-[10vw] w-[100vw] h-[100vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none">
                </div>

                {ChildComponent}

            </div>
        </>
    )
}