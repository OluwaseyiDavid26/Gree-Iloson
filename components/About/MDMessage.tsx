"use client";

export default function MDMessage() {
  return (
    <section className="bg-white w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-3xl overflow-hidden w-full"
              style={{ height: "560px" }}
            >
              <img
                src="/chinedu-ilo.jpeg"
                alt="Chinedu Ilo - Managing Director"
                className="w-full h-full object-cover object-top"
              />
            </div>
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
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#1A2B6B]/10 -z-10" />
          </div>

          {/* Right — Message */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
              <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                MD&apos;s Message
              </span>
            </div>

            <h2
              className="text-[#1A2B6B] font-bold leading-tight mb-8"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Purpose Beyond <br /> Profit.
            </h2>

            <div className="relative border-l-4 border-[#C49A3C] pl-6 mb-8">
              {/* <span
                className="absolute -top-4 -left-2 text-[#C49A3C] opacity-30 select-none"
                style={{ fontSize: "5rem", fontFamily: "serif", lineHeight: 1 }}
              >
                &ldquo;
              </span> */}
              <p
                className="text-[#1A2B6B] font-semibold text-base sm:text-lg leading-relaxed italic relative z-10"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                We believe a business is not successful if it is only committed
                to profit. It has to be an activity that creates prosperity and
                well-being for all those who are connected with it directly or
                indirectly. Profit is only a by-product reflecting how well we
                are carrying out the business activity. We believe in the
                ideology of purpose beyond profit.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed">
              <p>
                Our commitment, firstly, is to the Customers we serve as we are
                in business for them. As a Company in building materials (steel
                and cement), haulage and construction, it is our aim to bring
                our Customers quality products that are reliable and best suited
                to our Customers&apos; job requirements. Subsequently, we ensure
                that the product gives the Customers the kind of performance and
                productivity that will enable our Customers to realize the full
                value of the money paid. Our relationship with the Customers
                does not end with a sale but a journey to starts with it. We can
                say that the years we experienced in the past are significant
                years and it is clearly seen that we intensively deliver our
                best performance to focus on customer satisfaction.
              </p>
              <p>
                On behalf of the Board of Directors, I will like to thank our
                Valuable customers, reliable dealers and suppliers. Besides, I
                will also thank the staffs for their enthusiastic contribution
                for applying their specialized knowledge to reliably producing a
                high quality efficient working environment. They have clearly
                made GIGC one of the outstanding organizations.
              </p>
              <p>
                In addition, we are now in an ever-changing market environment,
                in such situation we firmly believe in that &quot;trust&quot; is
                key in persuading our customers to choose our quality products.
                We totally accept that &quot;trust&quot; is a &quot;Win-Win
                situation&quot; for a long relationship. I believe the journey
                of GIGC is never ending with the support of my team and clients,
                I am confident that the company will continue to scale
                milestones of excellence for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
