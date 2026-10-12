import {
  FaArrowRight,
  FaEnvelope,
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

  const whatsappMessage =
    "Hello Aayush Natural Landscaping, I would like to know more about your landscaping and green development services.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const contactItems = [
    {
      id: "01",
      icon: FaPhoneAlt,
      label: "Call Us",
      title: displayContact,
      description: "Discuss your landscaping or development requirement.",
      href: `tel:+${contactNumber}`,
      external: false,
    },
    {
      id: "02",
      icon: FaWhatsapp,
      label: "WhatsApp",
      title: displayWhatsApp,
      description: "Send us your project details directly on WhatsApp.",
      href: whatsappURL,
      external: true,
    },
    {
      id: "03",
      icon: FaEnvelope,
      label: "Email Us",
      title: email,
      description: "Share your project enquiry and requirements with us.",
      href: `mailto:${email}`,
      external: false,
    },
    {
      id: "04",
      icon: FaMapMarkerAlt,
      label: "Visit Us",
      title: "Uruli Kanchan, Pune",
      description:
        "Pune-Solapur Highway, Behind Super Battery, Tal. Haveli, Dist. Pune.",
      href: "https://www.google.com/maps/search/?api=1&query=Uruli+Kanchan+Pune+Solapur+Highway+Behind+Super+Battery",
      external: true,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#faf7f2]
        py-14
        sm:py-16
        lg:py-[72px]
      "
      aria-labelledby="contact-details-heading"
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[150px]
          top-[40px]
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-dashed
          border-[#83b735]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[100px]
          bottom-[-120px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#83b735]/[0.06]
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-9
            grid
            gap-5
            lg:mb-11
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#83b735]" />

              <span
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#6f9f36]
                "
              >
                Get In Touch
              </span>
            </div>

            <h2
              id="contact-details-heading"
              className="
                max-w-[560px]
                text-[34px]
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-[#253126]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Let's Talk About{" "}
              <span className="text-[#83b735]">Your Space.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              max-w-[680px]
              text-[15px]
              leading-[1.8]
              text-[#667067]
              sm:text-[16px]
              lg:justify-self-end
            "
          >
            Planning a garden, landscape, plantation or farm project? Contact{" "}
            <strong className="font-semibold text-[#253126]">
              Aayush Natural Landscaping
            </strong>{" "}
            for professional{" "}
            <strong className="font-semibold text-[#253126]">
              landscaping and garden development services in Pune
            </strong>
            .
          </motion.p>
        </div>

        {/* ================= CONTACT CARDS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                variants={cardVariants}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="
                  group
                  relative
                  flex
                  min-h-[245px]
                  flex-col
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#e4e8df]
                  bg-white
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-[#83b735]/50
                  hover:shadow-[0_18px_45px_rgba(37,49,38,0.10)]
                "
              >
                {/* TOP GREEN LINE */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-[#83b735]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-[12px]
                    font-black
                    tracking-[0.12em]
                    text-[#253126]/15
                  "
                >
                  {item.id}
                </span>

                {/* ICON */}

                <div
                  className="
                    mb-6
                    flex
                    h-[50px]
                    w-[50px]
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#edf4e5]
                    text-[#6f9f36]
                    transition-all
                    duration-500
                    group-hover:rotate-[-5deg]
                    group-hover:bg-[#83b735]
                    group-hover:text-white
                  "
                >
                  <Icon className="text-[18px]" />
                </div>

                {/* LABEL */}

                <span
                  className="
                    mb-2
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#83b735]
                  "
                >
                  {item.label}
                </span>

                {/* TITLE */}

                <h3
                  className={`
                    font-black
                    leading-[1.35]
                    text-[#253126]
                    ${
                      item.label === "Email Us"
                        ? "break-all text-[15px] sm:text-[16px]"
                        : "text-[18px] sm:text-[19px]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-[1.7]
                    text-[#747c75]
                  "
                >
                  {item.description}
                </p>

                {/* ARROW */}

                <div className="mt-auto pt-5">
                  <span
                    className="
                      inline-flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#253126]
                      text-white
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:bg-[#83b735]
                    "
                  >
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM LINE ================= */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            border-t
            border-[#dfe5da]
            pt-7
            text-center
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#83b735]" />

          <p
            className="
              text-[13px]
              font-semibold
              text-[#6c756d]
              sm:text-[14px]
            "
          >
            Garden to Smart Farm — complete green development solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;