// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// const subsidiaries = [
//   {
//     name: "Gree Iloson Merchandise",
//     number: "01",
//     tagline: "Steel. Iron. Engineering.",
//     description:
//       "Nigeria's trusted source for premium iron rods, structural pipes and engineering solutions since 1979.",
//     image: "/dual-power1.jfif",
//     offerings: [
//       "Iron rods 8-25mm",
//       "Structural pipes",
//       "Wire and mesh",
//       "Borehole projects",
//     ],
//     href: "/services",
//     cta: "View steel products",
//     badgeBg: "#C49A3C",
//     badgeText: "#1A2B6B",
//     taglineColor: "#C49A3C",
//     dotColor: "#C49A3C",
//     btnBorder: "#1A2B6B",
//     btnBg: "transparent",
//     btnText: "#1A2B6B",
//     btnHoverBg: "#1A2B6B",
//     btnHoverText: "#ffffff",
//   },
//   {
//     name: "Chris Ilo Merchandise",
//     number: "02",
//     tagline: "Cement. Haulage. Nation.",
//     description:
//       "Authorized nationwide distributor of Dangote and BUA Cement, backed by a robust haulage fleet.",
//     image: "/dual-power2.png",
//     offerings: [
//       "Dangote cement",
//       "BUA cement",
//       "Truck haulage",
//       "Project logistics",
//     ],
//     href: "/services",
//     cta: "View cement and haulage",
//     badgeBg: "#1A2B6B",
//     badgeText: "#ffffff",
//     taglineColor: "#1A2B6B",
//     dotColor: "#1A2B6B",
//     btnBorder: "#1A2B6B",
//     btnBg: "#1A2B6B",
//     btnText: "#ffffff",
//     btnHoverBg: "#0f1c47",
//     btnHoverText: "#ffffff",
//   },
// ];

// export default function DualPowerhouse() {
//   const [mounted, setMounted] = useState(false);
//   const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

//   useEffect(() => {
//     const frame = requestAnimationFrame(() => setMounted(true));
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
//       {/* Section header */}
//       <div className="max-w-6xl mx-auto mb-8 flex items-end justify-between flex-wrap gap-4">
//         <div>
//           <div className="inline-flex items-center gap-2 mb-3">
//             <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//             <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
//               Our Companies
//             </span>
//           </div>
//           <h2
//             className="text-[#1A2B6B] font-bold leading-tight"
//             style={{
//               fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//               fontFamily: "var(--font-playfair), serif",
//             }}
//           >
//             The Dual Powerhouse
//           </h2>
//         </div>
//         <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-right hidden sm:block">
//           Two specialized subsidiaries. One unified commitment to quality.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {subsidiaries.map((sub, i) => (
//           <div
//             key={i}
//             className="group"
//             style={{
//               border: "0.5px solid #E4E1D8",
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(16px)",
//               transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${
//                 i * 0.15
//               }s`,
//             }}
//           >
//             {/* Image strip */}
//             <div className="relative overflow-hidden" style={{ height: 220 }}>
//               <img
//                 src={sub.image}
//                 alt={sub.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div
//                 className="absolute top-3 left-3 flex items-center justify-center"
//                 style={{
//                   width: 36,
//                   height: 36,
//                   background: sub.badgeBg,
//                   color: sub.badgeText,
//                   fontFamily: "var(--font-playfair), serif",
//                   fontWeight: 500,
//                   fontSize: 15,
//                 }}
//               >
//                 {sub.number}
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <p
//                 className="text-xs font-semibold tracking-[0.14em] uppercase mb-2"
//                 style={{ color: sub.taglineColor }}
//               >
//                 {sub.tagline}
//               </p>
//               <h3
//                 className="font-bold text-xl mb-2 leading-tight"
//                 style={{
//                   color: "#1A2B6B",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 {sub.name}
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed mb-4">
//                 {sub.description}
//               </p>

