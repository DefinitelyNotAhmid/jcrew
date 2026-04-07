"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CAPABILITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    num: "01",
    label: "Clean Fuel Systems",
    desc: "Proven clean fuel infrastructure reducing emission loads across industrial and municipal operations at institutional scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
    num: "02",
    label: "Municipal Infrastructure",
    desc: "Energy systems engineered to the performance and accountability requirements of public authorities and regulated utilities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22V12M12 12C12 7 7 4 3 6M12 12C12 7 17 4 21 6M12 12C9 15 6 17 3 21M12 12C15 15 18 17 21 21" />
      </svg>
    ),
    num: "03",
    label: "Zero-Emission Performance",
    desc: "Infrastructure designed to advance verified zero-emission objectives and long-term ESG compliance metrics.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16v4H4zM4 12h16v4H4zM4 20h16" /><circle cx="8" cy="20" r="1" /><circle cx="16" cy="20" r="1" />
      </svg>
    ),
    num: "04",
    label: "Waste-to-Energy Conversion",
    desc: "Proprietary conversion pathways that transform organic and industrial waste streams into quantifiable, recoverable energy assets.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Integrated by Design",
    body: "Every system we deploy is coordinated across regulatory, engineering, and financial workstreams — eliminating the fragmentation that derails infrastructure projects.",
  },
  {
    title: "Scalable Architecture",
    body: "Our infrastructure models are engineered for scalability — from municipal pilots to regional multi-site programs — within a consistent accountability framework.",
  },
  {
    title: "Procurement-Safe Delivery",
    body: "Programs are structured to satisfy public procurement requirements, grant compliance obligations, and institutional audit standards from inception.",
  },
];

