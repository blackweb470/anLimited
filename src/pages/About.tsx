import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-ink text-canvas flex flex-col justify-center w-full min-h-screen items-center">
      <SEO 
        title="About Us | Engineering & Real Estate Leaders" 
        description="Learn about our mission and vision. We are a trusted partner in Nigeria for infrastructure development, fabrication, and international logistics."
      />
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        <div>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[1.1] tracking-tight break-words mb-8">
            About Us.
          </h2>
          <div className="flex flex-col gap-6 text-sm md:text-body opacity-90 leading-relaxed max-w-2xl">
            <p>
              Akhatasebhudo Nigeria Limited is a dynamic and versatile company dedicated to providing exceptional engineering services, allied works, imports, exports, and contract services to clients and customers across Nigeria.
            </p>
            <p>
              With a commitment to excellence, innovation, and reliability, we have established ourselves as a trusted partner in the industry, delivering tailored solutions to meet the diverse needs of our clients. Our engineering services encompass a wide range of disciplines, including civil, mechanical, electrical, and structural engineering. From concept design to project completion, our team of skilled engineers and technicians leverage their expertise to deliver high-quality and cost-effective solutions for infrastructure development, construction projects, and industrial installations.
            </p>
            <p>
              In addition to core engineering services, we specialize in allied works such as fabrication, welding, machining, and maintenance services. Our state-of-the-art facilities and advanced equipment enable us to undertake complex fabrication projects, repair works, and precision machining with precision and efficiency.
            </p>
            <p>
              As a global trading company, we facilitate imports and exports of a diverse range of products, including machinery, equipment, spare parts, and raw materials. Leveraging our extensive network of suppliers and partners worldwide, we ensure seamless transactions and timely delivery of goods to meet our clients' requirements. We offer contract services in various sectors, including construction, manufacturing, and infrastructure development.
            </p>
            <p>
              With a strong focus on customer satisfaction, quality assurance, and adherence to industry standards, Akhatasebhudo Nigeria Limited is poised to continue its growth trajectory, cementing its position as a leader in engineering services, allied works, imports, exports, and contract services in Nigeria and beyond.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-canvas/20 pt-12 lg:pt-0 lg:pl-12 xl:pl-24 gap-12">
          
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-4">Our Mission.</h3>
            <p className="text-sm md:text-body opacity-80 leading-relaxed italic">
              "Our mission at Akhatasebhudo Nigeria Limited is to deliver excellence in engineering services, allied works, imports, exports, and contract services, surpassing client expectations through innovative solutions, unwavering integrity, and a commitment to sustainable development. We strive to be a trusted partner, driving positive change and contributing to the growth and prosperity of our clients, employees, and communities."
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-4">Our Vision.</h3>
            <p className="text-sm md:text-body opacity-80 leading-relaxed italic">
              "Our vision at Akhatasebhudo Nigeria Limited is to be recognized as a premier provider of engineering services, allied works, imports, exports, and contract services, renowned for our dedication to quality, innovation, and customer satisfaction. We aspire to expand our presence nationally and internationally, forging lasting partnerships and making a positive impact on the industries we serve and the communities in which we operate."
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-arched-red mb-4">Our Values.</h3>
            <p className="text-sm md:text-body opacity-80 leading-relaxed italic">
              "Akhatasebhudo Nigeria Limited upholds values of excellence, integrity, innovation, collaboration, sustainability, customer focus, and empowerment. Committed to delivering exceptional service, the company emphasizes high standards, ethical conduct, continuous improvement, and teamwork. It prioritizes environmental stewardship, customer satisfaction, and employee development while fostering open communication and mutual respect. We aim to exceed expectations through tailored solutions, embracing creativity and empowering its workforce. These core values define the company's identity and guide its dedication to excellence."
            </p>
          </div>

          <div className="pt-8">
            <Link
              to="/services"
              className="inline-block border border-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-canvas hover:text-ink transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
