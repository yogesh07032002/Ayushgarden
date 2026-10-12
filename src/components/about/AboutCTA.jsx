import {
  FaArrowRight,
  FaLeaf,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const AboutCTA = () => {
  const whatsappNumber = "919527921515";

  const message =
    "Hello, I am interested in Aayush Landscaping services. I would like to discuss my garden, farm or plot development requirement.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contact"
      className="
        relative
        min-h-[430px]
        lg:min-h-[460px]
        flex
        items-center
        overflow-hidden
      "
      aria-labelledby="about-cta-heading"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src="https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg"
          alt="Green landscaped outdoor space with plants"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/65" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#182015]/90
          via-black/55
          to-black/30
        "
      />

      <div
        className="
          absolute
          -right-32
          -bottom-32
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#83b735]/20
          blur-[100px]
        "
      />

      {/* DECORATION */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-28
          -top-28
          w-[340px]
          h-[340px]
          rounded-full
          border
          border-dashed
          border-white/10
        "
      />

      <div
        className="
          absolute
          -right-10
          -top-10
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-[#83b735]/20
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1320px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-12
          lg:py-14
        "
      >
        <div className="max-w-3xl">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              inline-flex
              items-center
              gap-2
              text-[#a8d45e]
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              mb-3
            "
          >
            <FaLeaf aria-hidden="true" />
            <span>Let's Build Something Green</span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            id="about-cta-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-[48px]
              font-extrabold
              text-white
              leading-[1.08]
              mb-4
            "
          >
            Have a Garden, Farmhouse
            <br className="hidden sm:block" /> or Agricultural Plot?

            <span className="block text-[#9ccc50] mt-1">
              Let&apos;s Make It Grow.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.2,
            }}
            className="
              text-white/70
              text-sm
              leading-[1.7]
              max-w-2xl
              mb-5
              [&_strong]:text-white
              [&_strong]:font-semibold
            "
          >
            From <strong>garden and landscape development</strong> to{" "}
            <strong>fruit plantation and smart farm automation</strong>,
            Aayush Landscaping provides complete solutions for your space.
          </motion.p>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="
                w-8
                h-8
                rounded-full
                bg-white/10
                border
                border-white/15
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <FaMapMarkerAlt
                className="text-[#9ccc50] text-xs"
                aria-hidden="true"
              />
            </div>

            <div>
              <p
                className="
                  text-white/40
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                "
              >
                Visit Us
              </p>

              <p className="text-white text-xs sm:text-sm font-semibold">
                Uruli Kanchan, Haveli, Pune | Pune–Solapur Highway
              </p>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                bg-[#83b735]
                hover:bg-[#74a52d]
                text-white
                px-6
                py-3
                rounded-lg
                text-xs
                font-bold
                uppercase
                tracking-[0.1em]
                shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Book a Site Visit

              <FaArrowRight
                className="
                  text-[9px]
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                bg-white/10
                hover:bg-white
                text-white
                hover:text-neutral-900
                backdrop-blur-md
                border
                border-white/20
                px-6
                py-3
                rounded-lg
                text-xs
                font-bold
                uppercase
                tracking-[0.1em]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaWhatsapp
                className="
                  text-base
                  text-[#9ccc50]
                  group-hover:text-[#25D366]
                "
              />

              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#83b735]" />
    </section>
  );
};

export default AboutCTA;