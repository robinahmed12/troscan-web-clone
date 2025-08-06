"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AnimateImgSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced transform values for smoother movement
  const moveTopLeft = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const moveTopRight = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const moveBottomLeft = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const moveBottomRight = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Staggered opacity for text reveal
  const opacityText = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const scaleText = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1]);

  // Individual image rotations and scales
  const rotateImg1 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const rotateImg2 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotateImg3 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotateImg4 = useTransform(scrollYProgress, [0, 1], [0, -12]);

  const scaleImages = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: 'rgb(248, 237, 227)' }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5" />
      
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'rgba(141, 73, 58, 0.1)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'rgba(141, 73, 58, 0.1)' }}
      />

      {/* Center Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4 max-w-4xl"
        style={{ 
          opacity: opacityText,
          scale: scaleText,
          color: 'rgb(141, 73, 58)'
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          We Create Art
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light opacity-80">
            Through Space
          </span>
        </h1>
        
        {/* Decorative Line */}
        <motion.div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{ backgroundColor: 'rgb(141, 73, 58)' }}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        {/* Subtitle */}
        <motion.p 
          className="mt-6 text-lg sm:text-xl opacity-70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Transforming imagination into visual reality through innovative spatial design
        </motion.p>
      </motion.div>

      {/* Animated Images Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Image 1 - Top Left */}
        <motion.div 
          style={{ 
            x: moveTopLeft, 
            y: moveTopLeft,
            rotate: rotateImg1,
            scale: scaleImages
          }} 
          className="absolute z-10"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-1.jpeg"
              alt="Artistic creation 1"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.4)',
                border: '3px solid rgba(255, 255, 255, 0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Image 2 - Top Right */}
        <motion.div 
          style={{ 
            x: moveTopRight, 
            y: moveTopLeft,
            rotate: rotateImg2,
            scale: scaleImages
          }} 
          className="absolute z-8"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-2.jpeg"
              alt="Artistic creation 2"
              width={200}
              height={200}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.4)',
                border: '3px solid rgba(255, 255, 255, 0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/30 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Image 3 - Bottom Left */}
        <motion.div 
          style={{ 
            x: moveBottomLeft, 
            y: moveBottomRight,
            rotate: rotateImg3,
            scale: scaleImages
          }} 
          className="absolute z-9"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-4.jpeg"
              alt="Artistic creation 3"
              width={200}
              height={200}
              className="w-26 h-26 sm:w-34 sm:h-34 md:w-42 md:h-42 lg:w-50 lg:h-50 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.4)',
                border: '3px solid rgba(255, 255, 255, 0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Image 4 - Bottom Right */}
        <motion.div 
          style={{ 
            x: moveBottomRight, 
            y: moveBottomRight,
            rotate: rotateImg4,
            scale: scaleImages
          }} 
          className="absolute z-7"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-5.jpeg"
              alt="Artistic creation 4"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.4)',
                border: '3px solid rgba(255, 255, 255, 0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-white/30 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Additional Images for More Dynamic Effect */}
        <motion.div 
          style={{ 
            x: useTransform(scrollYProgress, [0, 1], [0, -120]),
            y: useTransform(scrollYProgress, [0, 1], [0, 120]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 8]),
            scale: scaleImages
          }} 
          className="absolute z-6"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-6.jpeg"
              alt="Artistic creation 5"
              width={200}
              height={200}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110 opacity-80"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.8)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        <motion.div 
          style={{ 
            x: useTransform(scrollYProgress, [0, 1], [0, 140]),
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -10]),
            scale: scaleImages
          }} 
          className="absolute z-5"
        >
          <div className="relative group">
            <Image
              src="/animat img/img-7.jpeg"
              alt="Artistic creation 6"
              width={200}
              height={200}
              className="w-22 h-22 sm:w-30 sm:h-30 md:w-38 md:h-38 lg:w-46 lg:h-46 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110 opacity-70"
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(141, 73, 58, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.8)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrollYProgress > 0.1 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <span 
            className="text-sm font-medium mb-2"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: 'rgb(141, 73, 58)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: 'rgb(141, 73, 58)' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimateImgSection;