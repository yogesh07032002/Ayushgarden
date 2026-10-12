import {
  FaArrowRight,
  FaHome,
  FaLeaf,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSeedling,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const ServicesCTA = () => {
  const contactNumber = "919422539215";
  const displayContact = "+91 94225 39215";

  const whatsappNumber = "919527921515";
  const displayWhatsApp = "+91 95279 21515";

  const message =
    "Hello, I am interested in Aayush Landscaping services. I would like to discuss my garden, landscaping, farm or plot development requirement.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const requirements = [
    {
      icon: FaHome,
      number: "01",
      title: "Garden & Landscape",
      text: "Home • Farmhouse • Commercial",
    },
    {
      icon: FaSeedling,
      number: "02",
      title: "Farm & Plantation",
      text: "Fruit Orchard • Irrigation • Automation",
    },
    {
      icon: FaMapMarkedAlt,
      number: "03",
      title: "Open Plot",
      text: "Large Land • Agricultural Development",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        min-h-[540px]
        lg:min-h-[570px]
        flex
        items-center
        overflow-hidden
        bg-[#182019]
        scroll-mt-24
      "
      aria-labelledby="services-cta-heading"
    >
      {/* ==================================================
          BACKGROUND IMAGE
      ================================================== */}

      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg"
          alt="Green landscaped outdoor space with plants and lawn"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* OVERLAYS */}

      <div className="absolute inset-0 bg-[#172019]/90" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-[#172019]/75
          to-[#172019]/90
        "
      />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
        aria-hidden="true"
      />

      {/* GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.07, 0.16, 0.07],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          -top-24
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#83b735]
          blur-[130px]
        "
        aria-hidden="true"
      />

      {/* GIANT TEXT */}

      <span
        className="
          absolute
          right-0
          bottom-[-20px]
          text-white/[0.025]
          text-[100px]
          md:text-[150px]
          lg:text-[190px]
          font-black
          leading-none
          whitespace-nowrap
          select-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        GROW
      </span>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
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
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-9
            lg:gap-12
            items-center
          "
        >
          {/* ==================================================
              LEFT
          ================================================== */}

          <div className="lg:col-span-7">
            {/* TAG */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="
                inline-flex
                items-center
                gap-3
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-md
                px-4
                py-2.5
                mb-5
              "
            >
              <motion.span
                animate={{
                  rotate: [0, 12, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FaLeaf
                  className="text-[#9ccc50]"
                  aria-hidden="true"
                />
              </motion.span>

              <span
                className="
                  text-[#a8d45e]
                  text-xs
                  sm:text-[13px]
                  uppercase
                  tracking-[0.18em]
                  font-bold
                "
              >
                Landscaping Services in Pune
              </span>
            </motion.div>

            {/* SINGLE H2 */}

            <motion.h2
              id="services-cta-heading"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[38px]
                sm:text-[46px]
                lg:text-[52px]
                font-black
                text-white
                leading-[1.04]
                tracking-[-0.03em]
              "
            >
              Have a Garden, Farm
              <span className="block">
                or <span className="text-[#9ccc50]">Open Plot?</span>
              </span>

              <span className="block text-[#9ccc50] mt-1">
                Let&apos;s Make It Grow.
              </span>
            </motion.h2>

            {/* SEO DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                text-white/65
                text-base
                sm:text-[17px]
                leading-[1.75]
                max-w-[700px]
                mt-5

                [&_strong]:text-white
                [&_strong]:font-semibold
              "
            >
              From{" "}
              <strong>landscaping and garden development in Pune</strong> to{" "}
              <strong>farm development, fruit plantation</strong>, smart
              irrigation automation and yearly maintenance — discuss your
              green development requirement with Aayush Landscaping.
            </motion.p>

            {/* LOCATION */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.25,
              }}
              className="flex items-start gap-3 mt-5"
            >
              <span
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#83b735]/15
                  border
                  border-[#83b735]/30
                  flex
                  items-center
                  justify-center
                  text-[#9ccc50]
                  shrink-0
                "
              >
                <FaMapMarkerAlt aria-hidden="true" />
              </span>

              <div>
                <p className="text-white text-sm sm:text-base font-bold">
                  Uruli Kanchan, Tal. Haveli, Dist. Pune
                </p>

                <p className="text-white/50 text-xs sm:text-sm mt-1">
                  Pune–Solapur Highway, Behind Super Battery
                </p>
              </div>
            </motion.div>

            {/* CTA BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.35,
              }}
              className="flex flex-wrap gap-3 mt-7"
            >
              {/* CONTACT */}

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
                    font-bold
                    transition-colors
                  "
                >
                  Book a Site Visit
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
                  <FaArrowRight
                    className="
                      text-[10px]
                      group-hover:rotate-[-45deg]
                      transition-transform
                      duration-300
                    "
                    aria-hidden="true"
                  />
                </span>
              </Link>

              {/* CALL */}

              <a
                href={`tel:+${contactNumber}`}
                aria-label={`Call Aayush Landscaping at ${displayContact}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/20
                  px-5
                  sm:px-6
                  py-4
                  text-white
                  hover:bg-white
                  hover:text-[#253126]
                  transition-all
                  duration-300
                "
              >
                <FaPhoneAlt
                  className="text-[#9ccc50] group-hover:text-[#83b735]"
                  aria-hidden="true"
                />

                <span className="text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold">
                  Call Us
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp Aayush Landscaping at ${displayWhatsApp}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/20
                  px-5
                  sm:px-6
                  py-4
                  text-white
                  hover:bg-white
                  hover:text-[#253126]
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp
                  className="text-lg text-[#9ccc50] group-hover:text-[#83b735]"
                  aria-hidden="true"
                />

                <span className="text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold">
                  WhatsApp
                </span>
              </a>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT — PROJECT START PANEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                bg-white/[0.07]
                backdrop-blur-xl
                border
                border-white/10
                p-5
                sm:p-6
              "
            >
              {/* PANEL HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  pb-5
                  mb-2
                  border-b
                  border-white/10
                "
              >
                <div>
                  <p
                    className="
                      text-[#9ccc50]
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      font-bold
                      mb-1
                    "
                  >
                    Start Here
                  </p>

                  <h3 className="text-white text-xl sm:text-2xl font-black">
                    What Are You Planning?
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-dashed
                    border-[#83b735]/50
                    text-[#9ccc50]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <FaLeaf aria-hidden="true" />
                </motion.div>
              </div>

              {/* REQUIREMENT ROWS */}

              <div>
                {requirements.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                      }}
                    >
                      <Link
                        to="/contact"
                        className="
                          group
                          relative
                          flex
                          items-center
                          gap-4
                          py-5
                          border-b
                          border-white/10
                          overflow-hidden
                        "
                      >
                        {/* HOVER BG */}

                        <span
                          className="
                            absolute
                            inset-0
                            bg-[#83b735]
                            translate-x-[-101%]
                            group-hover:translate-x-0
                            transition-transform
                            duration-500
                          "
                        />

                        {/* NUMBER */}

                        <span
                          className="
                            relative
                            z-10
                            text-white/25
                            group-hover:text-white/50
                            text-xs
                            font-black
                          "
                        >
                          {item.number}
                        </span>

                        {/* ICON */}

                        <span
                          className="
                            relative
                            z-10
                            w-11
                            h-11
                            shrink-0
                            bg-white/10
                            text-[#9ccc50]
                            group-hover:bg-white
                            group-hover:text-[#83b735]
                            flex
                            items-center
                            justify-center
                            transition-all
                          "
                        >
                          <Icon aria-hidden="true" />
                        </span>

                        {/* TEXT */}

                        <div className="relative z-10 flex-1">
                          <h3 className="text-white text-base sm:text-lg font-extrabold">
                            {item.title}
                          </h3>

                          <p
                            className="
                              text-white/50
                              group-hover:text-white/80
                              text-sm
                              mt-1
                              transition-colors
                            "
                          >
                            {item.text}
                          </p>
                        </div>

                        <FaArrowRight
                          className="
                            relative
                            z-10
                            text-white/35
                            group-hover:text-white
                            text-xs
                            group-hover:translate-x-1
                            transition-all
                          "
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* PANEL BOTTOM */}

              <div className="pt-5 flex items-start gap-3">
                <span className="relative flex w-3 h-3 mt-1 shrink-0">
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-[#83b735]"
                  />

                  <span className="relative w-3 h-3 rounded-full bg-[#83b735]" />
                </span>

                <p className="text-white/55 text-sm leading-relaxed">
                  <strong className="text-white/80">
                    Garden to Smart Farm
                  </strong>{" "}
                  — complete planning, development, automation and maintenance
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================================================
            SERVICE KEYWORDS / INTERNAL CONTEXT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-3
            mt-9
            pt-6
            border-t
            border-white/10
          "
        >
          {[
            "Landscape Design",
            "Garden Development",
            "Farm Development",
            "Fruit Plantation",
            "Smart Irrigation",
            "Garden Maintenance",
          ].map((item) => (
            <span
              key={item}
              className="
                flex
                items-center
                gap-2
                text-white/45
                text-xs
                sm:text-[13px]
                font-semibold
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#83b735]" />

              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM LINE */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#83b735]"
        aria-hidden="true"
      />
    </section>
  );
};

export default ServicesCTA;