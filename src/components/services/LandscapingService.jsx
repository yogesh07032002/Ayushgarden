import {
  FaArrowRight,
  FaCheck,
  FaDraftingCompass,
  FaLeaf,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const LandscapingService = () => {
  const points = [
    "Landscape Planning & Layout",
    "Plant & Tree Selection",
    "Pathways & Green Zones",
    "Lawn & Plantation Development",
    "Residential & Commercial Spaces",
    "Long-Term Maintenance Planning",
  ];

  return (
    <section
      id="landscaping"
      className="relative py-12 sm:py-14 lg:py-14 bg-white overflow-hidden"
      aria-labelledby="landscaping-service-heading"
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -right-32
          top-10
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#83b735]/5
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ==================================================
              LEFT VISUAL
          ================================================== */}

          <div className="lg:col-span-6 relative">
            {/* IMAGE REVEAL */}

            <motion.div
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                relative
                h-[400px]
                sm:h-[470px]
                lg:h-[520px]
                overflow-hidden
                rounded-tr-[80px]
                sm:rounded-tr-[110px]
              "
            >
              <motion.img
                initial={{
                  scale: 1.14,
                  x: -20,
                }}
                whileInView={{
                  scale: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                alt="Landscaped outdoor garden with planned plants and greenery"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* NUMBER */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="
                  absolute
                  top-6
                  left-6
                  text-white/20
                  text-[70px]
                  sm:text-[82px]
                  font-black
                  leading-none
                "
                aria-hidden="true"
              >
                01
              </motion.span>

              {/* IMAGE TEXT */}

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
                  delay: 0.5,
                }}
                className="absolute bottom-6 left-6 right-6"
              >
                <p className="text-[#a8d45e] text-[9px] uppercase tracking-[0.2em] font-bold mb-1.5">
                  Designed Around Your Space
                </p>

                <p className="text-white text-xl sm:text-2xl font-extrabold leading-tight">
                  Functional. Beautiful.
                  <span className="block">Built to Grow.</span>
                </p>
              </motion.div>
            </motion.div>

            {/* ================= FLOATING PLAN CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
                rotate: 5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              whileHover={{
                y: -6,
                rotate: -2,
              }}
              className="
                absolute
                -right-2
                sm:-right-6
                lg:-right-8
                top-[55px]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                p-4
                sm:p-5
                w-[175px]
                sm:w-[195px]
              "
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.08,
                  }}
                  className="
                    w-10
                    h-10
                    bg-[#f1f7e8]
                    flex
                    items-center
                    justify-center
                    text-[#83b735]
                  "
                >
                  <FaDraftingCompass aria-hidden="true" />
                </motion.div>

                <span
                  className="text-neutral-200 text-2xl font-black"
                  aria-hidden="true"
                >
                  01
                </span>
              </div>

              <p className="text-neutral-400 text-[8px] uppercase tracking-[0.18em] font-bold mb-1">
                First We
              </p>

              <p className="text-neutral-900 text-sm font-extrabold leading-snug">
                Plan Before
                <span className="block text-[#83b735]">
                  We Plant.
                </span>
              </p>

              {/* PLAN LINES */}

              <div className="mt-4 space-y-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                  }}
                  className="h-[2px] bg-neutral-100"
                />

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                  }}
                  className="h-[2px] bg-[#83b735]"
                />

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "45%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                  }}
                  className="h-[2px] bg-neutral-100"
                />
              </div>
            </motion.div>

            {/* ROTATING LEAF */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -bottom-6
                left-6
                w-14
                h-14
                rounded-full
                bg-[#83b735]
                border-[5px]
                border-white
                flex
                items-center
                justify-center
              "
            >
              <FaLeaf
                className="text-white text-sm"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="lg:col-span-6 lg:pl-4 xl:pl-8">

            {/* NUMBER + LABEL */}

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
                duration: 0.5,
              }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="text-[#83b735] text-[11px] font-black tracking-[0.2em]">
                01
              </span>

              <div className="w-7 h-px bg-[#83b735]" />

              <span className="text-neutral-400 text-[10px] uppercase tracking-[0.18em] font-bold">
                Landscaping Services
              </span>
            </motion.div>

            {/* ================= SINGLE SEO H2 ================= */}

            <div className="overflow-hidden mb-4">
              <motion.h2
                id="landscaping-service-heading"
                initial={{
                  opacity: 0,
                  x: 55,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[40px]
                  font-extrabold
                  text-neutral-900
                  leading-[1.1]
                  tracking-[-0.02em]
                "
              >
                Landscape Design
                <span className="block text-[#83b735]">
                  & Development
                </span>
              </motion.h2>
            </div>

            {/* DESCRIPTION */}

            <motion.p
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
                duration: 0.55,
                delay: 0.1,
              }}
              className="
                text-neutral-500
                text-sm
                leading-[1.7]
                mb-3

                [&_strong]:text-neutral-700
                [&_strong]:font-semibold
              "
            >
              Professional <strong>landscape design and development</strong>{" "}
              starts with understanding the available space, soil, sunlight,
              water requirements, movement and future maintenance needs.
            </motion.p>

            <motion.p
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
                duration: 0.55,
                delay: 0.18,
              }}
              className="
                text-neutral-500
                text-sm
                leading-[1.7]
                mb-5

                [&_strong]:text-neutral-700
                [&_strong]:font-semibold
              "
            >
              We provide <strong>landscaping services in Pune</strong> for
              homes, farmhouses, commercial spaces and open properties with a
              practical balance of greenery, usability and long-term care.
            </motion.p>

            {/* ================= POINTS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mb-5">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -15 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    py-2.5
                    border-b
                    border-neutral-100
                  "
                >
                  <motion.span
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      w-5
                      h-5
                      shrink-0
                      rounded-full
                      bg-[#f0f7e7]
                      flex
                      items-center
                      justify-center
                      text-[#83b735]
                      group-hover:bg-[#83b735]
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    <FaCheck
                      className="text-[7px]"
                      aria-hidden="true"
                    />
                  </motion.span>

                  <span className="text-neutral-700 text-xs font-semibold">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ================= PHILOSOPHY ================= */}

            <motion.div
              initial={{
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                opacity: 1,
                clipPath: "inset(0 0 0 0)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                relative
                bg-[#f5f8ef]
                p-4
                mb-5
                overflow-hidden
              "
            >
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#83b735]" />

              <div className="flex gap-3">
                <FaTree
                  className="text-[#83b735] text-lg shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-neutral-900 text-sm font-extrabold mb-1">
                    Right Plant. Right Place. Right Plan.
                  </p>

                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Every <strong>landscape development plan</strong> is
                    designed around the property instead of following a
                    one-size-fits-all approach.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= CREATIVE CTA ================= */}

            <motion.div
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
                duration: 0.5,
                delay: 0.2,
              }}
              whileHover={{
                y: -2,
              }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-4
                  bg-[#253126]
                  hover:bg-[#83b735]
                  text-white
                  pl-5
                  pr-2
                  py-2
                  rounded-full
                  overflow-hidden
                  shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_12px_30px_rgba(131,183,53,0.25)]
                  transition-all
                  duration-300
                "
              >
                {/* SHINE */}

                <span
                  className="
                    absolute
                    top-0
                    -left-[120%]
                    w-[70%]
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    skew-x-[-20deg]
                    group-hover:left-[140%]
                    transition-all
                    duration-700
                    pointer-events-none
                  "
                />

                <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em]">
                  Discuss Landscaping
                </span>

                <span
                  className="
                    relative
                    z-10
                    w-9
                    h-9
                    rounded-full
                    bg-[#83b735]
                    group-hover:bg-white
                    text-white
                    group-hover:text-[#253126]
                    flex
                    items-center
                    justify-center
                    group-hover:rotate-[-45deg]
                    transition-all
                    duration-300
                  "
                >
                  <FaArrowRight
                    className="text-[9px]"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapingService;