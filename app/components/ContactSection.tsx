"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    organization: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#f7f8f6] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header — centered ── */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Get in Touch
          </p>
          <h2
            className="text-3xl md:text-[2.1rem] text-gray-900 leading-[1.15]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
          >
            Start With a Confidential
            <br />
            Conversation — Not a Commitment
          </h2>
          <div className="h-px w-12 bg-[#4a7c2f]" />
        </div>

        {/* ── Two-column body ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left — intro copy ── */}
          <div className="flex flex-col gap-7">
            <p
              className="text-[#4a7c2f] text-[0.7rem] uppercase tracking-[0.26em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              A Peer-to-Peer Exchange
            </p>

            <p
              className="text-gray-700 text-[0.95rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              An initial discussion with JCrew Environmental Solution is an exchange of
              information — not a sales engagement. We will review your program
              context, describe how our coordination model works, and help you
              determine whether an independent assessment is appropriate for
              your situation.
            </p>

            <p
              className="text-gray-500 text-[0.88rem] leading-[1.8]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
              No obligation is created at any stage. All information shared is
              treated as strictly confidential and used solely to evaluate
              whether an initial program review is warranted.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gray-200" />

            {/* Phone CTA */}
            <div className="flex flex-col gap-2">
              <p
                className="text-gray-400 text-[0.65rem] uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Prefer to speak directly
              </p>
              <a
                href="tel:+18448787346"
                className="inline-flex items-center gap-3 text-[#1a3d10] hover:text-[#4a7c2f] transition-colors duration-200"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "1.05rem" }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (844) 8-JCREW
              </a>
            </div>

            {/* Confidentiality notice */}
            <div className="flex gap-3 items-start p-4 border border-gray-200 rounded-sm bg-white">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <p
                className="text-gray-500 text-[0.72rem] leading-[1.7]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Submitting this form does not create any obligation. Information
                provided is treated as confidential and used solely to determine
                whether an initial discussion is appropriate.
              </p>
            </div>
          </div>

          {/* ── Right — inquiry form ── */}
          <div>
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center text-center gap-6 py-16 px-8 bg-white border border-gray-200 rounded-sm shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#eef2ea] text-[#4a7c2f]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-gray-900 text-[1.1rem] mb-3"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
                  >
                    Your Inquiry Has Been Received
                  </h3>
                  <p
                    className="text-gray-500 text-[0.85rem] leading-[1.8] max-w-sm"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    A member of our program coordination team will review your
                    submission and contact you within two business days. All
                    information provided is treated as strictly confidential.
                  </p>
                </div>
                <p
                  className="text-gray-400 text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  Reference: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} · JCrew Environmental Solution Program Intake
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white border border-gray-200 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.04)] p-8"
              >
                {/* Secure portal label */}
                <div className="flex items-center gap-2 pb-1 border-b border-gray-100 mb-2">
                  <svg className="w-3.5 h-3.5 text-[#4a7c2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <p
                    className="text-gray-400 text-[0.6rem] uppercase tracking-[0.22em]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                  >
                    Secure Inquiry Portal
                  </p>
                </div>

                {/* Row 1: Organization + Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Organization"
                    required
                    className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                </div>

                {/* Row 3: Subject */}
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />

                {/* Row 4: Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-2.5 text-[0.82rem] text-gray-800 bg-[#fafafa] border border-gray-200 rounded-sm focus:outline-none focus:border-[#4a7c2f] focus:ring-1 focus:ring-[#4a7c2f]/30 transition-colors duration-200 placeholder:text-gray-400 resize-none leading-[1.7]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1a3d10] text-white text-[0.72rem] uppercase tracking-[0.16em] hover:bg-[#4a7c2f] transition-colors duration-300 rounded-sm mt-1"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                >
                  Submit
                </button>

                {/* Micro-disclaimer */}
                <p
                  className="text-gray-400 text-[0.65rem] leading-[1.65] text-center pt-1"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  No commitment is created by submitting this form. All submissions are reviewed by a senior program coordinator.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
