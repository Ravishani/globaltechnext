"use client";

import Link from "next/link";
import {
  IconArrowUpRight,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

const projects = [
  {
    number: "01",
    type: "Featured Project",
    category: "Web Development",
    title: "Digital Experiences",
    description:
      "High-performance digital experiences designed to help ambitious brands connect, convert and grow.",
    large: true,
  },
  {
    number: "02",
    type: "Web Application",
    category: "Development",
    title: "Business Platforms",
    description:
      "Scalable platforms built around real business workflows.",
  },
  {
    number: "03",
    type: "UI / UX",
    category: "Design",
    title: "Meaningful Interfaces",
    description:
      "Simple and intuitive experiences designed around people.",
  },
];

export default function SelectedWork() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F4F1] py-10 sm:py-24 lg:py-20">
      <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[480px] w-[480px] rounded-full bg-[#FF6500]/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[200px] -left-[180px] h-[420px] w-[420px] rounded-full bg-[#FF9A00]/[0.025] blur-[120px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-[#FF6500]" />

              <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#E85D04] sm:text-[10px] sm:tracking-[2.5px]">
                Selected Work
              </span>
            </div>

            <h2 className="mt-6 text-[35px] font-[900] leading-[42px] tracking-[-0.5px] text-black sm:text-[48px] sm:leading-[55px] sm:tracking-[-1px] lg:text-[60px] lg:leading-[65px] lg:tracking-[-0.5px]">
              Work that looks
              <span className="block">
                <span className="text-[#77716A]">good.</span>{" "}
                <span className="bg-gradient-to-r from-[#F04B00] via-[#FF6A00] to-[#FF9800] bg-clip-text text-transparent">
                  Works even better.
                </span>
              </span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-[1.75] tracking-[0.09px] text-[#706B65] sm:text-[14px]">
              A selection of digital experiences where strategy, design and
              technology come together to create measurable impact.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group hidden items-center gap-3 pb-1 text-[9px] font-bold uppercase tracking-[1.4px] text-[#4F4A45] transition-colors hover:text-[#E85D04] sm:flex"
          >
            View All Work

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171717]/10 bg-white transition-all duration-300 group-hover:border-[#FF6500]/30 group-hover:bg-[#FF6500] group-hover:text-white">
              <IconArrowUpRight
                size={14}
                stroke={1.6}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-[1.45fr_0.75fr]">
          <Link
            href="/portfolio"
            className="group relative min-h-[420px] overflow-hidden rounded-[24px] bg-[#111111] sm:min-h-[500px] lg:min-h-[560px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#151515] via-[#211E1B] to-[#D94E00] transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute left-[15%] top-[12%] h-[220px] w-[220px] rounded-full border border-white/[0.09] sm:h-[320px] sm:w-[320px]" />
            <div className="absolute bottom-[-100px] right-[-60px] h-[330px] w-[330px] rounded-full border border-white/[0.08] sm:h-[430px] sm:w-[430px]" />

            <div className="absolute left-1/2 top-1/2 flex h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/15">
              <IconArrowUpRight
                size={27}
                stroke={1.2}
                className="text-white transition-transform duration-500 group-hover:rotate-45"
              />
            </div>

            <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                  <IconSparkles
                    size={12}
                    stroke={1.5}
                    className="text-[#FF9A00]"
                  />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-white/70">
                  Featured Project
                </span>
              </div>

              <span className="text-[9px] font-bold tracking-[1.4px] text-white/50">
                01
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#FFAA55]">
                Web Development
              </span>

              <h3 className="mt-3 text-[31px] font-black leading-[1.08] tracking-[1px] text-white sm:text-[41px] sm:leading-[1.05]">
                Digital
                <span className="block">Experiences</span>
              </h3>

              <p className="mt-3 max-w-[480px] text-[13px] leading-[1.75] tracking-[0.05px] text-white/70 sm:text-[14px]">
                High-performance digital experiences designed to help
                ambitious brands connect, convert and grow.
              </p>
            </div>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {projects.slice(1).map((project) => (
              <Link
                href="/portfolio"
                key={project.number}
                className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#111111]/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6500]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:min-h-[250px] sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF6500]/[0.035] blur-[35px] transition-all duration-500 group-hover:bg-[#FF6500]/[0.08]" />

                <div className="relative flex items-start justify-between">
                  <span className="text-[9px] font-bold tracking-[1.4px] text-[#E85D04]">
                    {project.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#111111]/10 text-[#706B65] transition-all duration-300 group-hover:border-[#FF6500]/30 group-hover:bg-[#FF6500] group-hover:text-white">
                    <IconArrowUpRight
                      size={14}
                      stroke={1.5}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </div>

                <div className="relative">
                  <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#E85D04]">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-[22px] font-black leading-[1.2] tracking-[0.8px] text-[#121212]">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-[360px] text-[13px] leading-[1.7] tracking-[0.05px] text-[#6F6A64] sm:text-[14px]">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-[#111111]/[0.08] pt-5 sm:mt-9 sm:pt-6">
          <span className="text-[8px] font-bold uppercase tracking-[1.4px] text-[#77716A] sm:text-[9px]">
            Strategy · Design · Development
          </span>

          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-[8px] font-bold uppercase tracking-[1.4px] text-[#5D5852] transition-colors hover:text-[#E85D04] sm:text-[9px]"
          >
            Explore Portfolio

            <IconArrowRight
              size={13}
              stroke={1.6}
              className="text-[#FF6500] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}