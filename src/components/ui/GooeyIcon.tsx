"use client";

import React, { cloneElement } from "react";
import { cn } from "@/lib/utils";

interface GooeyIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement<{ className?: string }>;
  colorClass?: string;
  bgColorClass?: string;
}

export function GooeyIcon({
  icon,
  className,
  colorClass = "text-[var(--color-navy)] group-hover:text-white",
  bgColorClass = "bg-[var(--color-navy)]",
  ...props
}: GooeyIconProps) {
  return (
    <div
      className={cn(
        "group relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center border border-[var(--color-navy)]/30 shadow-sm shrink-0 cursor-pointer",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ filter: "url(#goo-icon-filter)" }}
        aria-hidden
      >
        <div
          className={cn(
            "absolute left-[-5%] w-[34%] h-full rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 group-hover:translate-y-0",
            bgColorClass
          )}
        />
        <div
          className={cn(
            "absolute left-[30%] w-[34%] h-full rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-75 group-hover:translate-y-0",
            bgColorClass
          )}
        />
        <div
          className={cn(
            "absolute left-[66%] w-[34%] h-full rounded-full transform scale-[1.4] translate-y-[125%] transition-all duration-700 delay-150 group-hover:translate-y-0",
            bgColorClass
          )}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {cloneElement(icon, {
          className: cn(
            "w-6 h-6 transition-colors duration-700",
            colorClass,
            // @ts-ignore
            icon.props.className
          ),
        })}
      </div>

      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo-icon-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
