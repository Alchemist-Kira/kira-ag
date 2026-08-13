import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const TrustBanner = dynamic(() => import("@/components/TrustBanner").then(mod => mod.TrustBanner));
const BentoServices = dynamic(() => import("@/components/BentoServices").then(mod => mod.BentoServices));
const Works = dynamic(() => import("@/components/Works").then(mod => mod.Works));
const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Pricing = dynamic(() => import("@/components/Pricing").then(mod => mod.Pricing));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <TrustBanner />
      <div className="bg-texture">
        <BentoServices />
        <Works />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
