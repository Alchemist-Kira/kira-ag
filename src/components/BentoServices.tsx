"use client";
import { RevealStagger, RevealItem } from "./ui/reveal";
import { MonitorPlay, Palette, Code, ChartLineUp } from "@phosphor-icons/react";
import { GooeyIcon } from "./ui/GooeyIcon";

const capabilities = [
  {
    title: "Digital Products",
    desc: "Immersive web applications and platforms engineered for scale and speed.",
    icon: <MonitorPlay weight="fill" />,
    borderColor: "border-[var(--color-navy)]/30",
    shadowColor: "bg-[var(--color-navy)]/10",
    iconBgColor: "bg-[var(--color-navy)]",
    textColor: "text-[var(--color-navy)]",
  },
  {
    title: "Brand Identity",
    desc: "Visual systems that communicate trust and premium quality.",
    icon: <Palette weight="fill" />,
    borderColor: "border-[var(--color-crimson)]/30",
    shadowColor: "bg-[var(--color-crimson)]/10",
    iconBgColor: "bg-[var(--color-crimson)]",
    textColor: "text-[var(--color-crimson)]",
  },
  {
    title: "Performance",
    desc: "Sub-second page loads and optimized server-side rendering architecture.",
    icon: <Code weight="bold" />,
    borderColor: "border-[var(--color-terracotta)]/30",
    shadowColor: "bg-[var(--color-terracotta)]/10",
    iconBgColor: "bg-[var(--color-terracotta)]",
    textColor: "text-[var(--color-terracotta)]",
  },
  {
    title: "Conversion UI",
    desc: "Design systems and user interfaces focused on driving user action.",
    icon: <ChartLineUp weight="fill" />,
    borderColor: "border-[var(--color-charcoal)]/30",
    shadowColor: "bg-[var(--color-charcoal)]/10",
    iconBgColor: "bg-[var(--color-charcoal)]",
    textColor: "text-[var(--color-charcoal)]",
  }
];

export function BentoServices() {
  return (
    <section className="w-full py-32 px-6 lg:px-12" id="services">
      <div className="max-w-[1400px] mx-auto">
        <RevealStagger className="mb-20 max-w-2xl text-center mx-auto">
          <RevealItem>
            <h4 className="text-center mb-4 text-sm font-bold text-[var(--color-stone)] tracking-[0.2em] uppercase">01 / Our Expertise</h4>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">Capabilities</h2>
          </RevealItem>
          <RevealItem>
            <p className="text-[var(--color-stone)] text-lg leading-relaxed">
              End-to-end digital product creation, from first sketch to final deployment. Using modern technologies, we create clean designs, optimize performance, and ensure premium experiences.
            </p>
          </RevealItem>
        </RevealStagger>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <RevealItem key={i} className="h-full">
              <div className="relative group w-full h-full">
                {/* Dynamic Shadow Background (Ported from Bijaya Portfolio) */}
                <div
                  className={`absolute inset-0 rounded-2xl transform translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 ${cap.shadowColor}`}
                  aria-hidden
                />

                {/* Main Card */}
                <div className={`relative h-full z-10 bg-white border-2 rounded-2xl p-8 transition-all duration-300 flex flex-col group-hover:-translate-y-1 group-hover:-translate-x-1 ${cap.borderColor}`}>
                  
                  <GooeyIcon 
                    icon={cap.icon} 
                    className={`w-16 h-16 bg-white shrink-0 mb-8 border-2 ${cap.borderColor}`}
                    colorClass={`${cap.textColor} group-hover:text-white transition-colors duration-700`}
                    bgColorClass={cap.iconBgColor}
                  />
                  
                  <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-3">{cap.title}</h3>
                  <p className="text-[var(--color-stone)] leading-relaxed flex-grow">{cap.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
