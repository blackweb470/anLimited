import { Link } from "react-router-dom";
import { NAV } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="bg-ink text-canvas border-t border-canvas/20 py-10 md:py-12 flex justify-center w-full mt-auto">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-12">
        <div className="flex gap-6 md:gap-8 text-xs md:text-caption uppercase tracking-widest font-bold flex-wrap">
          {NAV.map((n) => (
            <Link key={n.label} to={n.href} className="hover:text-arched-red transition-colors">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6 text-xl md:text-2xl">
          <a href="#" className="hover:text-arched-red transition-colors">Fb</a>
          <a href="#" className="hover:text-arched-red transition-colors">In</a>
          <a href="#" className="hover:text-arched-red transition-colors">Ig</a>
        </div>
        <div className="text-xs md:text-caption font-medium opacity-70">
          © {new Date().getFullYear()} AKHATASEBHUDO Nigeria Ltd. Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};
