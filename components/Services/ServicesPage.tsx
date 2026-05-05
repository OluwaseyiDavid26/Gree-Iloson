// "use client";
// import Link from "next/link";

// const steelProducts = [
//   {
//     name: "Iron Rods",
//     specs: "8mm · 10mm · 12mm · 16mm · 20mm · 25mm",
//     image: "/steel-img1.webp",
//   },
//   {
//     name: "Round Pipes",
//     specs: "Various diameters & lengths",
//     image: "/round-pipe.jfif",
//   },
//   {
//     name: "Rectangle Pipes",
//     specs: "Structural & architectural grades",
//     image: "/rectangle-steel.jfif",
//   },
//   {
//     name: "Galvanized Pipes",
//     specs: "Corrosion-resistant coating",
//     image: "/galvanized.jfif",
//   },
//   {
//     name: "Mesh & BRC Wire",
//     specs: "BRC, fencing & binding grades",
//     image: "/mesh-brc-wire.jfif",
//   },
//   {
//     name: "Razor & Fencing Wire",
//     specs: "High-security perimeter fencing",
//     image: "/fencing-wire.jfif",
//   },
// ];

// // Add this once at the top of your file
// const ArrowIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="7" y1="17" x2="17" y2="7" />
//     <polyline points="7 7 17 7 17 17" />
//   </svg>
// );

// const cementBrands = [
//   {
//     name: "Dangote Cement",
//     desc: "Nigeria's No.1 cement brand. Available in bulk and retail across all 36 states. Trusted by contractors and developers nationwide.",
//     image: "/dangote-cement.jfif",
//     accent: "#C49A3C",
//     tag: "Authorized Distributor",
//   },
//   {
//     name: "BUA Cement",
//     desc: "Premium quality cement for structural and finishing works. Consistent strength, reliable supply chain, delivered anywhere in Nigeria.",
//     image: "/bua-cement.jfif",
//     accent: "#1A2B6B",
//     tag: "Authorized Distributor",
//   },
// ];

// const engineeringServices = [
//   {
//     number: "01",
//     title: "Transformer Installation",
//     desc: "Professional installation and maintenance of electrical transformers for communities, institutions, industries and government facilities.",
//     image: "/transformer-install.jfif",
//     accent: "#C49A3C",
//   },
//   {
//     number: "02",
//     title: "Community Borehole Projects",
//     desc: "End-to-end borehole drilling, casing and installation for communities, schools, hotels and institutions.",
//     image: "/borehole-project.jfif",
//     accent: "#1A2B6B",
//   },
//   {
//     number: "03",
//     title: "Project Management",
//     desc: "Full-scope construction and engineering project management — from planning to procurement, execution and handover.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
//     accent: "#C49A3C",
//   },
// ];

// export default function Page() {
//   return (
//     <main className="bg-white">
//       {/* ── IRON & STEEL ─────────────────────────────── */}

//       {/* ── HERO ─────────────────────────────────────── */}
//       <section className="bg-white w-full px-5 sm:px-8 lg:px-14 pt-16 pb-4">
//         <div className="max-w-6xl mx-auto mt-12">
//           {/* Main title row */}
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
//                   fontSize: "clamp(2.4rem, 5vw, 4rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Our Services
//               </h1>
//               <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mt-3">
//                 Two subsidiary companies. Six core services. One commitment to
//                 quality across every layer of construction in Nigeria.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="flex items-center gap-8 sm:pb-2">
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
//                   <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">
//                     {s.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="mt-10 h-px bg-gray-100" />
//         </div>
//       </section>

//       <section className="w-full px-5 sm:px-8 lg:px-14 py-20">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <div className="inline-flex items-center gap-2 mb-3">
//                 <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//                 <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
//                   Gree Iloson Merchandise
//                 </span>
//               </div>
//               <h2
//                 className="text-[#1A2B6B] font-bold leading-tight"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Iron & Steel Products
//               </h2>
//             </div>
//             <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
//               Premium quality steel for construction projects of every scale —
//               from residential to large infrastructure works.
//             </p>
//           </div>

//           {/* Product image grid */}
//           {/* Product image grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//             {steelProducts.map((p, i) => (
//               <div
//                 key={i}
//                 className="group relative rounded-2xl overflow-hidden"
//                 style={{ height: "280px" }}
//               >
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <p
//                     className="text-white font-bold text-sm"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {p.name}
//                   </p>
//                   <p className="text-white/50 text-xs mt-1">{p.specs}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
//             >
//               Request Steel Products ↗
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── CEMENT ───────────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-14 py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
//             <div>
//               <div className="inline-flex items-center gap-2 mb-3">
//                 <span className="w-2 h-2 rounded-full bg-[#1A2B6B]" />
//                 <span className="text-[#1A2B6B] text-xs font-bold tracking-[0.2em] uppercase">
//                   Chris Ilo Merchandise
//                 </span>
//               </div>
//               <h2
//                 className="text-[#1A2B6B] font-bold leading-tight"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Cement Distribution
//               </h2>
//             </div>
//             <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
//               Authorized nationwide distributors supplying Nigeria's most
//               trusted cement brands across all 36 states.
//             </p>
//           </div>

//           {/* Cement brand cards — side by side image cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {cementBrands.map((b, i) => (
//               <div
//                 key={i}
//                 className="group relative rounded-3xl overflow-hidden"
//                 style={{ height: "380px" }}
//               >
//                 <img
//                   src={b.image}
//                   alt={b.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

//                 {/* Tag */}
//                 <div className="absolute top-5 left-5">
//                   <span
//                     className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
//                     style={{ background: b.accent }}
//                   >
//                     {b.tag}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-7">
//                   <h3
//                     className="text-white font-bold text-2xl mb-3"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {b.name}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed mb-5">
//                     {b.desc}
//                   </p>
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
//                     style={{ color: b.accent }}
//                   >
//                     Order Now
//                     <svg
//                       width="12"
//                       height="12"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12" />
//                       <polyline points="12 5 19 12 12 19" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
//             >
//               Order Cement ↗
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── HAULAGE ──────────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-14 py-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 mb-3">
//                 <span className="w-2 h-2 rounded-full bg-[#1A2B6B]" />
//                 <span className="text-[#1A2B6B] text-xs font-bold tracking-[0.2em] uppercase">
//                   Chris Ilo Merchandise
//                 </span>
//               </div>
//               <h2
//                 className="text-[#1A2B6B] font-bold leading-tight mb-5"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Truck Haulage & Leasing
//               </h2>
//               <p className="text-gray-500 text-sm leading-relaxed mb-8">
//                 We operate a robust truck haulage and leasing fleet built to
//                 move construction materials — cement, steel, aggregates and more
//                 — on time and in full, across all 36 states of Nigeria.
//               </p>
//               <div className="flex flex-col gap-3 mb-8">
//                 {[
//                   "Nationwide coverage — all 36 states",
//                   "Bulk cement & steel transportation",
//                   "Truck leasing for long-term projects",
//                   "On-time delivery guarantee",
//                   "Experienced, certified drivers",
//                 ].map((f, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full bg-[#1A2B6B]/10 flex items-center justify-center flex-shrink-0">
//                       <svg
//                         width="10"
//                         height="10"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#1A2B6B"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <p className="text-gray-600 text-sm">{f}</p>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
//               >
//                 Book Haulage ↗
//               </Link>
//             </div>

//             <div className="relative">
//               <div
//                 className="rounded-3xl overflow-hidden"
//                 style={{ height: "480px" }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80"
//                   alt="Truck Haulage"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-5 -right-5 bg-[#C49A3C] rounded-2xl px-6 py-5 shadow-xl">
//                 <p
//                   className="text-white font-bold text-2xl"
//                   style={{ fontFamily: "var(--font-playfair), serif" }}
//                 >
//                   36
//                 </p>
//                 <p className="text-white/70 text-xs mt-1 uppercase tracking-wide">
//                   States Reached
//                 </p>
//               </div>
//               <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[#1A2B6B]/10 -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── ENGINEERING ──────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-14 py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
//             <div>
//               <div className="inline-flex items-center gap-2 mb-3">
//                 <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//                 <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
//                   Gree Iloson Merchandise
//                 </span>
//               </div>
//               <h2
//                 className="text-[#1A2B6B] font-bold leading-tight"
//                 style={{
//                   fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Engineering Services
//               </h2>
//             </div>
//             <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
//               Professional engineering solutions — from power to water —
//               delivered with precision and expertise.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {engineeringServices.map((s, i) => (
//               <div
//                 key={i}
//                 className="group relative rounded-3xl overflow-hidden cursor-pointer"
//                 style={{ height: "440px" }}
//               >
//                 <img
//                   src={s.image}
//                   alt={s.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//                 {/* <img
//                   src={s.image}
//                   alt={s.title}
//                   className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" /> */}
//                 <div className="absolute top-5 left-5">
//                   <span
//                     className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
//                     style={{ background: s.accent }}
//                   >
//                     {s.number}
//                   </span>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-7">
//                   <h3
//                     className="text-white font-bold text-xl leading-snug mb-3"
//                     style={{ fontFamily: "var(--font-playfair), serif" }}
//                   >
//                     {s.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-300">
//                     {s.desc}
//                   </p>
//                   <div
//                     className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
//                     style={{ color: s.accent }}
//                   >
//                     Learn more
//                     <svg
//                       width="12"
//                       height="12"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12" />
//                       <polyline points="12 5 19 12 12 19" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ───────────────────────────────── */}
//       <section className="w-full px-5 sm:px-8 lg:px-14 py-16">
//         <div className="max-w-6xl mx-auto">
//           <div className="relative rounded-3xl bg-[#1A2B6B] overflow-hidden px-8 sm:px-16 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
//             <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
//             <div className="absolute -bottom-14 left-1/3 w-64 h-64 rounded-full bg-[#C49A3C]/10 pointer-events-none" />
//             <div className="relative z-10">
//               <p className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
//                 Ready to Start?
//               </p>
//               <h3
//                 className="text-white font-bold leading-tight"
//                 style={{
//                   fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//                   fontFamily: "var(--font-playfair), serif",
//                 }}
//               >
//                 Let&apos;s Build Something <br />
//                 Great Together.
//               </h3>
//             </div>
//             <div className="relative z-10 flex flex-wrap gap-3">
//               <Link
//                 href="/contact"
//                 className="bg-[#C49A3C] hover:bg-[#b08a32] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
//               >
//                 Get a Quote ↗
//               </Link>
//               <Link
//                 href="/projects"
//                 className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 border border-white/20"
//               >
//                 View Our Projects
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Link from "next/link";

const steelProducts = [
  {
    name: "Iron Rods",
    specs: "8mm · 10mm · 12mm · 16mm · 20mm · 25mm",
    image: "/steel-img1.webp",
  },
  {
    name: "Round Pipes",
    specs: "Various diameters & lengths",
    image: "/round-pipe.jfif",
  },
  {
    name: "Rectangle Pipes",
    specs: "Structural & architectural grades",
    image: "/rectangle-steel.jfif",
  },
  {
    name: "Galvanized Pipes",
    specs: "Corrosion-resistant coating",
    image: "/galvanized.jfif",
  },
  {
    name: "Mesh & BRC Wire",
    specs: "BRC, fencing & binding grades",
    image: "/mesh-brc-wire.jfif",
  },
  {
    name: "Razor & Fencing Wire",
    specs: "High-security perimeter fencing",
    image: "/fencing-wire.jfif",
  },
];

const ArrowIcon = () => (
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
);

const cementBrands = [
  {
    name: "Dangote Cement",
    desc: "Nigeria's No.1 cement brand. Available in bulk and retail across all 36 states. Trusted by contractors and developers nationwide.",
    image: "/dangote-cement.jfif",
    accent: "#C49A3C",
    tag: "Authorized Distributor",
  },
  {
    name: "BUA Cement",
    desc: "Premium quality cement for structural and finishing works. Consistent strength, reliable supply chain, delivered anywhere in Nigeria.",
    image: "/bua-cement.jfif",
    accent: "#1A2B6B",
    tag: "Authorized Distributor",
  },
];

