import { FaLeaf } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const ProjectsHero = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=85";

  return (
    <section
      className="
        relative
        h-[430px]
        sm:h-[470px]
        lg:h-[500px]
        overflow-hidden
        flex
        items-center
        bg-[#202522]
      "
      aria-labelledby="projects-hero-heading"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImage}
        alt="Landscaped garden with lawn, plants and outdoor greenery"
        fetchPriority="high"
        decoding="async"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* LIGHT DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* LEFT GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/60
          via-black/25
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1360px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[700px]"
        >
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-4">
            <FaLeaf className="text-[#9ccc50] text-sm" />

            <span
              className="
                text-[#9ccc50]
                text-xs
                sm:text-[13px]
                uppercase
                tracking-[0.15em]
                font-bold
              "
            >
              Landscaping Projects in Pune
            </span>
          </div>

          {/* HEADING */}
          <h1
            id="projects-hero-heading"
            className="
              text-white
              text-[42px]
              sm:text-[52px]
              lg:text-[60px]
              font-black
              leading-[1.05]
              tracking-[-0.04em]
            "
          >
            Landscaping &
            <span className="block text-[#9ccc50]">
              Garden Projects.
            </span>
          </h1>

          {/* CONTENT */}
          <p
            className="
              text-white/85
              text-sm
              sm:text-base
              leading-[1.7]
              max-w-[620px]
              mt-4
            "
          >
            Explore our{" "}
            <strong className="text-white">
              landscaping and garden development
            </strong>{" "}
            work across gardens, farms, plantations and green spaces.
          </p>
        </motion.div>
      </div>

      {/* GREEN LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[4px]
          bg-[#83b735]
        "
      />
    </section>
  );
};

export default ProjectsHero;