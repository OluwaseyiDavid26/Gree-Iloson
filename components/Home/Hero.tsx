// "use client";

// export default function Hero() {
//   return (
//     <section className="bg-white w-full px-3 sm:px-4 pt-3 pb-6">
//       {/* Rounded image card */}
//       <div
//         className="relative w-full rounded-3xl overflow-hidden"
//         style={{ height: "88vh", minHeight: "580px", maxHeight: "780px" }}
//       >
//         {/* Background Image */}
//         <img
//           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
//           alt="Construction site"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

//         {/* Top right — supporting text + icons — now visible on ALL screens */}
//         <div className="absolute top-24 right-5 sm:right-12 max-w-[200px] sm:max-w-xs text-right">
//           <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
//             We specialize in iron & steel distribution, cement supply, truck
//             haulage and engineering — delivering top-quality products and
//             construction solutions across Nigeria.
//           </p>
//           <div className="flex items-center justify-end gap-2">
//             {[
//               <svg
//                 key="a"
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect x="2" y="3" width="20" height="14" rx="2" />
//                 <path d="M8 21h8M12 17v4" />
//               </svg>,
//               <svg
//                 key="b"
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect x="1" y="3" width="15" height="13" rx="1" />
//                 <path d="M16 8h4l3 3v5h-7V8z" />
//                 <circle cx="5.5" cy="18.5" r="2.5" />
//                 <circle cx="18.5" cy="18.5" r="2.5" />
//               </svg>,
//               <svg
//                 key="c"
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//               </svg>,
//             ].map((icon, i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60"
//                 style={{
//                   background: "rgba(255,255,255,0.10)",
//                   backdropFilter: "blur(6px)",
//                   border: "1px solid rgba(255,255,255,0.12)",
//                 }}
//               >
//                 {icon}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom left — headline */}
//         <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-3xl">
//           <div className="inline-flex items-center gap-2 mb-5">
//             <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
//             <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
//               Est. 1979 · Akure, Nigeria
//             </span>
//           </div>
//           <h1
//             className="text-white font-bold leading-[1.05]"
//             style={{
//               fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
//               fontFamily: "var(--font-playfair), serif",
//             }}
//           >
//             Quality Materials,
//             <br />
//             <span className="italic text-[#C49A3C]">Trusted Engineering,</span>
//             <br />
//             Built for Nigeria.
//           </h1>
//         </div>
//       </div>

//       {/* STATS — below card on white bg */}
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-white w-full px-3 sm:px-4 pt-3 pb-6">
      {/* Rounded image card */}
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{ height: "88vh", minHeight: "580px", maxHeight: "780px" }}
      >
        {/* Top gold keyline — subtle structural detail */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C49A3C 20%, #C49A3C 80%, transparent)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 0.2s",
          }}
        />

        {/* Background Image — slow ken burns zoom */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: "heroKenBurns 20s ease-in-out infinite alternate",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Top right — supporting text + icons */}
        <div
          className="absolute top-24 right-5 sm:right-12 max-w-[200px] sm:max-w-xs text-right"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.8s ease 1.1s, transform 0.8s ease 1.1s",
          }}
        >
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
            We specialize in iron & steel distribution, cement supply, truck
            haulage and engineering — delivering top-quality products and
            construction solutions across Nigeria.
          </p>
          <div className="flex items-center justify-end gap-2">
            {[
              <svg
                key="a"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>,
              <svg
                key="b"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>,
              <svg
                key="c"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(6px)",
                  transition: `opacity 0.6s ease ${1.3 + i * 0.1}s, transform 0.6s ease ${
                    1.3 + i * 0.1
                  }s`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom left — headline */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="w-2 h-2 rounded-full bg-[#C49A3C]"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.5s ease 0.2s",
              }}
            />
            <span
              className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(6px)",
                transition:
                  "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
              }}
            >
              Est. 1979 · Akure, Nigeria
            </span>
          </div>

          {/* Headline — line-by-line reveal */}
          <h1
            className="text-white font-bold leading-[1.05]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            <span className="block overflow-hidden">
              <span
                className="block"
                style={{
                  transform: mounted ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s",
                }}
              >
                Quality Materials,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block italic text-[#C49A3C]"
                style={{
                  transform: mounted ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s",
                }}
              >
                Trusted Engineering,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block"
                style={{
                  transform: mounted ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s",
                }}
              >
                Built for Nigeria.
              </span>
            </span>
          </h1>

          {/* Gold underline draw */}
          <div
            className="h-[2px] bg-[#C49A3C] mt-5"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 0.9s ease 1.2s",
            }}
          />
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-6 right-6 text-white/50 text-[10px] tracking-[0.15em]"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease 1.6s",
            animation: mounted
              ? "heroBob 2s ease-in-out 2.2s infinite"
              : "none",
          }}
        >
          SCROLL
        </div>
      </div>

      {/* STATS — below card on white bg */}

      <style jsx global>{`
        @keyframes heroKenBurns {
          0% {
            transform: scale(1.08) translate(0, 0);
          }
          100% {
            transform: scale(1.16) translate(-1.5%, -1%);
          }
        }
        @keyframes heroBob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }
      `}</style>
    </section>
  );
}
