import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaMapMarkedAlt,
  FaMountain,
  FaSeedling,
  FaTint,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const FarmDevelopmentService = () => {
  const services = [
    {
      number: "01",
      icon: FaMapMarkedAlt,
      title: "Land Planning",
      text: "Practical property layout based on land use and future development.",
    },
    {
      number: "02",
      icon: FaTree,
      title: "Plantation Zones",
      text: "Dedicated zones for trees, fruit plantation and green development.",
    },
    {
      number: "03",
      icon: FaMountain,
      title: "Terrain Development",
      text: "Planning for open plots, slopes and different terrain conditions.",
    },
    {
      number: "04",
      icon: FaTint,
      title: "Water Planning",
      text: "Irrigation planning according to plantation zones and land use.",
    },
  ];

  const highlights = [
    "Agricultural Plot Development",
    "Large Land Development",
    "Tree Plantation",
    "Fruit Orchard Planning",
    "Irrigation Planning",
    "Automation-Ready Development",
  ];

  return (
    <section
      id="farm-development"
      className="relative bg-[#f8f6f1] py-12 sm:py-14 lg:py-16 overflow-hidden"
      aria-labelledby="farm-development-heading"
    >
      {/* ==================================================
          BACKGROUND BLUEPRINT
      ================================================== */}

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #253126 1px, transparent 1px),
            linear-gradient(to bottom, #253126 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute left-0 top-0 w-[6px] h-full bg-[#83b735]"
        aria-hidden="true"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-40 -top-40 w-[360px] h-[360px] rounded-full border border-dashed border-[#83b735]/20"
        aria-hidden="true"
      />

      <span
        className="absolute -left-4 bottom-0 text-[110px] sm:text-[160px] lg:text-[210px] font-black text-[#253126]/[0.025] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        LAND
      </span>

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#253126] text-white flex items-center justify-center text-[10px] font-black">
                03
              </span>

              <div>
                <p className="text-[#83b735] text-[9px] uppercase tracking-[0.2em] font-bold">
                  Complete Development
                </p>

                <p className="text-neutral-500 text-xs font-bold mt-0.5">
                  Farm & Large Plot
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8"
          >
            <h2
              id="farm-development-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#252a27] leading-[1.08] tracking-[-0.03em]"
            >
              Farm & Agricultural
              <span className="block text-[#83b735]">
                Plot Development.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ==================================================
            MASTERPLAN AREA
        ================================================== */}

        <div className="bg-white border border-neutral-200 shadow-[0_25px_80px_rgba(37,49,38,0.07)]">
          {/* MASTERPLAN TOP BAR */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 px-5 sm:px-7 py-3.5">
            <div className="flex items-center gap-3">
              <FaMapMarkedAlt
                className="text-[#83b735]"
                aria-hidden="true"
              />

              <span className="text-neutral-900 text-[10px] uppercase tracking-[0.18em] font-black">
                Land Development Masterplan
              </span>
            </div>

            <span className="text-neutral-400 text-[9px] uppercase tracking-[0.15em] font-bold">
              Plan • Develop • Automate • Maintain
            </span>
          </div>

          {/* MAIN GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ==========================================
                LEFT PROJECT BRIEF
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 p-5 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col"
            >
              <p className="text-[#83b735] text-[9px] uppercase tracking-[0.2em] font-black mb-3">
                Project Brief
              </p>

              <h3 className="text-[#253126] text-xl sm:text-2xl font-black leading-[1.15] mb-4">
                Don't Just
                <span className="block">
                  Own Land.
                </span>

                <span className="block text-[#83b735]">
                  Develop It.
                </span>
              </h3>

              <p className="text-neutral-500 text-xs sm:text-[13px] leading-[1.7] mb-5">
                Large agricultural land needs a clear plan for{" "}
                <strong className="text-neutral-700 font-semibold">
                  plantation, irrigation, movement and future automation
                </strong>
                .
              </p>

              <div className="mt-auto">
                <div className="border-t border-neutral-200 pt-4">
                  <p className="text-neutral-400 text-[8px] uppercase tracking-[0.2em] font-bold mb-1">
                    Development Capacity
                  </p>

                  <div className="flex items-end gap-2">
                    <span className="text-[#253126] text-[52px] font-black leading-none">
                      30
                    </span>

                    <div className="pb-1">
                      <span className="block text-[#83b735] text-sm font-black">
                        Acres
                      </span>

                      <span className="block text-neutral-400 text-[8px] uppercase tracking-[0.15em] font-bold">
                        Smart Planning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==========================================
                CENTER VISUAL
            ========================================== */}

            <div className="lg:col-span-5 relative overflow-hidden">
              <motion.div
                initial={{
                  clipPath: "inset(0 100% 0 0)",
                }}
                whileInView={{
                  clipPath: "inset(0 0% 0 0)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="relative h-[390px] sm:h-[450px] lg:h-[480px]"
              >
                <motion.img
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4 }}
                  src="https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg"
                  alt="Agricultural land prepared for farm and plantation development"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/5" />

                {/* MAP CROSSHAIR */}

                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[55%] border border-white/20 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/15" />

                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#83b735]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#83b735]" />
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#83b735]" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#83b735]" />
                </div>

                {/* PLANTATION MARKER */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    delay: 0.55,
                  }}
                  className="absolute left-[28%] top-[30%]"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 w-4 h-4 rounded-full bg-[#83b735]"
                  />

                  <span className="relative block w-4 h-4 rounded-full bg-[#83b735] border-[3px] border-white" />

                  <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-2.5 py-1.5 text-[8px] whitespace-nowrap font-black text-neutral-800 shadow-lg">
                    Plantation Zone
                  </span>
                </motion.div>

                {/* WATER MARKER */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    delay: 0.75,
                  }}
                  className="absolute right-[25%] top-[53%]"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 w-4 h-4 rounded-full bg-[#83b735]"
                  />

                  <span className="relative block w-4 h-4 rounded-full bg-[#83b735] border-[3px] border-white" />

                  <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-white px-2.5 py-1.5 text-[8px] whitespace-nowrap font-black text-neutral-800 shadow-lg">
                    Water Planning
                  </span>
                </motion.div>

                {/* BOTTOM TEXT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                  }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <p className="text-[#a8d45e] text-[8px] uppercase tracking-[0.2em] font-black mb-1.5">
                    Raw Land → Planned Green Asset
                  </p>

                  <p className="text-white text-lg sm:text-xl font-black leading-tight max-w-[380px]">
                    Every Acre Gets a Clear
                    <span className="block text-[#a8d45e]">
                      Development Purpose.
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* ==========================================
                RIGHT DEVELOPMENT MODULES
            ========================================== */}

            <div className="lg:col-span-4">
              {services.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-4
                      p-4
                      sm:p-5
                      border-b
                      border-neutral-200
                      last:border-b-0
                      overflow-hidden
                      hover:bg-[#253126]
                      transition-colors
                      duration-400
                    "
                  >
                    {/* HOVER NUMBER */}

                    <span
                      className="absolute right-3 -bottom-2 text-[52px] font-black text-neutral-900/[0.035] group-hover:text-white/[0.05] transition-colors"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>

                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#edf4e5] text-[#83b735] flex items-center justify-center group-hover:bg-[#83b735] group-hover:text-white transition-all duration-300">
                      <Icon
                        className="text-sm"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#83b735] text-[8px] font-black tracking-[0.15em]">
                          {item.number}
                        </span>

                        <h3 className="text-neutral-900 group-hover:text-white text-sm font-black transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-neutral-400 group-hover:text-white/55 text-[10px] sm:text-[11px] leading-[1.6] transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            DEVELOPMENT SCOPE
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-8 lg:mt-10 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
            }}
            className="lg:col-span-4"
          >
            <p className="text-[#83b735] text-[9px] uppercase tracking-[0.2em] font-bold mb-2">
              Development Scope
            </p>

            <h3 className="text-[#253126] text-xl sm:text-2xl font-black leading-tight">
              From Raw Land
              <span className="block text-[#83b735]">
                To Planned Development.
              </span>
            </h3>

            <p className="text-neutral-500 text-xs leading-[1.7] mt-3 max-w-[330px]">
              Our <strong className="text-neutral-700">farm and agricultural plot development</strong>{" "}
              approach connects plantation, irrigation and future maintenance
              into one practical plan.
            </p>
          </motion.div>

          {/* SCOPE GRID */}

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-neutral-200">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  bg-white/70
                  px-4
                  py-4
                  border-r
                  border-b
                  border-neutral-200
                  hover:bg-[#83b735]
                  transition-all
                  duration-300
                "
              >
                <span className="w-6 h-6 rounded-full border border-[#83b735]/40 text-[#83b735] flex items-center justify-center group-hover:bg-white group-hover:text-[#83b735] group-hover:border-white transition-all">
                  <FaCheck
                    className="text-[7px]"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-neutral-700 group-hover:text-white text-[11px] font-bold transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================================================
            COMPACT CTA STRIP
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="relative mt-8 lg:mt-10 bg-[#253126] overflow-hidden px-5 sm:px-7 py-5"
        >
          {/* MOVING BLUEPRINT LINE */}

          <motion.div
            animate={{
              x: ["-100%", "500%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="w-11 h-11 rounded-full bg-[#83b735] text-white flex items-center justify-center shrink-0"
              >
                <FaSeedling aria-hidden="true" />
              </motion.div>

              <div>
                <p className="text-[#9ccc50] text-[8px] uppercase tracking-[0.2em] font-bold mb-1">
                  Have Agricultural Land?
                </p>

                <p className="text-white text-base sm:text-lg font-black">
                  Let's Plan What Your Land Can Become.
                </p>
              </div>
            </div>

            {/* CREATIVE CTA */}

            <Link
              to="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                bg-white
                overflow-hidden
                shrink-0
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-[#83b735]
                  origin-left
                  scale-x-0
                  group-hover:scale-x-100
                  transition-transform
                  duration-500
                "
              />

              <span className="relative z-10 pl-5 pr-4 py-3 text-[#253126] group-hover:text-white text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-black transition-colors">
                Discuss Your Land
              </span>

              <span className="relative z-10 w-10 self-stretch bg-[#83b735] group-hover:bg-white text-white group-hover:text-[#253126] flex items-center justify-center transition-colors duration-300">
                <FaArrowRight
                  className="text-[8px] group-hover:rotate-[-45deg] transition-transform duration-300"
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

export default FarmDevelopmentService;