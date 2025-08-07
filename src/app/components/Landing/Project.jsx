"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    // Load all projects
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Control when each image comes into view
  const image1Y = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
  const image2Y = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const image3Y = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const image4Y = useTransform(scrollYProgress, [0.75, 1], ["100%", "0%"]);

  return (
    <div className="relative h-[550vh]" ref={containerRef}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        Base image (always visible)
       {
        project.map( p =>  <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={p.images[0]}
            alt="Base image"
            fill
            className="w-full"
            priority
          />
          {/* Base image content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12  z-10">
            <h1 className="text-4xl text-white font-bold mb-4">
              {p?.heading || "Default Title"}
            </h1>
            <p className="text-xl text-white mb-8">
              {p?.subTitle || "Default subtitle"}
            </p>
            <Link
            href={`/projects/${p.id}`}
             className="px-6 py-3 bg-white text-amber-900 rounded-lg hover:bg-opacity-90 transition">
              View Project
            </Link>
          </div>
        </div>)
       }
        {/* Dynamic overlay images with content */}
        {project.slice(1, 3).map((item, index) => {
          const yTransforms = [image1Y, image2Y, image3Y, image4Y];
          return (
            <motion.div
              key={index}
              className={`absolute inset-0 bg-black/70 w-full h-full z-${(index + 1) * 10}`}
              style={{ y: yTransforms[index] }}
            >
              <img
                src={item.images[0]}
                alt={`Image ${index + 1}`}
                fill
                className="w-full"
              />
              {/* Overlay content */}
              <div className="absolute  inset-0 flex flex-col justify-center items-center p-12   bg-opacity-40">
                <h2 className="text-3xl text-white font-bold mb-2">
                  {item.heading}
                </h2>
                <p className="text-lg mb-6 text-white text-center">{item.subTitle}</p>
                <a
                  href={`/projects/${item.id}`}
                  className="px-6 flex  py-2 bg-white text-amber-900 rounded-lg hover:bg-opacity-90 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
