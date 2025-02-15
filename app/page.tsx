import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Vansh Anand Portfolio",
  description: "Portfolio of Vansh Anand",
}

export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
