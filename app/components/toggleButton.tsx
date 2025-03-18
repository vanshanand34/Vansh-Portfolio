
import React from "react";
import { useTheme } from "next-themes";
import "../globals.css";
import { BiAdjust } from "react-icons/bi";


export default function ToggleButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    function handleClick() {
        console.log("innnn")
        theme == "dark" ? setTheme('light') : setTheme("dark");
    }

    return (
        <button
            onClick={handleClick}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 
            transition-all duration-100 text-white dark:text-gray-800 
            px-2 py-1 text-base sm:text-xl rounded-lg m-4 z-10 fixed top-2 left-2 sm:left-6'>
            <BiAdjust />
        </button >
    )
}