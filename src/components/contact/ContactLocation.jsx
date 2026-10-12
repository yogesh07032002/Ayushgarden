import {
  FaArrowRight,
  FaLeaf,
  FaMapMarkerAlt,
  FaRoute,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const ContactLocation = () => {
  const address =
    "Pune-Solapur Highway, Behind Super Battery, Uruli Kanchan, Tal. Haveli, Dist. Pune, Maharashtra";

  const mapQuery = encodeURIComponent(address);

  const directionsURL = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const mapEmbedURL = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

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
      aria-labelledby="contact-location-heading"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[130px]
          -top-[130px]
          h-[330px]
          w-[330px]
          rounded-full
          border
          border-dashed
          border-[#83b735]/15
        "
      />

      <FaLeaf
        className="
          pointer-events-none
          absolute
          -bottom-[50px]
          -left-[30px]
          hidden
          text-[200px]
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
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-8
            grid
            gap-5
            lg:mb-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
                Our Location
              </span>
            </div>

            <h2
              id="contact-location-heading"
              className="
                max-w-[590px]
                text-[34px]
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-[#253126]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Visit Aayush Natural{" "}
              <span className="text-[#83b735]">
                Landscaping.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              max-w-[650px]
              text-[15px]
              leading-[1.8]
              text-[#687169]
              sm:text-[16px]
              lg:justify-self-end
            "
          >
            We are located at{" "}
            <strong className="font-semibold text-[#253126]">
              Uruli Kanchan, Pune-Solapur Highway
            </strong>
            . Contact us for landscaping, garden development, plantation,
            farm development and maintenance requirements.
          </motion.p>
        </div>

        {/* ================= LOCATION + MAP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            overflow-hidden
            rounded-[20px]
            border
            border-[#e1e6dd]
            bg-white
            shadow-[0_18px_50px_rgba(37,49,38,0.07)]
            lg:grid-cols-12
          "
        >
          {/* =================================================
              ADDRESS PANEL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-[#253126]
              p-7
              sm:p-9
              lg:col-span-4
              lg:p-10
            "
          >
            {/* DECORATIVE CIRCLE */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[260px]
                w-[260px]
                rounded-full
                border
                border-dashed
                border-white/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[100px]
                -left-[100px]
                h-[230px]
                w-[230px]
                rounded-full
                bg-[#83b735]/10
              "
            />

            <div className="relative z-10">
              {/* ICON */}

              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="
                  mb-7
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-[#83b735]
                  text-white
                  shadow-[0_12px_30px_rgba(131,183,53,0.18)]
                "
              >
                <FaMapMarkerAlt className="text-[22px]" />
              </motion.div>

              {/* LABEL */}

              <span
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#9ccc50]
                "
              >
                Aayush Natural Landscaping
              </span>

              {/* TITLE */}

              <h3
                className="
                  mt-3
                  text-[25px]
                  font-black
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[28px]
                "
              >
                Uruli Kanchan,
                <br />
                Pune
              </h3>

              {/* ADDRESS */}

              <address
                className="
                  mt-5
                  max-w-[330px]
                  text-[15px]
                  not-italic
                  leading-[1.8]
                  text-white/65
                  sm:text-[16px]
                "
              >
                Pune-Solapur Highway,
                <br />
                Behind Super Battery,
                <br />
                Uruli Kanchan,
                <br />
                Tal. Haveli, Dist. Pune,
                <br />
                Maharashtra
              </address>

              {/* DIVIDER */}

              <div className="my-7 h-px w-full bg-white/10" />

              {/* SMALL INFO */}

              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-1
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#83b735]
                  "
                />

                <p
                  className="
                    max-w-[290px]
                    text-[13px]
                    leading-[1.7]
                    text-white/55
                    sm:text-[14px]
                  "
                >
                  Conveniently located near Pune-Solapur Highway for project
                  discussions and landscaping enquiries.
                </p>
              </div>

              {/* DIRECTIONS BUTTON */}

              <a
                href={directionsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-7
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-white
                  px-5
                  text-[14px]
                  font-bold
                  text-[#253126]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#83b735]
                  hover:text-white
                "
              >
                <FaRoute
                  className="
                    text-[15px]
                    text-[#83b735]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />

                Get Directions

                <FaArrowRight
                  className="
                    text-[10px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>

          {/* =================================================
              GOOGLE MAP
          ================================================= */}

          <div
            className="
              relative
              min-h-[350px]
              overflow-hidden
              sm:min-h-[400px]
              lg:col-span-8
              lg:min-h-[460px]
            "
          >
            <iframe
              src={mapEmbedURL}
              title="Aayush Natural Landscaping location in Uruli Kanchan Pune"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
            />

            {/* MAP LABEL */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-center
                gap-3
                rounded-[12px]
                border
                border-white/60
                bg-white/95
                px-4
                py-3
                shadow-lg
                backdrop-blur-md
                sm:left-6
                sm:right-auto
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf4e5]
                  text-[#6f9f36]
                "
              >
                <FaMapMarkerAlt className="text-[13px]" />
              </div>

              <div>
                <p
                  className="
                    text-[13px]
                    font-black
                    text-[#253126]
                    sm:text-[14px]
                  "
                >
                  Aayush Natural Landscaping
                </p>

                <p
                  className="
                    mt-0.5
                    text-[11px]
                    font-medium
                    text-[#737b74]
                    sm:text-[12px]
                  "
                >
                  Uruli Kanchan • Pune
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocation;