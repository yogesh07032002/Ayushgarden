import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSeedling,
  FaTimes,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const MaintenanceWhyNeeded = () => {
  const problems = [
    "Overgrown Plants & Shrubs",
    "Dry or Uneven Lawns",
    "Uncontrolled Weed Growth",
    "Improper Watering",
  ];

  const solutions = [
    "Clean & Organised Growth",
    "Healthier Lawn Care",
    "Controlled Garden Areas",
    "Regular Plant & Tree Care",
  ];

  return (
    <section
      id="why-maintenance"
      className="
        relative
        bg-[#f8f6f1]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
      "
      aria-labelledby="why-maintenance-heading"
    >
      {/* BACKGROUND TEXT */}

      <span
        className="
          absolute
          left-[-20px]
          top-[-15px]
          text-neutral-900/[0.025]
          text-[100px]
          sm:text-[130px]
          lg:text-[160px]
          font-black
          leading-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        WHY CARE?
      </span>

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
        {/* HEADER */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-5
            lg:gap-10
            items-end
            mb-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#e9f2df]
                  text-[#83b735]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaSeedling className="text-xs" />
              </span>

              <span
                className="
                  text-[#83b735]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-black
                "
              >
                Why Garden Maintenance Matters
              </span>
            </div>

            <h2
              id="why-maintenance-heading"
              className="
                text-neutral-900
                text-[36px]
                sm:text-[44px]
                lg:text-[50px]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
              "
            >
              A Healthy Garden Needs
              <span className="block text-[#83b735]">
                Regular Maintenance.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              lg:col-span-5
              text-neutral-500
              text-sm
              sm:text-base
              leading-[1.7]

              [&_strong]:text-neutral-700
              [&_strong]:font-semibold
            "
          >
            Regular <strong>garden maintenance</strong> helps manage lawns,
            plants, trees, weeds and watering before small issues affect the
            complete green space.
          </motion.p>
        </div>

        {/* COMPARISON */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_70px_1fr]">
          {/* PROBLEM */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#292d2a] p-6 sm:p-7"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-white/45 text-xs font-bold">
                  WITHOUT REGULAR CARE
                </span>

                <h3 className="text-white text-2xl font-black mt-1">
                  Neglected Garden
                </h3>
              </div>

              <FaLeaf className="text-white/30 text-xl" />
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/[0.07]
                    p-3
                  "
                >
                  <span
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-white/[0.06]
                      text-white/40
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FaTimes className="text-[7px]" />
                  </span>

                  <span className="text-white/65 text-sm font-semibold">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ARROW */}

          <div className="flex items-center justify-center py-4 lg:py-0">
            <motion.span
              whileInView={{ rotate: [0, 360] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                w-11
                h-11
                rounded-full
                bg-[#83b735]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <FaArrowRight className="rotate-90 lg:rotate-0 text-xs" />
            </motion.span>
          </div>

          {/* SOLUTION */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              bg-[#83b735]
              p-6
              sm:p-7
              overflow-hidden
            "
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-white/70 text-xs font-bold">
                  WITH REGULAR MAINTENANCE
                </span>

                <h3 className="text-white text-2xl font-black mt-1">
                  Maintained Garden
                </h3>
              </div>

              <FaSeedling className="text-white text-xl" />
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/20
                    bg-white/[0.06]
                    p-3
                  "
                >
                  <span
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-white
                      text-[#83b735]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FaCheck className="text-[7px]" />
                  </span>

                  <span className="text-white text-sm font-semibold">
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-4
            mt-6
          "
        >
          <p className="text-neutral-600 text-sm sm:text-[15px]">
            <strong className="text-neutral-900">
              Regular garden care
            </strong>{" "}
            helps keep your landscape organised throughout the year.
          </p>

          <a
            href="#maintenance-process"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-neutral-900
              text-xs
              sm:text-[13px]
              font-black
            "
          >
            See Our Maintenance Process

            <span
              className="
                w-9
                h-9
                rounded-full
                bg-[#202522]
                group-hover:bg-[#83b735]
                text-white
                flex
                items-center
                justify-center
                transition-colors
              "
            >
              <FaArrowRight className="text-[8px]" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceWhyNeeded;