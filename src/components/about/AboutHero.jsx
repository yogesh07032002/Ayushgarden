import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Base Landscape Photo */}
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2025/9/542941871/ZL/ZD/PL/250172649/garden-landscaping-service-500x500.png"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* 2. Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none" />

      {/* 4. Center Content */}
      <div className="relative z-10 text-center px-4 space-y-3">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
          About Us
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-lime-500">
          <Link
            to="/"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            Home
          </Link>

          <FaChevronRight className="text-[10px] text-gray-300" />

          <span className="text-white font-semibold">About Us</span>
        </nav>
      </div>
    </section>
  );
};

export default AboutHero;
