import React, { useState, useRef, useCallback } from "react";
import { FaLeaf, FaArrowsAltH } from "react-icons/fa";

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-14 bg-white font-sans overflow-hidden" id="transformation">
      
      {/* ================= COMPACT HEADER ================= */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#83b735] mb-2">
          <FaLeaf className="text-xs" />
          <span>Before &amp; After</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 leading-tight">
          From Unused Space to a{" "}
          <span className="text-[#83b735]">Beautiful Landscape</span>
        </h2>

        <p className="mt-2 text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          See how proper planning, plantation and maintenance can transform an
          ordinary space into a beautiful green environment.
        </p>
      </div>

      {/* ================= 100% FULL-WIDTH COMPACT SLIDER ================= */}
      <div className="w-full relative select-none">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[360px] sm:h-[400px] md:h-[440px] overflow-hidden cursor-ew-resize border-y border-neutral-200 bg-neutral-900"
        >
          {/* 1. AFTER IMAGE (Bottom Layer - Lush Green Garden) */}
          <img
            src="after.png"
            alt="After - Planned Landscape"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* After Tag */}
          <div className="absolute top-5 right-6 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20 shadow-lg pointer-events-none">
            After: Planned Landscape
          </div>

          {/* 2. BEFORE IMAGE (Top Clipped Layer - Raw Barren Space) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="before.png"
              alt="Before - Empty / Unplanned Space"
              className="absolute inset-0 w-screen h-full object-cover max-w-none"
            />

            {/* Before Tag */}
            <div className="absolute top-5 left-6 z-10 bg-[#83b735] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg pointer-events-none">
              Before: Empty / Unplanned Space
            </div>
          </div>

          {/* 3. DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* White Divider Line */}
            <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] -translate-x-1/2" />

            {/* Draggable Circle Handle */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#83b735] text-white border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
              <FaArrowsAltH className="text-xs" />
            </div>
          </div>
        </div>

        {/* Bottom Small Hint Indicator */}
        <div className="py-2.5 bg-[#fbfaf6] text-center border-b border-neutral-200/80">
          <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
            ⟵ Slide Left or Right to Reveal Transformation ⟶
          </span>
        </div>
      </div>

    </section>
  );
}