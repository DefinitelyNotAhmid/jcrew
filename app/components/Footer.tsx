"use client";

const QUICK_LINKS = [
  { label: "PFAS Response Division", href: "/pfas-drinking-water" },
  { label: "Drinking Water PFAS Response", href: "/pfas-drinking-water" },
  { label: "Clean Energy Division", href: "/clean-energy" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Funding & Accountability", href: "/funding-accountability" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimers", href: "/disclaimers" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#0a1a06] text-white">

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12">

        {/* Col 1 — Brand ── */}
        <div className="flex flex-col gap-7">
          {/* Wordmark */}
          <div>
            <p
              className="text-white text-[0.85rem] leading-tight"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              JCrew Environmental Solution
            </p>
            <p
              className="text-[#9ecf62] text-[0.55rem] uppercase tracking-[0.22em] mt-0.5"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Environmental Program Coordination
            </p>
          </div>

          {/* Tagline */}
          <p
            className="text-gray-400 text-[0.82rem] leading-[1.85] max-w-xs"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            One accountable framework for complex, long-duration environmental programs — serving public institutions, municipal authorities, and federal agencies nationwide.
          </p>

        </div>

        {/* Col 2 — Quick Links ── */}
        <div className="flex flex-col gap-5">
          <p
            className="text-white text-[0.68rem] uppercase tracking-[0.24em] pb-3 border-b border-white/10"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 text-[0.78rem] leading-snug hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact & Legal ── */}
        <div className="flex flex-col gap-5">
          <p
            className="text-white text-[0.68rem] uppercase tracking-[0.24em] pb-3 border-b border-white/10"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Contact & Legal
          </p>

          {/* HQ address */}
          <div className="flex gap-3 items-start">
            <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p
                className="text-gray-300 text-[0.75rem] leading-[1.7]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Hazleton, Pennsylvania
                <br />
                United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 items-center">
            <svg className="w-3.5 h-3.5 shrink-0 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a
              href="tel:+18448787346"
              className="text-gray-300 text-[0.75rem] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              (844) 8-JCREW
            </a>
          </div>

          {/* Confidential consultation CTA */}
          <a
            href="mailto:info@jcrewenvironmental.com"
            className="group flex items-center gap-3 border border-white/15 rounded-sm px-4 py-3 hover:border-[#4a7c2f]/60 hover:bg-white/5 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0 text-[#4a7c2f] group-hover:text-[#9ecf62] transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <div>
              <p
                className="text-[#9ecf62] text-[0.6rem] uppercase tracking-[0.18em] leading-none mb-0.5"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
              >
                Confidential Consultation
              </p>
              <p
                className="text-gray-400 text-[0.7rem] group-hover:text-gray-300 transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Write to our program team
              </p>
            </div>
          </a>

          {/* Legal links */}
          <ul className="flex flex-col gap-2.5 pt-1">
            {LEGAL.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-500 text-[0.72rem] hover:text-gray-300 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8 max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p
          className="text-gray-600 text-[0.68rem] uppercase tracking-[0.16em]"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          © {new Date().getFullYear()} JCrew Environmental Solution. All rights reserved.
        </p>

 

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200"
          aria-label="Back to top"
        >
          <span
            className="text-[0.68rem] uppercase tracking-[0.16em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
          >
            Back to Top
          </span>
          <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 16 16" fill="none">
            <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </footer>
  );
}
