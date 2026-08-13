"use client";

import Image from "next/image";

export function TrustBanner() {
  const logos = [
    { name: "Vercel", src: "/logos/vercel.svg" },
    { name: "Next.js", src: "/logos/nextjs.svg" },
    { name: "React", src: "/logos/react.svg" },
    { name: "Node.js", src: "/logos/nodejs.svg" },
    { name: "Vite", src: "/logos/vite.svg" },
    { name: "TypeScript", src: "/logos/typescript-icon.svg" },
    { name: "Tailwind CSS", src: "/logos/tailwindcss.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "GitHub", src: "/logos/github-icon.svg" },
    { name: "Webflow", src: "/logos/webflow.svg" },
    { name: "Figma", src: "/logos/figma.svg" },
    { name: "Notion", src: "/logos/notion-icon.svg" },
    { name: "Linear", src: "/logos/linear.svg" },
    { name: "WordPress", src: "/logos/wordpress-icon.svg" },
  ];

  return (
    <section className="w-full py-12 border-b border-t border-[var(--color-sandstone)]/50 overflow-hidden">
      <div className="edge-fade-mask">
        <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite]">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center gap-20 px-10">
              {logos.map((logo) => (
                <Image 
                  key={`${group}-${logo.name}`}
                  src={logo.src} 
                  alt={logo.name} 
                  width={100}
                  height={28}
                  className="h-7 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain max-w-[100px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
