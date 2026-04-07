"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const VERTICALS = [
  {
    src: "/Municipal.jpg",
    label: "Municipal & Regional Authorities",
    sub: "State and local government environmental programs requiring coordinated compliance delivery.",
  },
  {
    src: "/Public-drinking.jpg",
    label: "Public Drinking Water Systems",
    sub: "PFAS response and water infrastructure programs for community and utility operators.",
  },
  {
    src: "/airports.jpg",
    label: "Airports & Transportation Facilities",
    sub: "Remediation and compliance programs for high-scrutiny transportation infrastructure.",
  },
  {
    src: "/Fed-and-Mil-2048x2048.jpg",
    label: "Federal & Military Installations",
    sub: "Regulatory compliance and environmental program management for federal and defense sites.",
  },
  {
    src: "/pfas-Public-infra-2048x2048.jpg",
    label: "PFAS-Impacted Public Infrastructure",
    sub: "End-to-end PFAS response programs structured for long-term institutional accountability.",
  },
];

export default function MarketVerticalsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mktvert-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f8f6] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* ── Header ── */}
        <div ref={headingRef} className="mktvert-heading flex flex-col items-center text-center gap-4">
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Market Sectors
          </p>
          <h2
            className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15] max-w-2xl"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
          >
            Serving Public Institutions
            <br />
            Across Every Sector
          </h2>
          <div className="h-px w-12 bg-[#4a7c2f]" />
          <p
            className="text-gray-500 text-[0.9rem] leading-[1.8] max-w-xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            JCrew Environmental Solution coordinates environmental programs for public institutions across municipal, federal, and infrastructure sectors — each engagement structured to local regulatory requirements.
          </p>
        </div>

        {/* ── 5-card image grid ── */}
        <div
          ref={gridRef}
          className="mktvert-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {VERTICALS.map((v, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-sm overflow-hidden shadow-md cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image — unified filter treatment */}
              <Image
                src={v.src}
                alt={v.label}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                style={{
                  filter: "brightness(0.88) contrast(1.08) saturate(0.85)",
                }}
              />

              {/* Base overlay — always present, darkens for legibility */}
              <div className="absolute inset-0 bg-[#0a1e05]/40 transition-opacity duration-500 group-hover:bg-[#0a1e05]/62" />

              {/* Label block — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 bg-gradient-to-t from-[#0a1e05]/90 via-[#0a1e05]/50 to-transparent flex flex-col gap-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <p
                  className="text-white text-[0.78rem] leading-snug"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {v.label}
                </p>
                {/* Sub-label — hidden at rest, fades in on hover */}
                <p
                  className="text-gray-300 text-[0.65rem] leading-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {v.sub}
                </p>
              </div>

              {/* Arrow — fades in on hover, bottom-right */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 flex items-center justify-center border border-white/40 rounded-sm bg-white/10 backdrop-blur-sm">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Strategic guarantee footer ── */}
        <div className="flex flex-col items-center gap-3 border-t border-gray-200 pt-10 text-center">
          <p
            className="text-gray-700 text-[0.88rem] leading-[1.8] max-w-2xl"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            Every engagement is structured to meet the regulatory requirements of its specific jurisdiction — delivered within a consistent national program framework.
          </p>
          <a
            href="#"
            className="mt-1 inline-flex items-center gap-2 text-[0.72rem] text-[#4a7c2f] uppercase tracking-[0.18em] hover:text-[#3d6b22] transition-colors duration-200"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            View All Program Capabilities
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
