import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const WhatMakesUsDifferent = () => {
  const advantages = [
    {
      number: "01",
      title: "Planning Before Plantation",
      description:
        "We understand the site, soil, water availability and future maintenance needs before starting development.",
    },
    {
      number: "02",
      title: "Complete Green Development",
      description:
        "From landscaping and lawns to agricultural plots and fruit plantations, we manage the complete development process.",
    },
    {
      number: "03",
      title: "Smart Automation",
      description:
        "Irrigation and fertilizer automation can be integrated to simplify routine farm and plantation management.",
    },
    {
      number: "04",
      title: "Large Plot Capability",
      description:
        "Our approach can be planned for large agricultural properties and fruit plantation development, including projects up to 30 acres.",
    },
    {
      number: "05",
      title: "Long-Term Maintenance",
      description:
        "Yearly maintenance solutions help keep developed gardens, plantations and plots healthy and manageable.",
    },
    {
      number: "06",
      title: "One Team. Complete Support.",
      description:
        "Planning, development, plantation, automation and maintenance can be coordinated through one complete solution.",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
      id="why-aayush"
    >
      {/* BACKGROUND */}

      <div className="absolute top-0 right-0 w-[35%] h-full bg-[#faf7f2] hidden lg:block" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-36 -left-36 w-[330px] h-[330px] rounded-full border border-dashed border-[#83b735]/15"
      />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* HEADER */}

        <div className="max-w-3xl mb-14 lg:mb-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#83b735] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-4"
          >
            <FaLeaf />
            <span>Why Aayush Landscaping</span>
          </motion.div>

          {/* HEADING - MASK REVEAL */}

          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: "110%", skewY: 5 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-neutral-900 leading-[1.12]"
            >
              What Makes Our
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%", skewY: 5 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#83b735] leading-[1.12]"
            >
              Approach Different?
            </motion.h2>
          </div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              width: "70%",
            }}
            whileInView={{
              opacity: 1,
              width: "100%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mt-6"
          >
            A successful green space needs more than plantation. It needs the
            right planning, suitable systems and consistent care to remain
            healthy and manageable over time.
          </motion.p>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ==================================================
              LEFT - STICKY IMAGE
          ================================================== */}

          <div className="lg:col-span-5 lg:sticky lg:top-28">

            <motion.div
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
              whileInView={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative h-[480px] sm:h-[580px] lg:h-[650px] overflow-hidden rounded-2xl group"
            >

              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                alt="Aayush Landscaping Approach"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1600ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* FLOATING TOP BADGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -10,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  delay: 0.5,
                }}
                className="absolute top-7 right-7"
              >
                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-full bg-[#83b735] border-4 border-white/20 flex items-center justify-center shadow-xl"
                >
                  <FaSeedling className="text-white text-xl" />
                </motion.div>
              </motion.div>

              {/* BOTTOM CONTENT */}

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                  }}
                  style={{ transformOrigin: "left" }}
                  className="w-12 h-[3px] bg-[#83b735] mb-4"
                />

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2"
                >
                  Our Philosophy
                </motion.p>

                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "110%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.65,
                    }}
                    className="text-white text-2xl sm:text-3xl font-extrabold leading-tight"
                  >
                    Beautiful Today.
                    <span className="block text-[#a8d45e]">
                      Manageable Tomorrow.
                    </span>
                  </motion.h3>
                </div>

              </div>
            </motion.div>

            {/* FLOATING BOX */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              whileHover={{
                x: 7,
              }}
              className="relative sm:absolute lg:relative xl:absolute mt-[-30px] sm:mt-0 sm:-bottom-7 sm:-left-5 lg:mt-[-30px] lg:bottom-auto lg:left-auto xl:-bottom-7 xl:-left-5 bg-white shadow-xl border-l-4 border-[#83b735] px-6 py-5 max-w-[280px]"
            >
              <div className="flex items-start gap-3">

                <FaCheck className="text-[#83b735] mt-1 shrink-0" />

                <div>
                  <p className="text-neutral-900 font-extrabold text-sm">
                    Built Around Your Space
                  </p>

                  <p className="text-neutral-400 text-xs mt-1">
                    & Your Requirements
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

          {/* ==================================================
              RIGHT - ADVANTAGE ROWS
          ================================================== */}

          <div className="lg:col-span-7 lg:pl-4">

            {advantages.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 70 : -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-t border-neutral-200 overflow-hidden"
              >

                {/* HOVER BACKGROUND SWEEP */}

                <div className="absolute inset-0 bg-[#f6faef] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                <div className="relative z-10 grid grid-cols-[55px_1fr_auto] sm:grid-cols-[75px_1fr_auto] gap-4 sm:gap-6 py-7 sm:py-8 px-2 sm:px-4 items-start">

                  {/* NUMBER */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      rotate: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                    }}
                    className="text-3xl sm:text-4xl font-black text-transparent [-webkit-text-stroke:1px_#83b735] opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                    {item.number}
                  </motion.span>

                  {/* TEXT */}

                  <div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 mb-2 group-hover:text-[#83b735] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                      {item.description}
                    </p>

                    {/* GROWING UNDERLINE */}

                    <div className="mt-4 w-0 group-hover:w-14 h-[2px] bg-[#83b735] transition-all duration-500" />

                  </div>

                  {/* ARROW */}

                  <motion.div
                    whileHover={{
                      x: 5,
                      rotate: -20,
                    }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-300 group-hover:bg-[#83b735] group-hover:border-[#83b735] group-hover:text-white transition-all duration-300"
                  >
                    <FaArrowRight className="text-[9px]" />
                  </motion.div>

                </div>
              </motion.div>
            ))}

            {/* FINAL BORDER */}

            <div className="border-t border-neutral-200" />

            {/* BOTTOM STATEMENT */}

            <motion.div
              initial={{
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mt-8 bg-[#83b735] p-6 sm:p-7 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="w-12 h-12 shrink-0 rounded-full bg-white/15 flex items-center justify-center"
                >
                  <FaLeaf className="text-white" />
                </motion.div>

                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.18em] font-bold mb-1">
                    The Aayush Approach
                  </p>

                  <h4 className="text-white text-lg sm:text-xl font-extrabold">
                    Plan Smart. Develop Right. Maintain Better.
                  </h4>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;