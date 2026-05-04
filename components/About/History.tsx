"use client";

const timeline = [
  {
    year: "1979",
    title: "The Beginning",
    desc: "Gree Iloson Merchandise Nigeria Limited, formally known as Gregory Iloehika and Sons, was established in Akure, Ondo State.",
    accent: "#C49A3C",
  },
  {
    year: "1991",
    title: "Official Incorporation",
    desc: "The company was formally incorporated under the Company and Allied Matters Act of the Federal Republic of Nigeria.",
    accent: "#1A2B6B",
  },
  {
    year: "Expansion",
    title: "Growing Beyond Steel",
    desc: "Originally specializing in iron and steel distribution, the company expanded into transformer installation, community borehole projects, truck leasing and cement distribution nationwide.",
    accent: "#C49A3C",
  },
  {
    year: "Today",
    title: "Chris Ilo Merchandise is Born",
    desc: "The expansion of the business birthed Chris Ilo Merchandise Nigeria Limited as a subsidiary company. Both companies are managed by dynamic professionals driven by commitment to quality goods, services and the satisfaction of every client.",
    accent: "#1A2B6B",
  },
];

export default function History() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>
            <h2
              className="text-[#1A2B6B] font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              A Legacy Built <br />
              Over Decades.
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed lg:text-right">
            From a small iron and steel distribution business in Akure to a
            nationwide construction supply and engineering group — here is how
            it all happened.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      {/* Year badge */}
                      <div
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-5"
                        style={{ background: item.accent }}
                      >
                        {item.year}
                      </div>

                      <h3
                        className="text-[#1A2B6B] font-bold text-xl mb-3"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Bottom accent */}
                      <div
                        className="w-10 h-1 rounded-full mt-6"
                        style={{ background: item.accent }}
                      />
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-md items-center justify-center z-10"
                    style={{ background: item.accent }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Empty side */}
                  <div
                    className={`hidden lg:block ${isLeft ? "lg:order-2" : "lg:order-1"}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
