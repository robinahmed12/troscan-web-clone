import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#884F3D] mt-14 text-[#f8ede3] px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold tracking-wide">Troscán</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center  max-w-5xl mx-auto">
        {/* Sitemap */}
        <div>
          <h3 className="uppercase text-sm tracking-wide mb-3">Sitemap</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="uppercase text-sm tracking-wide mb-3">Socials</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="uppercase text-sm tracking-wide mb-3">More</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:underline">License</a></li>
            <li><a href="#" className="hover:underline">Grainient</a></li>
            <li><a href="#" className="hover:underline">Inspirux</a></li>
            <li><a href="#" className="hover:underline">Store</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#f8ede3]/30 mt-12 pt-4 text-center text-xs text-[#f8ede3]/80">
        © 2025, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
