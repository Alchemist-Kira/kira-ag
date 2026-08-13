"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { Target, Lightbulb, FigmaLogo, Code, RocketLaunch, ArrowRight, CheckCircle, Clock } from '@phosphor-icons/react';

const timelineData = [
  {
    id: '01',
    phase: 'Discovery',
    title: 'Research & Strategy',
    duration: '2-3 Weeks',
    description: 'We don’t guess; we know. We dive deep into your market, analyze competitors, and map out user journeys to establish a bulletproof strategic foundation before a single pixel is drawn.',
    deliverables: ['Stakeholder Interviews', 'Market Analysis', 'User Personas', 'Project Roadmap'],
    color: 'bg-[var(--color-crimson)]',
    lightColor: 'bg-[var(--color-crimson)]/20',
    icon: Target
  },
  {
    id: '02',
    phase: 'Concept',
    title: 'UX/UI Design',
    duration: '3-4 Weeks',
    description: 'Translating strategy into visual poetry. We craft wireframes, interactive prototypes, and high-fidelity designs that are not only beautiful but ruthlessly focused on conversion and usability.',
    deliverables: ['Wireframing', 'Design System', 'Interactive Prototypes', 'User Testing'],
    color: 'bg-[var(--color-river)]',
    lightColor: 'bg-[var(--color-river)]/20',
    icon: FigmaLogo
  },
  {
    id: '03',
    phase: 'Execution',
    title: 'Engineering & Dev',
    duration: '4-8 Weeks',
    description: 'Our engineering team brings the designs to life using cutting-edge, scalable technologies. We build robust architectures that ensure lightning-fast performance and bulletproof security.',
    deliverables: ['Frontend Development', 'Backend Architecture', 'CMS Integration', 'QA Testing'],
    color: 'bg-[var(--color-terracotta)]',
    lightColor: 'bg-[var(--color-terracotta)]/20',
    icon: Code
  },
  {
    id: '04',
    phase: 'Delivery',
    title: 'Launch & Scale',
    duration: 'Ongoing',
    description: 'Deployment is just the beginning. We handle the technical launch, monitor initial user metrics, and provide ongoing optimization to ensure continuous growth and ROI.',
    deliverables: ['Deployment', 'Performance Audits', 'Analytics Setup', 'Growth Strategy'],
    color: 'bg-[var(--color-navy)]',
    lightColor: 'bg-[var(--color-navy)]/20',
    icon: RocketLaunch
  },
];

export function Process() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);



  return (
    <div 
      ref={containerRef}
      className="relative min-h-[300vh] text-[var(--color-ink)] font-sans selection:bg-[var(--color-ink)] selection:text-[var(--color-canvas)]"
      id="process"
    >


      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row">
        
        {/* Left Sticky Sidebar (Desktop) */}
        <div className="md:w-5/12 lg:w-4/12 p-8 md:p-12 lg:p-20 md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-between">
          
          <div className="pt-12 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">
                The <br/> Blueprint.
              </h2>
              
              <p className="text-[var(--color-stone)] text-lg md:text-xl leading-relaxed max-w-sm font-medium">
                A rigorous, four-step framework engineered to transform complex problems into elegant, high-performing digital solutions.
              </p>
            </motion.div>
          </div>

          <div className="hidden md:block pb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-6">Progress</p>
            <div className="flex flex-col gap-4">
              {timelineData.map((item, index) => (
                <div key={item.id} className="flex items-center gap-4 group">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    {/* Active State Indicator */}
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 border-2 border-[var(--color-ink)] bg-[var(--color-ink)] rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className={`relative z-10 text-xs font-bold ${activeStep === index ? 'text-[var(--color-canvas)]' : 'text-[var(--color-stone)]'}`}>
                      {item.id}
                    </span>
                  </div>
                  <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeStep === index ? 'text-[var(--color-ink)]' : 'text-[var(--color-stone)]'}`}>
                    {item.phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Scrolling Content Area */}
        <div className="md:w-7/12 lg:w-8/12 p-6 md:p-12 lg:p-20 pt-0 md:pt-32 pb-32 flex flex-col gap-8 md:gap-12 overflow-x-hidden">
          {timelineData.map((item, index) => (
            <TimelineCard key={item.id} data={item} index={index} setActiveStep={setActiveStep} />
          ))}
        </div>

      </div>
    </div>
  );
}

function TimelineCard({ data, index, setActiveStep }: { data: any, index: number, setActiveStep: (i: number) => void }) {
  const Icon = data.icon;
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ rotate: isEven ? -1 : 1, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      className="relative w-full max-w-2xl group"
    >
      <div className="
        relative bg-white border-2 border-[var(--color-ink)] rounded-3xl
        shadow-[6px_6px_0_0_var(--color-ink)] hover:shadow-[10px_10px_0_0_var(--color-ink)] 
        transition-all duration-300 ease-out
        flex flex-col overflow-hidden
      ">
        {/* Card Header (Clean White/Cream Banner) */}
        <div className={`w-full p-4 md:p-5 bg-white border-b-2 border-[var(--color-ink)] flex justify-between items-center`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 ${data.color} rounded-xl border-2 border-[var(--color-ink)] shadow-[2px_2px_0_0_var(--color-ink)]`}>
              <Icon weight="bold" className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-[var(--color-ink)] uppercase tracking-widest text-[10px] md:text-xs bg-[var(--color-canvas)] px-3 py-1.5 rounded-full border border-[var(--color-ink)]/20">
              Phase {data.id}
            </span>
          </div>
          <div className="text-4xl md:text-5xl font-black text-[var(--color-ink)] opacity-20 tracking-tighter leading-none select-none">
            {data.id}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 md:p-6 bg-[var(--color-canvas)]">
          
          <div className="flex flex-wrap gap-2 mb-4">
             <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full border border-[var(--color-stone)]/30 text-[var(--color-stone)] text-[10px] md:text-xs font-bold uppercase tracking-wider">
               <Clock weight="bold" className="w-3 h-3" />
               {data.duration}
             </div>
             <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full border border-[var(--color-stone)]/30 text-[var(--color-stone)] text-[10px] md:text-xs font-bold uppercase tracking-wider">
               {data.phase}
             </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-3 leading-[1.1] text-[var(--color-ink)]">
            {data.title}
          </h3>
          
          <p className="text-[var(--color-stone)] text-sm md:text-base leading-relaxed mb-6 font-medium max-w-xl">
            {data.description}
          </p>

          <div className="pt-4 border-t-2 border-[var(--color-ink)]/10">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-stone)] mb-3">Key Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {data.deliverables.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-2.5 group/item cursor-default">
                  <div className={`mt-0.5 p-1 rounded-full border-2 border-[var(--color-ink)] ${data.lightColor} group-hover/item:bg-[var(--color-ink)] transition-colors`}>
                    <CheckCircle weight="fill" className="w-3 h-3 text-[var(--color-ink)] group-hover/item:text-[var(--color-canvas)] transition-colors" />
                  </div>
                  <span className="font-bold text-xs md:text-sm text-[var(--color-ink)]/80 group-hover/item:text-[var(--color-ink)] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </motion.div>
  );
}
