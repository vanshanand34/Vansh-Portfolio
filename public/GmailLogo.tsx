import React from "react";

export default function GmailLogo({width = 18, height = 18}: {width?: number, height?: number}) {
    return (
        <div className="dark:text-white px-1">
            <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 13.5L2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6L12 13.5Z" />
                <path d="M20 4H4C2.9 4 2 4.9 2 6L12 13L22 6C22 4.9 21.1 4 20 4Z" />
            </svg>
        </div>

    )
}