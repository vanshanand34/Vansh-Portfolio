import { Metadata } from "next";
import AboutPage from "./AboutPage"

export const metadata: Metadata = {
  title: "Vansh Anand Portfolio- About Me",
  description: "Portfolio of Vansh Anand",
}

export default function Home() {
  return <AboutPage />
}
