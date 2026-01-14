// Services Data
const servicesData = [
  {
    title: "SEO Service",
    description:
      "Improve Google rankings and gain consistent, long-term traffic.",
    image: "seo",
    bgColor: "bg-[#F0F7FF]",
    active: true,
  },
  {
    title: "Web Design",
    description: "Create websites that convert visitors into customers.",
    image: "web-design",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Facebook Ads",
    description:
      "Connect with your target audience on their preferred platforms.",
    image: "FacebookAds",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Google Ads",
    description: "Reach customers actively searching for your services.",
    image: "GoogleAds",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Content Writing",
    description:
      "Build trust and improve Google rankings with compelling content.",
    image: "ContentWriting",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Branding",
    description: "Differentiate your business and build customer loyalty.",
    image: "branding",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "UI/UX Design",
    description: "Design user experiences that increase conversions.",
    image: "ui-ux",
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Graphic Design",
    description:
      "Develop professional visuals to enhance trust and credibility.",
    image: "GraphicDesign",
    bgColor: "bg-[#F0F7FF]",
  },
];

// why choose data
const whyChooseData = [
  {
    title: "Expert-Led by a Proven SEO Specialist",
    description:
      "Khan IT is founded and led by Md Faruk Khan, a certified SEO expert with over 10 years of experience and more than 8,000 trained professionals.",
    image: "chose1",
    iconBg: "bg-blue-800",
    number: "1",
    active: true,
  },
  {
    title: "Specialized in What Works",
    description:
      "We specialize in digital marketing and web design. This focus enables faster delivery, higher quality, and stronger ROI.",
    image: "chose2",
    iconBg: "bg-blue-800",
    number: "2",
  },
  {
    title: "Transparent Pricing",
    description:
      "You will always know exactly what you are paying for, with clear pricing, no hidden fees, and flexible packages.",
    image: "chose3",
    iconBg: "bg-blue-800",
    number: "3",
  },
  {
    title: "Proven, Measurable Results",
    description:
      "Our clients experience an average 150% increase in inquiries and a higher conversion rate with a 4.8/5 satisfaction rating.",
    image: "chose4",
    iconBg: "bg-blue-800",
    number: "4",
  },
  {
    title: "AI-First, Data-Driven Approach",
    description:
      "We utilize AI and real-world data to inform marketing decisions. Every campaign is meticulously designed.",
    image: "chose5",
    iconBg: "bg-blue-800",
    number: "5",
  },
  {
    title: "Full-Stack Digital Marketing",
    description:
      "Our SEO, advertising, content, design, and branding services work together as a cohesive system.",
    image: "chose6",
    iconBg: "bg-blue-800",
    number: "6",
  },
];

// ***********************
// render in services card
// ***********************
const serviceContainer = document.getElementById("services");

serviceContainer.innerHTML = servicesData
  .map((service) => {
    return `
      <div class="${
        service.active ? "!border-[#0271E8]" : "border-[#E8EAED]"
      } service-card border ">

        <img src="assets/images/services/${service.image}.png" alt="${
      service.title
    }" />

        <h2 class="font-dm-sans mt-6 mb-3 text-[#060606] leading-[30px] text-2xl font-semibold">
          ${service.title}
        </h2>

        <p class="sub-title text-base">
          ${service.description}
        </p>
      </div>
    `;
  })
  .join("");
 
// *************************
// Render Why Choose Us Card
// *************************
const whyChooseContainer = document.getElementById("why-choose-us-grid");

whyChooseContainer.innerHTML = whyChooseData
  .map((whyChoose) => {
    return `
      <div class="${
        whyChoose.active
          ? "border-[#0271E8]/70 bg-[#3399FF]/10"
          : "border-[#F8FAFC]/10"
      } bg-[#3399FF]/5 hover:bg-[#3399FF]/10 hover:border-[#0271E8]/70 px-6 py-9 rounded-[20px] shadow-sm border transition-all duration-300 cursor-pointer flex flex-col">

       <div class="bg-[#0271E8]/15 rounded-[12px] size-[56px] flex items-center justify-center">
       
       <img src="assets/images/chose-us/${whyChoose.image}.png" alt="${
      whyChoose.title
    }" >
       </div>
      

        <h2 class="mt-6 mb-3 text-white leading-[30px] text-2xl font-semibold">
          ${whyChoose.title}
        </h2>

        <p class="text-[#CBD5E1] font-extralight leading-[150%] text-base">
          ${whyChoose.description}
        </p>
      </div>
    `;
  })
  .join("");


