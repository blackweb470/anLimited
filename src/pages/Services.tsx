import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import heroConstruction from "@/assets/hero-construction.jpg";
import projectTower from "@/assets/project-tower.jpg";
import projectFabrication from "@/assets/project-fabrication.jpg";
import projectRoad from "@/assets/project-road-real.webp";

const SERVICES_CARDS = [
  {
    id: 1,
    title: "Architectural Drawing",
    image: "/projects/private-villa.jpg",
    description: "Complete 2D/3D architectural CAD drawings, floor plans, building elevation blueprints, spatial planning, and BIM modeling."
  },
  {
    id: 2,
    title: "Structural Engineering",
    image: projectTower,
    description: "Advanced structural load calculations, reinforced concrete design, steel framework detailing, and foundation engineering."
  },
  {
    id: 3,
    title: "Electrical Engineering",
    image: "/projects/eko-health.jpg",
    description: "Comprehensive electrical schematics, power distribution layouts, indoor/outdoor lighting blueprints, and backup wiring."
  },
  {
    id: 4,
    title: "Mechanical (MEP)",
    image: projectFabrication,
    description: "Detailed HVAC ductwork schematics, plumbing system layouts, fire protection drafting, and equipment placement drawings."
  },
  {
    id: 5,
    title: "Civil Engineers",
    image: "/blueprint-engineer.jpg",
    description: "Site development planning, highway infrastructure engineering, drainage networks, earthworks, and heavy civil construction."
  },
  {
    id: 6,
    title: "Steel Fabrication",
    image: heroConstruction,
    description: "Precision structural steel fabrication, industrial component assembly, welding solutions, and site installation."
  },
  {
    id: 7,
    title: "Precision Machining",
    image: projectRoad,
    description: "Custom precision machining solutions for industrial metal parts, prototypes, milling, turning, and equipment refurbishment."
  }
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Services & Divisions | Akhatasebhudo Nigeria Limited" 
        description="Turnkey Architectural Drawing, Structural Engineering, Electrical Drafting, Mechanical MEP, and Civil Construction across Nigeria."
      />
      
      {/* MAIN SERVICES SECTION WITH DARK ARCHITECTURAL BACKGROUND & GOLD ACCENT BAND */}
      <section className="relative w-full py-24 md:py-32 bg-[#1c1c1c] text-white flex flex-col items-center justify-center overflow-hidden font-sans">
        
        {/* Background Grayscale Architectural Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src={heroConstruction} 
            alt="Architectural structure background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Horizontal Gold / Yellow Accent Band Behind Cards */}
        <div className="absolute top-[48%] -translate-y-1/2 inset-x-0 h-44 sm:h-52 bg-[#d99b00] opacity-90 pointer-events-none z-0 hidden sm:block" />

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white mb-4">
              THE AKHATASEBHUDO CAPABILITIES
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto">
              End-to-End Solutions from Architectural & Structural Engineering Drawings to Infrastructure Development & Fabrication.
            </p>
          </div>

          {/* 8 Cards Grid (4 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {SERVICES_CARDS.map((card) => (
              <div 
                key={card.id}
                className="bg-[#e9ecef] text-[#1f2937] rounded-none p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/40 group"
              >
                {/* Square Top Image Container */}
                <div className="w-full aspect-[4/3] rounded-none overflow-hidden mb-6 bg-gray-300 shadow-inner">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title */}
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#1f2937] tracking-tight mb-3">
                  {card.title}
                </h2>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal italic flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
