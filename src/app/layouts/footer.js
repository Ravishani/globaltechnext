"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Web Applications", href: "/services/web-application" },
  { name: "UI / UX Design", href: "/services/ui-ux-design" },
  { name: "Digital Solutions", href: "/services/digital-solutions" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <>
      <a
        href="https://wa.me/919555787844"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact GlobalTechNext on WhatsApp"
        className="group fixed bottom-5 right-4 z-[999] sm:bottom-7 sm:right-7"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-[#25D366]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

          <div className="relative flex items-center gap-3 overflow-hidden rounded-full border border-white/[0.10] bg-[#101010]/95 py-2 pl-2 pr-3 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#25D366]/30 group-hover:bg-[#151515] group-hover:shadow-[0_15px_50px_rgba(37,211,102,0.12)]">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.18)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.30)]">
              <IconBrandWhatsapp size={22} stroke={1.8} />

              <span className="absolute right-[-1px] top-[-1px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#101010] bg-[#FF6500]">
                <span className="h-1 w-1 rounded-full bg-white" />
              </span>
            </span>

            <span className="min-w-0 pr-1">
              <span className="block whitespace-nowrap text-[9px] font-bold uppercase tracking-[1.9px] text-[#625D57]">
                GlobalTechNext
              </span>

              <span className="mt-0.5 block whitespace-nowrap text-[13px] font-extrabold tracking-[0.1px] text-white">
                Chat With Our Team
              </span>

              <span className="mt-0.5 block whitespace-nowrap text-[10px] font-medium tracking-[0.2px] text-[#25D366]">
                WhatsApp · 9555787844
              </span>
            </span>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#25D366] transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white">
              <IconArrowUpRight
                size={14}
                stroke={1.8}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </div>
        </div>
      </a>

      <footer className="relative w-full overflow-hidden bg-[#080808] text-white">
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[420px] w-[420px] rounded-full bg-[#FF6500]/[0.045] blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-[180px] -left-[180px] h-[380px] w-[380px] rounded-full bg-[#FF8A00]/[0.02] blur-[110px]" />

        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">
          <div className="border-b border-white/[0.08] py-10 sm:py-12 lg:py-14">
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 rounded-full bg-[#FF6500]" />

                  <span className="text-[10px] font-bold uppercase tracking-[2.4px] text-[#FF7900] sm:text-[11px] sm:tracking-[2.8px]">
                    Let's Work Together
                  </span>
                </div>

                <h2 className="mt-5  text-[28px] font-black leading-[1.06] tracking-[-1px] text-white sm:text-[44px] sm:leading-[1.05] sm:tracking-[-1.9px] lg:text-[54px] lg:leading-[1.03] lg:tracking-[-1px]">
                  Have a project in mind?

                  <span className="block">
                    <span className="text-[#706B65]">Let's </span>

                    <span className="bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFAA00] bg-clip-text text-transparent">
                      build it.
                    </span>
                  </span>
                </h2>

                <p className="mt-4 max-w-[560px] text-[13px] leading-[1.7] tracking-[0.1px] text-[#706B65] sm:text-[14px] sm:leading-[1.75]">
                  Tell us about your idea, challenge or next digital project.
                  We'll help turn it into something meaningful.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex h-[58px] w-full items-center justify-between rounded-full bg-white px-6 text-[10px] font-bold uppercase tracking-[1.6px] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6500] hover:text-white hover:shadow-[0_12px_35px_rgba(255,90,0,0.18)] sm:w-[225px]"
              >
                <span>Start A Project</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#111111]">
                  <IconArrowUpRight
                    size={15}
                    stroke={1.8}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.95fr_1fr] lg:gap-12 lg:py-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#FF4D00] to-[#FF9800] shadow-[0_8px_25px_rgba(255,90,0,0.15)]">
                  <span className="text-[18px] font-black text-white">G</span>
                </span>

                <span>
                  <span className="block text-[19px] font-black tracking-[-0.5px] text-white">
                    GlobalTechNext
                  </span>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[2px] text-[#514C47]">
                   Think · Innovate · Grow
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-[370px] text-[13px] sm:text-[14px] leading-[1.75] tracking-[0.08px] text-[#77716A]">
                GlobalTechNext helps businesses transform ideas into powerful
                digital experiences through technology, creative design and
                strategic thinking.
              </p>

              <p className="mt-4 max-w-[370px] text-[12px] sm:text-[13px] leading-[1.75] tracking-[0.08px] text-[#59544E]">
                From websites and applications to complete digital solutions,
                we build products designed to perform, scale and grow.
              </p>

              <div className="mt-6 flex gap-2.5">
                <SocialIcon
                  href="#"
                  label="LinkedIn"
                  icon={<IconBrandLinkedin size={15} stroke={1.5} />}
                />

                <SocialIcon
                  href="#"
                  label="Instagram"
                  icon={<IconBrandInstagram size={15} stroke={1.5} />}
                />

                <SocialIcon
                  href="#"
                  label="Facebook"
                  icon={<IconBrandFacebook size={15} stroke={1.5} />}
                />

                <SocialIcon
                  href="#"
                  label="X"
                  icon={<IconBrandX size={14} stroke={1.5} />}
                />
              </div>
            </div>

            <div>
              <FooterHeading title="Explore" />

              <ul className="mt-6 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink name={link.name} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading title="Services" />

              <ul className="mt-6 space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink name={link.name} href={link.href} />
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.4px] text-[#FF7900]"
              >
                View All Services

                <IconArrowUpRight
                  size={13}
                  stroke={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div>
              <FooterHeading title="Newsletter" />

              <p className="mt-6 text-[13px] leading-[1.75] tracking-[0.08px] text-[#77716A]">
                Subscribe to receive useful insights, digital trends,
                technology updates and ideas from our team.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex h-[50px] w-full items-center rounded-full border border-white/[0.1] bg-white/[0.035] p-1 transition-all duration-300 focus-within:border-[#FF6500]/40 focus-within:bg-white/[0.05]"
              >
                <IconMail
                  size={15}
                  stroke={1.5}
                  className="ml-3 shrink-0 text-[#5E5852]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="h-[42px] min-w-0 flex-1 bg-transparent px-3 text-[12px] tracking-[0.1px] text-white outline-none placeholder:text-[#5E5852]"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="group flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FF6500] text-white transition-all duration-300 hover:bg-[#FF7900]"
                >
                  <IconArrowUpRight
                    size={15}
                    stroke={1.8}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:info@globaltechnext.com"
                  className="group flex items-center gap-2.5 text-[12px] tracking-[0.08px] text-[#77716A] transition-colors hover:text-white sm:text-[13px]"
                >
                  <IconMail
                    size={14}
                    stroke={1.5}
                    className="text-[#FF6500]"
                  />

                  <span className="truncate">info@globaltechnext.com</span>
                </a>

                <a
                  href="tel:9555787844"
                  className="group flex items-center gap-2.5 text-[12px] tracking-[0.08px] text-[#77716A] transition-colors hover:text-white sm:text-[13px]"
                >
                  <IconPhone
                    size={14}
                    stroke={1.5}
                    className="text-[#FF6500]"
                  />

                  <span>9555787844</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.08] py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] font-medium tracking-[0.08px] text-[#625C56] sm:text-[13px]">
                © {new Date().getFullYear()} GlobalTechNext. All rights
                reserved.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href="/privacy-policy"
                  className="text-[12px] tracking-[0.08px] text-[#625C56] transition-colors hover:text-white sm:text-[13px]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="text-[12px] tracking-[0.08px] text-[#625C56] transition-colors hover:text-white sm:text-[13px]"
                >
                  Terms & Conditions
                </Link>

                <span className="h-1 w-1 rounded-full bg-[#FF6500]" />

                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#625C56]">
                  Think · Innovate · Grow
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterHeading({ title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-6 rounded-full bg-[#FF6500]" />

      <h3 className="text-[13px] font-bold uppercase tracking-[2px] text-white">
        {title}
      </h3>
    </div>
  );
}

function FooterLink({ name, href }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[12px] tracking-[0.1px] text-[#77716A] transition-colors duration-300 hover:text-white sm:text-[13px]"
    >
      {name}

      <IconArrowUpRight
        size={11}
        stroke={1.5}
        className="text-[#FF6500] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-[#625D57] transition-all duration-300 hover:border-[#FF6500]/30 hover:bg-[#FF6500] hover:text-white"
    >
      {icon}
    </a>
  );
}