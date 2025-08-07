"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";

const TroscanGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image paths
  const imagePaths = [
    "/animat img/img-1.jpeg",
    "/animat img/img-2.jpeg", 
    "/animat img/img-4.jpeg",
    "/animat img/img-5.jpeg",
    "/animat img/img-6.jpeg",
    "/animat img/img-7.jpeg"
  ];

  // Animation controls
 const moveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textProgress = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  // Initial centered positions (hexagonal formation)
  const initialPositions = [
    { x: -80, y: -100 },  // top-left
    { x: 80, y: -100 },   // top-right
    { x: -160, y: 0 },    // left
    { x: 160, y: 0 },     // right
    { x: -80, y: 100 },   // bottom-left
    { x: 80, y: 100 }     // bottom-right
  ];

  // Final positions:
  // - 4 images at opposite angles (diagonal pairs)
  // - 2 images vertically opposite
  const finalPositions = [
    { x: -350, y: -250 },  // top-left (angle)
    { x: 350, y: -250 },   // top-right (angle)
    { x: 0, y: -300 },     // top-center (vertical)
    { x: 0, y: 300 },      // bottom-center (vertical)
    { x: -350, y: 250 },   // bottom-left (angle)
    { x: 350, y: 250 }     // bottom-right (angle)
  ];
  return (
    <Container>
        <div className="relative min-h-screen h-[600vh] bg-[#f8ede3]" ref={containerRef}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 6 Images - Always visible */}
        {imagePaths.map((path, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              x: useTransform(moveProgress, [0, 1], [initialPositions[i].x, finalPositions[i].x]),
              y: useTransform(moveProgress, [0, 1], [initialPositions[i].y, finalPositions[i].y]),
              zIndex: 10,
              opacity: 1 // Always visible
            }}
          >
            <div className="w-[150px] h-[180px] md:w-[180px] md:h-[240px] relative shadow-xl border-4 border-white">
              <Image
                src={path}
                alt={`Design ${i+1}`}
                fill
                className="w-full h-full"
                sizes="(max-width: 900px) 120px, 180px"
              />
            </div>
          </motion.div>
        ))}

        {/* Text that appears when images are in position */}
        <motion.div
          className="absolute text-center px-8 max-w-2xl mx-auto"
          style={{
            opacity: textProgress,
            scale: textProgress,
            zIndex: 20
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#8d493a]">
            Transforming spaces with style
          </h1>
          <p className="text-xl md:text-2xl text-[#8d493a] opacity-90">
            Through Troscán's exquisite design expertise.
          </p>
        </motion.div>
      </div>
    </div>
    </Container>
  );
};

export default TroscanGallery;