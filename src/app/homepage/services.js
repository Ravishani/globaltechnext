"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconChartBar,
  IconWorld,
  IconCloud,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

const services = [
  {
    number: "01",
    icon: IconCode,
    title: "Web Development",
    description:
      "High-performance websites and web applications engineered for speed, scalability and business growth.",
    features: ["Custom Development", "Laravel & PHP", "React & Next.js"],
  },
  {
    number: "02",
    icon: IconDeviceMobile,
    title: "Mobile App Development",
    description:
      "Powerful mobile experiences designed to connect your brand with customers across Android and iOS.",
    features: ["Android & iOS", "Cross-Platform Apps", "API Integration"],
  },
  {
    number: "03",
    icon: IconPalette,
    title: "UI/UX Design",
    description:
      "Modern interfaces and thoughtful experiences designed to make every digital interaction simple and memorable.",
    features: ["UI Design", "UX Strategy", "Design Systems"],
  },
  {
    number: "04",
    icon: IconChartBar,
    title: "Digital Marketing",
    description:
      "Data-driven strategies designed to increase visibility, generate quality leads and accelerate online growth.",
    features: ["SEO", "Social Media", "Lead Generation"],
  },
  {
    number: "05",
    icon: IconWorld,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores built to deliver smooth shopping experiences and turn visitors into loyal customers.",
    features: ["Online Stores", "Payment Gateway", "Order Management"],
  },
  {
    number: "06",
    icon: IconCloud,
    title: "Cloud & Technology",
    description:
      "Secure and scalable technology solutions that keep your digital infrastructure reliable and ready for growth.",
    features: ["Cloud Solutions", "API Integration", "Technical Support"],
  },
];

export default function Services() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#070707] py-10 sm:py-24 lg:py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-220px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#FF4D00]/[0.08] blur-[120px] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute right-[-220px] top-[18%] h-[450px] w-[450px] rounded-full bg-[#FF8A00]/[0.07] blur-[130px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#FFB000]/[0.045] blur-[130px]" />

        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border border-[#FF6500]/[0.08] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute right-[-70px] top-[-70px] h-[300px] w-[300px] rounded-full border border-[#FFB000]/[0.06] sm:h-[430px] sm:w-[430px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:80px_80px]" />
      </div>

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6500] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6500]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[2.2px] text-[#A29C94] sm:text-[10px] sm:tracking-[2.5px]">
              Our Expertise
            </span>
          </div>

          <h2 className="text-[35px] font-[900] leading-[42px] tracking-[-0.5px] text-white sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
            We Build Digital
            <span className="block">
              <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFB000] bg-clip-text text-transparent">
                Experiences That Matter.
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[13px] leading-6 tracking-[0.1px] text-[#918B83] sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-7">
            From strategy and design to development and growth, we combine
            creativity, technology and business thinking to build digital
            solutions that move brands forward.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6500]/30 hover:bg-white/[0.055] hover:shadow-[0_25px_80px_rgba(255,80,0,0.10)] sm:p-7 lg:p-8"
              >
                <div className="absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full bg-[#FF6500]/[0.05] blur-[55px] transition-all duration-500 group-hover:bg-[#FF6500]/[0.13]" />

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FF4D00] to-[#FFB000] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#FF6500]/20 bg-[#FF6500]/[0.07] text-[#FF7900] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#FF4D00] group-hover:to-[#FF8A00] group-hover:text-white group-hover:shadow-[0_10px_35px_rgba(255,86,0,0.25)]">
                      <Icon size={22} stroke={1.5} />
                    </div>

                    <span className="text-[11px] font-bold tracking-[1.1px] text-[#4D4A46] transition-colors duration-300 group-hover:text-[#FF6500]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[21px] font-[850] leading-7 tracking-[1px] text-white sm:text-[23px] sm:leading-8">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-[13px] leading-6 tracking-[0.1px] text-[#858078] sm:text-[14px] sm:leading-7">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF6500]/10">
                          <IconCheck
                            size={10}
                            stroke={2.5}
                            className="text-[#FF7900]"
                          />
                        </span>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.8px] text-[#77716A]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#625E58] transition-colors duration-300 group-hover:text-[#FF7900]">
                      Explore Service
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[#8D8880] transition-all duration-300 group-hover:border-[#FF6500]/30 group-hover:bg-[#FF6500] group-hover:text-white">
                      <IconArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-r from-white/[0.045] to-white/[0.02] px-6 py-7 backdrop-blur-xl sm:mt-14 sm:px-8 sm:py-8 lg:px-10">
          <div className="absolute right-[-100px] top-[-120px] h-[250px] w-[250px] rounded-full bg-[#FF6500]/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF6500]/20 bg-[#FF6500]/10 text-[#FF7900] sm:flex">
                <IconSparkles size={20} stroke={1.4} />
              </div>

              <div>
                <p className="text-[18px] font-[850] leading-7 tracking-[-0.3px] text-white sm:text-[20px] sm:leading-8">
                  Have a project in mind?
                </p>

                <p className="mt-1.5 max-w-[550px] text-[13px] leading-6 tracking-[0.1px] text-[#77716A] sm:text-[14px] sm:leading-6">
                  Let's transform your idea into a digital experience that
                  makes an impact.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex h-[50px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] px-6 text-[10px] font-bold uppercase tracking-[1.3px] text-white shadow-[0_15px_40px_rgba(255,86,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,86,0,0.30)] sm:w-auto sm:px-7"
            >
              Start Your Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#151515] transition-transform duration-300 group-hover:rotate-45">
                <IconArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6500]/40 to-transparent" />
    </section>
  );
}