const engineeringServices = [
  {
    number: "01",
    title: "Transformer Installation",
    desc: "Professional installation and maintenance of electrical transformers for communities, institutions, industries and government facilities.",
    image: "/transformer-install.jfif",
    accent: "#C49A3C",
  },
  {
    number: "02",
    title: "Community Borehole Projects",
    desc: "End-to-end borehole drilling, casing and installation for communities, schools, hotels and institutions.",
    image: "/borehole-project.jfif",
    accent: "#1A2B6B",
  },
  {
    number: "03",
    title: "Project Management",
    desc: "Full-scope construction and engineering project management — from planning to procurement, execution and handover.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    accent: "#C49A3C",
  },
];

export default function Page() {
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
                  What We Offer
                </span>
              </div>
              <h1
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Our Services
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mt-3">
                Two subsidiary companies. Six core services. One commitment to
                quality across every layer of construction in Nigeria.
              </p>
            </div>

            <div className="flex items-center gap-8 sm:pb-2">
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

      {/* ── IRON & STEEL ─────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                  Gree Iloson Merchandise
                </span>
              </div>
              <h2
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Iron & Steel Products
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
              Premium quality steel for construction projects of every scale —
              from residential to large infrastructure works.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {steelProducts.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden"
                style={{ height: "280px" }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {p.name}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{p.specs}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Steel Products <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CEMENT ───────────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1A2B6B]" />
                <span className="text-[#1A2B6B] text-xs font-bold tracking-[0.2em] uppercase">
                  Chris Ilo Merchandise
                </span>
              </div>
              <h2
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Cement Distribution
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
              Authorized nationwide distributors supplying Nigeria's most
              trusted cement brands across all 36 states.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cementBrands.map((b, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
                style={{ height: "380px" }}
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
                    style={{ background: b.accent }}
                  >
                    {b.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="text-white font-bold text-2xl mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {b.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {b.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
                    style={{ color: b.accent }}
                  >
                    Order Now
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
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Order Cement <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HAULAGE ──────────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1A2B6B]" />
                <span className="text-[#1A2B6B] text-xs font-bold tracking-[0.2em] uppercase">
                  Chris Ilo Merchandise
                </span>
              </div>
              <h2
                className="text-[#1A2B6B] font-bold leading-tight mb-5"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Truck Haulage & Leasing
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We operate a robust truck haulage and leasing fleet built to
                move construction materials — cement, steel, aggregates and more
                — on time and in full, across all 36 states of Nigeria.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Nationwide coverage — all 36 states",
                  "Bulk cement & steel transportation",
                  "Truck leasing for long-term projects",
                  "On-time delivery guarantee",
                  "Experienced, certified drivers",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1A2B6B]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1A2B6B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">{f}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Haulage <ArrowIcon />
              </Link>
            </div>

            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ height: "480px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80"
                  alt="Truck Haulage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#C49A3C] rounded-2xl px-6 py-5 shadow-xl">
                <p
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  36
                </p>
                <p className="text-white/70 text-xs mt-1 uppercase tracking-wide">
                  States Reached
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[#1A2B6B]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING ──────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                  Gree Iloson Merchandise
                </span>
              </div>
              <h2
                className="text-[#1A2B6B] font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Engineering Services
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs sm:text-right">
              Professional engineering solutions — from power to water —
              delivered with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engineeringServices.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ height: "440px" }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
                    style={{ background: s.accent }}
                  >
                    {s.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="text-white font-bold text-xl leading-snug mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-300">
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
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-[#1A2B6B] overflow-hidden px-8 sm:px-16 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-14 left-1/3 w-64 h-64 rounded-full bg-[#C49A3C]/10 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Ready to Start?
              </p>
              <h3
                className="text-white font-bold leading-tight"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Let&apos;s Build Something <br />
                Great Together.
              </h3>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Quote <ArrowIcon />
              </Link>
              <Link
                href="/projects"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 border border-white/20"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
