"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { GlassCard } from "./ui/glass-card";
import { RevealStagger, RevealItem } from "./ui/reveal";
import { Star, Quotes } from "@phosphor-icons/react";

const reviews = [
  { id: 1, name: "Sarah Jenkins", role: "CEO, TechNova", content: "Working with Zenith completely transformed our digital presence. They didn't just build a website, they engineered a growth engine.", img: "https://i.pravatar.cc/150?img=47" },
  { id: 2, name: "Michael Chen", role: "Founder, Loop", content: "The level of polish and attention to detail is unmatched. Our conversion rates increased by 120% within the first month.", img: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Elena Rodriguez", role: "CMO, Bloom Studio", content: "A phenomenal team. They delivered our complex web platform ahead of schedule with zero technical debt.", img: "https://i.pravatar.cc/150?img=32" },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full py-32 px-6 lg:px-12" id="testimonials">
      <div className="max-w-[1400px] mx-auto">
        <RevealStagger className="text-center mb-16">
          <RevealItem>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-6">Don't just take our word for it</h2>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-[var(--color-stone)] max-w-2xl mx-auto">
              We've helped dozens of startups and enterprises achieve their digital goals.
            </p>
          </RevealItem>
        </RevealStagger>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <RevealItem key={review.id} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <GlassCard className="p-10 h-full flex flex-col justify-between bg-white/60 !hover:translate-y-0">
                  <div>
                    {/* Quote decoration */}
                    <Quotes size={40} weight="fill" className="text-[var(--color-crimson)]/15 mb-4" />
                    <div className="flex gap-1 mb-6 text-[var(--color-terracotta)]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} weight="fill" />
                      ))}
                    </div>
                    <p className="text-xl text-[var(--color-ink)] font-medium leading-relaxed mb-8">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={review.img} alt={review.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white" />
                    <div>
                      <h4 className="font-display text-lg text-[var(--color-navy)] font-semibold">{review.name}</h4>
                      <p className="text-sm text-[var(--color-stone)]">{review.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
