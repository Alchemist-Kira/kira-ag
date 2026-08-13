"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RevealStagger, RevealItem } from "./ui/reveal";
import { 
  Check, 
  Clock, 
  ArrowsClockwise, 
  Headset,
  PaintBrush,
  Code,
  Lightning
} from "@phosphor-icons/react";

const plansData = [
  {
    id: "landing",
    title: "Landing Page",
    subtitle: "Choose what works for you",
    desc: "Every business needs a landing page, If you don't like the website we make, you will get a full refund.",
    features: [
      { text: "Dedicated project manager", type: "support" },
      { text: "Top-notch custom design", type: "check", dependsOn: "design" },
      { text: "Figma design & interactive prototype", type: "check", dependsOn: "design" },
      { text: "5 rounds of revisions", type: "refresh", dependsOn: "design" },
      { text: "Framer/Custom development", type: "check", dependsOn: "dev" },
      { text: "2 months of free tech support", type: "support", dependsOn: "dev" },
      { text: "Priority 5-day delivery", type: "Lightning", dependsOn: "fast" },
      { text: "Avg. 2 weeks turnaround", type: "time", dependsOn: "!fast" },
    ],
    toggles: [
      { id: "design", icon: "PaintBrush", title: "Design", desc: "Top-notch custom design", price: 300, defaultOn: true },
      { id: "dev", icon: "Code", title: "Development", desc: "Full development solution", price: 400, defaultOn: true },
      { id: "fast", icon: "Lightning", title: "Fast", desc: "Expedited priority delivery", price: 100, defaultOn: false },
    ],
    cta: "Start Your Project",
    category: "Design & Development",
    tier: "Standard"
  },
  {
    id: "lms",
    title: "LMS (Course Website)",
    subtitle: "Choose what works for you",
    desc: "Ready to launch your course? , we will build it for you. a LMS that is fast, reliable, and your student love to use. which eventually helps you to grow your community.",
    features: [
      { text: "Dedicated project manager", type: "support" },
      { text: "Student-focused design", type: "check", dependsOn: "design" },
      { text: "Figma design & interactive prototype", type: "check", dependsOn: "design" },
      { text: "15 rounds of revisions", type: "refresh", dependsOn: "design" },
      { text: "Custom development with Latest Tech", type: "check", dependsOn: "dev" },
      { text: "Student Website + Admin Dashboard", type: "check", dependsOn: "dev" },
      { text: "3 months of free tech support", type: "support", dependsOn: "dev" },
      { text: "Priority 4-week delivery", type: "Lightning", dependsOn: "fast" },
      { text: "Avg. 12 weeks turnaround", type: "time", dependsOn: "!fast" },
    ],
    toggles: [
      { id: "design", icon: "PaintBrush", title: "Design", desc: "Student focused Design", price: 1200, defaultOn: true },
      { id: "dev", icon: "Code", title: "Development", desc: "Full Code Development", price: 3000, defaultOn: true },
      { id: "fast", icon: "Lightning", title: "Fast", desc: "Expedited priority delivery", price: 200, defaultOn: false },
    ],
    cta: "Start Your Project",
    category: "Design & Development",
    tier: "Standard"
  }
];

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: Math.random(),
    size: [4, 5, 5, 6, 6, 8, 4, 5, 7, 4][i],
    x: (Math.random() * 20) - 10,
    y: 0,
    angle: -90 + (Math.random() * 50 - 25), // -90 is UP, with a 50 degree spread
    distance: 35 + Math.random() * 30,
  }));
}

const renderIcon = (type: string) => {
  switch(type) {
    case "time": return <Clock size={16} weight="bold" className="text-[#c1292e] shrink-0 mt-0.5" />;
    case "refresh": return <ArrowsClockwise size={16} weight="bold" className="text-[#c1292e] shrink-0 mt-0.5" />;
    case "support": return <Headset size={16} weight="bold" className="text-[#c1292e] shrink-0 mt-0.5" />;
    case "Lightning": return <Lightning size={16} weight="fill" className="text-[#c1292e] shrink-0 mt-0.5" />;
    case "check": default: return <Check size={16} weight="bold" className="text-[#c1292e] shrink-0 mt-0.5" />;
  }
};

