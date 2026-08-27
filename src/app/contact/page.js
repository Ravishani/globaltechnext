"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconDeviceMobile,
  IconMail,
  IconMapPin,
  IconPalette,
  IconPhone,
  IconSparkles,
  IconWorld,
} from "@tabler/icons-react";

const services = [
  {
    title: "Web Development",
    description: "Fast, modern and scalable websites",
    icon: IconCode,
  },
  {
    title: "Web Applications",
    description: "Powerful applications for your business",
    icon: IconDeviceMobile,
  },
  {
    title: "UI / UX Design",
    description: "Premium interfaces and digital experiences",
    icon: IconPalette,
  },
  {
    title: "Digital Solutions",
    description: "Technology solutions built around your goals",
    icon: IconWorld,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [serviceOpen, setServiceOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target)
      ) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((previous) => ({
      ...previous,
      service: service.title,
    }));

    setServiceOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#080808] text-white">

      <div className="pointer-events-none absolute left-[-220px] top-[120px] h-[500px] w-[500px] rounded-full bg-[#FF5A00]/[0.055] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#FF8A00]/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[20%] left-[40%] h-[350px] w-[350px] rounded-full bg-[#FF6500]/[0.025] blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:70px_70px]" />

      <section className="relative">

        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-7 lg:px-10">

          <div className="grid min-h-[850px] items-center gap-14 py-24 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:py-28">

            <div className="relative z-10">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">

                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#FF6500] opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-[#FF6500]" />
                </span>

                <span className="text-[8px] font-bold uppercase tracking-[2.5px] text-[#A39D96]">
                  Let's Start Something Great
                </span>

              </div>

              <h1 className="max-w-[680px] text-[42px] font-[900] leading-[45px] tracking-[-2px] sm:text-[56px] sm:leading-[59px] lg:text-[68px] lg:leading-[70px] lg:tracking-[-3px]">
                Let's build
                <span className="block text-[#6E6861]">
                  something
                </span>

                <span className="block bg-gradient-to-r from-[#FF4D00] via-[#FF7200] to-[#FFAA00] bg-clip-text text-transparent">
                  remarkable.
                </span>
              </h1>

              <p className="mt-6 max-w-[570px] text-[11px] leading-[20px] text-[#77716A] sm:text-[12px] sm:leading-[22px] lg:text-[13px] lg:leading-[23px]">
                Have an idea, a business challenge or a digital product you
                want to build? Tell us what you're working on and let's
                explore how we can create something impactful together.
              </p>

              <div className="mt-9 grid max-w-[580px] gap-3 sm:grid-cols-2">

                <ContactInfo
                  icon={<IconMail size={17} stroke={1.5} />}
                  title="Email"
                  value="info@globaltechnext.com"
                  href="mailto:info@globaltechnext.com"
                />

                <ContactInfo
                  icon={<IconPhone size={17} stroke={1.5} />}
                  title="Phone"
                  value="9555787844"
                  href="tel:9555787844"
                />

                <ContactInfo
                  icon={<IconMapPin size={17} stroke={1.5} />}
                  title="Location"
                  value="India"
                />

                <ContactInfo
                  icon={<IconSparkles size={17} stroke={1.5} />}
                  title="Response Time"
                  value="Within 24 hours"
                />

              </div>

              <div className="mt-9">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#4E4944]">
                  Follow Us
                </p>

                <div className="mt-3 flex gap-2">

                  <SocialIcon
                    href="#"
                    label="LinkedIn"
                    icon={<IconBrandLinkedin size={14} />}
                  />

                  <SocialIcon
                    href="#"
                    label="Instagram"
                    icon={<IconBrandInstagram size={14} />}
                  />

                  <SocialIcon
                    href="#"
                    label="Facebook"
                    icon={<IconBrandFacebook size={14} />}
                  />

                  <SocialIcon
                    href="#"
                    label="X"
                    icon={<IconBrandX size={13} />}
                  />

                </div>

              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">

                <Feature text="Strategy First" />
                <Feature text="Premium Design" />
                <Feature text="Built To Scale" />

              </div>

            </div>

            <div className="relative z-20">

              <div className="absolute -inset-5 rounded-[35px] bg-[#FF6500]/[0.025] blur-3xl" />

              <div className="relative rounded-[30px] border border-white/[0.08] bg-[#101010]/95 p-5 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7 lg:p-8">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="h-[2px] w-6 rounded-full bg-[#FF6500]" />

                      <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#FF7900]">
                        Start A Conversation
                      </span>

                    </div>

                    <h2 className="mt-3 text-[24px] font-[900] tracking-[-0.9px] text-white sm:text-[28px]">
                      Tell us about your project
                    </h2>

                    <p className="mt-2 max-w-[450px] text-[10px] leading-[17px] text-[#625D57]">
                      Share a few details and we'll get back to you with the
                      right direction for your project.
                    </p>

                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF6500]/10 bg-[#FF6500]/[0.06] text-[#FF7900] sm:flex">

                    <IconSparkles
                      size={21}
                      stroke={1.3}
                    />

                  </div>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7"
                >

                  <div className="grid gap-4 sm:grid-cols-2">

                    <InputField
                      label="Your Name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="9555787844"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <div
                      ref={serviceRef}
                      className="relative"
                    >

                      <label className="mb-2 block text-[8px] font-bold uppercase tracking-[1.2px] text-[#625C56]">
                        Service Required
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setServiceOpen((previous) => !previous)
                        }
                        className={`group flex h-[48px] w-full items-center justify-between rounded-xl border bg-[#151515] px-4 text-left outline-none transition-all duration-300 ${
                          serviceOpen
                            ? "border-[#FF6500]/50 bg-[#181818]"
                            : "border-white/[0.08] hover:border-white/[0.14]"
                        }`}
                      >

                        <div className="flex min-w-0 items-center gap-3">

                          {formData.service ? (
                            <>
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF6500]/10 text-[#FF7900]">
                                {(() => {
                                  const selected = services.find(
                                    (item) =>
                                      item.title === formData.service
                                  );

                                  const SelectedIcon = selected?.icon;

                                  return SelectedIcon ? (
                                    <SelectedIcon
                                      size={14}
                                      stroke={1.5}
                                    />
                                  ) : null;
                                })()}
                              </div>

                              <span className="truncate text-[10px] font-medium text-white">
                                {formData.service}
                              </span>
                            </>
                          ) : (
                            <span className="text-[10px] text-[#4E4944]">
                              Select a service
                            </span>
                          )}

                        </div>

                        <IconChevronDown
                          size={15}
                          stroke={1.6}
                          className={`shrink-0 text-[#706A64] transition-transform duration-300 ${
                            serviceOpen ? "rotate-180 text-[#FF7900]" : ""
                          }`}
                        />

                      </button>

                      {serviceOpen && (
                        <div className="absolute left-0 right-0 top-[76px] z-50 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111111] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">

                          <div className="px-3 pb-2 pt-2">

                            <p className="text-[7px] font-bold uppercase tracking-[1.5px] text-[#4F4944]">
                              Choose Your Service
                            </p>

                          </div>

                          <div className="space-y-1">

                            {services.map((service) => {
                              const ServiceIcon = service.icon;

                              const isSelected =
                                formData.service === service.title;

                              return (
                                <button
                                  key={service.title}
                                  type="button"
                                  onClick={() =>
                                    handleServiceSelect(service)
                                  }
                                  className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all duration-200 ${
                                    isSelected
                                      ? "bg-[#FF6500]/10"
                                      : "hover:bg-white/[0.045]"
                                  }`}
                                >

                                  <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${
                                      isSelected
                                        ? "bg-[#FF6500] text-white"
                                        : "bg-white/[0.04] text-[#FF7900]"
                                    }`}
                                  >
                                    <ServiceIcon
                                      size={16}
                                      stroke={1.5}
                                    />
                                  </span>

                                  <span className="min-w-0 flex-1">

                                    <span className="block text-[10px] font-semibold text-white">
                                      {service.title}
                                    </span>

                                    <span className="mt-0.5 block truncate text-[8px] text-[#5E5852]">
                                      {service.description}
                                    </span>

                                  </span>

                                  {isSelected && (
                                    <IconCheck
                                      size={15}
                                      className="shrink-0 text-[#FF7900]"
                                    />
                                  )}

                                </button>
                              );
                            })}

                          </div>

                        </div>
                      )}

                    </div>

                  </div>

                  <div className="mt-4">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[1.2px] text-[#625C56]">
                      Project Details
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals or requirements..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#151515] px-4 py-3.5 text-[10px] leading-[18px] text-white outline-none transition-all duration-300 placeholder:text-[#4E4944] focus:border-[#FF6500]/50 focus:bg-[#181818]"
                    />

                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex max-w-[270px] items-start gap-2">

                      <IconCheck
                        size={13}
                        className="mt-[1px] shrink-0 text-[#FF6500]"
                      />

                      <p className="text-[8px] leading-[14px] text-[#514C47]">
                        Your information is safe with us. We only use it to
                        respond to your enquiry.
                      </p>

                    </div>

                    <button
                      type="submit"
                      className="group flex h-[50px] w-full items-center justify-between rounded-full bg-gradient-to-r from-[#FF4D00] to-[#FF8500] px-5 text-[8px] font-bold uppercase tracking-[1.3px] text-white shadow-[0_12px_35px_rgba(255,90,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,90,0,0.25)] sm:w-[185px]"
                    >

                      <span>
                        Send Enquiry
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:rotate-45">

                        <IconArrowUpRight
                          size={14}
                          stroke={1.8}
                        />

                      </span>

                    </button>

                  </div>

                  {submitted && (
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#FF6500]/20 bg-[#FF6500]/[0.06] px-4 py-3">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6500]/10">
                        <IconCheck
                          size={14}
                          className="text-[#FF7900]"
                        />
                      </span>

                      <div>

                        <p className="text-[9px] font-semibold text-white">
                          Enquiry submitted successfully
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#625C56]">
                          Our team will get back to you shortly.
                        </p>

                      </div>

                    </div>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-white/[0.06] bg-[#0C0C0C] py-16 sm:py-20">

        <div className="mx-auto max-w-[1480px] px-5 sm:px-7 lg:px-10">

          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-center">

            <div>

              <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#FF6500]">
                How We Work
              </span>

              <h2 className="mt-3 max-w-[400px] text-[29px] font-[900] leading-[33px] tracking-[-1.3px] text-white">
                Simple process.
                <span className="block text-[#6D6760]">
                  Powerful results.
                </span>
              </h2>

            </div>

            <div className="grid gap-3 sm:grid-cols-3">

              <ProcessCard
                number="01"
                title="Discover"
                text="We understand your business, audience and goals."
              />

              <ProcessCard
                number="02"
                title="Create"
                text="We design and develop a solution built around your needs."
              />

              <ProcessCard
                number="03"
                title="Grow"
                text="We help your digital experience evolve with your business."
              />

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white px-5 py-14 sm:px-7 sm:py-20 lg:px-10">

        <div className="mx-auto max-w-[1150px]">

          <div className="relative overflow-hidden rounded-[30px] bg-[#090909] px-6 py-12 text-center sm:px-12 sm:py-16">

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6500]/10 blur-[110px]" />

            <div className="relative">

              <span className="text-[8px] font-bold uppercase tracking-[2.5px] text-[#FF7900]">
                Ready When You Are
              </span>

              <h2 className="mx-auto mt-3 max-w-[700px] text-[30px] font-[900] leading-[35px] tracking-[-1.4px] text-white sm:text-[42px] sm:leading-[45px]">
                Your next big idea
                <span className="block bg-gradient-to-r from-[#FF4D00] to-[#FFAA00] bg-clip-text text-transparent">
                  starts with a conversation.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-[550px] text-[10px] leading-[18px] text-[#6D6760] sm:text-[11px] sm:leading-[20px]">
                No complicated process. Just a simple conversation about what
                you want to build.
              </p>

              <a
                href="mailto:info@globaltechnext.com"
                className="group mx-auto mt-7 flex h-[50px] w-fit items-center gap-3 rounded-full bg-white px-6 text-[8px] font-bold uppercase tracking-[1.3px] text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6500] hover:text-white"
              >
                Start A Conversation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#111111]">
                  <IconArrowUpRight
                    size={13}
                    stroke={1.8}
                  />
                </span>

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label className="mb-2 block text-[8px] font-bold uppercase tracking-[1.2px] text-[#625C56]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-[48px] w-full rounded-xl border border-white/[0.08] bg-[#151515] px-4 text-[10px] text-white outline-none transition-all duration-300 placeholder:text-[#4E4944] focus:border-[#FF6500]/50 focus:bg-[#181818]"
      />

    </div>
  );
}

function ContactInfo({
  icon,
  title,
  value,
  href,
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-[#FF7900] transition-all duration-300 group-hover:border-[#FF6500]/30 group-hover:bg-[#FF6500]/10">
        {icon}
      </span>

      <span className="min-w-0">

        <span className="block text-[7px] font-bold uppercase tracking-[1.2px] text-[#4F4A45]">
          {title}
        </span>

        <span className="mt-1 block truncate text-[10px] font-medium text-[#88817A] transition-colors group-hover:text-white sm:text-[11px]">
          {value}
        </span>

      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-[#FF6500]/20 hover:bg-white/[0.035]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
      {content}
    </div>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-[#625D57] transition-all duration-300 hover:border-[#FF6500]/30 hover:bg-[#FF6500] hover:text-white"
    >
      {icon}
    </a>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2">

      <IconCheck
        size={13}
        stroke={2}
        className="text-[#FF6500]"
      />

      <span className="text-[8px] font-semibold uppercase tracking-[0.7px] text-[#625C56]">
        {text}
      </span>

    </div>
  );
}

function ProcessCard({
  number,
  title,
  text,
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6500]/20 hover:bg-white/[0.035]">

      <div className="flex items-center justify-between">

        <span className="text-[8px] font-bold tracking-[1.5px] text-[#FF6500]">
          {number}
        </span>

        <IconArrowUpRight
          size={14}
          className="text-[#3E3935] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6500]"
        />

      </div>

      <h3 className="mt-5 text-[13px] font-[800] text-white">
        {title}
      </h3>

      <p className="mt-2 text-[9px] leading-[16px] text-[#625C56]">
        {text}
      </p>

    </div>
  );
}