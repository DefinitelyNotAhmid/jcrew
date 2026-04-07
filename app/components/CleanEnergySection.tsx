"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CAPABILITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: "Clean Fuel Systems",
    desc: "Proven clean fuel infrastructure reducing emission loads across industrial operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
    label: "Municipal Infrastructure",
    desc: "Systems engineered for the performance requirements of public and industrial markets.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22V12M12 12C12 7 7 4 3 6M12 12C12 7 17 4 21 6M12 12C9 15 6 17 3 21M12 12C15 15 18 17 21 21" />
      </svg>
    ),
    label: "Zero-Emission Performance",
    desc: "Infrastructure designed to advance zero-emission goals and long-term sustainability metrics.",
  },
];

export default function CleanEnergySection() {
  const imageRef = useRef<HTMLDivElement>(null);
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
    if (imageRef.current) observer.observe(imageRef.current);
    if (copyRef.current) observer.observe(copyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f8f6] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── Left — copy (slides from left) ── */}
        <div ref={copyRef} className="expertise-panel-left flex flex-col gap-8">

          {/* Eyebrow */}
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Clean Energy Division
          </p>

          {/* H2 — Cinzel 600, prestige scale */}
          <div>
            <h2
              className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Sustainable Environmental
              <br />
              Solutions in Practice
            </h2>
            <div className="mt-3 h-px w-12 bg-[#4a7c2f]" />
          </div>

          {/* Mission statement — ≤25 words, Poppins 300 */}
          <p
            className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-lg"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            We develop clean fuel systems and infrastructure that reduce
            environmental impact, advance zero-emission performance goals, and
            support long-term sustainability metrics across industrial and
            municipal markets.
          </p>

          {/* Capabilities — 3-column icon grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-4 bg-white border border-gray-100 rounded-sm hover:border-[#4a7c2f]/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-[#4a7c2f]">{cap.icon}</span>
                <p
                  className="text-gray-800 text-[0.90rem] leading-snug"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                >
                  {cap.label}
                </p>
                <p
                  className="text-gray-400 text-[0.72rem] leading-[1.65]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-5 pt-1">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#4a7c2f] text-white text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#3d6b22] transition-colors duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Explore the Clean Energy Division
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[0.75rem] text-gray-400 hover:text-[#3d6b22] transition-colors duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
            </a>
          </div>
        </div>

        {/* ── Right — image (slides from right) ── */}
        {/* Photography note: replace with aerial shot of clean fuel infrastructure,
            hydrogen storage facility, or municipal biogas plant for maximum
            institutional impact with industrial/municipal stakeholders. */}
        <div
          ref={imageRef}
          className="expertise-panel-right relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/energy-4828337_1280cr.jpg"
            alt="Clean energy infrastructure — applied environmental solutions in practice"
            fill
            className="object-cover grayscale-[0.2]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Industrial overlay — desaturates consumer feel, adds professional depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e05]/50 via-transparent to-[#1a3d10]/20" />

         
        </div>

      </div>
    </section>
  );
}
