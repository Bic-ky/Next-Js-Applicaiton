"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <span className="inline-block h-8 w-8 rounded-full bg-black" />
            Reynolds Clinic
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/doctors" className="hover:text-blue-600">Doctors</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            <Link
              href="/book"
              className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/doctors" className="block py-2">Doctors</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
            <Link
              href="/book"
              className="inline-block mt-2 rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
