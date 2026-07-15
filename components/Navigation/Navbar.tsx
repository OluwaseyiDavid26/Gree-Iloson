"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-5 left-0 right-0 z-50 mt-4 flex justify-center px-5">
      <nav className="w-full max-w-5xl bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1A2B6B] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">GI</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-bold text-[#1A2B6B] text-xs tracking-widest uppercase">
              Gree Iloson
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider uppercase">
              Group of Companies
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    pathname === link.href
                      ? "text-[#C49A3C] font-semibold"
                      : "text-gray-600 hover:text-[#1A2B6B] hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5"
          >
            Contact Us
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

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-5 right-5 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  pathname === link.href
                    ? "bg-[#1A2B6B] text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#1A2B6B] text-white text-sm font-semibold px-4 py-3 rounded-xl text-center"
          >
            Contact Us ↗
          </Link>
        </div>
      )}
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Projects", href: "/projects" },
//   { name: "Services", href: "/services" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close menu on route change
//   useEffect(() => {
//     if (!menuOpen) return;

//     const timeoutId = window.setTimeout(() => {
//       setMenuOpen(false);
//     }, 0);

//     return () => window.clearTimeout(timeoutId);
//   }, [pathname, menuOpen]);

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
//         <nav
//           className={`mx-auto max-w-6xl rounded-2xl transition-all duration-500 ease-out
//             ${
//               scrolled
//                 ? "bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20"
//                 : "bg-white/70 backdrop-blur-md shadow-lg border border-white/30"
//             }
//             px-4 py-3 md:px-6 md:py-4 flex items-center justify-between`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group relative">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-[#C49A3C] to-[#F5D77B] rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
//               <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1A2B6B] to-[#2A3F8A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1A2B6B]/20 group-hover:scale-105 transition-transform duration-300">
//                 <span className="text-white font-bold text-sm md:text-base tracking-tight">
//                   GI
//                 </span>
//               </div>
//             </div>
//             <div className="hidden sm:flex flex-col leading-tight">
//               <span className="font-bold text-[#1A2B6B] text-xs md:text-sm tracking-widest uppercase">
//                 Gree Iloson
//               </span>
//               <span className="text-[8px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase font-medium">
//                 Group of Companies
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Links */}
//           <ul className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
//                       ${
//                         isActive
//                           ? "text-[#C49A3C]"
//                           : "text-gray-600 hover:text-[#1A2B6B]"
//                       }
//                       group`}
//                   >
//                     <span className="relative z-10">{link.name}</span>
//                     {isActive && (
//                       <span className="absolute inset-0 bg-[#C49A3C]/10 rounded-xl" />
//                     )}
//                     <span
//                       className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-[#C49A3C] transition-all duration-300
//                         ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`}
//                     />
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Desktop CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Link
//               href="/contact"
//               className="group relative overflow-hidden bg-gradient-to-r from-[#1A2B6B] to-[#2A3F8A] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1A2B6B]/30 hover:scale-105"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Contact Us
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
//                 >
//                   <line x1="7" y1="17" x2="17" y2="7" />
//                   <polyline points="7 7 17 7 17 17" />
//                 </svg>
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#C49A3C] to-[#F5D77B] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
//             </Link>
//           </div>

//           {/* Hamburger - Premium Animated */}
//           <button
//             className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-[#1A2B6B]/5 transition-all duration-300 group"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-5 h-0.5 rounded-full bg-[#1A2B6B] transition-all duration-400 ease-out
//                 ${menuOpen ? "rotate-45 translate-y-2 bg-[#C49A3C]" : "group-hover:w-6"}`}
//             />
//             <span
//               className={`block w-5 h-0.5 rounded-full bg-[#1A2B6B] transition-all duration-400 ease-out
//                 ${menuOpen ? "opacity-0 -translate-x-4" : "group-hover:w-6"}`}
//             />
//             <span
//               className={`block w-5 h-0.5 rounded-full bg-[#1A2B6B] transition-all duration-400 ease-out
//                 ${menuOpen ? "-rotate-45 -translate-y-2 bg-[#C49A3C]" : "group-hover:w-6"}`}
//             />
//           </button>
//         </nav>

//         {/* Mobile Dropdown - Premium Glass Effect */}
//         <div
//           className={`lg:hidden absolute left-4 right-4 top-[76px] md:left-8 md:right-8 md:top-[88px] 
//             transition-all duration-400 ease-out origin-top
//             ${
//               menuOpen
//                 ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
//                 : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
//             }`}
//         >
//           <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-3 overflow-hidden">
//             <div className="flex flex-col gap-1">
//               {navLinks.map((link, index) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setMenuOpen(false)}
//                     className={`relative px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
//                       ${
//                         isActive
//                           ? "bg-gradient-to-r from-[#1A2B6B]/5 to-[#C49A3C]/5 text-[#1A2B6B]"
//                           : "text-gray-700 hover:bg-gray-50"
//                       }
//                       group overflow-hidden`}
//                     style={{
//                       animationDelay: `${index * 50}ms`,
//                       animation: menuOpen
//                         ? "slideUp 0.4s ease-out forwards"
//                         : "none",
//                     }}
//                   >
//                     <span className="relative z-10 flex items-center gap-3">
//                       <span
//                         className={`w-1 h-1 rounded-full transition-all duration-300
//                         ${isActive ? "bg-[#C49A3C] w-2 h-2" : "bg-gray-300 group-hover:bg-[#C49A3C]"}`}
//                       />
//                       {link.name}
//                       {isActive && (
//                         <span className="ml-auto text-[10px] font-bold text-[#C49A3C] tracking-widest">
//                           ●
//                         </span>
//                       )}
//                     </span>
//                     <span
//                       className={`absolute inset-0 bg-gradient-to-r from-[#C49A3C]/5 to-transparent
//                       ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
//                       transition-opacity duration-500`}
//                     />
//                   </Link>
//                 );
//               })}

//               <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />

//               <Link
//                 href="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="group relative overflow-hidden bg-gradient-to-r from-[#1A2B6B] to-[#2A3F8A] text-white text-sm font-semibold px-4 py-3.5 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:shadow-[#1A2B6B]/30"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Contact Us
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   >
//                     <line x1="7" y1="17" x2="17" y2="7" />
//                     <polyline points="7 7 17 7 17 17" />
//                   </svg>
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#C49A3C] to-[#F5D77B] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(12px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-12px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// }
