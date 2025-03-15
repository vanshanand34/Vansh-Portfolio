import React from "react";
import { JSX } from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";

export default function LinkButtons(
    { isHomePage = false, width = 18, height = 18 }: { isHomePage?: boolean, width?: number, height?: number }
): JSX.Element {

    const buttonTextStyle: string = isHomePage ? "hidden" : "text-sm md:block hidden";
    const borderStyle: string = isHomePage ? "px-1" : "border border-blue-300 px-2";
    return (
        <div className="md:py-4 inline-flex items-center gap-1 flex-wrap">
            <Link href="https://github.com/vanshanand34">
                <button className={`inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 rounded-lg ${borderStyle}`}>
                    <GithubLogo width={width} height={height} />
                    <div className={buttonTextStyle}>
                        Github
                    </div>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/anandvansh/">
                <button className={`inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 rounded-lg ${borderStyle}`}>
                    <div className="rounded-full w-fit">
                        <LinkedinLogo width={width} height={height} />
                    </div>
                    <div className={buttonTextStyle}>
                        LinkedIn
                    </div>
                </button>
            </Link>
            <Link href="mailto:anandvansh34@gmail.com">
                <button className={`inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 rounded-lg ${borderStyle}`}>
                    <GmailLogo width={width} height={height} />
                    <div className={buttonTextStyle}>
                        Email
                    </div>
                </button>
            </Link>
        </div>
    )
}

