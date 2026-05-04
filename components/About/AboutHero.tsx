"use client";

export default function AboutHero() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 pt-36 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-tight mb-7 text-[#1A2B6B]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Building Trust,{" "}
              <span className="italic" style={{ color: "#C49A3C" }}>
                Delivering
              </span>{" "}
              Quality.
            </h1>

            {/* Bold intro — client's exact first sentence */}
            <p className="text-[#1A2B6B] font-semibold text-base sm:text-lg leading-relaxed mb-5">
              Gree Iloson Group of Companies specializes in the distribution of
              quality construction engineering and innovation building products.
            </p>

            {/* Body — client's exact remaining text */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We also specialize in construction and maintenance servicing
              including project management in electrical and engineering field.
              Since inception Gree Iloson Group of Company has earned
              reputation; it success is grounded in dedication to its clients
              and paying attention to details.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We have the ability and resources to undertake total engineering
              product and services to the satisfaction of our clients.
            </p>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden w-full"
              style={{ height: "520px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                alt="Gree Iloson operations"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#1A2B6B" }}
              >
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  45
                </span>
              </div>
              <div>
                <p className="text-[#1A2B6B] font-bold text-sm">
                  Years of Excellence
                </p>
                <p className="text-gray-400 text-xs">
                  Est. 1979 · Akure, Nigeria
                </p>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "#C49A3C", opacity: 0.15 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
