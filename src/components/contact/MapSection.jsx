import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="max-w-full mx-auto">
        
        {/* कमी उंची असलेला मॅप कंटेनर */}
        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden shadow-sm border border-stone-200 bg-stone-200">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60563.88219502941!2d74.10174244243603!3d18.48398007623192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e0f40d125447%3A0x868c227cf781a942!2sUruli%20Kanchan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default MapSection;