//               {/* Offerings */}
//               <div
//                 className="grid grid-cols-2 gap-x-3 gap-y-2 pt-4 mb-5"
//                 style={{ borderTop: "0.5px solid #E4E1D8" }}
//               >
//                 {sub.offerings.map((item, j) => (
//                   <div
//                     key={j}
//                     className="flex items-center gap-2 text-xs text-gray-600"
//                   >
//                     <span
//                       className="rounded-full"
//                       style={{
//                         width: 5,
//                         height: 5,
//                         background: sub.dotColor,
//                         flexShrink: 0,
//                       }}
//                     />
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               {/* CTA */}
//               <Link
//                 href={sub.href}
//                 className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 transition-colors duration-200"
//                 style={{
//                   border: `1px solid ${sub.btnBorder}`,
//                   background: hoveredBtn === i ? sub.btnHoverBg : sub.btnBg,
//                   color: hoveredBtn === i ? sub.btnHoverText : sub.btnText,
//                 }}
//                 onMouseEnter={() => setHoveredBtn(i)}
//                 onMouseLeave={() => setHoveredBtn(null)}
//               >
//                 {sub.cta}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="14"
//                   height="14"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const subsidiaries = [
  {
    name: "Gree Iloson Merchandise",
    number: "01",
    tagline: "Steel. Iron. Engineering.",
    description:
      "Nigeria's trusted source for premium iron rods, structural pipes and engineering solutions since 1979.",
    image: "/dual-power1.jfif",
    offerings: [
      "Iron rods 8-25mm",
      "Structural pipes & wire mesh",
      "Borehole projects",
    ],
    href: "/services",
    cta: "View steel products",
    accent: "#C49A3C",
    watermarkColor: "rgba(196,154,60,0.08)",
    btnBorder: "#1A2B6B",
    btnText: "#1A2B6B",
    btnHoverBg: "#1A2B6B",
    btnHoverText: "#ffffff",
  },
  {
    name: "Chris Ilo Merchandise",
    number: "02",
    tagline: "Cement. Haulage. Nation.",
    description:
      "Authorized nationwide distributor of Dangote and BUA Cement, backed by a robust haulage fleet.",
    image: "/dual-power2.png",
    offerings: [
      "Dangote & BUA cement",
      "Truck haulage fleet",
      "Project logistics",
    ],
    href: "/services",
    cta: "View cement and haulage",
    accent: "#1A2B6B",
    watermarkColor: "rgba(26,43,107,0.05)",
    btnBorder: "#1A2B6B",
    btnText: "#ffffff",
    btnHoverBg: "#0f1c47",
    btnHoverText: "#ffffff",
    solidBtn: true,
  },
];

export default function DualPowerhouse() {
  const [mounted, setMounted] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#C49A3C" }}
          />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#C49A3C" }}
          >
            Our Companies
          </span>
        </div>
        <h2
          className="font-bold leading-tight mb-3"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontFamily: "var(--font-playfair), serif",
            color: "#1A2B6B",
          }}
        >
          The Dual Powerhouse
        </h2>
        <p className="text-sm max-w-md text-gray-500">
          Two specialized subsidiaries. One unified commitment to quality.
        </p>
      </div>

      {/* Diptych card */}
      <div
        className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden bg-white"
        style={{ border: "0.5px solid #E4E1D8" }}
      >
        {/* center spine — desktop/tablet only, mobile stacks instead */}
        <div
          className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2"
          style={{ background: "#E4E1D8" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {subsidiaries.map((sub, i) => (
            <div
              key={i}
              className={`relative p-6 sm:p-8 md:p-12 overflow-hidden ${
                i === 0 ? "border-b md:border-b-0" : ""
              }`}
              style={{
                borderColor: "#E4E1D8",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
            >
              {/* watermark number — scales down on mobile so it doesn't dominate/crowd the text */}
              <span
                className="absolute top-1 right-3 sm:top-2 sm:right-6 leading-none select-none pointer-events-none text-[70px] sm:text-[110px] md:text-[160px]"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  color: sub.watermarkColor,
                }}
              >
                {sub.number}
              </span>

              {/* image — height scales down on mobile instead of staying fixed at 340px */}
              <div className="relative w-full rounded-xl overflow-hidden mb-6 sm:mb-7 h-[200px] sm:h-[260px] md:h-[340px]">
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-2"
                style={{ color: sub.accent }}
              >
                {sub.tagline}
              </p>
              <h3
                className="font-bold text-xl sm:text-2xl mb-3 leading-tight"
                style={{
                  color: "#1A2B6B",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {sub.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6 max-w-sm text-gray-500">
                {sub.description}
              </p>

              <div className="flex flex-col gap-2 mb-7">
                {sub.offerings.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span
                      className="rounded-full flex-shrink-0"
                      style={{ width: 5, height: 5, background: sub.accent }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA — full width on mobile so long labels never overflow or feel cramped */}
              <Link
                href={sub.href}
                className="flex sm:inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-full transition-colors duration-200 text-center"
                style={{
                  border: `1.5px solid ${sub.btnBorder}`,
                  background: sub.solidBtn
                    ? hoveredBtn === i
                      ? sub.btnHoverBg
                      : sub.btnBorder
                    : hoveredBtn === i
                      ? sub.btnHoverBg
                      : "transparent",
                  color: sub.solidBtn
                    ? "#ffffff"
                    : hoveredBtn === i
                      ? sub.btnHoverText
                      : sub.btnText,
                }}
                onMouseEnter={() => setHoveredBtn(i)}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                {sub.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
