"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { motion, AnimatePresence  } from "framer-motion";

const items = [
  {
    title: "Custom Furniture Design",
    image: "https://framerusercontent.com/images/KdQ95Q3pfhLOIwVe9qSUBK1fk.jpeg",
  },
  {
    title: "Room Decoration & Styling",
    image: "https://framerusercontent.com/images/aqfXMublrraihocca3U6iDYHyc.jpeg?scale-down-to=1024",
  },
  {
    title: "Space Planning & Interior Layout",
    image: "https://framerusercontent.com/images/PzGfS0tMVPZZc0jcqD3wHEmmQI.jpeg",
  },
  {
    title: "Home Renovations & Remodeling",
    image: "https://framerusercontent.com/images/KdQ95Q3pfhLOIwVe9qSUBK1fk.jpeg?scale-down-to=1024",
  },
  {
    title: "Lighting Design",
    image: "https://framerusercontent.com/images/5Bsk9IjkqVtzmXX71ASTIlfNp0.jpeg?scale-down-to=1024",
  },
  {
    title: "Virtual Interior Design Consultations",
    image: "https://framerusercontent.com/images/5RDxKCHJwVzXuvUd5i9RY6vW3o.jpeg?scale-down-to=1024",
  },
];

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div 
      className="min-h-screen py-16 lg:py-20"
      style={{ backgroundColor: 'rgb(248, 237, 227)' }}
    >
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-8">
            {/* Decorative accent */}
            <div 
              className="inline-block w-16 h-1 rounded-full mb-6"
              style={{ backgroundColor: 'rgb(141, 73, 58)' }}
            ></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-medium tracking-wide uppercase opacity-70 mb-6"
              style={{ color: 'rgb(141, 73, 58)' }}
            >
              Our Expertise
            </motion.p>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl  lg:text-5xl xl:text-6xl font-bold leading-tight"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Selecting the ideal{" "}
            <br className="hidden sm:block" />
            elements to elevate{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              your space
              <div 
                className="absolute -bottom-2 left-0 w-full h-3 -skew-y-1 opacity-30"
                style={{ backgroundColor: 'rgba(248, 237, 227, 0.7)' }}
              ></div>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg max-w-2xl mx-auto mt-6 opacity-75 leading-relaxed"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Transform your vision into reality with our comprehensive design expertise and personalized approach
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative h-[350px]  sm:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={items[activeIndex].image}
                    src={items[activeIndex].image}
                    alt={items[activeIndex].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute  w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(141, 73, 58, 0.3) 0%, transparent 50%, rgba(248, 237, 227, 0.4) 100%)'
                  }}
                ></div>
                
                {/* Active Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div 
                    className="backdrop-blur-sm rounded-2xl p-4 lg:p-6"
                    style={{ backgroundColor: 'rgba(248, 237, 227, 0.9)' }}
                  >
                    <motion.h3 
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl lg:text-2xl font-bold"
                      style={{ color: 'rgb(141, 73, 58)' }}
                    >
                      {items[activeIndex].title}
                    </motion.h3>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div 
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-30 hidden lg:block"
                style={{ backgroundColor: 'rgb(141, 73, 58)' }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-20 hidden lg:block"
                style={{ backgroundColor: 'rgb(141, 73, 58)' }}
              ></div>
            </div>
          </motion.div>

          {/* Services List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="space-y-3 lg:space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                      activeIndex === index
                        ? "shadow-xl scale-105"
                        : "hover:shadow-lg"
                    }`}
                    style={{
                      backgroundColor: activeIndex === index 
                        ? 'rgb(141, 73, 58)' 
                        : 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 flex items-center justify-between">
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        {/* Number Badge */}
                        <div 
                          className={`flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 ${
                            activeIndex === index
                              ? "bg-white text-[rgb(141,73,58)] shadow-lg"
                              : "bg-[rgb(141,73,58)] text-white group-hover:shadow-md"
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        
                        {/* Title */}
                        <h2 
                          className={`text-lg lg:text-xl xl:text-2xl font-bold transition-colors duration-300 ${
                            activeIndex === index
                              ? "text-white"
                              : "group-hover:opacity-80"
                          }`}
                          style={{ 
                            color: activeIndex === index ? 'white' : 'rgb(141, 73, 58)' 
                          }}
                        >
                          {item.title}
                        </h2>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className={`transform transition-all duration-300 ${
                        activeIndex === index ? "translate-x-0 opacity-100" : "translate-x-2 opacity-50"
                      }`}>
                        <svg 
                          className={`w-6 h-6 lg:w-7 lg:h-7 ${
                            activeIndex === index ? "text-white" : "text-[rgb(141,73,58)]"
                          }`}
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
                      </div>
                    </div>

                    {/* Active Border */}
                    {activeIndex === index && (
                      <motion.div 
                        layoutId="activeBorder"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover Effect Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-[rgb(141,73,58)]/20"
            >
              <button 
                className="group flex items-center space-x-3 text-[rgb(141,73,58)] font-semibold hover:underline transition-all duration-300"
              >
                <span>Explore All Services</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-20 left-4 w-32 h-32 rounded-full opacity-5 pointer-events-none hidden xl:block"
             style={{ backgroundColor: 'rgb(141, 73, 58)' }}
        ></div>
        <div className="absolute bottom-20 right-8 w-24 h-24 rounded-full opacity-10 pointer-events-none hidden xl:block"
             style={{ backgroundColor: 'rgb(141, 73, 58)' }}
        ></div>
      </Container>
    </div>
  );
};

export default Expertise;