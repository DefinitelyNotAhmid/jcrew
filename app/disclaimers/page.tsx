import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SECTIONS = [
  {
    number: "1",
    title: "General Disclaimer",
    content: [
      "The information contained on this website is provided for general informational purposes only.",
      "While JCrew Environmental Solution (\"JCrew Environmental\") makes reasonable efforts to ensure the accuracy of the information presented, no representations or warranties of any kind, express or implied, are made regarding the completeness, accuracy, reliability, suitability, or availability of the website or its content.",
      "Any reliance you place on such information is strictly at your own risk.",
    ],
  },
  {
    number: "2",
    title: "No Professional Advice",
    content: ["Nothing on this website constitutes or should be construed as:"],
    list: [
      "Legal advice",
      "Engineering advice",
      "Regulatory advice",
      "Environmental compliance advice",
      "Financial or funding advice",
      "Or professional consulting services",
    ],
    footer: "Information on this website does not replace consultation with qualified professionals or formal engagement with JCrew Environmental under written agreement.",
  },
  {
    number: "3",
    title: "No Guarantee of Outcomes",
    content: ["JCrew Environmental does not guarantee:"],
    list: [
      "Regulatory approvals",
      "Funding awards",
      "Settlement eligibility",
      "Remediation success",
      "Project completion timelines",
      "Or environmental outcomes",
    ],
    footer: "All projects, funding mechanisms, and regulatory pathways are subject to variables beyond JCrew Environmental's control.",
  },
  {
    number: "4",
    title: "Funding & Settlement Disclaimer",
    content: [
      "References on this website to funding, grants, settlements, or reimbursement pathways are provided for general informational purposes only.",
      "JCrew Environmental does not guarantee the availability, eligibility, or approval of any funding or settlement-based financial support.",
      "All funding is subject to:",
    ],
    list: [
      "Regulatory requirements",
      "Eligibility criteria",
      "Third-party approvals",
      "And applicable laws and program rules",
    ],
  },
  {
    number: "5",
    title: "PFAS and Environmental Content Disclaimer",
    content: [
      "Information regarding PFAS, environmental contamination, remediation, and regulatory obligations is provided at a general level and may not reflect all local, state, or federal requirements applicable to a specific site or jurisdiction.",
      "Users are responsible for ensuring compliance with all applicable laws and regulations.",
    ],
  },
  {
    number: "6",
    title: "Clean Energy Disclaimer",
    content: [
      "Descriptions of clean energy technologies, waste-to-energy systems, or infrastructure models are provided for general informational purposes only.",
      "They do not constitute technical specifications, performance guarantees, or investment advice.",
    ],
  },
  {
    number: "7",
    title: "Third-Party Information",
    content: [
      "This website may reference or link to information from third parties for contextual purposes.",
      "JCrew Environmental does not endorse, control, or assume responsibility for the accuracy or reliability of third-party information.",
    ],
  },
  {
    number: "8",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, JCrew Environmental shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to the use of this website or reliance on its content.",
    ],
  },
  {
    number: "9",
    title: "No Client Relationship",
    content: [
      "Use of this website or submission of information through its forms does not create a client, advisory, fiduciary, or contractual relationship between you and JCrew Environmental.",
      "Any formal engagement must be established through a written agreement executed by both parties.",
    ],
  },
  {
    number: "10",
    title: "Updates to Disclaimers",
    content: [
      "JCrew Environmental reserves the right to modify or update these Disclaimers at any time.",
      "Revisions will be posted on this page with an updated \"Last Updated\" date.",
    ],
  },
];

export default function DisclaimersPage() {
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
            Disclaimers
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
            <div className="shrink-0 w-10 pt-0.5">
              <span
                className="text-[#4a7229]/40 text-[0.75rem]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
              >
                {String(sec.number).padStart(2, "0")}
              </span>
            </div>
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

        {/* ── Contact ── */}
        <div className="flex gap-8 py-10">
          <div className="shrink-0 w-10 pt-0.5">
            <span
              className="text-[#4a7229]/40 text-[0.75rem]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700 }}
            >
              11
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
              For questions regarding these Disclaimers, please contact:
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
