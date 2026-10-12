import {
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTools,
  FaUser,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const SmartFarmHighlight = () => {
  const features = [
    {
      icon: FaTint,
      title: "Water Automation",
      description:
        "Planned irrigation systems for efficient and controlled water distribution across the plantation.",
    },
    {
      icon: FaLeaf,
      title: "Fertilizer Automation",
      description:
        "Automated fertilizer management designed to simplify routine nutrient application.",
    },
    {
      icon: FaSeedling,
      title: "Fruit Plantation",
      description:
        "Systematic fruit tree plantation with proper planning, spacing and long-term growth in mind.",
    },
    {
      icon: FaTools,
      title: "Yearly Maintenance",
      description:
        "Annual maintenance support to help keep the developed farm healthy, organized and manageable.",
    },
  ];

  return (
    <section
      className="relative bg-[#252a27] overflow-hidden"
      id="smart-farm"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#83b735] blur-[130px]"
      />

      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border-[80px] border-white/[0.02]" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <motion.div
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[800px] overflow-hidden group"
          >
            {/* Image */}

            <motion.img
              initial={{
                scale: 1.18,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg"
              alt="Smart Fruit Plantation Development"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1800ms]"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-0 bg-[#83b735]/5" />

            {/* =================================================
                30 ACRES BADGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -25,
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
                damping: 12,
                delay: 0.45,
              }}
              className="absolute top-8 left-6 sm:top-10 sm:left-10"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[155px] h-[155px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#83b735] text-white flex flex-col items-center justify-center text-center shadow-2xl"
              >
                {/* Rotating Ring */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[8px] rounded-full border border-dashed border-white/50"
                />

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                  }}
                  className="relative text-5xl sm:text-6xl font-black leading-none"
                >
                  30
                </motion.span>

                <span className="relative text-xs sm:text-sm uppercase tracking-[0.18em] font-bold mt-1">
                  Acres
                </span>

                <span className="relative text-[9px] sm:text-[10px] opacity-75 mt-1">
                  Smart Farm Capability
                </span>
              </motion.div>
            </motion.div>

            {/* =================================================
                BOTTOM IMAGE TEXT
            ================================================= */}

            <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">

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
                  duration: 0.6,
                  delay: 0.6,
                }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-4"
              >
                <FaSeedling className="text-[#a8d45e] text-xs" />

                <span className="text-white text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold">
                  Large-Scale Fruit Plantation
                </span>
              </motion.div>

              {/* Reveal from Bottom */}

              <div className="overflow-hidden">

                <motion.h3
                  initial={{
                    y: "110%",
                  }}
                  whileInView={{
                    y: "0%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-white text-2xl sm:text-3xl font-extrabold max-w-md leading-tight"
                >
                  Technology Meets{" "}
                  <span className="text-[#a8d45e]">
                    Agriculture.
                  </span>
                </motion.h3>

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div className="relative flex items-center py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 xl:px-16">

            <div className="w-full">

              {/* TAG */}

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
                }}
                className="inline-flex items-center gap-2 text-[#9ccc50] text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-5"
              >
                <FaLeaf />

                <span>Smart Farm Development</span>
              </motion.div>

              {/* =================================================
                  MAIN HEADING
                  DIFFERENT REVEAL FOR EACH LINE
              ================================================= */}

              <div className="mb-7">

                {/* LINE 1 */}

                <div className="overflow-hidden">

                  <motion.h2
                    initial={{
                      y: "110%",
                      rotate: 3,
                    }}
                    whileInView={{
                      y: 0,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl sm:text-5xl xl:text-[54px] font-black text-white leading-[1.08]"
                  >
                    30 Acres.
                  </motion.h2>

                </div>

                {/* LINE 2 */}

                <div className="overflow-hidden">

                  <motion.h2
                    initial={{
                      x: -100,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      delay: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl sm:text-5xl xl:text-[54px] font-black text-white leading-[1.08]"
                  >
                    Smart Automation.
                  </motion.h2>

                </div>

                {/* LINE 3 */}

                <div className="relative inline-block overflow-hidden mt-1">

                  {/* Green Background Wipe */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    className="absolute inset-0 bg-[#83b735]"
                  />

                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8,
                    }}
                    className="relative z-10 text-3xl sm:text-5xl xl:text-[54px] font-black text-white leading-[1.08] px-2 sm:px-3 py-1"
                  >
                    Minimal Manpower.
                  </motion.h2>

                </div>
              </div>

              {/* =================================================
                  PARAGRAPHS
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="text-white/65 text-sm sm:text-base leading-relaxed max-w-xl mb-4"
              >
                Large fruit plantations require proper planning and efficient
                day-to-day management. Aayush Landscaping develops integrated
                systems that combine plantation planning with irrigation and
                fertilizer automation.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="text-white/50 text-sm leading-relaxed max-w-xl mb-9"
              >
                Our system can be designed to make even a 30-acre fruit
                plantation manageable with minimal manpower, including a setup
                intended for operation with a single labour resource for routine
                management.
              </motion.p>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -35 : 35,
                        scale: 0.96,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.12,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="group relative bg-white/[0.05] border border-white/10 rounded-xl p-5 overflow-hidden"
                    >
                      {/* Hover Glow */}

                      <div className="absolute w-24 h-24 rounded-full bg-[#83b735]/20 blur-2xl -right-10 -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: [0, -8, 8, 0],
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="relative w-10 h-10 rounded-lg bg-[#83b735]/15 flex items-center justify-center text-[#9ccc50] mb-4 group-hover:bg-[#83b735] group-hover:text-white transition-all duration-300"
                      >
                        <Icon />
                      </motion.div>

                      <h3 className="relative text-white font-bold text-sm sm:text-base mb-2">
                        {feature.title}
                      </h3>

                      <p className="relative text-white/45 text-xs leading-relaxed">
                        {feature.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

              {/* =================================================
                  MANPOWER HIGHLIGHT
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-white/10 pt-7"
              >
                <div className="flex items-center gap-4">

                  {/* User Icon */}

                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(131,183,53,0)",
                        "0 0 0 8px rgba(131,183,53,0.08)",
                        "0 0 0 0 rgba(131,183,53,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="w-12 h-12 rounded-full border border-[#83b735]/50 bg-[#83b735]/10 flex items-center justify-center shrink-0"
                  >
                    <FaUser className="text-[#9ccc50]" />
                  </motion.div>

                  <div>

                    <p className="text-white font-bold text-sm">
                      Designed for Efficient Operation
                    </p>

                    <p className="text-white/45 text-xs mt-1">
                      Less repetitive manual work. Better control.
                    </p>

                  </div>
                </div>

                {/* CTA */}

                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#83b735] hover:bg-[#74a52d] text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3.5 rounded-lg transition-colors duration-300"
                >
                  Plan Your Farm

                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </motion.a>

              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFarmHighlight;