import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, ArrowUpRight } from "lucide-react";
import CtaSection from "@/components/CtaSection";

const FooterLogo = () => (
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-block group">
    <img 
      src="/logo/logo-dark-transparent.png" 
      alt="Akhatasebhudo Nigeria Limited Logo" 
      className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
    />
  </Link>
);

export const Footer = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {location.pathname !== "/contact" && <CtaSection />}
      <footer className="bg-[#141414] text-canvas w-full mt-auto border-t border-white/10 font-sans">
      
      {/* Top Contact Banner Row */}
      <div className="w-full border-b border-white/10 py-8 md:py-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-3 gap-6 md:gap-0">
          
          {/* Call Us */}
          <div className="space-y-1.5 md:pr-8">
            <span className="text-xs text-gray-400 font-medium block">Call Us</span>
            <p className="text-lg md:text-xl font-bold text-white tracking-wide">
              <a href="tel:+2348030967184" className="hover:text-arched-red transition-colors">
                +234 803 096 7184
              </a>
            </p>
          </div>

          {/* Need Support */}
          <div className="space-y-1.5 md:px-8 md:border-l border-white/10">
            <span className="text-xs text-gray-400 font-medium block">Need Support</span>
            <p className="text-lg md:text-xl font-bold text-white tracking-wide">
              <a href="mailto:info@akhatasebhudoltd.com" className="hover:text-arched-red transition-colors">
                info@akhatasebhudoltd.com
              </a>
            </p>
          </div>

          {/* Head Office */}
          <div className="space-y-1.5 md:pl-8 md:border-l border-white/10">
            <span className="text-xs text-gray-400 font-medium block">Head Office</span>
            <p className="text-sm md:text-base font-bold text-white leading-snug">
              No. 7, Emeka Udeh Street, FO1 Kubwa, Abuja, AMAC, Nigeria.
            </p>
          </div>

        </div>
      </div>

      {/* Main Footer Section */}
      <div className="w-full py-12 md:py-16 border-b border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Logo & Socials */}
          <div className="lg:col-span-3 space-y-6">
            <FooterLogo />
            
            {/* Square social icon buttons matching screenshot */}
            <div className="flex items-center gap-1.5 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#242424] hover:bg-arched-red text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 bg-[#242424] hover:bg-arched-red text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 bg-[#242424] hover:bg-arched-red text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 bg-[#242424] hover:bg-arched-red text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation 1 */}
          <div className="lg:col-span-2 space-y-3.5 text-sm font-semibold">
            <div><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white hover:text-arched-red transition-colors">Home</Link></div>
            <div><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white hover:text-arched-red transition-colors">About</Link></div>
            <div><Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white hover:text-arched-red transition-colors">Services</Link></div>
          </div>

          {/* Col 3: Navigation 2 */}
          <div className="lg:col-span-2 space-y-3.5 text-sm font-semibold">
            {/* <div><Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white hover:text-arched-red transition-colors">Projects</Link></div> */}
            <div><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white hover:text-arched-red transition-colors">Contact</Link></div>
          </div>

          {/* Col 4: Need to reach us? Callout */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold text-white">Need to reach us?</h4>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              We're here to answer all your questions. Fill out our contact form and we'll connect you with the people who can help.
            </p>
            
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 p-1 pl-5 rounded-full border border-gray-600 hover:border-white text-white font-semibold text-sm transition-all group"
              >
                <span>Contact Us</span>
                <span className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Scroll Bar */}
      <div className="w-full py-6">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            AKHATASEBHUDO NIGERIA LTD. All rights reserved {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full bg-[#242424] hover:bg-[#383838] text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
    </>
  );
};


