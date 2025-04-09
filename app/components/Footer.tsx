import React from "react"
import LinkButtons from "../LinkButtons"

export default function Footer({ extracss = "" }: { extracss?: string }) {
    return (
        <footer className={`flex justify-center gap-x-4 sm:gap-x-6 :gap-x-8 lg:gap-x-16 items-center ${extracss}`}>
            <div className="dark:text-gray-400 text-gray-600 text-sm sm:text-md md:text-base">
                © Vansh Anand
            </div>

            <div>
                <LinkButtons isHomePage={true} height={14} width={14} />
            </div>

        </footer>
    )
}