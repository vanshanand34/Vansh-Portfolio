'use client'

import ParentLayout from "../ParentLayout";
import { AboutMe } from "./About";

export default function AboutMePage() {
  return (
    <ParentLayout
      ChildComponent={<AboutMe />}
      elementName="about-me"
    />
  )
}
