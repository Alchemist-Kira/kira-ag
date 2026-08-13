"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { UserCheck, List, X } from "@phosphor-icons/react";
import { ConfettiButton } from "./ui/confetti-button";
import RandomLetterSwap from "./ui/RandomLetterSwap";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <motion.line
      initial={{ x1: 4, y1: 6, x2: 20, y2: 6 }}
      animate={{ x1: isOpen ? 6 : 4, y1: isOpen ? 6 : 6, x2: isOpen ? 18 : 20, y2: isOpen ? 18 : 6 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      initial={{ x1: 4, y1: 12, x2: 10, y2: 12, opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      initial={{ x1: 14, y1: 12, x2: 20, y2: 12, opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      initial={{ x1: 4, y1: 18, x2: 20, y2: 18 }}
      animate={{ x1: isOpen ? 6 : 4, y1: isOpen ? 18 : 18, x2: isOpen ? 18 : 20, y2: isOpen ? 6 : 18 }}
      transition={{ duration: 0.3 }}
    />
  </svg>
);

export function Navbar() {
  const [navState, setNavState] = useState<"top" | "floating">("top");
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) {
        setNavState(prev => prev !== "top" ? "top" : prev);
      } else {
        setNavState(prev => prev !== "floating" ? "floating" : prev);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Detect background color under navbar
          const navCenterY = 40;
          const navCenterX = window.innerWidth / 2;
          const elements = document.elementsFromPoint(navCenterX, navCenterY);

          let isDark = false;
          try {
            if (elements) {
              const elArray = Array.from(elements);
              for (const el of elArray) {
                if (el.closest('.main-navbar')) continue;

                const style = window.getComputedStyle(el);
                const bg = style.backgroundColor;
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
                  const match = bg.match(/\d+/g);
                  if (match && match.length >= 3) {
                    const r = parseInt(match[0]);
                    const g = parseInt(match[1]);
                    const b = parseInt(match[2]);
                    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
                    if (hsp < 127.5) {
                      isDark = true;
                    }
                  }
                  break;
                }
              }
            }
          } catch (e) {
            // Silently fail if DOM inspection crashes on mobile
          }
          setIsDarkBg(isDark);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = navState === "floating";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <svg className="hidden pointer-events-none" aria-hidden="true">
        <filter
          id="glass-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {(() => {
        const renderNavContent = (isScrolled: boolean) => (
          <>
            {isScrolled && (
              <>
                <div className="absolute inset-0 z-0 overflow-hidden isolate rounded-xl" style={{ backdropFilter: 'blur(3px)', filter: 'url(#glass-distortion)', willChange: 'transform' }}></div>
                <div className="absolute inset-0 z-[1] bg-white/25 rounded-xl"></div>
                <div className="absolute inset-0 z-[2] overflow-hidden rounded-xl" style={{ boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)' }}></div>
              </>
            )}

            <div className={`relative z-[3] flex items-center justify-between w-full h-full ${isScrolled ? "py-2 px-3 sm:py-3 sm:px-4" : "py-4 px-3 sm:py-5 sm:px-6 md:px-12 border-b border-transparent"}`}>
              <Link
                href="/"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2.5 group pl-1"
              >
                <div className="relative">
                  {/* Logo blur glow */}
                  <div className={`absolute -inset-1.5 bg-[var(--color-crimson)] rounded-xl blur-md transition-opacity duration-300 ${isScrolled ? "opacity-15 group-hover:opacity-30" : "opacity-25 group-hover:opacity-40"}`}></div>
                  <div className={`relative rounded-xl bg-[var(--color-crimson)] flex items-center justify-center text-white font-display font-bold transition-all duration-500 group-hover:scale-105 ${isScrolled ? "w-9 h-9 text-lg" : "w-10 h-10 text-xl"}`}>
                    Z
                  </div>
                </div>
                <span className={`font-display font-bold tracking-tight transition-all duration-500 ${isDarkBg ? "text-white" : "text-black"} ${isScrolled ? "text-[19px] md:text-xl" : "text-xl sm:text-2xl"}`}>Zenith</span>
              </Link>

              {/* Desktop nav links */}
              <div className={`hidden md:flex items-center transition-all duration-700 ${isScrolled
                ? "gap-2 px-4 py-2"
                : "gap-2 px-8 py-3"
                }`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 flex overflow-hidden"
                  >
                    <div className={`relative flex overflow-hidden font-medium transition-colors duration-300 ${isDarkBg ? "text-white" : "text-black"
                      } ${isScrolled ? "text-[15px]" : "text-base"}`}>
                      <RandomLetterSwap
                        label={link.label}
                        staggerDuration={0.02}
                        ease={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-1 sm:gap-3">
                <div className="relative group">
                  {/* Occasional flying fire particles */}
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                    <div className="fire-particle"></div>
                  </div>

                  {/* CTA with confetti burst */}
                  <ConfettiButton
                    href="/contact"
                    className="btn-fire inline-flex items-center justify-center font-bold rounded-xl cursor-pointer text-[13px] md:text-base px-5 py-3 shrink-0"
                  >
                    <span className="btn-fire-core"></span>
                    <span className="btn-content flex items-center gap-2">
                      Start a project
                      <UserCheck weight="bold" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    </span>
                  </ConfettiButton>
                </div>

                {/* Mobile hamburger */}
                <button
                  aria-label="Toggle menu"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className={`md:hidden flex items-center justify-center cursor-pointer transition-colors duration-300 w-10 h-10 ${isDarkBg ? "text-white hover:text-white/80" : "text-[var(--color-ink)] hover:text-black"
                    }`}
                >
                  <MenuIcon isOpen={mobileOpen} />
                </button>
              </div>
            </div>
          </>
        );

        return (
          <>
            {/* Top Absolute Navbar */}
            <nav className="main-navbar absolute top-0 w-full max-w-[1400px] bg-transparent z-[9999] left-0 right-0 mx-auto transition-all duration-700">
              {renderNavContent(false)}
            </nav>

            {/* Floating Fixed Navbar Wrapper */}
            <AnimatePresence>
              {scrolled && (
                <div className="fixed top-4 left-0 right-0 z-[9999] pointer-events-none">
                  <motion.nav
                    initial={{ y: "-150%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-150%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="main-navbar relative w-[calc(100%-2rem)] max-w-4xl shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] rounded-xl mx-auto pointer-events-auto"
                  >
                    {renderNavContent(true)}
                  </motion.nav>
                </div>
              )}
            </AnimatePresence>
          </>
        );
      })()}

      {/* Mobile Popover */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={`fixed ${scrolled ? 'top-[88px] left-4 right-4' : 'top-[104px] left-3 right-3 sm:left-4 sm:right-4'} bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-2 py-3 z-[9999] md:hidden`}
              variants={{
                hidden: { opacity: 0, y: -10, scale: 0.98 },
                visible: {
                  opacity: 1, y: 0, scale: 1,
                  transition: { duration: 0.2, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.05 }
                },
                exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2 } }
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col">
                {[...navLinks, { label: "Got an idea?", href: "/contact" }].map((link, i, arr) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
                      exit: { opacity: 0, x: -10, transition: { duration: 0.1 } }
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-5 py-3.5 text-[15px] font-medium text-[var(--color-navy)] hover:text-[var(--color-crimson)] transition-colors ${i !== arr.length - 1 ? 'border-b border-black/5' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
