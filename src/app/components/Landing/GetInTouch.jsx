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
      style={{ backgroundColor: "rgb(248, 237, 227)" }}
    >
      {/* Sticky background image */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src="https://framerusercontent.com/images/Uv9jeirMiBGocQPSDko8jsMMolo.jpeg"
            alt="Sticky Project"
            className="w-full h-full object-cover"
          />

          {/* Enhanced gradient overlay with subtle pattern */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(141,73,58,0.15) 0%, rgba(248,237,227,0.25) 50%, rgba(141,73,58,0.1) 100%),
                radial-gradient(circle at 30% 20%, rgba(248,237,227,0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(141,73,58,0.05) 0%, transparent 50%)
              `,
            }}
          />

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full opacity-30 animate-pulse hidden lg:block"
               style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
          <div className="absolute top-40 right-20 w-2 h-2 rounded-full opacity-40 animate-pulse hidden lg:block"
               style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 rounded-full opacity-20 animate-pulse hidden md:block"
               style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
        </div>
      </div>

      {/* Professional Square Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.2 
        }}
        viewport={{ once: true }}
        className="absolute top-[140vh] left-1/2 transform -translate-x-1/2 
             w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]
             group cursor-pointer"
      >
        {/* Card Container with enhanced styling */}
        <div 
          className="relative w-full h-full bg-white rounded-3xl shadow-2xl 
                   hover:shadow-3xl transition-all duration-700 ease-out
                   transform hover:-translate-y-4 hover:rotate-1
                   border border-white/50 backdrop-blur-sm
                   overflow-hidden"
          style={{ 
            boxShadow: `
              0 25px 50px -12px rgba(141, 73, 58, 0.25),
              0 0 0 1px rgba(141, 73, 58, 0.05)
            `
          }}
        >
          {/* Decorative top accent */}
          <div 
            className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 
                     group-hover:scale-x-100 transition-transform duration-500"
            style={{ backgroundColor: "rgb(141, 73, 58)" }}
          ></div>

          {/* Content Container */}
          <div className="flex flex-col justify-center items-center h-full p-8 sm:p-10 md:p-12 text-center relative">
            
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                 style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
            <div className="absolute bottom-6 right-6 w-6 h-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                 style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>

            {/* Icon/Logo space */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 p-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 
                       group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: "rgba(248, 237, 227, 0.3)" }}
            >
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>

            {/* Main heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "rgb(141, 73, 58)" }}
            >
              Let's Create Together
            </motion.h2>

            {/* Description text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 opacity-80 max-w-sm"
              style={{ color: "rgb(141, 73, 58)" }}
            >
              Ready to reimagine your space? Connect with us at Troscán to bring your vision to life with our expertise in design and decoration.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full"
            >
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center w-full sm:w-auto
                         px-8 py-4 text-white font-semibold rounded-2xl
                         transform transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg
                         focus:outline-none focus:ring-4 focus:ring-opacity-30
                         text-sm sm:text-base relative overflow-hidden"
                style={{ 
                  backgroundColor: "rgb(141, 73, 58)",
                  focusRingColor: "rgb(141, 73, 58)"
                }}
              >
                {/* Button background animation */}
                <span 
                  className="absolute inset-0 w-0 group-hover/btn:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: "rgb(120, 60, 45)" }}
                ></span>
                
                {/* Button content */}
                <span className="relative flex items-center">
                  Get in Touch
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Subtle background pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(141, 73, 58) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>

        {/* Floating shadow effect */}
        <div 
          className="absolute inset-0 rounded-3xl -z-10 transform translate-y-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(ellipse at center, rgba(141, 73, 58, 0.3) 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        ></div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-[120vh] left-10 w-32 h-32 rounded-full opacity-5 pointer-events-none hidden lg:block"
           style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
      <div className="absolute top-[160vh] right-10 w-20 h-20 rounded-full opacity-5 pointer-events-none hidden lg:block"
           style={{ backgroundColor: "rgb(141, 73, 58)" }}></div>
    </div>
  );
};

export default GetIn;