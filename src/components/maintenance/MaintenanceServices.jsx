import {
  FaBroom,
  FaBug,
  FaCut,
  FaLeaf,
  FaSeedling,
  FaSun,
  FaTint,
  FaTree,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const MaintenanceServices = () => {
  const services = [
    {
      number: "01",
      icon: FaLeaf,
      title: "Lawn Maintenance",
    },
    {
      number: "02",
      icon: FaSeedling,
      title: "Plant Care",
    },
    {
      number: "03",
      icon: FaCut,
      title: "Pruning & Trimming",
    },
    {
      number: "04",
      icon: FaTree,
      title: "Tree Care",
    },
    {
      number: "05",
      icon: FaBroom,
      title: "Weed Management",
    },
    {
      number: "06",
      icon: FaTint,
      title: "Watering System Check",
    },
    {
      number: "07",
      icon: FaSun,
      title: "Seasonal Care",
    },
    {
      number: "08",
      icon: FaBug,
      title: "General Garden Upkeep",
    },
  ];

  return (
    <section
      id="maintenance-services"
      className="relative overflow-hidden bg-[#202522]"
      aria-labelledby="maintenance-services-heading"
    >
      {/* =========================================
          BACKGROUND IMAGE HEADER
      ========================================= */}

      <div className="relative h-[250px] sm:h-[280px] lg:h-[310px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=85"
          alt="Professional garden maintenance services"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#172019]/70" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#172019]/95
            via-[#172019]/70
            to-[#172019]/30
          "
        />

        {/* DECORATIVE TEXT */}
        <span
          className="
            absolute
            right-[-10px]
            bottom-[-25px]
            text-white/[0.04]
            text-[90px]
            sm:text-[120px]
            lg:text-[150px]
            font-black
            leading-none
            pointer-events-none
            select-none
          "
          aria-hidden="true"
        >
          CARE
        </span>

        {/* HEADING */}
        <div
          className="
            relative
            z-10
            max-w-[1360px]
            mx-auto
            h-full
            px-5
            sm:px-8
            lg:px-12
            flex
            items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
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
                <FaLeaf className="text-xs" aria-hidden="true" />
              </span>

              <span
                className="
                  text-[#a8d45e]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.18em]
                  font-black
                "
              >
                What We Maintain
              </span>
            </div>

            <h2
              id="maintenance-services-heading"
              className="
                text-white
                text-[38px]
                sm:text-[46px]
                lg:text-[52px]
                font-black
                leading-[1.04]
                tracking-[-0.04em]
              "
            >
              Complete Care for
              <span className="block text-[#9ccc50]">
                Your Green Space.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          SERVICES LIST CARDS
      ========================================= */}

      <div
        className="
          relative
          z-20
          max-w-[1360px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-10
          sm:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            sm:gap-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  bg-[#292f2b]
                  border
                  border-white/10
                  min-h-[125px]
                  p-5
                  overflow-hidden
                  cursor-default
                "
              >
                {/* HOVER BG */}
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

                {/* NUMBER */}
                <span
                  className="
                    absolute
                    right-3
                    bottom-[-18px]
                    text-[72px]
                    font-black
                    leading-none
                    text-white/[0.025]
                    group-hover:text-white/[0.08]
                    transition-colors
                  "
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[#9ccc50]
                        group-hover:text-white/70
                        text-xs
                        font-black
                        transition-colors
                      "
                    >
                      {service.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 12,
                        scale: 1.08,
                      }}
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-white/[0.07]
                        group-hover:bg-white
                        text-[#9ccc50]
                        group-hover:text-[#83b735]
                        flex
                        items-center
                        justify-center
                        transition-all
                      "
                    >
                      <Icon
                        className="text-sm"
                        aria-hidden="true"
                      />
                    </motion.span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-white
                      text-base
                      sm:text-[17px]
                      lg:text-lg
                      font-black
                      leading-tight
                      mt-5
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* BOTTOM LINE */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    group-hover:w-full
                    h-[3px]
                    bg-white
                    transition-all
                    duration-500
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;