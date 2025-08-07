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

  // Positions for desktop (hexagonal formation)
  const desktopInitialPositions = [
    { x: -80, y: -100 },  // top-left
    { x: 80, y: -100 },   // top-right
    { x: -160, y: 0 },    // left
    { x: 160, y: 0 },     // right
    { x: -80, y: 100 },   // bottom-left
    { x: 80, y: 100 }     // bottom-right
  ];

  const desktopFinalPositions = [
    { x: -350, y: -250 },  // top-left (angle)
    { x: 350, y: -250 },   // top-right (angle)
    { x: 0, y: -300 },     // top-center (vertical)
    { x: 0, y: 300 },      // bottom-center (vertical)
    { x: -350, y: 250 },   // bottom-left (angle)
    { x: 350, y: 250 }     // bottom-right (angle)
  ];

  // Positions for mobile (3 top, 3 bottom)
  const mobileInitialPositions = [
    { x: -80, y: -80 },   // top-left
    { x: 0, y: -120 },    // top-center
    { x: 80, y: -80 },    // top-right
    { x: -80, y: 80 },    // bottom-left
    { x: 0, y: 120 },     // bottom-center
    { x: 80, y: 80 }      // bottom-right
  ];

  const mobileFinalPositions = [
    { x: -150, y: -250 },  // top-left
    { x: 0, y: -300 },     // top-center
    { x: 150, y: -250 },   // top-right
    { x: -150, y: 250 },   // bottom-left
    { x: 0, y: 300 },      // bottom-center
    { x: 150, y: 250 }     // bottom-right
  ];

  return (
    <Container>
      <div className="relative min-h-screen h-[600vh] bg-[#f8ede3]" ref={containerRef}>
        {/* Sticky container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* 6 Images */}
          {imagePaths.map((path, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                x: useTransform(moveProgress, [0, 1], [
                  typeof window !== 'undefined' && window.innerWidth < 768 ? 
                    mobileInitialPositions[i].x : 
                    desktopInitialPositions[i].x,
                  typeof window !== 'undefined' && window.innerWidth < 768 ? 
                    mobileFinalPositions[i].x : 
                    desktopFinalPositions[i].x
                ]),
                y: useTransform(moveProgress, [0, 1], [
                  typeof window !== 'undefined' && window.innerWidth < 768 ? 
                    mobileInitialPositions[i].y : 
                    desktopInitialPositions[i].y,
                  typeof window !== 'undefined' && window.innerWidth < 768 ? 
                    mobileFinalPositions[i].y : 
                    desktopFinalPositions[i].y
                ]),
                zIndex: 10,
                opacity: 1
              }}
            >
              <div className="w-[120px] h-[160px] sm:w-[150px] sm:h-[180px] md:w-[180px] md:h-[240px] relative shadow-xl border-4 border-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={path}
                  alt={`Design ${i+1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                />
              </div>
            </motion.div>
          ))}

          {/* Text Reveal */}
          <motion.div
            className="absolute text-center px-6 max-w-2xl mx-auto"
            style={{
              opacity: textProgress,
              scale: textProgress,
              zIndex: 20
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-[#8d493a] leading-tight">
              Transforming spaces with style
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#8d493a] opacity-90">
              Through Troscán's exquisite design expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default TroscanGallery;