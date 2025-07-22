import React from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";
import { FaXTwitter } from "react-icons/fa6";


export function LinkButtonIcons({ width, height }: { width: number, height: number }) {

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
            <Link href="https://x.com/anandvansh26">
                <div className={`${linkStyles}`}>
                    <FaXTwitter />
                </div>
            </Link>
        </div>

    )
}

