"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-5 left-0 right-0 z-50 mt-4 flex justify-center px-5">
      <nav className="w-full max-w-5xl bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center justify-between">
        {/* Logo — sized to stand alone now that the text label is removed, no clipping */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative h-11 w-32 sm:h-14 sm:w-40">
            <Image
              src="/gree-logo.jpg"
              alt="Gree Iloson Group of Companies logo"
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    pathname === link.href
                      ? "text-[#C49A3C] font-semibold"
                      : "text-gray-600 hover:text-[#1A2B6B] hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#1A2B6B] hover:bg-[#152259] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A2B6B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-5 right-5 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  pathname === link.href
                    ? "bg-[#1A2B6B] text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#1A2B6B] text-white text-sm font-semibold px-4 py-3 rounded-xl text-center"
          >
            Contact Us ↗
          </Link>
        </div>
      )}
    </div>
  );
}
