import React from "react";
import { JSX } from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";

export default function LinkButtons(
    { isHomePage = false, width = 18, height = 18 }: { isHomePage?: boolean, width?: number, height?: number }
): JSX.Element {

    return (
        isHomePage ? <LinkButtonIcons width={width} height={height} /> :
            (
                <div className="md:py-4 inline-flex items-center gap-4 flex-wrap">
                    <Link href="https://github.com/vanshanand34">
                        <button className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-blue-500  outline-blue-600
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] dark:text-inherit">
                            <GithubLogo width={width} height={height} />
                            <div className="text-sm md:text-base md:block hidden">
                                Github
                            </div>
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anandvansh/">
                        <button className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-blue-500 outline-blue-600
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] dark:text-inherit">
                            <LinkedinLogo width={width} height={height} />
                            <div className="text-sm md:text-base md:block hidden">
                                LinkedIn
                            </div>
                        </button>
                    </Link>
                    <Link href="mailto:anandvansh34@gmail.com">
                        <button className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-blue-500  outline-blue-600
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] dark:text-inherit">
                            <GmailLogo width={width} height={height} />
                            <div className="text-sm md:text-base md:block hidden">
                                Email
                            </div>
                        </button>
                    </Link>
                </div>
            )
    )
}

function LinkButtonIcons({ width, height }: { width: number, height: number }) {
    return (
        <div className="md:py-4 inline-flex items-center gap-x-2 sm:gap-x-3 flex-wrap">
            <Link href="https://github.com/vanshanand34">
                <button className="inline-flex items-center space-between hover:outline-none hover:bg-sky-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-inherit md:font-semibold p-1 sm:p-2 rounded-lg outline outline-1 dark:outline-white dark:hover:outline-none">
                    <GithubLogo width={width} height={height} />
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/anandvansh/">
                <button className="inline-flex items-center space-between hover:outline-none hover:bg-sky-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-inherit md:font-semibold p-1 sm:p-2 rounded-lg outline outline-1 dark:outline-white dark:hover:outline-none">
                    <LinkedinLogo width={width} height={height} />
                </button>
            </Link>
            <Link href="mailto:anandvansh34@gmail.com">
                <button className="inline-flex items-center space-between hover:outline-none hover:bg-sky-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-inherit md:font-semibold p-1 sm:p-2 rounded-lg outline outline-1 dark:outline-white dark:hover:outline-none">
                    <GmailLogo width={width} height={height} />
                </button>
            </Link>
        </div>

    )
}

