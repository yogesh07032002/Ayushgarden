import {
  FaAppleAlt,
  FaBuilding,
  FaHome,
  FaLeaf,
  FaTractor,
  FaTree,
  FaWarehouse,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const MaintenanceFor = () => {
  const spaces = [
    {
      icon: FaHome,
      title: "Home Gardens",
      text: "Regular garden and lawn maintenance for residential spaces.",
    },
    {
      icon: FaWarehouse,
      title: "Farmhouses",
      text: "Garden, lawn and plantation care for farmhouse properties.",
    },
    {
      icon: FaBuilding,
      title: "Commercial Properties",
      text: "Landscape maintenance for commercial outdoor spaces.",
    },
    {
      icon: FaTractor,
      title: "Agricultural Plots",
      text: "Maintenance support for developed agricultural plots.",
    },
    {
      icon: FaAppleAlt,
      title: "Fruit Plantations",
      text: "Ongoing care for fruit plantations and orchard areas.",
    },
    {
      icon: FaTree,
      title: "Large Landscapes",
      text: "Structured maintenance for large landscaped green spaces.",
    },
  ];

  return (
    <section
      id="maintenance-for"
      className="
        relative
        bg-[#faf7f2]
        py-12
        sm:py-14
        lg:py-16
        overflow-hidden
      "
      aria-labelledby="maintenance-for-heading"
    >
      {/* BACKGROUND TEXT */}
      <span
        className="
          absolute
          right-[-20px]
          top-[-15px]
          text-neutral-900/[0.025]
          text-[90px]
          sm:text-[120px]
          lg:text-[150px]
          font-black
          leading-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        SPACES
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
                  bg-[#eaf3df]
                  text-[#83b735]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaLeaf className="text-xs" aria-hidden="true" />
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
                Garden Maintenance for Every Space
              </span>
            </div>

            <h2
              id="maintenance-for-heading"
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
              Maintenance for
              <span className="block text-[#83b735]">
                Every Green Space.
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
            Our <strong>garden maintenance services in Pune</strong> can be
            planned for residential gardens, farmhouses, plantations,
            agricultural plots and commercial landscapes.
          </motion.p>
        </div>

        {/* SPACE CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            sm:gap-4
          "
        >
          {spaces.map((space, index) => {
            const Icon = space.icon;

            return (
              <motion.article
                key={space.title}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
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
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="
                  group
                  relative
                  bg-white
                  border
                  border-neutral-200
                  p-5
                  min-h-[150px]
                  overflow-hidden
                "
              >
                {/* HOVER FILL */}
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
                        group-hover:text-white/30
                        text-xs
                        font-black
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="
                      text-neutral-900
                      group-hover:text-white
                      text-lg
                      sm:text-xl
                      font-black
                      mt-4
                      transition-colors
                    "
                  >
                    {space.title}
                  </h3>

                  <p
                    className="
                      text-neutral-500
                      group-hover:text-white/65
                      text-sm
                      leading-[1.6]
                      mt-2
                      transition-colors
                    "
                  >
                    {space.text}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-[3px]
                    w-0
                    group-hover:w-full
                    bg-[#83b735]
                    transition-all
                    duration-500
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM SEO LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-neutral-500
            text-sm
            sm:text-[15px]
            text-center
            mt-6

            [&_strong]:text-neutral-800
            [&_strong]:font-semibold
          "
        >
          From a home garden to a large agricultural property, we provide{" "}
          <strong>planned garden and landscape maintenance</strong> according
          to the requirements of the space.
        </motion.p>
      </div>
    </section>
  );
};

export default MaintenanceFor;