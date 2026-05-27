import { Link } from "react-router-dom";
import { PROJECTS } from "@/lib/data";
import SEO from "@/components/SEO";

const Projects = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary overflow-hidden flex flex-col items-center w-full min-h-screen">
      <SEO 
        title="Our Portfolio | Infrastructure & Construction Landmarks" 
        description="Explore our extensive track record of excellence in federal highways, civic towers, bridge foundations, and heavy steel fabrication in Nigeria."
      />
      {/* Marquee Header */}
      <div className="w-full border-y border-ink/10 py-6 md:py-8 mb-16 md:mb-24 flex overflow-hidden opacity-20">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-display font-bold text-[12vw] md:text-[10vw] uppercase leading-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>AKHATASEBHUDO</span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">A Legacy of Landmarks.</h2>
          <p className="text-body md:text-heading-sm opacity-80 leading-relaxed font-medium">
            From federal highways and critical bridges to vertical civic towers, our portfolio speaks to our capacity to handle large-scale infrastructural challenges. Explore our track record of excellence.
          </p>
        </div>

        <div className="border-t border-ink/20">
          {PROJECTS.map((p) => (
            <article key={p.id} className="group border-b border-ink/20 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 hover:bg-white/50 transition-colors cursor-pointer px-0 md:px-4 md:-mx-4 rounded-lg">
              <div className="flex flex-col gap-2 md:gap-4 w-full md:w-auto">
                <span className="text-xs md:text-caption font-bold text-arched-red">{p.tag}</span>
                <h4 className="font-display font-bold text-2xl md:text-heading md:text-heading-lg group-hover:text-arched-red transition-colors">{p.name}</h4>
                <span className="text-xs md:text-body opacity-70">{p.location} · {p.year}</span>
              </div>
              <div className="overflow-hidden rounded-md shrink-0 md:w-1/3 aspect-[4/3] md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
              </div>
              {/* Mobile image fallback */}
              <img src={p.img} alt={p.name} className="w-full aspect-video object-cover md:hidden mt-4 rounded-sm" />
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <Link
            to="/team"
            className="inline-block bg-ink text-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-arched-red transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
