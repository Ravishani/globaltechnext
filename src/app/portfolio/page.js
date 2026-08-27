"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconCode,
  IconExternalLink,
  IconLayoutGrid,
  IconRocket,
  IconSparkles,
  IconWorld,
} from "@tabler/icons-react";

const categories = [
  "All Work",
  "Web Development",
  "Web Applications",
  "E-commerce",
  "UI / UX",
];

const projects = [
  {
    id: 1,
    number: "01",
    title: "Global Commerce",
    category: "E-commerce",
    industry: "Retail & Commerce",
    description:
      "A conversion-focused e-commerce experience designed to make product discovery, shopping and checkout faster and more intuitive.",
    image: "/work/ecommerce.jpg",
    technologies: ["Next.js", "React", "Laravel", "MySQL"],
    href: "#",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Finova Platform",
    category: "Web Applications",
    industry: "FinTech",
    description:
      "A scalable financial platform with secure workflows, intuitive dashboards and a clean digital experience.",
    image: "/work/fintech.jpg",
    technologies: ["React", "Laravel", "PHP", "REST API"],
    href: "#",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "Nova Digital",
    category: "Web Development",
    industry: "Technology",
    description:
      "A premium corporate website created to communicate a technology brand with clarity, confidence and impact.",
    image: "/work/corporate.jpg",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    href: "#",
    featured: false,
  },
  {
    id: 4,
    number: "04",
    title: "Urban Living",
    category: "UI / UX",
    industry: "Real Estate",
    description:
      "A refined digital experience focused on property discovery, visual storytelling and effortless navigation.",
    image: "/work/real-estate.jpg",
    technologies: ["Figma", "React", "Tailwind CSS"],
    href: "#",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "MarketHub",
    category: "E-commerce",
    industry: "Marketplace",
    description:
      "A marketplace experience built around product discovery, conversion and a smooth customer journey.",
    image: "/work/marketplace.jpg",
    technologies: ["Next.js", "Laravel", "MySQL"],
    href: "#",
    featured: false,
  },
  {
    id: 6,
    number: "06",
    title: "Control Center",
    category: "Web Applications",
    industry: "Business Operations",
    description:
      "A powerful business dashboard bringing operational data, workflows and important actions into one interface.",
    image: "/work/dashboard.jpg",
    technologies: ["React", "Laravel", "MySQL"],
    href: "#",
    featured: false,
  },
];

const stats = [
  { number: "25+", label: "Digital Projects" },
  { number: "12+", label: "Industries Served" },
  { number: "08+", label: "Core Technologies" },
  { number: "100%", label: "Custom Solutions" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="w-full overflow-hidden bg-[#080808]">
      <WorkHero />
      <Stats />
      <FeaturedWork projects={featuredProjects} />
      <AllWork
        projects={filteredProjects}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <WorkApproach />
    </main>
  );
}

