"use client";

import {
  IconArrowUpRight,
  IconBulb,
  IconCode,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";

const reasons = [
  {
    number: "01",
    icon: IconBulb,
    title: "Strategy First",
    description:
      "Clear thinking and direction before design or development begins.",
  },
  {
    number: "02",
    icon: IconTargetArrow,
    title: "Purposeful Design",
    description:
      "Simple, engaging experiences designed around real users and goals.",
  },
  {
    number: "03",
    icon: IconCode,
    title: "Scalable Technology",
    description:
      "Modern solutions built for performance, flexibility and growth.",
  },
  {
    number: "04",
    icon: IconUsers,
    title: "Growth Focused",
    description:
      "Long-term digital thinking that keeps your business moving forward.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#090909] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[450px] w-[450px] rounded-full bg-[#FF6500]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-[180px] -left-[150px] h-[350px] w-[350px] rounded-full bg-[#FF9A00]/[0.025] blur-[110px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14 xl:gap-20">
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#FF6500]" />

              <span className="text-[8px] font-bold uppercase tracking-[2.4px] text-[#FF7900] sm:text-[9px] sm:tracking-[2.8px]">
                Why GlobalTechNext
              </span>
            </div>

            <h2 className="mt-6 max-w-[470px] text-[36px] font-[900] leading-[40px] tracking-[-1.8px] text-white sm:text-[46px] sm:leading-[49px] sm:tracking-[-2.2px] lg:text-[52px] lg:leading-[55px] xl:text-[58px] xl:leading-[61px]">
              Built to make
              <span className="block text-[#77716A]">
                a difference.
              </span>

              <span className="block">
                Designed to{" "}
                <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFAA00] bg-clip-text text-transparent">
                  grow.
                </span>
              </span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[11px] leading-[20px] text-[#A8A39C] sm:text-[12px] sm:leading-[22px]">
              We combine strategy, creativity and technology to turn complex
              business challenges into meaningful digital experiences.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/[0.16]" />

              <span className="text-[7px] font-bold uppercase tracking-[1.7px] text-[#68625B]">
                Think · Innovate · Grow
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[1.8px] text-white">
                  Our Difference
                </span>

                <span className="ml-3 text-[7px] uppercase tracking-[1px] text-[#5C5751]">
                  / 04
                </span>
              </div>

              <span className="hidden text-[7px] uppercase tracking-[1.5px] text-[#5C5751] sm:block">
                How We Work
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative min-h-[185px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6500]/20 hover:bg-white/[0.045] sm:min-h-[195px] sm:p-6"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#FF6500]/[0.035] blur-[35px] transition-all duration-300 group-hover:bg-[#FF6500]/[0.07]" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-[#FF7900] transition-all duration-300 group-hover:border-[#FF6500]/40 group-hover:bg-[#FF6500]/10">
                        <Icon size={16} stroke={1.5} />
                      </div>

                      <span className="text-[8px] font-bold tracking-[1.5px] text-[#FF7900]">
                        {item.number}
                      </span>
                    </div>

                    <div className="relative mt-7">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[16px] font-[800] leading-[21px] tracking-[-0.3px] text-white sm:text-[17px]">
                          {item.title}
                        </h3>

                        <IconArrowUpRight
                          size={14}
                          stroke={1.5}
                          className="shrink-0 text-[#55504A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF7900]"
                        />
                      </div>

                      <p className="mt-2 max-w-[300px] text-[10px] leading-[18px] text-[#A09A93] sm:text-[11px] sm:leading-[19px]">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FF4D00] to-[#FFAA00] transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5 sm:mt-12 sm:pt-6">
          <span className="text-[7px] font-bold uppercase tracking-[1.5px] text-[#57524C] sm:text-[8px]">
            Strategy · Design · Technology · Growth
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.45)]" />

            <span className="text-[7px] font-bold uppercase tracking-[1.4px] text-[#77716A] sm:text-[8px]">
              GlobalTechNext
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}