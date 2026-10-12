import {
  FaAppleAlt,
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSeedling,
  FaSun,
  FaTint,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const FruitPlantationService = () => {
  const stages = [
    {
      number: "01",
      icon: FaLeaf,
      title: "Site Assessment",
      text: (
        <>
          Understanding available land, sunlight, water availability and
          plantation goals before development begins.
        </>
      ),
    },
    {
      number: "02",
      icon: FaSeedling,
      title: "Orchard Planning",
      text: (
        <>
          Planning <strong>fruit tree spacing</strong>, plantation zones and
          future orchard management.
        </>
      ),
    },
    {
      number: "03",
      icon: FaTree,
      title: "Plantation Development",
      text: (
        <>
          Systematic <strong>fruit tree plantation</strong> supported by
          irrigation and maintenance planning.
        </>
      ),
    },
    {
      number: "04",
      icon: FaAppleAlt,
      title: "Long-Term Orchard Care",
      text: (
        <>
          Developing the plantation with{" "}
          <strong>long-term orchard maintenance</strong> and growth in mind.
        </>
      ),
    },
  ];

  const features = [
    "Fruit Tree Plantation",
    "Orchard Development",
    "Planned Tree Spacing",
    "Organic-Focused Approach",
    "Irrigation Planning",
    "Yearly Maintenance",
  ];

  return (
    <section
      id="fruit-plantation"
      className="relative bg-white py-12 sm:py-14 lg:py-16 overflow-hidden"
      aria-labelledby="fruit-plantation-heading"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="absolute left-0 top-0 w-full lg:w-[34%] h-full bg-[#f5f8ef]"
        aria-hidden="true"
      />

      <div
        className="absolute right-0 top-0 w-[28%] h-full hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(#83b735 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.07,
        }}
        aria-hidden="true"
      />

      <motion.div
        animate={{
          rotate: [-8, 8, -8],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[8%] text-[#83b735]/[0.05] text-[130px] hidden lg:block"
        aria-hidden="true"
      >
        <FaLeaf />
      </motion.div>

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
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-full bg-[#83b735] text-white flex items-center justify-center">
                <FaSeedling
                  className="text-xs"
                  aria-hidden="true"
                />
              </span>

              <span className="text-[#83b735] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                04 • Fruit Plantation Services
              </span>
            </div>

            {/* ONE SEO H2 */}

            <h2
              id="fruit-plantation-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 leading-[1.08] tracking-[-0.03em]"
            >
              Fruit Plantation &
              <span className="block text-[#83b735]">
                Orchard Development
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="lg:col-span-5"
          >
            <p className="text-neutral-500 text-sm leading-[1.75] [&_strong]:text-neutral-700 [&_strong]:font-semibold">
              Aayush Landscaping provides{" "}
              <strong>fruit plantation and orchard development in Pune</strong>{" "}
              with systematic planning, suitable tree spacing, irrigation
              planning and long-term maintenance support.
            </p>
          </motion.div>
        </div>

        {/* ==================================================
            MAIN ORCHARD JOURNEY
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ==================================================
              LEFT — GROWTH TIMELINE
          ================================================== */}

          <div className="lg:col-span-5">
            <div className="bg-[#253126] h-full p-5 sm:p-7 lg:p-8 relative overflow-hidden">
              {/* GIANT NUMBER */}

              <span
                className="absolute -right-4 -top-8 text-[130px] font-black text-white/[0.025] leading-none"
                aria-hidden="true"
              >
                04
              </span>

              <div className="relative z-10">
                <p className="text-[#9ccc50] text-[9px] uppercase tracking-[0.2em] font-bold mb-2">
                  Orchard Growth Journey
                </p>

                <h3 className="text-white text-2xl sm:text-3xl font-black leading-tight mb-7">
                  From Land
                  <span className="block text-[#9ccc50]">
                    To Fruit Orchard.
                  </span>
                </h3>

                <div className="relative">
                  {/* TIMELINE */}

                  <div
                    className="absolute left-[19px] top-5 bottom-5 w-px bg-white/10"
                    aria-hidden="true"
                  />

                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "top",
                    }}
                    className="absolute left-[19px] top-5 bottom-5 w-px bg-[#83b735]"
                    aria-hidden="true"
                  />

                  <div className="space-y-5">
                    {stages.map((stage, index) => {
                      const Icon = stage.icon;

                      return (
                        <motion.div
                          key={stage.number}
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
                            duration: 0.5,
                            delay: index * 0.1,
                          }}
                          className="group relative flex gap-4"
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.12,
                              rotate: 8,
                            }}
                            className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-[#253126] border border-[#83b735] text-[#83b735] flex items-center justify-center group-hover:bg-[#83b735] group-hover:text-white transition-colors"
                          >
                            <Icon
                              className="text-xs"
                              aria-hidden="true"
                            />
                          </motion.div>

                          <div className="pb-2">
                            <span className="text-[#83b735] text-[8px] uppercase tracking-[0.18em] font-bold">
                              Stage {stage.number}
                            </span>

                            <h3 className="text-white text-sm sm:text-base font-extrabold mt-1 mb-1">
                              {stage.title}
                            </h3>

                            <p className="text-white/45 text-[10px] sm:text-[11px] leading-[1.65] [&_strong]:text-white/70 [&_strong]:font-semibold">
                              {stage.text}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT — ORCHARD VISUAL
          ================================================== */}

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{
                clipPath:
                  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              whileInView={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative h-[410px] sm:h-[480px] lg:h-[510px] overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                }}
                src="https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg"
                alt="Fruit orchard with planned tree plantation and irrigation"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* ORGANIC BADGE */}

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -30,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: 0.55,
                }}
                className="absolute top-5 right-5 sm:top-7 sm:right-7 w-[78px] h-[78px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#83b735] text-white flex flex-col items-center justify-center text-center border-[5px] border-white/20"
              >
                <FaLeaf
                  className="text-xs mb-1"
                  aria-hidden="true"
                />

                <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.1em] font-black leading-tight">
                  Organic
                  <span className="block">Focused</span>
                </span>
              </motion.div>

              {/* IMAGE CONTENT */}

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
                  delay: 0.55,
                }}
                className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7"
              >
                <p className="text-[#a8d45e] text-[8px] uppercase tracking-[0.2em] font-bold mb-2">
                  Long-Term Plantation Planning
                </p>

                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black leading-tight max-w-[430px]">
                  Plant Today.
                  <span className="block text-[#a8d45e]">
                    Plan for Tomorrow.
                  </span>
                </h3>
              </motion.div>
            </motion.div>

            {/* ==================================================
                FLOATING SITE CONDITIONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              whileHover={{ y: -5 }}
              className="absolute -left-3 sm:-left-6 top-[24%] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-3 sm:p-4 hidden sm:flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-9 h-9 rounded-full bg-[#fff7df] text-[#d5a72b] flex items-center justify-center"
              >
                <FaSun
                  className="text-xs"
                  aria-hidden="true"
                />
              </motion.div>

              <div>
                <p className="text-neutral-400 text-[7px] uppercase tracking-[0.15em] font-bold">
                  Consider
                </p>

                <p className="text-neutral-900 text-[10px] font-extrabold">
                  Site & Sunlight
                </p>
              </div>
            </motion.div>

            {/* WATER CARD */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              whileHover={{ y: -5 }}
              className="absolute -right-2 sm:-right-5 bottom-[23%] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-3 sm:p-4 hidden sm:flex items-center gap-3"
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-9 h-9 rounded-full bg-[#edf7fb] text-[#4297b8] flex items-center justify-center"
              >
                <FaTint
                  className="text-xs"
                  aria-hidden="true"
                />
              </motion.div>

              <div>
                <p className="text-neutral-400 text-[7px] uppercase tracking-[0.15em] font-bold">
                  Plan
                </p>

                <p className="text-neutral-900 text-[10px] font-extrabold">
                  Irrigation System
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ==================================================
            SEO CONTENT + FEATURES
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mt-8 lg:mt-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="text-[#83b735] text-[9px] uppercase tracking-[0.2em] font-bold mb-2">
              Complete Orchard Solution
            </p>

            <h3 className="text-neutral-900 text-xl sm:text-2xl font-black leading-tight">
              Planned for Growth.
              <span className="block text-[#83b735]">
                Built for Long-Term Care.
              </span>
            </h3>

            <p className="text-neutral-500 text-xs leading-[1.7] mt-3 [&_strong]:text-neutral-700 [&_strong]:font-semibold">
              Our <strong>fruit plantation services</strong> combine orchard
              planning, tree plantation, irrigation planning and{" "}
              <strong>yearly plantation maintenance</strong>.
            </p>
          </motion.div>

          {/* FEATURES */}

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 border-l border-t border-neutral-200">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group relative flex items-center gap-3 bg-white px-3 sm:px-4 py-4 border-r border-b border-neutral-200 overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#83b735] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                <span className="relative z-10 w-6 h-6 shrink-0 rounded-full bg-[#eef5e5] text-[#83b735] flex items-center justify-center group-hover:bg-white transition-colors">
                  <FaCheck
                    className="text-[7px]"
                    aria-hidden="true"
                  />
                </span>

                <span className="relative z-10 text-neutral-700 group-hover:text-white text-[9px] sm:text-[10px] font-bold transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
          }}
          className="mt-8 lg:mt-10 bg-[#f3f7ec] border border-[#83b735]/15 px-5 sm:px-7 py-5 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="w-10 h-10 rounded-full bg-[#83b735] text-white flex items-center justify-center shrink-0"
            >
              <FaAppleAlt
                className="text-xs"
                aria-hidden="true"
              />
            </motion.div>

            <div>
              <p className="text-neutral-900 text-sm sm:text-base font-black">
                Planning a Fruit Orchard?
              </p>

              <p className="text-neutral-500 text-[10px] sm:text-xs mt-0.5">
                Start with the right plantation and irrigation plan.
              </p>
            </div>
          </div>

          {/* INTERNAL CTA */}

          <Link
            to="/contact"
            className="group relative inline-flex items-center overflow-hidden bg-[#253126] shrink-0"
          >
            <span className="absolute inset-0 bg-[#83b735] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

            <span className="relative z-10 px-5 py-3 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-black">
              Plan Your Plantation
            </span>

            <span className="relative z-10 w-10 self-stretch bg-[#83b735] group-hover:bg-white text-white group-hover:text-[#253126] flex items-center justify-center transition-colors duration-300">
              <FaArrowRight
                className="text-[8px] group-hover:rotate-[-45deg] transition-transform duration-300"
                aria-hidden="true"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FruitPlantationService;