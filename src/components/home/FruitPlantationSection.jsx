import React from "react";
import { FaCheckCircle, FaLeaf, FaArrowRight } from "react-icons/fa";

const FruitPlantationSection = () => {
  const features = [
    "Automated Water Management",
    "Automated Fertilizer Management",
    "Planned Fruit Plantation",
    "Annual Farm Maintenance",
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#83b735] mb-3">
              <span>Smart Farm Solutions</span>
              <FaLeaf className="text-xs" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight mb-5">
              Manage a One-Acre Fruit Plantation with Minimal Manpower
            </h2>

            {/* Paragraph Content */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
              Managing a large fruit plantation manually can require significant
              time and manpower. Our integrated farm development approach
              combines planned plantation, automated irrigation, and fertilizer
              management to make day-to-day farm operations more efficient and
              easier to manage.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed mb-7">
              With the right system in place, a one-acre fruit plantation can be
              planned to operate with minimal manpower while maintaining proper
              irrigation and plant care.
            </p>

            {/* Features List (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#83b735] text-base shrink-0" />
                  <span className="text-sm font-semibold text-neutral-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#83b735] hover:bg-[#73a32c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Develop Your Farm With Us</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: UNIQUE SHAPED IMAGE ================= */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Decorative Background Blob Layer */}
              <div 
                className="absolute inset-0 bg-[#83b735]/15 translate-x-3 translate-y-3 -z-0"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              />

              {/* Unique Organic Shaped Image Frame */}
              <div
                className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <img
                  src="https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg"
                  alt="Fruit Plantation and Farm Care"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Small Floating Stat / Accent Tag */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#83b735]/10 flex items-center justify-center">
                  <FaLeaf className="text-[#83b735] text-base" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-neutral-500 uppercase">Efficiency</p>
                  <p className="text-xs font-bold text-neutral-900">Minimal Labor</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FruitPlantationSection;