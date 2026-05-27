import heroImg from "@/assets/hero-construction.jpg";
import bridgeImg from "@/assets/project-bridge-real.jpg";
import roadRealImg from "@/assets/project-road-real.webp";
import towerImg from "@/assets/project-tower.jpg";
import fabImg from "@/assets/project-fabrication.jpg";
import roadImg from "@/assets/project-road.jpg";
import ceoImg from "@/assets/team-ceo.webp";
import ctoImg from "@/assets/team-cto.png";
import architectImg from "@/assets/team-architect.webp";

export const ENGINEERING_SERVICES = [
  { title: "Civil Engineering", body: "Offering comprehensive solutions in site planning, structural design, road design, drainage systems, and site development." },
  { title: "Mechanical Engineering", body: "Providing expertise in HVAC systems design, plumbing systems, fire protection systems, energy efficiency assessments, and equipment selection." },
  { title: "Electrical Engineering", body: "Delivering solutions in power distribution, lighting design, electrical wiring, emergency backup systems, and energy management." },
  { title: "Structural Engineering", body: "Specializing in structural analysis, reinforcement detailing, seismic analysis, foundation design, and structural inspections." },
  { title: "Environmental Engineering", body: "Offering services in environmental impact assessments, pollution control, waste management, and sustainable design consulting." },
  { title: "Geotechnical Engineering", body: "Providing expertise in soil testing, foundation design, slope stability analysis, ground improvement, and earthquake engineering." },
  { title: "Project Management", body: "Offering project planning, budgeting, procurement, risk management, quality assurance, and consulting services." },
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

export const IMPORT_SERVICES = [
  { title: "Sourcing", body: "Identifying and procuring high-quality materials, equipment, and products from international suppliers." },
  { title: "Logistics", body: "Managing the logistics and transportation of imported goods, including customs clearance, freight forwarding, and delivery." },
  { title: "Compliance", body: "Ensuring compliance with import regulations, tariffs, and documentation requirements." },
  { title: "Quality Assurance", body: "Conducting quality inspections and quality control measures to verify the integrity and conformity of imported products." },
];

export const EXPORT_SERVICES = [
  { title: "Market Research", body: "Conducting market research and analysis to identify potential export markets and opportunities." },
  { title: "Marketing & Promotion", body: "Developing marketing strategies and promotional campaigns to showcase products to international buyers." },
  { title: "Export Documentation", body: "Managing export documentation, including licenses, certificates of origin, and shipping documents." },
  { title: "Logistics", body: "Coordinating packaging, labeling, freight forwarding, and delivery to the destination country." },
  { title: "Trade Financing", body: "Providing trade financing solutions, such as letters of credit and export credit insurance." },
  { title: "Export Compliance", body: "Ensuring compliance with export control laws, regulations, and sanctions." },
];

export const PROJECTS = [
  { id: "01", name: "Federal Road Asphalt Works", location: "Ogun State", year: "2024", img: roadRealImg, tag: "Civil" },
  { id: "02", name: "River Bridge Foundation Works", location: "Northern Nigeria", year: "2023", img: bridgeImg, tag: "Structural" },
  { id: "03", name: "Vertical Civic Tower", location: "Abuja", year: "2024", img: towerImg, tag: "Structural" },
  { id: "04", name: "Heavy Steel Fabrication", location: "Port Harcourt", year: "2023", img: fabImg, tag: "Allied Works" },
  { id: "05", name: "Federal Interchange", location: "Kubwa, AMAC", year: "2024", img: roadImg, tag: "Civil" },
];

export const TEAM = [
  { name: "ENGR Destiny Akhatasebhudo", role: "Chief Executive Officer", img: ceoImg },
  { name: "ENGR Odion Julian Akhatasebhudo", role: "Chief Operating Officer", img: architectImg },
  { name: "ARCH Ekpen Josephus Akhatasebhudo", role: "Chief Architect", img: ctoImg },
];

export { heroImg };
