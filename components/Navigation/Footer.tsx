"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B6B] w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 pt-16 pb-8">
        {/* Main 3-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
          {/* Col 1 — Tagline + CTA */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1A2B6B] font-bold text-sm">GI</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-widest uppercase">
                    Gree Iloson
                  </p>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">
                    Group of Companies
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Quality construction materials and engineering services.
                Building Nigeria&apos;s future since 1979.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C49A3C] hover:bg-[#b08a32] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-fit"
            >
              <span className="text-base">✦</span> GET A QUOTE
            </Link>
          </div>

          {/* Col 2 — Empty / vertical divider */}
          <div className="hidden lg:flex justify-center">
            <div className="w-px bg-white/10 h-full" />
          </div>

          {/* Col 3 — Contact info + socials */}
          <div className="flex flex-col justify-between gap-8">
            {/* Contact list */}
            <div className="flex flex-col gap-5">
              {/* Email */}
              <Link
                href="mailto:info@greeiloson.com"
                className="flex items-center justify-between group"
              >
                <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
                  info@greeiloson.com
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#C49A3C] text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </Link>

              {/* Phone */}
              <Link
                href="tel:"
                className="flex items-center justify-between group"
              >
                <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
                  +234 — (add number)
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#C49A3C] text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
              </Link>

              {/* Location */}
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="flex items-center justify-between group"
              >
                <span className="text-white/60 group-hover:text-white text-sm transition-colors duration-200">
                  28B, Ondo Road, Akure, Ondo State.
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#C49A3C] text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C49A3C] text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs uppercase tracking-wide">
            © {new Date().getFullYear()} Gree Iloson Group of Companies.
          </p>
          <p className="text-white/20 text-xs">
            Est. 1979 · Akure, Ondo State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
