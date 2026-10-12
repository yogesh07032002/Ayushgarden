import {
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  const quickServices = [
    {
      icon: FaTree,
      text: "Landscaping",
    },
    {
      icon: FaSeedling,
      text: "Farm Development",
    },
    {
      icon: FaTint,
      text: "Smart Automation",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-[560px]
        lg:min-h-[610px]
        bg-[#252a27]
        overflow-hidden
      "
      aria-labelledby="services-page-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-16
          w-[430px]
          h-[430px]
          rounded-full
          bg-[#83b735]
          blur-[120px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-28
          -bottom-28
          w-[290px]
          h-[290px]
          rounded-full
          border
          border-dashed
          border-white/10
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* VERTICAL TEXT */}

      <div
        className="
          hidden
          xl:block
          absolute
          left-5
          top-1/2
          -translate-y-1/2
        "
        aria-hidden="true"
      >
        <p
          className="
            [writing-mode:vertical-rl]
            rotate-180
            text-white/[0.08]
            text-[10px]
            uppercase
            tracking-[0.5em]
            font-bold
          "
        >
          Aayush Landscaping • Green Development
        </p>
      </div>

      {/* ================= MAIN ================= */}

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          relative
          z-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-10
            items-center
            min-h-[560px]
            lg:min-h-[610px]
            py-14
            lg:py-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div className="lg:col-span-6">

            {/* TAG */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              className="
                inline-flex
                items-center
                gap-2.5
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-sm
                rounded-full
                px-4
                py-2
                mb-4
              "
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaLeaf
                  className="text-[#9ccc50]"
                  aria-hidden="true"
                />
              </motion.span>

              <span
                className="
                  text-white/70
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.18em]
                  font-bold
                "
              >
                Landscaping Services in Pune
              </span>
            </motion.div>

            {/* ================= ONE SEO H1 ================= */}

            <div className="overflow-hidden mb-4">
              <motion.h1
                id="services-page-heading"
                initial={{
                  y: "105%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[40px]
                  sm:text-[52px]
                  lg:text-[54px]
                  xl:text-[60px]
                  font-black
                  text-white
                  leading-[0.98]
                  tracking-[-0.03em]
                  max-w-[650px]
                "
              >
                Complete Landscaping,
                <span className="block text-[#9ccc50]">
                  Garden & Farm
                </span>
                <span className="block">
                  Development Solutions.
                </span>
              </motion.h1>
            </div>

            {/* GREEN LINE */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.65,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                w-20
                h-[3px]
                bg-[#83b735]
                mb-4
              "
            />

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
                text-white/60
                text-sm
                leading-[1.7]
                max-w-[570px]
                mb-6

                [&_strong]:text-white/90
                [&_strong]:font-semibold
              "
            >
              From <strong>landscape design and garden development</strong> to{" "}
              <strong>farm development, fruit plantation</strong>, smart
              irrigation and long-term maintenance — Aayush Landscaping
              provides complete green development solutions in Pune.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.7,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <motion.a
                href="#services-overview"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  bg-[#83b735]
                  hover:bg-[#75a72e]
                  text-white
                  px-6
                  py-3
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  transition-colors
                "
              >
                Explore Services

                <FaArrowRight
                  className="
                    text-[9px]
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />
              </motion.a>

              <motion.div
                whileHover={{
                  x: 4,
                }}
              >
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-white
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    px-2
                    py-3
                  "
                >
                  Discuss Your Project

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      group-hover:bg-white
                      group-hover:text-neutral-900
                      transition-all
                    "
                  >
                    <FaArrowRight className="text-[8px]" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{
                clipPath: "inset(0 0 100% 0)",
              }}
              animate={{
                clipPath: "inset(0 0 0% 0)",
              }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                relative
                h-[390px]
                sm:h-[460px]
                lg:h-[500px]
                overflow-hidden
                rounded-t-[90px]
                sm:rounded-t-[120px]
                rounded-br-[45px]
              "
            >
              <motion.img
                initial={{
                  scale: 1.15,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                alt="Landscaped outdoor garden with green plants"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-black/10
                "
              />

              {/* IMAGE TEXT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="
                  absolute
                  bottom-6
                  left-6
                  sm:bottom-7
                  sm:left-7
                "
              >
                <p
                  className="
                    text-white/60
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    mb-1
                  "
                >
                  One Complete Solution
                </p>

                <p className="text-white font-bold text-lg">
                  Garden to Smart Farm
                </p>
              </motion.div>
            </motion.div>

            {/* ================= FLOATING CARDS ================= */}

            <div
              className="
                absolute
                -left-4
                sm:-left-8
                lg:-left-10
                top-1/2
                -translate-y-1/2
                hidden
                sm:flex
                flex-col
                gap-2.5
              "
            >
              {quickServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.text}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.7 + index * 0.12,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      group
                      bg-white
                      shadow-xl
                      flex
                      items-center
                      gap-3
                      min-w-[170px]
                      p-2.5
                      pr-4
                    "
                  >
                    <div
                      className="
                        w-9
                        h-9
                        bg-[#f2f7e9]
                        flex
                        items-center
                        justify-center
                        text-[#83b735]
                        group-hover:bg-[#83b735]
                        group-hover:text-white
                        transition-colors
                      "
                    >
                      <Icon aria-hidden="true" />
                    </div>

                    <span className="text-neutral-800 text-[11px] font-bold">
                      {service.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* DECORATIVE LEAF */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -90,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                type: "spring",
              }}
              className="
                absolute
                -right-3
                bottom-10
                w-16
                h-16
                sm:w-20
                sm:h-20
                rounded-full
                bg-[#83b735]
                border-[6px]
                border-[#252a27]
                flex
                items-center
                justify-center
              "
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-2
                  rounded-full
                  border
                  border-dashed
                  border-white/50
                "
              />

              <FaLeaf
                className="relative text-white text-lg"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[4px]
          bg-[#83b735]
        "
      />
    </section>
  );
};

export default ServicesHero;