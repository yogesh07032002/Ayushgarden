import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaEnvelope,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactNumber = "919422539215";
  const displayContact = "+91 94225 39215";

  const whatsappNumber = "919527921515";
  const displayWhatsApp = "+91 95279 21515";

  const email = "ayushlandscaping2026@gmail.com";

  const whatsappMessage =
    "Hello Aayush Natural Landscaping, I would like to know more about your landscaping, garden and farm development services.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Garden Maintenance",
      path: "/maintenance",
    },
    {
      name: "Our Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-[1000]">
        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="hidden h-[42px] bg-[#202522] text-white lg:block">
          <div
            className="
              mx-auto
              flex
              h-full
              max-w-[1400px]
              items-center
              justify-between
              px-6
              xl:px-10
            "
          >
            {/* LEFT */}

            <div className="flex items-center gap-6">
              <a
                href={`tel:+${contactNumber}`}
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  text-white/75
                  transition-colors
                  duration-300
                  hover:text-[#9ccc50]
                "
              >
                <FaPhoneAlt className="text-[10px] text-[#9ccc50]" />
                {displayContact}
              </a>

              <span className="h-4 w-px bg-white/15" />

              <a
                href={`mailto:${email}`}
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  text-white/75
                  transition-colors
                  duration-300
                  hover:text-[#9ccc50]
                "
              >
                <FaEnvelope className="text-[11px] text-[#9ccc50]" />
                {email}
              </a>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#83b735]" />

              <p className="text-[11px] font-semibold tracking-[0.04em] text-white/65">
                Landscaping • Garden Development • Farm Automation
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}

        <motion.div
          initial={false}
          animate={{
            boxShadow: isScrolled
              ? "0 10px 35px rgba(20, 35, 23, 0.10)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            left-0
            right-0
            top-0
            bg-white
            lg:sticky
            lg:top-0
          "
        >
          <div
            className="
              mx-auto
              flex
              h-[76px]
              max-w-[1400px]
              items-center
              justify-between
              px-5
              sm:h-[80px]
              sm:px-7
              lg:h-[86px]
              lg:px-8
              xl:px-10
            "
          >
            {/* =====================================================
                LOGO
            ===================================================== */}

            <Link
              to="/"
              onClick={closeMenu}
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
              "
              aria-label="Aayush Natural Landscaping Home"
            >
              <div
                className="
                  relative
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white
                  sm:h-[60px]
                  sm:w-[60px]
                  lg:h-[64px]
                  lg:w-[64px]
                "
              >
                <img
                  src="/logo.jpeg"
                  alt="Aayush Natural Landscaping"
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* OPTIONAL BRAND TEXT - DESKTOP */}

              <div className="hidden 2xl:block">
                <span
                  className="
                    block
                    text-[15px]
                    font-black
                    leading-tight
                    tracking-[-0.02em]
                    text-[#253126]
                  "
                >
                  Aayush Natural
                </span>

                <span
                  className="
                    block
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#83b735]
                  "
                >
                  Landscaping
                </span>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav
              className="
                hidden
                items-center
                gap-6
                xl:flex
                2xl:gap-7
              "
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `
                      group
                      relative
                      py-3
                      text-[14px]
                      font-bold
                      transition-colors
                      duration-300
                      2xl:text-[15px]
                      ${
                        isActive
                          ? "text-[#67952f]"
                          : "text-[#343b36] hover:text-[#67952f]"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`
                          absolute
                          bottom-[4px]
                          left-0
                          h-[2px]
                          bg-[#83b735]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* =====================================================
                DESKTOP CTA
            ===================================================== */}

            <div className="hidden items-center gap-2 xl:flex">
              {/* CALL */}

              <a
                href={`tel:+${contactNumber}`}
                aria-label={`Call Aayush Natural Landscaping at ${displayContact}`}
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[10px]
                  border
                  border-[#dce3d8]
                  bg-white
                  px-4
                  text-[13px]
                  font-bold
                  text-[#253126]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#83b735]
                  hover:text-[#67952f]
                "
              >
                <FaPhoneAlt className="text-[11px] text-[#83b735]" />
                Call Us
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Aayush Natural Landscaping on WhatsApp"
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[10px]
                  bg-[#253126]
                  px-4
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#83b735]
                "
              >
                <FaWhatsapp className="text-[17px] text-[#9ccc50] transition-colors duration-300 group-hover:text-white" />

                WhatsApp
              </a>
            </div>

            {/* =====================================================
                TABLET / MOBILE ACTIONS
            ===================================================== */}

            <div className="flex items-center gap-2 xl:hidden">
              {/* WHATSAPP */}

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Aayush Natural Landscaping"
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf4e5]
                  text-[#67952f]
                  transition-all
                  duration-300
                  hover:bg-[#83b735]
                  hover:text-white
                "
              >
                <FaWhatsapp className="text-[18px]" />
              </a>

              {/* MENU */}

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#253126]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#83b735]
                "
              >
                <FaBars className="text-[16px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* MOBILE FIXED HEADER SPACER */}

      <div className="h-[76px] sm:h-[80px] lg:hidden" />

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* OVERLAY */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMenu}
              className="
                fixed
                inset-0
                z-[1100]
                bg-[#111813]/65
                backdrop-blur-[3px]
                xl:hidden
              "
            />

            {/* DRAWER */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                bottom-0
                right-0
                top-0
                z-[1200]
                flex
                w-[90%]
                max-w-[430px]
                flex-col
                overflow-y-auto
                bg-[#faf7f2]
                xl:hidden
              "
            >
              {/* =================================================
                  DRAWER HEADER
              ================================================= */}

              <div
                className="
                  flex
                  min-h-[82px]
                  items-center
                  justify-between
                  border-b
                  border-[#dfe4da]
                  px-5
                  sm:px-6
                "
              >
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/logo.jpeg"
                    alt="Aayush Natural Landscaping"
                    className="
                      h-[54px]
                      w-[54px]
                      rounded-full
                      object-contain
                    "
                  />

                  <div>
                    <span
                      className="
                        block
                        text-[14px]
                        font-black
                        leading-[1.2]
                        text-[#253126]
                      "
                    >
                      Aayush Natural
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#83b735]
                      "
                    >
                      Landscaping
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d9e0d5]
                    bg-white
                    text-[#253126]
                    transition-all
                    duration-300
                    hover:border-[#83b735]
                    hover:bg-[#83b735]
                    hover:text-white
                  "
                >
                  <FaTimes className="text-[15px]" />
                </button>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <nav
                className="
                  flex-1
                  px-5
                  py-7
                  sm:px-6
                "
                aria-label="Mobile Navigation"
              >
                <div className="mb-4">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#83b735]
                    "
                  >
                    Navigation
                  </span>
                </div>

                <div className="border-t border-[#dde3d9]">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `
                          group
                          grid
                          grid-cols-[35px_1fr_auto]
                          items-center
                          gap-3
                          border-b
                          border-[#dde3d9]
                          py-[17px]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-[#67952f]"
                              : "text-[#2d352f]"
                          }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`
                              text-[10px]
                              font-bold
                              tracking-[0.1em]
                              ${
                                isActive
                                  ? "text-[#83b735]"
                                  : "text-[#a2aaa3]"
                              }
                            `}
                          >
                            0{index + 1}
                          </span>

                          <span className="text-[17px] font-extrabold sm:text-[18px]">
                            {link.name}
                          </span>

                          <span
                            className={`
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "bg-[#83b735] text-white"
                                  : "bg-[#edf2e9] text-[#7b847d]"
                              }
                            `}
                          >
                            <span className="text-[13px]">→</span>
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </nav>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <div
                className="
                  bg-[#253126]
                  px-5
                  py-6
                  sm:px-6
                "
              >
                <div className="mb-5">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#9ccc50]
                    "
                  >
                    Start Your Green Project
                  </span>

                  <p
                    className="
                      mt-2
                      max-w-[320px]
                      text-[16px]
                      font-bold
                      leading-[1.45]
                      text-white
                    "
                  >
                    Garden, landscape, farm or plantation — let's discuss your
                    space.
                  </p>
                </div>

                {/* CTA BUTTONS */}

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:+${contactNumber}`}
                    className="
                      flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-2
                      rounded-[9px]
                      bg-white
                      px-3
                      text-[12px]
                      font-bold
                      text-[#253126]
                    "
                  >
                    <FaPhoneAlt className="text-[11px] text-[#83b735]" />
                    Call Us
                  </a>

                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-2
                      rounded-[9px]
                      bg-[#83b735]
                      px-3
                      text-[12px]
                      font-bold
                      text-white
                    "
                  >
                    <FaWhatsapp className="text-[16px]" />
                    WhatsApp
                  </a>
                </div>

                {/* CONTACT INFO */}

                <div
                  className="
                    mt-5
                    space-y-2
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <a
                    href={`tel:+${contactNumber}`}
                    className="
                      flex
                      items-center
                      gap-3
                      text-[12px]
                      font-medium
                      text-white/65
                      transition-colors
                      hover:text-white
                    "
                  >
                    <FaPhoneAlt className="text-[10px] text-[#9ccc50]" />
                    {displayContact}
                  </a>

                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-3
                      text-[12px]
                      font-medium
                      text-white/65
                      transition-colors
                      hover:text-white
                    "
                  >
                    <FaWhatsapp className="text-[13px] text-[#9ccc50]" />
                    {displayWhatsApp}
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="
                      flex
                      items-center
                      gap-3
                      break-all
                      text-[12px]
                      font-medium
                      text-white/65
                      transition-colors
                      hover:text-white
                    "
                  >
                    <FaEnvelope className="shrink-0 text-[11px] text-[#9ccc50]" />
                    {email}
                  </a>
                </div>

                {/* BRAND */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    border-t
                    border-white/10
                    pt-4
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#83b735]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-white/40
                    "
                  >
                    Aayush Natural Landscaping
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;