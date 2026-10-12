import React from "react";
import { FaLeaf } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    {
      id: "01",
      title: "Complete Green Solutions",
      description:
        "End-to-end service from design and plantation to automation and lifelong maintenance without multiple vendors.",
    },
    {
      id: "02",
      title: "Customized Planning",
      description:
        "Tailored landscape designs crafted specifically for your plot's soil, sun exposure, and space requirements.",
    },
    {
      id: "03",
      title: "Smart Irrigation & Automation",
      description:
        "Automated drip lines and smart sprinklers that save up to 40% water and eliminate daily manual effort.",
    },
    {
      id: "04",
      title: "Large Plot & Farm Expertise",
      description:
        "Specialized land leveling, boundary forestry, and fruit plantations for large farmhouses and agricultural plots.",
    },
    {
      id: "05",
      title: "Professional Annual Maintenance",
      description:
        "Scheduled mowing, organic nutrition, hedge trimming, and pest control to keep spaces lush year-round.",
    },
    {
      id: "06",
      title: "Local Experience in Pune",
      description:
        "Uruli Kanchan-based team with expert knowledge of Pune's soil, climate, and high-survival native plants.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
      `}</style>

      <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden" id="why-choose-us">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* ================= डावी बाजू: सिस्टिमॅटिक २-कॉलम लिस्ट ================= */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Tagline */}
              <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-lime-500 mb-3">
                <FaLeaf className="text-sm" />
                <span>Key Advantages</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight mb-10">
                Why Choose <span className="text-lime-500">Aayush </span>Landscaping?
              </h2>

              {/* 2-Columns Horizontally Aligned Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
                {points.map((item) => (
                  <div 
                    key={item.id} 
                    className="group flex flex-col border-l-2 border-neutral-200 pl-5 hover:border-lime-500 transition-colors duration-300"
                  >
                    {/* Number & Title */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-sm sm:text-base font-mono font-bold text-lime-500 tracking-wider">
                        {item.id}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-lime-500 transition-colors duration-200 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* ================= उजवी बाजू: SINGLE LIQUID MORPHING IMAGE ================= */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[450px] lg:h-[450px] animate-morph overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Main Image */}
                <img
                  src="https://i.pinimg.com/1200x/52/f5/30/52f53002b5088e863e96430b8b61f9e8.jpg"
                  alt="Aayush Landscaping and Garden Work"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Glass Shine Diagonal Reflection Layer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none z-10" />

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;