"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/animat img/img-1.jpeg",
  "/animat img/img-5.jpeg",
  "/animat img/img-2.jpeg",
];

const variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
  type: "scale",
  ease: "easeInOut",
  duration: 1.2,
}

  },
};

export default function Project() {
  return (
    <div className="w-full">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative w-full h-screen overflow-hidden"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={variants}
        >
          <Image
            src={src}
            alt={`project-${index}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}
