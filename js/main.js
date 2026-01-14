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
    description: "Khan IT is founded and led by Md Faruk Khan, a certified SEO expert with over 10 years of experience and more than 8,000 trained professionals.",
    icon: "user-tie",           // good Font Awesome suggestion
    iconBg: "bg-blue-800",
    number: "1"
  },
  {
    title: "Specialized in What Works",
    description: "We specialize in digital marketing and web design. This focus enables faster delivery, higher quality, and stronger ROI.",
    icon: "gears",
    iconBg: "bg-blue-800",
    number: "2"
  },
  {
    title: "Transparent Pricing",
    description: "You will always know exactly what you are paying for, with clear pricing, no hidden fees, and flexible packages.",
    icon: "hand-holding-dollar",
    iconBg: "bg-blue-800",
    number: "3"
  },
  {
    title: "Proven, Measurable Results",
    description: "Our clients experience an average 150% increase in inquiries and a higher conversion rate with a 4.8/5 satisfaction rating.",
    icon: "chart-line",
    iconBg: "bg-blue-800",
    number: "4"
  },
  {
    title: "AI-First, Data-Driven Approach",
    description: "We utilize AI and real-world data to inform marketing decisions. Every campaign is meticulously designed.",
    icon: "brain",
    iconBg: "bg-blue-800",
    number: "5"
  },
  {
    title: "Full-Stack Digital Marketing",
    description: "Our SEO, advertising, content, design, and branding services work together as a cohesive system.",
    icon: "layer-group",
    iconBg: "bg-blue-800",
    number: "6"
  }
];

// Create Service Card
const serviceContainer = document.getElementById("services");
function createServiceCard(service) {
  const card = document.createElement("div");
  card.classList.add("service-card");
  card.innerHTML = `
    <div class="${
      service.active ? "border-[#0271E8]/70 bg-[#F0F7FF]" : "border-[#E8EAED]"
    } shadow-sm hover:bg-[#F0F7FF] border hover:border-[#0271E8]/70  p-6 rounded-[20px]  text-[#0271E8] transition-all duration-300 cursor-pointer">
        <img src="assets/images/services/${service.image}.png" alt="${service.title}" />
            <h2 class="font-dm-sans mt-6 mb-3 text-[#060606] leading-[30px] text-2xl font-semibold">
                ${service.title}
            </h2>
            <p class="sub-title text-base">
                ${service.description}
            </p>
    </div>
  `;
  return card;
}

// Render services
servicesData.forEach((service) => {
  const card = createServiceCard(service);
  serviceContainer.appendChild(card);
});

// Create Why Choose Us Card
const whyChooseContainer = document.getElementById("why-choose-us-grid");
function createWhyChooseCard(whyChoose) {
  const card = document.createElement("div");
  card.classList.add("why-choose-card");
  card.innerHTML = `
    <div class="${
      whyChoose.active ? "border-[#0271E8]/70 bg-[#F0F7FF]" : "border-[#E8EAED]"
    } shadow-sm hover:bg-[#F0F7FF] border hover:border-[#0271E8]/70  p-6 rounded-[20px]  text-[#0271E8] transition-all duration-300 cursor-pointer">
        <img src="assets/images/why-choose-us/${whyChoose.icon}.png" alt="${whyChoose.title}" />
            <h2 class="font-dm-sans mt-6 mb-3 text-[#060606] leading-[30px] text-2xl font-semibold">
                ${whyChoose.title}
            </h2>
            <p class="sub-title text-base">
                ${whyChoose.description}
            </p>
    </div>
  `;
  return card;
}

// Render why choose us
whyChooseData.forEach((whyChoose) => {
  const card = createWhyChooseCard(whyChoose);
  whyChooseContainer.appendChild(card);
});
