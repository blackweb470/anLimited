import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const RECENT_PROJECTS = [
  {
    id: 1,
    title: "River Park Cluster 3 (20 Units 5-Bed Duplexes)",
    image: "/images/river_park_cluster3.jpg",
    link: "/projects/river-park-cluster-3"
  },
  {
    id: 2,
    title: "Lugbe River Park Duplex Estate (12 Units)",
    image: "/images/NOOP8356.JPG",
    link: "/projects/lugbe-river-park"
  },
  {
    id: 3,
    title: "Aso Drive 1 Townhouse & 3 Terraces",
    image: "/images/VCTJ4118.JPG",
    link: "/projects/aso-drive-terraces"
  }
];

export const FeaturedProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#171717] text-white py-20 md:py-28 font-sans overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-row items-center gap-6 sm:gap-10 mb-12 md:mb-16">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-6 h-[1.5px] bg-gray-400"></span>
            <span className="text-xs font-mono lowercase tracking-widest text-gray-300">
              recent work
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            FEATURED<br />PROJECTS
          </h2>
        </div>

        {/* Horizontal Projects Carousel Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory transition-all"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {RECENT_PROJECTS.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-none w-[280px] sm:w-[340px] md:w-[380px] group relative rounded-lg overflow-hidden snap-start shadow-xl border-b-2 border-[#2563eb] cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="w-full aspect-square relative bg-gray-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover contrast-[1.14] brightness-[1.03] saturate-[1.06] transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
                
                {/* Bottom Subtle Gradient for Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Left Title & Bottom Right Arrow Icon */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight drop-shadow-md pr-2">
                    {project.title}
                  </h3>
                  <span className="text-white/90 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 bg-white hover:bg-gray-200 text-black flex items-center justify-center transition-colors cursor-pointer rounded-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 bg-white hover:bg-gray-200 text-black flex items-center justify-center transition-colors cursor-pointer rounded-xs"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
