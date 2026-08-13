"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: [4, 5, 5, 6, 6, 8, 4, 5][i],
    x: 0,
    y: 0,
    angle: (i * 45) + (Math.random() * 20 - 10),
    distance: 30 + Math.random() * 25,
  }));
}

interface ConfettiButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function ConfettiButton({ children, className, href }: ConfettiButtonProps) {
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const [burst, setBurst] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setParticles(generateParticles());
    setBurst(true);
    setTimeout(() => setBurst(false), 700);
  };

  const isFullWidth = className?.includes("w-full") ? "w-full" : "";

  const content = (
    <span className={`relative inline-flex ${isFullWidth}`}>
      <span className={className} onClick={handleClick}>
        {children}
      </span>

      {/* Particle container */}
      <AnimatePresence>
        {burst && (
          <span className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
            {particles.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const tx = Math.cos(rad) * p.distance;
              const ty = Math.sin(rad) * p.distance;
              return (
                <motion.span
                  key={p.id}
                  className="absolute rounded-full bg-[var(--color-crimson)]"
                  style={{ width: p.size, height: p.size }}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1, x: tx, y: ty }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              );
            })}
          </span>
        )}
      </AnimatePresence>
    </span>
  );

  if (href) {
    const Link = require('next/link').default;
    return <Link href={href} className={isFullWidth ? "block w-full" : ""}>{content}</Link>;
  }

  return content;
}
