import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex justify-center ${
          scrolled || mobileMenuOpen ? "bg-canvas/95 backdrop-blur-sm border-b border-ink/10 py-4" : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 relative z-50">
          <Link to="/" className="flex items-baseline gap-2 leading-none">
            <span className="text-subheading font-bold tracking-tight">AKHATASEBHUDO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <Link key={n.label} to={n.href} className="ghost-link text-body font-medium hover:text-arched-red transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="ghost-link text-body font-bold hidden md:block">
            Start a project +
          </Link>
          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden flex flex-col justify-center items-end gap-1.5 p-2 w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? "w-6 opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-canvas border-b border-ink/10 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV.map((n) => (
              <Link 
                key={n.label} 
                to={n.href} 
                className="text-subheading font-bold hover:text-arched-red transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="text-subheading font-bold text-arched-red mt-2"
            >
              Start a project +
            </Link>
          </nav>
        </div>
      </header>
      {/* Spacer to prevent content from going under the fixed header when at the top of pages that don't have full-bleed hero images */}
      {location.pathname !== "/" && <div className="h-24 md:h-32 bg-canvas w-full"></div>}
    </>
  );
};
