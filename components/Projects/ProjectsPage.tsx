"use client";
import { useState } from "react";
import Link from "next/link";

const filters = [
  "All",
  "Steel Supply",
  "Cement",
  "Haulage",
  "Borehole",
  "Transformer",
];

const projects = [
  {
    title: "Structural Steel Supply",
    category: "Steel Supply",
    year: "2023",
    image: "/steel-supply.jfif", // 📌 add image later
  },
  {
    title: "Cement Bulk Supply",
    category: "Cement",
    year: "2023",
    image: "/Cement Bulk Supply.jfif", // 📌 add image later
  },
  {
    title: "Transformer Installation",
    category: "Transformer",
    year: "2022",
    image: "/Transformer Installation.jfif", // 📌 add image later
  },
  {
    title: "Iron Rod Supply",
    category: "Steel Supply",
    year: "2023",
    image: "/Iron Rod Supply.jfif", // 📌 add image later
  },
  {
    title: "Community Borehole Project",
    category: "Borehole",
    year: "2022",
    image: "/Community Borehole Project.jfif", // 📌 add image later
  },
  {
    title: "Nationwide Cement Distribution",
    category: "Cement",
    year: "2023",
    image: "/Nationwide Cement Distribution.jfif", // 📌 add image later
  },
  {
    title: "Truck Haulage & Logistics",
    category: "Haulage",
    year: "2022",
    image: "/Truck Haulage & Logistics.jfif", // 📌 add image later
  },
  {
    title: "Borehole Drilling & Installation",
    category: "Borehole",
    year: "2023",
    image: "/Borehole Drilling & Installation.jfif", // 📌 add image later
  },
  {
    title: "Steel & Pipe Supply",
    category: "Steel Supply",
    year: "2022",
    image: "/Steel & Pipe Supply.jfif",
  },
  {
    title: "Power Transformer Upgrade",
    category: "Transformer",
    year: "2021",
    image: "/Power Transformer Upgrade.jfif", // 📌 add image later
  },
  {
    title: "Cement Supply — Residential Estate",
    category: "Cement",
    year: "2021",
    image: "/Cement Supply — Residential Estate.jfif", // 📌 add image later
  },
  {
    title: "Fleet Haulage — Ondo State",
    category: "Haulage",
    year: "2021",
    image: "/fleet-haulage.jfif", // 📌 add image later
  },
];

const categoryColors: Record<string, string> = {
  "Steel Supply": "#C49A3C",
  Cement: "#1A2B6B",
  Haulage: "#1A2B6B",
  Borehole: "#C49A3C",
  Transformer: "#C49A3C",
};

export default function Page() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-white w-full px-5 sm:px-8 lg:px-14 pt-16 pb-4">
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
                  Our Portfolio
                </span>
              </div>
              <h1
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Our Work
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mt-3">
                Explore our diverse portfolio of successfully completed projects
                — showcasing our expertise across steel, cement, haulage and
                engineering.
              </p>
            </div>

            <div className="flex items-center gap-8 sm:pb-2">
              {[
                { value: "500+", label: "Projects" },
                { value: "45+", label: "Years" },
              ].map((s, i) => (
                <div key={i} className="text-right">
                  <p
                    className="text-[#1A2B6B] font-bold text-3xl leading-none"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 h-px bg-gray-100" />
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────── */}
      <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="transition-all duration-200 text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2"
              style={
                active === f
                  ? { background: "#1A2B6B", color: "#fff" }
                  : { background: "#f3f4f6", color: "#6b7280" }
              }
            >
              {active === f && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A3C] flex-shrink-0" />
              )}
              {f}
            </button>
          ))}
          <span className="ml-auto text-gray-400 text-xs tracking-wide">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────── */}
      <section className="bg-white w-full px-5 sm:px-8 lg:px-14 pb-16">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                No projects in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{ height: "300px" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Category pill */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: categoryColors[p.category] || "#1A2B6B",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="text-white/40 text-xs font-medium">
                      {p.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-white font-bold text-base leading-snug"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {p.title}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-[#1A2B6B] overflow-hidden px-8 sm:px-16 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-14 left-1/3 w-64 h-64 rounded-full bg-[#C49A3C]/10 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Start a Project
              </p>
              <h3
                className="text-white font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Ready to Work
                <br />
                With Us?
              </h3>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#C49A3C] hover:bg-[#b08a32] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Quote ↗
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
