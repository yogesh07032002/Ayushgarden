import React from "react";
import {
  FaLeaf,
  FaTree,
  FaSeedling,
  FaTractor,
  FaAppleAlt,
  FaTint,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Landscape Design & Development",
      description:
        "Create a beautiful and functional outdoor space with professional landscape planning, plantation, lawn development and garden design.",
      image:
        "https://i.pinimg.com/736x/bf/7d/f9/bf7df903604f532c7c8b0e2293d1ec8f.jpg",
      icon: <FaTree className="text-white text-xl" />,
      link: "#landscape-design",
    },
    {
      id: 2,
      title: "Garden Development",
      description:
        "Complete garden development including soil preparation, plant selection, plantation, lawn development and finishing.",
      image:
        "https://i.pinimg.com/1200x/3d/88/90/3d88905030e6265827e6efa9f451443f.jpg",
      icon: <FaSeedling className="text-white text-xl" />,
      link: "#garden-development",
    },
    {
      id: 3,
      title: "Farm & Plot Development",
      description:
        "Transform large agricultural and open plots into properly planned green spaces with plantation, landscaping and automated irrigation solutions.",
      image:
        "https://i.pinimg.com/736x/a4/58/96/a45896feabd36a6d0846b5748548de09.jpg",
      icon: <FaTractor className="text-white text-xl" />,
      link: "#farm-plot",
    },
    {
      id: 4,
      title: "Fruit Plantation",
      description:
        "Planned fruit tree plantation for agricultural plots and orchards with proper spacing, irrigation planning and long-term maintenance support.",
      image:
        "https://i.pinimg.com/736x/af/7e/5c/af7e5c912c9e7ee8a0491d08ad306072.jpg",
      icon: <FaAppleAlt className="text-white text-xl" />,
      link: "#fruit-plantation",
    },
    {
      id: 5,
      title: "Irrigation & Agricultural Automation",
      description:
        "Smart irrigation and fertilizer management systems designed to reduce manual effort and improve water and nutrient management.",
      image:
        "https://i.pinimg.com/736x/0d/1a/c6/0d1ac68d0bbb0d0fcec1038e7bf7f8f5.jpg",
      icon: <FaTint className="text-white text-xl" />,
      link: "#automation",
    },
    {
      id: 6,
      title: "Garden & Farm Maintenance",
      description:
        "Regular maintenance packages for gardens, lawns, plantations and farm plots to keep your green spaces healthy and well-maintained throughout the year.",
      image:
        "https://i.pinimg.com/736x/7b/eb/8f/7beb8faae08e708faeda415a3893eff3.jpg",
      icon: <FaTools className="text-white text-xl" />,
      link: "#maintenance",
    },
  ];

  return (
    <section className="py-20 bg-[#faf7f2] font-sans" id="services">
      {/* Width कमी केली आहे: max-w-6xl */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#83b735] mb-2">
            <span>Natureplant Services</span>
            <FaLeaf className="text-sm" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight mb-4">
            Complete Landscaping &amp; Green Solutions
          </h2>

          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
            From small gardens to large agricultural plots, we provide solutions
            designed around your space and requirements.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col pt-0"
            >
              {/* Image Container: overflow-hidden फक्त इमेजला लावले आहे जेणेकरून सर्कल कट होणार नाही */}
              <div className="h-56 w-full overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Centered Floating Circle Badge: z-20 आणि absolute position सह पूर्ण गोल दिसेल */}
              <div className="absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-14 h-14 bg-[#83b735] border-4 border-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#73a32c] group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content Box */}
              <div className="pt-10 pb-7 px-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#83b735] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-1">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-neutral-800 hover:text-[#83b735] transition-colors"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;