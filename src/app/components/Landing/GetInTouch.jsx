"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GetIn = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate card opacity and movement
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh]"
      style={{ backgroundColor: "#f8ede3" }}
    >
      {/* Sticky background image */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src="https://framerusercontent.com/images/Uv9jeirMiBGocQPSDko8jsMMolo.jpeg" // Make sure this image exists in your public folder
          alt="Sticky Project"
         
          className="w-full"
          
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(141,73,58,0.2), rgba(248,237,227,0.3))",
          }}
        />
      </div>

      {/* Scroll-triggered card */}
      <motion.div
        style={{
          opacity: cardOpacity,
          y: cardY,
        }}
        className="absolute top-[140vh] left-1/2 transform -translate-x-1/2 w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl"
      >

        <p className="text-gray-700 mb-4 text-center">
         Ready to reimagine your space? Connect with us at Troscán to bring your vision to life with our expertise in design and decoration.
        </p>
        <Link
        href={"/contact"}
         className="mt-2 flex justify-center px-6 py-2 bg-[#8d493a] text-white rounded-full hover:bg-[#7c3f33] transition">
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default GetIn;
