"use client";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Iron & Steel Supply",
    desc: "Premium iron rods (8mm–25mm), structural pipes, wire mesh, fencing and binding wire for every scale of construction.",
    tag: "Gree Iloson Merch",
    accent: "#C49A3C",
    image: "/iron-rod-25mm-specification.jpg",
  },
  {
    number: "02",
    title: "Cement Distribution",
    desc: "Authorized nationwide distributors of Dangote Cement and BUA Cement. Bulk supply for contractors and developers.",
    tag: "Chris Ilo Merch",
    accent: "#1A2B6B",
    image: "/Dangote-Cement3.jpg",
  },
  {
    number: "03",
    title: "Truck Haulage & Leasing",
    desc: "Reliable truck haulage and leasing across all 36 states. Moving materials on time, every time.",
    tag: "Chris Ilo Merch",
    accent: "#1A2B6B",
    image: "/Truck Haulage & Leasing.jfif",
  },
  {
    number: "04",
    title: "Transformer Installation",
    desc: "Professional electrical engineering — transformer installation and maintenance for communities, institutions and industries.",
    tag: "Engineering",
    accent: "#C49A3C",
    image: "/Essential-Guide-to-Transformer-Repair-and-Maintenance.jpg",
  },
  {
    number: "05",
    title: "Borehole Installation",
    desc: "Community and institutional borehole drilling. Clean water solutions delivered with engineering precision.",
    tag: "Engineering",
    accent: "#C49A3C",
    image: "/borehole-drilling-services-in-kenya.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    desc: "End-to-end construction and engineering project management — from planning to completion, on time and on budget.",
    tag: "Engineering",
    accent: "#1A2B6B",
    image: "/project-management.jfif",
  },
];

export default function ServicesTeaser() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "right" ? 380 : -380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white w-full py-16 px-5 sm:px-8 lg:px-14">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              className="text-[#1A2B6B] font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Our Services
            </h2>
          </div>

          {/* Arrow controls + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#1A2B6B] hover:bg-[#1A2B6B] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#1A2B6B] hover:bg-[#1A2B6B] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1A2B6B] hover:bg-[#152259] px-5 py-2.5 rounded-xl transition-all duration-200 ml-2"
            >
              View All <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
              style={{ width: "300px", height: "420px" }}
            >
              {/* Background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Big faded number — top right */}
              <div
                className="absolute top-4 right-5 font-bold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "6rem",
                  fontFamily: "var(--font-playfair), serif",
                  color: "rgba(255,255,255,0.08)",
                }}
              >
                {s.number}
              </div>

              {/* Tag — top left */}
              <div className="absolute top-5 left-5">
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
                  style={{ background: s.accent }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{ color: s.accent }}
                >
                  {s.number}
                </p>
                <h3
                  className="text-white font-bold text-xl leading-snug mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {s.desc}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: s.accent }}
                >
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="w-full text-center text-sm font-semibold text-white bg-[#1A2B6B] px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2"
          >
            View All Services
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
    </section>
  );
}
