import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTree, 
  FaLeaf, 
  FaDroplet, 
  FaClockRotateLeft 
} from 'react-icons/fa6';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: FaTree,
      title: "Professional Landscaping",
      desc: "Thoughtfully designed gardens and landscapes for beautiful outdoor spaces."
    },
    {
      id: 2,
      icon: FaLeaf,
      title: "Eco-Friendly Solutions",
      desc: "Sustainable gardening and plantation solutions designed with nature in mind."
    },
    {
      id: 3,
      icon: FaDroplet,
      title: "Smart Irrigation & Automation",
      desc: "Efficient water and fertilizer management with smart automation systems.",
      
    },
    {
      id: 4,
      icon: FaClockRotateLeft,
      title: "Year-Round Maintenance",
      desc: "Reliable garden and farm maintenance to keep your greenery healthy all year."
    }
  ];

  // स्क्रोल केल्यावर एकापाठोपाठ ॲनिमेशन सुरू होण्यासाठी Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {features.map((item) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center text-center cursor-pointer p-2"
              >
                {/* Dashed Circle Icon Box */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-6 sm:mb-8">
                  
                  {/* इमेजसारखी फिरणारी Dashed Border */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#78b743] group-hover:border-[#5d9430] group-hover:rotate-45 transition-transform duration-700 ease-in-out" />
                  
                  {/* मधोमध Icon */}
                  <div className="text-3xl sm:text-4xl text-[#78b743] group-hover:scale-110 group-hover:text-[#5d9430] transition-all duration-300">
                    <IconComp />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-3 transition-colors duration-200 ${
                    item.highlight
                      ? 'text-[#78b743] group-hover:text-[#5d9430]'
                      : 'text-gray-900 group-hover:text-[#78b743]'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-gray-600 font-normal leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;