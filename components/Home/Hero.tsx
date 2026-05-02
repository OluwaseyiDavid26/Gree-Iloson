"use client";

export default function Hero() {
  return (
    <section className="bg-white w-full px-3 sm:px-4 pt-3 pb-6">
      {/* Rounded image card */}
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{ height: "88vh", minHeight: "580px", maxHeight: "780px" }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Top right — supporting text + icons — now visible on ALL screens */}
        <div className="absolute top-24 right-5 sm:right-12 max-w-[200px] sm:max-w-xs text-right">
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
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom left — headline */}
        <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
            <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
              Est. 1979 · Akure, Nigeria
            </span>
          </div>
          <h1
            className="text-white font-bold leading-[1.05]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Quality Materials,
            <br />
            <span className="italic text-[#C49A3C]">Trusted Engineering,</span>
            <br />
            Built for Nigeria.
          </h1>
        </div>
      </div>

      {/* STATS — below card on white bg */}
    </section>
  );
}
