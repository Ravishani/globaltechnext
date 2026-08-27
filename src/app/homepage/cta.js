"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
      <div className="pointer-events-none absolute right-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#FF6500]/[0.035] blur-[120px] sm:h-[550px] sm:w-[550px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[400px] w-[400px] rounded-full bg-[#FF9A00]/[0.025] blur-[110px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="relative">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-24">
            <div className="relative pl-5 sm:pl-7 lg:pl-9">
              <div className="absolute bottom-0 left-0 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#FF4D00] via-[#FF7200] to-[#FFB000]" />

              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <span className="text-[8px] font-bold uppercase tracking-[2.5px] text-[#FF6500] sm:text-[9px] sm:tracking-[3px]">
                  Let's Build Something Great
                </span>
              </div>

              <h2 className="max-w-[900px] text-[38px] font-[900] leading-[42px] tracking-[-1.9px] text-[#111111] sm:text-[52px] sm:leading-[56px] sm:tracking-[-2.6px] lg:text-[60px] lg:leading-[68px] lg:tracking-[-3.2px]">
                Ready to turn
                <span className="block">
                  your vision into
                </span>

                <span className="block">
                  something{" "}
                  <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7000] to-[#FFAA00] bg-clip-text text-transparent">
                    remarkable?
                  </span>
                </span>
              </h2>

              <p className="mt-5 max-w-[590px] text-[11px] leading-[20px] text-[#77716F] sm:mt-6 sm:text-[12px] sm:leading-[22px] lg:text-[13px] lg:leading-[24px]">
                We help ambitious businesses transform ideas into meaningful
                digital experiences through strategy, design and technology.
              </p>
            </div>

            <div className="relative lg:pb-1">
              <div className="mb-5 max-w-[270px] text-[9px] leading-[17px] text-[#96908A] lg:mb-6">
                Have a project in mind? Let's talk about your goals, your
                challenges and what's possible.
              </div>

              <Link
                href="/contact"
                className="group flex h-[60px] w-full items-center justify-between rounded-full bg-[#111111] px-2 pl-6 text-white shadow-[0_15px_35px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6500] hover:shadow-[0_18px_40px_rgba(255,101,0,0.20)] sm:h-[64px] sm:pl-7"
              >
                <span className="text-[9px] font-bold uppercase tracking-[1.4px]">
                  Start Your Project
                </span>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:rotate-45 sm:h-12 sm:w-12">
                  <IconArrowUpRight size={17} stroke={2} />
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group mt-4 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[1.5px] text-[#77716F] transition-colors duration-300 hover:text-[#FF6500]"
              >
                Explore Our Work

                <IconArrowRight
                  size={13}
                  stroke={1.8}
                  className="text-[#FF6500] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col border-t border-[#111111]/[0.07] pt-5 sm:mt-14 sm:pt-6 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
              <span className="text-[8px] font-bold uppercase tracking-[1px] text-[#8F8982]">
                Strategy
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#FF6500]" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-[#8F8982]">
                UX & UI
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#FF6500]" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-[#8F8982]">
                Development
              </span>

              <span className="h-[3px] w-[3px] rounded-full bg-[#FF6500]" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-[#8F8982]">
                Digital Growth
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 lg:mt-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500] shadow-[0_0_10px_rgba(255,101,0,0.35)]" />

              <span className="text-[8px] font-bold uppercase tracking-[1.6px] text-[#77716F]">
                GlobalTechNext
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}