"use client";

import { useEffect, useRef } from "react";

const FOCUS_AREAS = [
  {
    num: "01",
    label: "Drinking Water Systems",
    desc: "Public water systems subject to EPA PFAS MCL enforcement and compliance timelines.",
  },
  {
    num: "02",
    label: "Regulated Exposure Pathways",
    desc: "Assessment and response for all regulated PFAS exposure routes under applicable federal and state standards.",
  },
  {
    num: "03",
    label: "Settlement- & Compliance-Driven Timelines",
    desc: "Programs structured to satisfy consent orders, enforcement agreements, and statutory deadlines.",
  },
];

export default function PFASSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("expertise-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (noticeRef.current) observer.observe(noticeRef.current);
    if (copyRef.current) observer.observe(copyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">

        {/* ── Left — Notice box + CTAs (slides from left) ── */}
        <div ref={noticeRef} className="expertise-panel-left flex flex-col gap-6 order-last md:order-first">

          {/* Regulatory Notice panel */}
          <div className="border border-gray-200 border-l-4 border-l-[#1a3d10] bg-[#f9faf7] rounded-sm overflow-hidden">

            {/* Header strip */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-gray-200 bg-[#f1f4ef]">
              {/* Warning triangle */}
              <svg className="w-4 h-4 text-[#1a3d10] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <p
                className="text-[0.65rem] uppercase tracking-[0.22em] text-[#1a3d10]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Regulatory Compliance Deadline
              </p>
            </div>

            {/* Notice body */}
            <div className="px-5 py-5 flex flex-col gap-4">
              <p
                className="text-[0.8rem] text-gray-500 uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Drinking Water PFAS Response
                <br />
                <span className="text-[#b91c1c]">EPA-Mandated Action Required</span>
              </p>

              {/* Deadline date — pulsing */}
              <div className="flex flex-col gap-0.5">
                <p
                  className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-400"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  Compliance Deadline
                </p>
                <p
                  className="deadline-pulse text-3xl leading-none"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  June 30, 2026
                </p>
              </div>

              {/* Supporting note */}
              <p
                className="text-[0.78rem] text-gray-500 leading-relaxed border-t border-gray-100 pt-4"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Public water systems subject to EPA PFAS maximum contaminant level (MCL) enforcement must demonstrate a compliance pathway by this date. Early coordination is critical to funding eligibility.
              </p>
            </div>
          </div>

          {/* CTA hierarchy */}
          <div className="flex flex-col gap-3">
            {/* Primary */}
            <a
              href="tel:8778787347"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#1a3d10] text-white text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#142e0c] transition-colors duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: (844) 8-JCREW
            </a>

            {/* Secondary */}
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 border border-[#1a3d10] text-[#1a3d10] text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#f1f4ef] transition-colors duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Request Confidential Consultation
            </a>

            {/* Tertiary — text link */}
            <a
              href="#"
              className="flex items-center justify-center gap-1.5 text-[0.75rem] text-gray-400 hover:text-[#3d6b22] transition-colors duration-200 pt-1"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Visit PFAS Response Division
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right — copy + focus areas (slides from right) ── */}
        <div ref={copyRef} className="expertise-panel-right flex flex-col gap-8 order-first md:order-last">

          {/* Eyebrow */}
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}
          >
            PFAS Response Division
          </p>

          {/* Headline */}
          <div>
            <h2
              className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Impacted Facilities
            </h2>
            <div className="mt-3 h-px w-12 bg-[#4a7c2f]" />
          </div>

          {/* Service description — 2 sentences */}
          <p
            className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            JCrew Environmental Solution manages the complete PFAS response lifecycle for impacted public water systems — from initial assessment and funding alignment through interim protection, engineering, and long-term remediation. All services are coordinated as a single accountable framework, eliminating fragmentation and protecting institutional interests from first contact to compliance close-out.
          </p>

          {/* Focus areas */}
          <div className="flex flex-col gap-0 border border-gray-100 rounded-sm overflow-hidden">
            <div className="px-5 py-3 bg-[#f7f8f6] border-b border-gray-100">
              <p
                className="text-[0.6rem] uppercase tracking-[0.40em] text-gray-500"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
              >
                Focus Areas
              </p>
            </div>
            {FOCUS_AREAS.map((area, i) => (
              <div
                key={i}
                className="flex gap-5 px-5 py-5 border-b border-gray-50 last:border-0 bg-white hover:bg-[#f9faf7] transition-colors duration-150"
              >
                {/* Technical number badge */}
                <span
                  className="text-[#4a7c2f] text-[0.6rem] shrink-0 mt-0.5 w-6 text-right"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {area.num}
                </span>
                <div className="w-px bg-gray-200 shrink-0" />
                <div>
                  <p
                    className="text-gray-800 text-[0.82rem] mb-1"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                  >
                    {area.label}
                  </p>
                  <p
                    className="text-gray-400 text-[0.75rem] leading-[1.7]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
