"use client";

import { use } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconCode,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconGauge,
  IconLayersDifference,
  IconRocket,
  IconSearch,
  IconSparkles,
  IconShieldCheck,
  IconShoppingCart,
  IconDatabase,
  IconApi,
  IconPalette,
  IconBulb,
  IconCircleCheck,
  IconPlus,
} from "@tabler/icons-react";

const services = {
  "web-development": {
    number: "01",
    label: "Web Development",
    eyebrow: "Digital Experiences",
    title: "Websites that",
    highlight: "move businesses.",
    description:
      "We design and develop fast, modern and conversion-focused websites that turn your digital presence into a powerful business asset.",
    overview:
      "Your website is more than an online brochure. We build digital experiences that communicate your brand, create trust and help turn visitors into customers.",
  },
  "web-application": {
    number: "02",
    label: "Web Applications",
    eyebrow: "Digital Products",
    title: "Applications that",
    highlight: "scale with you.",
    description:
      "We create powerful web applications built around your workflows, customers and long-term business goals.",
    overview:
      "From internal business systems to customer-facing platforms, we build secure and scalable applications designed around the way your business works.",
  },
  "ui-ux-design": {
    number: "03",
    label: "UI / UX Design",
    eyebrow: "Experience Design",
    title: "Interfaces that",
    highlight: "feel effortless.",
    description:
      "We design intuitive digital experiences that make products easier to understand, easier to use and more memorable.",
    overview:
      "We combine research, strategy and visual design to create interfaces that feel natural for users while supporting your business objectives.",
  },
  "digital-solutions": {
    number: "04",
    label: "Digital Solutions",
    eyebrow: "Technology & Strategy",
    title: "Technology with",
    highlight: "a clear purpose.",
    description:
      "We combine strategy, design and technology to solve real business challenges with practical digital solutions.",
    overview:
      "We help businesses identify opportunities, improve digital workflows and implement technology that delivers measurable value.",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "High-impact websites designed to communicate your brand, build trust and generate enquiries.",
    icon: IconDeviceDesktop,
  },
  {
    number: "02",
    title: "Custom Applications",
    description:
      "Scalable applications built around your workflows, customers and business requirements.",
    icon: IconLayersDifference,
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Smooth shopping experiences designed to improve engagement, trust and conversions.",
    icon: IconShoppingCart,
  },
  {
    number: "04",
    title: "Responsive Design",
    description:
      "Polished experiences that work consistently across desktop, tablet and mobile devices.",
    icon: IconDeviceMobile,
  },
  {
    number: "05",
    title: "Performance",
    description:
      "Fast-loading experiences engineered for speed, stability and a better user experience.",
    icon: IconGauge,
  },
  {
    number: "06",
    title: "SEO Architecture",
    description:
      "Clean technical foundations that make your website easier for search engines to understand.",
    icon: IconSearch,
  },
  {
    number: "07",
    title: "API Integration",
    description:
      "Reliable integrations connecting your website or application with external services and platforms.",
    icon: IconApi,
  },
  {
    number: "08",
    title: "Database Systems",
    description:
      "Structured and secure database architecture designed for reliable application performance.",
    icon: IconDatabase,
  },
];

