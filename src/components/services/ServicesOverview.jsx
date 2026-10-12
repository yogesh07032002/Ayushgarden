import {
  FaArrowRight,
  FaHome,
  FaLeaf,
  FaMountain,
  FaSeedling,
  FaTint,
  FaTools,
  FaTree,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const ServicesOverview = () => {
  const services = [
    {
      number: "01",
      icon: FaTree,
      title: "Landscape Design & Development",
      short: "Landscape",
      description: (
        <>
          Complete <strong>landscape design and development</strong> for
          attractive, functional and easy-to-maintain outdoor spaces.
        </>
      ),
      image:
        "https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg",
      alt: "Landscaped outdoor garden with plants and greenery",
      link: "#landscaping",
    },
    {
      number: "02",
      icon: FaHome,
      title: "Garden & Lawn Development",
      short: "Garden & Lawn",
      description: (
        <>
          <strong>Garden and lawn development</strong> for homes, farmhouses,
          commercial properties and open spaces.
        </>
      ),
      image:
        "https://i.pinimg.com/736x/af/7e/5c/af7e5c912c9e7ee8a0491d08ad306072.jpg",
      alt: "Green garden and lawn landscaping",
      link: "#garden-lawn",
    },
    {
      number: "03",
      icon: FaMountain,
      title: "Farm & Large Plot Development",
      short: "Farm Development",
      description: (
        <>
          Systematic <strong>farm and agricultural plot development</strong>{" "}
          with plantation planning and required infrastructure.
        </>
      ),
      image:
        "https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg",
      alt: "Agricultural land and plantation development",
      link: "#farm-development",
    },
    {
      number: "04",
      icon: FaSeedling,
      title: "Fruit Plantation",
      short: "Plantation",
      description: (
        <>
          Planned <strong>fruit plantation and orchard development</strong>{" "}
          with suitable spacing, irrigation planning and long-term care.
        </>
      ),
      image:
        "https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg",
      alt: "Fruit orchard and tree plantation",
      link: "#fruit-plantation",
    },
    {
      number: "05",
      icon: FaTint,
      title: "Irrigation & Fertilizer Automation",
      short: "Automation",
      description: (
        <>
          <strong>Smart irrigation and fertilizer automation</strong> for
          easier and more efficient garden and farm management.
        </>
      ),
      image:
        "https://i.pinimg.com/1200x/cb/2a/14/cb2a14ceefb71a3a03f3f72078d7a8fe.jpg",
      alt: "Agricultural plantation with irrigation planning",
      link: "#automation",
    },
    {
      number: "06",
      icon: FaTools,
      title: "Yearly Maintenance Solutions",
      short: "Maintenance",
      description: (
        <>
          Structured <strong>yearly garden and plantation maintenance</strong>{" "}
          for gardens, trees, lawns and developed agricultural plots.
        </>
      ),
      image:
        "https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg",
      alt: "Maintained landscaped garden and greenery",
      link: "#maintenance",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="services-overview"
      className="relative py-12 sm:py-14 lg:py-14 bg-[#faf7f2] overflow-hidden"
      aria-labelledby="services-overview-heading"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute top-0 left-0 w-full h-px bg-neutral-200/70"
        aria-hidden="true"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-40 top-20 w-[340px] h-[340px] rounded-full border border-dashed border-[#83b735]/15 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute -left-32 bottom-16 w-[280px] h-[280px] rounded-full bg-[#83b735]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ================= HEADER ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-8 lg:mb-9">
          <div className="lg:col-span-7">
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
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[#83b735] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
            >
              <FaLeaf aria-hidden="true" />

              <span>Our Landscaping Services</span>
            </motion.div>

            <motion.h2
              id="services-overview-heading"
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
              }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-neutral-900 leading-[1.1] tracking-[-0.02em]"
            >
              Complete Landscaping, Garden
              <span className="block text-[#83b735]">
                & Farm Development Services
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="h-[3px] bg-[#83b735] mt-4"
            />
          </div>

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
              delay: 0.15,
            }}
            className="lg:col-span-5 lg:pl-8"
          >
            <p className="text-neutral-500 text-sm leading-[1.7] [&_strong]:text-neutral-700 [&_strong]:font-semibold">
              From a home garden to a large agricultural property, we provide{" "}
              <strong>landscaping, plantation, farm development</strong> and
              automation solutions from planning to long-term care.
            </p>
          </motion.div>
        </div>

        {/* ================= SERVICES GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-neutral-200"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.a
                href={service.link}
                key={service.number}
                variants={cardVariants}
                className="group relative min-h-[285px] sm:min-h-[300px] bg-white border-r border-b border-neutral-200 overflow-hidden cursor-pointer"
              >
                {/* HOVER IMAGE */}

                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* TOP GREEN LINE */}

                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#83b735] group-hover:w-full transition-all duration-500 z-20" />

                {/* CARD CONTENT */}

                <div className="relative z-10 h-full min-h-[285px] sm:min-h-[300px] p-5 sm:p-6 flex flex-col">
                  {/* TOP */}

                  <div className="flex items-start justify-between gap-4">
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.06,
                      }}
                      className="w-11 h-11 rounded-full bg-[#f2f7e9] flex items-center justify-center text-[#83b735] text-base group-hover:bg-[#83b735] group-hover:text-white transition-all duration-300"
                    >
                      <Icon aria-hidden="true" />
                    </motion.div>

                    <span
                      className="text-[42px] leading-none font-black text-neutral-900/[0.05] group-hover:text-white/15 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* MAIN CONTENT */}

                  <div className="mt-auto">
                    <p className="text-[#83b735] group-hover:text-[#a8d45e] text-[9px] uppercase tracking-[0.18em] font-bold mb-2">
                      {service.short}
                    </p>

                    <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 group-hover:text-white leading-tight mb-2 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-neutral-500 group-hover:text-white/75 text-xs sm:text-[13px] leading-[1.6] transition-colors duration-300 [&_strong]:font-semibold [&_strong]:text-neutral-700 group-hover:[&_strong]:text-white">
                      {service.description}
                    </p>

                    {/* EXPLORE */}

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-neutral-400 group-hover:text-white text-[9px] uppercase tracking-[0.15em] font-bold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Explore Service
                      </span>

                      <div className="ml-auto w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-[#83b735] group-hover:border-[#83b735] group-hover:text-white transition-all duration-300">
                        <FaArrowRight
                          className="text-[8px] group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

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
          }}
          className="mt-7 lg:mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-neutral-200 px-5 sm:px-6 py-4"
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="w-9 h-9 rounded-full bg-[#83b735] text-white flex items-center justify-center shrink-0"
            >
              <FaLeaf className="text-xs" aria-hidden="true" />
            </motion.div>

            <div>
              <p className="text-neutral-900 font-extrabold text-sm">
                Garden पासून Large Agricultural Plot पर्यंत
              </p>

              <p className="text-neutral-400 text-[11px] mt-0.5">
                Planning • Development • Automation • Maintenance
              </p>
            </div>
          </div>

          {/* ================= CREATIVE CTA BUTTON ================= */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              to="/contact"
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                bg-[#253126]
                hover:bg-[#83b735]
                text-white
                pl-5
                pr-2
                py-2
                rounded-full
                overflow-hidden
                shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                hover:shadow-[0_12px_30px_rgba(131,183,53,0.25)]
                transition-all
                duration-300
              "
            >
              {/* SHINE */}

              <span
                className="
                  absolute
                  top-0
                  -left-[120%]
                  w-[70%]
                  h-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  skew-x-[-20deg]
                  group-hover:left-[140%]
                  transition-all
                  duration-700
                  pointer-events-none
                "
              />

              {/* TEXT */}

              <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em]">
                Discuss Your Project
              </span>

              {/* ARROW */}

              <span
                className="
                  relative
                  z-10
                  w-9
                  h-9
                  rounded-full
                  bg-[#83b735]
                  group-hover:bg-white
                  text-white
                  group-hover:text-[#253126]
                  flex
                  items-center
                  justify-center
                  group-hover:rotate-[-45deg]
                  transition-all
                  duration-300
                "
              >
                <FaArrowRight
                  className="text-[9px] group-hover:translate-x-0.5 transition-transform duration-300"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;