import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowUpRight } from "lucide-react";

import ceoImg from "@/assets/team-ceo-new.jpg";
import ctoImg from "@/assets/team-cto.png";
import architectImg from "@/assets/team-architect.webp";
import heroConstruction from "@/assets/hero-construction.jpg";

const ABOUT_VALUES = [
  {
    number: "01.",
    title: "Our Mission",
    description: "To deliver world-class construction solutions through disciplined execution, innovative technologies, technical excellence, and exceptional service, while building lasting value for our clients, partners, people, and communities."
  },
  {
    number: "02.",
    title: "Our Vision",
    description: "To position AN LIMITED as a globally respected leader in construction, recognized for excellence, innovation, integrity, and the delivery of lasting value."
  },
  {
    number: "03.",
    title: "Core Competency",
    description: "AN LIMITED combines technical expertise, disciplined project management, innovative construction methods, quality assurance, strategic resource management, and strong client relationships to deliver exceptional construction solutions and lasting value."
  },
  {
    number: "04.",
    title: "Quality Assurance",
    description: "Every architectural blueprint, structural calculation, and construction site undergoes multi-tier quality control checks to ensure strict compliance with international engineering standards."
  }
];

const EXECUTIVE_TEAM = [
  {
    name: "ENGR Destiny Akhatasebhudo",
    role: "Chief Executive Officer",
    image: ceoImg,
    description: "Over 25 years of strategic leadership directing major civil engineering and infrastructure operations across West Africa."
  },
  // {
  //   name: "ENGR Odion Julian Akhatasebhudo",
  //   role: "Chief Operating Officer",
  //   image: architectImg,
  //   description: "Expert in heavy structural engineering, site management, mechanical installations, and contract execution for multi-billion naira projects."
  // },
  // {
  //   name: "Ekpen Josephus Akhatasebhudo ARCH",
  //   role: "Chief Architect",
  //   image: ctoImg,
  //   description: "Master architect specializing in 2D/3D architectural CAD drawings, spatial planning, commercial tower design, and modern urban blueprints."
  // }
];

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Akhatasebhudo Nigeria Limited" 
        description="Learn about our founding on March 6, 2017, executive leadership team, mission, vision, and core values in engineering and CAD drafting."
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
              ABOUT AKHATASEBHUDO<br />
              NIGERIA LIMITED
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Founded March 6, 2017 — Turnkey Solutions in Architectural CAD Drafting, Structural Engineering, & Civil Infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW & STATS SECTION */}
      <section className="py-20 md:py-28 bg-white text-[#14233c] font-sans">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading + Key Stats */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase leading-tight text-[#14233c]">
              ENGINEERING EXCELLENCE & UNWAVERING INTEGRITY
            </h2>
            
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-none bg-[#f8fafc] border border-gray-200">
                <span className="font-display font-black text-2xl md:text-3xl text-[#2563eb] block">MARCH 6</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1 block">Founded 2017</span>
              </div>
              <div className="p-5 rounded-none bg-[#f8fafc] border border-gray-200">
                <span className="font-display font-black text-2xl md:text-3xl text-[#2563eb] block">150+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1 block">Projects Delivered</span>
              </div>
            </div>

            <div>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#14233c] hover:bg-[#2563eb] text-white font-bold text-xs uppercase tracking-wider transition-all group shadow-md"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative Body */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              <strong className="text-[#14233c] font-bold">AKHATASEBHUDO NIGERIA LIMITED (AN LIMITED)</strong> is a Nigerian construction company providing integrated construction solutions and related professional services. We are committed to delivering quality, innovation, and value across every project, while building enduring relationships with our clients and partners through trust, transparency, communication, and collaboration.
            </p>
            <p>
              At AN LIMITED, we are driven by a culture of excellence, discipline, accountability, and continuous improvement. We go beyond conventional industry standards, consistently pursuing better ways to deliver complex projects and create lasting value. We go the extra mile and continue where others stop. Our meticulous attention to detail, professional approach, and commitment to exceeding client expectations distinguish us in a competitive industry.
            </p>
            <p>
              Our pursuit of excellence is supported by continuous investment in advanced technical resources, innovative construction methodologies, modern technologies, and the professional development of our people. We combine technical expertise with efficient project management and value-driven construction practices to deliver solutions that meet the highest standards of quality, safety, functionality, and durability.
            </p>
            <p>
              Our reputation is built on the trust of our clients, the quality of our completed projects, and the confidence reflected in repeat business and referrals. Every project is an opportunity to strengthen our reputation, create measurable value, and contribute positively to the built environment.
            </p>
            <p>
              At AN LIMITED, we are not simply constructing buildings; we are building lasting value, trusted partnerships, and a legacy of excellence.
            </p>
          </div>

        </div>
      </section>

      {/* 3. OUR GUIDING PRINCIPLES SECTION */}
      <section className="w-full bg-[#f8fafc] text-[#14233c] py-20 md:py-28 relative overflow-hidden font-sans border-t border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14 md:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gray-400"></span>
              <span className="text-xs font-mono lowercase tracking-widest text-gray-500">
                purpose & principles
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#14233c] tracking-tight uppercase leading-[0.95]">
              OUR GUIDING PRINCIPLES
            </h2>
          </div>

          {/* 4 Cards Grid with Non-Rounded Sharp Edges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_VALUES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/80 rounded-none p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="inline-block text-xs font-mono text-gray-500 border border-gray-200 rounded-none px-2.5 py-1 font-semibold mb-6">
                    {item.number}
                  </span>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#14233c] tracking-tight mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EXECUTIVE LEADERSHIP TEAM SECTION */}
      <section className="w-full bg-[#171717] text-white py-20 md:py-28 font-sans border-t border-white/10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gray-400"></span>
              <span className="text-xs font-mono lowercase tracking-widest text-gray-300">
                leadership
              </span>
              <span className="w-6 h-[1.5px] bg-gray-400"></span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              MEET OUR CEO
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {EXECUTIVE_TEAM.map((member, idx) => (
              <div 
                key={idx}
                className={`bg-[#242424] border border-white/10 rounded-none overflow-hidden group shadow-lg flex flex-col justify-between ${
                  EXECUTIVE_TEAM.length === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <div className="w-full aspect-[4/3] bg-gray-800 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                <div className="p-6 md:p-8 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed pt-1">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
