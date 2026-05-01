"use client";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Iron & Steel Supply",
    desc: "Premium iron rods (8mm–25mm), structural pipes, wire mesh, fencing and binding wire for every scale of construction.",
    tag: "Gree Iloson Merch",
    accent: "#C49A3C",
    bg: "#fffbf0",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Cement Distribution",
    desc: "Authorized nationwide distributors of Dangote Cement and BUA Cement. Bulk supply for contractors and developers.",
    tag: "Chris Ilo Merch",
    accent: "#1A2B6B",
    bg: "#f2f4fb",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Truck Haulage & Leasing",
    desc: "Reliable truck haulage and leasing across all 36 states. Moving cement, steel and construction materials on time, every time.",
    tag: "Chris Ilo Merch",
    accent: "#1A2B6B",
    bg: "#f2f4fb",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Transformer Installation",
    desc: "Professional electrical engineering — transformer installation and maintenance for communities, institutions and industries.",
    tag: "Engineering",
    accent: "#C49A3C",
    bg: "#fffbf0",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Borehole Installation",
    desc: "Community and institutional borehole drilling and installation. Clean water solutions delivered with engineering precision.",
    tag: "Engineering",
    accent: "#C49A3C",
    bg: "#fffbf0",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M4 20V10l8-6 8 6v10" />
        <path d="M9 20v-6h6v6" />
        <path d="M12 4v3" />
      </svg>
    ),
    title: "Project Management",
    desc: "End-to-end construction and engineering project management — from planning to completion, we deliver on time and on budget.",
    tag: "Engineering",
    accent: "#C49A3C",
    bg: "#fffbf0",
  },
];

export default function ServicesTeaser() {
  return (
    //  <section className="bg-white w-full px-3 sm:px-4 py-6">
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              className="text-[#1A2B6B] font-bold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#1A2B6B] border border-[#1A2B6B]/20 hover:border-[#1A2B6B] px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-[#1A2B6B]/5"
          >
            View All Services <span>↗</span>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-gray-100 p-7 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ background: s.bg }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: s.accent + "15", color: s.accent }}
              >
                {s.icon}
              </div>

              {/* Tag */}
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: s.accent + "aa" }}
              >
                {s.tag}
              </span>

              {/* Title */}
              <h3
                className="font-bold text-lg leading-snug text-[#1A2B6B]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {s.desc}
              </p>

              {/* Bottom arrow */}
              <div
                className="flex items-center gap-1 text-xs font-semibold mt-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: s.accent }}
              >
                Learn more
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1A2B6B] px-6 py-3 rounded-xl"
          >
            View All Services ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
