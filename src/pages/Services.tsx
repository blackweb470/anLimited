import { Link } from "react-router-dom";
import { ENGINEERING_SERVICES, ALLIED_WORKS, IMPORT_SERVICES, EXPORT_SERVICES } from "@/lib/data";

const Services = () => {
  return (
    <section className="py-20 md:py-32 flex justify-center w-full min-h-screen">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-24 max-w-4xl">
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[1.1] tracking-tight break-words mb-8 md:mb-12">
            What We Do.
          </h2>
          <p className="text-body md:text-heading-sm opacity-80 leading-relaxed font-medium">
            Comprehensive Expertise, Turnkey Delivery. From concept design to project completion, our skilled engineers and technicians deliver high-quality solutions for infrastructure, while our global trading desk seamlessly handles international logistics.
          </p>
        </div>

        {/* Engineering Services */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-10">Engineering Services</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
            {ENGINEERING_SERVICES.map((s, i) => (
              <div key={i} className="border-t border-ink pt-6 md:pt-8 group cursor-default">
                <div className="text-xs md:text-caption font-bold mb-4 md:mb-6 text-arched-red">{(i + 1).toString().padStart(2, '0')}</div>
                <h4 className="font-display font-bold text-xl md:text-heading mb-4 md:mb-6 group-hover:text-arched-red transition-colors">{s.title}</h4>
                <p className="text-sm md:text-body opacity-80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Allied Works */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-10">Allied Works</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
            {ALLIED_WORKS.map((s, i) => (
              <div key={i} className="border-t border-ink pt-6 md:pt-8 group cursor-default">
                <div className="text-xs md:text-caption font-bold mb-4 md:mb-6 text-arched-red">{(i + 1).toString().padStart(2, '0')}</div>
                <h4 className="font-display font-bold text-xl md:text-heading mb-4 md:mb-6 group-hover:text-arched-red transition-colors">{s.title}</h4>
                <p className="text-sm md:text-body opacity-80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade */}
        <div className="grid xl:grid-cols-2 gap-20">
          {/* Import Services */}
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-10">Import Services</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
              {IMPORT_SERVICES.map((s, i) => (
                <div key={i} className="border-t border-ink pt-6 md:pt-8 group cursor-default">
                  <div className="text-xs md:text-caption font-bold mb-4 md:mb-6 text-arched-red">{(i + 1).toString().padStart(2, '0')}</div>
                  <h4 className="font-display font-bold text-xl md:text-heading-sm mb-4 md:mb-6 group-hover:text-arched-red transition-colors">{s.title}</h4>
                  <p className="text-sm md:text-body opacity-80 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Export Services */}
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-10">Export Services</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
              {EXPORT_SERVICES.map((s, i) => (
                <div key={i} className="border-t border-ink pt-6 md:pt-8 group cursor-default">
                  <div className="text-xs md:text-caption font-bold mb-4 md:mb-6 text-arched-red">{(i + 1).toString().padStart(2, '0')}</div>
                  <h4 className="font-display font-bold text-xl md:text-heading-sm mb-4 md:mb-6 group-hover:text-arched-red transition-colors">{s.title}</h4>
                  <p className="text-sm md:text-body opacity-80 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <Link
            to="/projects"
            className="inline-block bg-ink text-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-arched-red transition-colors"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
