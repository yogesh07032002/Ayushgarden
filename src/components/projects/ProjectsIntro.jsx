import {
  FaArrowRight,
  FaLeaf,
  FaPencilRuler,
  FaSearch,
  FaSeedling,
  FaTools,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const ProjectsIntro = () => {
  const items = [
    {
      number: "01",
      icon: FaSearch,
      title: "Understand",
      text: "We study the site, space, purpose and development requirements.",
    },
    {
      number: "02",
      icon: FaPencilRuler,
      title: "Plan",
      text: "Plantation, layout, irrigation and future maintenance are planned.",
    },
    {
      number: "03",
      icon: FaSeedling,
      title: "Develop",
      text: "The planned garden, landscape, farm or plantation is developed.",
    },
    {
      number: "04",
      icon: FaTools,
      title: "Maintain",
      text: "Maintenance and automation can be integrated for long-term care.",
    },
  ];

  return (
    <section
      id="projects-intro"
      className="
        relative
        bg-[#faf7f2]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
        scroll-mt-24
      "
      aria-labelledby="projects-intro-heading"
    >
      {/* BACKGROUND NUMBER */}
      <span
        className="
          absolute
          right-[-15px]
          top-[-20px]
          text-[#83b735]/[0.045]
          text-[100px]
          sm:text-[140px]
          font-black
          leading-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        01
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
              <FaLeaf
                className="text-[#83b735] text-sm"
                aria-hidden="true"
              />

              <span
                className="
                  text-[#83b735]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.15em]
                  font-black
                "
              >
                Our Project Approach
              </span>
            </div>

            <h2
              id="projects-intro-heading"
              className="
                text-neutral-900
                text-[34px]
                sm:text-[42px]
                lg:text-[48px]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
              "
            >
              Not Just Planting.
              <span className="block text-[#83b735]">
                Complete Development.
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

              [&_strong]:text-neutral-800
              [&_strong]:font-semibold
            "
          >
            Every project starts with understanding the land before{" "}
            <strong>landscape planning, garden development, plantation</strong>{" "}
            or automation begins.
          </motion.p>
        </div>

        {/* PROCESS CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
          "
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
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
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  bg-white
                  border
                  border-neutral-200
                  p-5
                  min-h-[185px]
                  overflow-hidden
                "
              >
                {/* HOVER BACKGROUND */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#202522]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        w-10
                        h-10
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
                    </span>

                    <span
                      className="
                        text-neutral-300
                        group-hover:text-white/25
                        text-xs
                        font-black
                        transition-colors
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className="
                      text-neutral-900
                      group-hover:text-white
                      text-xl
                      font-black
                      mt-5
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-neutral-500
                      group-hover:text-white/60
                      text-sm
                      leading-[1.6]
                      mt-2
                      transition-colors
                    "
                  >
                    {item.text}
                  </p>
                </div>

                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-0
                    group-hover:w-full
                    h-[3px]
                    bg-[#83b735]
                    transition-all
                    duration-500
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* LINK */}
        <motion.a
          href="#project-gallery"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="
            group
            inline-flex
            items-center
            gap-3
            mt-6
            text-neutral-900
            text-xs
            sm:text-[13px]
            uppercase
            tracking-[0.1em]
            font-black
          "
        >
          Explore Project Types

          <span
            className="
              w-9
              h-9
              rounded-full
              bg-[#83b735]
              text-white
              flex
              items-center
              justify-center
            "
          >
            <FaArrowRight
              className="
                text-[8px]
                group-hover:translate-x-0.5
                transition-transform
              "
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectsIntro;