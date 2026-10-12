import {
  FaArrowRight,
  FaEnvelope,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const contactNumber = "919422539215";
  const displayContact = "+91 94225 39215";

  const whatsappNumber = "919527921515";
  const displayWhatsApp = "+91 95279 21515";

  const email = "ayushlandscaping2026@gmail.com";

  const whatsappMessage =
    "Hello Aayush Natural Landscaping, I would like to know more about your landscaping, garden development, farm development and maintenance services.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Garden Maintenance", path: "/maintenance" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    {
      name: "Landscape Design & Development",
      path: "/services#landscaping",
    },
    {
      name: "Garden & Lawn Development",
      path: "/services#garden-lawn",
    },
    {
      name: "Farm & Plot Development",
      path: "/services#farm-development",
    },
    {
      name: "Fruit Plantation",
      path: "/services#fruit-plantation",
    },
    {
      name: "Irrigation & Automation",
      path: "/services#automation",
    },
    {
      name: "Garden Maintenance",
      path: "/maintenance",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t-[4px]
        border-[#83b735]
        bg-[#1c211e]
        text-neutral-300
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#83b735]/[0.06]
          blur-[2px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[180px]
          h-[480px]
          w-[480px]
          rounded-full
          border
          border-dashed
          border-white/[0.06]
        "
      />

      <FaLeaf
        className="
          pointer-events-none
          absolute
          bottom-[80px]
          right-[4%]
          hidden
          text-[220px]
          text-white/[0.018]
          xl:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[15px]
          right-[3%]
          hidden
          select-none
          text-[100px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.018]
          2xl:block
        "
      >
        AAYUSH
      </div>

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <div className="relative z-10 border-b border-white/[0.08]">
        <div
          className="
            mx-auto
            grid
            max-w-[1380px]
            gap-7
            px-5
            py-10
            sm:px-8
            sm:py-12
            lg:grid-cols-[1fr_auto]
            lg:items-center
            lg:px-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#83b735]" />

              <span
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#9ccc50]
                  sm:text-[13px]
                "
              >
                Start Your Green Project
              </span>
            </div>

            <h2
              className="
                max-w-[780px]
                text-[29px]
                font-black
                leading-[1.15]
                tracking-[-0.035em]
                text-white
                sm:text-[36px]
                lg:text-[42px]
              "
            >
              Have a Garden, Farm or Open Plot?{" "}
              <span className="text-[#9ccc50]">
                Let's Develop It.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[730px]
                text-[15px]
                leading-[1.75]
                text-white/65
                sm:text-[16px]
              "
            >
              Talk to{" "}
              <strong className="font-semibold text-white">
                Aayush Natural Landscaping
              </strong>{" "}
              about your garden, landscape, plantation, farm development or
              maintenance requirement.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 lg:justify-end"
          >
            <a
              href={`tel:+${contactNumber}`}
              className="
                group
                flex
                min-h-[52px]
                items-center
                justify-center
                gap-2.5
                rounded-[9px]
                bg-white
                px-6
                text-[14px]
                font-bold
                text-[#253126]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaPhoneAlt className="text-[12px] text-[#83b735]" />
              Call Us
            </a>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[52px]
                items-center
                justify-center
                gap-2.5
                rounded-[9px]
                bg-[#83b735]
                px-6
                text-[14px]
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#92c441]
              "
            >
              <FaWhatsapp className="text-[18px]" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative z-10">
        <div
          className="
            mx-auto
            grid
            max-w-[1380px]
            gap-10
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-8
            lg:px-10
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-2 lg:col-span-4"
          >
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-4"
            >
              <div
                className="
                  flex
                  h-[72px]
                  w-[72px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white
                "
              >
                <img
                  src="/logo.jpeg"
                  alt="Aayush Natural Landscaping"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div
                  className="
                    text-[19px]
                    font-black
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  Aayush Natural
                </div>

                <div
                  className="
                    mt-1.5
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#9ccc50]
                  "
                >
                  Landscaping
                </div>
              </div>
            </Link>

            {/* SEO DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-[410px]
                text-[15px]
                leading-[1.8]
                text-white/60
                sm:text-[16px]
              "
            >
              Aayush Natural Landscaping provides professional{" "}
              <strong className="font-semibold text-white/85">
                landscaping and green development solutions
              </strong>{" "}
              including garden development, farm and plot development, fruit
              plantation, irrigation automation and long-term maintenance in
              Pune.
            </p>

            {/* TAGLINE */}

            <div
              className="
                mt-6
                max-w-[410px]
                border-l-[3px]
                border-[#83b735]
                pl-4
              "
            >
              <p
                className="
                  text-[14px]
                  font-semibold
                  leading-[1.7]
                  text-white/75
                  sm:text-[15px]
                "
              >
                From Landscape Design to Smart Farm Automation — Complete Green
                Development Solutions.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <h3
              className="
                mb-6
                text-[15px]
                font-black
                uppercase
                tracking-[0.11em]
                text-white
                sm:text-[16px]
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[14px]
                      font-medium
                      text-white/65
                      transition-colors
                      duration-300
                      hover:text-[#9ccc50]
                      sm:text-[15px]
                    "
                  >
                    <span
                      className="
                        h-[1px]
                        w-0
                        bg-[#83b735]
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3
              className="
                mb-6
                text-[15px]
                font-black
                uppercase
                tracking-[0.11em]
                text-white
                sm:text-[16px]
              "
            >
              Our Services
            </h3>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2.5
                      text-[14px]
                      font-medium
                      leading-6
                      text-white/65
                      transition-colors
                      duration-300
                      hover:text-[#9ccc50]
                      sm:text-[15px]
                    "
                  >
                    <FaArrowRight
                      className="
                        shrink-0
                        text-[9px]
                        text-[#83b735]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h3
              className="
                mb-6
                text-[15px]
                font-black
                uppercase
                tracking-[0.11em]
                text-white
                sm:text-[16px]
              "
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* ADDRESS */}

              <div className="flex items-start gap-3.5">
                <div
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <FaMapMarkerAlt className="text-[13px] text-[#9ccc50]" />
                </div>

                <address
                  className="
                    max-w-[275px]
                    text-[14px]
                    not-italic
                    leading-[1.75]
                    text-white/65
                    sm:text-[15px]
                  "
                >
                  Pune-Solapur Highway,
                  <br />
                  Behind Super Battery,
                  <br />
                  Uruli Kanchan, Tal. Haveli,
                  <br />
                  Dist. Pune, Maharashtra
                </address>
              </div>

              {/* PHONE */}

              <a
                href={`tel:+${contactNumber}`}
                className="group flex items-center gap-3.5"
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <FaPhoneAlt className="text-[12px] text-[#9ccc50]" />
                </span>

                <span
                  className="
                    text-[14px]
                    font-semibold
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-[15px]
                  "
                >
                  {displayContact}
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5"
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <FaWhatsapp className="text-[16px] text-[#9ccc50]" />
                </span>

                <span
                  className="
                    text-[14px]
                    font-semibold
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-[15px]
                  "
                >
                  {displayWhatsApp}
                </span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${email}`}
                className="group flex items-start gap-3.5"
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <FaEnvelope className="text-[13px] text-[#9ccc50]" />
                </span>

                <span
                  className="
                    break-all
                    pt-1.5
                    text-[13px]
                    font-semibold
                    leading-5
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-[14px]
                  "
                >
                  {email}
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
          bg-black/[0.08]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1380px]
            flex-col
            gap-4
            px-5
            py-5
            text-center
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:text-left
            lg:px-10
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-[13px]
              font-medium
              leading-5
              text-white/50
              sm:text-[14px]
            "
          >
            © {new Date().getFullYear()} Aayush Natural Landscaping. All Rights
            Reserved.
          </p>

          {/* RIGHT SIDE */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              sm:flex-row
              sm:justify-center
              sm:gap-5
              lg:justify-end
            "
          >
            {/* PROCESS */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-2.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white/45
                sm:text-[12px]
              "
            >
              <span>Plan</span>

              <span className="h-1 w-1 rounded-full bg-[#83b735]" />

              <span>Develop</span>

              <span className="h-1 w-1 rounded-full bg-[#83b735]" />

              <span>Automate</span>

              <span className="h-1 w-1 rounded-full bg-[#83b735]" />

              <span>Maintain</span>
            </div>

            {/* DIVIDER */}

            <span className="hidden h-5 w-px bg-white/10 sm:block" />

            {/* DESIGNED & DEVELOPED BY */}

            <p
              className="
                text-[12px]
                font-medium
                text-white/50
                sm:text-[13px]
              "
            >
              Designed &amp; Developed by{" "}
              <a
                href="https://www.hashgridtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-bold
                  text-[#9ccc50]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                HashGrid Technologies Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;