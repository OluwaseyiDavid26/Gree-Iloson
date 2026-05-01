"use client";
import { useState } from "react";
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#1A2B6B] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">GI</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-bold text-[#1A2B6B] text-xs tracking-widest uppercase">
              Gree Iloson
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider uppercase">
              Group of Companies
            </span>
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
            Contact Us <span>↗</span>
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
