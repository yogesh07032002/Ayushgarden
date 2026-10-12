import {
  FaAppleAlt,
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTools,
  FaTractor,
  FaTree,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const OurExpertise = () => {
  const expertise = [
    {
      id: "01",
      icon: FaTree,
      title: "Landscape Development",
      description: (
        <>
          Thoughtfully planned{" "}
          <strong>landscape development</strong> with plantation, greenery
          and outdoor elements designed around your property.
        </>
      ),
    },
    {
      id: "02",
      icon: FaSeedling,
      title: "Garden & Lawn Development",
      description: (
        <>
          Complete <strong>garden and lawn development</strong> for homes,
          farmhouses, commercial properties and open spaces.
        </>
      ),
    },
    {
      id: "03",
      icon: FaTractor,
      title: "Farm & Plot Development",
      description: (
        <>
          Systematic <strong>farm and agricultural plot development</strong>{" "}
          with proper planning, plantation and required infrastructure.
        </>
      ),
    },
    {
      id: "04",
      icon: FaAppleAlt,
      title: "Fruit Plantation",
      description: (
        <>
          Planned <strong>fruit plantation and orchard development</strong>{" "}
          with suitable spacing, irrigation planning and long-term care.
        </>
      ),
    },
    {
      id: "05",
      icon: FaTint,
      title: "Farm Automation",
      description: (
        <>
          <strong>Water and fertilizer automation</strong> systems designed
          to simplify routine farm management and reduce manual effort.
        </>
      ),
    },
    {
      id: "06",
      icon: FaTools,
      title: "Annual Maintenance",
      description: (
        <>
          Regular <strong>garden and plantation maintenance</strong> for
          lawns, trees, orchards and developed agricultural plots.
        </>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="expertise"
      className="
        relative
        py-12
        sm:py-14
        lg:py-14
        bg-[#faf7f2]
        overflow-hidden
      "
      aria-labelledby="expertise-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[300px]
          h-[300px]
          bg-[#83b735]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -bottom-36
          -right-36
          w-[350px]
          h-[350px]
          border-[60px]
          border-[#83b735]/5
          rounded-full
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-5
            items-end
            mb-8
            lg:mb-9
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-7">
            <div
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

              <span>Our Landscaping Expertise</span>
            </div>

            <h2
              id="expertise-heading"
              className="
                text-3xl
                sm:text-4xl
                lg:text-[40px]
                font-extrabold
                text-neutral-900
                leading-[1.12]
                tracking-[-0.02em]
                max-w-2xl
              "
            >
              Expertise Across Every Stage of
              <span className="text-[#83b735]">
                {" "}Green Development
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-5 lg:pl-8">
            <p
              className="
                text-neutral-500
                text-sm
                leading-[1.7]
                [&_strong]:font-semibold
                [&_strong]:text-neutral-700
              "
            >
              From a small garden to a large agricultural property, we provide{" "}
              <strong>landscaping and green development solutions</strong>{" "}
              covering planning, plantation, automation and long-term care.
            </p>
          </div>
        </motion.div>

        {/* ================= CARDS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            lg:gap-5
          "
        >
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  bg-white
                  min-h-[230px]
                  p-6
                  lg:p-6
                  border
                  border-neutral-100
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-shadow
                  duration-300
                "
              >
                {/* GREEN HOVER BACKGROUND */}

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
                  aria-hidden="true"
                />

                {/* LARGE NUMBER */}

                <span
                  className="
                    absolute
                    right-4
                    top-2
                    text-[60px]
                    font-black
                    leading-none
                    text-neutral-900/[0.035]
                    group-hover:text-white/[0.08]
                    transition-colors
                    duration-300
                    select-none
                  "
                  aria-hidden="true"
                >
                  {item.id}
                </span>

                {/* CONTENT */}

                <div className="relative z-10 h-full flex flex-col">

                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.06,
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
                      mb-4
                      group-hover:bg-white
                      group-hover:text-[#83b735]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon aria-hidden="true" />
                  </motion.div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-extrabold
                      text-neutral-900
                      mb-2
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-neutral-500
                      text-xs
                      sm:text-[13px]
                      leading-[1.65]
                      group-hover:text-white/80
                      transition-colors
                      duration-300

                      [&_strong]:font-semibold
                      [&_strong]:text-neutral-700
                      group-hover:[&_strong]:text-white
                    "
                  >
                    {item.description}
                  </p>

                  {/* BOTTOM ACCENT */}

                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <div
                      className="
                        w-7
                        h-[2px]
                        bg-[#83b735]
                        group-hover:bg-white
                        group-hover:w-10
                        transition-all
                        duration-300
                      "
                    />

                    <FaArrowRight
                      className="
                        text-[9px]
                        text-[#83b735]
                        group-hover:text-white
                        opacity-0
                        group-hover:opacity-100
                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-8
            lg:mt-9
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              flex-col
              sm:flex-row
              items-center
              gap-3
              sm:gap-4
              bg-white
              border
              border-neutral-100
              shadow-sm
              px-5
              sm:px-7
              py-3
              rounded-full
              text-center
              sm:text-left
            "
          >
            <div
              className="
                w-8
                h-8
                shrink-0
                rounded-full
                bg-[#83b735]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <FaLeaf
                className="text-[10px]"
                aria-hidden="true"
              />
            </div>

            <p className="text-neutral-700 text-xs sm:text-sm font-semibold">
              One team for
              <span className="text-[#83b735]">
                {" "}Planning → Development → Automation → Maintenance
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurExpertise;