import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-construction.jpg";
import bridgeImg from "@/assets/project-bridge-real.jpg";
import roadRealImg from "@/assets/project-road-real.webp";
import towerImg from "@/assets/project-tower.jpg";
import fabImg from "@/assets/project-fabrication.jpg";
import roadImg from "@/assets/project-road.jpg";
import ceoImg from "@/assets/team-ceo.webp";
import ctoImg from "@/assets/team-cto.webp";
import architectImg from "@/assets/team-architect.webp";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    no: "01",
    title: "Civil & Structural",
    body: "Site planning, structural design, road and drainage systems, foundations, and seismic analysis for safe, lasting infrastructure.",
  },
  {
    no: "02",
    title: "Mechanical & Electrical",
    body: "HVAC, plumbing, fire protection, power distribution, lighting, backup systems, and energy management for buildings of every scale.",
  },
  {
    no: "03",
    title: "Fabrication & Welding",
    body: "Metal structures, components, CNC machining, customisation and on-site assembly delivered with precision.",
  },
  {
    no: "04",
    title: "Project Management",
    body: "Planning, budgeting, procurement, risk and quality assurance turnkey delivery within scope, budget and schedule.",
  },
  {
    no: "05",
    title: "Imports & Logistics",
    body: "Sourcing machinery, equipment and raw materials worldwide, with customs clearance, freight forwarding and compliance handled.",
  },
  {
    no: "06",
    title: "Exports & Trade",
    body: "Market research, documentation, trade financing and compliance to move Nigerian capability to global markets.",
  },
];

const PROJECTS = [
  { id: "01", name: "Federal Road Asphalt Works", location: "Ogun State", year: "2024", img: roadRealImg, tag: "Civil" },
  { id: "02", name: "River Bridge Foundation Works", location: "Northern Nigeria", year: "2023", img: bridgeImg, tag: "Structural" },
  { id: "03", name: "Vertical Civic Tower", location: "Abuja", year: "2024", img: towerImg, tag: "Structural" },
  { id: "04", name: "Heavy Steel Fabrication", location: "Port Harcourt", year: "2023", img: fabImg, tag: "Allied Works" },
  { id: "05", name: "Federal Interchange", location: "Kubwa, AMAC", year: "2024", img: roadImg, tag: "Civil" },
];

