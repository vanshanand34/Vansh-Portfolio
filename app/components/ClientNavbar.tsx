import dynamic from "next/dynamic";
// import ResponsiveNavbar from "./Navbar";
import { JSX } from "react";

const NoSSR = dynamic(() => import("./Navbar"), {ssr: false})

export default function Navbar({activeElement}: {activeElement: string}): JSX.Element{
    return <NoSSR activeElement={activeElement}></NoSSR>
}