"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HowWeWorkPage() {
  const roleRef = useRef<HTMLDivElement>(null);
  const engageRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLDivElement>(null);
  const intRef = useRef<HTMLDivElement>(null);
  const fundRef = useRef<HTMLDivElement>(null);
  const govRef = useRef<HTMLDivElement>(null);
  const lteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-role-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (roleRef.current) observer.observe(roleRef.current);

    const engageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-engage-visible");
            const items = entry.target.querySelectorAll(".hww-engage-item");
            items.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateX(0)";
              }, i * 90);
            });
            engageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (engageRef.current) engageObserver.observe(engageRef.current);

    const seqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-seq-visible");
            const steps = entry.target.querySelectorAll(".hww-seq-step");
            steps.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateX(0)";
              }, i * 80);
            });
            seqObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (seqRef.current) seqObserver.observe(seqRef.current);

    const intObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-int-visible");
            intObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (intRef.current) intObserver.observe(intRef.current);

    const fundObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-fund-visible");
            fundObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (fundRef.current) fundObserver.observe(fundRef.current);

    const govObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-gov-visible");
            govObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (govRef.current) govObserver.observe(govRef.current);

    const lteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hww-lte-visible");
            lteObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (lteRef.current) lteObserver.observe(lteRef.current);

    return () => {
      observer.disconnect();
      engageObserver.disconnect();
      seqObserver.disconnect();
      intObserver.disconnect();
      fundObserver.disconnect();
      govObserver.disconnect();
      lteObserver.disconnect();
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Institutional entrance
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Hero-How-small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Scrim — precision gradient, preserves image detail in upper field */}
        <div
          className="hww-scrim absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,12,5,0.55) 0%, rgba(5,12,5,0.38) 38%, rgba(5,12,5,0.72) 72%, rgba(5,12,5,0.92) 100%)",
          }}
        />
        {/* Left-edge reinforcement — sharpens text legibility without flattening image */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 60%, transparent 25%, rgba(5,12,5,0.55) 100%)" }} />

        {/* ── Hero content ── */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 md:px-8 py-36 flex flex-col items-center text-center gap-8">

          {/* Eyebrow */}
          <p
            className="hww-animate text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.42em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, animationDelay: "0.2s" }}
          >
            JCrew Environmental Solution · Program Coordination
          </p>

          {/* Divider — expands before headline */}
          <div className="hww-divider h-px bg-white/25" style={{ animationDelay: "0.45s" }} />

          {/* Main headline */}
          <h1
            className="hww-animate text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, animationDelay: "0.6s" }}
          >
            Disciplined Coordination
            <br />
            for Complex Environmental Programs
          </h1>

          {/* Sub-spec line */}
          <p
            className="hww-animate text-white/45 text-[0.68rem] uppercase tracking-[0.32em]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500, animationDelay: "0.78s" }}
          >
            Sequenced&nbsp;&nbsp;·&nbsp;&nbsp;Governed&nbsp;&nbsp;·&nbsp;&nbsp;Accountable
          </p>

          {/* Body */}
          <p
            className="hww-animate text-gray-300/90 text-[0.88rem] md:text-[0.95rem] leading-[1.95] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, animationDelay: "0.92s" }}
          >
            JCrew Environmental manages complex environmental programs by coordinating people, processes, and timelines — without displacing the authority of public institutions or their advisors. We align execution. You retain control.
          </p>

          {/* CTA group */}
          <div
            className="hww-animate flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto"
            style={{ animationDelay: "1.1s" }}
          >
            {/* Primary — executive briefing */}
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 bg-white/6 backdrop-blur-sm text-white text-[0.68rem] uppercase tracking-[0.22em] hover:bg-white/12 hover:border-white/35 transition-all duration-400"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              <svg className="w-3.5 h-3.5 shrink-0 text-[#9ecf62] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Request Executive Briefing
            </a>

            {/* Secondary — phone */}
            <a
              href="tel:+18448787346"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/12 text-white/65 text-[0.68rem] uppercase tracking-[0.22em] hover:border-white/25 hover:text-white/90 transition-all duration-400"
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
            className="hww-animate text-white/20 text-[0.56rem] uppercase tracking-[0.26em]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400, animationDelay: "1.26s" }}
          >
            No Obligation · Confidential Executive Consultation
          </p>

        </div>

        {/* Bottom edge fade to white */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          ROLE DEFINITION — Alignment convergence
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={roleRef}
          className="max-w-7xl mx-auto flex flex-col gap-16"
        >

          {/* ── Section header ── */}
          <div className="hww-section-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Program Coordination Model
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Our Role: Independent
              <br />
              Program Coordinator
            </h2>
            <div className="h-px w-10 bg-[#4a7c2f]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Our approach is designed for long-duration, high-scrutiny programs where sequencing, funding alignment, and institutional accountability carry equal weight to technical execution.
            </p>
          </div>

          {/* ── Three-column alignment layout ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-start">

            {/* LEFT — What we are not (slides from left) */}
            <div className="hww-col-left flex flex-col gap-0 overflow-hidden border border-gray-100">
              <div className="px-6 py-4 bg-[#fafafa] border-b border-gray-100">
                <p
                  className="text-[0.56rem] uppercase tracking-[0.36em] text-gray-400"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Outside Our Scope
                </p>
              </div>
              {[
                {
                  label: "Equipment Manufacturer",
                  body: "We hold no product line and carry no inventory. Every technology decision is evaluated on program merit alone.",
                },
                {
                  label: "Engineering or Legal Substitute",
                  body: "We do not replace licensed engineers, legal counsel, or the institution's own advisors. We coordinate alongside them.",
                },
                {
                  label: "Forced Procurement Authority",
                  body: "We do not dictate vendor selection. We structure procurement processes that satisfy competitive and regulatory requirements.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 px-6 py-5 border-b border-gray-50 last:border-0 bg-white group hover:bg-[#fafafa] transition-colors duration-150"
                >
                  <div className="shrink-0 mt-1 w-4 h-4 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-gray-300" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-gray-700 text-[0.78rem] mb-1 leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-gray-400 text-[0.72rem] leading-[1.72]"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER — image rises from center */}
            <div className="hww-col-center hidden md:flex flex-col items-center justify-start gap-4 w-[320px] lg:w-[380px]">
              <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "440px" }}>
                <Image
                  src="/business-7116735_1280.jpg"
                  alt="Connected team coordinating complex program delivery"
                  fill
                  className="object-cover object-center"
                  sizes="380px"
                  style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.8)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 px-5 py-5">
                  <div className="h-px w-6 bg-[#9ecf62]/60 mb-3" />
                  <p
                    className="text-white text-[0.72rem] leading-snug"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    Organizing qualified partners
                    <br />
                    under a single accountable framework.
                  </p>
                </div>
              </div>
              {/* Mobile-only: shown inline on small screens */}
            </div>

            {/* Mobile image — visible only below md */}
            <div className="hww-col-center md:hidden relative w-full overflow-hidden shadow-xl" style={{ minHeight: "280px" }}>
              <Image
                src="/business-7116735_1280.jpg"
                alt="Connected team coordinating complex program delivery"
                fill
                className="object-cover object-center"
                sizes="100vw"
                style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.8)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-5 py-5">
                <p className="text-white text-[0.72rem] leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>
                  Organizing qualified partners under a single accountable framework.
                </p>
              </div>
            </div>

            {/* RIGHT — What we do (slides from right) */}
            <div className="hww-col-right flex flex-col gap-0 overflow-hidden border border-[#4a7c2f]/20">
              <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15">
                <p
                  className="text-[0.56rem] uppercase tracking-[0.36em] text-[#4a7c2f]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  What We Deliver
                </p>
              </div>
              {[
                {
                  label: "Organize Qualified Partners",
                  body: "We identify, vet, and coordinate the right specialists for each program phase — engineering, legal, financial, environmental — without displacing institutional relationships.",
                },
                {
                  label: "Align Funding and Delivery",
                  body: "Grant cycles, appropriations, and financing structures are integrated into the program schedule from day one — not retrofitted after commitments are made.",
                },
                {
                  label: "Manage Sequencing",
                  body: "Every phase is staged in the correct order. No workstream begins until its predecessor is closed, verified, and documented.",
                },
                {
                  label: "Remain Engaged Start-to-Finish",
                  body: "We do not exit after the planning phase. The same coordination team remains accountable through commissioning and long-term operations.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 px-6 py-5 border-b border-[#4a7c2f]/8 last:border-0 bg-white group hover:bg-[#f4f8f0] transition-colors duration-150"
                >
                  <div className="shrink-0 mt-1 w-4 h-4 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#4a7c2f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-gray-800 text-[0.78rem] mb-1 leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-gray-400 text-[0.72rem] leading-[1.72]"
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
          ENGAGEMENT — How It Begins
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={engageRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >

          {/* ── LEFT — copy block ── */}
          <div className="flex flex-col gap-10">

            {/* Header */}
            <div className="hww-engage-header flex flex-col gap-4">
              <p
                className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.50em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                Initial Engagement Protocol
              </p>
              <h2
                className="text-gray-900 text-[1.75rem] md:text-[2.2rem] leading-[1.1]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                How Engagement Begins
              </h2>
              <div className="h-px w-10 bg-[#4a7c2f]" />
              <p
                className="text-gray-500 text-[0.88rem] leading-[1.95]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Begin with information — not commitment. The initial phase is a structured informational diagnostic, designed to clarify program conditions before any obligations are considered.
              </p>
              {/* Phase 1 attributes */}
              <div className="flex items-center gap-6 pt-1">
                {["No Obligation", "Non-Binding", "Pressure-Free"].map((attr) => (
                  <div key={attr} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#4a7c2f]" />
                    <p
                      className="text-[#4a7c2f] text-[0.62rem] uppercase tracking-[0.18em]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {attr}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Purpose list — staggered reveal */}
            <div className="flex flex-col gap-0 border border-gray-200 overflow-hidden">
              <div className="px-5 py-3.5 bg-white border-b border-gray-100">
                <p
                  className="text-[0.54rem] uppercase tracking-[0.36em] text-gray-400"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Diagnostic Objectives
                </p>
              </div>
              {[
                {
                  num: "01",
                  label: "Understand the Institution’s Program Conditions",
                  body: "Assess the current state of the project — regulatory position, funding status, timeline constraints, and stakeholder landscape.",
                },
                {
                  num: "02",
                  label: "Clarify Timelines and Binding Constraints",
                  body: "Identify deadlines, grant windows, procurement cycles, and any obligations already in place that govern program sequencing.",
                },
                {
                  num: "03",
                  label: "Identify Sequencing Risks",
                  body: "Surface the workstream dependencies and ordering risks that commonly cause program delays, cost overruns, or compliance failures.",
                },
                {
                  num: "04",
                  label: "Determine Whether Coordination Support Is Appropriate",
                  body: "An honest assessment of whether independent program coordination adds measurable value to this specific program — or does not.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="hww-engage-item flex gap-4 px-5 py-5 border-b border-gray-50 last:border-0 bg-white hover:bg-[#f9faf7] transition-colors duration-150"
                >
                  <span
                    className="text-[#4a7c2f] text-[0.58rem] shrink-0 mt-0.5 w-5"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    {item.num}
                  </span>
                  <div className="w-px bg-gray-100 shrink-0" />
                  <div>
                    <p
                      className="text-gray-800 text-[0.78rem] mb-1.5 leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-gray-400 text-[0.72rem] leading-[1.75]"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Triple No — final seal */}
            <div className="hww-engage-seal border border-[#4a7c2f]/20 bg-white px-7 py-7 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#4a7c2f]/15" />
                <p
                  className="text-[#4a7c2f] text-[0.52rem] uppercase tracking-[0.38em] shrink-0"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Operational Guarantee
                </p>
                <div className="flex-1 h-px bg-[#4a7c2f]/15" />
              </div>
              <h3
                className="text-gray-900 text-[1.15rem] md:text-[1.3rem] leading-[1.25] text-center"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                No Contracts.
                <span className="text-[#4a7c2f]"> No Capital Commitments.</span>
                <br />
                No Decisions Required.
              </h3>
              <p
                className="text-gray-400 text-[0.74rem] leading-[1.8] text-center"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                The initial diagnostic engagement carries no legal, financial, or procurement obligation of any kind. Its sole purpose is to determine whether a productive coordination relationship is warranted.
              </p>
              <div className="flex justify-center pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#4a7c2f] text-white text-[0.66rem] uppercase tracking-[0.2em] hover:bg-[#3d6b22] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                >
                  Request the Initial Briefing
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ── RIGHT — image ── */}
          <div className="hww-engage-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "580px" }}>
            <Image
              src="/freephotocc-iphone-1281456_1280cr.jpg"
              alt="Professional at desk reviewing program documentation for institutional engagement"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ filter: "brightness(0.9) contrast(1.04) saturate(0.82)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 px-7 py-6">
              <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
              <p
                className="text-white text-[0.82rem] leading-[1.65] max-w-xs"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                A disciplined first conversation
                is the foundation of every
                well-governed program.
              </p>
              <p
                className="text-white/50 text-[0.62rem] uppercase tracking-[0.24em] mt-3"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                JCrew Environmental Solution
              </p>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEQUENCING — Order Matters
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={seqRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >

          {/* LEFT — copy */}
          <div className="flex flex-col gap-10">

            {/* Header */}
            <div className="hww-seq-header flex flex-col gap-4">
              <p
                className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.50em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                Program Governance Methodology
              </p>
              <h2
                className="text-white text-[1.75rem] md:text-[2.2rem] leading-[1.1]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                How We Sequence Work
              </h2>
              <p
                className="text-[#9ecf62] text-[0.72rem] uppercase tracking-[0.28em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Order Matters.
              </p>
              <div className="h-px w-10 bg-[#4a7229]" />
              <p
                className="text-gray-400 text-[0.88rem] leading-[1.95]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Environmental programs fail most often not because of inadequate engineering, but because critical workstreams are initiated out of sequence — creating compliance gaps, funding misalignments, and irreversible cost exposure before the errors become visible.
              </p>
            </div>

            {/* Ensuring list — steps click in order */}
            <div className="flex flex-col gap-0 border border-white/8 overflow-hidden">
              <div className="px-5 py-3.5 bg-white/5 border-b border-white/8">
                <p
                  className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Sequencing Ensures
                </p>
              </div>
              {[
                {
                  num: "01",
                  label: "Regulatory and Funding Alignment Before Testing",
                  body: "Testing and site work begin only after regulatory requirements and funding conditions are confirmed — eliminating rework triggered by late-stage compliance conflicts.",
                },
                {
                  num: "02",
                  label: "Documentation Precedes Commitment",
                  body: "No contractual, procurement, or capital commitment is made before the supporting documentation, permits, and legal frameworks are in place.",
                },
                {
                  num: "03",
                  label: "Funding Pathways Evaluated Before Engineering",
                  body: "Financing structures, grant eligibility, and appropriations alignment are established before engineering resources are deployed — protecting program budget integrity.",
                },
                {
                  num: "04",
                  label: "Interim Risk Managed Across Long-Horizon Development",
                  body: "Exposure windows during extended development phases are identified and formally managed — not left unaddressed until they become critical path obstacles.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="hww-seq-step flex gap-4 px-5 py-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-150 group"
                >
                  <span
                    className="text-[#4a7229] text-[0.58rem] shrink-0 mt-0.5 w-5"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    {item.num}
                  </span>
                  <div className="w-px bg-white/8 shrink-0 group-hover:bg-[#4a7229]/40 transition-colors duration-200" />
                  <div>
                    <p
                      className="text-white text-[0.78rem] mb-1.5 leading-snug"
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

            {/* Risk mitigation block */}
            <div className="hww-seq-risk border border-[#D4AF37]/30 bg-[#0f2208] px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#D4AF37]/20" />
                <p
                  className="text-[#D4AF37] text-[0.52rem] uppercase tracking-[0.38em] shrink-0"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Risk Mitigation Outcomes
                </p>
                <div className="flex-1 h-px bg-[#D4AF37]/20" />
              </div>
              <p
                className="text-gray-400 text-[0.78rem] leading-[1.8] text-center"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Disciplined sequencing directly reduces:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Schedule Delays",
                  "Costly Rework",
                  "Lost Grant Eligibility",
                  "Cost Shifting to Ratepayers",
                ].map((risk) => (
                  <div key={risk} className="flex items-center gap-2.5 px-3 py-2.5 border border-white/6 bg-white/4">
                    <svg className="w-3 h-3 text-[#D4AF37] shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        style={{ transform: "rotate(45deg)", transformOrigin: "8px 8px" }}
                      />
                    </svg>
                    <p
                      className="text-white text-[0.7rem] leading-snug"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                    >
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — image */}
          <div className="hww-seq-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "600px" }}>
            <Image
              src="/pexels-towfiqu-barbhuiya-3440682-12052483cr-scaled-e1772040359326-1730x2048.jpg"
              alt="Project planning calendar and sequencing documentation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ filter: "brightness(0.82) contrast(1.06) saturate(0.7)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/85 via-[#0a1a06]/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 px-7 py-6">
              <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
              <p
                className="text-white text-[0.82rem] leading-[1.65] max-w-xs"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Every step verified.
                <br />
                Every phase closed before the next begins.
              </p>
              <p
                className="text-white/40 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Program Governance · JCrew Environmental
              </p>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTEGRATION — Additive, Not Disruptive
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={intRef}
          className="max-w-7xl mx-auto flex flex-col gap-16"
        >

          {/* ── Section header ── */}
          <div className="hww-int-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Strategic Partnership Model
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Integrating With Your
              <br />
              Established Teams
            </h2>
            <p
              className="text-[#4a7c2f] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Additive. Not Disruptive.
            </p>
            <div className="h-px w-10 bg-[#4a7c2f]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental operates alongside your existing institutional talent — extending coordination capacity without displacing the engineering, legal, or regulatory expertise already in place.
            </p>
          </div>

          {/* ── Split: stacked panels left, image right ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT — two stacked panels */}
            <div className="hww-int-left flex flex-col gap-6">

              {/* Panel 1 — Institutional assets */}
              <div className="flex flex-col gap-0 border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 bg-[#fafafa] border-b border-gray-100">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-gray-400"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Your Institutional Assets
                  </p>
                </div>
                {[
                  {
                    label: "Engineering Talent",
                    body: "Licensed professionals with deep site and regulatory familiarity.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Legal Advisory",
                    body: "Counsel governing procurement, compliance, and contractual obligations.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Operational Leads",
                    body: "Internal decision-makers who carry authority over program direction.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Regulatory Oversight",
                    body: "Agency relationships and compliance frameworks already established.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-5 border-b border-gray-50 last:border-0 bg-white group hover:bg-[#fafafa] transition-colors duration-150"
                  >
                    <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#f0f0f0] text-gray-400 group-hover:bg-[#eef4e8] group-hover:text-[#4a7c2f] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.78rem] mb-1 leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                      <p className="text-gray-400 text-[0.71rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Panel 2 — Our strategic function */}
              <div className="hww-int-right flex flex-col gap-0 border border-[#4a7c2f]/20 overflow-hidden">
                <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#4a7c2f]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Our Strategic Function
                  </p>
                </div>
                {[
                  {
                    label: "Cross-Functional Coordination",
                    body: "Synchronizing engineers, legal counsel, regulators, and funders within a single accountable delivery framework.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
                        <path d="M12 7v4m0 0l-5.5 6M12 11l5.5 6" />
                      </svg>
                    ),
                  },
                  {
                    label: "Role Clarity",
                    body: "Formally defining the responsibilities of each participant to eliminate overlap, gaps, and unresolved accountability.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Timeline Synchronization",
                    body: "Aligning funding cycles, regulatory milestones, and engineering phases into a unified program schedule — preventing workstream collision.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    ),
                  },
                  {
                    label: "Momentum Management",
                    body: "Maintaining forward program velocity through decision points, funding gaps, and stakeholder transitions that typically stall complex projects.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
                      <p className="text-gray-800 text-[0.78rem] mb-1 leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                      <p className="text-gray-400 text-[0.71rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT — image, sticky */}
            <div className="hww-int-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "620px" }}>
              <Image
                src="/pexels-cottonbro-5989931-2048x1365.jpg"
                alt="Integrated team collaborating on complex program delivery"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.62) contrast(1.08) saturate(0.7)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/90 via-[#0a1a06]/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white text-[0.92rem] leading-[1.7] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Additive coordination —
                  <br />
                  extending capacity without
                  <br />
                  displacing authority.
                </p>
                <p
                  className="text-white/70 text-[0.62rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

          </div>

          {/* ── Closing benefit ── */}
          <div className="hww-int-closing flex flex-col items-center text-center gap-5 border-t border-gray-100 pt-12">
            <div className="w-10 h-10 rounded-full border border-[#4a7c2f]/25 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3
              className="text-gray-900 text-[1.3rem] md:text-[1.6rem] leading-[1.2]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Your Internal Teams Remain in Control.
              <br />
              <span className="text-[#4a7c2f]">We Manage What They Shouldn&apos;t Have to.</span>
            </h3>
            <p
              className="text-gray-400 text-[0.8rem] leading-[1.85] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              By absorbing cross-functional coordination, documentation management, and schedule governance, JCrew Environmental frees institutional leadership to concentrate on core policy, governance, and stakeholder oversight — where their authority is irreplaceable.
            </p>
          </div>

        </div>
      </section>
      {/* ═══════════════════════════════════════════
          FUNDING ALIGNMENT
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={fundRef}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="hww-fund-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Funding Coordination
            </p>
            <h2
              className="text-white text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Funding Alignment
            </h2>
            <p
              className="text-[#9ecf62] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Integrated Into the Program. Not Sold Separately.
            </p>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-400 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Funding coordination is embedded within the program delivery structure — not offered as a standalone product or a conditional promise attached to engagement.
            </p>
          </div>

          {/* Split: left copy, right image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT */}
            <div className="hww-fund-left flex flex-col gap-8">

              {/* What we do */}
              <div className="flex flex-col gap-0 border border-white/10 overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/8">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    What We Coordinate
                  </p>
                </div>
                {[
                  {
                    label: "Identify Applicable Funding Pathways",
                    body: "Evaluate grant programs, federal appropriations, and financing structures aligned with the program’s regulatory profile and timeline.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                      </svg>
                    ),
                  },
                  {
                    label: "Align Documentation and Sequencing",
                    body: "Ensure project documentation, site data, and compliance records are structured to satisfy the evidentiary requirements of each funding source.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Position Programs Before Deadlines",
                    body: "Coordinate internal program readiness with external funding windows — ensuring applications are filed from a position of documented compliance, not reactive urgency.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><path d="M16 2v4M8 2v4M3 10h18" />
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

            {/* RIGHT — image */}
            <div className="hww-fund-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "480px" }}>
              <Image
                src="/pexels-freestockpro-12955678cr-2048x2048.jpg"
                alt="Structured funding alignment and program documentation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.65) contrast(1.08) saturate(0.72)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/90 via-[#0a1a06]/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.7] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Coordinate readiness.
                  <br />
                  Position programs correctly.
                  <br />
                  Not guarantee outcomes.
                </p>
                <p
                  className="text-white/65 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  JCrew Environmental Solution
                </p>
              </div>
              </div>
            </div>

          </div>

          {/* Operational Parameters note */}
          <div className="hww-fund-note border border-[#D4AF37]/30 bg-[#0f2208] px-7 py-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#D4AF37]/20" />
              <div className="flex items-center gap-2 shrink-0">
                <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <p
                  className="text-[#D4AF37] text-[0.52rem] uppercase tracking-[0.38em]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Operational Parameters
                </p>
              </div>
              <div className="flex-1 h-px bg-[#D4AF37]/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p
                className="text-gray-400 text-[0.78rem] leading-[1.85]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                <span className="text-white" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "0.72rem" }}>Funding outcomes depend on eligibility, timing, and external approvals.</span>
                {" "}Final determinations rest with the granting authority or lender — not with JCrew Environmental. Our function is to ensure the program and its documentation are positioned as competitively as possible within the applicable framework.
              </p>
              <p
                className="text-gray-400 text-[0.78rem] leading-[1.85]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                <span className="text-white" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "0.72rem" }}>Our role is to coordinate readiness — not to guarantee results.</span>
                {" "}No representation is made that any specific funding pathway will be approved, awarded, or remain available at the time of application.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GOVERNANCE & PROCUREMENT
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={govRef}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="hww-gov-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#4a7c2f] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Structural Integrity Framework
            </p>
            <h2
              className="text-gray-900 text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Governance
              <span className="text-[#4a7c2f]"> &amp; </span>
              Procurement
            </h2>
            <p
              className="text-[#4a7c2f] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Safe by Design.
            </p>
            <div className="h-px w-10 bg-[#4a7c2f]" />
            <p
              className="text-gray-500 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Our coordination model is structured from inception to satisfy procurement law, regulatory review, and institutional accountability standards — so governance is never retrofitted after commitment.
            </p>
          </div>

          {/* Two-column panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* LEFT — Built to be */}
            <div className="hww-gov-left flex flex-col gap-0 border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-[#fafafa] border-b border-gray-100">
                <p
                  className="text-[0.54rem] uppercase tracking-[0.36em] text-gray-400"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Our Coordination Model Is Built To Be
                </p>
              </div>
              {[
                {
                  label: "Procurement-Safe",
                  body: "Program structures comply with competitive procurement frameworks from inception — eliminating the legal exposure that arises when governance is added after commitment.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  label: "Regulator-Friendly",
                  body: "Documentation, decision records, and phase milestones are maintained in formats designed to satisfy regulatory review and audit requirements without supplemental preparation.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                },
                {
                  label: "Politically Defensible",
                  body: "Every coordination decision is documented with a clear rationale — providing institutional leadership and boards with a defensible record across administration changes and public scrutiny.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 px-6 py-5 border-b border-gray-50 last:border-0 bg-white group hover:bg-[#fafafa] transition-colors duration-150"
                >
                  <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-[#f0f0f0] text-gray-400 group-hover:bg-[#eef4e8] group-hover:text-[#4a7c2f] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 text-[0.78rem] mb-1 leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                    <p className="text-gray-400 text-[0.71rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — Key principles */}
            <div className="hww-gov-right flex flex-col gap-0 border border-[#4a7c2f]/20 overflow-hidden">
              <div className="px-6 py-4 bg-[#f4f8f0] border-b border-[#4a7c2f]/15">
                <p
                  className="text-[0.54rem] uppercase tracking-[0.36em] text-[#4a7c2f]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Key Principles
                </p>
              </div>
              {[
                {
                  label: "Transparent Roles",
                  body: "Every participant’s authority and responsibility is formally defined before program work begins — eliminating ambiguity that creates liability exposure.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                    </svg>
                  ),
                },
                {
                  label: "Documented Decision Paths",
                  body: "Program decisions are recorded with the rationale, parties involved, and alternatives considered — creating an auditable governance trail from day one.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  label: "Independent Vendors",
                  body: "JCrew Environmental holds no equity position in any technology vendor or equipment supplier — ensuring every procurement recommendation is governed by program merit alone.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                },
                {
                  label: "Clear Accountability",
                  body: "Coordination responsibilities, escalation paths, and program-level authorities are documented so institutional leadership always knows who is responsible for what.",
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
                    <p className="text-gray-800 text-[0.78rem] mb-1 leading-snug" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                    <p className="text-gray-400 text-[0.71rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Closing statement */}
          <div className="hww-gov-closing flex flex-col items-center text-center gap-5 border-t border-gray-200 pt-12">
            <div className="w-10 h-10 rounded-full border border-[#4a7c2f]/25 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3
              className="text-gray-900 text-[1.2rem] md:text-[1.5rem] leading-[1.25] max-w-3xl"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              This structure protects institutions, leadership, and boards
              <br />
              <span className="text-[#4a7c2f]">throughout multi-year programs.</span>
            </h3>
            <p
              className="text-gray-400 text-[0.8rem] leading-[1.85] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Governance built into the program from day one is the single most effective protection against procurement challenges, regulatory findings, and institutional liability over the full program lifecycle.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LONG-TERM ENGAGEMENT
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a06] py-24 px-5 md:px-6 overflow-hidden">
        <div
          ref={lteRef}
          className="max-w-7xl mx-auto flex flex-col gap-14"
        >

          {/* Header */}
          <div className="hww-lte-header flex flex-col items-center text-center gap-4">
            <p
              className="text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.42em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Program Lifecycle Commitment
            </p>
            <h2
              className="text-white text-[1.8rem] md:text-[2.3rem] leading-[1.1]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Long-Term Engagement
            </h2>
            <p
              className="text-[#9ecf62] text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              From First Step to Final Compliance.
            </p>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-400 text-[0.88rem] leading-[1.95] max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental remains engaged across the full lifecycle of environmental programs. Where others are retained for a single phase, our coordination function spans planning, delivery, and long-term compliance.
            </p>
          </div>

          {/* Split: left copy, right image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT */}
            <div className="hww-lte-left flex flex-col gap-8">
              <div className="flex flex-col gap-0 border border-white/10 overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/8">
                  <p
                    className="text-[0.54rem] uppercase tracking-[0.36em] text-[#9ecf62]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                  >
                    Where We Remain
                  </p>
                </div>
                {[
                  {
                    label: "Stay Through Planning",
                    body: "Present from the earliest program scoping and stakeholder alignment phase — before any workstreams are committed or procurement is initiated.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Remain Through Delivery",
                    body: "Sustain cross-functional coordination across engineering, legal, regulatory, and funding workstreams through the full active delivery period.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Support Long-Term Compliance and Continuity",
                    body: "Maintain program documentation, reporting obligations, and institutional continuity records through post-completion compliance periods — protecting the program record over time.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

              {/* Closing statement */}
              <div className="hww-lte-closing border-l-2 border-[#4a7229] pl-5">
                <p
                  className="text-white text-[0.88rem] leading-[1.75]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  This continuity is what prevents fragmentation
                  and failure over time.
                </p>
                <p
                  className="text-gray-500 text-[0.76rem] leading-[1.8] mt-2"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                >
                  Institutional programs that outlast any single administration require a coordination partner with an equally long horizon — not a vendor whose engagement ends at project handoff.
                </p>
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="hww-lte-image w-full md:sticky md:top-28">
            <div className="relative w-full overflow-hidden shadow-xl" style={{ minHeight: "500px" }}>
              <Image
                src="/ChatGPT-Image-Feb-3-2026-07_52_05-PM.png"
                alt="Long-term compliance and program continuity"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ filter: "brightness(0.82) contrast(1.05) saturate(0.75)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/88 via-[#0a1a06]/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-7 py-6">
                <div className="h-px w-8 bg-[#9ecf62]/50 mb-3" />
                <p
                  className="text-white text-[0.88rem] leading-[1.7] max-w-xs"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Present at planning.
                  <br />
                  Present at delivery.
                  <br />
                  Present at compliance.
                </p>
                <p
                  className="text-white/65 text-[0.6rem] uppercase tracking-[0.24em] mt-3"
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

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
