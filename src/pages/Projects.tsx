import SEO from "@/components/SEO";
import { ProjectShowcaseScroll } from "@/components/ProjectShowcaseScroll";
import heroConstruction from "@/assets/hero-construction.jpg";

const Projects = () => {
  return (
    <>
      <SEO 
        title="Our Projects & Portfolio | Akhatasebhudo Nigeria Limited" 
        description="Explore our portfolio of civil engineering landmarks, power substations, commercial centers, and structural tower designs across Nigeria."
      />

      {/* HERO BANNER - MATCHING SCREENSHOT EXACTLY (CENTERED DARK ARCHITECTURAL BACKGROUND) */}
      <section className="relative w-full py-24 md:py-32 bg-[#1c1c1c] text-white flex flex-col items-center justify-center overflow-hidden font-sans border-b border-white/10">
        
        {/* Background Grayscale Architectural Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src={heroConstruction} 
            alt="Architectural structure background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-white mb-6 leading-tight">
              THE AKHATASEBHUDO<br />
              PORTFOLIO
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              End-to-End Solutions from Architectural & Structural Engineering Drawings to Infrastructure Development & Fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE SECTION */}
      <ProjectShowcaseScroll />
    </>
  );
};

export default Projects;
