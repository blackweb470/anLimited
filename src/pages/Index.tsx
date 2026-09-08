import SEO from "@/components/SEO";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HeroSlideshow from "@/components/HeroSlideshow";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";

const Index = () => {
  return (
    <>
      <SEO 
        title="Top Engineering & Construction Firm in Nigeria" 
        description="Akhatasebhudo Nigeria Limited delivers world-class civil, mechanical, and structural engineering services across Nigeria."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Akhatasebhudo Nigeria Limited",
          "url": "https://www.akhatasebhudoltd.com",
          "description": "Top construction, real estate development, and engineering company in Nigeria."
        }}
      />
      
      {/* 5-IMAGE HERO SLIDESHOW SECTION */}
      <HeroSlideshow />

      {/* CAPABILITIES & ESSENTIAL SKILLS SECTION */}
      <CapabilitiesSection />

      {/* WHAT WE BUILD / OUR DIVISIONS SECTION */}
      <WhatWeBuildSection />

      {/* FEATURED PROJECTS SLIDER (DARK HORIZONTAL CAROUSEL FROM SCREENSHOT) */}
      <FeaturedProjectsSection />
    </>
  );
};

export default Index;
