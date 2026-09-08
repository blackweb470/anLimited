import { useState } from "react";

const TAB_DATA = {
  mission: {
    label: "Mission",
    paragraphs: [
      "To deliver world-class construction solutions through disciplined execution, innovative technologies, technical excellence, and exceptional service, while building lasting value for our clients, partners, people, and communities."
    ]
  },
  vision: {
    label: "Vision",
    paragraphs: [
      "To position AN LIMITED as a globally respected leader in construction, recognized for excellence, innovation, integrity, and the delivery of lasting value."
    ]
  },
  "core-competency": {
    label: "Core Competency",
    paragraphs: [
      "AN LIMITED combines technical expertise, disciplined project management, innovative construction methods, quality assurance, strategic resource management, and strong client relationships to deliver exceptional construction solutions and lasting value."
    ]
  },
  "essential-skills": {
    label: "Essential Skills",
    paragraphs: [
      "Since our inception, we have built a network of affiliate divisions that have helped us establish ourselves as a preferred contractor.",
      "We continue to take on numerous complex and innovative projects while constantly improving our capabilities in design and construction solutions, project management, and engineering activities."
    ]
  }
};

export const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_DATA>("essential-skills");

  return (
    <section className="w-full bg-[#ECF1F7] text-[#132035] font-sans relative overflow-hidden my-0">
      
      {/* Crane Hook Hanging from Top Right */}
      <div className="absolute top-0 right-2 sm:right-6 md:right-12 w-24 sm:w-32 md:w-40 lg:w-48 z-20 pointer-events-none drop-shadow-lg">
        <img 
          src="/crane-hook.jpg" 
          alt="3D Construction Crane Hook" 
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[500px] md:min-h-[600px] lg:min-h-[650px] items-stretch">
        
        {/* Left Column: Full-Height Flush Engineer Blueprint Image */}
        <div className="lg:col-span-5 w-full relative min-h-[400px] lg:min-h-[650px]">
          <img 
            src="/new-blueprint-engineer.jpg" 
            alt="Engineer holding blueprints outdoors" 
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Right Column: Content Container */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16 lg:py-20 relative z-10">
          
          {/* Filter Pills Header */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-10 md:mb-14 pr-20 sm:pr-32">
            {(Object.keys(TAB_DATA) as Array<keyof typeof TAB_DATA>).map((tabKey) => {
              const tab = TAB_DATA[tabKey];
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[#2052c0] text-white shadow-md scale-102" 
                      : "bg-white text-gray-500 hover:text-[#132035] hover:bg-gray-50 shadow-xs"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Text Content */}
          <div className="space-y-8 sm:space-y-10 max-w-4xl pr-2 sm:pr-6">
            {TAB_DATA[activeTab].paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#132035] leading-[1.22] tracking-tight"
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
