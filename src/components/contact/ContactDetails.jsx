import {
  FaArrowRight,
  FaEnvelope,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
  const contactNumber = "919422539215";
  const displayContact = "+91 94225 39215";

  const whatsappNumber = "919527921515";
  const displayWhatsApp = "+91 95279 21515";

  const email = "ayushlandscaping2026@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hello Aayush Landscaping, I would like to know more about your landscaping services."
  );

  const details = [
    {
      icon: FaPhoneAlt,
      label: "Call Us",
      title: displayContact,
      text: "Speak with us about your garden, landscaping, farm or plantation requirement.",
      action: "Call Now",
      href: `tel:+${contactNumber}`,
      external: false,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      title: displayWhatsApp,
      text: "Share your project requirement, site details or basic information directly with us.",
      action: "Start Chat",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      external: true,
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      title: email,
      text: "Send your landscaping, garden development or maintenance enquiry by email.",
      action: "Send Email",
      href: `mailto:${email}`,
      external: false,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Visit Us",
      title: "Uruli Kanchan, Pune",
      text: "Pune-Solapur Highway, Behind Super Battery, Taluka Haveli, District Pune.",
      action: "View Location",
      href: "#contact-location",
      external: false,
    },
  ];

  return (
    <section
      id="contact-details"
      className="
        relative
        bg-[#faf7f2]
        py-14
        sm:py-16
        lg:py-[72px]
        overflow-hidden
      "
      aria-labelledby="contact-details-heading"
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          absolute
          -right-[150px]
          -top-[150px]
          w-[330px]
          h-[330px]
          rounded-full
          border
          border-[#83b735]/10
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[40px]
          top-[50px]
          w-[90px]
          h-[90px]
          rounded-full
          bg-[#83b735]/[0.04]
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
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            lg:gap-10
            items-end
            mb-9
            lg:mb-11
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaLeaf className="text-[#83b735] text-[13px]" />

              <span
                className="
                  text-[#83b735]
                  text-[12px]
                  sm:text-[13px]
                  uppercase
                  tracking-[0.14em]
                  font-bold
                "
              >
                Get In Touch
              </span>
            </div>

            <h2
              id="contact-details-heading"
              className="
                text-neutral-900
                text-[34px]
                sm:text-[42px]
                lg:text-[48px]
                font-black
                leading-[1.08]
                tracking-[-0.035em]
              "
            >
              Let's Talk About
              <span className="text-[#83b735]">
                {" "}
                Your Space.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="lg:col-span-6 lg:pb-1"
          >
            <p
              className="
                text-neutral-500
                text-[15px]
                sm:text-[16px]
                leading-[1.75]
                max-w-[590px]
                lg:ml-auto
              "
            >
              Planning a garden, farm or open plot? Connect with Aayush
              Landscaping for{" "}
              <strong className="text-neutral-700 font-bold">
                landscaping and garden development services in Pune
              </strong>
              , plantation, automation and maintenance requirements.
            </p>
          </motion.div>
        </div>

        {/* CONTACT CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            border
            border-neutral-200
            bg-white
          "
        >
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  min-h-[270px]
                  p-6
                  lg:p-7
                  border-b
                  sm:border-r
                  lg:border-b-0
                  border-neutral-200
                  overflow-hidden
                  hover:bg-[#202522]
                  transition-colors
                  duration-500
                "
              >
                {/* TOP LINE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-0
                    group-hover:w-full
                    h-[4px]
                    bg-[#83b735]
                    transition-all
                    duration-500
                  "
                />

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    top-4
                    right-5
                    text-[44px]
                    font-black
                    leading-none
                    text-neutral-900/[0.035]
                    group-hover:text-white/[0.04]
                    transition-colors
                  "
                >
                  0{index + 1}
                </span>

                {/* ICON */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#eef5e5]
                    text-[#83b735]
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-[#83b735]
                    group-hover:text-white
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="text-[16px]" />
                </div>

                {/* LABEL */}

                <p
                  className="
                    text-[#83b735]
                    text-[12px]
                    uppercase
                    tracking-[0.12em]
                    font-bold
                    mb-2
                  "
                >
                  {item.label}
                </p>

                {/* TITLE */}

                <h3
                  className={`
                    text-neutral-900
                    group-hover:text-white
                    font-black
                    leading-[1.35]
                    transition-colors
                    ${
                      item.label === "Email Us"
                        ? "text-[14px] sm:text-[15px] break-all"
                        : "text-[18px] sm:text-[19px]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-neutral-500
                    group-hover:text-white/65
                    text-[14px]
                    leading-[1.65]
                    mt-3
                    transition-colors
                  "
                >
                  {item.text}
                </p>

                {/* ACTION */}

                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="
                    absolute
                    bottom-6
                    left-6
                    lg:left-7
                    inline-flex
                    items-center
                    gap-3
                    text-neutral-900
                    group-hover:text-white
                    text-[13px]
                    font-bold
                    transition-colors
                  "
                >
                  {item.action}

                  <span
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#83b735]
                      text-white
                      flex
                      items-center
                      justify-center
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    <FaArrowRight className="text-[8px]" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM TEXT */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            flex
            items-center
            gap-3
            mt-7
          "
        >
          <span className="w-8 h-px bg-[#83b735]" />

          <p className="text-neutral-500 text-[13px] sm:text-[14px]">
            Garden to Smart Farm —{" "}
            <strong className="text-neutral-700 font-bold">
              complete green development solutions
            </strong>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;