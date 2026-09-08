import { useState } from "react";
import SEO from "@/components/SEO";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp, Mail } from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#14233c] font-sans">
      <SEO 
        title="Information Request & Office Locations | Akhatasebhudo Nigeria Ltd" 
        description="Fill out our information request form or reach out to our office location in Abuja, Nigeria."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Akhatasebhudo Nigeria Limited",
          "url": "https://www.akhatasebhudoltd.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Akhatasebhudo Nigeria Limited",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 7, Emeka Udeh Street, FO1 Kubwa",
              "addressLocality": "Abuja",
              "addressRegion": "AMAC",
              "addressCountry": "NG"
            },
            "telephone": "+2348030967184",
            "email": "info@akhatasebhudoltd.com"
          }
        }}
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
              CONNECT WITH<br />
              OUR ENGINEERS
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              For CAD Blueprints, Structural Engineering Consultations, Project Estimates, or Construction Partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT & OFFICE LOCATIONS GRID */}
      <div className="w-full min-h-[calc(100vh-80px)] grid lg:grid-cols-12">
        {/* Left Column - Information Request Form */}
        <div className="lg:col-span-7 bg-[#f2f5f9] px-8 sm:px-12 md:px-16 lg:px-20 py-12 md:py-16 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto lg:mx-0">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-[42px] text-[#14233c] leading-tight mb-3">
              Information Request
            </h2>
            <p className="text-[#556987] text-base md:text-body font-normal leading-relaxed mb-10">
              For more information and how we can meet your needs, please fill out the form below and someone from our team will be in touch.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#14233c] text-white rounded-2xl text-center space-y-4 shadow-md">
                <h3 className="text-2xl font-bold text-[#2563eb]">Thank You!</h3>
                <p className="text-base text-gray-200">
                  Your message has been received. Someone from our team will be in touch within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white text-[#14233c] text-sm font-semibold rounded-full hover:bg-[#2563eb] hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/info@akhatasebhudoltd.com"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-7"
              >
                <input type="hidden" name="_subject" value="New Website Information Request" />
                <input type="hidden" name="_template" value="box" />

                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#14233c]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-[#cbd5e1] focus:border-[#14233c] py-2.5 text-base text-[#14233c] outline-none transition-colors font-normal"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#14233c]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-[#cbd5e1] focus:border-[#14233c] py-2.5 text-base text-[#14233c] outline-none transition-colors font-normal"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#14233c]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-b border-[#cbd5e1] focus:border-[#14233c] py-2.5 text-base text-[#14233c] outline-none transition-colors font-normal"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#14233c]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-[#cbd5e1] focus:border-[#14233c] py-2.5 text-base text-[#14233c] outline-none transition-colors font-normal resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full border border-[#cbd5e1] bg-white text-[#14233c] font-semibold text-sm hover:bg-[#14233c] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column - Office Locations Details */}
        <div className="lg:col-span-5 bg-white px-8 sm:px-12 md:px-16 lg:px-20 py-12 md:py-16 flex flex-col justify-between relative border-l border-gray-100">
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-[42px] text-[#14233c] leading-tight mb-3">
              Office Locations
            </h2>
            <p className="text-[#556987] text-base md:text-body font-normal leading-relaxed mb-10">
              We usually respond within 24 hours.<br />Alternatively you're welcome to call our offices.
            </p>

            {/* Location Details */}
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#14233c]">
                  Head Office — Abuja:
                </h3>
                <p className="text-sm md:text-base font-bold text-[#14233c] uppercase tracking-wide leading-relaxed">
                  NO. 7, EMEKA UDEH STREET, FO1 KUBWA, ABUJA, AMAC, NIGERIA.
                </p>
                <div className="space-y-1 pt-1">
                  <p className="text-sm font-semibold text-[#14233c]">
                    <a href="tel:+2348030967184" className="hover:text-[#2563eb] transition-colors">
                      +234 803 096 7184
                    </a>
                    <span className="mx-2 text-[#94a3b8]">•</span>
                    <a href="tel:+2347059053613" className="hover:text-[#2563eb] transition-colors">
                      +234 705 905 3613
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0]">
                <p className="text-sm font-semibold text-[#14233c] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#556987]" />
                  <a href="mailto:info@akhatasebhudoltd.com" className="hover:text-[#2563eb] transition-colors">
                    info@akhatasebhudoltd.com
                  </a>
                </p>
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#94a3b8] mb-3">
                  Follow Us
                </h4>
                <div className="flex items-center gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 rounded-full border border-[#cbd5e1] text-[#14233c] hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-110 transition-all duration-300">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full border border-[#cbd5e1] text-[#14233c] hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-full border border-[#cbd5e1] text-[#14233c] hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-110 transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2.5 rounded-full border border-[#cbd5e1] text-[#14233c] hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-110 transition-all duration-300">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2.5 rounded-full border border-[#cbd5e1] text-[#14233c] hover:border-[#2563eb] hover:text-[#2563eb] hover:scale-110 transition-all duration-300">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Scroll To Top Button */}
          <div className="flex justify-end pt-8 lg:pt-0">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-12 h-12 rounded-full bg-[#94a3b8] hover:bg-[#14233c] text-white flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
