"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const VALUES = [
  {
    phrase: "Phase-Controlled Execution",
    body: "Every program follows a documented sequence — no phase begins until the prior one is closed, verified, and recorded.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    phrase: "Budget-Compliant Delivery",
    body: "Program structures are designed around public funding mechanisms — grant cycles, appropriations, and procurement constraints are built into execution from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    phrase: "Sustained Program Integrity",
    body: "Multi-year programs require continuity of oversight, not periodic check-ins. We maintain consistent coordination personnel and documented accountability from start to close-out.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

export default function PublicAccountabilitySection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("expertise-visible");
            }
            if (entry.target === copyRef.current) {
              entry.target.classList.add("pubacct-copy-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    if (copyRef.current) observer.observe(copyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* ── Left — image with mask reveal ── */}
        <div
          ref={imageRef}
          className="expertise-panel-left relative w-full aspect-square rounded-sm overflow-hidden shadow-xl"
        >
          <Image
            src="/lala-azizli-PPthz61B3-8-unsplashcr-2048x2048.jpg"
            alt="Classical government architecture — scales of justice carved in stone, signifying public accountability and institutional permanence"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              filter: "sepia(0.18) saturate(0.9) brightness(0.97)",
            }}
          />
          {/* Green tint overlay — aligns warm sandstone to brand palette */}
          <div className="absolute inset-0 bg-[#1a3d10]/12" />

          {/* Bottom caption strip */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-[#0f2008]/80 to-transparent">
            <p
              className="text-[#9ecf62] text-[0.6rem] uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 400 }}
            >
              Designed for Institutional Standards
            </p>
          </div>
        </div>

        {/* ── Right — copy (fades up with 250ms delay after image) ── */}
        <div ref={copyRef} className="pubacct-copy flex flex-col gap-8">

          {/* Eyebrow */}
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Built for Public Accountability
          </p>

          {/* H2 — Cinzel 600, prestige scale */}
          <div>
            <h2
              className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Structured for
              <br />
              Institutional Scrutiny
            </h2>
            <div className="mt-3 h-px w-12 bg-[#4a7c2f]" />
          </div>

          {/* Body — empathetic rewrite for City Manager / Public Works Director */}
          <p
            className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-lg"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Public institutions operate under conditions that private-sector
            vendors rarely understand — fixed budgets, community oversight,
            multi-year timelines, and regulatory frameworks that don't move. We
            design every program around these realities, not around what is
            convenient for us to deliver.
          </p>

          {/* Supporting context */}
          <p
            className="text-gray-400 text-[0.88rem] leading-[1.8] max-w-lg"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Every program we coordinate is structured to produce records that
            satisfy auditors, satisfy regulators, and satisfy the public — in
            that order.
          </p>

          {/* Values list */}
          <div className="flex flex-col gap-5 pt-1">
            {VALUES.map((val, i) => (
              <div key={i} className="flex gap-5 items-start group">
                {/* Icon */}
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-sm bg-[#f1f4ef] text-[#4a7c2f] group-hover:bg-[#4a7c2f] group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <div>
                  <p
                    className="text-gray-900 text-[0.82rem] mb-1"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                  >
                    {val.phrase}
                  </p>
                  <p
                    className="text-gray-400 text-[0.78rem] leading-[1.75]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    {val.body}
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
