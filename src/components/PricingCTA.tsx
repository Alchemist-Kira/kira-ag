"use client";
import { useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { RevealStagger, RevealItem } from "./ui/reveal";

export function PricingCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-[var(--color-charcoal)] py-32 px-6 lg:px-12 flex items-center justify-center relative overflow-hidden">
      {/* Decorative pulsing ring (racdox pattern 11.1) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-[var(--color-crimson)]/20 pointer-events-none"
        style={{ animation: reduce ? 'none' : 'ring-pulse 6s ease-in-out infinite' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-crimson)]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <RevealStagger>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Ready to build something extraordinary?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
              Get in touch to discuss your next project. We are currently accepting new clients for Q4.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-col items-center gap-4">
              {/* CTA with shine sweep */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-medium gap-2 text-lg rounded-full px-10 h-16 text-white bg-[var(--color-crimson)] shadow-[0_0_30px_rgba(193,41,46,0.4)] hover:shadow-[0_0_40px_rgba(193,41,46,0.6)] hover:bg-[var(--color-terracotta)] transition-[background-color,box-shadow,transform] duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:animate-[shine_3s_linear_infinite]"
              >
                <span className="relative z-10">Contact us</span>
              </a>
              {/* Live availability dot */}
              <span className="text-white/50 text-sm flex items-center gap-2 mt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-terracotta)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-crimson)]"></span>
                </span>
                Currently accepting new clients
              </span>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
