"use client" 
import Image from "next/image";
import Banner from "./components/Landing/Banner";
import About from "./components/Landing/About";
import Project from "./components/Landing/Project";
import Expertise from "./components/Landing/Expertise";
import GetIn from "./components/Landing/GetInTouch";
import News from "./components/Landing/News";
import TroscanGallery from "./components/Landing/TroscanGallery";



export default function Home() {
 
  return (
    <>
      <Banner />

      <About />
      <TroscanGallery />

      <Project />

      <Expertise />

      <GetIn />
      <News />
    </>
  );
}
