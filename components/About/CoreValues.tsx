"use client";

const values = [
  {
    number: "01",
    title: "Trust",
    desc: "We believe trust is the foundation of every lasting relationship. It is the key to persuading our customers to choose our quality products and services — a win-win for all.",
    icon: (
      <svg
        width="24"
        height="24"
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
    accent: "#C49A3C",
    bg: "#fffbf0",
    border: "#f0e0b0",
  },
  {
    number: "02",
    title: "Excellence",
    desc: "Our obsession for excellence drives everything we do — from the quality of products we supply to the precision of our engineering services on every project.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: "#1A2B6B",
    bg: "#f2f4fb",
    border: "#c7cee8",
  },
  {
    number: "03",
    title: "Quality",
    desc: "We ensure every product we supply gives our customers the kind of performance and productivity that lets them realize the full value of their investment.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    accent: "#C49A3C",
    bg: "#fffbf0",
    border: "#f0e0b0",
  },
  {
    number: "04",
    title: "Client First",
    desc: "Our commitment firstly is to the customers we serve — we are in business for them. Our relationship with customers does not end with a sale but a journey that starts with it.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: "#1A2B6B",
    bg: "#f2f4fb",
    border: "#c7cee8",
  },
  {
    number: "05",
    title: "Purpose Beyond Profit",
    desc: "A business is not successful if it is only committed to profit. It must create prosperity and well-being for all those connected with it — directly or indirectly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    accent: "#C49A3C",
    bg: "#fffbf0",
    border: "#f0e0b0",
  },
  {
    number: "06",
    title: "Impact",
    desc: "Every project we undertake, every product we supply, and every community we serve is a reflection of our commitment to creating lasting positive impact across Nigeria.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: "#1A2B6B",
    bg: "#f2f4fb",
    border: "#c7cee8",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                What Drives Us
              </span>
            </div>
            <h2
              className="text-[#1A2B6B] font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Our Core Values
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed lg:text-right">
            These are the principles that guide every decision, every delivery
            and every relationship we build at Gree Iloson Group of Companies.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="group rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: v.bg, border: `1px solid ${v.border}` }}
            >
              {/* Top row — icon + number */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: v.accent + "20", color: v.accent }}
                >
                  {v.icon}
                </div>
                <span
                  className="text-3xl font-bold opacity-10"
                  style={{
                    color: v.accent,
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {v.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg text-[#1A2B6B]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {v.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {v.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="w-10 h-1 rounded-full mt-2 transition-all duration-300 group-hover:w-16"
                style={{ background: v.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
