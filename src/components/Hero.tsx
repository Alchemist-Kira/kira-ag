"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { RevealStagger, RevealItem } from "./ui/reveal";

const MotionImage = motion.create(Image);

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden pt-32 pb-16 flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Zen Architecture"
          fill
          priority
          className="object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-canvas)] via-[var(--color-canvas)]/90 to-transparent"></div>
      </div>

      {/* Background organic shapes with float animation */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-30 mix-blend-multiply pointer-events-none z-0 transform-gpu will-change-transform">
        <svg viewBox="0 0 800 800" className="w-full h-full object-cover" style={{ animation: reduce ? 'none' : 'float 20s ease-in-out infinite', willChange: 'transform' }}>
          <path d="M421.5,654.5C538.2,654.5,650,566.2,650,421.5C650,276.8,538.2,188.5,421.5,188.5C304.8,188.5,193,276.8,193,421.5C193,566.2,304.8,654.5,421.5,654.5Z" fill="var(--color-river)" />
        </svg>
      </div>
      <div className="absolute top-[10%] right-[10%] w-[40%] h-[60%] opacity-15 mix-blend-multiply pointer-events-none z-0 transform-gpu will-change-transform">
        <svg viewBox="0 0 800 800" className="w-full h-full" style={{ animation: reduce ? 'none' : 'float-reverse 25s ease-in-out infinite', willChange: 'transform' }}>
          <path d="M375,615C471.6,615,550,536.6,550,440C550,343.4,471.6,265,375,265C278.4,265,200,343.4,200,440C200,536.6,278.4,615,375,615Z" fill="var(--color-terracotta)" />
        </svg>
      </div>

      {/* Decorative spinning star element (Ported from Bijaya Portfolio) */}
      <div className="absolute bottom-[5%] sm:bottom-[10%] md:bottom-[20%] left-[5%] md:left-[10%] opacity-20 pointer-events-none z-0 animate-spin-slow transform-gpu will-change-transform">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-terracotta)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ willChange: 'transform' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <RevealStagger className="max-w-3xl fast-mobile-reveal">
            {/* Social Proof Badge */}
            <RevealItem>
              <motion.div
                className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-2 pr-6 inline-flex items-center space-x-4 mb-8 border border-white"
                whileHover={reduce ? undefined : { scale: 1.02 }}
              >
                <div className="flex -space-x-3">
                  {["32", "12", "47"].map((id, i) => (
                    <MotionImage
                      key={id}
                      src={`https://i.pravatar.cc/150?img=${id}`}
                      alt="Founder"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm relative object-cover"
                      style={{ zIndex: 3 - i }}
                      whileHover={reduce ? undefined : { y: -4, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-terracotta)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-crimson)]"></span>
                  </span>
                  <span className="text-[var(--color-stone)] text-sm font-medium">48+ startups & founders chose us</span>
                </div>
              </motion.div>
            </RevealItem>

            {/* Headline with gradient text */}
            <RevealItem>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 gradient-text">
                Design that <span className="font-accent font-normal italic text-[var(--color-crimson)] pr-2 text-6xl md:text-7xl lg:text-8xl align-middle">flows</span>. Software that performs.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg md:text-xl text-[var(--color-stone)] leading-relaxed mb-10 max-w-[40ch]">
                We build premium web experiences that blend intuitive design with high-performance engineering.
              </p>
            </RevealItem>

            {/* CTA with racdox-style layered inset glow */}
            <RevealItem>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center font-medium gap-2 text-base md:text-lg rounded-[17px] px-8 py-4 text-white bg-[var(--color-ink)] relative overflow-hidden hover:scale-[1.02] transition-transform active:scale-95 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(217,108,78,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:animate-[shine_3s_linear_infinite]"
                  style={{
                    boxShadow: `
                      rgba(193, 41, 46, 0.7) 0px -2px 1.1px -1.25px inset,
                      rgba(193, 41, 46, 0.5) 0px -4.4px 3.4px -2.5px inset,
                      rgba(193, 41, 46, 0.3) 0px -10px 8.9px -3.75px inset,
                      rgba(255, 255, 255, 0.1) 0px 0.6px 0.6px -1.25px inset,
                      rgba(0, 0, 0, 0.6) 0px 2px 0px 0px,
                      rgba(0, 0, 0, 0.4) 0px 35px 43px 0px,
                      rgba(0, 0, 0, 0.6) 0px 6px 12px 0px
                    `
                  }}
                >
                  <span className="relative z-10">Get in touch</span>
                </a>
                <span className="text-[var(--color-stone)] text-sm font-medium flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-terracotta)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-crimson)]"></span>
                  </span>
                  Taking projects for <span className="font-accent italic text-[var(--color-crimson)] text-2xl ml-1">Q4</span>
                </span>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
