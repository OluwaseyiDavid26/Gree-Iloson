// "use client";
// import { useState } from "react";

// const testimonials = [
//   {
//     quote:
//       "Gree Iloson has been our go-to supplier for iron rods and structural pipes for years. Their products are consistently high quality and their delivery is always on time. They are a company you can truly rely on.",
//     name: "Engr. Adebayo Okonkwo",
//     title: "Project Manager",
//     company: "Immobilaire Construction",
//     initial: "AO",
//     color: "#C49A3C",
//   },
//   {
//     quote:
//       "We sourced all the cement for our university expansion project through Chris Ilo Merchandise. The supply was seamless, the pricing was fair and the team was professional from start to finish. Highly recommended.",
//     name: "Prof. Samuel Adewale",
//     title: "Director of Works",
//     company: "Elizade University",
//     initial: "SA",
//     color: "#1A2B6B",
//   },
//   {
//     quote:
//       "Their truck haulage service is exceptional. We needed bulk cement transported across three states on a tight deadline and GIGC delivered without a single delay. They are reliable partners for any serious construction project.",
//     name: "Arc. Funke Adesanya",
//     title: "Principal Architect",
//     company: "Stone Work Nig. Ltd",
//     initial: "FA",
//     color: "#C49A3C",
//   },
//   {
//     quote:
//       "The transformer installation carried out by Gree Iloson's engineering team was world-class. They were thorough, safety-conscious and completed the work ahead of schedule. Our facility has had zero power issues since.",
//     name: "Engr. Chuka Nwosu",
//     title: "Facilities Manager",
//     company: "Royal Birds Hotel Akure",
//     initial: "CN",
//     color: "#1A2B6B",
//   },
//   {
//     quote:
//       "GIGC supplied all our iron rods and fencing wire for the federal road project. Their understanding of construction requirements and their attention to specifications sets them apart from every other supplier we have worked with.",
//     name: "Engr. Tunde Fashola",
//     title: "Senior Engineer",
//     company: "Federal Ministry of Works",
//     initial: "TF",
//     color: "#C49A3C",
//   },
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);

//   const prev = () =>
//     setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
//   const next = () =>
//     setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

//   const t = testimonials[active];

//   return (
//     <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Full card */}
//         <div className="relative rounded-3xl overflow-hidden bg-[#1A2B6B]">
//           {/* Decorative circles */}
//           <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
//           <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-[#C49A3C]/10 pointer-events-none" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
//             {/* Left — big label col */}
//             <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-6">
//                   <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//                   <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
//                     Testimonials
//                   </span>
//                 </div>
//                 <h2
//                   className="text-white font-bold leading-tight mb-4"
//                   style={{
//                     fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
//                     fontFamily: "var(--font-playfair), serif",
//                   }}
//                 >
//                   What Our <br />
//                   Clients Say.
//                 </h2>
//                 <p className="text-white/40 text-sm leading-relaxed">
//                   Trusted by government bodies, universities, hotels and
//                   construction firms across Nigeria.
//                 </p>
//               </div>

//               {/* Nav + counter */}
//               <div className="flex items-center gap-4 mt-10 lg:mt-0">
//                 <button
//                   onClick={prev}
//                   className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C49A3C] hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="15 18 9 12 15 6" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={next}
//                   className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C49A3C] hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="9 18 15 12 9 6" />
//                   </svg>
//                 </button>
//                 <span className="text-white/30 text-sm font-mono ml-2">
//                   0{active + 1} / 0{testimonials.length}
//                 </span>
//               </div>
//             </div>

//             {/* Right — quote col */}
//             <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-between gap-10">
//               {/* Big quote mark */}
//               <span
//                 className="text-white/8 select-none leading-none"
//                 style={{
//                   fontSize: "7rem",
//                   fontFamily: "serif",
//                   lineHeight: 0.8,
//                 }}
//               >
//                 &ldquo;
//               </span>

//               {/* Quote text */}
//               <blockquote
//                 className="text-white font-medium leading-relaxed -mt-6"
//                 style={{
//                   fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 &ldquo;{t.quote}&rdquo;
//               </blockquote>

//               {/* Author */}
//               <div className="flex items-center gap-4">
//                 <div
//                   className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
//                   style={{ background: t.color }}
//                 >
//                   {t.initial}
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-sm">{t.name}</p>
//                   <p className="text-white/40 text-xs mt-0.5">
//                     {t.title} · {t.company}
//                   </p>
//                 </div>

//                 {/* Dots */}
//                 <div className="flex items-center gap-2 ml-auto">
//                   {testimonials.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setActive(i)}
//                       className="transition-all duration-300 rounded-full"
//                       style={{
//                         width: i === active ? "20px" : "6px",
//                         height: "6px",
//                         background:
//                           i === active ? "#C49A3C" : "rgba(255,255,255,0.2)",
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const testimonials = [
  {
    quote:
      "Gree Iloson has been our go-to supplier for iron rods and structural pipes for years. Consistently high quality, always on time.",
    name: "Engr. Adebayo Okonkwo",
    company: "Immobilaire Construction",
    initial: "AO",
    dark: false,
  },
  {
    quote:
      "We sourced all the cement for our university expansion through Chris Ilo Merchandise. Seamless supply, fair pricing, professional from start to finish.",
    name: "Prof. Samuel Adewale",
    company: "Elizade University",
    initial: "SA",
    dark: true,
  },
  {
    quote:
      "Their truck haulage service is exceptional. We needed bulk cement moved across three states on a tight deadline and they delivered without delay.",
    name: "Arc. Funke Adesanya",
    company: "Stone Work Nig. Ltd",
    initial: "FA",
    dark: false,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#C49A3C" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#C49A3C" }}
              >
                Testimonials
              </span>
            </div>
            <h2
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "var(--font-playfair), serif",
                color: "#1A2B6B",
              }}
            >
              What Our Clients Say.
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed text-right hidden sm:block">
            Trusted by government bodies, universities, hotels and construction
            firms across Nigeria.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                border: t.dark ? "none" : "0.5px solid #E4E1D8",
                background: t.dark ? "#1A2B6B" : "#ffffff",
              }}
            >
              <span
                className="leading-none mb-4"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 40,
                  color: t.dark ? "rgba(255,255,255,0.15)" : "#ECDCB0",
                }}
              >
                &ldquo;
              </span>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: t.dark ? "rgba(255,255,255,0.75)" : "#4A4950" }}
              >
                {t.quote}
              </p>

              <div
                className="flex items-center gap-3 pt-5"
                style={{
                  borderTop: t.dark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "0.5px solid #E4E1D8",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                  style={{ background: "#C49A3C", color: "#1A2B6B" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: t.dark ? "#ffffff" : "#1A2B6B" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: t.dark ? "rgba(255,255,255,0.5)" : "#8A8A94",
                    }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            style={{ border: "1.5px solid #1A2B6B", color: "#1A2B6B" }}
          >
            Read More Reviews
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
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
