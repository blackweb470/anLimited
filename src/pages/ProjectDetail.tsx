import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Calendar, MapPin } from "lucide-react";

import projectTower from "@/assets/project-tower.jpg";
import projectBridge from "@/assets/project-bridge-real.jpg";

export const ALL_PROJECTS = [
  {
    id: "river-park-cluster-3",
    name: "River Park Cluster 3 (20 Units 5-Bed Duplexes)",
    remark: "Ongoing",
    category: "Residential Architecture & Heavy Construction",
    location: "Lugbe River Park Cluster 3, Abuja",
    year: "2024 - Ongoing",
    image: "/images/river_park_cluster3.jpg",
    description: "Ongoing turnkey architectural design, structural engineering, concrete foundation casting, reinforced column erection, and substructure development for 20 luxury 5-bedroom duplex units at River Park Cluster 3, Abuja. The project includes estate layout planning, underground utility ducting, concrete mixing operations, and perimeter retaining structures.",
    highlights: [
      "20 Units Luxury 5-Bedroom Duplexes",
      "Heavy Reinforced Concrete Columns & Foundation Slabs",
      "Substructure Blockwork & Concrete Mixing On-Site",
      "Integrated Estate Utility & Drainage Network"
    ]
  },
  {
    id: "lugbe-river-park",
    name: "Lugbe River Park 5-Bedroom Duplex Estate",
    remark: "Completed",
    category: "Residential Architecture & Civil Construction",
    location: "Lugbe River Park, Abuja",
    year: "2024",
    image: "/images/NOOP8356.JPG",
    description: "Architectural drafting, structural engineering calculations, and turnkey construction of 12 luxury 5-bedroom fully detached duplex units at Lugbe River Park, Abuja. The gated residential enclave features a private swimming pool complex, fully equipped fitness gym, underground drainage, perimeter security fencing, and paved estate access roads.",
    highlights: [
      "12 Units Fully Detached 5-Bedroom Luxury Duplexes",
      "Private Estate Swimming Pool & Fitness Gym",
      "BIM 3D Architectural Blueprint Drafting",
      "Paved Internal Roadways & Underground Drainage"
    ]
  },
  {
    id: "aso-drive-terraces",
    name: "Aso Drive Townhouse & 3 Terraces",
    remark: "Ongoing",
    category: "Structural Engineering & Construction",
    location: "Aso Drive, Abuja",
    year: "2024 - Ongoing",
    image: "/images/VCTJ4118.JPG",
    description: "Ongoing structural design, foundation earthworks, heavy reinforced concrete footing, and substructure execution for an exclusive residential development comprising 1 luxury townhouse and 3 modern terrace units along Aso Drive, Abuja. The project features retaining wall engineering against hillside terrain, column rebar detailing, and underground drainage network installation.",
    highlights: [
      "1 Luxury Townhouse & 3 Executive Terrace Units",
      "Heavy Reinforced Concrete Footing & Retaining Walls",
      "Slope Excavation & Hillside Earthworks Engineering",
      "Column Rebar Detailing & Foundation Pouring"
    ]
  },
  {
    id: "benin-substation",
    name: "Benin Substation & Power Grid",
    remark: "Completed",
    category: "Electrical & Infrastructure",
    location: "Benin City, Edo State",
    year: "2023",
    image: "/projects/eko-health.jpg",
    description: "High-capacity 330kV power distribution substation civil works, heavy transformer concrete pads, high-voltage equipment mounting, earthing network design, and perimeter security fencing.",
    highlights: [
      "2D & 3D Electrical CAD Schematics",
      "Heavy Reinforced Concrete Transformer Pads",
      "Substation Earthing & Lightning Protection Network",
      "Turnkey Civil & Electrical Handover"
    ]
  },
  {
    id: "ouando-market",
    name: "Ouando Market Commercial Center",
    remark: "Completed",
    category: "Civil Construction & Architecture",
    location: "Ouando Commercial Corridor",
    year: "2022",
    image: "/projects/louisville.jpg",
    description: "Multi-acre municipal commercial complex featuring reinforced concrete foundations, 2D/3D BIM drafting, structural steel roofing, stormwater drainage infrastructure, and paved access roads.",
    highlights: [
      "BIM 3D Master Spatial Planning",
      "Heavy Earthworks & Concrete Slab Foundation",
      "Stormwater Drainage & Retaining Infrastructure",
      "Multi-Unit Retail Commercial Layouts"
    ]
  },
  {
    id: "snake-island",
    name: "Snake Island Maritime Terminal",
    remark: "Completed",
    category: "Industrial & Maritime Infrastructure",
    location: "Lagos Maritime Zone",
    year: "2024",
    image: "/projects/snake-island.jpg",
    description: "Heavy yard paving, maritime berth foundation works, container storage pads, and heavy crane access roads.",
    highlights: [
      "Maritime Heavy Load Sub-Base Paving",
      "Maritime Terminal Infrastructure",
      "Heavy Machinery Storage & Crane Corridors",
      "24/7 Marine Terminal Operations"
    ]
  },
  {
    id: "private-villa",
    name: "Private Luxury Villa Estate",
    remark: "Completed",
    category: "Architectural CAD & Residential",
    location: "Lekki Peninsula, Lagos",
    year: "2023",
    image: "/projects/private-villa.jpg",
    description: "Turnkey architectural blueprint design, 3D elevation renderings, MEP schematics, structural steel reinforcement, and modern interior spatial planning.",
    highlights: [
      "Custom 3D Elevation CAD Rendering",
      "Full Mechanical, Electrical & Plumbing (MEP) Drafting",
      "Structural Steel & Reinforced Column Blueprint",
      "High-End Spatial Luxury Finishes"
    ]
  },
  {
    id: "metropolitan-tower",
    name: "Metropolitan Commercial Tower",
    remark: "In Progress",
    category: "Structural Engineering",
    location: "Victoria Island, Lagos",
    year: "2024",
    image: projectTower,
    description: "14-story commercial tower structural design, deep pile foundation engineering, curtain wall structural detailing, and elevator core reinforcement.",
    highlights: [
      "14-Story Reinforced Concrete Skeleton",
      "Deep Pile Foundation Load Calculations",
      "Curtain Wall Structural Detailing",
      "Seismic & Wind Load Safety Audits"
    ]
  },
  {
    id: "benin-river-bridge",
    name: "Benin River Highway Bridge",
    remark: "Completed",
    category: "Civil Infrastructure",
    location: "Edo Infrastructure Corridor",
    year: "2021",
    image: projectBridge,
    description: "Prestressed concrete bridge piers, abutment reinforcement, highway approach paving, and stormwater drainage network over the Benin River.",
    highlights: [
      "Prestressed Concrete Girders & Piers",
      "Riverbed Heavy Sub-Base Piling",
      "Highway Approach Asphalt Paving",
      "Hydraulic Scour Protection Engineering"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find current project or fallback to first project
  const project = ALL_PROJECTS.find((p) => p.id === id) || ALL_PROJECTS[0];
  
  // Featured projects under (exclude current)
  const featuredProjectsUnder = ALL_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEO 
        title={`${project.name} | Akhatasebhudo Nigeria Limited`}
        description={project.description}
      />

      <div className="w-full bg-[#f8fafc] text-[#14233c] font-sans py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          
          {/* Back Button */}
          <div>
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#2563eb] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </button>
          </div>

          {/* Project Header & Metadata Bar */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#2563eb] text-white px-3 py-1">
                {project.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-gray-200 text-gray-700 px-3 py-1">
                {project.remark}
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f172a] tracking-tight uppercase leading-tight">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 font-medium pt-1">
              <span className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-4 h-4 text-[#2563eb]" /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-xs">
                <Calendar className="w-4 h-4 text-[#2563eb]" /> Year: {project.year}
              </span>
            </div>
          </div>

          {/* Main Project Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-gray-200 overflow-hidden shadow-2xl border border-gray-200">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover contrast-[1.14] brightness-[1.03] saturate-[1.06]"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>

          {/* Clean Overview & Technical Scope Layout (Without Cluttered Sidebar Box) */}
          <div className="space-y-12 pt-6 border-b border-gray-200 pb-16">
            
            {/* Overview */}
            <div className="max-w-4xl space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0f172a]">
                Project Overview
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="font-display font-bold text-xl text-[#0f172a]">
                Technical Scope & Key Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-200 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Quote CTA Bar */}
            <div className="pt-4 flex justify-start">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#14233c] hover:bg-[#2563eb] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                <span>Request Similar Project Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* FEATURED PROJECTS UNDER (FEATURED PROJECTS CAROUSEL/GRID AT BOTTOM) */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-1">
                  — discover more
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight uppercase">
                  FEATURED PROJECTS
                </h2>
              </div>
              <Link 
                to="/projects" 
                onClick={scrollToTop} 
                className="text-xs font-bold uppercase tracking-wider text-[#2563eb] hover:underline hidden sm:block"
              >
                View All Projects →
              </Link>
            </div>

            {/* 3 Featured Projects Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {featuredProjectsUnder.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.id}`}
                  onClick={scrollToTop}
                  className="bg-white border border-gray-200 overflow-hidden group shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full aspect-[16/10] bg-gray-200 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2 py-0.5 inline-block">
                        {item.category}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#0f172a] group-hover:text-[#2563eb] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center gap-1 text-xs font-bold text-[#2563eb]">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
