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
    <div
      data-aos="zoom-in-up"
      className="relative mt-40 h-[550vh] "
      ref={containerRef}
      style={{ backgroundColor: "rgb(248, 237, 227)" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base image (always visible) */}
        {project.length > 0 && (
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="relative w-full h-full">
              <img
                src={project[0].images[0]}
                alt="Base image"
                className="w-full h-full"
              />

              {/* Professional overlay with your colors */}
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                  background: `linear-gradient(
                    135deg,
                    rgba(141, 73, 58, 0.8) 0%,
                    rgba(141, 73, 58, 0.6) 30%,
                    rgba(248, 237, 227, 0.4) 70%,
                    rgba(141, 73, 58, 0.7) 100%
                  )`,
                }}
              />

              {/* Decorative elements */}
              <div
                className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
                style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
              />
              <div
                className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: "rgba(248, 237, 227, 0.5)" }}
              />

              {/* Base image content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-12 z-10">
                {/* Category badge */}
                <div
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(248, 237, 227, 0.9)",
                    color: "rgb(141, 73, 58)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  />
                  Featured Project
                </div>

                <h1
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center leading-tight"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  {project[0]?.heading || "Default Title"}
                </h1>

                <p
                  className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-center max-w-2xl leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  {project[0]?.subTitle || "Default subtitle"}
                </p>

                <Link
                  href={`/projects/${project[0].id}`}
                  className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  style={{
                    backgroundColor: "rgb(248, 237, 227)",
                    color: "rgb(141, 73, 58)",
                    boxShadow: "0 10px 30px rgba(141, 73, 58, 0.3)",
                  }}
                >
                  <span className="relative z-10">View Project</span>
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                  {/* Hover effect background */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(248, 237, 227, 0.9) 100%)",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic overlay images with content */}
        {project.slice(1, 3).map((item, index) => {
          const yTransforms = [image1Y, image2Y, image3Y, image4Y];
          return (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full lg:h-full z-${
                (index + 1) * 10
              }`}
              style={{ y: yTransforms[index] }}
            >
              <div className="relative w-full h-full">
                <img
                  src={item.images[0]}
                  alt={`Project ${index + 1}`}
                  fill="none"
                  className="w-full h-full"
                />

                {/* Professional overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(
                      45deg,
                      rgba(141, 73, 58, 0.5) 0%,
                      rgba(141, 73, 58, 0.7) 0%,
                      rgba(110, 237, 227, 0.3) 100%
                    )`,
                  }}
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-12">
                  {/* Project number */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold mb-6 backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(248, 237, 227, 0.2)",
                      color: "rgb(255, 255, 255)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center leading-tight"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    {item.heading}
                  </h2>

                  <p
                    className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-center max-w-xl leading-relaxed"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {item.subTitle}
                  </p>

                  <Link
                    href={`/projects/${item.id}`}
                    className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 transform hover:shadow-2xl"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      color: "rgb(255, 255, 255)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <span className="relative z-10">View Project</span>
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>

                    {/* Hover background */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundColor: "rgba(248, 237, 227, 0.2)",
                      }}
                    />
                  </Link>

                  {/* Progress indicator */}
                  <div className="absolute top-8 right-8 flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === index + 1 ? "w-8" : ""
                        }`}
                        style={{
                          backgroundColor:
                            i === index + 1
                              ? "rgb(248, 237, 227)"
                              : "rgba(255, 255, 255, 0.4)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
