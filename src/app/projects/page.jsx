"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div className="min-h-screen mt-20" style={{ backgroundColor: 'rgb(248, 237, 227)' }}>
      <Container className="pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Where Vision
            <br />
            <span className="relative">
              Meets Design
              <div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ backgroundColor: 'rgb(141, 73, 58)' }}
              ></div>
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Crafting digital experiences that blend creativity with functionality
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.id}`}
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
              }`}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.heading}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(141, 73, 58, 0.8)' }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg 
                          className="w-6 h-6 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                          />
                        </svg>
                      </div>
                      <span className="text-white font-semibold">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-opacity-80 transition-colors duration-300"
                    style={{ color: 'rgb(141, 73, 58)' }}
                  >
                    {project.heading}
                  </h2>
                  <p 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: 'rgba(141, 73, 58, 0.7)' }}
                  >
                    {project.subTitle}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex items-center">
                    <div 
                      className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-12"
                      style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                    ></div>
                    <div 
                      className="w-2 h-2 rounded-full ml-2 transition-all duration-300"
                      style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div 
            className="inline-block px-8 py-4 rounded-full border-2 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: 'rgb(141, 73, 58)', 
              color: 'rgb(141, 73, 58)' 
            }}
          >
            <span className="font-semibold">View All Projects</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;