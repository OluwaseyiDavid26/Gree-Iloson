"use client";

export default function MissionVision() {
  return (
    //  <section className="bg-white w-full px-3 sm:px-4 py-6">
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
          <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
            Who We Are
          </span>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Mission Card */}
          <div className="relative rounded-3xl border border-gray-100 bg-[#fafafa] p-8 overflow-hidden">
            {/* Decorative bg circle */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-[#C49A3C]/8" />

            {/* Icon */}
            <div className="w-11 h-11 rounded-2xl bg-[#C49A3C]/10 flex items-center justify-center mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C49A3C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#C49A3C]">
                Our Mission
              </span>
              <div className="flex-1 h-px bg-[#C49A3C]/30" />
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              To deliver quality construction materials and engineering services
              that empower builders, contractors, and communities across Nigeria
              — with reliability, integrity, and excellence at every step.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl border border-gray-100 bg-[#fafafa] p-8 overflow-hidden">
            {/* Decorative bg circle */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-[#1A2B6B]/8" />

            {/* Icon */}
            <div className="w-11 h-11 rounded-2xl bg-[#1A2B6B]/10 flex items-center justify-center mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A2B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#1A2B6B]">
                Our Vision
              </span>
              <div className="flex-1 h-px bg-[#1A2B6B]/30" />
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              To be Nigeria&apos;s most trusted construction supply and
              engineering group — a company where purpose drives profit, and
              every project we touch stands as a testament to lasting quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
