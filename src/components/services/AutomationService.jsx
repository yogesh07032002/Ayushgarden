import {
  FaArrowRight,
  FaCheck,
  FaCogs,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaUser,
  FaWater,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const AutomationService = () => {
  const benefits = [
    "Automated Water Distribution",
    "Fertilizer Management",
    "Zone-Based Farm Planning",
    "Reduced Repetitive Manual Work",
    "Large Plot Management",
    "Structured Daily Operation",
  ];

  const modules = [
    {
      icon: FaTint,
      label: "Water Management",
      title: "Irrigation Automation",
      text: (
        <>
          Planned <strong>irrigation automation</strong> helps distribute water
          across plantation zones for easier day-to-day farm management.
        </>
      ),
      status: "AUTOMATED",
    },
    {
      icon: FaLeaf,
      label: "Plant Nutrition",
      title: "Fertilizer Automation",
      text: (
        <>
          <strong>Fertilizer automation</strong> can be integrated with the
          irrigation system for structured plantation and nutrient management.
        </>
      ),
      status: "INTEGRATED",
    },
  ];

  return (
    <section
      id="automation"
      className="relative bg-[#202522] py-14 sm:py-16 lg:py-16 overflow-hidden"
      aria-labelledby="automation-heading"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          top-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#83b735]
          blur-[150px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* TECH GRID */}

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
        aria-hidden="true"
      />

      {/* BACKGROUND WORD */}

      <span
        className="
          absolute
          right-4
          top-3
          text-[90px]
          sm:text-[130px]
          lg:text-[170px]
          font-black
          leading-none
          text-white/[0.025]
          select-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        SMART
      </span>

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-9 lg:mb-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
            }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#83b735]/15
                  border
                  border-[#83b735]/30
                  text-[#9ccc50]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaCogs aria-hidden="true" />
              </motion.span>

              <span className="text-[#9ccc50] text-xs sm:text-sm uppercase tracking-[0.18em] font-bold">
                05 • Agricultural Automation
              </span>
            </div>

            {/* SINGLE SEO H2 */}

            <h2
              id="automation-heading"
              className="
                text-4xl
                sm:text-[44px]
                lg:text-[50px]
                font-black
                text-white
                leading-[1.07]
                tracking-[-0.03em]
              "
            >
              Smart Farm Automation
              <span className="block text-[#9ccc50]">
                for Easier Farm Management.
              </span>
            </h2>
          </motion.div>

          <motion.p
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
              delay: 0.12,
            }}
            className="
              lg:col-span-5
              lg:pl-5
              text-white/65
              text-base
              sm:text-[17px]
              leading-[1.75]

              [&_strong]:text-white
              [&_strong]:font-semibold
            "
          >
            Aayush Landscaping provides{" "}
            <strong>smart farm automation in Pune</strong> by integrating{" "}
            <strong>irrigation and fertilizer automation</strong> with
            plantation planning for efficient management of agricultural land
            and fruit orchards.
          </motion.p>
        </div>

        {/* ==================================================
            SMART SYSTEM DASHBOARD
        ================================================== */}

        <div
          className="
            relative
            border
            border-white/10
            bg-[#252b27]/80
            backdrop-blur-sm
            overflow-hidden
          "
        >
          {/* DASHBOARD TOP BAR */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-3
              px-5
              sm:px-6
              py-4
              border-b
              border-white/10
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-[#83b735]" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              <span className="text-white text-xs sm:text-sm uppercase tracking-[0.15em] font-bold">
                Smart Farm Control System
              </span>
            </div>

            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.35, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-[#83b735]"
                aria-hidden="true"
              />

              <span className="text-[#9ccc50] text-[11px] sm:text-xs uppercase tracking-[0.15em] font-bold">
                System Active
              </span>
            </div>
          </div>

          {/* DASHBOARD CONTENT */}

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ==================================================
                LEFT CONTROL MODULES
            ================================================== */}

            <div
              className="
                lg:col-span-5
                p-5
                sm:p-6
                lg:p-7
                border-b
                lg:border-b-0
                lg:border-r
                border-white/10
              "
            >
              <div className="mb-6">
                <p className="text-[#9ccc50] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                  Automation Modules
                </p>

                <h3 className="text-white text-2xl sm:text-[28px] font-black leading-tight">
                  Control Water &
                  <span className="block text-[#9ccc50]">
                    Plant Nutrition.
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                {modules.map((module, index) => {
                  const Icon = module.icon;

                  return (
                    <motion.div
                      key={module.title}
                      initial={{
                        opacity: 0,
                        rotateX: -15,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.12,
                      }}
                      whileHover={{
                        x: 5,
                      }}
                      className="
                        group
                        relative
                        border
                        border-white/10
                        bg-white/[0.025]
                        p-5
                        sm:p-6
                        hover:border-[#83b735]/60
                        hover:bg-white/[0.04]
                        transition-all
                        duration-300
                      "
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{
                            rotate: 12,
                            scale: 1.08,
                          }}
                          className="
                            w-12
                            h-12
                            shrink-0
                            bg-[#83b735]/10
                            text-[#9ccc50]
                            flex
                            items-center
                            justify-center
                            group-hover:bg-[#83b735]
                            group-hover:text-white
                            transition-all
                            duration-300
                          "
                        >
                          <Icon
                            className="text-lg"
                            aria-hidden="true"
                          />
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span className="text-white/40 text-[11px] uppercase tracking-[0.15em] font-bold">
                              {module.label}
                            </span>

                            <span className="text-[#9ccc50] text-[10px] sm:text-[11px] font-black tracking-[0.12em]">
                              {module.status}
                            </span>
                          </div>

                          <h3 className="text-white text-lg sm:text-xl font-extrabold mb-2">
                            {module.title}
                          </h3>

                          <p
                            className="
                              text-white/55
                              text-sm
                              sm:text-[15px]
                              leading-[1.7]

                              [&_strong]:text-white/80
                              [&_strong]:font-semibold
                            "
                          >
                            {module.text}
                          </p>

                          {/* DATA LINE */}

                          <div className="relative h-[3px] bg-white/10 mt-4 overflow-hidden">
                            <motion.div
                              initial={{
                                x: "-100%",
                              }}
                              whileInView={{
                                x: "0%",
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: 0.4 + index * 0.15,
                              }}
                              className="absolute inset-y-0 left-0 right-[15%] bg-[#83b735]"
                            />

                            <motion.span
                              animate={{
                                x: ["-100%", "500%"],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute top-0 bottom-0 w-[20%] bg-white/60"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* MINI CONTROLS */}

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="border border-white/10 p-4 sm:p-5">
                  <FaWater
                    className="text-[#9ccc50] text-lg mb-3"
                    aria-hidden="true"
                  />

                  <p className="text-white text-sm sm:text-base font-bold">
                    Water Control
                  </p>

                  <p className="text-white/40 text-xs sm:text-sm mt-1">
                    Planned Distribution
                  </p>
                </div>

                <div className="border border-white/10 p-4 sm:p-5">
                  <FaSeedling
                    className="text-[#9ccc50] text-lg mb-3"
                    aria-hidden="true"
                  />

                  <p className="text-white text-sm sm:text-base font-bold">
                    Plant Nutrition
                  </p>

                  <p className="text-white/40 text-xs sm:text-sm mt-1">
                    Integrated System
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
                RIGHT — FARM NETWORK VISUAL
            ================================================== */}

            <div className="lg:col-span-7 relative min-h-[480px] sm:min-h-[540px] overflow-hidden">
              <motion.img
                initial={{
                  scale: 1.15,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg"
                alt="Agricultural farm illustrating irrigation and farm automation planning"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20" />

              {/* ==========================================
                  30 ACRE CARD
              ========================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="
                  absolute
                  top-5
                  left-5
                  sm:top-7
                  sm:left-7
                  bg-white
                  px-5
                  py-4
                  sm:px-6
                  sm:py-5
                  shadow-xl
                "
              >
                <p className="text-neutral-400 text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold mb-1">
                  Large Farm Planning
                </p>

                <div className="flex items-end gap-2">
                  <span className="text-[#83b735] text-[46px] sm:text-[52px] font-black leading-none">
                    30
                  </span>

                  <div className="pb-1">
                    <span className="block text-neutral-900 text-base font-black">
                      Acres
                    </span>

                    <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-bold">
                      Automation Focused
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ==========================================
                  AUTOMATION NETWORK
              ========================================== */}

              <div className="absolute left-[10%] right-[10%] top-[45%]">
                <div className="relative h-[3px] bg-white/30 overflow-hidden">
                  <motion.div
                    animate={{
                      x: ["-100%", "320%"],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 w-[35%] h-full bg-[#9ccc50]"
                  />
                </div>

                <div className="flex justify-between">
                  {[1, 2, 3, 4].map((zone, index) => (
                    <motion.div
                      key={zone}
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        delay: 0.45 + index * 0.12,
                      }}
                      className="relative -top-[7px]"
                    >
                      <motion.span
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(131,183,53,0)",
                            "0 0 22px rgba(131,183,53,0.9)",
                            "0 0 0px rgba(131,183,53,0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="block w-4 h-4 rounded-full bg-[#83b735] border-[3px] border-white"
                      />

                      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-[10px] sm:text-xs whitespace-nowrap uppercase tracking-wider font-bold">
                        Zone {zone}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* USER BADGE */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-5
                  right-5
                  sm:top-7
                  sm:right-7
                  w-[92px]
                  h-[92px]
                  sm:w-[105px]
                  sm:h-[105px]
                  rounded-full
                  bg-[#83b735]
                  border-[5px]
                  border-white/20
                  text-white
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <FaUser
                  className="text-base mb-2"
                  aria-hidden="true"
                />

                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.08em] font-bold leading-tight">
                  Easier
                  <span className="block">
                    Operation
                  </span>
                </span>
              </motion.div>

              {/* BOTTOM CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.5,
                }}
                className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7 max-w-[590px]"
              >
                <p className="text-[#a8d45e] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                  Large Farm Automation
                </p>

                <h3 className="text-white text-2xl sm:text-3xl font-black leading-tight mb-3">
                  Large Farm.
                  <span className="text-[#a8d45e]">
                    {" "}
                    Smarter Operation.
                  </span>
                </h3>

                <p
                  className="
                    text-white/65
                    text-sm
                    sm:text-base
                    leading-[1.7]

                    [&_strong]:text-white
                    [&_strong]:font-semibold
                  "
                >
                  With suitable plantation planning and integrated{" "}
                  <strong>water and fertilizer automation</strong>, a large
                  fruit plantation can be designed to support routine
                  operations with minimal manpower.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ==================================================
            BENEFITS
        ================================================== */}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-white/10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{
                opacity: 0,
                scale: 0.9,
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
                border-r
                border-b
                border-white/10
                px-4
                py-5
                sm:p-5
                overflow-hidden
                hover:bg-[#83b735]
                transition-colors
                duration-300
              "
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <FaCheck
                  className="text-[#9ccc50] group-hover:text-white text-xs mb-3"
                  aria-hidden="true"
                />
              </motion.div>

              <p className="text-white/70 group-hover:text-white text-sm font-bold leading-[1.5] transition-colors">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ==================================================
            SEO SUPPORT + CTA
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mt-8 lg:mt-10">
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
            transition={{ duration: 0.55 }}
            className="lg:col-span-8"
          >
            <p className="text-[#9ccc50] text-xs uppercase tracking-[0.18em] font-bold mb-2">
              Smart Agricultural Management
            </p>

            <h3 className="text-white text-xl sm:text-2xl font-black mb-2">
              Planning a Large Farm or Fruit Plantation?
            </h3>

            <p
              className="
                text-white/55
                text-sm
                sm:text-base
                leading-[1.7]
                max-w-[760px]

                [&_strong]:text-white/85
                [&_strong]:font-semibold
              "
            >
              Our <strong>agricultural automation solutions</strong> combine
              plantation planning,{" "}
              <strong>smart irrigation systems</strong> and fertilizer
              management to simplify the daily operation of large farms and
              orchards.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 lg:flex lg:justify-end"
          >
            <Link
              to="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                overflow-hidden
                border
                border-[#83b735]
              "
            >
              {/* HOVER BACKGROUND */}

              <span
                className="
                  absolute
                  inset-0
                  bg-[#83b735]
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              />

              <span className="relative z-10 px-5 sm:px-6 py-4 text-[#9ccc50] group-hover:text-white text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-colors">
                Plan Smart Automation
              </span>

              <span
                className="
                  relative
                  z-10
                  w-12
                  self-stretch
                  bg-[#83b735]
                  group-hover:bg-white
                  text-white
                  group-hover:text-[#253126]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                "
              >
                <FaArrowRight
                  className="text-[10px] group-hover:rotate-[-45deg] transition-transform duration-300"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationService;