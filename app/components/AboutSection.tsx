import Image from "next/image";

const PILLARS = [
  {
    title: "Program Architecture",
    body: "We design and coordinate full environmental response programs — not isolated services — ensuring continuity, sequencing, and accountability across multi-year efforts.",
  },
  {
    title: "Regulatory Range",
    body: "Our operating model is built for simultaneous compliance across federal, state, and local frameworks, reducing execution risk on complex public-sector timelines.",
  },
  {
    title: "Defensible Outcomes",
    body: "Every program we coordinate produces documented, auditable results — structured to withstand regulatory scrutiny and community accountability.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <div className="flex flex-col gap-8">

          {/* Eyebrow */}
          <p
            className="text-[#4a7c2f] text-[1.00rem] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 800 }}
          >
            Environmental Company
          </p>

          {/* Headline */}
          <div className="flex flex-col gap-2">
            <h2
              className="text-3xl md:text-4xl text-gray-900 leading-[1.15]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600 }}
            >
              Structured to Manage
              <br />
              What Others Fragment
            </h2>
            <p
              className="text-sm text-[#4a7c2f] mt-1"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Built for Complex Problems
            </p>
          </div>

          {/* Intro paragraph */}
          <p
            className="text-gray-600 text-[0.95rem] leading-[1.8] max-w-lg"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
          >
            JCrew Environmental Solution operates across long timelines, multiple regulatory
            frameworks, and complex public accountability environments. Rather
            than selling products or isolated services, we organize and
            coordinate full response programs — ensuring accountability,
            continuity, and defensible outcomes across multi-year efforts.
          </p>

          {/* Value pillars */}
          <div className="flex flex-col gap-6 pt-2">
            {PILLARS.map((pillar, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 w-1 h-full min-h-[2.5rem] rounded-full bg-[#4a7c2f] shrink-0" />
                <div>
                  <p
                    className="text-gray-900 text-sm mb-1"
                    style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                  >
                    {pillar.title}
                  </p>
                  <p
                    className="text-gray-500 text-sm leading-[1.75]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/pexels-alexasfotos-10760649cr-768x768.jpg"
            alt="Environmental program coordination — complex systems brought together"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle green tint overlay for brand alignment */}
          <div className="absolute inset-0 bg-[#1e4a10]/10" />
        </div>

      </div>
    </section>
  );
}
