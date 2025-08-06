'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white rounded-lg mx-4 mt-4">
      <div className="max-w-[700px] mx-auto px-5 py-1.5">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4">
            <Link href="/" className="text-2xl font-bold text-[#8D493A] hover:opacity-80 transition-opacity duration-200">
              Troscan
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={"/about"}
              className="text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href={"/projects"}
              className="text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link 
              href={"/news"} 
              className="text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium"
            >
              News
            </Link>
            
            {/* Contact Button */}
            <Link 
              href="#contact" 
              className="bg-[#8D493A] text-white px-6 py-2 rounded-lg hover:bg-[#8D493A]/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#8D493A] hover:text-[#8D493A]/80 focus:outline-none focus:ring-2 focus:ring-[#8D493A]/20 rounded-lg p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-[#F8EDE3]/70 backdrop-blur-sm border-t border-[#8D493A]/10 rounded-b-lg">
          <div className="px-8 py-4 space-y-3">
            <Link 
              href="#about" 
              className="block text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="block text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="block text-[#8D493A] hover:text-[#8D493A]/80 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Contact Button */}
            <Link 
              href="#contact" 
              className="block w-full text-center bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-[#8D493A]/90 transition-all duration-200 font-medium shadow-md mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;