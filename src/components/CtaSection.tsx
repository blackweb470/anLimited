import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="w-full bg-[#18181b] text-white py-16 md:py-24 border-t border-white/10 font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
            Get in touch with our engineering and trade experts to get started.
          </p>
        </div>

        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#18181b] font-bold text-sm hover:bg-gray-200 transition-all group shrink-0"
        >
          <span>Contact Us</span>
          <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
