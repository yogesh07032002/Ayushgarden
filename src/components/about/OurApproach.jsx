import {
  FaDraftingCompass,
  FaLeaf,
  FaSearchLocation,
  FaSeedling,
  FaTint,
  FaTools,
} from "react-icons/fa";

import AnimatedHeading from "./AnimatedHeading";
import React from "react";
import { motion } from "framer-motion";

const OurApproach = () => {
  const steps = [
    {
      id: "01",
      icon: FaSearchLocation,
      title: "Understand",
      subtitle: "Site & Requirement",
      description: (
        <>
          We assess the available space, <strong>soil condition</strong>,
          water availability and your landscaping or farming requirements.
        </>
      ),
    },
    {
      id: "02",
      icon: FaDraftingCompass,
      title: "Plan",
      subtitle: "Smart Planning",
      description: (
        <>
          We create a practical plan for{" "}
          <strong>landscaping, plantation, lawn and irrigation</strong>.
        </>
      ),
    },
    {
      id: "03",
      icon: FaSeedling,
      title: "Develop",
      subtitle: "Execution & Plantation",
      description: (
        <>
          Our team handles <strong>garden development and plantation</strong>{" "}
          with proper site preparation and required infrastructure.
        </>
      ),
    },
    {
      id: "04",
      icon: FaTint,
      title: "Automate",
      subtitle: "Efficient Management",
      description: (
        <>
          We integrate{" "}
          <strong>irrigation and fertilizer automation</strong> where
          required to simplify regular management.
        </>
      ),
    },
    {
      id: "05",
      icon: FaTools,
      title: "Maintain",
      subtitle: "Long-Term Care",
      description: (
        <>
          Regular and <strong>yearly maintenance</strong> helps keep gardens,
          plantations and farms healthy and manageable.
        </>
      ),
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="our-approach"
      className="
        relative
        py-12
        sm:py-14
        lg:py-14
        bg-white
        overflow-hidden
      "
      aria-labelledby="our-approach-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-10
          -left-24
          w-56
          h-56
          rounded-full
          border-[40px]
          border-[#83b735]/5
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -bottom-28
          -right-28
          w-72
          h-72
          rounded-full
          bg-[#83b735]/5
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl mx-auto text-center mb-9 lg:mb-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
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
              mb-2
            "
          >
            <FaLeaf aria-hidden="true" />

            <span>Our Approach</span>
          </motion.div>

          <div id="our-approach-heading">
            <AnimatedHeading
              firstText="Every Green Space Starts with"
              highlightText="the Right Plan"
              center
              className="mb-3"
            />
          </div>

          <p
            className="
              text-neutral-500
              text-sm
              sm:text-[15px]
              leading-[1.7]
              max-w-2xl
              mx-auto
            "
          >
            We follow a systematic process from{" "}
            <strong className="font-semibold text-neutral-700">
              landscape planning and garden development
            </strong>{" "}
            to automation and long-term maintenance.
          </p>
        </div>

        {/* ================= DESKTOP PROCESS ================= */}

        <div className="hidden lg:block relative">

          {/* BASE LINE */}

          <div
            className="
              absolute
              top-[48px]
              left-[10%]
              right-[10%]
              h-[2px]
              bg-neutral-200
            "
            aria-hidden="true"
          />

          {/* ANIMATED GREEN LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              top-[48px]
              left-[10%]
              right-[10%]
              h-[2px]
              bg-[#83b735]
              z-[1]
            "
            aria-hidden="true"
          />

          {/* STEPS */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              grid
              grid-cols-5
              gap-5
              relative
              z-10
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.id}
                  variants={item}
                  className="group text-center"
                >
                  {/* ICON */}

                  <div className="relative mx-auto w-[98px] h-[98px] mb-5">

                    {/* ROTATING RING */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-dashed
                        border-[#83b735]/50
                        group-hover:rotate-90
                        transition-transform
                        duration-700
                      "
                      aria-hidden="true"
                    />

                    {/* WHITE CIRCLE */}

                    <div
                      className="
                        absolute
                        inset-[6px]
                        rounded-full
                        bg-white
                        shadow-md
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 5,
                        }}
                        className="
                          w-[68px]
                          h-[68px]
                          rounded-full
                          bg-[#f4f8ed]
                          flex
                          items-center
                          justify-center
                          text-[#83b735]
                          text-xl
                          group-hover:bg-[#83b735]
                          group-hover:text-white
                          transition-all
                          duration-300
                        "
                      >
                        <Icon aria-hidden="true" />
                      </motion.div>
                    </div>

                    {/* NUMBER */}

                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.25,
                      }}
                      className="
                        absolute
                        -top-1
                        -right-1
                        w-7
                        h-7
                        rounded-full
                        bg-neutral-900
                        border-[3px]
                        border-white
                        text-white
                        text-[9px]
                        font-bold
                        flex
                        items-center
                        justify-center
                        shadow-md
                      "
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* SUBTITLE */}

                  <p
                    className="
                      text-[#83b735]
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      font-bold
                      mb-1
                    "
                  >
                    {step.subtitle}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
                      text-lg
                      font-extrabold
                      text-neutral-900
                      mb-2
                      group-hover:text-[#83b735]
                      transition-colors
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-neutral-500
                      text-[11px]
                      leading-[1.65]
                      max-w-[205px]
                      mx-auto

                      [&_strong]:font-semibold
                      [&_strong]:text-neutral-700
                    "
                  >
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            lg:hidden
            relative
            max-w-2xl
            mx-auto
          "
        >
          {/* VERTICAL LINE */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              left-[25px]
              sm:left-[29px]
              top-8
              bottom-8
              w-[2px]
              bg-[#83b735]/30
            "
            aria-hidden="true"
          />

          <div className="space-y-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.id}
                  variants={item}
                  className="
                    relative
                    flex
                    gap-4
                    sm:gap-6
                    group
                  "
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      relative
                      z-10
                      shrink-0
                      w-13
                      h-13
                      sm:w-15
                      sm:h-15
                      w-[52px]
                      h-[52px]
                      sm:w-[60px]
                      sm:h-[60px]
                      rounded-full
                      bg-white
                      border-2
                      border-[#83b735]
                      shadow-md
                      flex
                      items-center
                      justify-center
                      text-[#83b735]
                      group-hover:bg-[#83b735]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      className="text-base sm:text-lg"
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* CARD */}

                  <div
                    className="
                      bg-[#faf7f2]
                      flex-1
                      p-4
                      sm:p-5
                      rounded-xl
                      border
                      border-neutral-100
                      group-hover:shadow-lg
                      group-hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <p
                        className="
                          text-[#83b735]
                          text-[9px]
                          sm:text-[10px]
                          uppercase
                          tracking-[0.16em]
                          font-bold
                        "
                      >
                        {step.subtitle}
                      </p>

                      <span
                        className="
                          text-neutral-300
                          font-black
                          text-sm
                        "
                      >
                        {step.id}
                      </span>
                    </div>

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        font-extrabold
                        text-neutral-900
                        mb-1.5
                      "
                    >
                      {step.title}
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
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* ================= BOTTOM PHILOSOPHY ================= */}

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
          className="
            mt-10
            lg:mt-11
            max-w-4xl
            mx-auto
          "
        >
          <div
            className="
              relative
              bg-neutral-900
              rounded-xl
              px-6
              sm:px-9
              py-5
              sm:py-6
              overflow-hidden
              text-center
            "
          >
            {/* DECORATION */}

            <div
              className="
                absolute
                -right-14
                -top-14
                w-40
                h-40
                rounded-full
                bg-[#83b735]/10
              "
              aria-hidden="true"
            />

            <div
              className="
                absolute
                -left-16
                -bottom-20
                w-44
                h-44
                rounded-full
                border-[30px]
                border-white/[0.03]
              "
              aria-hidden="true"
            />

            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaLeaf
                className="
                  relative
                  z-10
                  text-[#83b735]
                  mx-auto
                  mb-2
                "
                aria-hidden="true"
              />
            </motion.div>

            <h3
              className="
                relative
                z-10
                text-white
                text-lg
                sm:text-xl
                font-extrabold
                mb-2
              "
            >
              We Don't Just Plant. We Plan for Long-Term Growth.
            </h3>

            <p
              className="
                relative
                z-10
                text-white/60
                text-xs
                sm:text-sm
                leading-relaxed
                max-w-2xl
                mx-auto
              "
            >
              Every decision — from{" "}
              <strong className="text-white/80 font-semibold">
                plant selection to irrigation and maintenance
              </strong>{" "}
              — is planned around the long-term health and manageability of
              your green space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;