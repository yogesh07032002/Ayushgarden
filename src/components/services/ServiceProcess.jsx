import {
  FaArrowRight,
  FaComments,
  FaDraftingCompass,
  FaLeaf,
  FaSearchLocation,
  FaSeedling,
  FaTint,
  FaTools,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      icon: FaComments,
      label: "Understand",
      title: "Requirement Discussion",
      description: (
        <>
          We understand your <strong>garden, landscape, farm or plantation</strong>{" "}
          requirement, available space and long-term expectations.
        </>
      ),
    },
    {
      number: "02",
      icon: FaSearchLocation,
      label: "Study",
      title: "Site Assessment",
      description: (
        <>
          We consider land conditions, available space, water requirements and
          practical <strong>landscape development possibilities</strong>.
        </>
      ),
    },
    {
      number: "03",
      icon: FaDraftingCompass,
      label: "Plan",
      title: "Planning & Design",
      description: (
        <>
          We plan the layout, plantation zones,{" "}
          <strong>landscaping and irrigation system</strong> before execution.
        </>
      ),
    },
    {
      number: "04",
      icon: FaSeedling,
      label: "Develop",
      title: "Project Development",
      description: (
        <>
          The planned <strong>garden, landscape, farm or fruit plantation</strong>{" "}
          is developed systematically according to the project.
        </>
      ),
    },
    {
      number: "05",
      icon: FaTint,
      label: "Automate",
      title: "Smart Automation",
      description: (
        <>
          Where required, <strong>irrigation and fertilizer automation</strong>{" "}
          is integrated for easier routine farm management.
        </>
      ),
    },
    {
      number: "06",
      icon: FaTools,
      label: "Maintain",
      title: "Long-Term Maintenance",
      description: (
        <>
          <strong>Yearly garden and plantation maintenance</strong> helps keep
          the developed green space organised and manageable.
        </>
      ),
    },
  ];

  return (
    <section
      id="service-process"
      className="relative bg-white py-14 sm:py-16 lg:py-16 overflow-hidden scroll-mt-24"
      aria-labelledby="service-process-heading"
    >
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#253126 1px, transparent 1px),
            linear-gradient(90deg, #253126 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-[150px] -top-[150px] w-[320px] h-[320px] rounded-full border border-dashed border-[#83b735]/20"
        aria-hidden="true"
      />

      <span
        className="absolute -left-3 bottom-0 text-[100px] sm:text-[140px] lg:text-[170px] font-black text-[#253126]/[0.025] leading-none pointer-events-none select-none"
        aria-hidden="true"
      >
        PROCESS
      </span>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[#83b735] text-white flex items-center justify-center">
                <FaLeaf aria-hidden="true" />
              </span>

              <span className="text-[#83b735] text-xs sm:text-sm uppercase tracking-[0.18em] font-bold">
                Our Landscaping Process
              </span>
            </div>

            <h2
              id="service-process-heading"
              className="text-4xl sm:text-[44px] lg:text-[50px] font-black text-[#252a27] leading-[1.07] tracking-[-0.03em]"
            >
              From Your Requirement
              <span className="block text-[#83b735]">
                To a Growing Green Space.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              lg:col-span-5
              text-neutral-500
              text-base
              sm:text-[17px]
              leading-[1.75]

              [&_strong]:text-neutral-700
              [&_strong]:font-semibold
            "
          >
            Every <strong>landscaping and garden development project</strong>{" "}
            follows a practical process — understand the space, plan the
            development, execute systematically and support it with automation
            and long-term maintenance where required.
          </motion.p>
        </div>

        {/* ==================================================
            BLUEPRINT PROCESS BOARD
        ================================================== */}

        <div className="relative bg-[#f8f7f2] border border-neutral-200">
          {/* TOP BAR */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <FaDraftingCompass
                className="text-[#83b735]"
                aria-hidden="true"
              />

              <span className="text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.14em] font-black">
                Green Development Blueprint
              </span>
            </div>

            <span className="text-neutral-400 text-xs sm:text-sm font-semibold">
              06-Step Development Process
            </span>
          </div>

          {/* STEPS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="
                    group
                    relative
                    min-h-[245px]
                    p-5
                    sm:p-6
                    border-b
                    border-neutral-200
                    md:odd:border-r
                    lg:border-r
                    lg:[&:nth-child(3n)]:border-r-0
                    overflow-hidden
                    bg-white/60
                    hover:bg-[#253126]
                    transition-colors
                    duration-500
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      -right-2
                      -top-7
                      text-[105px]
                      font-black
                      leading-none
                      text-[#253126]/[0.035]
                      group-hover:text-white/[0.035]
                      transition-colors
                    "
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* TOP */}

                  <div className="relative z-10 flex items-center justify-between gap-4 mb-7">
                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.08,
                      }}
                      className="
                        w-12
                        h-12
                        bg-[#edf5e3]
                        text-[#83b735]
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#83b735]
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    >
                      <Icon
                        className="text-lg"
                        aria-hidden="true"
                      />
                    </motion.div>

                    <span className="text-[#83b735] text-xs uppercase tracking-[0.15em] font-black">
                      {step.label}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#83b735] text-xs font-black">
                        {step.number}
                      </span>

                      <span className="w-5 h-px bg-[#83b735]" />
                    </div>

                    <h3 className="text-neutral-900 group-hover:text-white text-xl sm:text-[21px] font-black mb-3 transition-colors">
                      {step.title}
                    </h3>

                    <p
                      className="
                        text-neutral-500
                        group-hover:text-white/60
                        text-sm
                        sm:text-[15px]
                        leading-[1.7]
                        transition-colors

                        [&_strong]:text-neutral-700
                        [&_strong]:font-semibold
                        group-hover:[&_strong]:text-white
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* PROGRESS LINE */}

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-100 group-hover:bg-white/10"
                    aria-hidden="true"
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + index * 0.08,
                      }}
                      style={{
                        transformOrigin: "left",
                      }}
                      className="h-full bg-[#83b735]"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            PROCESS FLOW STRIP
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-6 border border-neutral-200 bg-white px-4 sm:px-6 py-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <span className="text-neutral-700 text-xs sm:text-sm font-bold">
                  {step.label}
                </span>

                {index < steps.length - 1 && (
                  <FaArrowRight
                    className="text-[#83b735] text-[9px]"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            clipPath: "inset(0 50% 0 50%)",
          }}
          whileInView={{
            opacity: 1,
            clipPath: "inset(0 0% 0 0%)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative mt-7 lg:mt-8 bg-[#253126] overflow-hidden"
        >
          {/* DECORATION */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-20 -top-20 w-[220px] h-[220px] rounded-full border-[40px] border-[#83b735]/10"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-5 sm:px-7 lg:px-9 py-6 lg:py-7">
            <div className="max-w-[750px]">
              <p className="text-[#9ccc50] text-xs uppercase tracking-[0.18em] font-bold mb-2">
                Complete Green Development
              </p>

              <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-black leading-tight">
                One Team. From Planning
                <span className="text-[#9ccc50]">
                  {" "}
                  to Long-Term Care.
                </span>
              </h3>

              <p className="text-white/55 text-sm sm:text-[15px] leading-[1.7] mt-2 max-w-[650px] [&_strong]:text-white/85 [&_strong]:font-semibold">
                From <strong>landscape planning and garden development</strong>{" "}
                to plantation, automation and maintenance, we manage every
                stage through one structured process.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                overflow-hidden
                bg-[#83b735]
                shrink-0
                self-start
                lg:self-auto
              "
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />

              <span className="relative z-10 px-5 sm:px-6 py-4 text-white group-hover:text-[#253126] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-colors">
                Start Your Project
              </span>

              <span className="relative z-10 w-12 self-stretch border-l border-white/20 text-white group-hover:text-[#253126] flex items-center justify-center">
                <FaArrowRight
                  className="text-[10px] group-hover:rotate-[-45deg] transition-transform duration-300"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;