import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheck,
  FaCut,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const MaintenanceService = () => {
  const careItems = [
    {
      number: "01",
      icon: FaCut,
      title: "Pruning & Plant Care",
      text: (
        <>
          Regular <strong>plant and tree maintenance</strong> based on the
          requirements of your developed green space.
        </>
      ),
    },
    {
      number: "02",
      icon: FaTint,
      title: "Irrigation & Water Check",
      text: (
        <>
          Monitoring irrigation requirements and supporting efficient{" "}
          <strong>garden water management</strong>.
        </>
      ),
    },
    {
      number: "03",
      icon: FaSeedling,
      title: "Plantation Care",
      text: (
        <>
          Ongoing <strong>plantation maintenance</strong> for newly developed
          and existing plantation areas.
        </>
      ),
    },
    {
      number: "04",
      icon: FaTree,
      title: "Garden & Plot Upkeep",
      text: (
        <>
          Maintenance support for{" "}
          <strong>gardens, lawns, trees and developed plots</strong>.
        </>
      ),
    },
  ];

  const cycle = [
    "Inspect",
    "Plant Care",
    "Water Check",
    "Prune",
    "Maintain",
    "Review",
  ];

  const properties = [
    "Residential Gardens",
    "Farmhouse Landscapes",
    "Trees & Plantations",
    "Fruit Orchards",
    "Agricultural Plots",
    "Developed Green Spaces",
  ];

  return (
    <section
      id="maintenance"
      className="relative bg-[#f8f6f1] py-14 sm:py-16 lg:py-16 overflow-hidden scroll-mt-24"
      aria-labelledby="maintenance-service-heading"
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="absolute top-0 right-0 w-[34%] h-full bg-white hidden lg:block"
        aria-hidden="true"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-[180px] -top-[180px] w-[360px] h-[360px] rounded-full border border-dashed border-[#83b735]/20"
        aria-hidden="true"
      />

      <span
        className="absolute right-3 bottom-0 text-[100px] sm:text-[150px] lg:text-[190px] leading-none font-black text-[#253126]/[0.025] select-none pointer-events-none"
        aria-hidden="true"
      >
        CARE
      </span>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* HEADER */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-9 lg:mb-11">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[#83b735] text-white flex items-center justify-center">
                <FaCalendarCheck aria-hidden="true" />
              </span>

              <span className="text-[#83b735] text-xs sm:text-sm uppercase tracking-[0.18em] font-bold">
                06 • Garden Maintenance
              </span>
            </div>

            <h2
              id="maintenance-service-heading"
              className="text-4xl sm:text-[44px] lg:text-[50px] font-black text-[#252a27] leading-[1.07] tracking-[-0.03em]"
            >
              Yearly Garden
              <span className="block text-[#83b735]">
                Maintenance Services.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-neutral-500 text-base sm:text-[17px] leading-[1.75] [&_strong]:text-neutral-700 [&_strong]:font-semibold">
              Aayush Landscaping provides{" "}
              <strong>garden maintenance services in Pune</strong> for gardens,
              lawns, plantations, fruit orchards and developed plots with
              structured long-term care.
            </p>
          </motion.div>
        </div>

        {/* MAIN CARE PLAN */}

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-neutral-200 shadow-[0_25px_70px_rgba(37,49,38,0.07)]">
          {/* LEFT */}

          <div className="lg:col-span-4 bg-[#253126] p-6 sm:p-7 lg:p-8 relative overflow-hidden">
            <span
              className="absolute -right-5 -top-10 text-[130px] font-black text-white/[0.025] leading-none"
              aria-hidden="true"
            >
              12
            </span>

            <div className="relative z-10">
              <p className="text-[#9ccc50] text-xs uppercase tracking-[0.18em] font-bold mb-3">
                Annual Care Plan
              </p>

              <h3 className="text-white text-2xl sm:text-[30px] font-black leading-[1.15]">
                Green Spaces Need
                <span className="block text-[#9ccc50]">
                  Care After Development.
                </span>
              </h3>

              <p className="text-white/60 text-sm sm:text-[15px] leading-[1.75] mt-4 [&_strong]:text-white/85">
                Our <strong>yearly garden maintenance</strong> approach focuses
                on regular inspection, plant care, irrigation checks, pruning
                and overall upkeep.
              </p>

              {/* 12 MONTH VISUAL */}

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-end gap-3">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#9ccc50] text-[70px] sm:text-[82px] font-black leading-[0.8]"
                  >
                    12
                  </motion.span>

                  <div className="pb-1">
                    <span className="block text-white text-xl font-black">
                      Month
                    </span>

                    <span className="text-white/40 text-xs uppercase tracking-[0.15em] font-bold">
                      Care Cycle
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-6">
                  {cycle.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.07,
                      }}
                      className="border border-white/10 p-3 hover:bg-[#83b735] transition-colors duration-300"
                    >
                      <span className="block text-[#9ccc50] text-[10px] font-black mb-1">
                        0{index + 1}
                      </span>

                      <span className="text-white text-xs sm:text-[13px] font-bold">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CENTER CARE SERVICES */}

          <div className="lg:col-span-5 p-5 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-neutral-200">
            <div className="mb-5">
              <p className="text-[#83b735] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                Regular Maintenance
              </p>

              <h3 className="text-neutral-900 text-2xl sm:text-[28px] font-black leading-tight">
                What We Take
                <span className="text-[#83b735]"> Care Of.</span>
              </h3>
            </div>

            <div className="space-y-2">
              {careItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -25 : 25,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ x: 5 }}
                    className="group flex gap-4 p-4 border border-transparent hover:border-[#83b735]/30 hover:bg-[#f6f9f1] transition-all duration-300"
                  >
                    <div className="w-11 h-11 shrink-0 bg-[#eef5e5] text-[#83b735] flex items-center justify-center group-hover:bg-[#83b735] group-hover:text-white transition-all duration-300">
                      <Icon className="text-base" aria-hidden="true" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#83b735] text-[10px] font-black">
                          {item.number}
                        </span>

                        <h3 className="text-neutral-900 text-base sm:text-[17px] font-extrabold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-neutral-500 text-sm sm:text-[15px] leading-[1.65] [&_strong]:text-neutral-700 [&_strong]:font-semibold">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PROPERTY TYPES */}

          <div className="lg:col-span-3 p-5 sm:p-6 lg:p-7">
            <p className="text-[#83b735] text-xs uppercase tracking-[0.18em] font-bold mb-2">
              Maintenance For
            </p>

            <h3 className="text-neutral-900 text-xl sm:text-2xl font-black leading-tight mb-5">
              One Care Plan.
              <span className="block text-[#83b735]">
                Different Green Spaces.
              </span>
            </h3>

            <div className="space-y-1">
              {properties.map((property, index) => (
                <motion.div
                  key={property}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center gap-3 py-3.5 border-b border-neutral-200"
                >
                  <span className="w-7 h-7 rounded-full bg-[#eef5e5] text-[#83b735] flex items-center justify-center shrink-0 group-hover:bg-[#83b735] group-hover:text-white transition-colors">
                    <FaCheck className="text-[8px]" aria-hidden="true" />
                  </span>

                  <span className="text-neutral-700 text-sm sm:text-[15px] font-semibold">
                    {property}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* SMALL MESSAGE */}

            <div className="mt-6 bg-[#f4f7ef] p-4 border-l-[3px] border-[#83b735]">
              <FaLeaf
                className="text-[#83b735] mb-2"
                aria-hidden="true"
              />

              <p className="text-neutral-800 text-sm font-bold leading-relaxed">
                Maintenance should begin with the needs of the space—not a
                one-size-fits-all checklist.
              </p>
            </div>
          </div>
        </div>

        {/* CONTINUOUS CARE */}

        <div className="mt-8 lg:mt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-[#83b735] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                Continuous Care Cycle
              </p>

              <h3 className="text-neutral-900 text-2xl sm:text-[28px] font-black">
                Maintain. Review. Improve. Repeat.
              </h3>
            </div>

            <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed max-w-[470px]">
              Regular care helps developed gardens, plantations and landscapes
              remain manageable throughout the year.
            </p>
          </div>

          <div className="relative">
            {/* DESKTOP LINE */}

            <div
              className="hidden md:block absolute left-[8%] right-[8%] top-[27px] h-px bg-neutral-200"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block absolute left-[8%] right-[8%] top-[27px] h-px bg-[#83b735]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-5">
              {cycle.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#83b735",
                      color: "#ffffff",
                    }}
                    className="relative z-10 w-[54px] h-[54px] rounded-full bg-white border-2 border-[#83b735] text-[#83b735] mx-auto flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs font-black">
                      0{index + 1}
                    </span>
                  </motion.div>

                  <p className="text-neutral-800 text-sm font-bold mt-3">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO + CTA STRIP */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-9 lg:mt-11 bg-[#253126] px-5 sm:px-7 lg:px-8 py-6 sm:py-7 relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-150%", "700%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 bottom-0 w-[80px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-[760px]">
              <p className="text-[#9ccc50] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                Long-Term Maintenance
              </p>

              <h3 className="text-white text-xl sm:text-2xl font-black mb-2">
                Keep Your Garden & Plantation Well Maintained.
              </h3>

              <p className="text-white/55 text-sm sm:text-[15px] leading-[1.7] [&_strong]:text-white/85 [&_strong]:font-semibold">
                Explore our dedicated{" "}
                <strong>annual garden maintenance services</strong> for
                residential gardens, farmhouses, fruit orchards, plantations
                and larger developed properties.
              </p>
            </div>

            <Link
              to="/maintenance"
              className="group relative inline-flex items-center bg-[#83b735] overflow-hidden shrink-0 self-start lg:self-auto"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />

              <span className="relative z-10 px-5 sm:px-6 py-4 text-white group-hover:text-[#253126] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-colors">
                View Maintenance Plans
              </span>

              <span className="relative z-10 w-12 self-stretch border-l border-white/20 group-hover:border-[#253126]/10 text-white group-hover:text-[#253126] flex items-center justify-center transition-colors">
                <FaArrowRight
                  className="text-[10px] group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceService;