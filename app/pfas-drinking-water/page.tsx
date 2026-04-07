"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const TRIGGERS = [
  { pillar: "Federal Regulatory Compliance", detail: "Immediate obligations under EPA MCL limits and state co-enforcement programs" },
  { pillar: "Mandatory Sampling & Reporting", detail: "Certified testing protocols with documented chain-of-custody and agency submission" },
  { pillar: "Public Notification", detail: "Enforceable consumer disclosure requirements with defined timelines" },
  { pillar: "Long-Term Treatment Accountability", detail: "Engineering, construction, and compliance obligations extending through system close-out" },
];

const SYSTEM_OBLIGATIONS = [
  "Maintains continuous service while treatment is secured",
  "Meets enforceable MCLs and health advisory thresholds",
  "Avoids sudden rate increases or unfunded mandates",
];

const SETTLEMENT_ACTIONS = [
  "Completing compliant sampling before the deadline",
  "Assembling required documentation for the funding pathway",
  "Positioning the system correctly before June 30, 2026",
];

const CAPABILITIES = [
  {
    num: "01",
    title: "Source Assessment & Readiness Review",
    body: "Raw water source characterization and regulatory readiness gap analysis — before a single dollar is spent on engineering.",
  },
  {
    num: "02",
    title: "Certified Laboratory Coordination",
    body: "No-upfront-cost PFAS sampling through certified laboratory partners, with chain-of-custody compliant testing protocols.",
  },
  {
    num: "03",
    title: "Documentation Assembly",
    body: "Regulatory and funding-pathway documentation assembled to meet settlement, grant, and agency requirements precisely.",
  },
  {
    num: "04",
    title: "Funding Alignment",
    body: "Settlement, infrastructure, and grant funding coordinated as part of the response program — not sold as a standalone promise.",
  },
  {
    num: "05",
    title: "Interim Protection Strategies",
    body: "Compliant interim measures implemented where permanent treatment will take time — maintaining compliance continuity.",
  },
  {
    num: "06",
    title: "Engineering Coordination",
    body: "Long-term, compliant treatment solutions designed and delivered through qualified engineering partners under centralized oversight.",
  },
  {
    num: "07",
    title: "Construction Delivery Oversight",
    body: "Construction phase sequenced and monitored to regulatory and procurement standards — with full accountability at every stage.",
  },
  {
    num: "08",
    title: "Long-Term Compliance Planning",
    body: "Operational continuity and compliance planning extends beyond construction to close-out — no program abandoned mid-execution.",
  },
];

const FAILURE_POINTS = [
  "Testing is done without funding alignment",
  "Engineering starts before eligibility is secured",
  "Interim protection is delayed",
  "Responsibilities are spread across disconnected parties",
  "Timelines slip and costs shift to ratepayers",
];

const DESIGNED_FOR = [
  {
    designation: "Community Water Systems",
    detail: "Municipal and township utilities serving residential and commercial populations under EPA Safe Drinking Water Act jurisdiction.",
  },
  {
    designation: "Regional Water Authorities",
    detail: "Multi-jurisdictional authorities managing shared water infrastructure across county or district boundaries.",
  },
  {
    designation: "Public Utilities Under Federal & State Oversight",
    detail: "Any public water system subject to enforceable PFAS MCL limits, sampling mandates, or co-enforcement programs administered by state primacy agencies.",
  },
];

