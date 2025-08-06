"use client";

import Container from "@/app/components/ui/Container";
import React, { useEffect, useState } from "react";

const ProjectDetails = ({ params }) => {
  const { id } = React.use(params);
  console.log(id);

  const [project, setProject] = useState([]);
  console.log(project);

  React.useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((item) => item.id === id);
        setProject(matched);
      })
      .catch((err) => console.error("Failed to load data:", err));
  }, [id]);

  const { features, feature, feat } = project;

  return (
    <div
      style={{ backgroundColor: "rgb(248, 237, 227)" }}
      className="min-h-screen"
    >
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Background image */}
        <img
          src={project.images}
          alt="Project Banner"
          className="w-full h-full object-cover"
        />

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60">
          <div className="relative h-full max-w-7xl mx-auto">
            <div className="absolute bottom-9 inset-x-0 flex flex-col lg:flex-row justify-between items-start lg:items-end px-4 md:px-6 gap-4 lg:gap-6">
              <h1 className="text-white w-full lg:w-[400px] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                {project.heading}
              </h1>
              <p className="text-white/95 text-base md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md">
                {project.subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20  lg:mt-40 px-4 lg:px-5 grid gap-8 lg:gap-5 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto items-start">
        {/* Enhanced image */}
        <div className="lg:sticky lg:top-0 self-start h-fit">
          <img
            className="rounded-2xl w-full h-[400px] lg:h-[650px] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            src={project.images?.[1]}
            alt=""
          />
        </div>

        {/* Enhanced content */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="mb-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{
                backgroundColor: "rgba(141, 73, 58, 0.1)",
                color: "rgb(141, 73, 58)",
              }}
            >
              Project Overview
            </div>
            <h1 className="text-xl lg:text-2xl font-light leading-relaxed text-gray-700">
              {project.description}
            </h1>
          </div>

          <div className="space-y-10">
            <div>
              <h3
                className="mt-5 text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                {features?.title}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">{features?.paragraph}</p>
                <p className="leading-relaxed">{features?.para}</p>
                <p className="leading-relaxed">{features?.paras}</p>
              </div>
              <img
                className="mt-6 rounded-2xl w-full h-[200px] lg:h-[250px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                src={project?.images?.[2]}
                alt=""
              />
            </div>

            <div className="mt-10">
              <h3
                className="mt-5 text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                {feature?.title}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">{feature?.paragraph}</p>
                <p className="leading-relaxed">{feature?.para}</p>
                <p className="leading-relaxed">{feature?.paras}</p>
              </div>
              <img
                className="mt-6 rounded-2xl w-full h-[200px] lg:h-[250px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                src={project?.images?.[3]}
                alt=""
              />
            </div>

            <div className="mt-10">
              <h3
                className="mt-5 text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                {feat?.title}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">{feat?.paragraph}</p>
                <p className="leading-relaxed">{feat?.para}</p>
                <p className="leading-relaxed">{feat?.paras}</p>
              </div>
              <img
                className="mt-6 rounded-2xl w-full h-[200px] lg:h-[250px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                src={project?.images?.[4]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
