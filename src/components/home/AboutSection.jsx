import { FaCheckSquare, FaLeaf } from "react-icons/fa";

import React from "react";

const AboutSection = () => {
  const highlights = [
    "Landscape Design & Plantation",
    "Irrigation & Automation Systems",
    "Farm & Plot Development",
    "Lawn Development & Care",
    "Fruit Plantation Projects",
    "Regular Maintenance Services",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE: ARCHED IMAGE ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Arched Shaped Image Frame */}
              <div className="overflow-hidden rounded-t-[220px] rounded-b-2xl border-4 border-white shadow-2xl aspect-[4/5] relative z-10">
                <img
                  src="https://i.pinimg.com/1200x/d2/ba/84/d2ba8423cf0aae0283663edcd7050f79.jpg"
                  alt="Aayush Landscaping Work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Background Accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lime-100 rounded-full blur-2xl -z-0 opacity-70"></div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#83b735] mb-3">
              <span>Welcome To Aayush Natural Landscaping</span>
              <FaLeaf className="text-sm" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight mb-5">
              Creating Green Spaces with Smart Planning &amp; Expert Care
            </h2>

            {/* Paragraph Text */}
            <p className="text-neutral-600 text-base leading-relaxed mb-4">
               Aayush Natural Landscaping provides professional landscaping and gardening
              solutions for residential, commercial, and agricultural spaces in
              Pune and surrounding areas.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-7">
              From designing a beautiful home garden to developing large farm plots
              with fruit plantations and automated irrigation systems, we provide
              complete end-to-end solutions from planning to regular maintenance.
            </p>

            {/* Service Checkmarks Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <FaCheckSquare className="text-[#83b735] text-base shrink-0" />
                  <span className="text-sm font-semibold text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#about"
                className="inline-block bg-[#83b735] hover:bg-[#74a52d] text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                About Our Company
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;