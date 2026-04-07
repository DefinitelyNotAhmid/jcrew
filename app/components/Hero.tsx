"use client";

const CARDS = [
  {
    title: "One Accountable Framework",
    body: "Regulatory, financial, and technical execution — coordinated under a single point of responsibility.",
    delay: "0.72s",
  },
  {
    title: "PFAS Response, Fully Managed",
    body: "From initial assessment through long-term compliance, we manage the complete program lifecycle.",
    delay: "0.84s",
  },
  {
    title: "Built for Public Institutions",
    body: "Designed for the accountability, transparency, and procurement standards government agencies require.",
    delay: "0.96s",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Hero-Home-small.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay — heavy left for legibility, breathes right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow — Cinzel 400, wide tracking */}
            <p
              className="hero-animate text-[#9ecf62] text-[0.65rem] font-normal uppercase tracking-[0.32em]"
              style={{
                fontFamily: "var(--font-cinzel)",
                animationDelay: "0.1s",
              }}
            >
              Environmental Program Coordination
            </p>

            {/* H1 — Cinzel 600, display scale */}
            <h1
              className="hero-animate text-[1.9rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[1.12] text-white"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontWeight: 600,
                animationDelay: "0.22s",
              }}
            >
              Environmental Program
              <br />
              Coordination for
              <br />
              Public Institutions.
            </h1>

            {/* Subheadline — Poppins 300 */}
            <p
              className="hero-animate text-gray-200 text-base md:text-[1.05rem] leading-[1.75] max-w-lg"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 300,
                animationDelay: "0.36s",
              }}
            >
              JCrew Environmental Solution manages the entire PFAS response
              process as one accountable framework — integrating regulatory
              compliance, financial oversight, and technical execution across
              the full duration of your program.
            </p>

            {/* Supporting copy — Poppins 300, slightly muted */}
            <p
              className="hero-animate text-gray-400 text-sm md:text-[0.95rem] leading-[1.75] max-w-lg"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 300,
                animationDelay: "0.48s",
              }}
            >
              We give decision-makers in public institutions a single point of
              accountability, so complex, long-duration environmental programs
              move forward with clarity and confidence.
            </p>

            {/* CTA group */}
            <div
              className="hero-animate flex flex-col sm:flex-row items-stretch sm:items-start gap-3 mt-1"
              style={{ animationDelay: "0.6s" }}
            >
              {/* Primary — solid green, Poppins 500 */}
              <a
                href="#"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 bg-[#4a7c2f] text-white text-sm rounded overflow-hidden shadow-lg text-center"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 500,
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#3d6b22";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(74,124,47,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#4a7c2f";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                Write
              </a>

              {/* Secondary — ghost border, Poppins 400 */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3.5 border text-white text-sm rounded text-center"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 400,
                  borderColor: "rgba(255,255,255,0.45)",
                  transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
                }}
              >
                Call: (123) JCrew Environmental Solution
              </a>
            </div>

            {/* Micro-copy */}
            <p
              className="hero-animate text-gray-500 text-[0.65rem] uppercase tracking-[0.22em]"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 400,
                animationDelay: "0.68s",
              }}
            >
              For No-obligation · Confidential consultation
            </p>
          </div>

          {/* ── Right column — credential cards ── */}
          <div className="hidden md:flex flex-col items-end justify-center gap-5 pr-2">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="hero-animate hero-card border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg px-6 py-5 max-w-xs w-full cursor-default"
                style={{ animationDelay: card.delay }}
              >
                <p
                  className="text-white text-sm mb-1.5"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: 500,
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="text-gray-400 text-xs leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
