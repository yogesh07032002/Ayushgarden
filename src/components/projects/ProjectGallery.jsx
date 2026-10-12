import {
  FaAppleAlt,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTools,
  FaTractor,
  FaTree,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const ProjectGallery = () => {
  const projects = [
    {
      number: "01",
      icon: FaSeedling,
      category: "Garden",
      title: "Garden Development",
      text: (
        <>
          Planned <strong>garden development</strong> with lawns, plants,
          pathways and practical outdoor spaces.
        </>
      ),
      className: "lg:col-span-5",
    },
    {
      number: "02",
      icon: FaTree,
      category: "Landscape",
      title: "Landscape Development",
      text: (
        <>
          Functional <strong>landscape development</strong> combining
          greenery, plantation zones and outdoor usability.
        </>
      ),
      className: "lg:col-span-7",
    },
    {
      number: "03",
      icon: FaTractor,
      category: "Agriculture",
      title: "Farm & Plot Development",
      text: (
        <>
          Structured <strong>farm and agricultural plot development</strong>{" "}
          for larger open land areas.
        </>
      ),
      className: "lg:col-span-7",
    },
    {
      number: "04",
      icon: FaAppleAlt,
      category: "Plantation",
      title: "Fruit Plantation",
      text: (
        <>
          Planned <strong>fruit plantation and orchard development</strong>{" "}
          with spacing and irrigation planning.
        </>
      ),
      className: "lg:col-span-5",
    },
    {
      number: "05",
      icon: FaTint,
      category: "Automation",
      title: "Smart Farm Systems",
      text: (
        <>
          <strong>Smart irrigation and fertilizer automation</strong> for
          easier day-to-day farm management.
        </>
      ),
      className: "lg:col-span-5",
    },
    {
      number: "06",
      icon: FaTools,
      category: "Maintenance",
      title: "Yearly Maintenance",
      text: (
        <>
          <strong>Yearly garden maintenance</strong> for gardens,
          plantations, trees and developed plots.
        </>
      ),
      className: "lg:col-span-7",
    },
  ];

  return (
    <section
      id="project-gallery"
      className="
        relative
        bg-[#f3f6ed]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
        scroll-mt-24
      "
      aria-labelledby="project-gallery-heading"
    >
      {/* SOFT DECORATION */}
      <div
        className="
          absolute
          -left-[120px]
          top-[80px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#83b735]/10
          blur-[80px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[-100px]
          bottom-[-100px]
          w-[280px]
          h-[280px]
          rounded-full
          border-[55px]
          border-[#83b735]/[0.06]
          pointer-events-none
        "
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
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-5
            mb-8
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaLeaf className="text-[#83b735] text-sm" />

              <span
                className="
                  text-[#83b735]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.14em]
                  font-black
                "
              >
                Our Development Scope
              </span>
            </div>

            <h2
              id="project-gallery-heading"
              className="
                text-[#202522]
                text-[34px]
                sm:text-[42px]
                lg:text-[48px]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
              "
            >
              From Small Gardens
              <span className="block text-[#83b735]">
                to Large Green Spaces.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              max-w-[460px]
              text-neutral-500
              text-sm
              sm:text-base
              leading-[1.7]

              [&_strong]:text-neutral-800
              [&_strong]:font-semibold
            "
          >
            Explore the different types of{" "}
            <strong>landscaping, garden and farm development</strong>{" "}
            solutions we work with.
          </motion.p>
        </div>

        {/* UNIQUE OFFSET GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? 30 : -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className={`
                  ${project.className}
                  group
                  relative
                  bg-white
                  border
                  border-[#dde6d4]
                  min-h-[190px]
                  sm:min-h-[205px]
                  p-5
                  sm:p-6
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:border-[#83b735]
                  hover:shadow-[0_20px_55px_rgba(61,78,43,0.10)]
                `}
              >
                {/* LARGE NUMBER */}
                <span
                  className="
                    absolute
                    right-[-5px]
                    bottom-[-25px]
                    text-[#83b735]/[0.07]
                    group-hover:text-[#83b735]/[0.13]
                    text-[105px]
                    sm:text-[125px]
                    font-black
                    leading-none
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                  "
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    className="
                      w-11
                      h-11
                      bg-[#83b735]
                      text-white
                      rounded-[14px_14px_14px_3px]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon className="text-sm" />
                  </motion.div>

                  <span
                    className="
                      bg-[#edf5e4]
                      text-[#638f28]
                      px-3
                      py-1.5
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      uppercase
                      tracking-[0.08em]
                      font-black
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-5 max-w-[570px]">
                  <h3
                    className="
                      text-[#202522]
                      text-xl
                      sm:text-[23px]
                      font-black
                      tracking-[-0.025em]
                      group-hover:text-[#6c9f2d]
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-neutral-500
                      text-sm
                      leading-[1.65]
                      mt-2
                      max-w-[500px]

                      [&_strong]:text-neutral-700
                      [&_strong]:font-semibold
                    "
                  >
                    {project.text}
                  </p>
                </div>

                {/* CORNER DETAIL */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-[5px]
                    h-0
                    group-hover:h-full
                    bg-[#83b735]
                    transition-all
                    duration-500
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-4
            bg-[#83b735]
            px-5
            sm:px-7
            py-4
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-2
          "
        >
          <div className="flex items-center gap-3">
            <FaLeaf className="text-white text-sm" />

            <span className="text-white text-sm sm:text-base font-black">
              Garden to Smart Farm
            </span>
          </div>

          <span
            className="
              text-white/80
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Plan • Develop • Automate • Maintain
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;