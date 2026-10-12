import {
  FaArrowDown,
  FaCalendarCheck,
  FaCheck,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import { Link } from "react-router-dom";
import React from "react";

const MaintenanceHero = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 700], [0, 80]);
  const contentY = useTransform(scrollY, [0, 650], [0, -35]);

  const scrollToNext = () => {
    document
      .getElementById("maintenance-intro")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const maintenancePoints = [
    "Garden & Lawn Care",
    "Pruning & Plant Care",
    "Yearly Maintenance",
  ];

  return (
    <section
      className="
        relative
        min-h-[600px]
        sm:min-h-[620px]
        lg:min-h-[640px]
        bg-[#1d231f]
        overflow-hidden
        flex
        items-center
      "
      aria-labelledby="maintenance-page-heading"
    >
      {/* ==================================================
          BACKGROUND IMAGE
      ================================================== */}

      <motion.div
        style={{ y: imageY }}
        className="
          absolute
          inset-0
          lg:left-[45%]
        "
      >
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90"
          alt="Professional garden maintenance and plant care"
          fetchPriority="high"
          decoding="async"
          className="
            w-full
            h-[112%]
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/20" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1d231f]
            via-[#1d231f]/85
            to-[#1d231f]/15
          "
        />

        <div className="absolute inset-0 bg-[#1d231f]/65 lg:hidden" />
      </motion.div>

      {/* ==================================================
          SUBTLE GRID
      ================================================== */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
        aria-hidden="true"
      />

      {/* ==================================================
          GIANT WORD
      ================================================== */}

      <motion.span
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          absolute
          right-[-15px]
          bottom-[-15px]
          text-white/[0.035]
          text-[90px]
          sm:text-[130px]
          lg:text-[170px]
          font-black
          leading-none
          tracking-[-0.06em]
          whitespace-nowrap
          pointer-events-none
          select-none
        "
        aria-hidden="true"
      >
        MAINTAIN
      </motion.span>

      {/* ==================================================
          ROTATING DECORATION
      ================================================== */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[7%]
          top-[12%]
          w-[190px]
          h-[190px]
          lg:w-[260px]
          lg:h-[260px]
          rounded-full
          border
          border-dashed
          border-white/15
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <motion.div
        style={{ y: contentY }}
        className="
          relative
          z-10
          max-w-[1360px]
          mx-auto
          w-full
          px-5
          sm:px-8
          lg:px-12
          py-14
          sm:py-16
        "
      >
        <div className="max-w-[780px]">
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#83b735]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <FaLeaf
                className="text-white text-sm"
                aria-hidden="true"
              />
            </div>

            <div>
              <span
                className="
                  block
                  text-[#9ccc50]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.18em]
                  font-black
                "
              >
                Aayush Landscaping
              </span>

              <span
                className="
                  block
                  text-white/55
                  text-xs
                  sm:text-[13px]
                  mt-1
                  font-semibold
                "
              >
                Garden Maintenance Services in Pune
              </span>
            </div>
          </motion.div>

          {/* ==================================================
              SINGLE SEO H1
          ================================================== */}

          <div className="overflow-hidden pb-2">
            <motion.h1
              id="maintenance-page-heading"
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-white
                text-[43px]
                sm:text-[56px]
                lg:text-[64px]
                xl:text-[68px]
                font-black
                leading-[0.98]
                tracking-[-0.045em]
              "
            >
              Professional Garden
              <span className="block text-[#9ccc50]">
                Maintenance Services
              </span>

              <span className="block">
                for Year-Round Care.
              </span>
            </motion.h1>
          </div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.65,
            }}
            className="
              text-white/65
              text-base
              sm:text-[17px]
              leading-[1.75]
              max-w-[680px]
              mt-5

              [&_strong]:text-white
              [&_strong]:font-semibold
            "
          >
            Keep your green spaces healthy and organised with{" "}
            <strong>garden maintenance services in Pune</strong>. From{" "}
            <strong>lawn and plant care</strong> to pruning, seasonal upkeep
            and <strong>yearly garden maintenance</strong>, we provide
            structured long-term care for developed spaces.
          </motion.p>

          {/* ==================================================
              SERVICE POINTS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
              mt-6
            "
          >
            {maintenancePoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2.5"
              >
                <span
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-[#83b735]/15
                    border
                    border-[#83b735]/25
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <FaCheck
                    className="text-[#9ccc50] text-[8px]"
                    aria-hidden="true"
                  />
                </span>

                <span
                  className="
                    text-white/75
                    text-sm
                    sm:text-[15px]
                    font-semibold
                  "
                >
                  {point}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ==================================================
              CTA
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="
              flex
              flex-wrap
              items-center
              gap-4
              mt-7
            "
          >
            <Link
              to="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                overflow-hidden
                bg-[#83b735]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-white
                  translate-x-[-101%]
                  group-hover:translate-x-0
                  transition-transform
                  duration-500
                "
              />

              <span
                className="
                  relative
                  z-10
                  px-5
                  sm:px-6
                  py-4
                  text-white
                  group-hover:text-[#253126]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.12em]
                  font-black
                  transition-colors
                "
              >
                Discuss Maintenance
              </span>

              <span
                className="
                  relative
                  z-10
                  w-11
                  self-stretch
                  border-l
                  border-white/20
                  text-white
                  group-hover:text-[#253126]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaSeedling
                  className="
                    text-[10px]
                    group-hover:rotate-12
                    transition-transform
                  "
                  aria-hidden="true"
                />
              </span>
            </Link>

            <button
              type="button"
              onClick={scrollToNext}
              aria-label="Explore garden maintenance services"
              className="
                group
                flex
                items-center
                gap-3
                text-white/60
                hover:text-white
                transition-colors
              "
            >
              <motion.span
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  group-hover:border-[#83b735]
                  group-hover:text-[#9ccc50]
                  transition-colors
                "
              >
                <FaArrowDown
                  className="text-[9px]"
                  aria-hidden="true"
                />
              </motion.span>

              <span
                className="
                  text-xs
                  sm:text-[13px]
                  font-bold
                "
              >
                Explore Maintenance
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ==================================================
          FLOATING ANNUAL CARE CARD
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
          y: 25,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          delay: 0.65,
          duration: 0.75,
        }}
        className="
          hidden
          xl:block
          absolute
          right-[5%]
          bottom-[9%]
          z-20
          bg-white
          w-[300px]
          p-6
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="block text-[#83b735] text-xs uppercase tracking-[0.16em] font-black">
              Annual Care
            </span>

            <span className="block text-neutral-400 text-xs mt-1 font-semibold">
              Garden Maintenance
            </span>
          </div>

          <motion.span
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              w-10
              h-10
              rounded-full
              bg-[#eef6e4]
              text-[#83b735]
              flex
              items-center
              justify-center
            "
          >
            <FaCalendarCheck aria-hidden="true" />
          </motion.span>
        </div>

        <h2 className="text-neutral-900 text-[22px] font-black leading-[1.2]">
          Consistent Care
          <span className="block text-[#83b735]">
            Beyond Development.
          </span>
        </h2>

        <div className="mt-5 pt-4 border-t border-neutral-100 space-y-3">
          {maintenancePoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.85 + index * 0.1,
              }}
              className="flex items-center gap-3"
            >
              <span
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-[#83b735]
                  text-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FaCheck
                  className="text-[7px]"
                  aria-hidden="true"
                />
              </span>

              <span className="text-neutral-600 text-sm font-bold">
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BOTTOM GREEN LINE */}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.3,
          delay: 0.3,
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[4px]
          bg-[#83b735]
          z-30
        "
        aria-hidden="true"
      />
    </section>
  );
};

export default MaintenanceHero;