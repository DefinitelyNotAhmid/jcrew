"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-hero-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.5) contrast(1.1) saturate(0.8)" }}
        >
          <source src="/Hero-Contact-small-1.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a06]/55 via-transparent to-[#0a1a06]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a06]/35 via-transparent to-[#0a1a06]/35" />

        {/* Content */}
        <div
          ref={heroRef}
          className="contact-hero relative z-10 flex flex-col items-center text-center px-5 max-w-3xl mx-auto gap-8"
        >
          {/* Eyebrow */}
          <p
            className="contact-hero-eyebrow text-[#9ecf62] text-[0.56rem] uppercase tracking-[0.48em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Confidential Consultation
          </p>

          {/* Headline */}
          <div className="contact-hero-headline flex flex-col items-center gap-3">
            <h1
              className="text-white text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] leading-[1.02]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Start With a
              <br />
              Confidential
              <br />
              Conversation
            </h1>
            <div className="h-px w-12 bg-[#4a7229] my-2" />
            <h2
              className="text-[#9ecf62] text-[1.4rem] sm:text-[1.8rem] md:text-[2.1rem] leading-[1.1] uppercase tracking-[0.06em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Not a Commitment
            </h2>
          </div>

          {/* Sub-copy */}
          <div className="contact-hero-sub flex flex-col gap-3 max-w-lg">
            <p
              className="text-white/75 text-[0.88rem] leading-[1.9]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              Every program begins with a conversation. No obligation. No
              sales process. Just a direct exchange about your program&apos;s
              requirements and whether our coordination model is the right fit.
            </p>
          </div>

          {/* CTA */}
          <div className="contact-hero-cta flex flex-col items-center gap-4">
            <p
              className="text-white/50 text-[0.55rem] uppercase tracking-[0.4em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Reach us directly
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white/10 border border-white/30 text-white text-[0.66rem] uppercase tracking-[0.2em] hover:bg-white/20 hover:border-white/55 transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12v10H2zM2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Write
              </a>
              <a
                href="tel:+18448783476"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#4a7c2f]/80 border border-[#4a7c2f] text-white text-[0.66rem] uppercase tracking-[0.2em] hover:bg-[#4a7c2f] hover:border-[#9ecf62]/50 transition-all duration-200"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10.5c-1 0-2-.2-2.8-.5a1 1 0 00-1 .2l-1.8 1.8A10.7 10.7 0 014 7.6L5.8 5.8a1 1 0 00.2-1C5.7 4 5.5 3 5.5 2a1 1 0 00-1-1H2a1 1 0 00-1 1 13 13 0 0013 13 1 1 0 001-1v-2.5a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Call: (844) 8-JCREW
              </a>
            </div>
          </div>

          {/* Three trust signals */}
          <div className="contact-hero-trust grid grid-cols-3 gap-px w-full max-w-lg border border-white/10 overflow-hidden mt-2">
            {[
              { label: "No Obligation" },
              { label: "Confidential" },
              { label: "Direct Response" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center py-3 px-2 bg-white/5 backdrop-blur-sm"
              >
                <p
                  className="text-white/55 text-[0.52rem] uppercase tracking-[0.22em] text-center"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
