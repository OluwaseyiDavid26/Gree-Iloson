// "use client";
// import Link from "next/link";

// const ArrowIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="5" y1="12" x2="19" y2="12" />
//     <polyline points="12 5 19 12 12 19" />
//   </svg>
// );

// const steelProducts = [
//   {
//     name: "Iron Rods",
//     specs: "8mm - 25mm",
//     image: "/steel-img1.webp",
//     bg: "#1c2b5e",
//   },
//   {
//     name: "Round Pipes",
//     specs: "Various sizes",
//     image: "/round-pipe.jfif",
//     bg: "#233470",
//   },
//   {
//     name: "Rectangle Pipes",
//     specs: "Structural grade",
//     image: "/rectangle-steel.jfif",
//     bg: "#183a5e",
//   },
//   {
//     name: "Galvanized Pipes",
//     specs: "Corrosion-resistant",
//     image: "/galvanized.jfif",
//     bg: "#1a4d6b",
//   },
//   {
//     name: "Mesh & BRC Wire",
//     specs: "Fencing grade",
//     image: "/mesh-brc-wire.jfif",
//     bg: "#3a3730",
//   },
//   {
//     name: "Razor & Fencing Wire",
//     specs: "High-security",
//     image: "/fencing-wire.jfif",
//     bg: "#3a2e1f",
//   },
// ];

// const cementBrands = [
//   {
//     name: "Dangote Cement",
//     desc: "Nigeria's No.1 cement brand, available in bulk and retail across all 36 states.",
//     image: "/dangote-cement.jfif",
//     tag: "Authorized Distributor",
//     tagBg: "#C49A3C",
//   },
//   {
//     name: "BUA Cement",
//     desc: "Premium quality cement for structural and finishing works, delivered anywhere in Nigeria.",
//     image: "/bua-cement.jfif",
//     tag: "Authorized Distributor",
//     tagBg: "#1A2B6B",
//   },
// ];

// const engineeringServices = [
//   {
//     number: "01",
//     accent: "#C49A3C",
//     title: "Transformer Installation",
//     desc: "Professional installation and maintenance of electrical transformers for communities and institutions.",
//   },
//   {
//     number: "02",
//     accent: "#1A2B6B",
//     title: "Community Borehole Projects",
//     desc: "End-to-end borehole drilling, casing and installation for communities, schools and hotels.",
//   },
//   {
//     number: "03",
//     accent: "#C49A3C",
//     title: "Project Management",
//     desc: "Full-scope engineering project management from planning to procurement and handover.",
//   },
// ];

// const haulageFeatures = [
//   "Nationwide coverage — all 36 states",
//   "Bulk cement & steel transportation",
//   "Truck leasing for long-term projects",
// ];

// type SectionHeaderProps = {
//   eyebrow: string;
//   eyebrowColor?: string;
//   title: string;
//   blurb?: string;
// };

// function SectionHeader({
//   eyebrow,
//   eyebrowColor,
//   title,
//   blurb,
// }: SectionHeaderProps) {
//   return (
//     <div className="flex items-end justify-between gap-6 flex-wrap mb-9">
//       <div>
//         <span
//           className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-2.5"
//           style={{ color: eyebrowColor }}
//         >
//           {eyebrow}
//         </span>
//         <h2
//           className="text-[#1A2B6B] font-bold"
//           style={{
//             fontSize: "34px",
//             fontFamily: "var(--font-playfair), serif",
//           }}
//         >
//           {title}
//         </h2>
//       </div>
//       {blurb && (
//         <p className="text-gray-400 text-[13px] max-w-[280px] text-right m-0">
//           {blurb}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <main className="bg-white">
//       {/* ── HERO ─────────────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pt-16 pb-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
//             <div>
//               <div className="inline-flex items-center gap-2 mb-4">
//                 <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//                 <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
//                   What We Offer
//                 </span>
//               </div>
//               <h1
//                 className="text-[#1A2B6B] font-bold leading-tight"
//                 style={{
//                   fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Our Services
//               </h1>
//               <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mt-3.5">
//                 Two subsidiary companies. Six core services. One commitment to
//                 quality across every layer of construction in Nigeria.
//               </p>
//             </div>
//             <div className="flex items-center gap-10">
//               {[
//                 { value: "6+", label: "Services" },
//                 { value: "45+", label: "Years" },
//               ].map((s, i) => (
//                 <div key={i} className="text-right">
//                   <p
//                     className="text-[#1A2B6B] font-bold text-3xl leading-none"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {s.value}
//                   </p>
//                   <p className="text-gray-400 text-[11px] mt-1.5 uppercase tracking-widest">
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-10 h-px bg-gray-100" />
//         </div>
//       </section>

