import { FaArrowRight, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* 1. CSS Keyframe Animations */}
      <style>{`
        @keyframes morphBlob {
          0% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
          33% {
            border-radius: 65% 35% 50% 50% / 35% 35% 65% 65%;
          }
          66% {
            border-radius: 50% 50% 60% 40% / 60% 40% 60% 40%;
          }
          100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(8px) rotate(-4deg);
          }
        }

        .animate-morph {
          animation: morphBlob 9s ease-in-out infinite alternate;
        }

        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatReverse 6s ease-in-out infinite;
        }
      `}</style>

      {/* Main Container */}
      <section className="relative w-full bg-[#FAF7F2] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 selection:bg-lime-500 selection:text-white">
        
        {/* Subtle Decorative Background Blob */}
        <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-lime-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT: CONTENT AREA ================= */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm border border-lime-500/25 text-[#555555] text-xs sm:text-sm font-medium transition-transform duration-200 hover:scale-[1.02]">
              <FaMapMarkerAlt className="text-lime-500 shrink-0 text-xs sm:text-sm" />
              <span className="truncate max-w-[280px] xs:max-w-none">Uruli Kanchan, Haveli, Pune | Pune–Solapur Highway</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#262626] tracking-tight leading-[1.2] max-w-2xl">
              Transform Your Space with{' '}
              <span className="text-lime-600 sm:text-[#262626]">Beautiful, Sustainable</span>{' '}
              Landscaping
            </h1>

            {/* Subheading */}
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Complete landscaping, gardening, farm development, plantation, irrigation automation and maintenance solutions for homes, farms, farmhouses and large plots.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              
              {/* Primary Consultation Button */}
              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-lime-500 hover:bg-lime-600 active:bg-lime-700 active:scale-95 text-stone-950 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer"
              >
                <span>Get a Free Site Visit</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20your%20landscape%20services."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white border border-stone-200 hover:border-lime-500 text-stone-800 hover:text-lime-600 active:bg-stone-100 active:scale-95 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
              >
                <FaWhatsapp className="text-lg text-lime-600" />
                <span>WhatsApp Us</span>
              </a>

            </div>

          </div>

          {/* ================= RIGHT: RESPONSIVE MORPHING IMAGE ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-8 lg:py-0">
            
            {/* Background Radial Glow */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-lime-500/15 rounded-full blur-3xl -z-10" />

            {/* Central Wrapper for Strict Proportions */}
            <div className="relative w-[270px] h-[270px] xs:w-[310px] xs:h-[310px] sm:w-[390px] sm:h-[390px] md:w-[430px] md:h-[430px] lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] flex items-center justify-center">
              
              {/* Liquid Morphing Main Image Container */}
              <div className="w-full h-full animate-morph overflow-hidden shadow-2xl border-4 border-white bg-white group cursor-pointer">
                <img
                  src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                  alt="Landscaping and Garden Work"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Circle Image */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:right-0 w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float-reverse z-20 bg-white">
                <img 
                  src="https://i.pinimg.com/736x/84/21/9c/84219c9181b2264dad06e1df4ce6dc58.jpg" 
                  alt="Plantation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Pill */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-lg border border-stone-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-20 transition-transform duration-200 hover:-translate-y-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-lime-500/20 flex items-center justify-center text-lime-700 font-bold text-xs shrink-0">
                  10+
                </div>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-bold text-[#262626] leading-none">Years Experience</p>
                  <p className="text-[9px] sm:text-[10px] text-[#777777] mt-0.5 leading-tight">Quality Landscaping</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;