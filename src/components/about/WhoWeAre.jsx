import {
  FaCheckCircle,
  FaLeaf,
  FaSeedling,
  FaWater,
} from "react-icons/fa";

import AnimatedHeading from "./AnimatedHeading";
import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const points = [
    "Residential & Commercial Landscaping",
    "Garden & Lawn Development",
    "Farm & Large Plot Development",
    "Fruit Plantation & Orchard Development",
    "Irrigation & Fertilizer Automation",
    "Yearly Garden Maintenance",
  ];

  const pointsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pointItem = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="
        relative
        pt-12
        sm:pt-14
        pb-14
        sm:pb-16
        bg-white
        overflow-hidden
      "
      aria-labelledby="who-we-are-heading"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          absolute
          -top-32
          -right-32
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#83b735]/5
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* ================= LEFT IMAGE AREA ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative max-w-[540px] mx-auto lg:mx-0">

              {/* MAIN IMAGE */}
              <div
                className="
                  relative
                  w-[88%]
                  h-[430px]
                  sm:h-[500px]
                  overflow-hidden
                  rounded-[4px]
                  shadow-xl
                  group
                "
              >
                <img
                  src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                  alt="Landscaped outdoor garden with plants and greenery"
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-[1200ms]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                  aria-hidden="true"
                />
              </div>

              {/* SECONDARY IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                }}
                className="
                  absolute
                  -bottom-7
                  right-0
                  w-[47%]
                  h-[205px]
                  sm:h-[235px]
                  border-[7px]
                  border-white
                  shadow-2xl
                  overflow-hidden
                  group
                "
              >
                <img
                  src="https://i.pinimg.com/736x/af/7e/5c/af7e5c912c9e7ee8a0491d08ad306072.jpg"
                  alt="Fruit orchard and plantation development"
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </motion.div>

              {/* FLOATING CARD */}
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
                  delay: 0.35,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  absolute
                  top-9
                  -left-3
                  sm:-left-6
                  bg-[#83b735]
                  text-white
                  px-5
                  py-4
                  shadow-xl
                  max-w-[180px]
                "
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaSeedling
                    className="text-2xl mb-2.5"
                    aria-hidden="true"
                  />
                </motion.div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    font-semibold
                    opacity-80
                    mb-1
                  "
                >
                  Complete Solutions
                </p>

                <p className="text-base sm:text-lg font-extrabold leading-tight">
                  Garden to Farm Development
                </p>
              </motion.div>

              {/* DECORATION */}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="
                  absolute
                  -z-10
                  -top-6
                  -left-6
                  w-36
                  h-36
                  border-[10px]
                  border-[#83b735]/10
                "
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="lg:col-span-6">

            {/* LABEL */}
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
              transition={{
                duration: 0.5,
              }}
              className="
                inline-flex
                items-center
                gap-2
                text-[#83b735]
                text-[11px]
                sm:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                mb-3
              "
            >
              <FaLeaf
                className="text-xs"
                aria-hidden="true"
              />

              <span>Landscaping & Green Development</span>
            </motion.div>

            {/* SEO HEADING */}
            <div id="who-we-are-heading">
              <AnimatedHeading
                firstText="More Than Landscaping."
                highlightText="Complete Green Development Solutions."
                className="mb-5"
              />
            </div>

            {/* PARAGRAPH 1 */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                text-neutral-600
                text-sm
                sm:text-[15px]
                leading-[1.8]
                mb-3
                [&_strong]:font-semibold
                [&_strong]:text-neutral-800
              "
            >
              Aayush Natural Landscaping provides{" "}
              <strong>
                landscaping, garden development and agricultural plot
                development
              </strong>{" "}
              solutions for homes, farmhouses, open plots and large farming
              properties in Pune.
            </motion.p>

            {/* PARAGRAPH 2 */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                text-neutral-500
                text-sm
                sm:text-[15px]
                leading-[1.8]
                mb-6
                [&_strong]:font-semibold
                [&_strong]:text-neutral-700
              "
            >
              Our approach goes beyond planting trees. We consider the
              available space, soil condition, water resources and purpose of
              the property before planning a practical solution — from{" "}
              <strong>
                landscape design and fruit plantation
              </strong>{" "}
              to{" "}
              <strong>
                irrigation automation and long-term maintenance
              </strong>
              .
            </motion.p>

            {/* ================= SERVICE POINTS ================= */}

            <motion.div
              variants={pointsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-7
                gap-y-3.5
                mb-7
              "
            >
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={pointItem}
                  whileHover={{
                    x: 4,
                  }}
                  className="group flex items-start gap-2.5"
                >
                  <FaCheckCircle
                    className="
                      text-[#83b735]
                      text-sm
                      mt-1
                      shrink-0
                      group-hover:scale-110
                      transition-transform
                    "
                    aria-hidden="true"
                  />

                  <strong
                    className="
                      text-sm
                      font-semibold
                      text-neutral-700
                      leading-relaxed
                      group-hover:text-[#83b735]
                      transition-colors
                    "
                  >
                    {point}
                  </strong>
                </motion.div>
              ))}
            </motion.div>

            {/* ================= BOTTOM HIGHLIGHT ================= */}

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
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              whileHover={{
                x: 5,
              }}
              className="
                group
                flex
                items-start
                gap-4
                border-l-4
                border-[#83b735]
                bg-[#faf7f2]
                px-5
                py-4
                transition-all
                duration-300
                hover:shadow-lg
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#83b735]/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                  group-hover:bg-[#83b735]
                  transition-all
                  duration-300
                "
              >
                <FaWater
                  className="
                    text-[#83b735]
                    group-hover:text-white
                    text-lg
                    transition-colors
                    duration-300
                  "
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 text-sm sm:text-base mb-1">
                  Smarter Development. Easier Maintenance.
                </h3>

                <p
                  className="
                    text-neutral-500
                    text-xs
                    sm:text-sm
                    leading-relaxed
                    [&_strong]:font-semibold
                    [&_strong]:text-neutral-700
                  "
                >
                  We combine{" "}
                  <strong>plantation planning</strong> with{" "}
                  <strong>water and fertilizer automation</strong> to make
                  gardens and agricultural plots easier to operate and
                  maintain.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;