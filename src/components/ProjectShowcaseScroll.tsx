import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";

import projectTower from "@/assets/project-tower.jpg";
import projectBridge from "@/assets/project-bridge-real.jpg";

export const PROJECT_SHOWCASE_LIST = [
  {
    id: "river-park-cluster-3",
    name: "River Park Cluster 3 (20 Units 5-Bed Duplexes)",
    remark: "Ongoing",
    category: "Residential Architecture & Heavy Construction",
    location: "Lugbe River Park Cluster 3, Abuja",
    image: "/images/river_park_cluster3.jpg",
    description: "Turnkey structural foundation engineering, reinforced concrete column casting, blockwork substructure, and estate development for 20 luxury 5-bedroom duplexes."
  },
  {
    id: "lugbe-river-park",
    name: "Lugbe River Park Duplex Estate (12 Units)",
    remark: "Completed",
    category: "Residential Architecture & Construction",
    location: "Lugbe River Park, Abuja",
    image: "/images/NOOP8356.JPG",
    description: "Architectural drafting, structural engineering, and construction of 12 luxury 5-bedroom fully detached duplex units featuring a private swimming pool, fitness gym, and paved estate access roads."
  },
  {
    id: "aso-drive-terraces",
    name: "Aso Drive Townhouse & Terraces",
    remark: "Ongoing",
    category: "Structural Engineering & Construction",
    location: "Aso Drive, Abuja",
    image: "/images/VCTJ4118.JPG",
    description: "Turnkey structural foundation engineering, earthwork excavation, heavy reinforced concrete footings, and substructure development for 1 luxury townhouse and 3 modern terrace buildings."
  },
  {
    id: "benin-substation",
    name: "Benin Substation",
    remark: "Completed",
    category: "Electrical & Infrastructure",
    location: "Benin City, Edo State",
    image: "/projects/eko-health.jpg",
    description: "High-capacity power substation civil works, transformer pad installations, high-voltage cabling, and perimeter structural fencing."
  },
  {
    id: "ouando-market",
    name: "Ouando Market",
    remark: "Completed",
    category: "Civil Construction & Architecture",
    location: "Ouando Commercial Corridor",
    image: "/projects/louisville.jpg",
    description: "Multi-acre municipal commercial complex featuring reinforced concrete foundations, 2D/3D BIM drafting, and drainage infrastructure."
  },
  {
    id: "snake-island",
    name: "Snake Island",
    remark: "Completed",
    category: "Industrial & Marine Infrastructure",
    location: "Lagos Logistics Zone",
    image: "/projects/snake-island.jpg",
    description: "Heavy logistics yard paving, maritime berth foundation works, container storage pads, and heavy crane access roads."
  },
  {
    id: "private-villa",
    name: "Private Villa",
    remark: "Completed",
    category: "Architectural CAD & Residential",
    location: "Lekki Peninsula, Lagos",
    image: "/projects/private-villa.jpg",
    description: "Turnkey architectural blueprint design, 3D elevation renderings, MEP schematics, and structural steel reinforcement."
  },
  {
    id: "metropolitan-tower",
    name: "Metropolitan Tower",
    remark: "In Progress",
    category: "Structural Engineering",
    location: "Victoria Island, Lagos",
    image: projectTower,
    description: "14-story commercial tower structural design, deep pile foundation engineering, and curtain wall structural detailing."
  },
  {
    id: "benin-river-bridge",
    name: "Benin River Bridge",
    remark: "Completed",
    category: "Civil Infrastructure",
    location: "Edo Infrastructure Corridor",
    image: projectBridge,
    description: "Prestressed concrete bridge piers, abutment reinforcement, highway approach paving, and stormwater drainage network."
  }
];

export const ProjectShowcaseScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#ffffff] text-[#14233c] font-sans py-20 md:py-28 border-t border-gray-200">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-2">
            — landmark portfolio
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#14233c] tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Side-by-Side Rows */}
        <div className="space-y-16 md:space-y-24">
          {PROJECT_SHOWCASE_LIST.map((proj) => (
            <div 
              key={proj.id}
              className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center border-b border-gray-200/80 pb-16 md:pb-24 group"
            >
              {/* Left Side: Photo */}
              <div className="lg:col-span-7">
                <Link 
                  to={`/projects/${proj.id}`}
                  onClick={scrollToTop}
                  className="block w-full aspect-[16/10] bg-gray-200 overflow-hidden shadow-lg border border-gray-200/80 cursor-pointer"
                >
                  <img 
                    src={proj.image} 
                    alt={proj.name}
                    className="w-full h-full object-cover contrast-[1.14] brightness-[1.03] saturate-[1.06] transition-transform duration-700 group-hover:scale-105"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </Link>
              </div>

              {/* Right Side: Project Details Panel */}
              <div className="lg:col-span-5 space-y-6">
                {/* Title */}
                <Link 
                  to={`/projects/${proj.id}`}
                  onClick={scrollToTop}
                  className="block group/title font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f172a] hover:text-[#2563eb] transition-colors tracking-tight leading-tight"
                >
                  {proj.name}
                </Link>

                {/* Horizontal Border Divider */}
                <div className="border-t border-gray-200 pt-4" />

                {/* Metadata Row: Remark & Status */}
                <div className="flex items-center justify-between text-base md:text-lg font-medium text-gray-600">
                  <span>Remark</span>
                  <span className="font-bold text-[#0f172a]">{proj.remark}</span>
                </div>

                {/* Additional Specs */}
                <div className="text-sm text-gray-500 space-y-1 font-medium pt-1">
                  <div><span className="text-gray-400">Category:</span> <span className="text-gray-700 font-semibold">{proj.category}</span></div>
                  <div><span className="text-gray-400">Location:</span> <span className="text-gray-700 font-semibold">{proj.location}</span></div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    to={`/projects/${proj.id}`}
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2.5 font-bold text-base md:text-lg text-[#0f172a] hover:text-[#2563eb] transition-colors group/link"
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#2563eb] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    <span className="underline underline-offset-4">View Project</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Back To Top Action Button */}
        <div className="flex justify-end pt-12">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gray-300 hover:bg-[#14233c] text-gray-700 hover:text-white flex items-center justify-center transition-all shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
