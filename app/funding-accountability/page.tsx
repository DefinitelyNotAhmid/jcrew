"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FundingAccountabilityPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-hero-visible");
            heroObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const s1Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-s1-visible");
            s1Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (s1Ref.current) s1Observer.observe(s1Ref.current);

    const s2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-s2-visible");
            s2Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (s2Ref.current) s2Observer.observe(s2Ref.current);

    const s3Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-s3-visible");
            s3Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (s3Ref.current) s3Observer.observe(s3Ref.current);

    const s4Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-s4-visible");
            s4Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (s4Ref.current) s4Observer.observe(s4Ref.current);

    const s5Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fa-s5-visible");
            s5Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (s5Ref.current) s5Observer.observe(s5Ref.current);

    return () => {
      heroObserver.disconnect();
      s1Observer.disconnect();
      s2Observer.disconnect();
      s3Observer.disconnect();
      s4Observer.disconnect();
      s5Observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Funding Alignment Without Financial Exposure
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.45) contrast(1.1) saturate(0.65)" }}
        >
          <source src="/Hero-Funding-small.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a06]/60 via-transparent to-[#0a1a06]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a06]/40 via-transparent to-[#0a1a06]/40" />

        {/* Content */}
        <div
          ref={heroRef}
          className="fa-hero relative z-10 flex flex-col items-center text-center px-5 max-w-4xl mx-auto gap-8"
        >
          {/* Eyebrow */}
          <p
            className="fa-hero-eyebrow text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.48em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Funding &amp; Accountability
          </p>

          {/* Main headline */}
          <h1
            className="fa-hero-headline text-white text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[1.05]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Funding Alignment
            <br />
            Without
            <br />
            <span className="text-[#9ecf62]">Financial Exposure</span>
          </h1>

          {/* Divider */}
          <div className="fa-hero-divider h-px w-12 bg-[#4a7229]" />

          {/* Sub-copy block */}
          <div className="fa-hero-sub flex flex-col gap-4 max-w-xl">
            <p
              className="text-white/80 text-[0.9rem] leading-[1.9]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Environmental compliance and remediation projects fail as often
              for financial and governance reasons as for technical ones.
            </p>
            <p
              className="text-white/65 text-[0.82rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental coordinates funding pathways as part of an
              integrated program framework — not as a standalone service or
              conditional promise.
            </p>
          </div>

          {/* CTA row */}
          <div className="fa-hero-cta flex flex-col items-center gap-5">
            <p
              className="text-white text-[0.62rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              For No Obligation Confidential Consultation
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 border border-white/30 text-white text-[0.66rem] uppercase tracking-[0.2em] hover:bg-white/20 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12v10H2zM2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Write
              </a>
              <a
                href="tel:+18448783476"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 border border-white/30 text-white text-[0.66rem] uppercase tracking-[0.2em] hover:bg-white/20 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10.5c-1 0-2-.2-2.8-.5a1 1 0 00-1 .2l-1.8 1.8A10.7 10.7 0 014 7.6L5.8 5.8a1 1 0 00.2-1C5.7 4 5.5 3 5.5 2a1 1 0 00-1-1H2a1 1 0 00-1 1 13 13 0 0013 13 1 1 0 001-1v-2.5a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Call: (844) 8-JCREW
              </a>
            </div>
          </div>

         
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1 — Structured Program Design
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={s1Ref}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="fa-s1-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Program Architecture
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Structuring Environmental Programs
              <br />
              for Fundability and Accountability
            </h2>
            <div className="h-px w-10 bg-[#4a7c2f]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental exists to ensure that environmental programs are designed and executed in a manner that satisfies the requirements of funding authorities, regulators, and institutional stakeholders simultaneously.
            </p>
          </div>

          {/* Split: left copy, right image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT */}
            <div className="fa-s1-left flex flex-col gap-8">

              {/* Three pillars */}
              <div className="flex flex-col gap-0 border border-[#4a7c2f]/20 overflow-hidden">
                <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#4a7c2f]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Program Design Imperatives
                  </p>
                </div>
                {[
                  {
                    num: "01",
                    label: "Properly Funded",
                    body: "Funding pathways are identified, aligned to program conditions, and integrated into the delivery structure before commitments are made — not sourced reactively after costs are incurred.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    label: "Deliberately Sequenced",
                    body: "Every program phase is ordered to satisfy regulatory requirements and funding eligibility conditions before the next phase is initiated — eliminating the rework that out-of-sequence execution produces.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    label: "Executed With Clear Accountability",
                    body: "Roles, responsibilities, and decision authority are formally defined at program outset and maintained throughout — from initial scoping through final compliance reporting.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-5 border-b border-[#4a7c2f]/8 last:border-0 bg-white group hover:bg-[#f4f8f0] transition-colors duration-150"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#eef4e8] text-[#4a7c2f] group-hover:bg-[#4a7c2f] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-gray-800 text-[0.78rem] mb-1 leading-snug"
                        style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-gray-400 text-[0.71rem] leading-[1.75]"
                        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT — image */}
            <div className="fa-s1-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "520px" }}>
              <Image
                src="/katerinavulcova-puzzle-3308345_1920cr.jpg"
                alt="Interconnected program components assembled into a structured framework"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.88) contrast(1.04) saturate(0.82)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/60 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.65] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Every piece placed
                  <br />
                  in the right order,
                  <br />
                  at the right time.
                </p>
                <p
                  className="text-white/60 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Coordination Failure Risks
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={s2Ref}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="fa-s2-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Coordination Failure Analysis
            </p>
            <h2
              className="text-white text-[1.8rem] md:text-[2.3rem] leading-[1.15] max-w-3xl"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Without Centralized Coordination,
              <br />
              <span className="text-[#9ecf62]">Public Environmental Programs</span>
              <br />
              Encounter Predictable Failures
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-400 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              The absence of a neutral, accountable coordination function does not produce efficiency — it produces the same category of failures, on the same timeline, across institutions of every size.
            </p>
          </div>

          {/* Split: image left, challenges right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT — image */}
            <div className="fa-s2-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "520px" }}>
              <Image
                src="/geralt-cooperation-384084_1280.jpg"
                alt="Fragmented coordination across environmental program stakeholders"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.62) contrast(1.08) saturate(0.65)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/90 via-[#0a1a06]/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.7] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Coordination failures
                  <br />
                  are not accidents.
                  <br />
                  They are structural.
                </p>
                <p
                  className="text-white/60 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

            {/* RIGHT — failure list */}
            <div className="fa-s2-right flex flex-col gap-0 border border-white/10 overflow-hidden">
              <div className="px-6 py-4 bg-white/5 border-b border-white/8">
                <p
                  className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Common Program Failure Patterns
                </p>
              </div>
              {[
                {
                  label: "Testing Precedes Eligibility Confirmation",
                  body: "Site testing and sampling are initiated before applicable funding pathways and their eligibility conditions are understood — producing data that cannot be used for its intended purpose.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H5a2 2 0 00-2 2v3a2 2 0 002 2h4m0-5h6m-6 0v5m6-5h4a2 2 0 012 2v3a2 2 0 01-2 2h-4m0-5v5" />
                    </svg>
                  ),
                },
                {
                  label: "Engineering Advances Ahead of Funding Alignment",
                  body: "Technical scope and engineering commitments proceed before financing structures are confirmed — creating cost exposure that cannot be recovered through subsequent grant applications.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" />
                    </svg>
                  ),
                },
                {
                  label: "Grants and Settlements Pursued Independently",
                  body: "Funding streams are applied for in isolation, without coordination across grant windows, settlement remedies, and appropriations cycles — leaving eligible program costs unfunded.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
                    </svg>
                  ),
                },
                {
                  label: "Accountability Split Across Consultants",
                  body: "Program responsibility is divided among multiple single-discipline consultants with no single coordinating authority — producing gaps in oversight that no individual firm is positioned to close.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                    </svg>
                  ),
                },
                {
                  label: "Costs Migrate to Local Budgets and Ratepayers",
                  body: "Unfunded or misaligned program costs are absorbed by municipal budgets or passed to ratepayers — the predictable consequence of programs that were not structured for funding from the outset.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/4 transition-colors duration-150 group"
                >
                  <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#4a7229]/40 text-[#9ecf62] group-hover:bg-[#4a7229] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-white text-[0.78rem] mb-1 leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-gray-500 text-[0.72rem] leading-[1.75] group-hover:text-gray-400 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Integrated Funding Coordination
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={s3Ref}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="fa-s3-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Integrated Program Coordination
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.15] max-w-3xl"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Funding Alignment Coordinated
              <br />
              as Part of the Overall Program
            </h2>
            <p
              className="text-[#4a7c2f] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Not a Standalone Service. Not a Conditional Promise.
            </p>
            <div className="h-px w-10 bg-[#4a7c2f]" />
          </div>

          {/* Split: left copy, right deadline card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT — two panels */}
            <div className="fa-s3-left flex flex-col gap-6">

              {/* Panel 1 — scope */}
              <div className="flex flex-col gap-0 border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 bg-[#fafafa] border-b border-gray-100">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-gray-400"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Coordination May Include
                  </p>
                </div>
                {[
                  {
                    label: "Federal and State Infrastructure Funding Programs",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    ),
                  },
                  {
                    label: "Settlement-Based Funding Pathways",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Reimbursement and Cost-Recovery Mechanisms",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
                      </svg>
                    ),
                  },
                  {
                    label: "Grant Eligibility Documentation",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Timing Alignment Across Funding, Design, and Construction",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-4 border-b border-gray-50 last:border-0 bg-white group hover:bg-[#fafafa] transition-colors duration-150"
                  >
                    <div className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-[#f0f0f0] text-gray-400 group-hover:bg-[#eef4e8] group-hover:text-[#4a7c2f] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 text-[0.76rem] leading-snug self-center" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Panel 2 — objectives */}
              <div className="flex flex-col gap-0 border border-[#4a7c2f]/20 overflow-hidden">
                <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#4a7c2f]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Integrated Early With the Objective That
                  </p>
                </div>
                {[
                  {
                    label: "Programs are designed with eligibility in mind",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Unnecessary redesign and rework is avoided",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Local financial exposure is minimized wherever possible",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-4 border-b border-[#4a7c2f]/8 last:border-0 bg-white group hover:bg-[#f4f8f0] transition-colors duration-150"
                  >
                    <div className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-[#eef4e8] text-[#4a7c2f] group-hover:bg-[#4a7c2f] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 text-[0.76rem] leading-snug self-center" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT — regulatory deadline card (sticky) */}
            <div className="fa-s3-card md:sticky md:top-28">
              <div className="border border-[#4a7c2f]/30 overflow-hidden shadow-lg">

                {/* Card header */}
                <div className="px-6 py-4 bg-[#0a1a06] flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <p
                    className="text-[#D4AF37] text-[0.52rem] uppercase tracking-[0.38em]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Regulatory Compliance Deadline
                  </p>
                </div>

                {/* Card body */}
                <div className="px-6 py-7 bg-white flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-gray-800 text-[0.72rem] uppercase tracking-[0.18em]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      Drinking Water PFAS Response
                    </p>
                    <p
                      className="text-[#c0392b] text-[0.62rem] uppercase tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      EPA-Mandated Action Required
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p
                      className="text-gray-400 text-[0.52rem] uppercase tracking-[0.3em]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      Compliance Deadline
                    </p>
                    <p
                      className="text-[#c0392b] text-[2.2rem] leading-none"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                    >
                      June 30, 2026
                    </p>
                  </div>

                  <p
                    className="text-gray-500 text-[0.76rem] leading-[1.8] border-t border-gray-100 pt-5"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    Public water systems subject to EPA PFAS maximum contaminant level (MCL) enforcement must demonstrate a compliance pathway by this date. Early coordination is critical to funding eligibility.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 pt-1">
                    <a
                      href="tel:+18448783476"
                      className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#0a1a06] text-white text-[0.6rem] uppercase tracking-[0.22em] hover:bg-[#1a3410] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                        <path d="M14 10.5c-1 0-2-.2-2.8-.5a1 1 0 00-1 .2l-1.8 1.8A10.7 10.7 0 014 7.6L5.8 5.8a1 1 0 00.2-1C5.7 4 5.5 3 5.5 2a1 1 0 00-1-1H2a1 1 0 00-1 1 13 13 0 0013 13 1 1 0 001-1v-2.5a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Call Now: (844) 8-JCREW
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-2.5 w-full py-4 bg-white border border-gray-200 text-gray-700 text-[0.6rem] uppercase tracking-[0.22em] hover:bg-[#f7f8f6] hover:border-[#4a7c2f]/40 transition-all duration-200"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4h12v10H2zM2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Request Confidential Consultation
                    </a>
                  </div>

                  {/* Footer link */}
                  <a
                    href="/clean-energy"
                    className="flex items-center justify-center gap-1.5 text-gray-400 text-[0.58rem] uppercase tracking-[0.2em] hover:text-[#4a7c2f] transition-colors duration-200 pt-1"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    Visit PFAS Response Division
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — Accountability by Design
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={s4Ref}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="fa-s4-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Program Integrator Role
            </p>
            <h2
              className="text-white text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Accountability by Design
            </h2>
            <p
              className="text-[#9ecf62] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              JCrew Environmental Operates as the Program Integrator
            </p>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-400 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Accountability is not an audit function added at program close — it is a structural property of how the program is organized, documented, and governed from initiation through final compliance.
            </p>
          </div>

          {/* Split: left panels, right image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT — two panels */}
            <div className="fa-s4-left flex flex-col gap-6">

              {/* Panel 1 — framework */}
              <div className="flex flex-col gap-0 border border-white/10 overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/8">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Our Accountability Framework Is Built Around
                  </p>
                </div>
                {[
                  {
                    label: "Clear Scope Definition",
                    body: "Program boundaries, deliverables, and exclusions are formally documented before any workstream begins — preventing scope ambiguity from generating unplanned cost or liability.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    ),
                  },
                  {
                    label: "Disciplined Sequencing",
                    body: "Each phase is completed in the order required to satisfy regulatory and funding prerequisites — eliminating the rework that out-of-sequence execution reliably produces.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                      </svg>
                    ),
                  },
                  {
                    label: "Documented Decision Points",
                    body: "Every material program decision is recorded with the rationale, alternatives considered, and parties involved — creating a defensible governance trail available for audit at any stage.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Transparent Reporting",
                    body: "Program status, financial position, and milestone progress are reported in formats designed for institutional leadership and board-level oversight — not internal project management.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                    ),
                  },
                  {
                    label: "Continuity From Initiation Through Completion",
                    body: "A single coordinating authority remains accountable across all program phases — ensuring institutional knowledge, decision records, and compliance obligations are never lost at phase transitions.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/4 transition-colors duration-150 group"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#4a7229]/40 text-[#9ecf62] group-hover:bg-[#4a7229] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white text-[0.78rem] mb-1 leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                      <p className="text-gray-500 text-[0.72rem] leading-[1.75] group-hover:text-gray-400 transition-colors duration-200" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panel 2 — ensures */}
              <div className="flex flex-col gap-0 border border-[#4a7229]/30 overflow-hidden">
                <div className="px-6 py-4 bg-[#0f2208] border-b border-[#4a7229]/20">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    This Structure Ensures That
                  </p>
                </div>
                {[
                  {
                    label: "Responsibilities Do Not Fall Between Parties",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Timelines Remain Realistic and Achievable",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    ),
                  },
                  {
                    label: "Public Entities Retain Control and Oversight",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Regulators, Auditors, and Stakeholders See a Coherent Program",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-4 border-b border-[#4a7229]/15 last:border-0 hover:bg-[#4a7229]/10 transition-colors duration-150 group"
                  >
                    <div className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-[#4a7229]/40 text-[#9ecf62] group-hover:bg-[#4a7229] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <p className="text-white/80 text-[0.76rem] leading-snug self-center group-hover:text-white transition-colors duration-200" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT — image */}
            <div className="fa-s4-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "580px" }}>
              <Image
                src="/pexels-pixabay-209224cr-2048x2048.jpg"
                alt="Financial accountability documentation and program oversight"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.62) contrast(1.08) saturate(0.68)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/90 via-[#0a1a06]/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.7] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Governance built in.
                  <br />
                  Not bolted on
                  <br />
                  after the fact.
                </p>
                <p
                  className="text-white/60 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Applicable Across Divisions
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={s5Ref}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="fa-s5-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Cross-Division Application
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Applicable Across Divisions
            </h2>
            <div className="h-px w-10 bg-[#4a7c2f]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              The funding and accountability framework applies across JCrew Environmental’s program divisions — each with distinct regulatory profiles, yet governed by the same disciplined coordination model.
            </p>
          </div>

          {/* Split: left panels, right image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT — two division panels */}
            <div className="fa-s5-left flex flex-col gap-6">

              {/* PFAS Division */}
              <div className="flex flex-col gap-0 border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 bg-[#fafafa] border-b border-gray-100 flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#eef4e8] text-[#4a7c2f] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p
                    className="text-[0.62rem] uppercase tracking-[0.26em] text-gray-700"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    PFAS Response Division
                  </p>
                </div>
                {[
                  "Drinking water system compliance and MCL response",
                  "Site-based contamination assessment and remediation coordination",
                  "Multi-year compliance programs with documented milestone sequencing",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 px-6 py-4 border-b border-gray-50 last:border-0 bg-white group hover:bg-[#fafafa] transition-colors duration-150">
                    <div className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#4a7c2f]" />
                    <p className="text-gray-500 text-[0.76rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* Clean Energy Division */}
              <div className="flex flex-col gap-0 border border-[#4a7c2f]/20 overflow-hidden">
                <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15 flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#4a7c2f] text-white shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <p
                    className="text-[0.62rem] uppercase tracking-[0.26em] text-[#4a7c2f]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Clean Energy Division
                  </p>
                </div>
                {[
                  "Waste-to-fuel and bioconversion project coordination",
                  "Clean energy infrastructure development and permitting alignment",
                  "Public-private partnership models with documented governance structures",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 px-6 py-4 border-b border-[#4a7c2f]/8 last:border-0 bg-white group hover:bg-[#f4f8f0] transition-colors duration-150">
                    <div className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#4a7c2f]" />
                    <p className="text-gray-500 text-[0.76rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT — image */}
            <div className="fa-s5-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "480px" }}>
              <Image
                src="/ChatGPT-Image-Jan-21-2026-05_04_21-PMcr.png"
                alt="JCrew Environmental cross-division program coordination"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.88) contrast(1.04) saturate(0.85)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/60 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.65] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  One framework.
                  <br />
                  Every division.
                  <br />
                  The same discipline.
                </p>
                <p
                  className="text-white/60 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

          </div>

          {/* Closing */}
          <div className="fa-s5-closing flex flex-col items-center text-center gap-4 border-t border-gray-100 pt-12">
            <div className="w-10 h-10 rounded-full border border-[#4a7c2f]/25 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3
              className="text-gray-900 text-[1.2rem] md:text-[1.5rem] leading-[1.25]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Each Program Is Different.
              <br />
              <span className="text-[#4a7c2f]">The Governance Discipline Remains the Same.</span>
            </h3>
            <p
              className="text-gray-400 text-[0.8rem] leading-[1.85] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              The regulatory context, technical requirements, and funding sources differ across divisions — but the structural principles governing how programs are organized, sequenced, and documented do not.
            </p>
          </div>

        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
