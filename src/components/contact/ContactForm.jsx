import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useState } from "react";

import { motion } from "framer-motion";

const ContactForm = () => {
  const whatsappNumber = "919527921515";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "",
    message: "",
  });

  const projectTypes = [
    "Garden",
    "Landscaping",
    "Farm / Plot",
    "Fruit Plantation",
    "Automation",
    "Maintenance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectProjectType = (type) => {
    setFormData((prev) => ({
      ...prev,
      projectType: type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Aayush Natural Landscaping,

I would like to enquire about a project.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location || "Not specified"}
Project Type: ${formData.projectType || "Not specified"}

Requirement:
${formData.message || "Not specified"}
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-[72px]
      "
      aria-labelledby="contact-form-heading"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          top-[60px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#83b735]/[0.05]
          blur-3xl
        "
      />

      <FaLeaf
        className="
          pointer-events-none
          absolute
          -right-[20px]
          bottom-[-30px]
          hidden
          text-[190px]
          text-[#253126]/[0.025]
          lg:block
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
        <div
          className="
            grid
            overflow-hidden
            rounded-[22px]
            border
            border-[#e2e7de]
            bg-[#faf7f2]
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              bg-[#253126]
              p-7
              sm:p-9
              lg:p-10
              xl:p-12
            "
          >
            {/* DECORATION */}

            <div
              className="
                absolute
                -right-[100px]
                -top-[100px]
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-dashed
                border-white/10
              "
            />

            <div
              className="
                absolute
                -bottom-[90px]
                -left-[90px]
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#83b735]/10
              "
            />

            <div className="relative z-10">
              {/* LABEL */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#83b735]" />

                <span
                  className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#9ccc50]
                  "
                >
                  Project Enquiry
                </span>
              </div>

              {/* HEADING */}

              <h2
                id="contact-form-heading"
                className="
                  max-w-[440px]
                  text-[32px]
                  font-black
                  leading-[1.1]
                  tracking-[-0.04em]
                  text-white
                  sm:text-[39px]
                  lg:text-[42px]
                "
              >
                Tell Us About{" "}
                <span className="text-[#9ccc50]">
                  Your Project.
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-[440px]
                  text-[15px]
                  leading-[1.8]
                  text-white/65
                  sm:text-[16px]
                "
              >
                Share a few details about your{" "}
                <strong className="font-semibold text-white">
                  landscaping or green development project
                </strong>
                . Our team can understand your requirement before discussing
                the next step.
              </p>

              {/* PROJECT TYPES */}

              <div className="mt-8">
                <p
                  className="
                    mb-4
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white/75
                  "
                >
                  We Can Help With
                </p>

                <div className="space-y-3">
                  {[
                    "Garden & Landscape Development",
                    "Farm & Plot Development",
                    "Fruit Plantation",
                    "Irrigation & Fertilizer Automation",
                    "Garden Maintenance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        text-[14px]
                        font-medium
                        text-white/70
                        sm:text-[15px]
                      "
                    >
                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#83b735]/15
                          text-[#9ccc50]
                        "
                      >
                        <FaCheck className="text-[9px]" />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM MESSAGE */}

              <div
                className="
                  mt-9
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-[22px] text-[#9ccc50]" />

                  <div>
                    <p className="text-[14px] font-bold text-white">
                      Quick WhatsApp Enquiry
                    </p>

                    <p className="mt-1 text-[13px] text-white/50">
                      Your enquiry will open directly in WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              bg-[#faf7f2]
              p-6
              sm:p-8
              lg:p-10
              xl:p-12
            "
          >
            <form onSubmit={handleSubmit}>
              {/* NAME + PHONE */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-bold
                      text-[#253126]
                    "
                  >
                    Your Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="
                      h-[52px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#dce2d8]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#253126]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#9ba29b]
                      focus:border-[#83b735]
                      focus:ring-2
                      focus:ring-[#83b735]/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-bold
                      text-[#253126]
                    "
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="Enter phone number"
                    className="
                      h-[52px]
                      w-full
                      rounded-[10px]
                      border
                      border-[#dce2d8]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#253126]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#9ba29b]
                      focus:border-[#83b735]
                      focus:ring-2
                      focus:ring-[#83b735]/10
                    "
                  />
                </div>
              </div>

              {/* LOCATION */}

              <div className="mt-5">
                <label
                  htmlFor="location"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-bold
                    text-[#253126]
                  "
                >
                  Project Location
                </label>

                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Pune, Uruli Kanchan, Hadapsar"
                  className="
                    h-[52px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dce2d8]
                    bg-white
                    px-4
                    text-[15px]
                    text-[#253126]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#9ba29b]
                    focus:border-[#83b735]
                    focus:ring-2
                    focus:ring-[#83b735]/10
                  "
                />
              </div>

              {/* PROJECT TYPE */}

              <div className="mt-6">
                <label
                  className="
                    mb-3
                    block
                    text-[13px]
                    font-bold
                    text-[#253126]
                  "
                >
                  Project Type
                </label>

                <div className="flex flex-wrap gap-2.5">
                  {projectTypes.map((type) => {
                    const isActive = formData.projectType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => selectProjectType(type)}
                        className={`
                          rounded-full
                          border
                          px-4
                          py-2.5
                          text-[13px]
                          font-bold
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-[#253126] bg-[#253126] text-white shadow-sm"
                              : "border-[#d9e0d5] bg-white text-[#657066] hover:border-[#83b735] hover:text-[#67952f]"
                          }
                        `}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-bold
                    text-[#253126]
                  "
                >
                  Tell Us About Your Requirement
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your garden, farm, plot, plantation or maintenance requirement..."
                  className="
                    min-h-[135px]
                    w-full
                    resize-none
                    rounded-[10px]
                    border
                    border-[#dce2d8]
                    bg-white
                    px-4
                    py-3.5
                    text-[15px]
                    leading-[1.7]
                    text-[#253126]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#9ba29b]
                    focus:border-[#83b735]
                    focus:ring-2
                    focus:ring-[#83b735]/10
                  "
                />
              </div>

              {/* SUBMIT */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  mt-6
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-[#83b735]
                  px-6
                  text-[14px]
                  font-black
                  text-white
                  shadow-[0_12px_30px_rgba(131,183,53,0.18)]
                  transition-colors
                  duration-300
                  hover:bg-[#719f31]
                  sm:w-auto
                  sm:text-[15px]
                "
              >
                <FaWhatsapp className="text-[18px]" />

                Send Enquiry on WhatsApp

                <FaArrowRight
                  className="
                    text-[11px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              <p
                className="
                  mt-4
                  text-[12px]
                  leading-5
                  text-[#858d86]
                  sm:text-[13px]
                "
              >
                Clicking the button will open WhatsApp with your enquiry
                details ready to send.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;