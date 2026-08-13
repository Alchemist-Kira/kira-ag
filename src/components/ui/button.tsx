"use client";
import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const reduce = useReducedMotion();

    return (
      <motion.button
        ref={ref}
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-[background-color,color,border-color,opacity,filter,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-crimson)] cursor-pointer",
          {
            "bg-[var(--color-crimson)] text-white hover:bg-[var(--color-terracotta)] shadow-[0_0_15px_rgba(193,41,46,0.3)] hover:shadow-[0_0_20px_rgba(217,108,78,0.4)]": variant === "primary",
            "bg-transparent border border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white": variant === "secondary",
            "bg-transparent text-[var(--color-ink)] hover:bg-black/5": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
