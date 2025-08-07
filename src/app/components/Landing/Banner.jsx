'use client';
import Image from "next/image";
import Navbar from "../Navbar";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-screen pt-20"> {/* Adjusted pt-20 to account for navbar height */}
      {/* Background Image */}
      <Image
        src="/banner.jpeg"
        alt="Banner Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-10 bg-no-repeat"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-amber-900/50 z-10"></div>
      
      {/* Hero Content */}
      <div data-aos="fade-up" className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">Timeless Comfort</span>
            <span className="block text-[rgb(248,237,227)]">
              & Endless Luxury
            </span>
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Experience the perfect blend of sophistication and comfort in every
            detail
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href={"/about"}
             className="group relative px-8 py-4 bg-[rgb(141,73,58)] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Our Vision</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
            </Link>

            <Link href={"#expertise"} className="group relative px-8 py-4 bg-transparent border-2 border-[rgb(248,237,227)] text-[rgb(248,237,227)] font-semibold rounded-full hover:bg-[rgb(248,237,227)] hover:text-[rgb(141,73,58)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Explore Our Expertise</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-20 h-20 border border-[rgba(248,237,227,0.3)] rounded-full hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-8 w-16 h-16 border border-[rgba(248,237,227,0.3)] rounded-full hidden lg:block"></div>
    </div>
  );
}