import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaHome,
  FaLeaf,
  FaSeedling,
  FaTree,
} from "react-icons/fa";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const GardenLawnService = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      number: "01",
      icon: FaHome,
      title: "Indoor Gardening",
      label: "Indoor",
      description:
        "Green solutions for balconies, terraces, indoor corners and compact residential spaces.",
      image:
        "https://i.pinimg.com/736x/af/7e/5c/af7e5c912c9e7ee8a0491d08ad306072.jpg",
      alt: "Indoor and balcony garden with green plants",
    },
    {
      number: "02",
      icon: FaTree,
      title: "Outdoor Garden Development",
      label: "Outdoor",
      description:
        "Planned outdoor gardens for homes, farmhouses, commercial spaces and open properties.",
      image:
        "https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg",
      alt: "Outdoor landscaped garden with trees and plants",
    },
    {
      number: "03",
      icon: FaSeedling,
      title: "Lawn Development",
      label: "Lawns",
      description:
        "Well-planned lawns with site preparation, layout, plantation integration and long-term care.",
      image:
        "https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg",
      alt: "Green lawn and garden landscape",
    },
  ];

  const points = [
    "Indoor & Outdoor Gardening",
    "Residential Garden Development",
    "Farmhouse Gardens",
    "Lawn Development",
    "Plant & Tree Selection",
    "Regular Maintenance Planning",
  ];

  const active = categories[activeCategory];

  return (
    <section
      id="garden-lawn"
      className="relative bg-[#f6f3ec] py-12 sm:py-14 lg:py-16 overflow-hidden"
      aria-labelledby="garden-lawn-heading"
    >
      {/* ==================================================
          BACKGROUND DESIGN
      ================================================== */}

      <div
        className="absolute left-0 top-0 w-[38%] h-full bg-[#eef3e7] hidden lg:block"
        aria-hidden="true"
      />

      <div
        className="absolute -right-24 -top-24 w-[300px] h-[300px] rounded-full border border-[#83b735]/15"
        aria-hidden="true"
      />

      <div
        className="absolute -right-10 -top-10 w-[170px] h-[170px] rounded-full border border-[#83b735]/10"
        aria-hidden="true"
      />

      <span
        className="
          absolute
          right-5
          bottom-0
          text-[100px]
          sm:text-[150px]
          lg:text-[190px]
          leading-none
          font-black
          text-neutral-900/[0.025]
          select-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        GROW
      </span>

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ==================================================
            TOP HEADING
        ================================================== */}

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 text-[#83b735] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
              <FaLeaf aria-hidden="true" />

              <span>Garden & Lawn Development</span>
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
              id="garden-lawn-heading"
              className="
                text-3xl
                sm:text-4xl
                lg:text-[44px]
                font-extrabold
                text-[#252a27]
                leading-[1.08]
                tracking-[-0.03em]
                max-w-[720px]
              "
            >
              Garden & Lawn Development
              <span className="block text-[#83b735]">
                Designed Around Your Lifestyle.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ==================================================
            MAIN EDITORIAL LAYOUT
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ==================================================
              LEFT — CATEGORY NAVIGATION
          ================================================== */}

          <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;

              return (
                <motion.button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  whileHover={{
                    x: isActive ? 0 : 5,
                  }}
                  className={`
                    group
                    relative
                    min-w-[180px]
                    lg:min-w-0
                    w-full
                    text-left
                    px-4
                    py-4
                    sm:px-5
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#253126] text-white shadow-[0_15px_35px_rgba(37,49,38,0.15)]"
                        : "bg-white/70 text-neutral-800 hover:bg-white"
                    }
                  `}
                >
                  {/* Active Line */}

                  <motion.span
                    initial={false}
                    animate={{
                      height: isActive ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 w-[4px] bg-[#83b735]"
                  />

                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10
                        h-10
                        shrink-0
                        rounded-full
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-[#83b735] text-white"
                            : "bg-[#eef5e5] text-[#83b735]"
                        }
                      `}
                    >
                      <Icon className="text-sm" aria-hidden="true" />
                    </div>

                    <div>
                      <span
                        className={`
                          block
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          font-bold
                          mb-0.5

                          ${
                            isActive
                              ? "text-white/40"
                              : "text-neutral-400"
                          }
                        `}
                      >
                        {category.number}
                      </span>

                      <span className="block text-xs sm:text-sm font-extrabold">
                        {category.label}
                      </span>
                    </div>

                    <FaArrowRight
                      className={`
                        ml-auto
                        text-[8px]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "text-[#9ccc50] rotate-[-45deg]"
                            : "text-neutral-300"
                        }
                      `}
                      aria-hidden="true"
                    />
                  </div>
                </motion.button>
              );
            })}

            {/* MINI NOTE */}

            <div className="hidden lg:block mt-auto pt-6">
              <div className="w-10 h-[2px] bg-[#83b735] mb-4" />

              <p className="text-neutral-400 text-[10px] uppercase tracking-[0.18em] font-bold mb-2">
                Our Approach
              </p>

              <p className="text-neutral-600 text-xs leading-[1.7] max-w-[200px]">
                Every garden is planned around the space, sunlight, water and
                future maintenance.
              </p>
            </div>
          </div>

          {/* ==================================================
              CENTER — INTERACTIVE IMAGE
          ================================================== */}

          <div className="lg:col-span-5 relative">
            <div className="relative h-[390px] sm:h-[470px] lg:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.alt}
                  loading="lazy"
                  decoding="async"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    clipPath: "inset(0 0 100% 0)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    clipPath: "inset(0 0 0% 0)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5 pointer-events-none" />

              {/* IMAGE NUMBER */}

              <AnimatePresence mode="wait">
                <motion.span
                  key={active.number}
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  className="
                    absolute
                    top-5
                    right-5
                    text-white/25
                    text-[58px]
                    font-black
                    leading-none
                  "
                  aria-hidden="true"
                >
                  {active.number}
                </motion.span>
              </AnimatePresence>

              {/* IMAGE CONTENT */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                  }}
                  className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                >
                  <div className="w-10 h-[3px] bg-[#83b735] mb-3" />

                  <h3 className="text-white text-xl sm:text-2xl font-extrabold mb-2">
                    {active.title}
                  </h3>

                  <p className="text-white/65 text-xs sm:text-[13px] leading-relaxed max-w-[420px]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FLOATING LABEL */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -right-2
                sm:-right-5
                bg-[#83b735]
                text-white
                px-5
                py-3
                shadow-xl
              "
            >
              <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-white/70">
                Designed To
              </p>

              <p className="text-sm font-extrabold">
                Live. Grow. Enjoy.
              </p>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <motion.div
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
              duration: 0.65,
            }}
            className="lg:col-span-4 lg:pl-3 flex flex-col justify-center"
          >
            <span className="text-[#83b735] text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              More Than Decoration
            </span>

            <h3 className="text-[#252a27] text-2xl sm:text-3xl font-extrabold leading-[1.15] mb-4">
              A Garden Should
              <span className="block">
                Look Good &
              </span>
              <span className="text-[#83b735]">
                Grow Well.
              </span>
            </h3>

            <p
              className="
                text-neutral-500
                text-sm
                leading-[1.7]
                mb-5

                [&_strong]:text-neutral-700
                [&_strong]:font-semibold
              "
            >
              Our <strong>garden and lawn development</strong> considers plant
              selection, sunlight, water, layout and maintenance to create
              practical green spaces for long-term use.
            </p>

            {/* POINTS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 mb-6">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: 15,
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
                  className="group flex items-center gap-2.5 py-2.5 border-b border-neutral-200"
                >
                  <span
                    className="
                      w-5
                      h-5
                      shrink-0
                      rounded-full
                      bg-[#e9f2df]
                      text-[#83b735]
                      flex
                      items-center
                      justify-center
                      group-hover:bg-[#83b735]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaCheck
                      className="text-[7px]"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-neutral-700 text-[11px] font-semibold">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ==================================================
                UNIQUE CTA
            ================================================== */}

            <div>
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  relative
                  border
                  border-[#253126]
                  overflow-hidden
                  transition-all
                  duration-500
                "
              >
                {/* HOVER FILL */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-[#253126]
                    translate-x-[-101%]
                    group-hover:translate-x-0
                    transition-transform
                    duration-500
                    ease-out
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    px-5
                    py-3
                    text-[#253126]
                    group-hover:text-white
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    font-bold
                    transition-colors
                    duration-300
                  "
                >
                  Develop Your Garden
                </span>

                <span
                  className="
                    relative
                    z-10
                    w-11
                    self-stretch
                    bg-[#83b735]
                    text-white
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                >
                  <FaArrowRight
                    className="
                      text-[9px]
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:rotate-[-45deg]
                      transition-all
                      duration-300
                    "
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            BOTTOM SIGNATURE
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          style={{
            transformOrigin: "left",
          }}
          className="mt-10 h-px bg-neutral-200"
        />
      </div>
    </section>
  );
};

export default GardenLawnService;