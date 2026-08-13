"use client";
import Link from "next/link";
import { RevealStagger, RevealItem } from "./ui/reveal";

export function Footer() {
  return (
    <footer className="w-full pt-40 pb-12 px-6 lg:px-12 relative text-[var(--color-ink)]">
      <div className="max-w-[1400px] mx-auto">

        {/* Massive CTA */}
        <div className="mb-32">
          <RevealStagger>
            <RevealItem>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="gradient-text">LET'S BUILD SOMETHING</span> <span className="block font-accent font-normal italic text-[var(--color-crimson)]">Extraordinary.</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <a href="mailto:hello@zenith.agency" className="inline-block mt-12 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight hover:text-[var(--color-crimson)] transition-colors duration-500">
                hello@zenith.agency ↗
              </a>
            </RevealItem>
          </RevealStagger>
        </div>

        {/* Links & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-[var(--color-ink)]/10">
          <div className="flex flex-col">
            <span className="font-bold text-xs uppercase tracking-[0.2em] opacity-50 mb-6">Navigation</span>
            <div className="flex flex-wrap gap-8 font-medium">
              <Link href="#works" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Works</Link>
              <Link href="#services" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Services</Link>
              <Link href="#process" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Process</Link>
              <Link href="#faq" className="hover:text-[var(--color-crimson)] transition-colors duration-300">FAQ</Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="font-bold text-xs uppercase tracking-[0.2em] opacity-50 mb-6">Socials</span>
            <div className="flex flex-wrap gap-8 font-medium">
              <a href="#" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Twitter (X)</a>
              <a href="#" className="hover:text-[var(--color-crimson)] transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-[var(--color-crimson)] transition-colors duration-300">Dribbble</a>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 text-xs font-bold uppercase tracking-widest opacity-50">
          <p className="mb-4 md:mb-0">© 2026 ZENITH DIGITAL. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR PERFORMANCE</p>
        </div>
      </div>
    </footer>
  );
}
