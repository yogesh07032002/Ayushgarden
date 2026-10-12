import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({
  firstText,
  highlightText,
  className = "",
  center = false,
}) => {
  const words = firstText.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const word = {
    hidden: {
      opacity: 0,
      y: 35,
      rotateX: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`
        text-3xl sm:text-4xl lg:text-[44px]
        font-extrabold text-neutral-900 leading-[1.15]
        ${center ? "text-center" : ""}
        ${className}
      `}
    >
      {/* Normal Words */}
      {words.map((item, index) => (
        <motion.span
          key={index}
          variants={word}
          className="inline-block mr-[0.25em]"
        >
          {item}
        </motion.span>
      ))}

      {/* Highlighted Text */}
      {highlightText && (
        <motion.span
          variants={word}
          className="relative inline-block text-[#83b735]"
        >
          {highlightText}

          {/* Animated Underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#83b735]/25 rounded-full"
          />
        </motion.span>
      )}
    </motion.h2>
  );
};

export default AnimatedHeading;