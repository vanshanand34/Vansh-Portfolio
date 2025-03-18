
import React from "react";
import { useTheme } from "next-themes";
import "../globals.css";
import { BiAdjust } from "react-icons/bi";


export default function ToggleButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    console.log(systemTheme);

    return (
        <>
            <button
                onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
                className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 
            transition-all duration-100 text-white dark:text-gray-800 
            px-2 py-1 text-base sm:text-xl rounded-lg m-4 z-10 fixed top-2 left-2 sm:left-6'>
                <BiAdjust />
            </button >
            <div
                id="tooltip-default"
                role="tooltip"
                className="absolute z-10 invisible group-hover:visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    )
}