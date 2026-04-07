"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CARDS = [
  {
    num: "01",
    phrase: "One Accountable Party",
    body: "Manage partners, timelines, and deliverables under a single institutional framework — one contact, complete ownership.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    delay: 0,
  },
  {
    num: "02",
    phrase: "No Vendor Fragmentation",
    body: "Eliminate the overhead of multiple contractors — we manage qualified partners directly under a coordinated delivery structure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    delay: 120,
  },
  {
    num: "03",
    phrase: "Execution Risk Controlled",
    body: "Reduce phase gaps and maintain continuity — centralized oversight minimizes delays across multi-year program timelines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    delay: 240,
  },
  {
    num: "04",
    phrase: "Focus on Core Mission",
    body: "Stay focused on institutional obligations — we handle the operational and regulatory complexity of program execution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    delay: 360,
  },
];

export default function ProgramCoordinationSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("progcoord-visible");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("expertise-visible");
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imageRef.current) imageObserver.observe(imageRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            setTimeout(() => {
              el.classList.add("progcoord-card-visible");
            }, parseInt(delay));
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      headingObserver.disconnect();
      imageObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* ── Split: copy left, image right ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy (slides from left) */}
          <div ref={headingRef} className="progcoord-heading flex flex-col gap-8">

            <p
              className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
            >
              Program Coordination
            </p>

            <div>
              <h2
                className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Not Fragmented
                <br />
                Services
              </h2>
              <div className="mt-3 h-px w-12 bg-[#4a7c2f]" />
            </div>

            <p
              className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-lg"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              JCrew Environmental Solution functions as the single point of accountability
              for your environmental program — managing qualified partners,
              sequencing execution, and eliminating the overhead of fragmented
              vendor coordination. We maintain centralized oversight across
              every workstream, so your institution is never managing multiple
              contractors with competing timelines.
            </p>

            <p
              className="text-gray-600 text-[0.88rem] leading-[1.8] max-w-lg"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              One framework. Reduced delays.{" "}
              <span className="text-gray-700" style={{ fontWeight: 500 }}>
                Complete accountability.
              </span>
            </p>

            <div className="flex items-center gap-5 pt-1">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#4a7c2f] text-white text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#3d6b22] transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                How we work
              </a>
            </div>
          </div>

          {/* Right — image (slides from right) */}
          <div
            ref={imageRef}
            className="expertise-panel-right relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/business-7116735_1280.jpg"
              alt="Networked program coordination team — centralized oversight across environmental workstreams"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e05]/50 via-[#0a1e05]/15 to-transparent" />
          </div>
        </div>

        {/* ── 4-card benefits grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              data-delay={card.delay}
              className="progcoord-card group flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#4a7c2f]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#eef2ea] text-[#3d6b22] group-hover:bg-[#4a7c2f] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <span
                  className="text-gray-300 text-[1.6rem] leading-none group-hover:text-[#4a7c2f]/50 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
                >
                  {card.num}
                </span>
              </div>

              {/* Expanding rule */}
              <div className="h-px w-8 bg-[#4a7c2f]/40 group-hover:w-full group-hover:bg-[#4a7c2f]/25 transition-all duration-500" />

              {/* Power phrase */}
              <p
                className="text-gray-900 text-[0.82rem] leading-snug"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                {card.phrase}
              </p>

              {/* Body */}
              <p
                className="text-gray-600 text-[0.78rem] leading-[1.75]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Micro-copy disclaimer ── */}
        <p
          className="text-gray-400 text-[0.75rem] uppercase tracking-[0.18em] text-center border-t border-gray-100 pt-8"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
        >
          No commitment required — initial program reviews are confidential and obligation-free.
        </p>

      </div>
    </section>
  );
}
