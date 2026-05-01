"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white w-full px-3 sm:px-4 pt-3 pb-10">
      {/* Image card — starts from top, navbar floats over it */}
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{ height: "95vh", minHeight: "620px", maxHeight: "820px" }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Hero text — bottom left */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-2xl">
          {/* EST tag */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
            <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
              Est. 1979
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-bold mb-5 leading-[1.1]"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Building Nigeria&apos;s Future.
          </h1>

          {/* Sub */}
          <p className="text-gray-300 text-base leading-relaxed max-w-lg mb-8">
            From iron rods to cement, haulage to engineering — Gree Iloson Group
            delivers quality across every layer of construction.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="bg-[#C49A3C] hover:bg-[#b08a32] text-white font-semibold px-7 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 hover:bg-white/10 flex items-center gap-2"
            >
              Get a Quote <span className="text-[#C49A3C]">↗</span>
            </Link>
          </div>
        </div>

        {/* Stats — bottom right */}
        <div className="absolute bottom-10 right-10 hidden lg:flex gap-8">
          {[
            { value: "45+", label: "Years" },
            { value: "6+", label: "Partners" },
            { value: "36", label: "States" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-white font-bold text-2xl leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
