import React from "react"
import LinkButtons from "../LinkButtons"

export default function Footer({ extracss = "" }: { extracss?: string }) {
    return (
        <footer className={`flex justify-between gap-x-2 sm:gap-x-24 md:gap-x-72 lg:gap-x-96 items-center ${extracss}`}>
            <div className="dark:text-gray-400 text-gray-600 md:text-md text-sm">
                Created By Vansh Anand
            </div>

            <div>
                <LinkButtons isHomePage={true} height={14} width={14} />
            </div>

        </footer>
    )
}