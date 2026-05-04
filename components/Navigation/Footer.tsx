// "use client";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#1A2B6B] w-full">
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 pt-16 pb-8">
//         {/* Main 2-col grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
//           {/* Col 1 — Brand + tagline + CTA */}
//           <div className="flex flex-col gap-8">
//             <div>
//               <img
//                 src="/gree-illson-logo.png"
//                 alt="Gree Iloson Group of Companies"
//                 className="h-12 w-auto object-contain mb-6"
//               />
//               <p className="text-white/50 text-sm leading-relaxed max-w-xs">
//                 Quality construction materials and engineering services.
//                 Building Nigeria&apos;s future since 1979.
//               </p>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-fit"
//             >
//               <span>✦</span> GET A QUOTE
//             </Link>
//           </div>

//           {/* Col 2 — Contact + socials */}
//           <div className="flex flex-col gap-8">
//             <div className="flex flex-col gap-4">
//               {/* Email */}
//               <Link
//                 href="mailto:info@greeiloson.com"
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#C49A3C] flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-200 flex-shrink-0">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                     <polyline points="22,6 12,13 2,6" />
//                   </svg>
//                 </div>
//                 <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
//                   info@greeiloson.com
//                 </span>
//               </Link>

//               {/* Phone */}
//               <Link
//                 href="tel:09065611162"
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#C49A3C] flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-200 flex-shrink-0">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//                   </svg>
//                 </div>
//                 <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
//                   09065611162
//                 </span>
//               </Link>

//               {/* Location */}
//               <Link
//                 href="https://maps.google.com"
//                 target="_blank"
//                 className="flex items-center gap-3 group"
//               >
//                 <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#C49A3C] flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-200 flex-shrink-0">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                 </div>
//                 <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
//                   28B, Ondo Road, Akure, Ondo State.
//                 </span>
//               </Link>
//             </div>

//             {/* Socials */}
//             <div className="flex items-center gap-2">
//               {[
//                 {
//                   label: "Twitter",
//                   href: "#",
//                   icon: (
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                     </svg>
//                   ),
//                 },
//                 {
//                   label: "Facebook",
//                   href: "#",
//                   icon: (
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//                     </svg>
//                   ),
//                 },
//                 {
//                   label: "Instagram",
//                   href: "#",
//                   icon: (
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <rect x="2" y="2" width="20" height="20" rx="5" />
//                       <circle cx="12" cy="12" r="4" />
//                       <circle
//                         cx="17.5"
//                         cy="6.5"
//                         r="1"
//                         fill="currentColor"
//                         stroke="none"
//                       />
//                     </svg>
//                   ),
//                 },
//               ].map((s, i) => (
//                 <Link
//                   key={i}
//                   href={s.href}
//                   aria-label={s.label}
//                   className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
//                 >
//                   {s.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mb-6" />

//         {/* Bottom bar */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-white/30 text-xs uppercase tracking-wide">
//             © {new Date().getFullYear()} Gree Iloson Group of Companies.
//           </p>
//           <p className="text-white/20 text-xs">
//             Est. 1979 · Akure, Ondo State, Nigeria
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B6B] w-full text-white font-sans">
      {/* Top Section: CTA & Newsletter */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-10 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl md:text-3xl font-serif font-medium max-w-sm leading-tight tracking-tight">
            Get Instant Industrial Updates!
          </h2>
          <div className="w-full max-w-md">
            <p className="text-[10px] uppercase tracking-widest mb-3 text-white/50">
              Newsletter Subscription
            </p>
            <div className="flex items-center bg-white/8 border border-white/20 rounded-full px-4 py-1 gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40 py-2"
              />
              <button className="bg-[#C49A3C] hover:bg-[#b8882d] transition-colors text-white text-xs font-medium px-5 py-2.5 rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Brand, Links & Contact */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-14 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="text-xl font-serif font-medium tracking-tight">
              Gree <span className="text-[#C49A3C]">Iloson</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              Building strong relationships with reliable subcontractors and
              suppliers. Quality construction materials and engineering services
              since 1979.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-1">
              {/* Facebook */}
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C49A3C] hover:border-[#C49A3C] transition-all"
                aria-label="Facebook"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C49A3C] hover:border-[#C49A3C] transition-all"
                aria-label="Instagram"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </Link>

              {/* Twitter / X */}
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C49A3C] hover:border-[#C49A3C] transition-all"
                aria-label="Twitter"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C49A3C] hover:border-[#C49A3C] transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.12em] text-white/45 font-normal mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "About Us",
                "Our Services",
                "Projects",
                // "Suppliers",
                // "Careers",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-white/60 hover:text-[#C49A3C] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.12em] text-white/45 font-normal mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <Link
                href="mailto:info@greeiloson.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C49A3C]/15 border border-[#C49A3C]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C49A3C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors pt-1.5">
                  info@greeiloson.com
                </span>
              </Link>
              <Link
                href="tel:09065611162"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C49A3C]/15 border border-[#C49A3C]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C49A3C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors pt-1.5">
                  09065611162
                </span>
              </Link>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C49A3C]/15 border border-[#C49A3C]/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C49A3C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-sm text-white/60 leading-relaxed pt-1.5">
                  28B, Ondo Road, Akure,
                  <br />
                  Ondo State, Nigeria.
                </span>
              </div>

              {/* Email */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-[11px] tracking-wide">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="text-white/55 font-medium">
              Gree Iloson Group of Companies
            </span>
            . All Rights Reserved.
          </p>
          <span className="text-[10px] text-white/30 border border-white/10 rounded-full px-3 py-1 tracking-widest uppercase">
            Est. 1979
          </span>
        </div>
      </div>
    </footer>
  );
}