//       {/* ── IRON & STEEL — 6-tile grid ──────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
//         <div className="max-w-6xl mx-auto">
//           <SectionHeader
//             eyebrow="Gree Iloson Merchandise"
//             eyebrowColor="#C49A3C"
//             title="Iron & Steel Products"
//             blurb="Premium quality steel for construction projects of every scale — residential to large infrastructure."
//           />
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
//             {steelProducts.map((p, i) => (
//               <div
//                 key={i}
//                 className="group relative rounded-2xl overflow-hidden"
//                 style={{ height: "240px" }}
//               >
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-4">
//                   <p
//                     className="text-white font-bold text-base"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {p.name}
//                   </p>
//                   <p className="text-white/50 text-[11px] mt-1">{p.specs}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 mt-7"
//           >
//             Request Steel Products <ArrowIcon />
//           </Link>
//         </div>
//       </section>

//       {/* ── CEMENT — two-up authorized distributor cards ── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
//         <div className="max-w-6xl mx-auto">
//           <SectionHeader
//             eyebrow="Chris Ilo Merchandise"
//             eyebrowColor="#1A2B6B"
//             title="Cement Distribution"
//             blurb="Authorized nationwide distributors supplying Nigeria's most trusted cement brands."
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
//             {cementBrands.map((b, i) => (
//               <div
//                 key={i}
//                 className="group relative rounded-[18px] overflow-hidden"
//                 style={{ height: "320px" }}
//               >
//                 <img
//                   src={b.image}
//                   alt={b.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
//                 <span
//                   className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full text-white"
//                   style={{ background: b.tagBg }}
//                 >
//                   {b.tag}
//                 </span>
//                 <div className="absolute bottom-0 left-0 right-0 p-7">
//                   <h3
//                     className="text-white font-bold text-2xl mb-2.5"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {b.name}
//                   </h3>
//                   <p className="text-white/70 text-[13px] leading-relaxed mb-4.5 max-w-[340px]">
//                     {b.desc}
//                   </p>
//                   <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#C49A3C]">
//                     Order Now <ArrowIcon />
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 mt-7"
//           >
//             Order Cement <ArrowIcon />
//           </Link>
//         </div>
//       </section>

//       {/* ── HAULAGE — split feature with stat badge ─── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           <div>
//             <span className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3.5 text-[#1A2B6B]">
//               Chris Ilo Merchandise
//             </span>
//             <h2
//               className="text-[#1A2B6B] font-bold mb-4.5"
//               style={{
//                 fontSize: "34px",
//                 fontFamily: "var(--font-playfair), serif",
//               }}
//             >
//               Truck Haulage &amp; Leasing
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-[420px]">
//               A robust haulage and leasing fleet built to move cement, steel and
//               aggregates on time and in full, across all 36 states.
//             </p>
//             <div className="flex flex-col gap-3 mb-7">
//               {haulageFeatures.map((f, i) => (
//                 <div key={i} className="flex items-center gap-2.5">
//                   <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1A2B6B] text-[10px]">
//                     ✓
//                   </span>
//                   <p className="text-gray-600 text-sm m-0">{f}</p>
//                 </div>
//               ))}
//             </div>
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
//             >
//               Book Haulage <ArrowIcon />
//             </Link>
//           </div>
//           <div className="relative">
//             <div
//               className="rounded-[20px] overflow-hidden"
//               style={{ height: "400px" }}
//             >
//               <img
//                 src="/Truck Haulage & Leasing.jfif"
//                 alt="Truck Haulage"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-5 -right-4 bg-[#C49A3C] rounded-2xl px-6 py-4.5 shadow-xl">
//               <p
//                 className="text-[#1A2B6B] font-bold text-2xl"
//                 style={{ fontFamily: "var(--font-playfair), serif" }}
//               >
//                 36
//               </p>
//               <p className="text-[#1A2B6B]/70 text-[10px] mt-1 uppercase tracking-wide">
//                 States Reached
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── ENGINEERING — 3-card grid ────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
//         <div className="max-w-6xl mx-auto">
//           <SectionHeader
//             eyebrow="Gree Iloson Merchandise"
//             eyebrowColor="#C49A3C"
//             title="Engineering Services"
//             blurb="Professional engineering solutions — from power to water — delivered with precision."
//           />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
//             {engineeringServices.map((s, i) => (
//               <div
//                 key={i}
//                 className="border border-gray-200 rounded-2xl p-8 flex flex-col"
//               >
//                 <span
//                   className="font-bold text-base mb-5"
//                   style={{
//                     fontFamily: "var(--font-playfair), serif",
//                     color: s.accent,
//                   }}
//                 >
//                   {s.number}
//                 </span>
//                 <h3
//                   className="text-[#1A2B6B] font-bold text-xl mb-3"
//                   style={{ fontFamily: "var(--font-playfair), serif" }}
//                 >
//                   {s.title}
//                 </h3>
//                 <p className="text-gray-500 text-[13px] leading-relaxed m-0">
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ───────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-20 pb-20">
//         <div className="max-w-6xl mx-auto relative rounded-[20px] bg-[#1A2B6B] overflow-hidden px-10 sm:px-16 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
//           <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/[0.04] pointer-events-none" />
//           <div className="relative z-10">
//             <p className="text-[#C49A3C] text-[11px] font-bold tracking-[0.12em] uppercase mb-3">
//               Ready to Start?
//             </p>
//             <h3
//               className="text-white font-bold leading-tight"
//               style={{
//                 fontSize: "clamp(1.6rem, 3vw, 2rem)",
//                 fontFamily: "var(--font-playfair), serif",
//               }}
//             >
//               Let&apos;s Build Something Great Together.
//             </h3>
//           </div>
//           <div className="relative z-10 flex flex-wrap gap-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-[#1A2B6B] font-bold px-6.5 py-3.5 rounded-full text-[13px] transition-all duration-200 hover:-translate-y-0.5"
//             >
//               Get a Quote <ArrowIcon />
//             </Link>
//             <Link
//               href="/projects"
//               className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6.5 py-3.5 rounded-full text-[13px] transition-all duration-200 border border-white/15"
//             >
//               View Our Projects
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
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
);

