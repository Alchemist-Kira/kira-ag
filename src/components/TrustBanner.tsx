"use client";

export function TrustBanner() {
  const logos = [
    { name: "Vercel", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/vercel.svg" },
    { name: "Next.js", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/nextjs.svg" },
    { name: "React", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg" },
    { name: "Node.js", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/nodejs.svg" },
    { name: "Vite", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/vite.svg" },
    { name: "TypeScript", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript-icon.svg" },
    { name: "Tailwind CSS", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss.svg" },
    { name: "Stripe", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/stripe.svg" },
    { name: "GitHub", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg" },
    { name: "Webflow", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/webflow.svg" },
    { name: "Figma", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/figma.svg" },
    { name: "Notion", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/notion-icon.svg" },
    { name: "Linear", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/linear.svg" },
    { name: "WordPress", src: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/wordpress-icon.svg" },
  ];

  return (
    <section className="w-full py-12 border-b border-t border-[var(--color-sandstone)]/50 overflow-hidden">
      <div className="edge-fade-mask">
        <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite]">
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex items-center gap-20 px-10">
              {logos.map((logo) => (
                <img 
                  key={`${group}-${logo.name}`}
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-7 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain max-w-[100px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
