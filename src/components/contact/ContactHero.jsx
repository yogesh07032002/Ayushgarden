import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="
        relative
        flex
        h-[240px]
        w-full
        items-center
        justify-center
        overflow-hidden
        sm:h-[270px]
        lg:h-[300px]
      "
      aria-labelledby="contact-page-heading"
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=85"
        alt="Contact Aayush Natural Landscaping for landscaping services in Pune"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#162018]/65" />

      {/* ================= GREEN OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#18231b]/75
          via-[#18231b]/45
          to-[#83b735]/10
        "
      />

      {/* ================= SOFT BOTTOM OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#111812]/45
          via-transparent
          to-transparent
        "
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-5
          text-center
          sm:px-8
          lg:px-10
        "
      >
        <motion.h1
          id="contact-page-heading"
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[38px]
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            text-white
            sm:text-[48px]
            lg:text-[56px]
          "
        >
          Contact <span className="text-[#9ccc50]">Us</span>
        </motion.h1>

        {/* GREEN LINE */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 54,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="
            mx-auto
            mt-5
            h-[3px]
            rounded-full
            bg-[#83b735]
          "
        />
      </div>

      {/* ================= BOTTOM GREEN LINE ================= */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[4px]
          w-full
          bg-[#83b735]
        "
      />
    </section>
  );
};

export default ContactHero;