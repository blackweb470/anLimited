import heroImg from "@/assets/hero-construction.jpg";
import bridgeImg from "@/assets/project-bridge-real.jpg";
import roadRealImg from "@/assets/project-road-real.webp";
import towerImg from "@/assets/project-tower.jpg";
import fabImg from "@/assets/project-fabrication.jpg";
import roadImg from "@/assets/project-road.jpg";
import ceoImg from "@/assets/team-ceo-new.jpg";
import ctoImg from "@/assets/team-cto.png";
import architectImg from "@/assets/team-architect.webp";

export const ENGINEERING_SERVICES = [
  { title: "Architectural Drawing & Design", body: "Delivering complete 2D/3D architectural floor plans, building elevation drawings, spatial planning, BIM modeling, and master development blueprints." },
  { title: "Structural Engineering & Detailing", body: "Specializing in structural load analysis, reinforced concrete drawings, steel framework detailing, foundation plans, and structural integrity assessments." },
  { title: "Electrical Engineering Drafting", body: "Designing full electrical schematics, power distribution layouts, indoor/outdoor lighting blueprints, wiring diagrams, and emergency backup systems." },
  { title: "Mechanical (MEP) Drawing & Design", body: "Providing detailed HVAC ductwork layouts, plumbing system drawings, fire protection schematics, mechanical piping, and equipment placement drafting." },
  { title: "Civil Engineering", body: "Offering comprehensive solutions in site planning, highway infrastructure design, drainage network engineering, and heavy site development." },
  { title: "Project Management & Consulting", body: "Providing turnkey project planning, CAD supervision, site quality control, risk management, and regulatory compliance approval." },
];

export const ALLIED_WORKS = [
  { title: "Fabrication Services", body: "Offering fabrication solutions for metal structures, components, and equipment to meet specific industry needs." },
  { title: "Welding Services", body: "Providing welding expertise for joining metal components, fabrication assembly, repair works, and customization." },
  { title: "Machining Services", body: "Delivering precision machining solutions for metal parts, components, and prototypes using CNC, milling, and turning techniques." },
  { title: "Maintenance Services", body: "Offering maintenance and repair services for machinery, equipment, and industrial installations." },
  { title: "Customization Services", body: "Providing customized solutions for specialized equipment, machinery modifications, and fabrication projects." },
  { title: "Installation & Commissioning", body: "Assisting clients with the installation, setup, and commissioning of equipment, machinery, and industrial systems." },
  { title: "Repair & Refurbishment", body: "Offering repair and refurbishment services for worn-out or damaged equipment, machinery, and structures." },
];

export const PROJECTS = [
  { id: "01", name: "River Park Cluster 3 (20 Units 5-Bed Duplexes)", location: "Lugbe River Park Cluster 3, Abuja", year: "2024", img: "/images/river_park_cluster3.jpg", tag: "Architectural & Civil" },
  { id: "02", name: "Lugbe River Park 12-Unit 5-Bedroom Duplex Estate", location: "Lugbe River Park, Abuja", year: "2024", img: "/images/NOOP8356.JPG", tag: "Architectural & Civil" },
  { id: "03", name: "Aso Drive 1 Townhouse & 3 Terraces", location: "Aso Drive, Abuja", year: "2024", img: "/images/VCTJ4118.JPG", tag: "Structural" },
  { id: "04", name: "Federal Road Asphalt Works", location: "Ogun State", year: "2024", img: roadRealImg, tag: "Civil" },
  { id: "05", name: "River Bridge Foundation Works", location: "Northern Nigeria", year: "2023", img: bridgeImg, tag: "Structural" },
  { id: "06", name: "Vertical Civic Tower", location: "Abuja", year: "2024", img: towerImg, tag: "Structural" },
  { id: "07", name: "Heavy Steel Fabrication", location: "Port Harcourt", year: "2023", img: fabImg, tag: "Allied Works" },
  { id: "08", name: "Federal Interchange", location: "Kubwa, AMAC", year: "2024", img: roadImg, tag: "Civil" },
];

export const TEAM = [
  { name: "ENGR Destiny Akhatasebhudo", role: "Chief Executive Officer", img: ceoImg },
  // { name: "ENGR Odion Julian Akhatasebhudo", role: "Chief Operating Officer", img: architectImg },
  // { name: "Ekpen Josephus Akhatasebhudo ARCH", role: "Chief Architect", img: ctoImg },
];

export { heroImg };
