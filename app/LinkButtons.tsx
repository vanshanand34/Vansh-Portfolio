import React from "react";
import { JSX } from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";

export default function LinkButtons(
    { isHomePage = false, width = 18, height = 18 }: { isHomePage?: boolean, width?: number, height?: number }
): JSX.Element {

    const buttonTextStyle: string = isHomePage ? "hidden" : "md:text-lg md:block hidden";
    return (
        <div className="py-4 inline-flex items-center gap-2 flex-wrap">
            <Link href="https://github.com/vanshanand34">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-blue-300 rounded-lg bg-[#28282838] m-1">
                    <GithubLogo width={width} height={height}/>
                    <div className={buttonTextStyle}>
                        Github
                    </div>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/anandvansh/">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-blue-300 rounded-lg bg-[#28282838] m-1">
                    <LinkedinLogo width={width} height={height}/>
                    <div className={buttonTextStyle}>
                        LinkedIn
                    </div>
                </button>
            </Link>
            <Link href="mailto:anandvansh34@gmail.com">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-blue-300 rounded-lg bg-[#28282838] m-1">
                    <GmailLogo width={width} height={height}/>
                    <div className={buttonTextStyle}>
                        Email
                    </div>
                </button>
            </Link>
        </div>
    )
}