const FeatureItem = ({ feature, animateIgnition }: { feature: any, animateIgnition: boolean }) => {
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const isFastFeature = feature.dependsOn === "fast" || feature.dependsOn === "!fast";

  // Pre-calculate ash particles for the exit animation on the client to avoid hydration errors
  const [ashParticles, setAshParticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!isFastFeature) {
      setAshParticles(Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: (Math.random() * 150) + 20, // Spread across the text width
        y: -(Math.random() * 25 + 10), // Float UP
      })));
    }
  }, []);

  React.useEffect(() => {
    if (animateIgnition) {
      setParticles(Array.from({ length: 12 }, (_, i) => ({
        id: Math.random(),
        size: [4, 6, 8, 5, 7, 4][i % 6],
        x: (Math.random() * 20) - 10,
        y: 10,
        angle: -90 + (Math.random() * 40 - 20),
        distance: 40 + Math.random() * 60,
      })));
    }
  }, [animateIgnition]);

  return (
    <motion.li 
      layout
      initial="initial"
      animate="animate"
      exit={isFastFeature ? { opacity: 0, display: "none", transition: { duration: 0 } } : "exit"}
      transition={{ layout: { type: "spring", stiffness: 800, damping: 40 } }}
      variants={{
        initial: { opacity: 0, x: -10, y: 0, scale: 0.95 },
        animate: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -10, scale: 0.95, filter: "blur(2px)", transition: { duration: 0.45, ease: "easeOut" } }
      }}
      className="flex items-start gap-3.5 text-[15px] font-medium text-gray-700 origin-left relative"
    >
      <motion.div 
        variants={{ exit: { opacity: 0, transition: { duration: 0.2 } } }} 
        className="relative z-10 mt-0.5"
      >
        {renderIcon(feature.type)}
      </motion.div>
      
      <motion.span 
        variants={{ exit: { opacity: 0, filter: "blur(4px)", transition: { duration: 0.2 } } }}
        className="leading-snug relative z-10"
      >
        {feature.text}
      </motion.span>

      {/* Ash Particles (only visible during exit) */}
      {!isFastFeature && (
        <span className="absolute inset-0 pointer-events-none z-20">
          {ashParticles.map((p) => (
            <motion.span
              key={p.id}
              custom={p}
              variants={{
                initial: { opacity: 0, x: p.x, y: 0, scale: 0 },
                animate: { opacity: 0, x: p.x, y: 0, scale: 0 },
                exit: (custom) => ({
                  opacity: [0, 1, 0],
                  x: custom.x + (Math.random() * 10 - 5),
                  y: custom.y,
                  scale: [0.5, 1, 0.2],
                  transition: { duration: 0.5, ease: "easeOut", delay: Math.random() * 0.1 }
                })
              }}
              className="absolute top-1/2 left-0 rounded-full bg-gray-400 mix-blend-multiply"
              style={{ width: p.size, height: p.size }}
            />
          ))}
        </span>
      )}

      {/* Ignition Particles */}
      {particles.length > 0 && (
        <span className="absolute left-2 top-1/2 pointer-events-none z-0 flex items-center justify-center">
          {particles.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * p.distance;
            const ty = Math.sin(rad) * p.distance;
            const bg = p.size > 5 ? 'bg-[#c1292e]' : 'bg-[#ff6a00]';
            return (
              <motion.span
                key={p.id}
                className={`absolute rounded-full ${bg}`}
                style={{ width: p.size, height: p.size }}
                initial={{ opacity: 1, scale: 0.5, x: p.x, y: p.y }}
                animate={{ opacity: 0, scale: 0, x: p.x + tx, y: p.y + ty }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            );
          })}
        </span>
      )}
    </motion.li>
  );
};

