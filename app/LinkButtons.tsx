import React from "react";
import { JSX } from "react";
import Link from "next/link";
import GithubLogo from "@/public/GithubLogo";
import LinkedinLogo from "@/public/LinkedinLogo";
import GmailLogo from "@/public/GmailLogo";

export default function LinkButtons(): JSX.Element {
    return (
        <div className="py-4">
            <Link href="">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-gray-700 rounded-lg bg-[#28282838] m-1">
                    <GithubLogo />
                    <div className="md:text-lg text-sm">
                        Github
                    </div>
                </button>
            </Link>
            <Link href="">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-gray-700 rounded-lg bg-[#28282838] m-1">
                    <LinkedinLogo />
                    <div className="md:text-lg text-sm">
                        LinkedIn
                    </div>
                </button>
            </Link>
            <Link href="">
                <button className="inline-flex items-center space-between hover:bg-[#222220] md:font-semibold 
                py-2 md:px-4 px-2 border border-gray-700 rounded-lg bg-[#28282838] m-1">
                    <GmailLogo />
                    <div className="md:text-lg text-sm">
                        Email
                    </div>
                </button>
            </Link>
        </div>
    )
}