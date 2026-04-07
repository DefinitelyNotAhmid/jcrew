import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using this website (the \"Site\"), you agree to be bound by these Terms of Use. If you do not agree to these Terms, you should not use this Site.",
      "These Terms govern your access to and use of the publicly available website operated by JCrew Environmental Solution (\"JCrew Environmental,\" \"we,\" \"our,\" or \"us\").",
    ],
  },
  {
    number: "2",
    title: "Purpose of This Website",
    content: [
      "This Site is provided for general informational purposes only.",
      "The information presented on this Site is intended to describe JCrew Environmental's organizational structure, environmental program coordination services, and operating divisions.",
      "Nothing on this Site constitutes professional, legal, financial, engineering, regulatory, or compliance advice.",
      "Use of this Site does not create a client, advisory, fiduciary, or contractual relationship between you and JCrew Environmental.",
    ],
  },
  {
    number: "3",
    title: "No Offer or Guarantee",
    content: ["Nothing on this Site constitutes:"],
    list: [
      "An offer to provide services",
      "A guarantee of funding, regulatory approval, or project outcomes",
      "A solicitation where such solicitation is prohibited by law",
    ],
    footer: "Any engagement with JCrew Environmental is subject to formal agreements executed in writing.",
  },
  {
    number: "4",
    title: "Accuracy of Information",
    content: [
      "JCrew Environmental makes reasonable efforts to ensure that information on this Site is accurate and current. However, we do not warrant that the information is complete, error-free, or up to date.",
      "Information on this Site may be modified or updated without notice.",
    ],
  },
  {
    number: "5",
    title: "Intellectual Property",
    content: [
      "All content on this Site, including text, graphics, logos, layout, and design, is the property of JCrew Environmental Solution or its licensors and is protected by applicable intellectual property laws.",
      "You may view, download, and print materials from this Site solely for non-commercial, informational purposes related to evaluating JCrew Environmental.",
      "You may not:",
    ],
    list: [
      "Reproduce",
      "Distribute",
      "Modify",
      "Or create derivative works from Site content without prior written permission from JCrew Environmental",
    ],
  },
  {
    number: "6",
    title: "Acceptable Use",
    content: ["You agree not to:"],
    list: [
      "Use this Site in violation of any applicable laws or regulations",
      "Attempt unauthorized access to the Site or its systems",
      "Introduce malicious software or interfere with Site operations",
      "Use this Site for improper or misleading solicitation",
    ],
  },
  {
    number: "7",
    title: "Third-Party Links",
    content: [
      "This Site may contain links to third-party websites for informational purposes.",
      "JCrew Environmental does not control and is not responsible for the content, security, or privacy practices of third-party sites. Links do not imply endorsement.",
    ],
  },
  {
    number: "8",
    title: "Disclaimer of Warranties",
    content: [
      "This Site is provided \"as is\" and \"as available.\"",
      "JCrew Environmental disclaims all warranties of any kind, whether express or implied, including but not limited to:",
    ],
    list: [
      "Warranties of merchantability",
      "Fitness for a particular purpose",
      "Non-infringement",
    ],
    footer: "We do not warrant that the Site will be uninterrupted or error-free.",
  },
  {
    number: "9",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, JCrew Environmental shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to:",
    ],
    list: [
      "Your access to or use of this Site",
      "Reliance on Site content",
      "Or inability to use the Site",
    ],
  },
  {
    number: "10",
    title: "Privacy",
    content: [
      "Use of this Site is also governed by our Privacy Policy, which describes how we collect and handle information.",
    ],
    policyLink: true,
  },
  {
    number: "11",
    title: "Accessibility",
    content: [
      "JCrew Environmental is committed to providing a website that is accessible to public institutions and users with disabilities.",
      "If you experience difficulty accessing content on this Site, please contact us by phone.",
    ],
  },
  {
    number: "12",
    title: "Changes to These Terms",
    content: [
      "JCrew Environmental may revise these Terms of Use at any time. Updated Terms will be posted on this page with a revised \"Last Updated\" date.",
      "Your continued use of the Site constitutes acceptance of the updated Terms.",
    ],
  },
  {
    number: "13",
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles.",
    ],
  },
];

export default function TermsOfUsePage() {
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
            Terms of Use
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
            className="flex gap-8 py-10 border-b border-gray-100"
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

              {sec.policyLink && (
                <a
                  href="/privacy-policy"
                  className="text-[#4a7229] text-[0.82rem] hover:underline w-fit"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  View Privacy Policy →
                </a>
              )}
            </div>
          </div>
        ))}

        {/* ── Section 14 — Contact ── */}
        <div className="flex gap-8 py-10">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              14
            </span>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h2
              className="text-gray-900 text-[0.88rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              Contact
            </h2>
            <p
              className="text-gray-600 text-[0.85rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              For questions regarding these Terms, please contact:
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
