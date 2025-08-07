"use client";

import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "rgb(248, 237, 227)" }}
    >
      <Container>
        <div className="flex flex-col  lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div data-aos="fade-up" className="flex-1 mt-20 space-y-6">
            <div className="space-y-4">
              <h4
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                About Us
              </h4>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                Where Spaces Inspire, and Design Comes Alive
              </h1>
            </div>

            <div
              className="space-y-4 text-base md:text-lg leading-relaxed"
              style={{ color: "rgb(141, 73, 58)" }}
            >
              <p className="opacity-90">
                At Troscán, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency, we
                transform ordinary rooms into extraordinary experiences.
              </p>

              <p className="opacity-90">
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you're looking to reimagine your
                living room or create an entirely new aesthetic, we're here to
                bring your vision to life.
              </p>
            </div>

            <div className="pt-4">
              <button
                className="px-8 py-4 font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg"
                style={{
                  backgroundColor: "rgb(141, 73, 58)",
                  boxShadow: "0 4px 15px rgba(141, 73, 58, 0.3)",
                }}
              >
                More About Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: "rgb(141, 73, 58)" }}
              ></div>

              <div data-aos="fade-down">
                <Image
                src="/about image.jpeg"
                alt="About Troscan - Premium Furniture Design"
                width={600}
                height={600}
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              </div>
            </div>
          </div>
        </div>

        {/* Optional Stats Section */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                500+
              </div>
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                Projects Completed
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                15+
              </div>
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                Years Experience
              </p>
            </div>

            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                100%
              </div>
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
