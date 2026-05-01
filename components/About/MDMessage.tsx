"use client";

export default function MDMessage() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative order-2 lg:order-1">
            {/* Main image */}
            <div
              className="rounded-3xl overflow-hidden w-full"
              style={{ height: "560px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
                alt="Chinedu Ilo - Managing Director"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating name card — bottom right */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#C49A3C] rounded-2xl px-6 py-5 shadow-xl">
              <p
                className="text-white font-bold text-base leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Chinedu Ilo
              </p>
              <p className="text-white/70 text-xs mt-1 tracking-wide uppercase">
                Managing Director
              </p>
            </div>

            {/* Decorative navy square — top left behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#1A2B6B]/10 -z-10" />
          </div>

          {/* Right — Message */}
          <div className="order-1 lg:order-2">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                MD&apos;s Message
              </span>
            </div>

            {/* Section title */}
            <h2
              className="text-[#1A2B6B] font-bold leading-tight mb-8"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Purpose Beyond <br />
              Profit.
            </h2>

            {/* Big pull quote */}
            <div className="relative border-l-4 border-[#C49A3C] pl-6 mb-8">
              <span
                className="absolute -top-4 -left-2 text-[#C49A3C] opacity-30 select-none"
                style={{ fontSize: "5rem", fontFamily: "serif", lineHeight: 1 }}
              >
                &ldquo;
              </span>
              <p
                className="text-[#1A2B6B] font-semibold text-base sm:text-lg leading-relaxed italic relative z-10"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                We believe a business is not successful if it is only committed
                to profit. It has to be an activity that creates prosperity and
                well-being for all those who are connected with it directly or
                indirectly. Profit is only a by-product reflecting how well we
                are carrying out the business activity.
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed">
              <p>
                Our commitment, firstly, is to the customers we serve — we are
                in business for them. As a company in building materials,
                haulage and construction, it is our aim to bring our customers
                quality products that are reliable and best suited to their job
                requirements.
              </p>
              <p>
                We ensure that the product gives our customers the kind of
                performance and productivity that enables them to realize the
                full value of money paid. Our relationship with customers does
                not end with a sale — that is only where the journey starts.
              </p>
              <p>
                I believe the journey of GIGC is never ending. With the support
                of my team and clients, I am confident that the company will
                continue to scale milestones of excellence for years to come.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A2B6B] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                CI
              </div>
              <div>
                <p className="text-[#1A2B6B] font-bold text-sm">Chinedu Ilo</p>
                <p className="text-gray-400 text-xs tracking-wide">
                  Managing Director, Gree Iloson Group of Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