const detailedFeatures = [
  {
    number: "01",
    title: "Strategy & Planning",
    text: "We start by understanding your business, customers, competitors and goals before writing a single line of code.",
    icon: IconBulb,
    points: [
      "Business & audience research",
      "Website architecture",
      "Feature planning",
      "Technical roadmap",
    ],
  },
  {
    number: "02",
    title: "UI & Experience",
    text: "Every screen is designed with clarity, usability and conversion in mind so users know exactly what to do next.",
    icon: IconPalette,
    points: [
      "Modern interface design",
      "Responsive layouts",
      "Conversion-focused sections",
      "Consistent visual system",
    ],
  },
  {
    number: "03",
    title: "Development",
    text: "We turn approved designs into clean, maintainable and scalable digital products using modern technologies.",
    icon: IconCode,
    points: [
      "Clean code architecture",
      "Reusable components",
      "API integrations",
      "Secure development",
    ],
  },
  {
    number: "04",
    title: "Testing & Launch",
    text: "Before launch, we test the experience across devices, browsers and important user journeys.",
    icon: IconRocket,
    points: [
      "Performance testing",
      "Responsive testing",
      "Bug fixing",
      "Production deployment",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, requirements and objectives.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We define the structure, features, technology and project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    text: "We create a clear visual direction and intuitive user experience.",
  },
  {
    number: "04",
    title: "Build",
    text: "Our developers turn the approved experience into a working product.",
  },
  {
    number: "05",
    title: "Test",
    text: "We test functionality, responsiveness, performance and important details.",
  },
  {
    number: "06",
    title: "Launch",
    text: "Your digital product goes live with the foundation needed to grow.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "Tailwind CSS",
  "REST API",
];

const benefits = [
  "Modern and responsive experience",
  "Clean and scalable architecture",
  "Performance-focused development",
  "SEO-friendly technical structure",
  "Secure and maintainable code",
  "Business-focused user experience",
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on the scope, number of pages, functionality and integrations. After understanding your requirements, we provide a clear project timeline.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can redesign an existing website while improving its visual experience, structure, performance, responsiveness and conversion journey.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. We build custom applications around specific business workflows, including dashboards, portals, APIs, management systems and customer-facing platforms.",
  },
  {
    question: "Will the website be mobile responsive?",
    answer:
      "Yes. Every website is designed and developed to provide a consistent experience across mobile, tablet and desktop devices.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate payment gateways, CRM systems, external APIs, authentication services and other business tools based on your requirements.",
  },
];

export default function ServiceDetailsPage({ params }) {
  const { slug } = use(params);
  const service = services[slug] || services["web-development"];

  return (
    <main className="w-full overflow-hidden bg-[#080808]">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <Capabilities />
      <DetailedServices />
      <Benefits />
      <BigStatement />
      <Process />
      <Technology />
      <FAQ />
    </main>
  );
}

function ServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute left-[-220px] top-[120px] h-[450px] w-[450px] rounded-full bg-[#FF5A00]/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#FF9800]/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid min-h-[650px] items-center gap-12 py-10 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="relative z-10 max-w-[820px]">
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#77716A] transition-colors hover:text-[#FF7900]"
            >
              <IconArrowRight
                size={14}
                className="rotate-180"
                stroke={1.7}
              />
              All Services
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FF6500]" />
              <span className="text-[13px] font-bold uppercase tracking-[2.2px] text-[#FF7900]">
                {service.eyebrow}
              </span>
            </div>

            <h1 className=" text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-white sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              {service.title}
              <span className="block bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFB000] bg-clip-text text-transparent">
                {service.highlight}
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-[13px] leading-7 tracking-[0.1px] text-[#8A847D] sm:text-[15px]">
              {service.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-[56px] w-full items-center justify-between rounded-full bg-white px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-[#111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6500] hover:text-white sm:w-[215px]"
              >
                Start A Project

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#111]">
                  <IconArrowUpRight
                    size={15}
                    stroke={1.8}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group flex h-[56px] w-full items-center justify-center gap-3 rounded-full border border-white/[0.1] px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-[#AAA49D] transition-all duration-300 hover:border-[#FF6500]/30 hover:bg-white/[0.03] hover:text-white sm:w-[190px]"
              >
                Explore Work

                <IconArrowUpRight
                  size={15}
                  stroke={1.6}
                  className="text-[#FF6500]"
                />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              <HeroPoint text="Strategy First" />
              <HeroPoint text="Premium Development" />
              <HeroPoint text="Built To Scale" />
            </div>
          </div>

          <div className="relative mx-auto h-[370px] w-full max-w-[530px] lg:h-[480px]">
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05] sm:h-[400px] sm:w-[400px]" />

            <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6500]/15 sm:h-[300px] sm:w-[300px]" />

            <div className="absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF9A00]/20 sm:h-[195px] sm:w-[195px]" />

            <div className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF9A00] shadow-[0_0_80px_rgba(255,90,0,0.28)] sm:h-[100px] sm:w-[100px]">
              <IconCode size={36} stroke={1.2} />
            </div>

            <span className="absolute left-[4%] top-[12%] text-[90px] font-[900] leading-none tracking-[-6px] text-white/[0.035] sm:text-[120px]">
              {service.number}
            </span>

            <HeroFloatingCard
              position="right-0 top-[7%]"
              icon={<IconSparkles size={17} stroke={1.5} />}
              label="Approach"
              value="Strategy First"
            />

            <HeroFloatingCard
              position="bottom-[7%] left-0"
              icon={<IconShieldCheck size={17} stroke={1.5} />}
              label="Development"
              value="Built To Scale"
            />

            <span className="absolute left-[18%] top-[31%] h-2 w-2 rounded-full bg-[#FF7900] shadow-[0_0_15px_#FF7900]" />
            <span className="absolute right-[17%] top-[27%] h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_18px_#FFB000]" />
            <span className="absolute bottom-[25%] right-[8%] h-2 w-2 rounded-full bg-[#FF6500] shadow-[0_0_14px_#FF6500]" />
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#FF6500]/20 to-transparent" />
    </section>
  );
}

