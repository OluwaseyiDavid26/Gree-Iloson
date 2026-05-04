"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    desc: "Across steel supply, cement distribution, haulage and engineering",
    accent: "#C49A3C",
  },
  {
    value: 45,
    suffix: "+",
    label: "Years of Excellence",
    desc: "Founded in 1979 — over four decades of trusted service in Nigeria",
    accent: "#1A2B6B",
  },
  {
    value: 6,
    suffix: "+",
    label: "Trusted Partners",
    desc: "Government bodies, universities, hotels and construction firms",
    accent: "#C49A3C",
  },
  {
    value: 36,
    suffix: "",
    label: "States Served",
    desc: "Nationwide reach — delivering quality to every corner of Nigeria",
    accent: "#1A2B6B",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-14 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Full width navy card */}
        <div className="relative rounded-3xl bg-[#1A2B6B] overflow-hidden px-8 sm:px-16 py-16">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-[#C49A3C]/10 pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                <span className="text-[#C49A3C] text-xs font-bold tracking-[0.2em] uppercase">
                  Our Impact
                </span>
              </div>
              <h2
                className="text-white font-bold leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Numbers That <br />
                Tell Our Story.
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs sm:text-right">
              Over 45 years of dedication has produced results that speak for
              themselves.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[#1A2B6B] hover:bg-white/5 transition-all duration-300 p-8 flex flex-col gap-4 group"
              >
                {/* Counter */}
                <div
                  className="font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 5vw, 4rem)",
                    fontFamily: "var(--font-playfair), serif",
                    color: s.accent,
                  }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </div>

                {/* Thin line */}
                <div
                  className="w-8 h-px transition-all duration-300 group-hover:w-14"
                  style={{ background: s.accent }}
                />

                {/* Label */}
                <p className="text-white font-semibold text-sm">{s.label}</p>

                {/* Desc */}
                <p className="text-white/40 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