const steelProducts = [
  {
    name: "Iron Rods",
    specs: "8mm - 25mm",
    image: "/steel-img1.webp",
    bg: "#1c2b5e",
  },
  {
    name: "Round Pipes",
    specs: "Various sizes",
    image: "/round-pipe.jfif",
    bg: "#233470",
  },
  {
    name: "Rectangle Pipes",
    specs: "Structural grade",
    image: "/rectangle-steel.jfif",
    bg: "#183a5e",
  },
  {
    name: "Galvanized Pipes",
    specs: "Corrosion-resistant",
    image: "/galvanized.jfif",
    bg: "#1a4d6b",
  },
  {
    name: "Mesh & BRC Wire",
    specs: "Fencing grade",
    image: "/mesh-brc-wire.jfif",
    bg: "#3a3730",
  },
  {
    name: "Razor & Fencing Wire",
    specs: "High-security",
    image: "/fencing-wire.jfif",
    bg: "#3a2e1f",
  },
];

const cementBrands = [
  {
    name: "Dangote Cement",
    desc: "Nigeria's No.1 cement brand, available in bulk and retail across all 36 states.",
    image: "/dangote-cement.jfif",
    tag: "Authorized Distributor",
    tagBg: "#C49A3C",
  },
  {
    name: "BUA Cement",
    desc: "Premium quality cement for structural and finishing works, delivered anywhere in Nigeria.",
    image: "/bua-cement.jfif",
    tag: "Authorized Distributor",
    tagBg: "#1A2B6B",
  },
];

const engineeringServices = [
  {
    number: "01",
    accent: "#C49A3C",
    title: "Transformer Installation",
    desc: "Professional installation and maintenance of electrical transformers for communities and institutions.",
  },
  {
    number: "02",
    accent: "#1A2B6B",
    title: "Community Borehole Projects",
    desc: "End-to-end borehole drilling, casing and installation for communities, schools and hotels.",
  },
  {
    number: "03",
    accent: "#C49A3C",
    title: "Project Management",
    desc: "Full-scope engineering project management from planning to procurement and handover.",
  },
];

const haulageFeatures = [
  "Nationwide coverage — all 36 states",
  "Bulk cement & steel transportation",
  "Truck leasing for long-term projects",
];

type SectionHeaderProps = {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  blurb?: string;
};

