import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <section className="py-20 md:py-32 bg-ink text-canvas flex justify-center w-full min-h-screen items-center">
      <SEO 
        title="Contact Us | Let's Break New Ground Together" 
        description="Partner with industry leaders for your next big project. Reach our Abuja office for engineering, fabrication, and international trade inquiries."
      />
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] leading-[1.1] tracking-tight mb-8 md:mb-12 break-words">
            Let’s Break<br />New Ground<br />Together
          </h2>
          <p className="text-body md:text-heading-sm font-medium opacity-90 mb-12 md:mb-16 max-w-xl">
            Take the first step towards outstanding results. Partner with industry leaders for your next big project.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h4 className="text-xs md:text-caption font-bold uppercase tracking-widest text-arched-red mb-3 md:mb-4">Office</h4>
              <p className="text-sm md:text-body leading-relaxed opacity-90">
                No.7, Emeka Udeh Street,<br />
                FO1 Kubwa, Abuja, AMAC,<br />
                Nigeria.
              </p>
            </div>
            <div>
              <h4 className="text-xs md:text-caption font-bold uppercase tracking-widest text-arched-red mb-3 md:mb-4">Contact</h4>
              <p className="text-sm md:text-body leading-relaxed opacity-90 flex flex-col gap-2">
                <a href="tel:+2348030967184" className="hover:text-arched-red transition-colors">+234 803 096 7184</a>
                <a href="tel:+2347059053613" className="hover:text-arched-red transition-colors">+234 705 905 3613</a>
                <a href="mailto:Duisd@yahoo.com" className="hover:text-arched-red transition-colors">Duisd@yahoo.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-canvas text-ink p-8 md:p-10 lg:p-16">
          <div className="text-xs md:text-caption font-bold uppercase tracking-widest mb-8 md:mb-12">Send a message</div>
          <form
            action="https://formsubmit.co/Duisd@yahoo.com"
            method="POST"
            className="flex flex-col gap-8 md:gap-10"
          >
            <input type="hidden" name="_subject" value="New Enquiry from Website" />
            <input type="hidden" name="_template" value="box" />

            <div className="flex flex-col gap-2 md:gap-3">
              <label htmlFor="name" className="text-xs md:text-caption font-bold uppercase tracking-widest opacity-60">Name</label>
              <input type="text" id="name" name="name" required className="bg-transparent border-b-2 border-ink/20 focus:border-ink pb-3 md:pb-4 outline-none transition-colors text-body md:text-heading-sm" />
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label htmlFor="email" className="text-xs md:text-caption font-bold uppercase tracking-widest opacity-60">Email & Contact Info</label>
              <input type="text" id="email" name="email" required className="bg-transparent border-b-2 border-ink/20 focus:border-ink pb-3 md:pb-4 outline-none transition-colors text-body md:text-heading-sm" />
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label htmlFor="message" className="text-xs md:text-caption font-bold uppercase tracking-widest opacity-60">Message</label>
              <textarea id="message" name="message" rows={3} required className="bg-transparent border-b-2 border-ink/20 focus:border-ink pb-3 md:pb-4 outline-none transition-colors text-body md:text-heading-sm resize-none"></textarea>
            </div>
            
            <div className="mt-6 md:mt-8">
              <button type="submit" className="bg-ink text-canvas px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-caption font-bold hover:bg-arched-red transition-colors w-full sm:w-auto text-center cursor-pointer">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
