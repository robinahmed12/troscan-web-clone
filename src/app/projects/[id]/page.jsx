"use client";

import Container from "@/app/components/ui/Container";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProjectDetails = ({ params }) => {
  const { id } = React.use(params);
  console.log(id);

  const [project, setProject] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [nextProject, setNextProject] = useState(null);
  const [followingProject, setFollowingProject] = useState(null);

  React.useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data);
        const matched = data.find((item) => item.id === id);
        setProject(matched);

        // Find next project
        const currentIndex = data.findIndex((item) => item.id === id);
        const nextIndex = (currentIndex + 1) % data.length;
        const followingIndex = (currentIndex + 2) % data.length;
        setFollowingProject(data[followingIndex]);
        setNextProject(data[nextIndex]);
      })
      .catch((err) => console.error("Failed to load data:", err));
      document.title = "Project Details"
  }, [id]);

  const { features, feature, feat, feat2, feat3 } = project;

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
            <div  className="absolute bottom-9 inset-x-0 flex flex-col lg:flex-row justify-between items-start lg:items-end px-4 md:px-6 gap-4 lg:gap-6">
              <h1 data-aos="fade-up" className="text-white w-full lg:w-[400px] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
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

            {project.id === "4" && project.images?.length > 5 && (
              <div className="mt-10">
                <h3
                  className="mt-5 text-2xl lg:text-3xl font-bold mb-4"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  {feat2?.title}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">{feat2?.paragraph}</p>
                  <p className="leading-relaxed">{feat2?.para}</p>
                  <p className="leading-relaxed">{feat2?.paras}</p>
                </div>
                <img
                  className="mt-6 rounded-2xl w-full h-[200px] lg:h-[250px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                  src={project?.images?.[5]}
                  alt=""
                />
              </div>
            )}

            {project.id === "4" && project.images?.length > 5 && (
              <div className="mt-10">
                <h3
                  className="mt-5 text-2xl lg:text-3xl font-bold mb-4"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  {feat3?.title}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">{feat3?.paragraph}</p>
                  <p className="leading-relaxed">{feat3?.para}</p>
                  <p className="leading-relaxed">{feat3?.paras}</p>
                </div>
                <img
                  className="mt-6 rounded-2xl w-full h-[200px] lg:h-[250px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                  src={project?.images?.[6]}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div data-aos="fade-up"
     className="max-w-7xl mt-20 mx-auto px-4 lg:px-5 py-20">
        <div className="flex justify-between items-center mb-10">
          <div >
            <p className="text-[#8d493a]"> Next Project</p>
            <h2
              className="text-3xl mt-5 md:text-4xl font-bold"
              style={{ color: "rgb(141, 73, 58)" }}
            >
              On to the Next <br /> Masterpiece
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm mt-5 font-semibold uppercase tracking-wider hover:underline"
            style={{ color: "rgb(141, 73, 58)" }}
          >
            View All Projects
          </Link>
        </div>

        {nextProject && (
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href={`/projects/${nextProject.id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={nextProject.images[0]}
                    alt={nextProject.heading}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {nextProject.heading}
                  </h3>
                  <p className="text-gray-600">{nextProject.subTitle}</p>
                </div>
              </div>
            </Link>

            <Link href={`/projects/${followingProject.id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={followingProject.images[0]}
                    alt={nextProject.heading}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {followingProject.heading}
                  </h3>
                  <p className="text-gray-600">{followingProject.subTitle}</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