const TEAM = [
  { name: " ENGR Destiny Akhatasebhudo", role: "Chief Executive Officer", img: ceoImg },
  { name: "ENGR Odion Julian Akhatasebhudo", role: "Chief Architect", img: architectImg },
  { name: "ARCH Ekpen Josephus Akhatasebhudo", role: "Chief Technology Officer", img: ctoImg },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "bg-canvas border-b border-ink" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-25 py-17">
          <a href="#top" className="flex items-baseline gap-2 leading-none">
            <span className="text-subheading font-bold tracking-tight">AKHATASEBHUDO</span>
            <span className="hidden sm:inline text-caption">Nigeria Ltd.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="ghost-link text-body">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="ghost-link text-body font-bold">
            Start a project +
          </a>
        </div>
      </header>

      <main>
      {/* HERO */}
      <section id="top" className="bg-ink text-canvas pt-32 pb-25 overflow-hidden">
        <div className="px-25">
          <div className="flex items-center gap-3 text-caption uppercase tracking-widest mb-50">
            <span className="inline-block w-2 h-2 bg-arched-red" />
            <span>Engineering · Real Estate · Allied works · Imports · Exports · Nigeria</span>
          </div>

          <h1 className="font-display font-bold text-display-xxl reveal">
            We build
            <br />
            <span className="text-arched-red">Nigeria.</span>
          </h1>

          <div className="mt-50 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-5 text-subheading max-w-md opacity-90">
              Akhatasebhudo Nigeria Limited, a versatile engineering and real estate firm delivering civil, mechanical, electrical
              and structural work, real estate development, fabrication, and global trade services across the federation and beyond.
            </p>
            <div className="md:col-span-4 md:col-start-9 flex md:justify-end gap-8">
              <a href="#work" className="ghost-link text-body" style={{ color: "hsl(var(--canvas))" }}>
                View work +
              </a>
              <a href="#contact" className="ghost-link text-body" style={{ color: "hsl(var(--canvas))" }}>
                Contact +
              </a>
            </div>
          </div>
        </div>

        {/* full-bleed hero image */}
        <div className="mt-50">
          <img
            src={heroImg}
            alt="Bold concrete and red steel construction at golden hour by Akhatasebhudo Nigeria Limited"
            width={1920}
            height={1080}
            className="w-full h-[70vh] object-cover"
          />
        </div>

        {/* marquee */}
        <div className="mt-25 border-y border-canvas/40 py-5 overflow-hidden">
          <div className="marquee-track flex gap-16 whitespace-nowrap text-heading font-bold uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                {["Civil", "Structural", "Real Estate", "Mechanical", "Electrical", "Fabrication", "Imports", "Exports", "Maintenance"].map(
                  (w, j) => (
                    <span key={j} className="flex items-center gap-16">
                      {w}
                      <span className="text-arched-red">●</span>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STUDIO */}
      <section id="studio" className="px-25 py-134 border-b border-ink">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-caption uppercase tracking-widest">01 · Who we are</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-bold text-display tracking-tight">
              A trusted partner for <span className="text-arched-red">infrastructure</span>, real estate, fabrication and global trade.
            </h2>
            <div className="mt-50 grid md:grid-cols-2 gap-8 text-body">
              <p>
                With a commitment to excellence, innovation and reliability, we have established ourselves as a
                trusted partner, delivering tailored solutions across civil, mechanical, electrical, structural,
                and real estate disciplines, from concept design to project completion.
              </p>
              <p>
                Beyond engineering, we operate state-of-the-art fabrication, machining and maintenance facilities,
                and a global trading desk that imports machinery, equipment and raw materials, then exports
                Nigerian capability to international markets.
              </p>
            </div>
          </div>
        </div>

        {/* capabilities */}
        <div className="mt-101 grid grid-cols-2 md:grid-cols-5 border-t border-ink">
          {[
            { k: "Civil", v: "Roads, drainage, foundations" },
            { k: "M & E", v: "HVAC, power, plumbing" },
            { k: "Fabrication", v: "Steel, CNC, on-site assembly" },
            { k: "Real Estate", v: "Property development" },
            { k: "Trade", v: "Imports & exports" },
          ].map((s) => (
            <div key={s.v} className="border-r border-ink last:border-r-0 px-17 py-50">
              <div className="font-display font-bold text-heading-lg">{s.k}</div>
              <div className="mt-2 text-caption uppercase tracking-widest">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-25 py-134 bg-canvas">
        <div className="grid md:grid-cols-12 gap-8 mb-84">
          <div className="md:col-span-4">
            <span className="text-caption uppercase tracking-widest">02 · What we do</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-bold text-display-xl">Services.</h2>
          </div>
        </div>

        <div className="border-t border-ink">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="group grid md:grid-cols-12 gap-8 border-b border-ink py-50 transition-colors hover:bg-ink hover:text-canvas px-2"
            >
              <div className="md:col-span-1 text-caption font-bold">{s.no}</div>
              <h3 className="md:col-span-4 font-display font-bold text-heading">{s.title}</h3>
              <p className="md:col-span-6 text-body max-w-prose">{s.body}</p>
              <div className="md:col-span-1 text-right">
                <span className="font-display text-heading">+</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-ink text-canvas">
        <div className="px-25 pt-134 pb-50 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-caption uppercase tracking-widest">03 · Selected work</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-bold text-display-xl">
              Notable<br />projects.
            </h2>
          </div>
        </div>

        <div className="space-y-25">
          {PROJECTS.map((p, i) => (
            <article key={p.id} className="px-25">
              <div className={`grid md:grid-cols-12 gap-8 items-end mb-8`}>
                <div className="md:col-span-1 text-caption">{p.id}</div>
                <h3 className="md:col-span-7 font-display font-bold text-heading-lg">{p.name}</h3>
                <div className="md:col-span-2 text-caption uppercase tracking-widest">{p.tag}</div>
                <div className="md:col-span-2 text-caption uppercase tracking-widest md:text-right">
                  {p.location} · {p.year}
                </div>
              </div>
              <img
                src={p.img}
                alt={`${p.name}, ${p.tag} project in ${p.location}`}
                loading="lazy"
                className={`w-full object-cover ${i % 2 === 0 ? "h-[80vh]" : "h-[65vh]"}`}
              />
            </article>
          ))}
        </div>

        {/* big statement */}
        <div className="px-25 py-134">
          <p className="font-display font-bold text-display-xxxl leading-none">
            Built<br />
            <span className="text-arched-red">to last.</span>
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-25 py-134 border-b border-ink">
        <div className="grid md:grid-cols-12 gap-8 mb-84">
          <div className="md:col-span-4">
            <span className="text-caption uppercase tracking-widest">04 · Studio</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-bold text-display-xl">Meet the team.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-ink">
          {TEAM.map((m, i) => (
            <article 
              key={m.name} 
              itemScope 
              itemType="https://schema.org/Person" 
              className={`px-17 py-50 ${i < 2 ? "md:border-r md:border-ink" : ""} border-b md:border-b-0 border-ink`}
            >
              <div className="aspect-[3/4] bg-ink mb-17 relative overflow-hidden">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}, ${m.role} at Akhatasebhudo Nigeria Limited`}
                  itemProp="image"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-arched-red" />
              </div>
              <h3 itemProp="name" className="font-display font-bold text-heading-sm">{m.name}</h3>
              <div itemProp="jobTitle" className="text-caption uppercase tracking-widest mt-1">{m.role}</div>
              <meta itemProp="worksFor" content="Akhatasebhudo Nigeria Limited" />
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-arched-red text-ink">
        <div className="px-25 py-134">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-caption uppercase tracking-widest">05 · Contact</span>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display font-bold text-display-xxl leading-none">
                Let's<br />build.
              </h2>
            </div>
          </div>

          <div className="mt-101 grid md:grid-cols-12 gap-12 border-t border-ink pt-50">
            <div className="md:col-span-4 space-y-12">
              <div>
                <div className="text-caption uppercase tracking-widest mb-2">Office</div>
                <p className="text-subheading">
                  No.7, Emeka Udeh Street,<br />
                  FO1 Kubwa, Abuja, AMAC,<br />
                  Nigeria.
                </p>
              </div>
              <div>
                <div className="text-caption uppercase tracking-widest mb-2">Direct</div>
                <p className="text-subheading flex flex-col gap-1">
                  <a href="tel:+2348065741825" className="hover:opacity-70 transition-opacity">+234 806 574 1825</a>
                  <a href="mailto:Duisd@yahoo.com" className="hover:opacity-70 transition-opacity">Duisd@yahoo.com</a>
                </p>
              </div>
              <div>
                <div className="text-caption uppercase tracking-widest mb-2">Enquiries</div>
                <p className="text-subheading opacity-80">
                  Tenders, partnerships and supplier registration on request.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 md:col-start-6">
              <div className="text-caption uppercase tracking-widest mb-8">Send a message</div>
              <form 
                action="https://formsubmit.co/Duisd@yahoo.com" 
                method="POST" 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
              >
                {/* Anti-spam and config for FormSubmit */}
                <input type="hidden" name="_subject" value="New Enquiry from Website" />
                <input type="hidden" name="_template" value="box" />
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-caption uppercase tracking-widest text-xs opacity-70">Name</label>
                  <input type="text" id="name" name="name" required className="bg-transparent border-b border-ink/40 focus:border-ink pb-2 outline-none transition-colors placeholder:text-ink/30 rounded-none text-subheading !bg-transparent style-input" placeholder="Your full name" style={{ backgroundColor: "transparent", WebkitBoxShadow: "0 0 0 50px transparent inset" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-caption uppercase tracking-widest text-xs opacity-70">Email & Contact Info</label>
                  <input type="text" id="email" name="email" required className="bg-transparent border-b border-ink/40 focus:border-ink pb-2 outline-none transition-colors placeholder:text-ink/30 rounded-none text-subheading !bg-transparent style-input" placeholder="your@email.com or Phone Number" style={{ backgroundColor: "transparent", WebkitBoxShadow: "0 0 0 50px transparent inset" }} />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-caption uppercase tracking-widest text-xs opacity-70">Message</label>
                  <textarea id="message" name="message" rows={4} required className="bg-transparent border-b border-ink/40 focus:border-ink pb-2 outline-none transition-colors resize-none placeholder:text-ink/30 rounded-none text-subheading !bg-transparent" placeholder="Tell us about your project..." style={{ backgroundColor: "transparent" }}></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="bg-ink text-canvas px-12 py-5 text-caption uppercase tracking-widest hover:bg-ink/80 transition-colors font-bold w-full md:w-auto text-center cursor-pointer">
                    Submit Enquiry +
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-canvas px-25 py-50">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6">
            <div className="font-display font-bold text-heading">Akhatasebhudo Nigeria Ltd.</div>
            <div className="text-caption mt-2 opacity-70">
              Engineering · Real Estate · Allied works · Imports · Exports · Contracts.
            </div>
          </div>
          <nav className="md:col-span-4 flex flex-wrap gap-6">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="ghost-link text-body" style={{ color: "hsl(var(--canvas))" }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="md:col-span-2 md:text-right text-caption opacity-70">
            © {new Date().getFullYear()} ANL.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
