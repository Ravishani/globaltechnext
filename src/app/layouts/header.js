"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconMenu2,
  IconX,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconChartBar,
  IconWorld,
  IconSparkles,
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconCheck,
  IconCircleFilled,
  IconArrowLeft,
} from "@tabler/icons-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites & web applications",
    href: "/services/web-development",
    icon: IconCode,
  },
  {
    title: "Mobile Development",
    description: "Modern Android & iOS applications",
    href: "/services/mobile-development",
    icon: IconDeviceMobile,
  },
  {
    title: "UI / UX Design",
    description: "Beautiful and conversion-focused experiences",
    href: "/services/ui-ux",
    icon: IconPalette,
  },
  {
    title: "Digital Marketing",
    description: "SEO, paid advertising & growth strategies",
    href: "/services/digital-marketing",
    icon: IconChartBar,
  },
];

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    children: services,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Insights",
    href: "/blog",
  },
];

const stats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Happy Clients",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    href: "https://instagram.com/",
    icon: IconBrandInstagram,
  },
  {
    title: "Facebook",
    href: "https://facebook.com/",
    icon: IconBrandFacebook,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/",
    icon: IconBrandLinkedin,
  },
  {
    title: "X",
    href: "https://x.com/",
    icon: IconBrandX,
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setDesktopServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileServicesOpen(false);
    setMobileOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setMobileServicesOpen((prev) => !prev);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-[#FDFCF9]/95 backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "border-b border-[#D9D2C5] shadow-[0_12px_45px_rgba(38,32,24,0.08)]"
            : "border-b border-[#E8E2D8]"
        }`}
      >
        {/* =====================================================
            TOP BAR
        ===================================================== */}
        <div className="hidden border-b border-[#3A352E] bg-[#181713] text-[#F7F2E9] lg:block">
          <div className="mx-auto flex h-[40px] max-w-[1480px] items-center justify-between px-5 sm:px-7 lg:px-10">
            <div className="flex items-center gap-5">
              <a
                href="mailto:info@globaltechnext.com"
                className="group flex items-center gap-2 text-[12px] tracking-[0.2px] text-[#C8C0B2] transition duration-300 hover:text-[#E5C98A]"
              >
                <IconMail
                  size={16}
                  stroke={1.6}
                  className="text-[#9E9586] transition group-hover:text-[#FF7200]"
                />

                <span>info@globaltechnext.com</span>
              </a>

              <span className="h-3 w-px bg-[#5B554A]" />

              <a
                href="tel:+919555787844"
                className="group flex items-center gap-2 text-[12px] tracking-[0.2px] text-[#C8C0B2] transition duration-300 hover:text-[#E5C98A]"
              >
                <IconPhone
                  size={16}
                  stroke={1.6}
                  className="text-[#9E9586] transition group-hover:text-[#FF7200]"
                />

                <span>+91 9555787844</span>
              </a>

              <span className="h-3 w-px bg-[#5B554A]" />

              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[1.4px] text-[#9E9586]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7200] opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF7200]" />
                </span>

                Accepting New Projects
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.title}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[#8F887C] transition-all duration-300 hover:bg-[#2B2924] hover:text-[#FF7200]"
                    >
                      <SocialIcon size={16} stroke={1.6} />
                    </a>
                  );
                })}
              </div>

              <span className="h-3 w-px bg-[#5B554A]" />

              <Link
                href="/contact"
                className="group flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#FF7200] transition duration-300 hover:text-[#F0D89D]"
              >
                Book a Private Consultation

                <IconArrowUpRight
                  size={14}
                  stroke={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN HEADER
        ===================================================== */}
        <div
          className={`mx-auto flex w-full max-w-[1480px] items-center justify-between px-4 transition-all duration-500 sm:px-7 lg:px-10 ${
            scrolled ? "h-[72px] sm:h-[76px]" : "h-[78px] sm:h-[88px]"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 shrink-0 items-center"
          >
            <Image
              src="/logo.webp"
              alt="GlobalTechNext"
              width={240}
              height={70}
              priority
              className={`h-auto max-w-full object-contain transition-all duration-500 ${
                scrolled
                  ? "w-[155px] sm:w-[190px] lg:w-[205px]"
                  : "w-[165px] sm:w-[205px] lg:w-[225px]"
              }`}
            />
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}
          <nav className="hidden items-center xl:flex">
            <DesktopNavLink
              href="/"
              title="Home"
              active={isActive("/")}
            />

            <DesktopNavLink
              href="/about"
              title="About"
              active={isActive("/about")}
            />

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`group relative flex items-center gap-2 px-4 py-3 text-[14px] font-bold tracking-[0.15px] transition-all duration-300 ${
                  desktopServicesOpen || isActive("/services")
                    ? "text-[#191815]"
                    : "text-[#6B665E] hover:text-[#191815]"
                }`}
              >
                <span>Services</span>

                <IconChevronDown
                  size={16}
                  stroke={1.7}
                  className={`transition-transform duration-300 ${
                    desktopServicesOpen
                      ? "rotate-180 text-[#FF7200]"
                      : ""
                  }`}
                />

                <span
                  className={`absolute bottom-[4px] left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-[#FF7200] transition-all duration-300 ${
                    desktopServicesOpen || isActive("/services")
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }`}
                />
              </Link>

              {/* DESKTOP SERVICES MENU */}
              <div
                className={`absolute left-1/2 top-[57px] w-[820px] max-w-[calc(100vw-40px)] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  desktopServicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-3 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[28px] border border-[#DED6C8] bg-[#FCFBF8] p-3 shadow-[0_35px_100px_rgba(35,30,23,0.16)]">
                  <div className="grid grid-cols-[1fr_245px] gap-3">
                    <div className="relative overflow-hidden rounded-[23px] border border-[#E7E0D4] bg-[#F4F0E8] p-6">
                      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#D8C59F]/30" />

                      <div className="relative">
                        <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B1A17] text-[#FF7200] shadow-sm">
                            <IconSparkles size={16} stroke={1.6} />
                          </span>

                          <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#968C7B]">
                            Our Expertise
                          </span>
                        </div>

                        <h3 className="mt-5 max-w-[470px] text-[22px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#191815]">
                          Digital experiences crafted with precision.
                        </h3>

                        <p className="mt-3 max-w-[460px] text-[11px] leading-5 text-[#81796D]">
                          Strategy, design, technology and marketing combined
                          to create refined digital experiences built for
                          growth.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[1.4px] text-[#9C8149]">
                          <span className="h-px w-7 bg-[#FF7200]" />
                          Crafted for ambitious brands
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/services/web-development"
                      className="group relative overflow-hidden rounded-[23px] bg-[#1B1A17] p-5 text-white"
                    >
                      <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full border border-[#FF7200]/10 transition-transform duration-700 group-hover:scale-125" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#FF7200]">
                            <IconCode size={18} stroke={1.6} />
                          </span>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
                            <IconArrowUpRight
                              size={14}
                              className="text-[#A8A092] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF7200]"
                            />
                          </span>
                        </div>

                        <p className="mt-7 text-[8px] font-semibold uppercase tracking-[2px] text-[#9D9588]">
                          Featured Service
                        </p>

                        <h4 className="mt-2 text-[16px] font-semibold">
                          Web Development
                        </h4>

                        <p className="mt-2 text-[10px] leading-4 text-[#A9A197]">
                          Fast, elegant and scalable digital experiences.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {services.map((service) => {
                      const ServiceIcon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="group flex min-w-0 gap-4 rounded-[20px] border border-transparent p-4 transition-all duration-300 hover:border-[#E6DED0] hover:bg-[#F6F2EB]"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E4DDD1] bg-[#FBFAF7] text-[#6D665B] transition-all duration-300 group-hover:border-[#CDB77F] group-hover:bg-[#1B1A17] group-hover:text-[#FF7200]">
                            <ServiceIcon size={19} stroke={1.6} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#24221E]">
                              <span>{service.title}</span>

                              <IconArrowUpRight
                                size={12}
                                className="shrink-0 text-[#A18C64] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                              />
                            </div>

                            <p className="mt-1.5 text-[10px] leading-5 text-[#8A8378]">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-4 rounded-[20px] border border-[#E4DDD2] bg-[#FAF8F4] p-3.5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1B1A17] text-[#FF7200]">
                        <IconWorld size={16} stroke={1.6} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-[#292721]">
                          Need something more tailored?
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#948C80]">
                          Let&apos;s discuss your unique requirements.
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/services"
                      className="group flex shrink-0 items-center gap-2 rounded-full bg-[#1B1A17] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.7px] text-[#F6F0E5] transition-all duration-300 hover:bg-[#292721]"
                    >
                      Explore Services

                      <IconArrowUpRight
                        size={12}
                        className="text-[#FF7200] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <DesktopNavLink
              href="/portfolio"
              title="Portfolio"
              active={isActive("/portfolio")}
            />

            <DesktopNavLink
              href="/contact"
              title="Contact"
              active={isActive("/contact")}
            />

            <DesktopNavLink
              href="/blog"
              title="Insights"
              active={isActive("/blog")}
            />
          </nav>

          {/* ===================================================
              RIGHT ACTIONS
          =================================================== */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 xl:flex">
              <a
                href="mailto:info@globaltechnext.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#DED7CB] bg-[#FBFAF7] text-[#686158] transition-all duration-300 hover:border-[#C8AE72] hover:bg-[#1B1A17] hover:text-[#FF7200]"
              >
                <IconMail size={15} stroke={1.6} />
              </a>

              <a
                href="tel:+919555787844"
                aria-label="Phone"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#DED7CB] bg-[#FBFAF7] text-[#686158] transition-all duration-300 hover:border-[#C8AE72] hover:bg-[#1B1A17] hover:text-[#FF7200]"
              >
                <IconPhone size={15} stroke={1.6} />
              </a>
            </div>

            <Link
              href="/contact"
              className="group hidden items-center gap-3 rounded-full border border-[#25231F] bg-[#1B1A17] py-2 pl-5 pr-2 text-[10px] font-bold uppercase tracking-[1px] text-[#F7F1E6] shadow-[0_8px_25px_rgba(27,26,23,0.12)] transition-all duration-300 hover:border-[#FF7200] hover:bg-[#25231F] lg:flex"
            >
              <span>Let&apos;s Talk</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF7200] text-[#1B1A17] transition-transform duration-300 group-hover:rotate-45">
                <IconArrowUpRight size={16} stroke={2.1} />
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDD6CA] bg-[#F7F4EE] text-[#25231F] transition-all duration-300 hover:border-[#C8AE72] hover:bg-[#1B1A17] hover:text-[#FF7200] sm:h-11 sm:w-11 xl:hidden"
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <IconMenu2 size={19} stroke={1.7} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU PORTAL
      ===================================================== */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[99999] xl:hidden ${
              mobileOpen
                ? "pointer-events-auto visible"
                : "pointer-events-none invisible"
            }`}
            aria-hidden={!mobileOpen}
          >
            {/* BACKDROP */}
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMobileMenu}
              className={`absolute inset-0 h-full w-full cursor-default bg-[#181713]/55 backdrop-blur-[3px] transition-opacity duration-300 ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* =================================================
                MOBILE DRAWER
            ================================================= */}
            <aside
              id="mobile-navigation"
              aria-hidden={!mobileOpen}
              className={`fixed right-0 top-0 z-[100000] h-[100dvh] w-[min(390px,88vw)] max-w-full overflow-hidden border-l border-[#DED6C8] bg-[#FDFCF9] shadow-[-25px_0_80px_rgba(25,22,18,0.22)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                mobileOpen
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
            >
              {/* DRAWER HEADER */}
              <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#E4DED4] bg-[#FDFCF9] px-5">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex min-w-0 items-center"
                >
                  <Image
                    src="/logo.webp"
                    alt="GlobalTechNext"
                    width={190}
                    height={58}
                    priority
                    className="h-auto w-[145px] max-w-full object-contain"
                  />
                </Link>

                {/* ONE CLOSE BUTTON ONLY */}
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DED7CB] bg-[#F7F4EE] text-[#514B43] transition-all duration-300 hover:bg-[#1B1A17] hover:text-[#FF7200]"
                  aria-label="Close menu"
                >
                  <IconX size={19} stroke={1.7} />
                </button>
              </div>

              {/* DRAWER BODY */}
              <div className="relative h-[calc(100dvh-76px)] min-h-0 w-full overflow-hidden">
                {/* =================================================
                    MAIN MOBILE PANEL
                ================================================= */}
                <div
                  className={`absolute inset-0 h-full w-full overflow-x-hidden overflow-y-auto overscroll-contain px-5 py-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    mobileServicesOpen
                      ? "-translate-x-full"
                      : "translate-x-0"
                  }`}
                  style={{
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* INTRO CARD */}
                  <div className="mb-5 w-full max-w-full overflow-hidden rounded-[24px] bg-[#1B1A17] p-5 text-white shadow-[0_15px_45px_rgba(27,26,23,0.12)]">
                    <div className="relative min-w-0">
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#FF7200]/10" />

                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7200]" />

                            <span className="text-[8px] font-semibold uppercase tracking-[1.8px] text-[#A9A093]">
                              GlobalTechNext
                            </span>
                          </div>

                          <h3 className="mt-3 text-[18px] font-semibold leading-[1.2] tracking-[-0.3px]">
                            Digital excellence,
                            <br />
                            thoughtfully crafted.
                          </h3>

                          <p className="mt-2 max-w-[260px] text-[10px] leading-5 text-[#9D968A]">
                            Premium digital solutions designed to move
                            ambitious businesses forward.
                          </p>
                        </div>

                        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#FF7200]/20 bg-[#FF7200]/10 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.7px] text-[#FF7200]">
                          <IconCircleFilled size={5} />
                          Available
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <a
                          href="mailto:info@globaltechnext.com"
                          className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-[10px] font-semibold text-[#D2CBC0] transition hover:bg-white/10 hover:text-white"
                        >
                          <IconMail size={14} />
                          <span>Email Us</span>
                        </a>

                        <a
                          href="tel:+919555787844"
                          className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-[10px] font-semibold text-[#D2CBC0] transition hover:bg-white/10 hover:text-white"
                        >
                          <IconPhone size={14} />
                          <span>Call Us</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* NAVIGATION */}
                  <div className="mb-5">
                    <p className="px-1 text-[8px] font-bold uppercase tracking-[1.8px] text-[#A0988C]">
                      Navigation
                    </p>

                    <div className="mt-2 w-full overflow-hidden rounded-[20px] border border-[#E5DED4] bg-[#FBFAF7]">
                      {navItems.map((item, index) => {
                        if (item.children) {
                          return (
                            <button
                              key={item.title}
                              type="button"
                              onClick={toggleServices}
                              className={`flex w-full items-center justify-between gap-3 border-b border-[#E8E2D9] px-4 py-3.5 text-left text-[14px] font-bold transition-all ${
                                isActive("/services")
                                  ? "bg-[#F5F0E7] text-[#1B1A17]"
                                  : "text-[#5E584F] hover:bg-[#F5F0E7]"
                              }`}
                            >
                              <span>Services</span>

                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B1A17] text-[#FF7200]">
                                <IconArrowUpRight
                                  size={16}
                                  stroke={1.8}
                                />
                              </span>
                            </button>
                          );
                        }

                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-[14px] font-bold transition-all ${
                              index !== navItems.length - 1
                                ? "border-b border-[#E8E2D9]"
                                : ""
                            } ${
                              isActive(item.href)
                                ? "bg-[#F5F0E7] text-[#1B1A17]"
                                : "text-[#5E584F] hover:bg-[#F5F0E7] hover:text-[#1B1A17]"
                            }`}
                          >
                            <span>{item.title}</span>

                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                                isActive(item.href)
                                  ? "bg-[#1B1A17] text-[#FF7200]"
                                  : "bg-[#F2EEE6] text-[#938979]"
                              }`}
                            >
                              <IconArrowUpRight
                                size={16}
                                stroke={1.7}
                              />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* STATS */}
                  <div className="grid w-full grid-cols-3 gap-2">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="min-w-0 rounded-[17px] border border-[#E3DDD2] bg-[#FBFAF7] p-3 text-center"
                      >
                        <p className="text-[17px] font-semibold tracking-tight text-[#1B1A17]">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-[7px] font-bold uppercase leading-3 tracking-[0.5px] text-[#9B9285]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* START PROJECT */}
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="group mt-4 flex w-full items-center justify-between gap-3 rounded-[20px] bg-[#1B1A17] px-5 py-4 text-white shadow-[0_12px_30px_rgba(27,26,23,0.12)]"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold">
                        Start a Project
                      </p>

                      <p className="mt-1 text-[9px] text-[#9D968A]">
                        Let&apos;s create something exceptional.
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF7200] text-[#1B1A17] transition-transform duration-300 group-hover:rotate-45">
                      <IconArrowUpRight size={17} />
                    </span>
                  </Link>

                  {/* WHY US */}
                  <div className="mt-5 w-full rounded-[20px] border border-[#E3DDD2] bg-[#F5F0E7] p-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1B1A17] text-[#FF7200]">
                        <IconSparkles size={14} />
                      </span>

                      <p className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#766E62]">
                        Why GlobalTechNext
                      </p>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {[
                        "Modern Technology",
                        "Business Focused",
                        "Scalable Solutions",
                        "Dedicated Support",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E5DED2] bg-[#FBFAF7] px-3 py-2.5"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1B1A17] text-[#FF7200]">
                            <IconCheck size={10} stroke={2.5} />
                          </span>

                          <span className="min-w-0 text-[8px] font-semibold text-[#5E584F]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SOCIAL */}
                  <div className="mt-5 border-t border-[#E4DDD2] pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[8px] font-bold uppercase tracking-[1.8px] text-[#A0988C]">
                          Follow Us
                        </p>

                        <p className="mt-1 text-[10px] font-semibold text-[#4B463E]">
                          Connect with us
                        </p>
                      </div>

                      <div className="flex shrink-0 gap-1.5">
                        {socialLinks.map((social) => {
                          const SocialIcon = social.icon;

                          return (
                            <a
                              key={social.title}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.title}
                              className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DED7CB] bg-[#FBFAF7] text-[#666057] transition-all duration-300 hover:border-[#1B1A17] hover:bg-[#1B1A17] hover:text-[#FF7200]"
                            >
                              <SocialIcon size={16} stroke={1.6} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="h-8" />
                </div>

                {/* =================================================
                    MOBILE SERVICES PANEL
                ================================================= */}
                <div
                  className={`absolute inset-0 h-full w-full overflow-x-hidden overflow-y-auto overscroll-contain bg-[#FDFCF9] px-5 py-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    mobileServicesOpen
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* SERVICES HEADER */}
                  <div className="mb-5 flex items-center gap-3 border-b border-[#E4DED4] pb-4">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(false)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DED7CB] bg-[#F7F4EE] text-[#514B43] transition-all hover:bg-[#1B1A17] hover:text-[#FF7200]"
                      aria-label="Back to navigation"
                    >
                      <IconArrowLeft size={16} stroke={1.8} />
                    </button>

                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[1.7px] text-[#A0988C]">
                        Navigation
                      </p>

                      <p className="mt-0.5 text-[14px] font-semibold text-[#1B1A17]">
                        Services
                      </p>
                    </div>
                  </div>

                  {/* ALL SERVICES */}
                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="mb-3 flex w-full items-center justify-between gap-3 rounded-[18px] border border-[#E2DACE] bg-[#F5F0E7] px-4 py-3.5"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#1B1A17]">
                        All Services
                      </p>

                      <p className="mt-0.5 text-[8px] text-[#8D8579]">
                        Explore our complete expertise
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B1A17] text-[#FF7200]">
                      <IconArrowUpRight size={14} />
                    </span>
                  </Link>

                  {/* SERVICES LIST */}
                  <div className="w-full space-y-2">
                    {services.map((service) => {
                      const ServiceIcon = service.icon;

                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className="group flex w-full min-w-0 items-center gap-3 rounded-[18px] border border-[#E5DED4] bg-[#FBFAF7] p-3.5 transition-all duration-300 hover:border-[#CDB77F] hover:bg-[#F5F0E7]"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E1D9CC] bg-white text-[#696258] transition-all duration-300 group-hover:border-[#CDB77F] group-hover:bg-[#1B1A17] group-hover:text-[#FF7200]">
                            <ServiceIcon size={17} stroke={1.6} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-semibold text-[#39352F]">
                              {service.title}
                            </p>

                            <p className="mt-1 text-[8px] leading-4 text-[#938B7E]">
                              {service.description}
                            </p>
                          </div>

                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2EEE6] text-[#938979] transition-all group-hover:bg-[#1B1A17] group-hover:text-[#FF7200]">
                            <IconArrowUpRight
                              size={16}
                              stroke={1.7}
                            />
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* CUSTOM SOLUTION */}
                  <div className="mt-5 w-full rounded-[20px] border border-[#E3DDD2] bg-[#1B1A17] p-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FF7200] text-[#1B1A17]">
                        <IconSparkles size={14} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold">
                          Need a custom solution?
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#9D968A]">
                          Let&apos;s discuss your requirements.
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7200] px-4 py-3 text-[9px] font-bold uppercase tracking-[1px] text-[#1B1A17]"
                    >
                      Start a Conversation

                      <IconArrowUpRight size={16} />
                    </Link>
                  </div>

                  <div className="h-8" />
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}

function DesktopNavLink({ href, title, active }) {
  return (
    <Link
      href={href}
      className={`group relative px-4 py-3 text-[14px] font-bold tracking-[0.15px] transition-all duration-300 ${
        active
          ? "text-[#1B1A17]"
          : "text-[#6B665E] hover:text-[#1B1A17]"
      }`}
    >
      {title}

      <span
        className={`absolute bottom-[4px] left-1/2 h-[1.5px] -translate-x-1/2 rounded-full bg-[#FF7200] transition-all duration-300 ${
          active ? "w-5" : "w-0 group-hover:w-5"
        }`}
      />
    </Link>
  );
}