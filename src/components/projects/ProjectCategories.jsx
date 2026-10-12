import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaLeaf,
  FaTimes,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";

const ProjectCategories = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const rowOne = [
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1400&q=90",
  ];

  const rowTwo = [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=90",
  ];

  const allImages = [...rowOne, ...rowTwo];

  // Duplicate only for infinite marquee
  const firstTrack = [...rowOne, ...rowOne];
  const secondTrack = [...rowTwo, ...rowTwo];

  const openImage = (image) => {
    const index = allImages.indexOf(image);

    setSelectedImage({
      image,
      index: index >= 0 ? index : 0,
    });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showNext = (e) => {
    e?.stopPropagation();

    setSelectedImage((prev) => {
      if (!prev) return null;

      const nextIndex = (prev.index + 1) % allImages.length;

      return {
        image: allImages[nextIndex],
        index: nextIndex,
      };
    });
  };

  const showPrev = (e) => {
    e?.stopPropagation();

    setSelectedImage((prev) => {
      if (!prev) return null;

      const prevIndex =
        (prev.index - 1 + allImages.length) % allImages.length;

      return {
        image: allImages[prevIndex],
        index: prevIndex,
      };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="project-categories"
        className="
          relative
          bg-[#faf7f2]
          py-12
          sm:py-14
          lg:py-16
          overflow-hidden
        "
        aria-labelledby="project-gallery-heading"
      >
        {/* DECORATIVE CIRCLE */}
        <div
          className="
            absolute
            -right-[120px]
            -top-[120px]
            w-[330px]
            h-[330px]
            rounded-full
            border-[65px]
            border-[#83b735]/[0.06]
            pointer-events-none
          "
        />

        {/* HEADER */}
        <div
          className="
            max-w-[1360px]
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            relative
            z-10
            mb-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-5
              lg:gap-10
              items-end
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#83b735]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaLeaf className="text-xs" />
                </span>

                <span
                  className="
                    text-[#6e9d31]
                    text-xs
                    sm:text-[13px]
                    uppercase
                    tracking-[0.14em]
                    font-black
                  "
                >
                  Project Gallery
                </span>
              </div>

              <h2
                id="project-gallery-heading"
                className="
                  text-[#202522]
                  text-[34px]
                  sm:text-[42px]
                  lg:text-[48px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                "
              >
                A Glimpse of
                  Green Spaces.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                lg:col-span-5
                text-neutral-500
                text-sm
                sm:text-base
                leading-[1.7]

                [&_strong]:text-neutral-800
                [&_strong]:font-semibold
              "
            >
              Explore visual references for{" "}
              <strong>garden development, landscaping, farms and plantations</strong>{" "}
              that represent the types of green spaces we work with.
            </motion.p>
          </div>
        </div>

        {/* ================= PHOTO GALLERY ================= */}

        <div className="relative z-10">
          {/* SIDE FADES */}
          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-[45px]
              sm:w-[100px]
              z-20
              pointer-events-none
              bg-gradient-to-r
              from-[#faf7f2]
              to-transparent
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-[45px]
              sm:w-[100px]
              z-20
              pointer-events-none
              bg-gradient-to-l
              from-[#faf7f2]
              to-transparent
            "
          />

          {/* ROW 1 */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-3 sm:gap-4 w-max"
            >
              {firstTrack.map((image, index) => (
                <GalleryImage
                  key={`row1-${index}`}
                  image={image}
                  index={index}
                  row={1}
                  onClick={() => openImage(image)}
                />
              ))}
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden mt-3 sm:mt-4">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-3 sm:gap-4 w-max"
            >
              {secondTrack.map((image, index) => (
                <GalleryImage
                  key={`row2-${index}`}
                  image={image}
                  index={index}
                  row={2}
                  onClick={() => openImage(image)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            max-w-[1360px]
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            mt-7
          "
        >
          <div
            className="
              border-t
              border-neutral-200
              pt-5
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-3
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                sm:gap-3
                text-neutral-500
                text-xs
                sm:text-sm
                font-semibold
              "
            >
              <span>Garden</span>
              <span className="text-[#83b735]">•</span>
              <span>Landscape</span>
              <span className="text-[#83b735]">•</span>
              <span>Farm</span>
              <span className="text-[#83b735]">•</span>
              <span>Plantation</span>
            </div>

            <span
              className="
                text-[#6e9d31]
                text-xs
                sm:text-[13px]
                font-black
              "
            >
              Click any image to view
            </span>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeImage}
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              sm:p-8
              lg:p-12
            "
          >
            {/* CLOSE */}
            <motion.button
              type="button"
              aria-label="Close project image"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 90, scale: 1.08 }}
              onClick={closeImage}
              className="
                absolute
                top-5
                right-5
                sm:top-8
                sm:right-8
                z-30
                w-11
                h-11
                rounded-full
                bg-white
                text-neutral-900
                flex
                items-center
                justify-center
              "
            >
              <FaTimes className="text-sm" />
            </motion.button>

            {/* COUNTER */}
            <span
              className="
                absolute
                top-7
                left-5
                sm:top-10
                sm:left-8
                z-30
                text-white/60
                text-xs
                font-bold
                tracking-[0.15em]
              "
            >
              {String(selectedImage.index + 1).padStart(2, "0")}
              {" / "}
              {String(allImages.length).padStart(2, "0")}
            </span>

            {/* PREVIOUS */}
            <motion.button
              type="button"
              aria-label="Previous project image"
              whileHover={{ scale: 1.08, x: -3 }}
              whileTap={{ scale: 0.92 }}
              onClick={showPrev}
              className="
                absolute
                left-3
                sm:left-7
                top-1/2
                -translate-y-1/2
                z-30
                w-11
                h-11
                sm:w-14
                sm:h-14
                rounded-full
                bg-white/10
                hover:bg-[#83b735]
                border
                border-white/15
                text-white
                flex
                items-center
                justify-center
                backdrop-blur-md
                transition-colors
              "
            >
              <FaChevronLeft className="text-xs" />
            </motion.button>

            {/* IMAGE */}
            <motion.div
              key={selectedImage.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-w-[1200px]
                max-h-[85vh]
                w-full
                flex
                items-center
                justify-center
              "
            >
              <img
                src={selectedImage.image}
                alt="Landscaping and green space gallery reference"
                className="
                  max-w-full
                  max-h-[82vh]
                  object-contain
                  shadow-2xl
                "
              />
            </motion.div>

            {/* NEXT */}
            <motion.button
              type="button"
              aria-label="Next project image"
              whileHover={{ scale: 1.08, x: 3 }}
              whileTap={{ scale: 0.92 }}
              onClick={showNext}
              className="
                absolute
                right-3
                sm:right-7
                top-1/2
                -translate-y-1/2
                z-30
                w-11
                h-11
                sm:w-14
                sm:h-14
                rounded-full
                bg-white/10
                hover:bg-[#83b735]
                border
                border-white/15
                text-white
                flex
                items-center
                justify-center
                backdrop-blur-md
                transition-colors
              "
            >
              <FaChevronRight className="text-xs" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* =====================================================
   GALLERY IMAGE
===================================================== */

const GalleryImage = ({ image, index, row, onClick }) => {
  const widths =
    row === 1
      ? [
          "w-[245px] sm:w-[360px]",
          "w-[190px] sm:w-[270px]",
          "w-[285px] sm:w-[420px]",
          "w-[210px] sm:w-[310px]",
        ]
      : [
          "w-[285px] sm:w-[410px]",
          "w-[210px] sm:w-[290px]",
          "w-[260px] sm:w-[370px]",
          "w-[190px] sm:w-[280px]",
        ];

  return (
    <motion.button
      type="button"
      aria-label="Open gallery image"
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${widths[index % widths.length]}
        shrink-0
        h-[185px]
        sm:h-[235px]
        lg:h-[255px]
        overflow-hidden
        relative
        group
        cursor-pointer
        bg-neutral-200
        rounded-[18px]
      `}
    >
      <motion.img
        src={image}
        alt="Garden, landscape, farm or plantation gallery reference"
        loading="lazy"
        decoding="async"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.65 }}
        className="
          w-full
          h-full
          object-cover
        "
      />

      {/* SOFT OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent
          opacity-50
          group-hover:opacity-80
          transition-opacity
          duration-500
        "
      />

      {/* EXPAND */}
      <div
        className="
          absolute
          right-4
          bottom-4
          opacity-0
          translate-y-2
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-300
        "
      >
        <span
          className="
            w-10
            h-10
            rounded-full
            bg-white
            text-[#83b735]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <FaExpand className="text-xs" />
        </span>
      </div>
    </motion.button>
  );
};

export default ProjectCategories;