"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBulb,
  IconCheck,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconRocket,
  IconSparkles,
  IconWorld,
} from "@tabler/icons-react";

export default function About() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[350px] w-[350px] rounded-full bg-[#FF6500]/[0.06] blur-[100px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute right-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#FF9A00]/[0.07] blur-[110px] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute bottom-[-180px] right-[15%] h-[400px] w-[400px] rounded-full bg-[#FFB000]/[0.04] blur-[100px]" />

        <div className="absolute right-[-160px] top-[-160px] h-[430px] w-[430px] rounded-full border border-[#FF6500]/[0.07] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute right-[-90px] top-[-90px] h-[300px] w-[300px] rounded-full border border-[#FFB000]/[0.06] sm:h-[430px] sm:w-[430px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(15,15,15,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.7)_1px,transparent_1px)] [background-size:60px_60px] sm:[background-size:80px_80px]" />
      </div>

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          <div className="relative">
            <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[480px] lg:h-[520px]">
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6500]/10 blur-[80px] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]" />

              <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#151515]/[0.06] sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]" />

              <div className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6800]/20 sm:h-[285px] sm:w-[285px] lg:h-[350px] lg:w-[350px]" />

              <div className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFAE00]/20 sm:h-[195px] sm:w-[195px] lg:h-[240px] lg:w-[240px]" />

              <div className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7900]/30 bg-gradient-to-br from-[#FF4D00] to-[#FF9A00] shadow-[0_0_70px_rgba(255,91,0,0.22)] sm:h-[105px] sm:w-[105px] lg:h-[120px] lg:w-[120px]">
                <IconSparkles
                  size={32}
                  stroke={1.2}
                  className="text-white sm:h-[38px] sm:w-[38px] lg:h-[44px] lg:w-[44px]"
                />
              </div>

              <div className="absolute left-[4%] top-[18%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#151515]/[0.08] bg-white/90 text-[#FF6500] shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:left-[8%] sm:top-[16%] sm:h-14 sm:w-14 sm:rounded-2xl">
                <IconCode
                  size={20}
                  stroke={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <div className="absolute right-[4%] top-[22%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#151515]/[0.08] bg-white/90 text-[#FF6500] shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:right-[8%] sm:top-[18%] sm:h-14 sm:w-14 sm:rounded-2xl">
                <IconPalette
                  size={20}
                  stroke={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <div className="absolute bottom-[18%] left-[6%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#151515]/[0.08] bg-white/90 text-[#FF6500] shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:bottom-[16%] sm:left-[10%] sm:h-14 sm:w-14 sm:rounded-2xl">
                <IconDeviceMobile
                  size={20}
                  stroke={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <div className="absolute bottom-[20%] right-[5%] flex h-11 w-11 items-center justify-center rounded-xl border border-[#151515]/[0.08] bg-white/90 text-[#FF6500] shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:bottom-[17%] sm:right-[9%] sm:h-14 sm:w-14 sm:rounded-2xl">
                <IconRocket
                  size={20}
                  stroke={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <div className="absolute left-0 top-[43%] rounded-xl border border-[#151515]/[0.08] bg-white/95 px-3 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:left-[2%] sm:px-4 sm:py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6500]/10 text-[#FF6500]">
                    <IconBulb size={15} />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#99938B]">
                      Our Approach
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-[#151515]">
                      Strategy First
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[4%] right-0 rounded-xl border border-[#151515]/[0.08] bg-white/95 px-3 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:bottom-[5%] sm:right-[2%] sm:px-4 sm:py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6500]/10 text-[#FF6500]">
                    <IconWorld size={15} />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#99938B]">
                      Our Vision
                    </p>

                    <p className="mt-1 text-[10px] font-semibold text-[#151515]">
                      Build The Future
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[15%] top-[9%] h-1.5 w-1.5 rounded-full bg-[#FF6500] shadow-[0_0_15px_#FF6500]" />

              <div className="absolute right-[18%] top-[8%] h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_20px_#FFB000]" />

              <div className="absolute bottom-[13%] right-[25%] h-1.5 w-1.5 rounded-full bg-[#FF7900] shadow-[0_0_15px_#FF7900]" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF6500]" />

              <span className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#8B857D]">
                About Global Tech Next
              </span>
            </div>

            <h2 className="max-w-[750px] text-[36px] font-[900] leading-[42px] tracking-[-1.5px] text-[#111111] sm:text-[48px] sm:leading-[54px] sm:tracking-[-2px] lg:text-[60px] lg:leading-[66px] lg:tracking-[-2.8px]">
              Turning Ideas Into
              <span className="block">
                <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFB000] bg-clip-text text-transparent">
                  Digital Impact.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[12px] leading-[22px] text-[#5F5A54] sm:text-[13px] sm:leading-6">
              Global Tech Next is a digital technology company helping
              ambitious businesses build powerful websites, applications and
              software solutions that create real business value.
            </p>

            <p className="mt-5 max-w-[650px] text-[11px] leading-6 text-[#817B73] sm:text-[12px] sm:leading-7">
              We bring together technology, design and strategy to create
              digital experiences that are fast, scalable, secure and built
              around your customers. From the first idea to the final launch,
              our focus remains simple — build better digital products that
              help businesses move forward.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 sm:mt-9">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6500]/20 bg-[#FF6500]/[0.07] text-[#FF6500]">
                  <IconCheck size={14} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.8px] text-[#5F5A54]">
                  Innovation Driven
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6500]/20 bg-[#FF6500]/[0.07] text-[#FF6500]">
                  <IconCheck size={14} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.8px] text-[#5F5A54]">
                  Business Focused
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6500]/20 bg-[#FF6500]/[0.07] text-[#FF6500]">
                  <IconCheck size={14} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.8px] text-[#5F5A54]">
                  Scalable Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6500]/20 bg-[#FF6500]/[0.07] text-[#FF6500]">
                  <IconCheck size={14} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.8px] text-[#5F5A54]">
                  Long-Term Support
                </span>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="group flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-white shadow-[0_15px_40px_rgba(255,86,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,86,0,0.25)] sm:h-[54px] sm:w-auto sm:px-7"
              >
                Discover Our Story

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#151515] transition-transform duration-300 group-hover:rotate-45">
                  <IconArrowUpRight size={15} />
                </span>
              </Link>

              <Link
                href="/services"
                className="group flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#151515]/10 bg-[#151515]/[0.025] px-6 text-[9px] font-bold uppercase tracking-[1.2px] text-[#24211E] transition-all duration-300 hover:border-[#FF6500]/30 hover:bg-[#FF6500]/[0.04] sm:h-[54px] sm:w-auto sm:px-7"
              >
                Explore Services

                <IconArrowRight
                  size={15}
                  className="text-[#FF6500] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#151515]/[0.08] pt-7">
              <div>
                <p className="bg-gradient-to-r from-[#FF4D00] to-[#FFB000] bg-clip-text text-[24px] font-[900] tracking-[-1px] text-transparent">
                  50+
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[1.3px] text-[#8B857D]">
                  Projects Delivered
                </p>
              </div>

              <div className="h-10 w-px bg-[#151515]/[0.08]" />

              <div>
                <p className="bg-gradient-to-r from-[#FF4D00] to-[#FFB000] bg-clip-text text-[24px] font-[900] tracking-[-1px] text-transparent">
                  30+
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[1.3px] text-[#8B857D]">
                  Happy Clients
                </p>
              </div>

              <div className="h-10 w-px bg-[#151515]/[0.08]" />

              <div>
                <p className="bg-gradient-to-r from-[#FF4D00] to-[#FFB000] bg-clip-text text-[24px] font-[900] tracking-[-1px] text-transparent">
                  24/7
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[1.3px] text-[#8B857D]">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6500]/30 to-transparent" />
    </section>
  );
}