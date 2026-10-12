import {
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaLeaf,
} from "react-icons/fa";

import AnimatedHeading from "./AnimatedHeading";
import React from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  const cards = [
    {
      number: "01",
      icon: FaEye,
      label: "Our Vision",
      title: "Greener Spaces. Smarter Management.",
      description:
        "To create beautiful, productive and sustainable green spaces that are thoughtfully planned, easier to manage and designed for long-term growth.",
    },
    {
      number: "02",
      icon: FaBullseye,
      label: "Our Mission",
      title: "From Planning to Long-Term Care.",
      description:
        "To provide complete landscaping and agricultural development solutions through practical planning, quality plantation, smart automation and reliable maintenance.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.1,
      },
    },
  };

  const textWord = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const renderAnimatedText = (text) => {
    return text.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <motion.span variants={textWord} className="inline-block">
          {word}
        </motion.span>{" "}
      </React.Fragment>
    ));
  };

  return (
    <section
      className="
        relative
        py-12
        sm:py-14
        lg:py-14
        bg-[#faf7f2]
        overflow-hidden
      "
      aria-labelledby="vision-mission-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-28
          -right-28
          w-[300px]
          h-[300px]
          rounded-full
          border-[45px]
          border-[#83b735]/5
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#83b735]/5
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
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

            <span>Our Purpose</span>
          </motion.div>

          <div id="vision-mission-heading">
            <AnimatedHeading
              firstText="Growing Today with a Vision for"
              highlightText="Tomorrow"
              center
              className="mb-3"
            />
          </div>

          <motion.p
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="
              text-neutral-500
              text-sm
              leading-[1.7]
              max-w-2xl
              mx-auto
            "
          >
            {renderAnimatedText(
              "Our purpose goes beyond creating greenery. We develop practical landscapes, gardens and agricultural spaces designed for efficient management and long-term growth."
            )}
          </motion.p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-7
            lg:gap-8
            items-stretch
          "
        >
          {/* ================= LEFT IMAGE ================= */}

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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                relative
                h-[380px]
                sm:h-[430px]
                lg:h-full
                lg:min-h-[410px]
                overflow-hidden
                rounded-xl
                group
                shadow-lg
              "
            >
              <img
                src="https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg"
                alt="Green landscape with planned plantation"
                loading="lazy"
                decoding="async"
                className="
                  absolute
                  inset-0
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
                  from-black/80
                  via-black/15
                  to-transparent
                "
              />

              <div className="absolute inset-0 bg-[#83b735]/5" />

              {/* FLOATING LEAF */}

              <motion.div
                animate={{
                  rotate: [0, 8, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-6
                  right-6
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                "
              >
                <FaLeaf
                  className="text-[#a8d45e]"
                  aria-hidden="true"
                />
              </motion.div>

              {/* IMAGE CONTENT */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="h-[3px] bg-[#83b735] mb-3"
                />

                <p
                  className="
                    text-white/60
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    mb-2
                  "
                >
                  Our Thinking
                </p>

                <motion.h3
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  className="
                    text-white
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    leading-tight
                  "
                >
                  {renderAnimatedText(
                    "Designed for Growth. Built for the Future."
                  )}
                </motion.h3>
              </div>
            </div>
          </motion.div>

          {/* ================= VISION / MISSION ================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              lg:col-span-7
              flex
              flex-col
              gap-5
            "
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.number}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    flex-1
                    bg-white
                    border
                    border-neutral-100
                    p-6
                    sm:p-7
                    lg:px-8
                    lg:py-6
                    overflow-hidden
                    shadow-sm
                    hover:shadow-xl
                    transition-shadow
                    duration-300
                  "
                >
                  {/* HOVER BACKGROUND */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#83b735]
                      -translate-x-[101%]
                      group-hover:translate-x-0
                      transition-transform
                      duration-500
                      ease-out
                    "
                    aria-hidden="true"
                  />

                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      right-5
                      top-0
                      text-[85px]
                      sm:text-[100px]
                      font-black
                      leading-none
                      text-neutral-900/[0.035]
                      group-hover:text-white/[0.08]
                      transition-colors
                      duration-300
                    "
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>

                  <div className="relative z-10">

                    {/* ICON ROW */}

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.08,
                        }}
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-[#83b735]/10
                          flex
                          items-center
                          justify-center
                          text-[#83b735]
                          text-lg
                          group-hover:bg-white
                          transition-all
                          duration-300
                        "
                      >
                        <Icon aria-hidden="true" />
                      </motion.div>

                      <div
                        className="
                          w-9
                          h-9
                          rounded-full
                          border
                          border-neutral-200
                          flex
                          items-center
                          justify-center
                          text-neutral-300
                          group-hover:border-white/30
                          group-hover:text-white
                          transition-all
                          duration-300
                        "
                      >
                        <FaArrowRight
                          className="
                            text-[9px]
                            group-hover:translate-x-1
                            transition-transform
                          "
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* LABEL */}

                    <p
                      className="
                        text-[#83b735]
                        group-hover:text-white/70
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        font-bold
                        mb-1.5
                        transition-colors
                        duration-300
                      "
                    >
                      {card.label}
                    </p>

                    {/* TITLE */}

                    <motion.h3
                      variants={textContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      className="
                        text-xl
                        sm:text-[22px]
                        font-extrabold
                        text-neutral-900
                        group-hover:text-white
                        leading-tight
                        mb-3
                        transition-colors
                        duration-300
                      "
                    >
                      {renderAnimatedText(card.title)}
                    </motion.h3>

                    {/* DESCRIPTION */}

                    <motion.p
                      variants={textContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      className="
                        text-neutral-500
                        group-hover:text-white/80
                        text-sm
                        leading-[1.65]
                        max-w-xl
                        transition-colors
                        duration-300
                      "
                    >
                      {renderAnimatedText(card.description)}
                    </motion.p>

                    <div
                      className="
                        mt-4
                        w-9
                        h-[2px]
                        bg-[#83b735]
                        group-hover:bg-white
                        transition-colors
                        duration-300
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;