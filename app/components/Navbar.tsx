"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const PFAS_ITEMS = [
  {
    label: "Drinking Water PFAS Response",
    desc: "Full-lifecycle program management from assessment to remediation.",
    href: "/pfas-drinking-water",
  },
];

export default function Navbar() {
  const [pfasOpen, setPfasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    // Detect if we are currently on the Google Translate proxy
    if (window.location.hostname.includes("translate.goog") ||
        window.location.hostname.includes("translate.googleusercontent")) {
      setLang("ES");
    }
  }, []);

  function handleLang(selected: "EN" | "ES") {
    if (selected === lang) return;
    setLang(selected);
    if (selected === "ES") {
      const url = encodeURIComponent(window.location.href);
      window.location.href = `https://translate.google.com/translate?hl=es&sl=en&tl=es&u=${url}`;
    } else {
      // Extract the original URL from the Google Translate proxy URL
      const params = new URLSearchParams(window.location.search);
      const original = params.get("u");
      if (original) {
        window.location.href = decodeURIComponent(original);
      } else {
        // Fallback: strip translate.goog wrapper by going to the original host
        const match = window.location.hostname.match(/^(.+?)\.translate\.goog$/);
        if (match) {
          const originalHost = match[1].replace(/-/g, ".");
          window.location.href = window.location.protocol + "//" + originalHost + window.location.pathname;
        } else {
          window.history.back();
        }
      }
    }
  }
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPfasOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`nav-root sticky top-0 z-50 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white border-gray-100 shadow-none"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16 md:h-20"}`}>

        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="JCrew Environmental Solution"
            width={40}
            height={40}
            className={`transition-all duration-300 shrink-0 ${scrolled ? "w-8 h-8" : "w-10 h-10"}`}
            style={{ width: "auto", height: "auto" }}
          />
          <span
            className={`text-[#3d6b22] leading-tight transition-all duration-300 truncate max-w-[160px] sm:max-w-none ${scrolled ? "text-[0.78rem] sm:text-[0.85rem]" : "text-[0.82rem] sm:text-[0.95rem]"}`}
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
          >
            JCrew Environmental Solution
          </span>
        </a>

        {/* ── Nav links ── */}
        <ul
          className="hidden md:flex items-center gap-8"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
        >
          {/* Home */}
          <li>
            <a
              href="/"
              className="relative text-[0.8125rem] text-gray-600 hover:text-[#3d6b22] transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[#4a7c2f] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>

          {/* PFAS Response — dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              aria-expanded={pfasOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-[0.8125rem] text-gray-600 hover:text-[#3d6b22] transition-colors duration-200"
              onClick={() => setPfasOpen(!pfasOpen)}
            >
              PFAS Response
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${pfasOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12" fill="none"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {pfasOpen && (
              <div
                className="dropdown-panel absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-sm shadow-xl z-50 overflow-hidden"
              >
                {/* Panel header */}
                <div className="px-5 py-3 border-b border-gray-100 bg-[#f7f8f6]">
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.22em] text-[#4a7c2f]"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 400 }}
                  >
                    PFAS Response Programs
                  </p>
                </div>
                {PFAS_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex flex-col px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-[#f7f8f6] transition-colors duration-150"
                    onClick={() => setPfasOpen(false)}
                  >
                    <span
                      className="text-[0.8rem] text-gray-800 group-hover:text-[#3d6b22] transition-colors duration-150"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[0.72rem] text-gray-400 mt-0.5 leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                    >
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Clean Energy */}
          <li>
            <a
              href="/clean-energy"
              className="relative text-[0.8125rem] text-gray-600 hover:text-[#3d6b22] transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[#4a7c2f] hover:after:w-full after:transition-all after:duration-300"
            >
              Clean Energy
            </a>
          </li>

          {/* How We Work */}
          <li>
            <a
              href="/how-we-work"
              className="relative text-[0.8125rem] text-gray-600 hover:text-[#3d6b22] transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[#4a7c2f] hover:after:w-full after:transition-all after:duration-300"
            >
              How We Work
            </a>
          </li>

          {/* Funding & Accountability */}
          <li>
            <a
              href="/funding-accountability"
              className="relative text-[0.8125rem] text-gray-600 hover:text-[#3d6b22] transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-[#4a7c2f] hover:after:w-full after:transition-all after:duration-300"
            >
              Funding &amp; Accountability
            </a>
          </li>
        </ul>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3 shrink-0">

          {/* CTA desktop */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-[#4a7c2f] text-white text-[0.72rem] uppercase tracking-[0.12em] border-l-2 border-transparent hover:bg-[#3d6b22] hover:border-l-2 hover:border-[#2d5a1b] transition-all duration-200"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            Contact Us
          </a>

          {/* Language toggle — desktop only */}
          <div
            className="hidden md:flex relative items-center bg-gray-100 rounded-full p-0.5"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            role="group"
            aria-label="Language selector"
          >
            <div
              className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#f5c518] shadow-sm transition-transform duration-250"
              style={{ transform: lang === "EN" ? "translateX(2px)" : "translateX(calc(100% + 2px))" }}
            />
            <button onClick={() => handleLang("EN")} aria-pressed={lang === "EN"} className={`relative z-10 px-3.5 py-1 text-[0.7rem] rounded-full transition-colors duration-150 ${lang === "EN" ? "text-[#3a2d00]" : "text-gray-400 hover:text-gray-600"}`}>EN</button>
            <button onClick={() => handleLang("ES")} aria-pressed={lang === "ES"} className={`relative z-10 px-3.5 py-1 text-[0.7rem] rounded-full transition-colors duration-150 ${lang === "ES" ? "text-[#3a2d00]" : "text-gray-400 hover:text-gray-600"}`}>ES</button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-gray-700 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col divide-y divide-gray-50" style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}>
            <li>
              <a href="/" onClick={closeMobile} className="flex items-center px-6 py-4 text-[0.88rem] text-gray-700 hover:text-[#3d6b22] hover:bg-[#f7f8f6] transition-colors duration-150">
                Home
              </a>
            </li>
            <li>
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-[0.88rem] text-gray-700 hover:text-[#3d6b22] hover:bg-[#f7f8f6] transition-colors duration-150"
                onClick={() => setPfasOpen((o) => !o)}
              >
                PFAS Response
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${pfasOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {pfasOpen && (
                <div className="bg-[#f7f8f6] px-6 pb-3">
                  {PFAS_ITEMS.map((item) => (
                    <a key={item.label} href={item.href} onClick={closeMobile} className="flex flex-col py-3 border-t border-gray-100">
                      <span className="text-[0.82rem] text-gray-800" style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}>{item.label}</span>
                      <span className="text-[0.72rem] text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}>{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="/clean-energy" onClick={closeMobile} className="flex items-center px-6 py-4 text-[0.88rem] text-gray-700 hover:text-[#3d6b22] hover:bg-[#f7f8f6] transition-colors duration-150">
                Clean Energy
              </a>
            </li>
            <li>
              <a href="/how-we-work" onClick={closeMobile} className="flex items-center px-6 py-4 text-[0.88rem] text-gray-700 hover:text-[#3d6b22] hover:bg-[#f7f8f6] transition-colors duration-150">
                How We Work
              </a>
            </li>
            <li>
              <a href="/funding-accountability" onClick={closeMobile} className="flex items-center px-6 py-4 text-[0.88rem] text-gray-700 hover:text-[#3d6b22] hover:bg-[#f7f8f6] transition-colors duration-150">
                Funding &amp; Accountability
              </a>
            </li>
            <li className="p-4 flex flex-col gap-3">
              <a
                href="/contact"
                onClick={closeMobile}
                className="flex items-center justify-center w-full py-3 bg-[#4a7c2f] text-white text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#3d6b22] transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Contact Us
              </a>
              {/* Language toggle in mobile menu */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                <span className="text-gray-400 text-[0.68rem] uppercase tracking-[0.16em]">Language:</span>
                <div className="relative flex items-center bg-gray-100 rounded-full p-0.5">
                  <div
                    className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#f5c518] shadow-sm transition-transform duration-250"
                    style={{ transform: lang === "EN" ? "translateX(2px)" : "translateX(calc(100% + 2px))" }}
                  />
                  <button onClick={() => handleLang("EN")} aria-pressed={lang === "EN"} className={`relative z-10 px-4 py-1 text-[0.7rem] rounded-full transition-colors duration-150 ${lang === "EN" ? "text-[#3a2d00]" : "text-gray-400"}`}>EN</button>
                  <button onClick={() => handleLang("ES")} aria-pressed={lang === "ES"} className={`relative z-10 px-4 py-1 text-[0.7rem] rounded-full transition-colors duration-150 ${lang === "ES" ? "text-[#3a2d00]" : "text-gray-400"}`}>ES</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
