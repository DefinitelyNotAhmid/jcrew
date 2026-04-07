import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FEATURES = [
  "Semantic HTML structure for screen reader compatibility",
  "Keyboard navigability for core site functions",
  "Readable font sizes and contrast ratios",
  "Descriptive link text",
  "Accessible form labels and instructions",
  "Responsive design for use across devices",
  "Avoidance of content that flashes or causes seizures",
  "Limited use of motion and animation",
];

const IMPROVEMENTS = [
  "Improve compatibility with assistive technologies",
  "Refine navigation and form usability",
  "Address any accessibility gaps identified",
];

const STANDARDS = [
  "The Web Content Accessibility Guidelines (WCAG) 2.1 Level AA",
  "Relevant provisions of the Americans with Disabilities Act (ADA)",
];

export default function AccessibilityPage() {
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
            Accessibility Statement
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

        {/* Intro */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10" />
          <p
            className="text-gray-600 text-[0.88rem] leading-[1.9]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            JCrew Environmental Solution is committed to ensuring digital accessibility for all users, including individuals with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              01
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Our Commitment
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              JCrew Environmental strives to ensure that our website is accessible to public institutions, regulated entities, and members of the public regardless of ability.
            </p>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              We aim to conform to applicable accessibility standards, including:
            </p>
            <ul className="flex flex-col gap-2 pl-1">
              {STANDARDS.map((item, i) => (
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
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              02
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Accessibility Features
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Our website incorporates the following accessibility practices where feasible:
            </p>
            <ul className="flex flex-col gap-2 pl-1">
              {FEATURES.map((item, i) => (
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
          </div>
        </div>

        {/* Limitations */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              03
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Limitations and Ongoing Improvements
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              While we strive to ensure that our website is accessible, some content may not yet fully meet all accessibility standards.
            </p>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              JCrew Environmental is actively working to:
            </p>
            <ul className="flex flex-col gap-2 pl-1">
              {IMPROVEMENTS.map((item, i) => (
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
          </div>
        </div>

        {/* Feedback */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              04
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Feedback and Assistance
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              If you encounter any accessibility barriers on our website or need assistance accessing any content, we encourage you to contact us.
            </p>
            <p
              className="text-gray-500 text-[0.82rem] leading-[1.8] italic"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              We are committed to responding promptly and addressing accessibility concerns in a reasonable timeframe.
            </p>
          </div>
        </div>

        {/* Formal Requests */}
        <div className="flex gap-8 py-10 border-b border-gray-100">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              05
            </span>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Formal Requests
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              If you require materials in an alternative format or need assistance to complete any process related to this website, please contact us by phone.
            </p>
            <p
              className="text-gray-500 text-[0.82rem] leading-[1.8] italic"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              We will work with you to provide information in an accessible manner consistent with applicable laws and operational constraints.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex gap-8 py-10">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              06
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
              For accessibility-related questions or requests, please contact:
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
