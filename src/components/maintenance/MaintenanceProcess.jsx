import {
  FaArrowRight,
  FaCalendarCheck,
  FaClipboardList,
  FaEye,
  FaSearch,
  FaSeedling,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const MaintenanceProcess = () => {
  const steps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Garden Inspection",
      text: "We assess the lawn, plants, trees, watering system and overall garden condition.",
    },
    {
      number: "02",
      icon: FaClipboardList,
      title: "Maintenance Plan",
      text: "A suitable garden maintenance plan is prepared based on the space and care requirements.",
    },
    {
      number: "03",
      icon: FaCalendarCheck,
      title: "Scheduled Care",
      text: "Required lawn, plant and garden care is carried out according to the planned schedule.",
    },
    {
      number: "04",
      icon: FaEye,
      title: "Regular Monitoring",
      text: "Plant growth, lawn condition, irrigation and overall garden health are monitored.",
    },
    {
      number: "05",
      icon: FaSeedling,
      title: "Ongoing Improvement",
      text: "The maintenance routine is adjusted whenever required for better long-term garden care.",
    },
  ];

  return (
    <section
      id="maintenance-process"
      className="
        relative
        bg-white
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
        scroll-mt-24
      "
      aria-labelledby="maintenance-process-heading"
    >
      {/* BACKGROUND TEXT */}

      <span
        className="
          absolute
          right-[-20px]
          top-[-20px]
          text-neutral-900/[0.025]
          text-[90px]
          sm:text-[130px]
          lg:text-[160px]
          font-black
          leading-none
          pointer-events-none
          select-none
        "
        aria-hidden="true"
      >
        PROCESS
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
        {/* =====================================
            HEADER
        ===================================== */}

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
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#83b735]" />

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
                Our Garden Maintenance Process
              </span>
            </div>

            <h2
              id="maintenance-process-heading"
              className="
                text-neutral-900
                text-[36px]
                sm:text-[44px]
                lg:text-[50px]
                font-black
                leading-[1.04]
                tracking-[-0.04em]
              "
            >
              Simple Process.
              <span className="block text-[#83b735]">
                Consistent Garden Care.
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
              text-neutral-500
              text-sm
              sm:text-base
              leading-[1.7]

              [&_strong]:text-neutral-700
              [&_strong]:font-semibold
            "
          >
            Our <strong>garden maintenance process</strong> combines
            inspection, planned care and regular monitoring to support
            long-term garden health.
          </motion.p>
        </div>

        {/* =====================================
            PROCESS CARDS
        ===================================== */}

        <div
          className="
            relative
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            border
            border-neutral-200
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
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
                  delay: index * 0.07,
                }}
                className={`
                  group
                  relative
                  min-h-[220px]
                  p-5
                  sm:p-6
                  overflow-hidden
                  bg-white

                  ${index !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""}
                  ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}
                  ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}
                  border-neutral-200
                `}
              >
                {/* HOVER BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#202522]
                    translate-y-[101%]
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                  "
                />

                {/* BIG NUMBER */}

                <span
                  className="
                    absolute
                    right-1
                    bottom-[-18px]
                    text-[80px]
                    leading-none
                    font-black
                    text-neutral-900/[0.025]
                    group-hover:text-white/[0.05]
                    transition-colors
                    pointer-events-none
                  "
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* TOP */}

                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[#83b735]
                        text-xs
                        font-black
                        tracking-[0.08em]
                      "
                    >
                      STEP {step.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 10,
                        scale: 1.08,
                      }}
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#edf5e4]
                        group-hover:bg-[#83b735]
                        text-[#83b735]
                        group-hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-colors
                      "
                    >
                      <Icon className="text-sm" aria-hidden="true" />
                    </motion.span>
                  </div>

                  {/* CONTENT */}

                  <h3
                    className="
                      text-neutral-900
                      group-hover:text-white
                      text-lg
                      sm:text-xl
                      font-black
                      leading-tight
                      mt-7
                      transition-colors
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-neutral-500
                      group-hover:text-white/65
                      text-sm
                      leading-[1.65]
                      mt-3
                      transition-colors
                    "
                  >
                    {step.text}
                  </p>
                </div>

                {/* STEP PROGRESS */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#83b735]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================
            SHORT RESULT STRIP
        ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-[#202522]
            px-5
            sm:px-7
            py-5
            mt-5
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-4
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
              Continuous Garden Care
            </span>

            <p
              className="
                text-white
                text-base
                sm:text-lg
                font-bold
                mt-1
              "
            >
              Inspect → Plan → Maintain → Monitor → Improve
            </p>
          </div>

          <a
            href="#yearly-maintenance"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-white
              text-xs
              sm:text-[13px]
              font-black
              shrink-0
            "
          >
            Yearly Maintenance

            <span
              className="
                w-9
                h-9
                rounded-full
                bg-[#83b735]
                group-hover:bg-white
                group-hover:text-neutral-900
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

export default MaintenanceProcess;