const INDEPENDENCE_OUTCOMES = [
  { label: "Regulator-Friendly", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Procurement-Safe", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "Community-Aligned", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
  { label: "Financially Disciplined", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

/* ─────────────────────────────────────────────
   Reusable scroll-reveal hook
───────────────────────────────────────────── */
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("pfas-reveal-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function DrinkingWaterPFASPage() {
  const riskRef = useReveal();
  const capitolRef = useReveal();
  const triggerRef = useReveal();
  const obligationRef = useReveal();
  const deadlineRef = useReveal();
  const fundingRef = useReveal();
  const settlementRef = useReveal<HTMLUListElement>();
  const capRef = useReveal();
  const capImgRef = useReveal();
  const capListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = capListRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>(".cap-item"));
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add("cap-item-visible"), i * 90);
          });
          obs.unobserve(container);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, []);
  const failRef = useReveal();
  const failImgRef = useReveal();
  const designedRef = useReveal();
  const designedImgRef = useReveal();
  const indyRef = useReveal();
  const indyImgRef = useReveal();


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — video background
      ══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/Hero-PFASwater-small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Layered scrim — dense center gradient for text legibility over motion */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051a02]/70 via-[#051a02]/58 to-[#051a02]/80" />
        {/* Radial vignette — darkens edges, keeps center clear */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(5,26,2,0.55) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6 max-w-4xl mx-auto">

          {/* Eyebrow */}
          <p
            className="pfas-hero-line text-[#9ecf62] text-[0.7rem] uppercase tracking-[0.32em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, animationDelay: "0.1s" }}
          >
            Drinking Water Program
          </p>

          {/* H1 */}
          <h1
            className="pfas-hero-line text-white text-[2.2rem] md:text-[3rem] leading-[1.12] max-w-3xl"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, animationDelay: "0.25s", textShadow: "0 2px 24px rgba(5,26,2,0.7)" }}
          >
            RESPONSE TO PFAS<br />IN PUBLIC DRINKING WATER SYSTEMS<br />
          </h1>

          {/* Sub-headline */}
          <p
            className="pfas-hero-line text-gray-200 text-[0.95rem] md:text-[1.05rem] leading-[1.75] max-w-2xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, animationDelay: "0.45s", textShadow: "0 1px 8px rgba(5,26,2,0.8)" }}
          >
            A Coordinated, Funding-Ready Approach to PFAS in Raw Source Drinking Water Managed End-to-End.
          </p>

          {/* Trust Pillars — certification badges */}
          <div
            className="pfas-hero-line flex flex-wrap justify-center gap-3 mt-2"
            style={{ animationDelay: "0.65s" }}
          >
            {/* Coordinated */}
            <div
              className="pfas-badge flex items-center gap-2 px-4 py-2 border border-white/30 bg-white/8 backdrop-blur-sm rounded-sm"
              style={{ animationDelay: "0.75s" }}
            >
              <svg className="w-3.5 h-3.5 text-[#9ecf62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-white text-[0.7rem] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>Coordinated</span>
            </div>

            {/* Funded */}
            <div
              className="pfas-badge flex items-center gap-2 px-4 py-2 border border-white/30 bg-white/8 backdrop-blur-sm rounded-sm"
              style={{ animationDelay: "0.88s" }}
            >
              <svg className="w-3.5 h-3.5 text-[#9ecf62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white text-[0.7rem] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>Funded</span>
            </div>

            {/* Defensible — steady glow */}
            <div
              className="pfas-badge-defensible flex items-center gap-2 px-4 py-2 border border-[#4a7229]/50 bg-[#4a7229]/20 backdrop-blur-sm rounded-sm"
              style={{ animationDelay: "1.0s" }}
            >
              <svg className="w-3.5 h-3.5 text-[#9ecf62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white text-[0.7rem] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>Defensible</span>
            </div>
          </div>

          {/* Deadline urgency strip */}
          <div
            className="pfas-hero-line flex items-center gap-3 mt-1"
            style={{ animationDelay: "1.1s" }}
          >
          </div>

          {/* CTAs — replicates reference layout */}
          <div
            className="pfas-cta flex flex-col items-center gap-4 mt-2"
            style={{ animationDelay: "1.2s" }}
          >
            {/* Label above buttons */}
            <p
              className="text-white text-[0.72rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, textShadow: "0 1px 8px rgba(5,26,2,0.8)" }}
            >
              For No Obligation Confidential Consultation
            </p>

            {/* Button row */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Write — white fill, dark text */}
              <a
                href="mailto:info@jcrewenvironmental.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 text-[0.72rem] uppercase tracking-[0.12em] hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Write
              </a>

              {/* Call — outline, white text */}
              <a
                href="tel:+18448787346"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/60 text-white text-[0.72rem] uppercase tracking-[0.12em] hover:bg-white/10 transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call: (844) 8-JCREW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MUNICIPAL RISK ASSESSMENT
      ══════════════════════════════════════════ */}
      <section className="bg-[#f2f3f1]">

        {/* ── TOP: Risk / Regulatory context ── */}
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 flex flex-col items-center gap-10">

          {/* Eyebrow + headline */}
          <div ref={riskRef} className="pfas-reveal flex flex-col items-center text-center gap-5 max-w-2xl">
            <p
              className="text-gray-500 text-[1.00rem] uppercase tracking-[0.36em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Risk
            </p>
            <h2
              className="text-gray-900 text-[2rem] md:text-[2.4rem] leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              PFAS Contamination<br />in Drinking Water Presents<br />Immediate Public Health.
            </h2>
            <div className="h-px w-10 bg-gray-400" />
            <p
              className="text-gray-600 text-[0.88rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Public water systems now operate under enforceable federal MCL limits for PFAS — yet most municipal authorities lack the internal capacity to simultaneously manage sampling compliance, documentation assembly, funding alignment, and engineering procurement without fragmenting accountability across multiple vendors.
            </p>
          </div>

          {/* Capitol image — centered, authority signal */}
          <div
            ref={capitolRef}
            className="pfas-reveal relative w-full max-w-3xl overflow-hidden"
            style={{ transitionDelay: "0.15s" }}
          >
            <Image
              src="/pexels-ramazphotos-7016961cr-2048x1245.jpg"
              alt="United States Capitol — Federal regulatory authority over PFAS in public drinking water"
              width={2048}
              height={1245}
              className="w-full h-auto object-cover"
              style={{ filter: "brightness(0.92) contrast(1.04) saturate(0.82)" }}
            />
            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f2f3f1] to-transparent" />
            {/* Caption */}
            <p
              className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-[0.6rem] uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Federal regulatory authority — enforced at the local level
            </p>
          </div>
        </div>

        {/* ── BOTTOM: Operational solution promise ── */}
        <div className="bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start gap-12">

            {/* Left — the gap statement */}
            <div className="flex flex-col gap-5 md:w-1/2">
              <p
                className="text-gray-400 text-[0.62rem] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                The Capacity Gap
              </p>
              <p
                className="text-gray-700 text-[0.9rem] leading-[1.85]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Municipalities face simultaneous obligations across sampling, documentation, funding applications, engineering procurement, and regulatory reporting — with no central coordinator and no margin for sequencing errors.
              </p>
              <ul className="flex flex-col gap-3 mt-1">
                {[
                  "Simultaneous regulatory and procurement obligations",
                  "No internal PFAS program management capacity",
                  "Funding windows that close before systems are positioned",
                  "Vendor fragmentation creating accountability gaps",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" />
                    </svg>
                    <p className="text-gray-500 text-[0.8rem] leading-[1.7]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{pt}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-gray-100" />

            {/* Right — operational promise */}
            <div className="flex flex-col gap-5 md:w-1/2 justify-center">
              <p
                className="text-[#4a7229] text-[0.62rem] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                Operational Promise
              </p>
              <blockquote
                className="text-gray-900 text-[1.25rem] md:text-[1.4rem] leading-[1.5]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                "One coordinator. End-to-end accountability. From first test to final compliance — funded and defensible."
              </blockquote>
              <div className="h-px w-10 bg-[#4a7229]" />
              <p
                className="text-gray-500 text-[0.8rem] leading-[1.8]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                JCrew Environmental Solution assumes the coordination burden entirely — managing qualified partners, sequencing every phase, and maintaining single-point accountability so your institution focuses on its public mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PFAS TRIGGERS + CRITICAL FUNDING DEADLINE
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={triggerRef} className="pfas-reveal grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* LEFT — Compliance pillars */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <p className="text-[#4a7229] text-[0.65rem] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}>
                  When PFAS Is Identified
                </p>
                <h2 className="text-gray-900 text-[1.7rem] leading-[1.2]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>
                  PFAS Detection Triggers Immediate Regulatory Obligation
                </h2>
                <div className="h-px w-10 bg-[#4a7229]" />
              </div>

              {/* Compliance pillar badges */}
              <ul className="flex flex-col gap-3">
                {TRIGGERS.map((t, i) => (
                  <li key={i} className="flex flex-col gap-1 p-4 border-l-2 border-[#4a7229]/30 bg-gray-50 hover:border-[#4a7229] hover:bg-[#f7fbf4] transition-all duration-200">
                    <p className="text-gray-800 text-[0.78rem] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{t.pillar}</p>
                    <p className="text-gray-500 text-[0.75rem] leading-[1.65]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>{t.detail}</p>
                  </li>
                ))}
              </ul>

              {/* Strategic assurance */}
              <p className="text-[#4a7229] text-[0.78rem] leading-[1.8] border-l-2 border-[#4a7229] pl-4" style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}>
                JCrew Environmental Solution is structured to carry each of these obligations through a single coordinated framework — so no requirement falls between vendors, and no deadline is missed.
              </p>
            </div>

            {/* RIGHT — Regulatory Compliance Deadline box (matches reference) */}
            <div
              ref={deadlineRef}
              className="pfas-reveal sticky top-24 flex flex-col gap-0 border border-gray-200 bg-[#f5f5f0]"
              style={{ transitionDelay: "0.12s" }}
            >
              {/* Top warning header bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-200 bg-[#eeeee8]">
                {/* Warning triangle */}
                <svg className="w-3.5 h-3.5 shrink-0 text-[#4a7229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p
                  className="text-[#4a7229] text-[0.6rem] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  Regulatory Compliance Deadline
                </p>
              </div>

              <div className="flex flex-col gap-5 p-6">

                {/* Sub-labels */}
                <div className="flex flex-col gap-1">
                  <p
                    className="text-gray-800 text-[0.72rem] uppercase tracking-[0.18em]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                  >
                    Drinking Water PFAS Response
                  </p>
                  <p
                    className="text-red-600 text-[0.72rem] uppercase tracking-[0.18em]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 700 }}
                  >
                    EPA-Mandated Action Required
                  </p>
                </div>

                {/* Compliance deadline + date */}
                <div className="flex flex-col gap-1">
                  <p
                    className="text-gray-500 text-[0.6rem] uppercase tracking-[0.28em]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                  >
                    Compliance Deadline
                  </p>
                  <p
                    className="deadline-pulse text-[2.4rem] leading-none"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, letterSpacing: "0.02em" }}
                  >
                    June 30, 2026
                  </p>
                </div>

                <div className="h-px w-full bg-gray-200" />

                {/* Body */}
                <p
                  className="text-gray-600 text-[0.78rem] leading-[1.85]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  Public water systems subject to EPA PFAS maximum contaminant level (MCL) enforcement{" "}
                  <span className="font-medium text-gray-800">must demonstrate a compliance pathway</span>{" "}
                  by this date.{" "}
                  <span className="text-[#4a7229] font-medium">Early coordination is critical to funding eligibility.</span>
                </p>

                <div className="h-px w-full bg-gray-200" />

                {/* Stacked full-width buttons */}
                <div className="flex flex-col gap-2">
                  {/* Call Now — dark green fill */}
                  <a
                    href="tel:+18448787346"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#1a3810] text-white text-[0.68rem] uppercase tracking-[0.18em] hover:bg-[#0f2008] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call Now: (844) 8-JCREW
                  </a>

                  {/* Request Consultation — outline */}
                  <a
                    href="mailto:info@jcrewenvironmental.com"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 border border-gray-300 bg-white text-gray-800 text-[0.68rem] uppercase tracking-[0.18em] hover:border-[#4a7229] hover:text-[#4a7229] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Request Confidential Consultation
                  </a>
                </div>

                {/* Text link */}
                <a
                  href="/pfas-drinking-water"
                  className="flex items-center justify-center gap-1.5 text-gray-400 text-[0.68rem] hover:text-[#4a7229] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  Visit PFAS Response Division
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FUNDING WINDOW + SETTLEMENT ACTIONS
      ══════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* LEFT — Copy + checklist */}
          <div ref={fundingRef} className="pfas-reveal flex flex-col justify-center gap-8 px-8 md:px-12 py-20">

            {/* Eyebrow */}
            <p
              className="text-[#4a7229] text-[0.65rem] uppercase tracking-[0.32em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Settlement Funding
            </p>

            {/* Headline — Cinzel, large, legacy institution feel */}
            <div className="flex flex-col gap-3">
              <p
                className="text-gray-900 text-[1.15rem] uppercase tracking-[0.06em] leading-tight"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                A Limited Funding Window
              </p>
              {/* Gold deadline date */}
              <p
                className="deadline-gold text-[2rem] md:text-[2.3rem] leading-none"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                It Closes June 30, 2026
              </p>
            </div>

            <div className="h-px w-10 bg-[#4a7229]/40" />

            {/* Body — authoritative, non-alarmist */}
            <p
              className="text-gray-600 text-[0.88rem] leading-[1.9]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              National PFAS litigation settlements have established a defined cost-recovery pathway for eligible public water systems. This mechanism exists to absorb remediation expenses at the program level —{" "}
              <span className="text-gray-800 font-medium">rather than transferring those costs to local ratepayers through rate adjustments.</span>{" "}
              Positioning requires deliberate action before the June 2026 window closes.
            </p>

            {/* Subheader */}
            <p
              className="text-gray-800 text-[0.8rem] uppercase tracking-[0.12em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              What the Settlement Requires of Your System:
            </p>

            {/* Staggered checklist */}
            <ul ref={settlementRef} className="flex flex-col gap-4">
              {[
                { text: "Completing compliant sampling", bold: "compliant sampling", delay: 0 },
                { text: "Assembling required documentation for the funding pathway", bold: "required documentation", delay: 120 },
                { text: "Positioning the system correctly before the June 2026 deadline", bold: "before the June 2026 deadline", delay: 240 },
              ].map((item, i) => (
                <li
                  key={i}
                  className="settlement-check flex items-start gap-3"
                  data-delay={item.delay}
                >
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full border border-[#4a7229]/50 flex items-center justify-center bg-[#f4f8f0]">
                    <svg className="w-2.5 h-2.5 text-[#4a7229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p
                    className="text-gray-600 text-[0.85rem] leading-[1.75]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    dangerouslySetInnerHTML={{
                      __html: item.text.replace(
                        item.bold,
                        `<strong class="text-[#0a1a06] font-semibold">${item.bold}</strong>`
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>

            {/* Defensibility note */}
            <p
              className="text-gray-400 text-[0.72rem] leading-[1.7] border-l-2 border-gray-200 pl-3"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Funding alignment is coordinated as part of the program response — it is not offered as a standalone service or conditional on any singular outcome.
            </p>
          </div>

          {/* RIGHT — Image panel with deadline overlay */}
          <div className="relative min-h-[420px] md:min-h-0 overflow-hidden">
            <Image
              src="/iStock-1031829056cr-2048x2048.webp"
              alt="Hourglass at sunset — time-sensitive PFAS settlement funding window"
              fill
              className="object-cover object-center"
              sizes="50vw"
              style={{ filter: "brightness(0.88) contrast(1.06) saturate(0.75)" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a06]/85 via-[#0a1a06]/30 to-transparent" />

            {/* Deadline stamp — bottom of image */}
            <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col gap-3">
              <div className="h-px w-8 bg-[#D4AF37]/60" />
              <p
                className="text-white/60 text-[0.6rem] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Settlement Window
              </p>
              <p
                className="deadline-gold text-[2rem] leading-none"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                June 30, 2026
              </p>
              <p
                className="text-white/70 text-[0.75rem] leading-[1.7] max-w-xs"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Early engagement is the determining factor in funding eligibility. Systems that delay positioning risk absorbing the full cost of compliance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROGRAM CAPABILITIES
      ══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6]">

        {/* ── Section header ── */}
        <div ref={capRef} className="pfas-reveal max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center gap-5">
          <p
            className="text-[#4a7229] text-[0.65rem] uppercase tracking-[0.32em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Program Scope
          </p>
          <h2
            className="text-gray-900 text-[1.9rem] max-w-2xl leading-[1.2]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            A Drinking Water–Specific PFAS Response
          </h2>
          <div className="h-px w-10 bg-[#4a7229]" />
          <p
            className="text-gray-500 text-[0.88rem] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            Each program element is sequenced to address the distinct technical, regulatory, and financial obligations of public water systems — from source characterization through compliance close-out.
          </p>
        </div>

        {/* ── 50/50 split: image left, capabilities list right ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 px-6 pb-0">

          {/* LEFT — puzzle image, slow fade in */}
          <div ref={capImgRef} className="pfas-reveal relative min-h-[480px] overflow-hidden" style={{ transitionDelay: "0.1s" }}>
            <Image
              src="/pexels-m-sovran-wolfe-1593386-8568562cr-2048x2048.webp"
              alt="Integrated coordination — unified PFAS response program"
              fill
              className="object-cover object-center"
              sizes="50vw"
              style={{ filter: "brightness(0.9) contrast(1.04) saturate(0.8)" }}
            />
            {/* Right-side fade toward list */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f7f8f6]/60" />
            {/* Bottom label */}
            <div className="absolute bottom-0 inset-x-0 p-7 bg-gradient-to-t from-[#0f2008]/80 to-transparent">
              <p
                className="text-white/80 text-[0.65rem] uppercase tracking-[0.28em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Unified Program Coordination
              </p>
              <p
                className="text-white/60 text-[0.72rem] leading-[1.6] mt-1 max-w-xs"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Every service element managed under a single coordinated framework — no fragmentation.
              </p>
            </div>
          </div>

          {/* RIGHT — sequential capability list */}
          <div
            ref={capListRef}
            className="flex flex-col divide-y divide-gray-200 bg-white border-l border-gray-200"
          >
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="cap-item flex items-start gap-5 px-7 py-5 hover:bg-[#f7fbf4] transition-colors duration-200"
              >
                <span
                  className="shrink-0 text-[#4a7229]/30 text-[1.2rem] leading-none pt-0.5 w-8 text-right"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  {cap.num}
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    className="text-gray-800 text-[0.78rem] uppercase tracking-[0.08em] leading-snug"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    {cap.title}
                  </p>
                  <p
                    className="text-gray-500 text-[0.74rem] leading-[1.7]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {cap.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Low-friction entry box ── */}
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-6"></div>

      </section>

      {/* ══════════════════════════════════════════
          WHY PROJECTS FAIL
      ══════════════════════════════════════════ */}
      <section className="bg-white overflow-hidden pb-20">

        {/* ── Section header ── */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 flex flex-col gap-4">
          <p
            className="text-[#4a7229] text-[0.62rem] uppercase tracking-[0.36em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Systemic Risk Analysis
          </p>
          <h2
            className="text-gray-900 text-[2rem] md:text-[2.4rem] leading-[1.12] max-w-2xl"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            PFAS Water Projects Fail in the Gaps
          </h2>
          <div className="h-px w-10 bg-[#4a7229]" />
          <p
            className="text-gray-500 text-[0.88rem] leading-[1.85] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            Most public water PFAS programs exceed budget or stall at compliance because no single party holds sequencing authority across all program phases. The failures are systemic — not incidental.
          </p>
        </div>

        {/* ── Split: risk list left, image right ── */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT — risk list, "bridge-building" entrance from left */}
          <div ref={failRef} className="pfas-reveal flex flex-col divide-y divide-gray-100">
            <p
              className="text-gray-400 text-[0.6rem] uppercase tracking-[0.28em] pb-4"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Most Drinking Water PFAS Barriers Occur Because:
            </p>
            <ul className="flex flex-col gap-1 py-2">
              {FAILURE_POINTS.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 py-1.5">
                  <span className="mt-1 w-4 h-4 shrink-0 rounded-full border border-[#4a7229]/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a7229]" />
                  </span>
                  <p
                    className="text-gray-600 text-[0.85rem] leading-[1.75]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {pt}
                  </p>
                </li>
              ))}
            </ul>

            {/* Closing solution paragraph */}
            <p
              className="text-gray-800 text-[0.82rem] leading-[1.85] pt-5"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Our drinking water PFAS response program exists to eliminate those gaps by maintaining continuity from first test to final compliance.
            </p>
          </div>

          {/* RIGHT — blueprint image */}
          <div
            ref={failImgRef}
            className="pfas-reveal overflow-hidden rounded-sm"
            style={{ transitionDelay: "0.1s" }}
          >
            <Image
              src="/pexels-shvetsa-5324975cr-2048x2048.webp"
              alt="Engineers reviewing blueprints — coordinated PFAS program planning"
              width={800}
              height={800}
              className="w-full object-cover"
              style={{ filter: "brightness(0.9) contrast(1.04) saturate(0.82)" }}
            />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESIGNED FOR + INDEPENDENCE
      ══════════════════════════════════════════ */}
      <section className="bg-[#f7f8f6]">

        {/* ── Designed For ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* LEFT — text, synchronized slide-in */}
          <div ref={designedRef} className="pfas-reveal flex flex-col justify-center gap-8 px-8 md:px-12 py-20">
            <p
              className="text-[#4a7229] text-[0.65rem] uppercase tracking-[0.32em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Program Eligibility
            </p>
            <h2
              className="text-gray-900 text-[1.9rem] leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Designed for Public Drinking Water Systems
            </h2>
            <div className="h-px w-10 bg-[#4a7229]" />
            <p
              className="text-gray-500 text-[0.82rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              This Division Is Organized Specifically For:
            </p>

            {/* Designation list */}
            <ul className="flex flex-col gap-0 divide-y divide-gray-200">
              {DESIGNED_FOR.map((item, i) => (
                <li key={i} className="flex flex-col gap-1.5 py-5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4a7229] shrink-0" />
                    <p
                      className="text-gray-800 text-[0.77rem] uppercase tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                    >
                      {item.designation}
                    </p>
                  </div>
                  <p
                    className="text-gray-500 text-[0.78rem] leading-[1.75] pl-4"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>

            {/* Strategic invitation CTA lead-in */}
            <div className="border-l-[3px] border-[#4a7229] pl-5 py-1">
              <p
                className="text-gray-900 text-[0.88rem] leading-[1.85]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                If your system is subject to PFAS sampling, reporting, or treatment obligations —{" "}
                <span className="text-[#4a7229]">this program was designed for you.</span>
              </p>
            </div>
          </div>

          {/* RIGHT — aerial water treatment plant, slow reveal */}
          <div
            ref={designedImgRef}
            className="pfas-reveal aerial-reveal"
          >
            <div className="relative overflow-hidden" style={{ height: "480px" }}>
              <Image
                src="/water-treatment-plant-7382931_1280cr2.webp"
                alt="Aerial view of water treatment facility — public drinking water infrastructure"
                fill
                className="object-cover object-center"
                sizes="50vw"
                style={{ filter: "brightness(0.88) contrast(1.06) saturate(0.78)" }}
              />
              {/* Bottom caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1a06]/80 via-[#0a1a06]/30 to-transparent p-8">
                <p
                  className="text-white/50 text-[0.6rem] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  Public Drinking Water Infrastructure
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16 items-start">

          {/* LEFT — text */}
          <div ref={indyRef} className="pfas-reveal flex flex-col gap-7 py-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#4a7229] text-[0.68rem] uppercase tracking-[0.28em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}>
                Independence & Accountability
              </p>
              <h2 className="text-gray-900 text-[1.8rem] leading-[1.2]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>
                Independent. Disciplined. Procurement-Safe.
              </h2>
              <div className="h-px w-10 bg-[#4a7229]" />
              <p className="text-gray-600 text-[0.88rem] leading-[1.8]" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                JCrew Environmental Solution serves as the independent coordinator of the drinking water PFAS response — your institution retains full control over vendors and decisions. All work is delivered through qualified partners; our role is sequencing, oversight, and accountability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {INDEPENDENCE_OUTCOMES.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-5 bg-white border border-[#4a7229]/20 rounded-sm text-center hover:border-[#4a7229]/50 hover:shadow-sm transition-all duration-200">
                  <svg className="w-5 h-5 text-[#4a7229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                  <p className="text-gray-700 text-[0.72rem] uppercase tracking-[0.12em]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div ref={indyImgRef} className="pfas-reveal py-8">
            <div className="relative overflow-hidden rounded-sm" style={{ height: "480px" }}>
              <Image
                src="/Picture1111.webp"
                alt="JCrew Environmental — independent PFAS program coordination"
                fill
                className="object-cover object-center"
                sizes="50vw"
                style={{ filter: "brightness(0.92) contrast(1.04) saturate(0.85)" }}
              />
            </div>
          </div>

        </div>
      </section>

      <ContactSection />

      <Footer />
    </div>
  );
}
