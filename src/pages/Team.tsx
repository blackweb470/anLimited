import { Link } from "react-router-dom";
import { TEAM } from "@/lib/data";
import SEO from "@/components/SEO";

const Team = () => {
  return (
    <section className="py-20 md:py-32 flex justify-center w-full min-h-screen">
      <SEO 
        title="Our Leadership Team | Decades of Industry Expertise" 
        description="Meet the visionary leaders driving innovation and sustainable development at Akhatasebhudo Nigeria Limited."
      />
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[1.1] tracking-tight break-words mb-8">Our Leaders</h2>
          <p className="text-body md:text-heading-sm opacity-80 leading-relaxed font-medium">
            Driven by Experience and Vision. Our leadership team brings decades of combined expertise across structural engineering, architecture, and international logistics. Together, we guide Akhatasebhudo Nigeria Limited towards new horizons.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              <div className="overflow-hidden mb-6 md:mb-8 aspect-[3/4] bg-secondary">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
              </div>
              <h3 className="font-display font-bold text-lg md:text-heading-sm mb-1 md:mb-2 group-hover:text-arched-red transition-colors">{m.name}</h3>
              <p className="text-xs md:text-caption font-bold uppercase tracking-widest opacity-60">{m.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <Link
            to="/contact"
            className="inline-block bg-ink text-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-arched-red transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
