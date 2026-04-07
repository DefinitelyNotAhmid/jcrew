import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    number: "1",
    title: "Introduction",
    content: [
      'JCrew Environmental Solution ("JCrew Environmental," "we," "our," or "us") respects the privacy of visitors to our website.',
      "This Privacy Policy describes how we collect, use, and protect information submitted through our website and related communications.",
      "This website is intended for use by public institutions, regulated entities, and their representatives.",
    ],
  },
  {
    number: "2",
    title: "Information We Collect",
    content: [
      "We collect information only when voluntarily provided by you through this website.",
      "This may include:",
    ],
    list: [
      "Name",
      "Organization name",
      "Title or role",
      "Email address",
      "Phone number",
      "Organization type",
      "Area of inquiry",
      "Any additional information you choose to provide in message fields",
    ],
    footer: "We do not collect sensitive personal data through this website.",
  },
  {
    number: "3",
    title: "How We Use Information",
    content: ["Information submitted through this website is used solely to:"],
    list: [
      "Respond to inquiries",
      "Determine whether an initial discussion is appropriate",
      "Provide requested information",
      "Communicate regarding environmental program coordination services",
    ],
    footer: "Information is not used for consumer marketing or automated advertising.",
  },
  {
    number: "4",
    title: "No Sale or Sharing of Personal Information",
    content: [
      "JCrew Environmental does not sell, rent, or trade personal information.",
      "Information may be shared only:",
    ],
    list: [
      "Internally among authorized JCrew Environmental personnel",
      "With contracted service providers supporting website operations or communications",
      "When required by law",
    ],
    footer: "All such sharing is conducted with appropriate confidentiality protections.",
  },
  {
    number: "5",
    title: "Data Security",
    content: [
      "JCrew Environmental implements reasonable administrative, technical, and physical safeguards designed to protect information submitted through this website.",
      "However, no internet-based system can be guaranteed to be completely secure.",
    ],
  },
  {
    number: "6",
    title: "Cookies and Analytics",
    content: ["This website may use limited cookies or analytics tools solely to:"],
    list: [
      "Understand website usage patterns",
      "Improve site functionality",
      "Maintain performance and security",
    ],
    footer: "We do not use tracking for advertising, behavioral profiling, or commercial targeting.",
  },
  {
    number: "7",
    title: "External Links",
    content: [
      "This website may contain links to external sites.",
      "JCrew Environmental is not responsible for the privacy practices or content of third-party websites. We encourage visitors to review the privacy policies of any external sites they access.",
    ],
  },
  {
    number: "8",
    title: "Retention of Information",
    content: ["Information submitted through this website is retained only as long as necessary to:"],
    list: [
      "Respond to inquiries",
      "Meet legal or regulatory requirements",
      "Support internal recordkeeping",
    ],
    footer: "Information is not retained longer than necessary for these purposes.",
  },
  {
    number: "9",
    title: "Access and Correction",
    content: [
      "If you believe that information you have submitted is incorrect or wish to request its correction or deletion, you may contact us using the information below.",
      "Requests will be handled consistent with applicable laws and operational requirements.",
    ],
  },
  {
    number: "10",
    title: "Children's Privacy",
    content: [
      "This website is not directed to children under the age of 13.",
      "We do not knowingly collect information from children.",
    ],
  },
  {
    number: "11",
    title: "Accessibility",
    content: [
      "JCrew Environmental is committed to ensuring that privacy-related information is accessible to users with disabilities.",
      "If you require assistance accessing this Privacy Policy, please contact us by phone.",
    ],
  },
  {
    number: "12",
    title: "Changes to This Policy",
    content: [
      "JCrew Environmental may update this Privacy Policy from time to time. Updates will be posted on this page with a revised \"Last Updated\" date.",
      "Your continued use of this website constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ── Hero bar ── */}
      <div className="bg-[#0a1a06] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <p
            className="text-[#9ecf62] text-[0.62rem] uppercase tracking-[0.36em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Legal & Compliance
          </p>
          <h1
            className="text-white text-[2rem] md:text-[2.6rem] leading-[1.1]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
          >
            Privacy Policy
          </h1>
          <div className="h-px w-10 bg-[#4a7229]" />
          <div className="flex flex-wrap items-center gap-6 mt-1">
            <p
              className="text-gray-400 text-[0.78rem]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              JCrew Environmental Solution
            </p>
            <span className="text-white/15 text-xs">|</span>
            <p
              className="text-gray-500 text-[0.75rem]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Last Updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-0">

        {SECTIONS.map((sec) => (
          <div
            key={sec.number}
            className="flex gap-8 py-10 border-b border-gray-100 last:border-b-0"
          >
            {/* Section number */}
            <div className="shrink-0 w-10 pt-0.5">
              <span
                className="text-[#4a7229]/40 text-[0.75rem]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                {String(sec.number).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 flex-1">
              <h2
                className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                {sec.title}
              </h2>

              {sec.content.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 text-[0.85rem] leading-[1.85]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {para}
                </p>
              ))}

              {sec.list && (
                <ul className="flex flex-col gap-2 pl-1">
                  {sec.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#4a7229] shrink-0" />
                      <p
                        className="text-gray-600 text-[0.85rem] leading-[1.75]"
                        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {sec.footer && (
                <p
                  className="text-gray-500 text-[0.82rem] leading-[1.8] italic"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {sec.footer}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* ── Section 13 — Contact ── */}
        <div className="flex gap-8 py-10">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              13
            </span>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Contact Information
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              For questions regarding this Privacy Policy or the handling of information submitted through this website, please contact:
            </p>
            <div className="border border-[#4a7229]/20 rounded-sm p-6 flex flex-col gap-3 bg-[#f7f8f6]">
              <p
                className="text-gray-800 text-[0.82rem] uppercase tracking-[0.08em]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                JCrew Environmental Solution
              </p>
              <div className="h-px w-8 bg-[#4a7229]/30" />
              <p
                className="text-gray-500 text-[0.82rem] leading-[1.75]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                West Hazleton, Pennsylvania
              </p>
              <a
                href="tel:+18448787346"
                className="flex items-center gap-2.5 text-[#4a7229] text-[0.82rem] hover:text-[#5a8c32] transition-colors duration-200 w-fit"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (844) 8-JCREW
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
