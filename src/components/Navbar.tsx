import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLightHeader = scrolled || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex justify-center ${
          isLightHeader 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-6"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 relative z-50">
          <Link to="/" className="flex items-center gap-2 group py-1">
            <img 
              src={isLightHeader ? "/logo/logo-light-transparent.png" : "/logo/logo-dark-transparent.png"} 
              alt="AKHATASEBHUDO NIGERIA LIMITED" 
              className="h-14 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => {
              const isActive = location.pathname === n.href;
              return (
                <Link 
                  key={n.label} 
                  to={n.href} 
                  className={`text-sm md:text-base font-bold transition-colors ${
                    isLightHeader 
                      ? (isActive ? "text-[#2563eb]" : "text-[#14233c] hover:text-[#2563eb]")
                      : (isActive ? "text-[#60a5fa]" : "text-white hover:text-[#60a5fa] drop-shadow-sm")
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <Link 
            to="/contact" 
            className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
              isLightHeader
                ? "bg-[#14233c] hover:bg-[#2563eb] text-white"
                : "bg-white hover:bg-gray-100 text-[#14233c]"
            }`}
          >
            Start a project +
          </Link>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden flex flex-col justify-center items-end gap-1.5 p-2 w-10 h-10 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 transition-all duration-300 ${isLightHeader ? "bg-[#14233c]" : "bg-white"} ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 transition-all duration-300 ${isLightHeader ? "bg-[#14233c]" : "bg-white"} ${mobileMenuOpen ? "w-6 opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 transition-all duration-300 ${isLightHeader ? "bg-[#14233c]" : "bg-white"} ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white transition-all duration-300 overflow-hidden shadow-lg border-t border-gray-100 ${
            mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <nav className="flex flex-col px-6 gap-4 font-semibold text-base text-[#14233c]">
            {NAV.map((n) => (
              <Link 
                key={n.label} 
                to={n.href} 
                className="hover:text-[#2563eb] transition-colors py-1"
              >
                {n.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="inline-block px-5 py-3 rounded-full bg-[#14233c] text-white text-center font-bold text-xs uppercase tracking-wider mt-2"
            >
              Start a project +
            </Link>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under header when at top of pages without hero */}
      {location.pathname !== "/" && <div className="h-20 md:h-24 w-full bg-[#1c1c1c]"></div>}
    </>
  );
};
