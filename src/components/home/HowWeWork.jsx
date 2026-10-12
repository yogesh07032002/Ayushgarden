import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDraftingCompass,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

export default function HowWeWork() {
  const steps = [
    {
      id: "01",
      title: "Site Visit",
      stepText: "Step 01",
      description:
        "We understand your property, requirements, available space, soil condition and water availability.",
      icon: <FaMapMarkerAlt className="text-3xl text-[#83b735]" />,
    },
    {
      id: "02",
      title: "Planning & Design",
      stepText: "Step 02",
      description:
        "We develop a suitable landscaping or plantation plan according to the space and purpose.",
      icon: <FaDraftingCompass className="text-3xl text-[#83b735]" />,
    },
    {
      id: "03",
      title: "Execution",
      stepText: "Step 03",
      description:
        "Our team handles plantation, lawn development, garden development and irrigation system installation.",
      icon: <FaTools className="text-3xl text-[#83b735]" />,
    },
    {
      id: "04",
      title: "Maintenance",
      stepText: "Step 04",
      description:
        "We provide regular and annual maintenance support to keep your garden or farm healthy and well-maintained.",
      icon: <FaLeaf className="text-3xl text-[#83b735]" />,
    },
  ];

  // Framer-motion container variant (Stagger effect - एकापाठोपाठ येण्यासाठी)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22, // प्रत्येक सर्कलमध्ये 0.22 सेकंदाचा फरक
      },
    },
  };

  // प्रत्येक कार्डसाठी एंट्री ॲनिमेशन
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white font-sans overflow-hidden" id="process">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-6xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#83b735] mb-2.5">
            <span>Working Process</span>
            <FaLeaf className="text-sm" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight mb-3">
            From Empty Space to Beautiful Greenery
          </h2>

          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            A systematic, professional approach to turn your open ground into a
            thriving, lush and easy-to-maintain green landscape.
          </p>
        </div>

        {/* ================= 4 CONNECTED STEPS WITH SCROLL & HOVER ANIMATION ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-0 items-center justify-items-center"
        >
          {steps.map((step) => {
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative flex items-center justify-center w-full group"
              >
                {/* Horizontal Chevron Connector (Right arrow behind circle) */}
                <div
                  className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[116%] h-20 bg-[#fbf8f2] -z-0 pointer-events-none"
                  style={{
                    clipPath:
                      "polygon(0% 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%)",
                  }}
                />

                {/* Outer Solid Circle Frame */}
                <div className="relative z-10 w-[246px] h-[246px] rounded-full bg-white border border-[#eae5d8] p-2 flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] cursor-pointer">
                  
                  {/* Dotted Inner Ring (Hover केल्यावर 180 अंश गोल फिरते) */}
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#83b735] transition-transform duration-700 ease-in-out group-hover:rotate-180 pointer-events-none" />

                  {/* Inner Content (स्थिर राहण्यासाठी वेगळ्या लेयरमध्ये) */}
                  <div className="relative z-10 w-full h-full rounded-full flex flex-col items-center justify-center text-center px-4 bg-transparent">
                    
                    {/* Icon */}
                    <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>

                    {/* Step Name */}
                    <h3 className="text-base sm:text-[17px] font-bold text-neutral-900 mb-1 leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[170px]">
                      {step.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}