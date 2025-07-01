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
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-[#3b83f6c6] outline-[#3b83f6d4]
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] text-[#393939] dark:text-white">
                            <GithubLogo width={width} height={height} />
                            <div className="text-sm md:text-base md:block hidden">
                                Github
                            </div>
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anandvansh/">
                        <button className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-[#3b83f6c6] outline-[#3b83f6d4]
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] text-[#393939] dark:text-white">
                            <LinkedinLogo width={width} height={height} />
                            <div className="text-sm md:text-base md:block hidden">
                                LinkedIn
                            </div>
                        </button>
                    </Link>
                    <Link href="mailto:anandvansh34@gmail.com">
                        <button className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-[#3b83f6c6] outline-[#3b83f6d4]
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] text-[#393939] dark:text-white">
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

    const linkStyles = "inline-flex items-center space-between hover:outline-none hover:bg-sky-500 hover:text-white dark:hover:bg-gray-700 dark:hover:text-inherit md:font-semibold p-1 sm:p-2 rounded-lg outline outline-1 outline-[#1e1e1e] dark:outline-white dark:hover:outline-none text-[#3c3c3c]";
    return (
        <div className="md:py-4 inline-flex items-center gap-x-2 sm:gap-x-3 flex-wrap">
            <Link href="https://github.com/vanshanand34">
                <div className={`${linkStyles}`}>
                    <GithubLogo width={width} height={height} />
                </div>
            </Link>
            <Link href="https://www.linkedin.com/in/anandvansh/">
                <div className={`${linkStyles}`}>
                    <LinkedinLogo width={width} height={height} />
                </div>
            </Link>
            <Link href="mailto:anandvansh34@gmail.com">
                <div className={`${linkStyles}`}>
                    <GmailLogo width={width} height={height} />
                </div>
            </Link>
        </div>

    )
}

