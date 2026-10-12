import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const MaintenanceCTA = () => {
  const contactNumber = "919422539215";
  const whatsappNumber = "919527921515";

  const whatsappMessage = encodeURIComponent(
    "Hello Aayush Landscaping, I would like to know more about your garden maintenance services."
  );

  return (
    <section
      id="maintenance-contact"
      className="relative bg-[#83b735] py-10 sm:py-12 overflow-hidden"
      aria-labelledby="maintenance-cta-heading"
    >
      {/* BACKGROUND TEXT */}
      <span
        className="
          absolute
          right-[-20px]
          top-1/2
          -translate-y-1/2
          text-white/[0.06]
          text-[100px]
          sm:text-[140px]
          font-black
          leading-none
          pointer-events-none
        "
        aria-hidden="true"
      >
        GROW
      </span>

      <div
        className="
          relative
          z-10
          max-w-[1200px]
          mx-auto
          px-5
          sm:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-7
          "
        >
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[650px]"
          >
            <span
              className="
                text-white/80
                text-xs
                uppercase
                tracking-[0.15em]
                font-black
              "
            >
              Garden Maintenance in Pune
            </span>

            <h2
              id="maintenance-cta-heading"
              className="
                text-white
                text-[32px]
                sm:text-[40px]
                lg:text-[44px]
                font-black
                leading-[1.05]
                tracking-[-0.035em]
                mt-2
              "
            >
              Keep Your Garden{" "}
              <span className="text-[#202522]">
                Healthy Year-Round.
              </span>
            </h2>

            <p
              className="
                text-white/85
                text-sm
                sm:text-base
                leading-relaxed
                mt-3
              "
            >
              Professional{" "}
              <strong>garden maintenance services in Pune</strong> for
              gardens, lawns, farmhouses and plantations.
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                mt-3
                text-white/75
                text-xs
                sm:text-sm
              "
            >
              <FaMapMarkerAlt className="shrink-0" />

              <span>
                Uruli Kanchan, Pune-Solapur Highway, Pune
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              flex
              flex-wrap
              gap-3
              lg:justify-end
              shrink-0
            "
          >
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                bg-[#202522]
                hover:bg-white
                text-white
                hover:text-[#202522]
                px-5
                py-3.5
                text-xs
                font-black
                transition-colors
              "
            >
              Get Maintenance Plan

              <FaArrowRight
                className="
                  text-[8px]
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>

            <a
              href={`tel:+${contactNumber}`}
              aria-label="Call Aayush Landscaping"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                bg-white
                text-[#202522]
                flex
                items-center
                justify-center
                hover:bg-[#202522]
                hover:text-white
                transition-colors
              "
            >
              <FaPhoneAlt className="text-xs" />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Aayush Landscaping on WhatsApp"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                border
                border-white/50
                text-white
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[#202522]
                transition-colors
              "
            >
              <FaWhatsapp className="text-base" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#202522]" />
    </section>
  );
};

export default MaintenanceCTA;