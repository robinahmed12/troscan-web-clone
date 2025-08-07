"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
   <div 
    
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div 
              className="inline-block w-20 h-1 rounded-full mb-6"
              style={{ backgroundColor: 'rgb(141, 73, 58)' }}
            ></div>
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Expert Insights and <br className="hidden sm:block" /> 
            Design Inspiration
          </h1>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            style={{ color: 'rgb(141, 73, 58)' }}
          >
            Discover the latest trends, insights, and creative inspiration from industry experts
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {news.slice(0 , 3).map((item, index) => (
            <Link 
            href={`/news/${item.id}`}
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Container */}
              <div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                style={{ 
                  boxShadow: '0 10px 30px rgba(141, 73, 58, 0.1)',
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill="none"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(141, 73, 58, 0.8) 0%, rgba(248, 237, 227, 0.4) 100%)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Floating Date Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg"
                    style={{ backgroundColor: 'rgba(141, 73, 58, 0.9)' }}
                  >
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h2 
                      className="text-xl lg:text-2xl font-bold mb-3 leading-tight group-hover:opacity-80 transition-opacity duration-300"
                      style={{ color: 'rgb(141, 73, 58)' }}
                    >
                      {item.heading}
                    </h2>
                    <p 
                      className="text-base lg:text-lg leading-relaxed mb-6 opacity-75"
                      style={{ color: 'rgb(141, 73, 58)' }}
                    >
                      {item.subHeading}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-auto">
                    <div 
                      className="inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      style={{ color: 'rgb(141, 73, 58)' }}
                    >
                      <span>Read More</span>
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform"
            style={{ 
              backgroundColor: 'rgb(141, 73, 58)',
              boxShadow: '0 4px 15px rgba(141, 73, 58, 0.3)'
            }}
          >
            Load More Articles
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 pointer-events-none hidden lg:block"
             style={{ backgroundColor: 'rgb(141, 73, 58)' }}
        ></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-10 pointer-events-none hidden lg:block"
             style={{ backgroundColor: 'rgb(141, 73, 58)' }}
        ></div>
      </div>
    </div>
  );
};

export default News;