function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute -left-[250px] top-[80px] h-[550px] w-[550px] rounded-full bg-[#FF5A00]/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute -right-[220px] -top-[200px] h-[520px] w-[520px] rounded-full bg-[#FF9A00]/[0.055] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#FF4D00]/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative z-10 max-w-[850px]">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#625D57] transition hover:text-[#FF7900]"
            >
              <IconArrowRight
                size={13}
                stroke={1.7}
                className="rotate-180"
              />
              Back To Home
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#FF6500]" />

              <span className="text-[11px] font-bold uppercase tracking-[2.2px] text-[#FF7900]">
                Our Selected Work
              </span>
            </div>

            <h1 className="text-[46px] font-[900] leading-[1.04] tracking-[-2.2px] sm:text-[62px] sm:leading-[1.02] sm:tracking-[-2.8px] lg:text-[78px] lg:leading-[0.98] lg:tracking-[-3.8px]">
              We build digital
              <span className="block bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFB000] bg-clip-text text-transparent">
                experiences that matter.
              </span>
            </h1>

            <p className="mt-7 max-w-[630px] text-[14px] leading-[23px] tracking-[0.05px] text-[#817A73] sm:text-[15px] sm:leading-[25px] lg:text-[16px] lg:leading-[27px]">
              From high-converting websites to powerful web applications, we
              combine strategy, design and technology to create digital
              experiences that help businesses grow.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#all-work"
                className="group flex h-[54px] w-full items-center justify-between rounded-full bg-white px-5 text-[11px] font-bold uppercase tracking-[1.2px] text-[#111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6500] hover:text-white sm:w-[195px]"
              >
                Explore Projects

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-white transition group-hover:bg-white group-hover:text-[#111]">
                  <IconArrowUpRight
                    size={14}
                    stroke={1.8}
                    className="transition group-hover:rotate-45"
                  />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-full border border-white/[0.09] px-5 text-[11px] font-bold uppercase tracking-[1.2px] text-[#AAA49D] transition hover:border-[#FF6500]/40 hover:bg-white/[0.03] hover:text-white sm:w-[185px]"
              >
                Start A Project

                <IconArrowUpRight
                  size={14}
                  stroke={1.6}
                  className="text-[#FF6500] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              <HeroPoint text="Strategy First" />
              <HeroPoint text="Premium Design" />
              <HeroPoint text="Scalable Technology" />
            </div>
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-[520px] lg:h-[500px]">
            <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] sm:h-[410px] sm:w-[410px]" />

            <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6500]/15 sm:h-[320px] sm:w-[320px]" />

            <div className="absolute left-1/2 top-1/2 h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF9A00]/20 sm:h-[220px] sm:w-[220px]" />

            <div className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF9A00] shadow-[0_0_90px_rgba(255,90,0,0.25)] sm:h-[105px] sm:w-[105px]">
              <IconLayoutGrid
                size={36}
                stroke={1.2}
                className="sm:h-[42px] sm:w-[42px]"
              />
            </div>

            <span className="absolute left-[2%] top-[10%] text-[90px] font-[900] leading-none tracking-[-6px] text-white/[0.035] sm:text-[125px] sm:tracking-[-8px]">
              06
            </span>

            <div className="absolute right-0 top-[7%] rounded-2xl border border-white/[0.08] bg-[#111111]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6500]/10 text-[#FF7900]">
                  <IconSparkles size={15} stroke={1.5} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#57514B]">
                    Quality
                  </p>

                  <p className="mt-1 text-[12px] font-semibold tracking-[-0.1px] text-white">
                    Premium Digital
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[7%] left-0 rounded-2xl border border-white/[0.08] bg-[#111111]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6500]/10">
                  <span className="h-2 w-2 rounded-full bg-[#FF7200] shadow-[0_0_16px_#FF6500]" />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#57514B]">
                    Performance
                  </p>

                  <p className="mt-1 text-[12px] font-semibold tracking-[-0.1px] text-white">
                    Built To Perform
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-[9%] top-[34%] flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-[#FF7900] backdrop-blur-md">
              <IconCode size={17} stroke={1.4} />
            </div>

            <div className="absolute bottom-[28%] right-[9%] flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-[#FF9A00] backdrop-blur-md">
              <IconRocket size={17} stroke={1.4} />
            </div>

            <span className="absolute left-[18%] top-[26%] h-1.5 w-1.5 rounded-full bg-[#FF7900] shadow-[0_0_14px_#FF7900]" />

            <span className="absolute right-[17%] top-[31%] h-2 w-2 rounded-full bg-[#FFB000] shadow-[0_0_18px_#FFB000]" />

            <span className="absolute bottom-[20%] right-[6%] h-1.5 w-1.5 rounded-full bg-[#FF6500] shadow-[0_0_14px_#FF6500]" />
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#FF6500]/25 to-transparent" />
    </section>
  );
}

function HeroPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <IconCheck size={14} stroke={2} className="text-[#FF7200]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.9px] text-[#716B65] sm:text-[11px]">
        {text}
      </span>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-2 border-x border-black/[0.06] lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`group relative px-5 py-8 transition hover:bg-[#FAF9F7] sm:px-8 sm:py-10 lg:px-10 ${
                index < 3
                  ? "border-b border-black/[0.06] lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 1 ? "border-r border-black/[0.06] lg:border-r" : ""}`}
            >
              <div className="flex items-end justify-between">
                <span className="text-[32px] font-[900] tracking-[-1.5px] text-[#111] transition group-hover:text-[#FF6500] sm:text-[40px] sm:tracking-[-2px]">
                  {item.number}
                </span>

                <IconArrowUpRight
                  size={15}
                  stroke={1.5}
                  className="text-[#D0CDC8] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6500]"
                />
              </div>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[1.3px] text-[#8A847D] sm:text-[11px] sm:tracking-[1.5px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({ projects }) {
  return (
    <section className="bg-[#F3F2F0] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Work built"
          highlight="to make an impact."
          description="A closer look at selected projects where strategy, design and technology come together to create meaningful digital experiences."
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, highlight, description }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end lg:gap-10">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#FF6500]" />

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#FF6500]">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-4 text-[36px] font-[900] leading-[1.08] tracking-[-1.7px] text-[#151515] sm:text-[46px] sm:leading-[1.06] sm:tracking-[-2.2px] lg:text-[52px] lg:leading-[1.04] lg:tracking-[-2.5px]">
          {title}

          <span className="block text-[#9B958E]">{highlight}</span>
        </h2>
      </div>

      <p className="max-w-[400px] text-[12px] leading-[20px] tracking-[0.05px] text-[#77716A] sm:text-[13px] sm:leading-[21px]">
        {description}
      </p>
    </div>
  );
}

