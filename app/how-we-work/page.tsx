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

    return () => {
      observer.disconnect();
      engageObserver.disconnect();
      seqObserver.disconnect();
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
          <div className="hww-engage-image relative w-full overflow-hidden shadow-xl md:sticky md:top-28" style={{ minHeight: "580px" }}>
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
          <div className="hww-seq-image relative w-full overflow-hidden shadow-xl md:sticky md:top-28" style={{ minHeight: "600px" }}>
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
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