function HeroFloatingCard({ position, icon, label, value }) {
  return (
    <div
      className={`absolute ${position} rounded-2xl border border-white/[0.08] bg-[#111]/90 px-4 py-3.5 backdrop-blur-xl`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6500]/10 text-[#FF7900]">
          {icon}
        </span>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[1.3px] text-[#57514B]">
            {label}
          </p>

          <p className="mt-1 text-[14px] font-semibold tracking-[0.1px] text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <IconCheck size={15} stroke={2} className="text-[#FF7200]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.7px] text-[#716B65]">
        {text}
      </span>
    </div>
  );
}

function ServiceOverview({ service }) {
  return (
    <section className="bg-white py-10 sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel text="Service Overview" />

            <h2 className="mt-6  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-black sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              More than a website.
              <span className="block text-[#A09A93]">
                A digital growth engine.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[850px] text-[13px] leading-7 tracking-[0.1px] text-[#625D57] sm:text-[15px]">
              {service.overview}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <OverviewStat
                number="01"
                title="Strategy"
                text="Built around your goals"
              />

              <OverviewStat
                number="02"
                title="Experience"
                text="Designed for real users"
              />

              <OverviewStat
                number="03"
                title="Technology"
                text="Ready for future growth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewStat({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-black/[0.07] bg-[#FAFAF9] p-5">
      <span className="text-[11px] font-bold tracking-[1.3px] text-[#FF6500]">
        {number}
      </span>

      <h3 className="mt-6 text-[18px] font-[900] tracking-[0.4px] text-[#171717]">
        {title}
      </h3>

      <p className="mt-2 text-[13px] leading-[1.6] tracking-[0.05px] text-[#858078]">
        {text}
      </p>
    </div>
  );
}

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#F5F4F2] py-10 sm:py-24 lg:py-20">
      <div className="pointer-events-none absolute right-[-180px] top-[-160px] h-[400px] w-[400px] rounded-full bg-[#FF6500]/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel text="What We Do" dark />

            <h2 className="mt-6 max-w-[700px]  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-[#111] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              Everything your
              <span className="text-[#9B958E]">
                {" "}
                digital presence needs.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-7 tracking-[0.1px] text-[#77716A] sm:text-[15px]">
            From strategy and design to development, integrations and
            optimisation, we handle the important pieces needed to create a
            strong digital product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative min-h-[220px] overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6500]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
              >
                <div className="absolute right-[-30px] top-[-30px] h-[120px] w-[120px] rounded-full bg-[#FF6500]/[0.04] blur-[35px] transition-all group-hover:bg-[#FF6500]/[0.1]" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[1.3px] text-[#FF6500]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F4F2] text-[#77716A] transition-all group-hover:bg-[#111] group-hover:text-[#FF7900]">
                    <Icon size={18} stroke={1.5} />
                  </span>
                </div>

                <div className="relative mt-9">
                  <h3 className="text-[18px] font-[900] tracking-[-0.2px] text-[#191817]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.6] tracking-[0.05px] text-[#858078]">
                    {item.description}
                  </p>
                </div>

                <div className="relative mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#AAA49D]">
                    Capability
                  </span>

                  <IconArrowUpRight
                    size={14}
                    className="text-[#FF6500] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DetailedServices() {
  return (
    <section className="bg-white py-10 sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="mb-12">
          <SectionLabel text="Our Expertise" />

          <h2 className="mt-6 max-w-[800px]  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-[#111] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
            A complete approach
            <span className="text-[#9B958E]">
              {" "}
              from idea to launch.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {detailedFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group grid gap-7 rounded-[24px] border border-black/[0.07] bg-[#FAFAF9] p-6 transition-all duration-300 hover:border-[#FF6500]/20 hover:bg-white sm:p-8 lg:grid-cols-[90px_0.8fr_1fr] lg:gap-12 lg:p-10"
              >
                <div className="flex items-start justify-between lg:block">
                  <span className="text-[12px] font-bold tracking-[1.4px] text-[#FF6500]">
                    {item.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#FF6500] lg:mt-8">
                    <Icon size={21} stroke={1.5} />
                  </span>
                </div>

                <div>
                  <h3 className="text-[25px] font-[900] tracking-[-0.6px] text-[#151515] sm:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[500px] text-[15px] leading-[1.7] tracking-[0.05px] text-[#77716A] sm:text-[16px]">
                    {item.text}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3"
                    >
                      <IconCircleCheck
                        size={17}
                        className="shrink-0 text-[#FF6500]"
                      />

                      <span className="text-[13px] font-semibold tracking-[0.05px] text-[#4D4843]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-[#111] py-10 text-white sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel text="Why Choose Us" />

            <h2 className="mt-6  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-white sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              Built with
              <span className="block text-[#55504B]">
                business in mind.
              </span>
            </h2>

            <p className="mt-6 max-w-[450px] text-[13px] leading-7 tracking-[0.1px] text-[#77716A] sm:text-[15px]">
              We do not build technology for technology's sake. Every decision
              is made with usability, performance, scalability and business
              value in mind.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-[#FF6500]/30 hover:bg-white/[0.04]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6500]/10 text-[#FF7900]">
                  <IconCheck size={17} stroke={2} />
                </span>

                <div>
                  <span className="text-[10px] font-bold tracking-[1.1px] text-[#FF6500]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1 text-[14px] font-semibold leading-[1.5] tracking-[0.05px] text-[#D5D0CA]">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BigStatement() {
  return (
    <section className="bg-[#F1F0EE] py-10 sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-14">
          <SectionLabel text="Our Belief" />

          <div>
            <h2 className="max-w-[1100px]  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-[#171717] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              Technology should make your business
              <span className="text-[#9B958E]">
                {" "}
                clearer, faster and better.
              </span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <StatementPoint text="Purpose-driven design" />
              <StatementPoint text="Clean development" />
              <StatementPoint text="Long-term thinking" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatementPoint({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 rounded-full bg-[#FF6500]" />

      <span className="text-[12px] font-bold uppercase tracking-[0.7px] text-[#77716A]">
        {text}
      </span>
    </div>
  );
}

function Process() {
  return (
    <section className="bg-[#080808] py-10 text-white sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel text="Our Process" />

            <h2 className="mt-6  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-white sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              Simple process.
              <span className="text-[#55504B]"> Strong results.</span>
            </h2>
          </div>

          <p className="max-w-[410px] text-[13px] leading-7 tracking-[0.1px] text-[#6B655F] sm:text-[15px]">
            A structured workflow keeps projects clear, efficient and focused
            on delivering the right outcome.
          </p>
        </div>

        <div className="grid border-t border-white/[0.08] md:grid-cols-3 lg:grid-cols-6">
          {process.map((item, index) => (
            <div
              key={item.number}
              className={`group relative px-0 py-7 md:px-5 md:py-8 ${
                index !== process.length - 1
                  ? "border-b border-white/[0.08] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[1.4px] text-[#FF6500]">
                  {item.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#292622] transition-colors group-hover:bg-[#FF6500]" />
              </div>

              <h3 className="mt-8 text-[19px] font-[800] tracking-[-0.2px] text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.65] tracking-[0.05px] text-[#68625C]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="bg-white py-10 text-[#111] sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionLabel text="Technology" dark />

            <h2 className="mt-6  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-[#111] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              The right stack
              <span className="block text-[#9B958E]">
                for the right job.
              </span>
            </h2>

            <p className="mt-6 max-w-[440px] text-[13px] leading-7 tracking-[0.1px] text-[#77716A] sm:text-[15px]">
              We choose technologies based on performance, maintainability,
              security and what your business actually needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                className="group flex min-h-[105px] flex-col justify-between rounded-2xl border border-black/[0.07] bg-[#FAFAFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6500]/25 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
              >
                <span className="text-[10px] font-bold tracking-[1.1px] text-[#FF6500]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[15px] font-[800] tracking-[-0.1px] text-[#292624] sm:text-[16px]">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-[#F5F4F2] py-10 sm:py-24 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-7 lg:px-10">
        <div className="mb-12 text-center">
          <SectionLabel text="FAQ" dark center />

          <h2 className="mt-6  text-[28px] font-[900] leading-[42px] tracking-[-0.5px] text-[#111] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
            Questions,
            <span className="text-[#9B958E]"> answered.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-black/[0.07] bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="text-[15px] font-[800] tracking-[-0.1px] text-[#191817] sm:text-[17px]">
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F4F2] transition-all group-open:rotate-45 group-open:bg-[#111] group-open:text-white">
                  <IconPlus size={16} stroke={1.8} />
                </span>
              </summary>

              <div className="border-t border-black/[0.06] px-5 pb-6 pt-5 sm:px-7">
                <p className="max-w-[850px] text-[13px] leading-7 tracking-[0.1px] text-[#77716A] sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ text, dark = false, center = false }) {
  return (
    <div
      className={`flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-9 bg-[#FF6500]" />

      <span
        className={`text-[12px] font-bold uppercase tracking-[2px] ${
          dark ? "text-[#FF6500]" : "text-[#FF7900]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}