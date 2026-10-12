import React from "react";
import { 
  FaTractor, 
  FaUsers, 
  FaAward, 
  FaUserFriends 
} from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaTractor className="text-xl text-[#83b735]" />,
      value: "5,253",
      label: "Garden Complete",
    },
    {
      id: 2,
      icon: <FaUsers className="text-xl text-[#83b735]" />,
      value: "6,253",
      label: "Satisfied Clients",
    },
    {
      id: 3,
      icon: <FaAward className="text-xl text-[#83b735]" />,
      value: "7,253",
      label: "National Award",
    },
    {
      id: 4,
      icon: <FaUserFriends className="text-xl text-[#83b735]" />,
      value: "6,253",
      label: "Team Members",
    },
  ];

  return (
    <section className="relative py-16 bg-neutral-900 font-sans overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/31/7a/ff/317affe929dca8d2bfe1a967b1f94b5c.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Stats Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Dotted Border Circle Icon */}
              <div className="w-16 h-16 rounded-full border border-dashed border-[#83b735]/60 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide mb-1">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-xs sm:text-sm font-medium text-neutral-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;