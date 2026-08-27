"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCircleCheck,
  IconSparkles,
} from "@tabler/icons-react";

export default function HeroBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-[#FF5A00]/[0.07] blur-[100px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute right-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#FF8A00]/[0.08] blur-[110px] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute bottom-[-180px] right-[10%] h-[400px] w-[400px] rounded-full bg-[#FFB000]/[0.05] blur-[100px]" />

        <div className="absolute right-[-180px] top-[-180px] h-[430px] w-[430px] rounded-full border border-[#FF6500]/[0.08] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-[#FFB000]/[0.07] sm:h-[430px] sm:w-[430px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:80px_80px]" />
      </div>

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="relative flex min-h-[700px] flex-col justify-center py-15 sm:min-h-[750px] sm:py-24 lg:min-h-[520px] lg:py-20">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-14">
            <div className="relative z-10 max-w-[800px]">
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl sm:mb-7 sm:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6500] opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6500]" />
                </span>

                <span className="truncate text-[8px] font-bold uppercase tracking-[1.8px] text-[#BDB8B0] sm:text-[9px] sm:tracking-[2.5px]">
                  Digital Transformation Partner
                </span>
              </div>

              <h1 className="text-[35px] font-[900] leading-[42px] tracking-[-1.5px] text-white sm:text-[48px] sm:leading-[55px] sm:tracking-[-2px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-2.8px]">
                Build Digital
                <span className="block">
                  <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFB000] bg-clip-text text-transparent">
                    Experiences
                  </span>{" "}
                  That
                </span>

                <span className="block">
                  Move Businesses
                  <span className="hidden sm:inline"> Forward.</span>
                  <span className="block sm:hidden">Forward.</span>
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[11px] leading-[20px] text-[#A8A39C] sm:mt-7 sm:text-[12px] sm:leading-[22px] lg:text-[13px] lg:leading-6">
                We create powerful websites, applications and digital
                experiences that combine technology, design and strategy to
                help ambitious brands grow faster.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-[52px] w-[215px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-white shadow-[0_15px_40px_rgba(255,86,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,86,0,0.30)] sm:h-[54px] sm:w-auto sm:px-7"
                >
                  Start Your Project

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#151515] transition-transform duration-300 group-hover:rotate-45">
                    <IconArrowUpRight size={15} stroke={2} />
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="group flex h-[52px] w-[215px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-[#E4E0DA] backdrop-blur-md transition-all duration-300 hover:border-[#FF6A00]/40 hover:bg-white/[0.07] sm:h-[54px] sm:w-auto sm:px-7"
                >
                  Explore Our Work

                  <IconArrowRight
                    size={15}
                    className="text-[#FF7900] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:gap-x-7">
                <div className="flex items-center gap-2">
                  <IconCircleCheck
                    size={14}
                    stroke={1.8}
                    className="shrink-0 text-[#FF7900]"
                  />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.6px] text-[#8F8A83] sm:text-[9px] sm:tracking-[0.8px]">
                    Premium Development
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <IconCircleCheck
                    size={14}
                    stroke={1.8}
                    className="shrink-0 text-[#FF7900]"
                  />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.6px] text-[#8F8A83] sm:text-[9px] sm:tracking-[0.8px]">
                    Strategic Design
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <IconCircleCheck
                    size={14}
                    stroke={1.8}
                    className="shrink-0 text-[#FF7900]"
                  />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.6px] text-[#8F8A83] sm:text-[9px] sm:tracking-[0.8px]">
                    Growth Focused
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto h-[320px] w-full max-w-[390px] sm:h-[400px] sm:max-w-[500px] lg:h-[520px] lg:max-w-none">
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5A00]/10 blur-[70px] sm:h-[350px] sm:w-[350px] sm:blur-[90px] lg:h-[460px] lg:w-[460px] lg:blur-[100px]" />

              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]" />

              <div className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6800]/20 sm:h-[275px] sm:w-[275px] lg:h-[355px] lg:w-[355px]" />

              <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFAE00]/20 sm:h-[190px] sm:w-[190px] lg:h-[235px] lg:w-[235px]" />

              <div className="absolute left-1/2 top-1/2 flex h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7900]/40 bg-gradient-to-br from-[#FF4D00] to-[#FF9A00] shadow-[0_0_60px_rgba(255,91,0,0.30)] sm:h-[100px] sm:w-[100px] lg:h-[115px] lg:w-[115px]">
                <IconSparkles
                  size={30}
                  stroke={1.2}
                  className="text-white sm:h-[36px] sm:w-[36px] lg:h-[42px] lg:w-[42px]"
                />
              </div>

              <div className="absolute right-0 top-[15px] rounded-xl border border-white/10 bg-[#111111]/90 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:right-[5px] sm:top-[30px] sm:rounded-2xl sm:p-4 lg:right-0 lg:top-[60px]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF5A00]/10 text-[#FF7900] sm:h-9 sm:w-9 sm:rounded-xl">
                    <IconSparkles size={15} />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#77736D]">
                      Our Approach
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-white sm:text-[11px]">
                      Strategy First
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20px] left-0 rounded-xl border border-white/10 bg-[#111111]/90 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:bottom-[35px] sm:left-[5px] sm:rounded-2xl sm:p-4 lg:bottom-[55px] lg:left-0">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF5A00]/10 sm:h-9 sm:w-9 sm:rounded-xl">
                    <span className="h-2 w-2 rounded-full bg-[#FF6A00] shadow-[0_0_12px_#FF6A00]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#77736D]">
                      Technology
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-white sm:text-[11px]">
                      Built To Scale
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#FF8A00] shadow-[0_0_15px_#FF8A00]" />

              <div className="absolute right-[18%] top-[10%] h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_20px_#FFB000]" />

              <div className="absolute bottom-[15%] right-[8%] h-1.5 w-1.5 rounded-full bg-[#FF5A00] shadow-[0_0_15px_#FF5A00]" />

              <div className="absolute bottom-[-5px] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 backdrop-blur-md sm:bottom-0 sm:px-4 sm:py-2.5">
                <span className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#77736D] sm:text-[8px] sm:tracking-[1.5px]">
                  GlobalTechNext
                </span>

                <span className="h-1 w-1 rounded-full bg-[#FF6800]" />

                <span className="text-[7px] uppercase tracking-[0.7px] text-[#8E8982] sm:text-[8px] sm:tracking-[1px]">
                  Think · Innovate · Grow
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-1px] left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-2 md:flex">
            <span className="text-[8px] font-bold uppercase tracking-[1.8px] text-[#77736D]">
              Scroll to explore
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6500]/40 to-transparent" />
    </section>
  );
}