function SectionHeader({
  eyebrow,
  eyebrowColor,
  title,
  blurb,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap mb-9">
      <div>
        <span
          className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-2.5"
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </span>
        <h2
          className="text-[#1A2B6B] font-bold"
          style={{
            fontSize: "34px",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          {title}
        </h2>
      </div>
      {blurb && (
        <p className="text-gray-400 text-[13px] max-w-[280px] text-right m-0">
          {blurb}
        </p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pt-32 sm:pt-36 lg:pt-40 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
                  What We Offer
                </span>
              </div>
              <h1
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Our Services
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mt-3.5">
                Two subsidiary companies. Six core services. One commitment to
                quality across every layer of construction in Nigeria.
              </p>
            </div>
            <div className="flex items-center gap-10">
              {[
                { value: "6+", label: "Services" },
                { value: "45+", label: "Years" },
              ].map((s, i) => (
                <div key={i} className="text-right">
                  <p
                    className="text-[#1A2B6B] font-bold text-3xl leading-none"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1.5 uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 h-px bg-gray-100" />
        </div>
      </section>

      {/* ── IRON & STEEL — 6-tile grid ──────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Gree Iloson Merchandise"
            eyebrowColor="#C49A3C"
            title="Iron & Steel Products"
            blurb="Premium quality steel for construction projects of every scale — residential to large infrastructure."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {steelProducts.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden"
                style={{ height: "240px" }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {p.name}
                  </p>
                  <p className="text-white/50 text-[11px] mt-1">{p.specs}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 mt-7"
          >
            Request Steel Products <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── CEMENT — two-up authorized distributor cards ── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Chris Ilo Merchandise"
            eyebrowColor="#1A2B6B"
            title="Cement Distribution"
            blurb="Authorized nationwide distributors supplying Nigeria's most trusted cement brands."
          />
          {/* gap-4.5 → gap-[18px]: 4.5 isn't a real Tailwind spacing step, was silently doing nothing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {cementBrands.map((b, i) => (
              <div
                key={i}
                className="group relative rounded-[18px] overflow-hidden"
                style={{ height: "320px" }}
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span
                  className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full text-white"
                  style={{ background: b.tagBg }}
                >
                  {b.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="text-white font-bold text-2xl mb-2.5"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {b.name}
                  </h3>
                  {/* mb-4.5 → mb-[18px] */}
                  <p className="text-white/70 text-[13px] leading-relaxed mb-[18px] max-w-[340px]">
                    {b.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#C49A3C]">
                    Order Now <ArrowIcon />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 mt-7"
          >
            Order Cement <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── HAULAGE — split feature with stat badge ─── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3.5 text-[#1A2B6B]">
              Chris Ilo Merchandise
            </span>
            <h2
              className="text-[#1A2B6B] font-bold mb-[18px]"
              style={{
                fontSize: "34px",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Truck Haulage &amp; Leasing
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-[420px]">
              A robust haulage and leasing fleet built to move cement, steel and
              aggregates on time and in full, across all 36 states.
            </p>
            <div className="flex flex-col gap-3 mb-7">
              {haulageFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1A2B6B] text-[10px]">
                    ✓
                  </span>
                  <p className="text-gray-600 text-sm m-0">{f}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Haulage <ArrowIcon />
            </Link>
          </div>

          <div className="relative mt-4 lg:mt-0">
            {/* Fixed 400px height → now steps down for mobile instead of staying tall on narrow screens */}
            <div className="rounded-[20px] overflow-hidden w-full h-[240px] sm:h-[320px] lg:h-[400px]">
              <img
                src="/Truck Haulage & Leasing.jfif"
                alt="Truck Haulage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge — scales down and pulls its offset in on mobile so it can't overflow the viewport */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-4 bg-[#C49A3C] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-[18px] shadow-xl">
              <p
                className="text-[#1A2B6B] font-bold text-xl sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                36
              </p>
              <p className="text-[#1A2B6B]/70 text-[9px] sm:text-[10px] mt-1 uppercase tracking-wide">
                States Reached
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING — 3-card grid ────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Gree Iloson Merchandise"
            eyebrowColor="#C49A3C"
            title="Engineering Services"
            blurb="Professional engineering solutions — from power to water — delivered with precision."
          />
          {/* gap-4.5 → gap-[18px] */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {engineeringServices.map((s, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-8 flex flex-col"
              >
                <span
                  className="font-bold text-base mb-5"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: s.accent,
                  }}
                >
                  {s.number}
                </span>
                <h3
                  className="text-[#1A2B6B] font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed m-0">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto relative rounded-[20px] bg-[#1A2B6B] overflow-hidden px-10 sm:px-16 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[#C49A3C] text-[11px] font-bold tracking-[0.12em] uppercase mb-3">
              Ready to Start?
            </p>
            <h3
              className="text-white font-bold leading-tight"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Let&apos;s Build Something Great Together.
            </h3>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            {/* px-6.5 → px-[26px] */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-[#1A2B6B] font-bold px-[26px] py-3.5 rounded-full text-[13px] transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Quote <ArrowIcon />
            </Link>
            <Link
              href="/projects"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-[26px] py-3.5 rounded-full text-[13px] transition-all duration-200 border border-white/15"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
