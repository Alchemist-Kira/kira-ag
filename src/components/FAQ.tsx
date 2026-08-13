"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RevealStagger, RevealItem } from "./ui/reveal";
import { Plus } from "@phosphor-icons/react";

const faqs = [
  { q: "What is your typical project timeline?", a: "Most landing page projects take 2-4 weeks from discovery to deployment. Full custom web platforms typically range from 6-12 weeks depending on complexity." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer a 'Success as a Service' retainer model where we handle all ongoing maintenance, performance optimization, and continuous feature development." },
  { q: "What technology stack do you use?", a: "We specialize in the modern React ecosystem, primarily using Next.js (App Router), Tailwind CSS, Framer Motion, and TypeScript to ensure maximum performance." },
  { q: "How much does a custom website cost?", a: "Our landing page packages start at $5,000. Comprehensive digital platforms start at $15,000. We provide transparent, fixed-price proposals after our initial discovery call." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-32 px-6 lg:px-12 relative overflow-hidden" id="faq">
      <div className="max-w-[800px] mx-auto">
        <RevealStagger className="text-center mb-16">
          <RevealItem>
            <h4 className="mb-4 text-sm font-bold text-[var(--color-stone)] tracking-[0.2em] uppercase">06 / FAQ</h4>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">Frequently Asked Questions</h2>
          </RevealItem>
        </RevealStagger>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-sandstone)] py-1">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
              >
                <h3 className={`font-display text-xl md:text-2xl transition-colors duration-300 ${openIndex === i ? 'text-[var(--color-crimson)]' : 'text-[var(--color-navy)] group-hover:text-[var(--color-crimson)]'}`}>
                  {faq.q}
                </h3>
                <motion.div 
                  initial={false}
                  animate={{
                    backgroundColor: openIndex === i ? "var(--color-crimson)" : "var(--color-sandstone)",
                    color: openIndex === i ? "#ffffff" : "var(--color-navy)",
                    rotate: openIndex === i ? 135 : 0,
                    scale: openIndex === i ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 ml-4"
                >
                  <Plus size={20} weight="bold" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: 8 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="text-lg text-[var(--color-stone)] pb-8 pt-2"
                    >
                      {faq.a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
