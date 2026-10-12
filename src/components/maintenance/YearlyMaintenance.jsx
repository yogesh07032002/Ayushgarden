import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheck,
  FaCut,
  FaSeedling,
  FaTint,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const YearlyMaintenance = () => {
  const coverage = [
    {
      icon: FaSeedling,
      title: "Plant Care",
      text: "Routine plant care based on growth and seasonal needs.",
    },
    {
      icon: FaCut,
      title: "Pruning & Trimming",
      text: "Scheduled pruning to maintain clean and organised growth.",
    },
    {
      icon: FaTree,
      title: "Tree & Plantation Care",
      text: "Ongoing care for trees, plantations and developed green spaces.",
    },
    {
      icon: FaTint,
      title: "Irrigation Check",
      text: "Regular checks of watering and garden irrigation systems.",
    },
  ];

  return (
    <section
      id="yearly-maintenance"
      className="
        relative
        bg-[#202522]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
        scroll-mt-24
      "
      aria-labelledby="yearly-maintenance-heading"
    >
      {/* BACKGROUND TEXT */}

      <span
        className="
          absolute
          right-[-20px]
          bottom-[-20px]
          text-white/[0.025]
          text-[90px]
          sm:text-[130px]
          lg:text-[160px]
          font-black
          leading-none
          tracking-[-0.05em]
          pointer-events-none
          select-none
        "
        aria-hidden="true"
      >
        365 DAYS
      </span>

      {/* GREEN GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[120px]
          -top-[140px]
          w-[360px]
          h-[360px]
          rounded-full
          bg-[#83b735]
          blur-[120px]
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
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            lg:gap-10
            items-end
            mb-8
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
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
                <FaCalendarAlt className="text-xs" aria-hidden="true" />
              </span>

              <span
                className="
                  text-[#9ccc50]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-black
                "
              >
                Yearly Garden Maintenance
              </span>
            </div>

            <h2
              id="yearly-maintenance-heading"
              className="
                text-white
                text-[36px]
                sm:text-[44px]
                lg:text-[50px]
                font-black
                leading-[1.04]
                tracking-[-0.04em]
              "
            >
              One Garden.
              <span className="block text-[#9ccc50]">
                Year-Round Care.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              lg:col-span-5
              text-white/55
              text-sm
              sm:text-base
              leading-[1.7]

              [&_strong]:text-white
              [&_strong]:font-semibold
            "
          >
            Aayush Landscaping provides{" "}
            <strong>yearly garden maintenance services in Pune</strong> for
            gardens, lawns, plantations, farmhouses and developed plots.
          </motion.p>
        </div>

        {/* =========================================
            COVERAGE CARDS
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            border-l
            border-t
            border-white/10
          "
        >
          {coverage.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  min-h-[190px]
                  p-5
                  sm:p-6
                  border-r
                  border-b
                  border-white/10
                  overflow-hidden
                "
              >
                {/* HOVER */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#83b735]
                    translate-y-[101%]
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{
                        rotate: 10,
                        scale: 1.08,
                      }}
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#83b735]/15
                        group-hover:bg-white
                        text-[#9ccc50]
                        group-hover:text-[#83b735]
                        flex
                        items-center
                        justify-center
                        transition-colors
                      "
                    >
                      <Icon className="text-sm" aria-hidden="true" />
                    </motion.span>

                    <span
                      className="
                        text-white/25
                        group-hover:text-white/65
                        text-xs
                        font-black
                        transition-colors
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="
                      text-white
                      text-lg
                      sm:text-xl
                      font-black
                      mt-5
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-white/45
                      group-hover:text-white/85
                      text-sm
                      leading-[1.65]
                      mt-2.5
                      transition-colors
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            SHORT PLAN STRIP
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-5
            bg-white/[0.05]
            border
            border-white/10
            px-5
            sm:px-6
            py-5
            flex
            flex-col
            lg:flex-row
            lg:items-center
            justify-between
            gap-5
          "
        >
          <div>
            <span
              className="
                text-[#9ccc50]
                text-xs
                uppercase
                tracking-[0.14em]
                font-black
              "
            >
              Annual Maintenance Plan
            </span>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                mt-2
              "
            >
              {["Assess", "Schedule", "Maintain", "Monitor"].map(
                (item, index) => (
                  <React.Fragment key={item}>
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-white
                        text-sm
                        sm:text-[15px]
                        font-bold
                      "
                    >
                      <FaCheck className="text-[#9ccc50] text-[8px]" />
                      {item}
                    </span>

                    {index < 3 && (
                      <FaArrowRight
                        className="
                          hidden
                          sm:block
                          text-white/20
                          text-[8px]
                        "
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>

          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-3
              bg-[#83b735]
              hover:bg-white
              text-white
              hover:text-[#202522]
              px-5
              py-3.5
              text-xs
              sm:text-[13px]
              uppercase
              tracking-[0.1em]
              font-black
              transition-colors
              shrink-0
              self-start
              lg:self-auto
            "
          >
            Discuss Maintenance

            <FaArrowRight
              className="
                text-[8px]
                group-hover:translate-x-1
                transition-transform
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default YearlyMaintenance;