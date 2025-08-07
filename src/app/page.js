import Image from "next/image";
import Banner from "./components/Landing/Banner";
import About from "./components/Landing/About";
import AnimateImgSection from "./components/Landing/AnimateImgSection";
import Project from "./components/Landing/Project";
import Expertise from "./components/Landing/Expertise";


export default function Home() {
  return (
    <>
      <Banner />
      <About />
      {/* <AnimateImgSection /> */}
      <Project />
      <Expertise/>
    </>
  );
}