const PlanBlock = ({ plan, index }: { plan: typeof plansData[0], index: number }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => { setHasMounted(true); }, []);

  const [activeToggles, setActiveToggles] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    plan.toggles.forEach(t => initialState[t.id] = t.defaultOn);
    return initialState;
  });
  
  const [burstToggle, setBurstToggle] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  const isReversed = index % 2 !== 0;
  const activeCount = Object.values(activeToggles).filter(Boolean).length;
  const isAllOff = activeCount === 0;

  const toggleSwitch = (id: string) => {
    setActiveToggles(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      
      // Prevent turning fast on if both design and dev are off
      if (id === "fast" && newState.fast && !newState.design && !newState.dev) {
        return prev;
      }
      
      // Auto-turn off fast if both design and dev are turned off
      if (!newState.design && !newState.dev) {
        newState.fast = false;
      }
      
      return newState;
    });
    
    setParticles(generateParticles());
    setBurstToggle(id);
    setTimeout(() => setBurstToggle(null), 1200);
  };

  const currentPrice = plan.toggles.reduce((total, t) => {
    return total + (activeToggles[t.id] ? t.price : 0);
  }, 0);

  const visibleFeatures = plan.features.filter(f => {
    if (!f.dependsOn) return true;
    if (f.dependsOn.startsWith("!")) {
      return !activeToggles[f.dependsOn.substring(1)];
    }
    return activeToggles[f.dependsOn];
  });

  const renderToggleIcon = (iconStr: string, isOn: boolean) => {
    const color = isOn ? "text-[#c1292e]" : "text-gray-400";
    switch(iconStr) {
      case "PaintBrush": return <PaintBrush size={20} weight={isOn ? "fill" : "bold"} className={color} />;
      case "Code": return <Code size={20} weight={isOn ? "fill" : "bold"} className={color} />;
      case "Lightning": return <Lightning size={20} weight={isOn ? "fill" : "bold"} className={color} />;
      default: return null;
    }
  };

  return (
    <div className={`grid grid-cols-1 gap-8 lg:gap-16 items-stretch relative z-10 ${isReversed ? 'lg:grid-cols-[420px_1fr]' : 'lg:grid-cols-[1fr_420px]'}`}>
      {/* Left Column (or Right if reversed): Details & Toggles */}
      <div className={`flex flex-col ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="font-display text-4xl font-bold text-[#c1292e] mb-3 drop-shadow-sm">{plan.title}</h3>
        <h4 className="font-bold text-gray-800 text-xl mb-3">{plan.subtitle}</h4>
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
          {plan.desc}
        </p>

        <div className="flex flex-col gap-4">
          {plan.toggles.map((toggle) => {
            const isOn = activeToggles[toggle.id];
            const isDisabled = toggle.id === "fast" && !activeToggles.design && !activeToggles.dev;
            return (
              <div 
                key={toggle.id}
                onClick={() => { if (!isDisabled) toggleSwitch(toggle.id); }}
                className={`flex items-center justify-between p-4 rounded-[20px] transition-all duration-300 border ${
                  isDisabled ? "opacity-50 cursor-not-allowed grayscale" : "cursor-pointer"
                } ${
                  isOn 
                    ? "bg-white border-white shadow-[0_8px_24px_rgba(193,41,46,0.08),inset_0_2px_4px_rgba(255,255,255,1)]" 
                    : "bg-white/60 border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.02),inset_0_2px_4px_rgba(255,255,255,1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isOn ? 'bg-red-50 shadow-inner' : 'bg-gray-50'}`}>
                    {renderToggleIcon(toggle.icon, isOn)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[15px]">{toggle.title}</div>
                    <div className="text-xs text-gray-500 font-medium">{toggle.desc}</div>
                  </div>
                </div>
                
                {/* Hardware Ceramic Switch */}
                <div className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 shadow-inner ${isOn ? 'bg-[#c1292e] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]' : 'bg-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'}`}>
                  <motion.div 
                    layout
                    className="w-5 h-5 bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_-2px_2px_rgba(0,0,0,0.05)] relative z-10"
                    animate={{ x: isOn ? 28 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                  
                  {/* Fire Particles Burst */}
                  <AnimatePresence>
                    {burstToggle === toggle.id && (
                      <span className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                        {particles.map((p) => {
                          const rad = (p.angle * Math.PI) / 180;
                          const tx = Math.cos(rad) * p.distance;
                          const ty = Math.sin(rad) * p.distance;
                          const bg = p.size > 5 ? 'bg-[#c1292e]' : 'bg-[#ff6a00]';
                          return (
                            <motion.span
                              key={p.id}
                              className={`absolute rounded-full ${bg}`}
                              style={{ width: p.size, height: p.size }}
                              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                              animate={{ opacity: 0, scale: 1, x: tx, y: ty }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                            />
                          );
                        })}
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column (or Left if reversed): Pricing Card (Frosted White Glass) */}
      <div className={`w-full relative h-full flex flex-col ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="w-full h-full min-h-[640px] rounded-[40px] p-8 md:p-10 flex flex-col relative overflow-hidden bg-white/60 backdrop-blur-3xl border border-white shadow-[0_12px_48px_rgba(0,0,0,0.06),inset_0_2px_12px_rgba(255,255,255,0.8)] transition-all duration-500 transform-gpu will-change-transform">
          
          {isAllOff ? (
            <motion.div 
              key="all-off"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col h-full items-center justify-center text-center pt-8 pb-4"
            >
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 shadow-inner">
                <PaintBrush size={32} weight="duotone" className="text-[#c1292e]" />
              </div>
              <h4 className="text-3xl font-display font-bold text-gray-900 mb-4 tracking-tight">Need Something Custom?</h4>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-[280px]">
                It looks like our standard options aren't quite what you're looking for. Tell us what you need and we'll craft a custom solution just for you.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key="pricing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col flex-grow"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-gray-500">{plan.category}</span>
                  <span className="text-[10px] font-bold text-white bg-gradient-to-r from-red-600 to-[#c1292e] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    {plan.tier}
                  </span>
                </div>
                
                <div className="text-6xl font-display font-black tracking-tighter flex items-center justify-center gradient-text drop-shadow-sm pb-1">
                  $<motion.span
                    key={currentPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block"
                  >
                    {currentPrice.toLocaleString()}
                  </motion.span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-12 mt-2">
                <AnimatePresence mode="popLayout">
                  {visibleFeatures.map((feature) => (
                    <FeatureItem key={feature.text} feature={feature} animateIgnition={hasMounted} />
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          )}

          <div className="mt-auto relative z-20 group">
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center font-bold rounded-2xl cursor-pointer text-base md:text-lg px-6 py-5 bg-gray-900 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-black hover:shadow-xl"
            >
              {isAllOff ? "Book a Consultation" : plan.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Pricing() {
  return (
    <section className="text-gray-900 w-full py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden" id="pricing">
      {/* High-End Holographic Silver Ambient Orbs (Optimized with hardware-accelerated gradients instead of expensive CSS blurs) */}
      <div className="absolute top-[-100px] left-[-100px] w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-multiply opacity-60 transform-gpu" style={{ background: 'radial-gradient(circle, rgba(219, 234, 254, 0.4) 0%, transparent 60%)', willChange: 'transform' }}></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[1000px] h-[1000px] rounded-full pointer-events-none mix-blend-multiply opacity-50 transform-gpu" style={{ background: 'radial-gradient(circle, rgba(237, 233, 254, 0.4) 0%, transparent 60%)', willChange: 'transform' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none transform-gpu" style={{ background: 'radial-gradient(ellipse, rgba(226, 232, 240, 0.5) 0%, transparent 60%)', willChange: 'transform' }}></div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        <RevealStagger className="flex flex-col items-center text-center mb-28">
          <RevealItem>
            <div className="inline-block px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">
              Pricing
            </div>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
              Pricing Plans
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              For each plan we <span className="text-[#c1292e] font-bold">Outperform</span> the competition in quality and service.
            </p>
          </RevealItem>
        </RevealStagger>

        <RevealStagger className="flex flex-col gap-32">
          {plansData.map((plan, index) => (
            <RevealItem key={plan.id}>
              <PlanBlock plan={plan} index={index} />
            </RevealItem>
          ))}
        </RevealStagger>

      </div>
    </section>
  );
}
