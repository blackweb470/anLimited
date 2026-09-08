import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/team_enhanced.jpg",
    titleLine1: "PROJECT EXECUTION",
    titleLine2: "WORKFORCE",
    caption: "Skilled Technical Manpower & Contracted Site Specialists",
    position: "object-center"
  },
  {
    image: "/images/foundation_enhanced.jpg",
    titleLine1: "PRECISION HEAVY",
    titleLine2: "FOUNDATIONS",
    caption: "Reinforced Concrete Footing & Structural Detailing",
    position: "object-center"
  },
  {
    image: "/images/pumping_enhanced.jpg",
    titleLine1: "CONCRETE PUMPING",
    titleLine2: "& SLAB CASTING",
    caption: "Advanced Structural Engineering & Field Execution",
    position: "object-center"
  },
  {
    image: "/images/formwork_enhanced.jpg",
    titleLine1: "SUBSTRUCTURE",
    titleLine2: "& FORMWORK",
    caption: "Turnkey Retaining Wall & Column Engineering",
    position: "object-center"
  }
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden bg-black text-white flex flex-col justify-end">
      
      {/* Background Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className={`w-full h-full object-cover ${slide.position || "object-center"} contrast-[1.08] brightness-[1.06] saturate-[1.08] transition-transform ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ transitionDuration: "6000ms" }}
            />
            {/* Lighter, crisp gradient overlay for vibrant image clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20 pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 flex flex-col justify-end">
        
        {/* Left Column: Main Headline + Thin Line */}
        <div className="max-w-3xl">

          {/* Bold Headline with Crisp Shadow */}
          <div className="space-y-1 mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.98] text-white">
              {SLIDES[currentSlide].titleLine1}
            </h1>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.98] text-white/95">
              {SLIDES[currentSlide].titleLine2}
            </h2>
          </div>

          {/* Thin Horizontal Line Divider */}
          <div className="pt-4 border-t border-white/40 max-w-xs drop-shadow-md">
            <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide uppercase">
              {SLIDES[currentSlide].caption}
            </p>
          </div>
        </div>

        {/* Bottom Navigation Dots & Prev/Next Arrows */}
        <div className="flex items-center gap-6 mt-8">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-[#2563eb]" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Right Floating Pill Button */}
        <div className="absolute bottom-12 right-6 sm:right-12 md:bottom-16 md:right-16 z-20">
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-3.5 p-1.5 pl-6 rounded-full border border-white/80 bg-white/90 hover:bg-white backdrop-blur-md text-[#14233c] font-bold text-xs md:text-sm uppercase tracking-wider transition-all group shadow-2xl hover:scale-105"
          >
            <span>Explore Our Projects</span>
            <span className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSlideshow;
