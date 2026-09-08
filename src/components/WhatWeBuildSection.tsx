import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DIVISIONS = [
  {
    number: "01.",
    title: "Architectural Drawing & Design",
    description: "Complete 2D/3D architectural floor plans, building elevation drawings, spatial planning, BIM modeling, and master development blueprints."
  },
  {
    number: "02.",
    title: "Structural Engineering & Detailing",
    description: "Comprehensive structural load calculations, reinforced concrete design drawings, steel framework detailing, foundation plans, and load analysis."
  },
  {
    number: "03.",
    title: "Electrical Engineering Drafting",
    description: "Full electrical schematics, power distribution layouts, indoor/outdoor lighting blueprints, single-line diagrams, and emergency power wiring."
  },
  {
    number: "04.",
    title: "Mechanical (MEP) Drawing & Design",
    description: "Detailed HVAC ductwork schematics, plumbing system layouts, fire protection drafting, mechanical piping, and equipment placement drawings."
  },
  {
    number: "05.",
    title: "Civil & Infrastructure Works",
    description: "Site development plans, highway infrastructure drawings, drainage network engineering, earthworks, and heavy civil construction."
  }
];

export const WhatWeBuildSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = 360;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] text-[#14233c] py-20 md:py-28 relative overflow-hidden font-sans border-t border-gray-200">
      
      {/* 3D Orange Tower Crane Image on Right */}
      <div className="absolute top-0 right-0 h-full w-[200px] sm:w-[300px] md:w-[400px] lg:w-[460px] pointer-events-none z-10 hidden sm:flex items-center justify-end">
        <img 
          src="/tower-crane.jpg" 
          alt="3D Orange Tower Crane" 
          className="h-[90%] w-auto object-contain mix-blend-multiply opacity-95"
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-gray-400"></span>
            <span className="text-xs font-mono lowercase tracking-widest text-gray-500">
              our divisions
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#14233c] tracking-tight uppercase leading-[0.95]">
            WHAT WE BUILD
          </h2>
        </div>

        {/* Divisions Cards Slider / Carousel */}
        <div className="relative pr-0 lg:pr-[240px]">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DIVISIONS.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-[290px] sm:w-[330px] md:w-[360px] bg-white border border-gray-200/80 rounded-none p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow snap-start"
              >
                <div>
                  {/* Number Badge */}
                  <span className="inline-block text-xs font-mono text-gray-500 border border-gray-200 rounded-none px-2.5 py-1 font-semibold mb-6">
                    {item.number}
                  </span>

                  {/* Division Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#14233c] tracking-tight mb-4 min-h-[56px] leading-snug">
                    {item.title}
                  </h3>

                  {/* Division Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots & Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Previous division"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-[#14233c] hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 px-3">
                {DIVISIONS.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      dotIdx === activeIndex ? "bg-[#2563eb] w-4" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollRight}
                aria-label="Next division"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 text-[#14233c] hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeBuildSection;