function FeaturedProjectCard({ project }) {
  return (
    <Link href={project.href} className="group block">
      <article className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#FF6500]/25 hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]">
        <div className="relative aspect-[16/8.8] overflow-hidden bg-[#111]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/[0.15] bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />

            <span className="text-[8px] font-bold uppercase tracking-[1px] text-white">
              {project.category}
            </span>
          </div>

          <span className="absolute right-4 top-4 text-[25px] font-[900] tracking-[-1.5px] text-white/25">
            {project.number}
          </span>

          <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#FF6500] group-hover:bg-[#FF6500]">
            <IconArrowUpRight
              size={15}
              stroke={1.7}
              className="transition group-hover:rotate-45"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-16">
            <p className="mb-1 text-[8px] font-bold uppercase tracking-[1.1px] text-white/50">
              {project.industry}
            </p>

            <h3 className="text-[25px] font-[900] leading-[1.08] tracking-[-0.8px] text-white sm:text-[29px] sm:leading-[1.08] sm:tracking-[-1px]">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[11px] leading-[19px] tracking-[0.05px] text-[#77716A] sm:text-[12px] sm:leading-[20px]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/[0.07] bg-[#F7F6F4] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.6px] text-[#69635D]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3">
            <span className="text-[8px] font-bold uppercase tracking-[1.1px] text-[#AAA49D]">
              View Case Study
            </span>

            <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.9px] text-[#FF6500]">
              Explore

              <IconExternalLink
                size={12}
                stroke={1.6}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function AllWork({ projects, activeCategory, setActiveCategory }) {
  return (
    <section
      id="all-work"
      className="scroll-mt-20 bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF6500]" />

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#FF6500]">
                Complete Portfolio
              </span>
            </div>

            <h2 className="mt-4 text-[36px] font-[900] leading-[1.08] tracking-[-1.7px] text-[#111] sm:text-[46px] sm:leading-[1.06] sm:tracking-[-2.2px]">
              More work.

              <span className="text-[#9B958E]">
                {" "}
                More possibilities.
              </span>
            </h2>
          </div>

          <div className="flex max-w-full flex-wrap gap-1.5">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-2 text-[8px] font-bold uppercase tracking-[0.8px] transition-all duration-300 sm:text-[9px] ${
                    active
                      ? "border-[#FF6500] bg-[#FF6500] text-white shadow-[0_6px_18px_rgba(255,101,0,0.16)]"
                      : "border-black/[0.08] bg-[#F7F6F4] text-[#77716A] hover:border-[#FF6500]/30 hover:bg-white hover:text-[#FF6500]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />

          <span className="text-[9px] font-bold uppercase tracking-[1.2px] text-[#AAA49D]">
            Showing {projects.length} Projects
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-[20px] border border-black/[0.07] bg-[#FAFAFA]">
            <div className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6500]/10 text-[#FF6500]">
                <IconLayoutGrid size={18} stroke={1.5} />
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[1px] text-[#77716A]">
                No projects found
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={project.href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-black/[0.07] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#FF6500]/25 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

          <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.9px] text-white">
              {project.category}
            </span>
          </div>

          <span className="absolute right-3.5 top-3.5 text-[23px] font-[900] tracking-[-1.5px] text-white/20">
            {project.number}
          </span>

          <div className="absolute bottom-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.14] bg-black/25 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#FF6500] group-hover:bg-[#FF6500]">
            <IconArrowUpRight
              size={14}
              stroke={1.7}
              className="transition group-hover:rotate-45"
            />
          </div>

          <div className="absolute bottom-3.5 left-3.5 right-14">
            <p className="mb-0.5 text-[7px] font-bold uppercase tracking-[1px] text-white/50">
              {project.industry}
            </p>

            <h3 className="text-[20px] font-[900] leading-[1.1] tracking-[-0.6px] text-white sm:text-[22px] sm:leading-[1.08]">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-[10px] leading-[17px] tracking-[0.03px] text-[#77716A] sm:text-[11px] sm:leading-[18px]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/[0.07] bg-[#F7F6F4] px-2 py-1.5 text-[7px] font-bold uppercase tracking-[0.5px] text-[#69635D]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3">
            <span className="text-[8px] font-bold uppercase tracking-[1px] text-[#AAA49D]">
              View Project
            </span>

            <IconExternalLink
              size={12}
              stroke={1.6}
              className="text-[#FF6500] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

function WorkApproach() {
  const points = [
    {
      number: "01",
      title: "Discover",
      icon: IconWorld,
      text: "We understand your business, audience, goals and the problem your digital product needs to solve.",
    },
    {
      number: "02",
      title: "Design",
      icon: IconSparkles,
      text: "We create a clear visual direction and intuitive user experience around your business objectives.",
    },
    {
      number: "03",
      title: "Develop",
      icon: IconCode,
      text: "Our development team transforms the approved experience into a fast, secure and scalable product.",
    },
    {
      number: "04",
      title: "Launch & Grow",
      icon: IconRocket,
      text: "We test, optimise and continuously improve the experience so it performs better over time.",
    },
  ];

  return (
    <section className="bg-[#F1F0EE] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/60 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6500]" />

              <span className="text-[9px] font-[800] uppercase tracking-[1.5px] text-[#514C47]">
                Our Process
              </span>
            </div>

            <h2 className="mt-5 max-w-[470px] text-[36px] font-[900] leading-[1.08] tracking-[-1.7px] text-[#111] sm:text-[46px] sm:leading-[1.06] sm:tracking-[-2.2px]">
              Great work starts

              <span className="block text-[#9B958E]">
                with a great process.
              </span>
            </h2>

            <p className="mt-4 max-w-[430px] text-[11px] leading-[19px] tracking-[0.03px] text-[#77716A] sm:text-[12px] sm:leading-[20px]">
              We don't believe in one-size-fits-all digital solutions. Every
              project is approached with clarity, collaboration and attention
              to detail.
            </p>

            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[1px] text-white transition hover:-translate-y-1 hover:bg-[#FF6500]"
            >
              Explore Our Services

              <IconArrowUpRight
                size={11}
                stroke={1.8}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="grid border-t border-black/[0.08] sm:grid-cols-2">
            {points.map((point, index) => {
              const PointIcon = point.icon;

              return (
                <div
                  key={point.number}
                  className={`group relative py-6 sm:px-5 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-black/[0.08]"
                      : ""
                  } ${
                    index < 2 ? "border-b border-black/[0.08]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[1.3px] text-[#FF6500]">
                      {point.number}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.06] bg-white/60 text-[#AAA49D] transition group-hover:border-[#FF6500]/20 group-hover:bg-[#FF6500]/10 group-hover:text-[#FF6500]">
                      <PointIcon size={14} stroke={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-[18px] font-[900] leading-[1.15] tracking-[-0.4px] text-[#171717]">
                    {point.title}
                  </h3>

                  <p className="mt-2.5 max-w-[340px] text-[10px] leading-[18px] tracking-[0.03px] text-[#77716A] sm:text-[11px] sm:leading-[19px]">
                    {point.text}
                  </p>

                  <div className="mt-4 h-px w-0 bg-[#FF6500] transition-all duration-500 group-hover:w-10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}