export default function CleanEnergyPage() {
  const capRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const govRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("expertise-visible");
            splitObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    [diffRef, imgRef].forEach((r) => {
      if (r.current) splitObserver.observe(r.current);
    });

    const capObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ce-cap-visible");
            capObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (capRef.current) capObserver.observe(capRef.current);

    const scopeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ce-scope-visible");
            const items = entry.target.querySelectorAll(".ce-scope-item");
            items.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, i * 60);
            });
            scopeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (scopeRef.current) scopeObserver.observe(scopeRef.current);

    const communityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ce-community-visible");
            communityObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (communityRef.current) communityObserver.observe(communityRef.current);

    const govObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ce-gov-visible");
            govObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (govRef.current) govObserver.observe(govRef.current);

    return () => {
      splitObserver.disconnect();
      capObserver.disconnect();
      scopeObserver.disconnect();
      communityObserver.disconnect();
      govObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Cinematic video, center-aligned
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Hero-Energy-small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Multi-layer overlay: deep space atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020d04]/85 via-[#020d04]/60 to-[#020d04]/90" />
        {/* Radial vignette — centers focus on the earth */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(2,13,4,0.7) 100%)" }} />

        {/* ── Hero Content — center aligned ── */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-8 py-32 flex flex-col items-center text-center gap-7">

          {/* Eyebrow — contracting tracking on entrance */}
          <p
            className="ce-eyebrow text-[#9ecf62] text-[0.6rem] uppercase tracking-[0.38em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, animationDelay: "0.1s" }}
          >
            JCrew Environmental Solution · Clean Energy Division
          </p>

          {/* Divider line — expands outward */}
          <div className="ce-divider h-px bg-[#4a7229]/60" style={{ animationDelay: "0.3s" }} />

          {/* Main headline — shimmer on key phrase */}
          <h1
            className="ce-animate text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, animationDelay: "0.45s" }}
          >
            Transforming Waste Streams Into{" "}
            <span className="ce-shimmer-text">
              Scalable Energy Infrastructure
            </span>
          </h1>

          {/* Secondary specs — Poppins technical tone */}
          <p
            className="ce-animate text-[#9ecf62]/80 text-[0.72rem] uppercase tracking-[0.36em]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500, animationDelay: "0.62s" }}
          >
            Integrated&nbsp;&nbsp;·&nbsp;&nbsp;Scalable&nbsp;&nbsp;·&nbsp;&nbsp;Institutionally Accountable
          </p>

          {/* Body — Poppins 300, max-width for legibility */}
          <p
            className="ce-animate text-gray-300 text-[0.9rem] md:text-[1rem] leading-[1.85] max-w-2xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, animationDelay: "0.76s" }}
          >
            JCrew Environmental coordinates end-to-end clean energy programs — converting high-value waste streams into recoverable energy assets within a single, accountable delivery framework designed for public institutions and regulated infrastructure operators.
          </p>

          {/* CTA group — glassmorphism buttons */}
          <div
            className="ce-animate flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto"
            style={{ animationDelay: "0.92s" }}
          >
            {/* Primary glass CTA */}
            <a
              href="#contact"
              className="ce-glass-btn group flex items-center justify-center gap-3 px-8 py-4 border border-[#9ecf62]/25 bg-white/5 backdrop-blur-md text-white text-[0.72rem] uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              <svg className="w-3.5 h-3.5 shrink-0 text-[#9ecf62] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Request Executive Briefing
            </a>

            {/* Secondary ghost CTA */}
            <a
              href="tel:+18448787346"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 bg-transparent text-white/80 text-[0.72rem] uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (844) 8-JCREW
            </a>
          </div>

          {/* Micro-copy */}
          <p
            className="ce-animate text-white/25 text-[0.6rem] uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400, animationDelay: "1.08s" }}
          >
            For No-Obligation · Confidential Executive Consultation
          </p>
        </div>

        {/* Bottom edge fade into white */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          CAPABILITIES — Designed for Execution
          Image center, text assembles around it
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={capRef}
          className="ce-cap-visible-trigger max-w-7xl mx-auto flex flex-col gap-12"
        >

          {/* ── Top header — assembles up ── */}
          <div className="ce-cap-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7229] text-[0.6rem] uppercase tracking-[0.38em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Division Capabilities · Designed for Execution
            </p>
            <h2
              className="text-[1.8rem] md:text-[2.4rem] text-gray-900 leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              High-Value Waste Streams,
              <br />
              Recovered as Energy Infrastructure
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-500 text-[0.85rem] md:text-[0.92rem] leading-[1.9] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              The Clean Energy Division develops and delivers integrated waste-to-energy programs — converting municipal, agricultural, and industrial waste streams into{" "}
              <span className="text-[#0a1a06] font-medium border-b border-[#4a7229]/40">clean fuels</span>,{" "}
              <span className="text-[#0a1a06] font-medium border-b border-[#4a7229]/40">Sustainable Aviation Fuel (SAF)</span>, and{" "}
              <span className="text-[#0a1a06] font-medium border-b border-[#4a7229]/40">zero-emission electricity</span> — without reliance on combustion or fresh water.
            </p>
          </div>

          {/* ── Center assembly: image flanked by spec panels ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-6 items-start">

            {/* LEFT spec panel — slides in from left */}
            <div className="ce-cap-left flex flex-col gap-5">
              {CAPABILITIES.slice(0, 2).map((cap, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-3 p-5 border border-gray-100 bg-[#f7f8f6] hover:border-[#4a7229]/35 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#eef4e8] text-[#4a7229] shrink-0 group-hover:bg-[#4a7229] group-hover:text-white transition-colors duration-300">
                      {cap.icon}
                    </div>
                    <span
                      className="text-gray-300 text-[1.1rem] leading-none group-hover:text-[#4a7229]/40 transition-colors duration-300 ml-auto"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      {cap.num}
                    </span>
                  </div>
                  <div className="h-px w-5 bg-[#4a7229]/25 group-hover:w-full transition-all duration-500" />
                  <p
                    className="text-gray-900 text-[0.8rem] leading-snug"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    {cap.label}
                  </p>
                  <p
                    className="text-gray-400 text-[0.80rem] leading-[1.72]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CENTER — image with closing statement overlaid ── */}
            <div className="ce-cap-center flex flex-col gap-0">
              <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "480px" }}>
                <Image
                  src="/clean-energy.webp"
                  alt="Industrial waste-to-energy facility — advanced energy asset development"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ filter: "brightness(0.88) contrast(1.06) saturate(0.75)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/90 via-[#0a1a06]/15 to-transparent" />

                {/* Closing statement over image */}
                <div className="absolute bottom-0 inset-x-0 px-6 pb-7 pt-14 flex flex-col gap-3">
                  <div className="h-px w-8 bg-[#9ecf62]/60" />
                  <p
                    className="text-white text-[0.88rem] leading-[1.75]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    Built for Scale.
                    <br />
                    Engineered Without Trade-Offs.
                  </p>
                  <p
                    className="text-gray-300/80 text-[0.72rem] leading-[1.7]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    We organize complex clean energy projects end-to-end — transforming legacy waste challenges into durable energy assets without combustion dependency or fresh water consumption.
                  </p>
                  <p
                    className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.28em] mt-1"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    Advanced Asset Development · JCrew Environmental
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT spec panel — slides in from right */}
            <div className="ce-cap-right flex flex-col gap-5">
              {CAPABILITIES.slice(2, 4).map((cap, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-3 p-5 border border-gray-100 bg-[#f7f8f6] hover:border-[#4a7229]/35 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#eef4e8] text-[#4a7229] shrink-0 group-hover:bg-[#4a7229] group-hover:text-white transition-colors duration-300">
                      {cap.icon}
                    </div>
                    <span
                      className="text-gray-300 text-[1.1rem] leading-none group-hover:text-[#4a7229]/40 transition-colors duration-300 ml-auto"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      {cap.num}
                    </span>
                  </div>
                  <div className="h-px w-5 bg-[#4a7229]/25 group-hover:w-full transition-all duration-500" />
                  <p
                    className="text-gray-900 text-[0.8rem] leading-snug"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    {cap.label}
                  </p>
                  <p
                    className="text-gray-400 text-[0.80rem] leading-[1.72]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPLIT — Image left, differentiators right
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6] py-24 px-5 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — image */}
          <div
            ref={imgRef}
            className="expertise-panel-left relative w-full aspect-[4/3] overflow-hidden shadow-xl"
          >
            <Image
              src="/energy-4828337_1280cr.jpg"
              alt="Clean energy infrastructure — integrated environmental program in operation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ filter: "brightness(0.9) contrast(1.05) saturate(0.8)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e05]/40 via-transparent to-[#0a1e05]/20" />
            <div className="absolute bottom-0 inset-x-0 px-7 py-5 bg-gradient-to-t from-[#0a1a06]/80 to-transparent">
              <p
                className="text-[#9ecf62] text-[0.58rem] uppercase tracking-[0.28em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Clean Energy Infrastructure · JCrew Environmental
              </p>
            </div>
          </div>

          {/* Right — differentiators */}
          <div
            ref={diffRef}
            className="expertise-panel-right flex flex-col gap-8"
          >
            <p
              className="text-[#4a7229] text-[0.6rem] uppercase tracking-[0.34em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Why JCrew Environmental
            </p>

            <div>
              <h2
                className="text-[1.75rem] md:text-[2rem] text-gray-900 leading-[1.12]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Clean Energy Projects are
                <br />
                Long-Horizon Infrastructure Programs.
              </h2>
              <div className="mt-3 h-px w-10 bg-[#4a7229]" />
            </div>

            <p
              className="text-gray-600 text-[0.9rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Successful clean energy deployment requires more than innovative technology. It demands disciplined coordination across feedstock supply, permitting, financing, workforce development, infrastructure delivery, and long-term operations.
            </p>

            <div className="flex flex-col gap-6 pt-1">
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#eef4e8] text-[#4a7229] group-hover:bg-[#4a7229] group-hover:text-white transition-colors duration-300">
                    <span
                      className="text-[0.6rem]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-gray-900 text-[0.82rem] mb-1.5"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {d.title}
                    </p>
                    <p
                      className="text-gray-500 text-[0.78rem] leading-[1.75]"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    >
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2.5 text-[0.72rem] text-[#4a7229] uppercase tracking-[0.16em] hover:text-[#3d6b22] transition-colors duration-200 w-fit"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Begin a Confidential Program Review
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COORDINATION SCOPE — Framework Assembly
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={scopeRef}
          className="max-w-6xl mx-auto flex flex-col gap-14"
        >

          {/* ── Section header ── */}
          <div className="ce-scope-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#9ecf62] text-[0.58rem] uppercase tracking-[0.38em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Clean Energy Project Coordination
            </p>
            <h2
              className="text-white text-[1.6rem] md:text-[2.2rem] leading-[1.12]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              The Program Integrator
              <br />
              for Waste-to-Energy Infrastructure
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-400 text-[0.85rem] leading-[1.9] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              The Clean Energy Division serves as the central program integrator — governing the full delivery ecosystem across every phase of waste-to-energy and clean fuel infrastructure deployment.
            </p>
          </div>

          {/* ── Scope grid — 8 items assemble on scroll ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                num: "01",
                title: "Strategic Feedstock Procurement",
                body: "Sourcing and securing reliable, cost-stable feedstock supply chains aligned with long-term program requirements.",
              },
              {
                num: "02",
                title: "Technology Deployment",
                body: "Selection, integration, and commissioning of proven conversion technologies appropriate to site and feedstock conditions.",
              },
              {
                num: "03",
                title: "Hub Development",
                body: "Site identification, entitlement, and buildout of centralized energy conversion facilities within regulatory frameworks.",
              },
              {
                num: "04",
                title: "Market Integration",
                body: "Offtake structuring, compliance market access, and positioning of produced commodities within established energy markets.",
              },
              {
                num: "05",
                title: "Capital Structuring",
                body: "Program financing architecture, grant alignment, and investor coordination structured to public procurement standards.",
              },
              {
                num: "06",
                title: "Workforce Development",
                body: "Training, certification, and long-term staffing programs aligned with operational and regulatory requirements.",
              },
              {
                num: "07",
                title: "Delivery Oversight",
                body: "Phase-controlled construction and commissioning management — every milestone documented, verified, and auditable.",
              },
              {
                num: "08",
                title: "Lifecycle Continuity",
                body: "Long-term operations planning, performance monitoring, and compliance continuity from first production through close-out.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="ce-scope-item group flex flex-col gap-3 p-5 border border-white/8 hover:border-[#4a7229]/50 hover:bg-white/5 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#4a7229] text-[0.6rem] uppercase tracking-[0.18em]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    {item.num}
                  </span>
                  <div className="h-px flex-1 mx-3 bg-white/8 group-hover:bg-[#4a7229]/40 transition-colors duration-300" />
                </div>
                <p
                  className="text-white text-[0.78rem] leading-snug"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {item.title}
                </p>
                <p
                  className="text-gray-500 text-[0.72rem] leading-[1.72] group-hover:text-gray-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Institutional Promise box ── */}
          <div className="ce-scope-promise border border-[#D4AF37]/40 bg-[#0f2208] px-8 md:px-12 py-10 flex flex-col items-center text-center gap-5">
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-[#D4AF37]/25" />
              <p
                className="text-[#D4AF37] text-[0.56rem] uppercase tracking-[0.38em] shrink-0"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                Core Institutional Promise
              </p>
              <div className="flex-1 h-px bg-[#D4AF37]/25" />
            </div>
            <h3
              className="text-white text-[1.2rem] md:text-[1.55rem] leading-[1.22]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              We Do Not Operate as an Equipment Vendor
              <br />
              or a Speculative Developer.
            </h3>
            <p
              className="text-[#9ecf62] text-[0.78rem] md:text-[0.85rem] leading-[1.85] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              JCrew Environmental organizes, aligns, and governs the full delivery ecosystem — every workstream, every phase, every obligation — under a single accountable framework from strategic procurement through lifecycle continuity.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-8 bg-[#D4AF37]/40" />
              <a
                href="#contact"
                className="flex items-center gap-2.5 text-[#D4AF37] text-[0.65rem] uppercase tracking-[0.2em] hover:text-[#f5c518] transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Request a Program Architecture Briefing
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="h-px w-8 bg-[#D4AF37]/40" />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMMUNITY IMPACT — Collective Reveal
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={communityRef}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* ── Section header — converges up ── */}
          <div className="ce-community-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7229] text-[0.58rem] uppercase tracking-[0.38em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Environmental Equity &amp; Regional Resilience
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.2rem] leading-[1.12]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Clean Energy That Strengthens Communities
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.9] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental&apos;s clean energy strategy is aligned with environmental justice, workforce development, and domestic manufacturing priorities — structured to deliver lasting regional value, not short-term construction activity.
            </p>
          </div>

          {/* ── Split: image left, coalition list right ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT — image converges from left */}
            <div className="ce-community-left relative w-full overflow-hidden shadow-xl" style={{ minHeight: "480px" }}>
              <Image
                src="/iStock-2157540670cr.jpg"
                alt="Community members and workforce partners united around clean energy infrastructure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.9) contrast(1.04) saturate(0.82)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-5">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white/70 text-[0.58rem] uppercase tracking-[0.28em]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  Strategic Coalition Partners · JCrew Environmental
                </p>
              </div>
            </div>

            {/* RIGHT — coalition list converges from right */}
            <div className="ce-community-right flex flex-col gap-8">

              <div className="flex flex-col gap-2">
                <p
                  className="text-[#4a7229] text-[0.58rem] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Coordinating Partners
                </p>
                <h3
                  className="text-gray-900 text-[1.3rem] md:text-[1.55rem] leading-[1.15]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  Structured for Strategic
                  <br />
                  Coalition Governance
                </h3>
                <div className="mt-2 h-px w-8 bg-[#4a7229]" />
              </div>

              <p
                className="text-gray-500 text-[0.85rem] leading-[1.85]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Every JCrew Environmental clean energy program is coordinated in alignment with public agencies, community stakeholders, research institutions, and workforce partners — each engagement governed by formal coordination agreements, not informal relationships.
              </p>

              {/* Partner list */}
              <div className="flex flex-col gap-0 border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 bg-[#f7f8f6] border-b border-gray-100">
                  <p
                    className="text-[0.56rem] uppercase tracking-[0.36em] text-gray-400"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Strategic Coalition Partners
                  </p>
                </div>
                {[
                  {
                    num: "01",
                    label: "State &amp; Regional Regulatory Agencies",
                    body: "Permitting authorities, environmental compliance bodies, and economic development boards at the state and regional level.",
                  },
                  {
                    num: "02",
                    label: "Environmental Justice &amp; Legacy Energy Communities",
                    body: "Frontline and historically impacted communities engaged as genuine stakeholders in program planning and benefit distribution.",
                  },
                  {
                    num: "03",
                    label: "University &amp; Applied Research Partners",
                    body: "Academic and R&amp;D institutions providing technology validation, lifecycle analysis, and independent program assessment.",
                  },
                  {
                    num: "04",
                    label: "Workforce Training &amp; Apprenticeship Programs",
                    body: "Certified training partners delivering skills development pathways aligned with clean energy operations and long-term employment.",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="flex gap-5 px-5 py-4 border-b border-gray-50 last:border-0 bg-white hover:bg-[#f9faf7] transition-colors duration-150 group"
                  >
                    <span
                      className="text-[#4a7229] text-[0.58rem] shrink-0 mt-0.5 w-5 text-right"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      {p.num}
                    </span>
                    <div className="w-px bg-gray-100 shrink-0" />
                    <div>
                      <p
                        className="text-gray-800 text-[0.78rem] mb-1 leading-snug"
                        style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: p.label }}
                      />
                      <p
                        className="text-gray-400 text-[0.72rem] leading-[1.7]"
                        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                        dangerouslySetInnerHTML={{ __html: p.body }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Closing Signature — generational commitment ── */}
          <div className="ce-community-signature border-t border-gray-100 pt-12 flex flex-col items-center text-center gap-5">
            <div className="flex items-center gap-5 w-full max-w-3xl">
              <div className="flex-1 h-px bg-gray-100" />
              <p
                className="text-[#4a7229] text-[0.54rem] uppercase tracking-[0.36em] shrink-0"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                Generational Commitment
              </p>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <p
              className="text-gray-800 text-[1rem] md:text-[1.15rem] leading-[1.85] max-w-3xl"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
            >
              Projects are structured to deliver long-term economic value through job creation, skills development, and resilient regional infrastructure — not short-term construction activity alone.
            </p>
            <p
              className="text-gray-400 text-[0.78rem] leading-[1.8] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              This is not a social responsibility statement. It is an operational design requirement embedded in every program structure JCrew Environmental delivers.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="h-px w-10 bg-[#4a7229]/30" />
              <p
                className="text-[#4a7229] text-[0.6rem] uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                JCrew Environmental Solution · Clean Energy Division
              </p>
              <div className="h-px w-10 bg-[#4a7229]/30" />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GOVERNANCE — Steadfast Charter
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={govRef}
          className="max-w-5xl mx-auto flex flex-col gap-16 items-center"
        >

          {/* ── Charter header ── */}
          <div className="ce-gov-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7229] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Governance Protocol · Clean Energy Division
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Disciplined. Partner-Driven.
              <br />
              Procurement-Safe.
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental serves as the independent project coordinator and integrator — a neutral operational authority whose role is sequencing, governance, and accountability across the full program lifecycle.
            </p>
          </div>

          {/* ── Forest image — meditation on integrity ── */}
          <div className="ce-gov-image w-full relative overflow-hidden shadow-2xl" style={{ minHeight: "520px" }}>
            <Image
              src="/kazuend-19SC2oaVZW0-unsplash-2048x1365.jpg"
              alt="Lush forest canopy — a symbol of sustained natural systems and long-horizon stewardship"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 80vw"
              style={{ filter: "brightness(0.82) contrast(1.06) saturate(0.78)" }}
            />
            {/* Top and bottom fade — pulls eye to center */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8f6]/60 via-transparent to-[#f7f8f6]/60" />
            {/* Subtle green tint overlay */}
            <div className="absolute inset-0 bg-[#0a1a06]/10" />

            {/* Centered governance statement over image */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-px bg-white/30" />
                  <p
                    className="text-white/60 text-[0.52rem] uppercase tracking-[0.75em] shrink-0"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}
                  >
                    Charter of Governance
                  </p>
                  <div className="flex-1 h-px bg-white/30" />
                </div>
                <p
                  className="text-white text-[1.1rem] md:text-[1.4rem] leading-[1.6]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  Our role is sequencing, governance,
                  and accountability — ensuring that
                  clean energy projects are delivered
                  responsibly, transparently, and at scale.
                </p>
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-px bg-white/30" />
                  <p
                    className="text-[#ffffff]/80 text-[0.52rem] uppercase tracking-[0.52em] shrink-0"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}
                  >
                    JCrew Environmental Solution
                  </p>
                  <div className="flex-1 h-px bg-white/30" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Three governance pillars ── */}
          <div className="ce-gov-block w-full grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100 overflow-hidden">
            {[
              {
                label: "Neutral Coordination",
                body: "JCrew Environmental holds no equity position in technology vendors or equipment suppliers — ensuring every procurement decision is governed by program merit, not commercial interest.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                label: "Documented Accountability",
                body: "Every phase, every milestone, every expenditure is recorded in an auditable format structured to satisfy public procurement standards, grant compliance requirements, and regulatory review.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                label: "Procurement-Safe Delivery",
                body: "Program structures are designed to comply with competitive procurement frameworks from inception — eliminating the legal exposure that arises when governance is retrofitted after project commitment.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 p-7 bg-white hover:bg-[#f7f8f6] transition-colors duration-300 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-[#eef4e8] text-[#4a7229] group-hover:bg-[#4a7229] group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>
                <div className="h-px w-5 bg-[#4a7229]/25 group-hover:w-full transition-all duration-500" />
                <p
                  className="text-gray-900 text-[0.8rem] leading-snug"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {pillar.label}
                </p>
                <p
                  className="text-gray-400 text-[0.73rem] leading-[1.78]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Governance seal — closing signature ── */}
          <div className="ce-gov-seal w-full flex flex-col items-center gap-4 text-center py-4">
            <div className="flex items-center gap-6 w-full max-w-2xl">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="w-8 h-8 flex items-center justify-center border border-[#4a7229]/30 rounded-full">
                <svg className="w-3.5 h-3.5 text-[#4a7229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p
              className="text-gray-700 text-[0.72rem] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Independent. Transparent. Accountable.
            </p>
            <p
              className="text-gray-400 text-[0.72rem] leading-[1.8] max-w-lg"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental does not compete with its partners. It coordinates them — under a governance structure that protects institutional interests, public resources, and program integrity from first engagement to final close-out.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
