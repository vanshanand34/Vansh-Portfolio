import React from "react";
import { JSX } from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";
import { FaXTwitter } from "react-icons/fa6";
import { LinkButtonIcons } from "./LinkIcons";

export default function LinkButtons(
    { isHomePage = false, width = 18, height = 18 }: { isHomePage?: boolean, width?: number, height?: number }
): JSX.Element {

    return (
        isHomePage ? <LinkButtonIcons width={width} height={height} /> :
            (
                <div className="md:py-4 inline-flex items-center gap-4 flex-wrap">

                    <LinkButton linkSrc="https://github.com/vanshanand34"
                        svgElement={<GithubLogo width={width} height={height} />}
                        linkTitle="Github"
                    />

                    <LinkButton linkSrc="https://www.linkedin.com/in/anandvansh/"
                        svgElement={<LinkedinLogo width={width} height={height} />}
                        linkTitle="Linkedin"
                    />

                    <LinkButton linkSrc="mailto:anandvansh34@gmail.com"
                        svgElement={<GmailLogo width={width} height={height} />}
                        linkTitle="Email"
                    />
                    <LinkButton linkSrc="https://x.com/anandvansh26"
                        svgElement={<FaXTwitter />}
                        linkTitle="Twitter"
                    />
                </div>
            )
    )
}

function LinkButton(
    { linkSrc, svgElement, linkTitle }:
        { linkSrc: string, svgElement: JSX.Element, linkTitle: string }
) {
    return (
        <Link href={linkSrc}>
            <button type="button" className="inline-flex items-center justify-between
                        py-2 px-2 md:px-4 rounded-lg outline outline-1 dark:outline-[#3b83f6c6] outline-[#3b83f6d4]
                        hover:outline-none hover:bg-sky-600 hover:text-white
                        dark:hover:outline-none dark:hover:bg-[#343434] text-[#393939] dark:text-white">
                {svgElement}
                <div className="pl-1 text-sm md:text-base md:block hidden">
                    {linkTitle}
                </div>
            </button>
        </Link>
    )
}
