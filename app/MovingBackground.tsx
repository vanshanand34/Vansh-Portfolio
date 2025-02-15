import React from "react";

export default function trackCursor(event: React.MouseEvent): void {
    let xCoordinate: number = event.pageX;
    let yCoordinate: number = event.pageY - window.scrollY;

    let element = document.getElementById("cursor")!;
    const cursorElement: HTMLElement = element!;
    cursorElement.style.transform = `translate(
            ${xCoordinate - element.offsetWidth / 2}px, 
            ${yCoordinate - element.offsetHeight / 2}px
        )`;
}
