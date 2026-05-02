"use client";

const partners = [
  {
    name: "Elizade University",
    type: "Education",
    logo: "/elizade.png",
  },
  {
    name: "Federal Ministry of Works & Housing",
    type: "Government",
    logo: "/federal-ministry.jfif",
  },
  {
    name: "Federal University of Technology",
    type: "Education",
    logo: "/futa-logo.jfif",
  },
  {
    name: "Royal Birds Hotel Akure",
    type: "Hospitality",
    logo: "/royal-birds.jfif",
  },
  {
    name: "Immobilaire Construction",
    type: "Construction",
    logo: "/Immobile-construction.png",
  },
  {
    name: "Stone Work Nig. Ltd",
    type: "Construction",
    logo: "/stone-work.png",
  },
];

// Triple for seamless loop
const looped = [...partners, ...partners, ...partners];

export default function PartnersNetwork() {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
            <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
              Partners & Network
            </span>
          </div>
          <h2
            className="text-[#1A2B6B] font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Trusted By The Best <br className="hidden sm:block" />
            In Nigeria.
          </h2>
        </div>

        {/* Sliding track */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-5"
            style={{
              animation: "slidePartners 28s linear infinite",
              width: "max-content",
            }}
          >
            {looped.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 py-7 px-6 cursor-default"
                style={{ width: "190px" }}
              >
                {/* Real logo image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-gray-100 p-1">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#1A2B6B] font-semibold text-xs leading-snug">
                    {p.name}
                  </p>
                  <p className="text-gray-400 text-[10px] mt-1 tracking-wide uppercase">
                    {p.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slidePartners {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
