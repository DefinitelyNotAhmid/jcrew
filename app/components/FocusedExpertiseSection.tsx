"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const DIVISIONS = [
  {
    label: "PFAS Response",
    description:
      "Assessment through funded remediation — managed as a single, sequenced program with documented accountability at every phase.",
  },
  {
    label: "Clean Energy",
    description:
      "Clean fuel systems and infrastructure designed to reduce environmental impact and advance zero-emission performance across industrial and municipal markets.",
  },
  {
    label: "Program Coordination",
    description:
      "Centralized oversight across regulatory, financial, and technical workstreams — eliminating fragmentation and protecting institutional interests across the program lifecycle.",
  },
];

export default function FocusedExpertiseSection() {
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
      { threshold: 0.15 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (copyRef.current) observer.observe(copyRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f8f6] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 md:gap-0 items-stretch">

        {/* Left — image (slides in from left) */}
        <div
          ref={imageRef}
          className="expertise-panel-left relative w-full min-h-[280px] sm:min-h-[380px] md:min-h-[560px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/Still-2026-01-30-152634_1.1.1-1024x576.jpg"
            alt="Environmental technician collecting water samples for PFAS assessment near an industrial site"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Right-edge fade to blend with copy column */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        </div>

        {/* Right — copy (slides in from right) */}
        <div
          ref={copyRef}
          className="expertise-panel-right flex flex-col justify-center gap-8 px-5 md:px-14 py-10 md:py-12"
        >
          {/* Eyebrow */}
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Focused Expertise
          </p>

          {/* Headline */}
          <div>
            <h2
              className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Unified Accountability
            </h2>
            <div className="mt-3 h-px w-12 bg-[#4a7c2f]" />
          </div>

          {/* Power statement — Risk-Mitigation version */}
          <p
            className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-md"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            Each Pure Green division is purpose-built for a specific class of
            environmental risk — and every one operates within the same
            coordination, funding oversight, and delivery accountability
            structure.
          </p>

          {/* Division bullets */}
          <div className="flex flex-col gap-6 pt-1">
            {DIVISIONS.map((div, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Index number as visual anchor */}
                <span
                  className="text-[#4a7c2f] text-xs mt-0.5 shrink-0 w-5 text-right"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="text-gray-900 text-sm mb-1"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                  >
                    {div.label}
                  </p>
                  <p
                    className="text-gray-500 text-sm leading-[1.75]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    {div.description}
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
