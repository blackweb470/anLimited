import { Link } from "react-router-dom";
import { heroImg } from "@/lib/data";

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 md:pt-40 lg:pt-56 pb-12 md:pb-16 flex justify-center w-full">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl">
            <h1 className="font-display font-bold text-[14vw] sm:text-[12vw] md:text-display-xl lg:text-display-xxl leading-[0.9] reveal mb-8 md:mb-10 tracking-tighter">
              We build
              <br />
              <span className="text-arched-red">Nigeria.</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-block bg-ink text-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-arched-red transition-colors"
              >
                View Our Projects
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-ink text-ink px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-ink hover:text-canvas transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <img
            src={heroImg}
            alt="Bold concrete and red steel construction"
            className="w-full h-[50vh] md:h-[60vh] lg:h-[85vh] object-cover"
          />
        </div>
      </div>

      {/* INTRO SUMMARY / WHO WE ARE */}
      <section className="py-20 md:py-32 flex justify-center w-full bg-secondary">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
            Who We Are.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-body md:text-heading-sm opacity-80 leading-relaxed font-medium">
              Akhatasebhudo Nigeria Limited is a dynamic engineering, real estate, and trading company dedicated to delivering exceptional services across Nigeria and beyond. With expertise spanning civil, mechanical, electrical, and structural engineering; real estate development; fabrication; imports and exports; and contract services, we bring technical excellence and unwavering integrity to every project.
            </p>
            <p className="text-sm md:text-body opacity-80 leading-relaxed font-medium">
              We are more than a service provider. We are a trusted partner, committed to innovative solutions, sustainable development, and the growth of our clients, employees, and communities.
            </p>
            <div className="mt-4">
              <Link to="/about" className="text-arched-red font-bold text-xs md:text-caption tracking-widest uppercase hover:underline">Read Our Story &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
