"use client";
import Link from "next/link";

const subsidiaries = [
  {
    name: "Gree Iloson Merchandise",
    tag: "SUBSIDIARY 01",
    tagline: "Steel. Iron. Engineering.",
    description:
      "Nigeria's trusted source for premium iron rods, structural pipes, wire mesh and engineering solutions. Supplying the backbone of construction since 1979.",
    image: "/dual-power1.jfif",
    offerings: [
      "Iron Rods (8mm–25mm)",
      "Structural Pipes",
      "Wire & Mesh",
      "Transformer Installation",
      "Borehole Projects",
    ],
    href: "/services",
    cta: "View Steel Products",
    taglineColor: "#C49A3C",
    btnBg: "#C49A3C",
    btnText: "#ffffff",
  },
  {
    name: "Chris Ilo Merchandise",
    tag: "SUBSIDIARY 02",
    tagline: "Cement. Haulage. Nation.",
    description:
      "Authorized nationwide distributors of Dangote & BUA Cement. Backed by a robust truck haulage and leasing fleet serving all 36 states.",
    image: "/dual-power2.png",
    offerings: [
      "Dangote Cement",
      "BUA Cement",
      "Truck Haulage",
      "Nationwide Leasing",
      "Project Logistics",
    ],
    href: "/services",
    cta: "View Cement & Haulage",
    taglineColor: "#ffffff",
    btnBg: "#1A2B6B",
    btnText: "#ffffff",
  },
];

export default function DualPowerhouse() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-10">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
            <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Companies
            </span>
          </div>
          <h2
            className="text-[#1A2B6B] font-bold leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            The Dual Powerhouse
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-right hidden sm:block">
          Two specialized subsidiaries. One unified commitment to quality.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {subsidiaries.map((sub, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden group"
            style={{ minHeight: "560px" }}
          >
            {/* Background image */}
            <img
              src={sub.image}
              alt={sub.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />

            {/* Top tag */}
            <div className="absolute top-6 left-6">
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {sub.tag}
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              {/* Tagline */}
              <p
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                style={{ color: sub.taglineColor }}
              >
                {sub.tagline}
              </p>

              {/* Name */}
              <h3
                className="text-white font-bold text-2xl mb-3 leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {sub.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {sub.description}
              </p>

              {/* Offerings pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {sub.offerings.map((item, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full text-white/80"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={sub.href}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: sub.btnBg,
                  color: sub.btnText,
                }}
              >
                {sub.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
