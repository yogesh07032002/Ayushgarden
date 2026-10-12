import {
  FaArrowRight,
  FaCut,
  FaLeaf,
  FaSeedling,
  FaTint,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const MaintenanceIntro = () => {
  const carePoints = [
    {
      number: "01",
      icon: FaTint,
      title: "Regular Garden Care",
      text: (
        <>
          Planned watering and routine{" "}
          <strong>garden care</strong> help plants, lawns and trees receive
          consistent attention.
        </>
      ),
    },
    {
      number: "02",
      icon: FaCut,
      title: "Pruning & Upkeep",
      text: (
        <>
          Timely <strong>pruning, trimming and garden cleaning</strong> help
          keep developed green spaces organised.
        </>
      ),
    },
    {
      number: "03",
      icon: FaSeedling,
      title: "Plant & Lawn Care",
      text: (
        <>
          Regular <strong>plant, tree and lawn maintenance</strong> supports
          the long-term care of your landscape.
        </>
      ),
    },
  ];

  return (
    <section
      id="maintenance-intro"
      className="
        relative
        bg-[#faf7f2]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
        scroll-mt-24
      "
      aria-labelledby="maintenance-intro-heading"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <span
        className="
          absolute
          right-[-25px]
          top-[-20px]
          text-[#83b735]/[0.04]
          text-[110px]
          sm:text-[150px]
          lg:text-[190px]
          font-black
          leading-none
          pointer-events-none
          select-none
        "
        aria-hidden="true"
      >
        CARE
      </span>

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[130px]
          -bottom-[170px]
          w-[360px]
          h-[360px]
          rounded-full
          bg-[#83b735]/10
          blur-[100px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          relative
          z-10
          max-w-[1360px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ==================================================
            TOP
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-7
            lg:gap-12
            items-center
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-7">
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
              className="flex items-center gap-3 mb-4"
            >
              <span
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#eaf3df]
                  text-[#83b735]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaLeaf
                  className="text-sm"
                  aria-hidden="true"
                />
              </span>

              <span
                className="
                  text-[#83b735]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.18em]
                  font-black
                "
              >
                Professional Garden Care
              </span>
            </motion.div>

            {/* SINGLE H2 */}

            <div className="overflow-hidden pb-2">
              <motion.h2
                id="maintenance-intro-heading"
                initial={{
                  y: "105%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-neutral-900
                  text-[38px]
                  sm:text-[46px]
                  lg:text-[52px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.04em]
                "
              >
                Creating a Garden
                <span className="block">
                  is Only <span className="text-[#83b735]">Step One.</span>
                </span>
              </motion.h2>
            </div>

            <motion.p
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
                delay: 0.15,
              }}
              className="
                text-neutral-500
                text-base
                sm:text-[17px]
                leading-[1.75]
                max-w-[690px]
                mt-4

                [&_strong]:text-neutral-700
                [&_strong]:font-semibold
              "
            >
              A developed garden changes throughout the year. Plants grow,
              lawns require attention and watering needs can change with the
              season. Regular{" "}
              <strong>garden maintenance and plant care</strong> helps keep
              your landscape healthy, organised and visually appealing.
            </motion.p>
          </div>

          {/* ==================================================
              RIGHT STATEMENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              rotate: 2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                relative
                bg-[#202522]
                p-6
                sm:p-7
                overflow-hidden
              "
            >
              {/* DECORATION */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -right-14
                  -top-14
                  w-40
                  h-40
                  rounded-full
                  border
                  border-dashed
                  border-white/10
                "
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span
                  className="
                    text-[#9ccc50]
                    text-xs
                    sm:text-[13px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                  "
                >
                  Continuous Garden Care
                </span>

                <h3
                  className="
                    text-white
                    text-2xl
                    sm:text-[30px]
                    font-black
                    leading-[1.1]
                    tracking-[-0.025em]
                    mt-5
                  "
                >
                  Maintaining It
                  <span className="block text-[#9ccc50]">
                    Keeps It Growing.
                  </span>
                </h3>

                <p
                  className="
                    text-white/60
                    text-sm
                    sm:text-[15px]
                    leading-[1.7]
                    mt-4

                    [&_strong]:text-white/85
                    [&_strong]:font-semibold
                  "
                >
                  <strong>Garden maintenance</strong> is an ongoing process.
                  Consistent care helps maintain the health, structure and
                  appearance of your outdoor space.
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                  }}
                  style={{
                    transformOrigin: "left",
                  }}
                  className="h-[3px] bg-[#83b735] mt-6"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            CARE POINTS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            border
            border-neutral-200
            bg-white
            mt-9
            lg:mt-10
          "
        >
          {carePoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  group
                  relative
                  min-h-[225px]
                  p-5
                  sm:p-6
                  overflow-hidden

                  ${
                    index !== 0
                      ? "border-t md:border-t-0 md:border-l border-neutral-200"
                      : ""
                  }
                `}
              >
                {/* HOVER FILL */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#83b735]
                    translate-y-[101%]
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                    ease-out
                  "
                />

                <div className="relative z-10">
                  {/* CARD TOP */}

                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="
                        text-[#83b735]
                        group-hover:text-white/70
                        text-xs
                        font-black
                        transition-colors
                      "
                    >
                      {item.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 12,
                        scale: 1.08,
                      }}
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#edf5e4]
                        group-hover:bg-white
                        text-[#83b735]
                        flex
                        items-center
                        justify-center
                        transition-colors
                      "
                    >
                      <Icon
                        className="text-sm"
                        aria-hidden="true"
                      />
                    </motion.span>
                  </div>

                  <h3
                    className="
                      text-neutral-900
                      group-hover:text-white
                      text-xl
                      sm:text-[22px]
                      font-black
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-neutral-500
                      group-hover:text-white/80
                      text-sm
                      sm:text-[15px]
                      leading-[1.7]
                      mt-3
                      transition-colors

                      [&_strong]:text-neutral-700
                      [&_strong]:font-semibold
                      group-hover:[&_strong]:text-white
                    "
                  >
                    {item.text}
                  </p>
                </div>

                {/* BOTTOM NUMBER */}

                <span
                  className="
                    absolute
                    -right-2
                    -bottom-8
                    text-[95px]
                    leading-none
                    font-black
                    text-[#253126]/[0.025]
                    group-hover:text-white/[0.06]
                    transition-colors
                    pointer-events-none
                  "
                  aria-hidden="true"
                >
                  {item.number}
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}

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
            duration: 0.5,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-5
            mt-6
          "
        >
          <p
            className="
              text-neutral-500
              text-sm
              sm:text-[15px]
              leading-[1.7]
              max-w-[700px]

              [&_strong]:text-neutral-700
              [&_strong]:font-semibold
            "
          >
            The right <strong>garden maintenance plan</strong> depends on your
            space, plantation type, lawn area and ongoing care requirements.
          </p>

          <a
            href="#maintenance-services"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-neutral-900
              text-xs
              sm:text-[13px]
              font-black
              shrink-0
            "
          >
            What We Maintain

            <motion.span
              whileHover={{
                rotate: -35,
              }}
              className="
                w-10
                h-10
                rounded-full
                bg-[#83b735]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <FaArrowRight
                className="text-[9px]"
                aria-hidden="true"
              />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceIntro;