import React from "react";

export default function trackCursor(event: React.MouseEvent): void {
    const xCoordinate: number = event?.pageX;
    const yCoordinate: number = event?.pageY - window?.scrollY;

    const element = document.getElementById("cursor")!;
    const cursorElement: HTMLElement = element!;
    cursorElement.style.transform = `translate(
            ${xCoordinate - element.offsetWidth / 2}px, 
            ${yCoordinate - element.offsetHeight / 2}px
        )`;
}
