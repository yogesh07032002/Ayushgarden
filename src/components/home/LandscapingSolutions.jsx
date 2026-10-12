import React from "react";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

const LandscapingSolutions = () => {
  const cards = [
    {
      id: 1,
      title: "Residential Gardens",
      description:
        "Beautiful and functional gardens for homes, bungalows and residential properties.",
    },
    {
      id: 2,
      title: "Farmhouse Landscaping",
      description:
        "Natural and attractive landscaping solutions for farmhouse surroundings and agricultural properties.",
    },
    {
      id: 3,
      title: "Indoor Gardening",
      description:
        "Indoor plant arrangements for homes, offices, receptions and commercial spaces.",
    },
    {
      id: 4,
      title: "Outdoor Landscaping",
      description:
        "Complete outdoor landscaping with lawns, plants, trees, pathways and garden elements.",
    },
    {
      id: 5,
      title: "Large Plot Development",
      description:
        "Professional planning and development for large residential, commercial and agricultural plots.",
    },
    {
      id: 6,
      title: "Fruit Orchard Development",
      description:
        "Planned plantation of fruit trees with irrigation and maintenance systems.",
    },
  ];

  return (
    <section className="py-24 bg-[#2b2e30] text-white font-sans overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT SIDE: INTRO & BUTTON ================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#83b735] block mb-2">
              Landscaping Solutions
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 font-black text-white leading-tight mb-5">
              Landscaping <span className="text-[#83b735]">Solutions</span> for Every Space
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Every space has different requirements. We plan and develop
              landscapes according to the size, purpose, surroundings and
              maintenance needs of the property.
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#83b735] hover:bg-[#73a32c] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-200 shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* ================= RIGHT SIDE: RECTANGLE TEXT CARDS (NO IMAGES) ================= */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-6 sm:p-7 border-t-4 border-[#83b735] shadow-lg flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl min-h-[220px]"
                >
                  <div>
                    {/* Leaf Accent Icon */}
                    <div className="w-9 h-9 rounded-full bg-[#83b735]/10 flex items-center justify-center mb-4 text-[#83b735] group-hover:bg-[#83b735] group-hover:text-white transition-colors duration-300">
                      <FaLeaf className="text-sm" />
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2.5 group-hover:text-[#83b735] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandscapingSolutions;