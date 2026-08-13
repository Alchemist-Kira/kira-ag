"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealStagger, RevealItem } from "./ui/reveal";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";

const projects = [
  { 
    id: 1, 
    title: "Nova SaaS Platform", 
    subtitle: "Enterprise Web Architecture",
    tags: ["Next.js", "UX/UI", "Dashboard"],
    year: "2024",
    role: "Full-Stack Dev",
    img: "", // Replaced by SVGs
    desc: "A high-performance enterprise dashboard engineered for complex data visualization and seamless scalability.",
    theme: "light",
    accent: "var(--color-crimson)"
  },
  { 
    id: 2, 
    title: "Aura Financial", 
    subtitle: "Digital Banking Platform",
    tags: ["Fintech", "React", "Security"],
    year: "2024",
    role: "Lead Engineer",
    img: "",
    desc: "A complete overhaul of a legacy financial platform, featuring real-time data syncing and a modern, trusted aesthetic.",
    theme: "dark",
    accent: "var(--color-charcoal)"
  },
  { 
    id: 3, 
    title: "Nexus Commerce", 
    subtitle: "High-Volume E-Commerce",
    tags: ["Headless", "Next.js", "Shopify"],
    year: "2024",
    role: "Frontend Dev",
    img: "",
    desc: "A lightning-fast headless e-commerce architecture designed to handle thousands of concurrent users and maximize conversions.",
    theme: "light",
    accent: "var(--color-navy)"
  },
  { 
    id: 4, 
    title: "Epoch Digital", 
    subtitle: "Motion-First Experience",
    tags: ["GSAP", "Three.js", "Creative Dev"],
    year: "2025",
    role: "Design + Dev",
    img: "",
    desc: "An award-winning, scroll-driven narrative website for a disruptive tech startup. Built to push the browser to its absolute limits.",
    theme: "dark",
    accent: "var(--color-terracotta)"
  },
];

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      // Desktop
      mm.add("(min-width: 1024px)", () => {
        const wrappers = gsap.utils.toArray<HTMLElement>(".proj-card-wrapper");
        
        wrappers.forEach((wrapper, i) => {
          if (i === wrappers.length - 1) return;

          const rotationAngle = i % 2 === 0 ? -4 : 4;

          gsap.to(wrapper.querySelector(".proj-card-inner"), {
            scale: 0.92,
            rotationZ: rotationAngle,
            filter: "blur(4px)",
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: wrappers[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: 0.5,
            },
          });
        });
      });

      // Mobile
      mm.add("(max-width: 1023px)", () => {
        const wrappers = gsap.utils.toArray<HTMLElement>(".proj-card-wrapper");
        
        wrappers.forEach((wrapper, i) => {
          if (i === wrappers.length - 1) return;

          const rotationAngle = i % 2 === 0 ? -2 : 2;

          gsap.to(wrapper.querySelector(".proj-card-inner"), {
            scale: 0.95,
            rotationZ: rotationAngle,
            filter: "blur(3px)",
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: wrappers[i + 1],
              start: "top 80%", // Delay the start so user can read
              end: "top 10%",
              scrub: 0.5,
            },
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          #works { margin-bottom: -40vh; }
        }
      `}</style>
      <section className="w-full pt-32 pb-0 lg:pb-32 px-6 lg:px-12 relative" id="works" style={{ zIndex: 1, isolation: 'isolate' }}>
      <div className="max-w-[1400px] mx-auto mb-24">
        <RevealStagger className="flex flex-col items-center text-center">
          <RevealItem>
            <h4 className="mb-4 text-sm font-bold text-[var(--color-stone)] tracking-[0.2em] uppercase">03 / Case Studies</h4>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
              Digital Products That Scale.
            </h2>
          </RevealItem>
        </RevealStagger>
      </div>

      <div className="max-w-[1400px] mx-auto relative pb-0 lg:pb-32" ref={containerRef}>
        <div className="relative pb-[40vh] lg:pb-[10vh]">
          {projects.map((p, i) => (
            <div 
              key={p.id}
              className={`proj-card-wrapper sticky pt-8 pb-8 lg:pb-0 top-[var(--card-top-mobile)] lg:top-[var(--card-top-desktop)] mb-[40vh]`}
              style={{ 
                '--card-top-mobile': `calc(25vh + ${i * 15}px)`,
                '--card-top-desktop': `calc(120px + ${i * 30}px)`,
                zIndex: 10 + i 
              } as React.CSSProperties} 
            >
              <div 
                className={`proj-card-inner group origin-top relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl transition-[background-color,color] duration-500 lg:min-h-[600px] xl:min-h-[700px]
                  ${p.theme === 'dark' ? 'bg-[var(--color-ink)] text-white' : 'bg-white text-[var(--color-ink)]'}`}
                style={{ willChange: "transform, filter" }}
              >
                {/* Visual Background Blended */}
                <div 
                  className="absolute top-0 right-0 w-full md:w-[65%] lg:w-[60%] h-full z-0 pointer-events-none overflow-hidden"
                  style={{ 
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 35%)',
                    maskImage: 'linear-gradient(to right, transparent, black 35%)',
                  }}
                >
                  <div className="w-full h-full relative transition-transform duration-1000 group-hover:scale-105" style={{ color: p.accent }}>
                    {p.id === 1 && (
                      <img 
                        src="/530791506104478198.jpg" 
                        alt={p.title} 
                        className="w-full h-full object-cover opacity-90" 
                      />
                    )}
                    {p.id === 2 && (
                      <img 
                        src="/aura-financial.png" 
                        alt={p.title} 
                        className="w-full h-full object-cover opacity-20" 
                      />
                    )}
                    {p.id === 3 && (
                      <div className="w-full h-full flex items-center justify-center bg-[var(--color-navy)]/5">
                        <svg viewBox="0 0 200 200" className="w-full max-w-[600px] h-full opacity-30 drop-shadow-2xl">
                          <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                          <rect x="50" y="50" width="100" height="100" fill="currentColor" opacity="0.1"></rect>
                          <rect x="75" y="75" width="50" height="50" fill="currentColor"></rect>
                          <rect x="38" y="38" width="4" height="4" fill="currentColor"></rect>
                          <rect x="158" y="38" width="4" height="4" fill="currentColor"></rect>
                          <rect x="38" y="158" width="4" height="4" fill="currentColor"></rect>
                          <rect x="158" y="158" width="4" height="4" fill="currentColor"></rect>
                        </svg>
                      </div>
                    )}
                    {p.id === 4 && (
                      <div className="w-full h-full flex items-center justify-center bg-[var(--color-terracotta)]/10">
                        <svg viewBox="0 0 200 200" className="w-full max-w-[600px] h-full opacity-30 drop-shadow-2xl">
                          <path d="M40 180 L40 100 Q40 20 100 20 Q160 20 160 100 L160 180" fill="none" stroke="currentColor" strokeWidth="2"></path>
                          <path d="M70 180 L70 110 Q70 50 100 50 Q130 50 130 110 L130 180" fill="currentColor" opacity="0.12"></path>
                          <line x1="20" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="2"></line>
                        </svg>
                      </div>
                    )}
                    {/* Giant Number BG */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[10rem] sm:text-[15rem] lg:text-[25rem] font-black opacity-[0.04] pointer-events-none select-none">0{p.id}</span>
                  </div>
                </div>

                {/* Inner content */}
                <div className="flex flex-row flex-grow py-6 px-4 md:p-8 lg:p-12 gap-3 md:gap-8 lg:gap-12 relative z-10">
                  
                  {/* Col 1: Meta */}
                  <div className="w-[30%] lg:w-[25%] flex flex-col border-r border-current pr-3 md:pr-6 lg:pr-8 opacity-80" style={{ borderColor: 'currentColor' }}>
                    <span className="font-display text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 lg:mb-8">0{p.id}</span>
                    
                    <div className="flex flex-wrap gap-1 lg:gap-2 mb-4 lg:mb-12">
                      {p.tags.map(t => (
                        <span key={t} className="text-[0.55rem] md:text-[0.65rem] lg:text-sm uppercase tracking-widest border border-current px-1.5 py-0.5 lg:px-4 lg:py-2 rounded-full opacity-80">{t}</span>
                      ))}
                    </div>
                    
                    <div className="mt-auto hidden sm:block">
                      <div className="flex justify-between py-2 lg:py-4 border-t border-current/30 text-[0.6rem] lg:text-sm">
                        <span className="uppercase tracking-widest opacity-60 text-[0.5rem] lg:text-xs">Year</span>
                        <span className="font-medium">{p.year}</span>
                      </div>
                      <div className="flex justify-between py-2 lg:py-4 border-t border-current/30 text-[0.6rem] lg:text-sm">
                        <span className="uppercase tracking-widest opacity-60 text-[0.5rem] lg:text-xs">Role</span>
                        <span className="font-medium text-right">{p.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Col 2: Main */}
                  <div className="w-[60%] lg:w-[50%] flex flex-col justify-center">
                    <p className="text-[0.55rem] lg:text-base uppercase tracking-widest mb-1 md:mb-2 lg:mb-4 font-bold" style={{ color: p.theme === 'dark' ? p.accent : 'var(--color-terracotta)' }}>{p.subtitle}</p>
                    <h3 className="font-display text-xl sm:text-3xl md:text-5xl lg:text-[6rem] font-bold mb-2 md:mb-4 lg:mb-8 tracking-tight leading-[0.95]">{p.title}</h3>
                    <p className="text-[0.65rem] sm:text-sm md:text-base lg:text-2xl opacity-80 leading-relaxed max-w-xl mb-4 md:mb-8 lg:mb-14 font-medium line-clamp-4 lg:line-clamp-none">{p.desc}</p>
                    <a href="#" className="inline-flex items-center gap-1 md:gap-3 font-bold uppercase tracking-widest text-[0.6rem] md:text-sm lg:text-base hover:gap-3 lg:hover:gap-6 transition-all w-fit">
                      <span>View Case Study</span> <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" weight="bold" />
                    </a>
                  </div>

                </div>

                {/* Footer */}
                <div className="h-[32px] sm:h-[48px] lg:h-[72px] shrink-0 border-t border-current/10 flex items-center px-4 lg:px-12 justify-between">
                  <span className="text-[0.5rem] sm:text-[0.6rem] lg:text-xs uppercase tracking-widest font-bold opacity-60">Project 0{p.id} / 0{projects.length}</span>
                  <div className="w-1/2 lg:w-[35%] h-[2px]" style={{ backgroundColor: p.theme === 'dark' ? p.accent : 'var(--color-crimson)' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
