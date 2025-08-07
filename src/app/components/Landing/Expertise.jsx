"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { motion, AnimatePresence } from "framer-motion";

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
    <Container>
      <div className="mt-20 text-center">
        <h1 className="text-lg font-medium text-gray-500">Our Expertise</h1>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
          Selecting the ideal <br /> elements to elevate <br /> your space
        </h1>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-10 items-start">
        {/* Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden rounded-xl shadow-md">
          <AnimatePresence mode="wait">
            <motion.img
              key={items[activeIndex].image}
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Text List */}
        <div className="w-full md:w-1/2 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all px-4 py-2 rounded-md border-l-4 ${
                activeIndex === index
                  ? "bg-[#7a3e2d] text-white border-[#7a3e2d]"
                  : "bg-transparent text-[#7a3e2d] border-transparent hover:bg-[#f8f1ee]"
              }`}
            >
              <h2 className="text-lg font-semibold">{`0${index + 1} ${item.title}`}</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Expertise;
