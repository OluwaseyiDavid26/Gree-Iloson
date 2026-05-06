"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Gree Iloson has been our go-to supplier for iron rods and structural pipes for years. Their products are consistently high quality and their delivery is always on time. They are a company you can truly rely on.",
    name: "Engr. Adebayo Okonkwo",
    title: "Project Manager",
    company: "Immobilaire Construction",
    initial: "AO",
    color: "#C49A3C",
  },
  {
    quote:
      "We sourced all the cement for our university expansion project through Chris Ilo Merchandise. The supply was seamless, the pricing was fair and the team was professional from start to finish. Highly recommended.",
    name: "Prof. Samuel Adewale",
    title: "Director of Works",
    company: "Elizade University",
    initial: "SA",
    color: "#1A2B6B",
  },
  {
    quote:
      "Their truck haulage service is exceptional. We needed bulk cement transported across three states on a tight deadline and GIGC delivered without a single delay. They are reliable partners for any serious construction project.",
    name: "Arc. Funke Adesanya",
    title: "Principal Architect",
    company: "Stone Work Nig. Ltd",
    initial: "FA",
    color: "#C49A3C",
  },
  {
    quote:
      "The transformer installation carried out by Gree Iloson's engineering team was world-class. They were thorough, safety-conscious and completed the work ahead of schedule. Our facility has had zero power issues since.",
    name: "Engr. Chuka Nwosu",
    title: "Facilities Manager",
    company: "Royal Birds Hotel Akure",
    initial: "CN",
    color: "#1A2B6B",
  },
  {
    quote:
      "GIGC supplied all our iron rods and fencing wire for the federal road project. Their understanding of construction requirements and their attention to specifications sets them apart from every other supplier we have worked with.",
    name: "Engr. Tunde Fashola",
    title: "Senior Engineer",
    company: "Federal Ministry of Works",
    initial: "TF",
    color: "#C49A3C",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Full card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1A2B6B]">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-[#C49A3C]/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left — big label col */}
            <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                  <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                    Testimonials
                  </span>
                </div>
                <h2
                  className="text-white font-bold leading-tight mb-4"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  What Our <br />
                  Clients Say.
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  Trusted by government bodies, universities, hotels and
                  construction firms across Nigeria.
                </p>
              </div>

              {/* Nav + counter */}
              <div className="flex items-center gap-4 mt-10 lg:mt-0">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C49A3C] hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
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
                  onClick={next}
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#C49A3C] hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
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
                <span className="text-white/30 text-sm font-mono ml-2">
                  0{active + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>

            {/* Right — quote col */}
            <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-between gap-10">
              {/* Big quote mark */}
              <span
                className="text-white/8 select-none leading-none"
                style={{
                  fontSize: "7rem",
                  fontFamily: "serif",
                  lineHeight: 0.8,
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <blockquote
                className="text-white font-medium leading-relaxed -mt-6"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {t.title} · {t.company}
                  </p>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2 ml-auto">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === active ? "20px" : "6px",
                        height: "6px",
                        background:
                          i === active ? "#C49A3C" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { useEffect, useState } from "react";

// const testimonials = [
//   {
//     quote:
//       "Gree Iloson has been our go-to supplier for iron rods and structural pipes for years. Their products are consistently high quality and delivery is always on time. A company you can truly rely on.",
//     name: "Engr. Adebayo Okonkwo",
//     title: "Project Manager",
//     company: "Immobilaire Construction",
//     initial: "AO",
//     accent: "#C49A3C",
//     category: "Steel Supply",
//   },
//   {
//     quote:
//       "We sourced all the cement for our university expansion through Chris Ilo Merchandise. The supply was seamless, pricing was fair and the team was professional from start to finish. Highly recommended.",
//     name: "Prof. Samuel Adewale",
//     title: "Director of Works",
//     company: "Elizade University",
//     initial: "SA",
//     accent: "#C49A3C",
//     category: "Cement Distribution",
//   },
//   {
//     quote:
//       "Their truck haulage service is exceptional. We needed bulk cement transported across three states on a tight deadline and GIGC delivered without a single delay. Reliable partners for any serious project.",
//     name: "Arc. Funke Adesanya",
//     title: "Principal Architect",
//     company: "Stone Work Nig. Ltd",
//     initial: "FA",
//     accent: "#C49A3C",
//     category: "Haulage",
//   },
//   {
//     quote:
//       "The transformer installation by Gree Iloson's engineering team was world-class. Thorough, safety-conscious and completed ahead of schedule. Our facility has had zero power issues since.",
//     name: "Engr. Chuka Nwosu",
//     title: "Facilities Manager",
//     company: "Royal Birds Hotel Akure",
//     initial: "CN",
//     accent: "#C49A3C",
//     category: "Engineering",
//   },
//   {
//     quote:
//       "GIGC supplied all our iron rods and fencing wire for the federal road project. Their understanding of construction requirements and attention to specifications sets them apart from every other supplier.",
//     name: "Engr. Tunde Fashola",
//     title: "Senior Engineer",
//     company: "Federal Ministry of Works",
//     initial: "TF",
//     accent: "#C49A3C",
//     category: "Steel Supply",
//   },
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState<"left" | "right">("right");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       triggerChange((active + 1) % testimonials.length, "right");
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [active]);

//   const triggerChange = (index: number, dir: "left" | "right") => {
//     if (animating || index === active) return;
//     setDirection(dir);
//     setAnimating(true);
//     setTimeout(() => {
//       setActive(index);
//       setAnimating(false);
//     }, 350);
//   };

//   const t = testimonials[active];

//   return (
//     <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
//           <div>
//             <div className="inline-flex items-center gap-2 mb-4">
//               <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//               <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
//                 Testimonials
//               </span>
//             </div>
//             <h2
//               className="text-[#1A2B6B] font-bold leading-tight"
//               style={{
//                 fontSize: "clamp(2rem, 4vw, 3rem)",
//                 fontFamily: "var(--font-playfair), serif",
//               }}
//             >
//               What Our Clients Say.
//             </h2>
//           </div>

//           {/* Arrows */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() =>
//                 triggerChange(
//                   active === 0 ? testimonials.length - 1 : active - 1,
//                   "left",
//                 )
//               }
//               className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#1A2B6B] hover:bg-[#1A2B6B] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>
//             <button
//               onClick={() =>
//                 triggerChange((active + 1) % testimonials.length, "right")
//               }
//               className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#1A2B6B] hover:bg-[#1A2B6B] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="9 18 15 12 9 6" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Full width card */}
//         <div
//           className="relative rounded-3xl bg-[#1A2B6B] overflow-hidden"
//           style={{ minHeight: "400px" }}
//         >
//           {/* Decorative bg */}
//           <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
//           <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#C49A3C]/8 pointer-events-none" />
//           <div className="absolute top-1/2 -left-10 w-40 h-40 rounded-full bg-white/3 pointer-events-none" />

//           {/* Animated content */}
//           <div
//             className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-0 h-full"
//             style={{
//               opacity: animating ? 0 : 1,
//               transform: animating
//                 ? `translateX(${direction === "right" ? "30px" : "-30px"})`
//                 : "translateX(0)",
//               transition: "opacity 0.35s ease, transform 0.35s ease",
//             }}
//           >
//             {/* Left accent col */}
//             <div className="hidden lg:flex flex-col justify-between p-12 border-r border-white/10">
//               {/* Big quote mark */}
//               <span
//                 className="text-white/10 select-none leading-none"
//                 style={{
//                   fontSize: "10rem",
//                   fontFamily: "serif",
//                   lineHeight: 0.7,
//                 }}
//               >
//                 &ldquo;
//               </span>

//               {/* Category + counter */}
//               <div>
//                 <span
//                   className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full text-white mb-4"
//                   style={{
//                     background: "rgba(196,154,60,0.25)",
//                     border: "1px solid rgba(196,154,60,0.3)",
//                   }}
//                 >
//                   {t.category}
//                 </span>
//                 <p
//                   className="text-white/20 text-4xl font-bold"
//                   style={{ fontFamily: "var(--font-playfair), serif" }}
//                 >
//                   0{active + 1}
//                   <span className="text-white/10 text-2xl">
//                     {" "}
//                     / 0{testimonials.length}
//                   </span>
//                 </p>
//               </div>
//             </div>

//             {/* Center — quote */}
//             <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col justify-between gap-10">
//               {/* Mobile category */}
//               <div className="lg:hidden">
//                 <span
//                   className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full text-white"
//                   style={{
//                     background: "rgba(196,154,60,0.25)",
//                     border: "1px solid rgba(196,154,60,0.3)",
//                   }}
//                 >
//                   {t.category}
//                 </span>
//               </div>

//               {/* Quote */}
//               <blockquote
//                 className="text-white leading-relaxed flex-1"
//                 style={{
//                   fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                   fontWeight: 400,
//                 }}
//               >
//                 &ldquo;{t.quote}&rdquo;
//               </blockquote>

//               {/* Author + dots row */}
//               <div className="flex items-center justify-between gap-4 flex-wrap">
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ring-2 ring-white/10"
//                     style={{ background: t.accent }}
//                   >
//                     {t.initial}
//                   </div>
//                   <div>
//                     <p className="text-white font-bold text-sm">{t.name}</p>
//                     <p className="text-white/40 text-xs mt-0.5">
//                       {t.title} &middot; {t.company}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Dot indicators */}
//                 <div className="flex items-center gap-2">
//                   {testimonials.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         triggerChange(i, i > active ? "right" : "left")
//                       }
//                       className="transition-all duration-300 rounded-full"
//                       style={{
//                         width: i === active ? "24px" : "6px",
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

//           {/* Bottom progress line */}
//           <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
//             <div
//               className="h-full bg-[#C49A3C]"
//               style={{
//                 width: `${((active + 1) / testimonials.length) * 100}%`,
//                 transition: "width 0.4s ease",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
