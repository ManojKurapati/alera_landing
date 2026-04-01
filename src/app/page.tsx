import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FreeProtocols } from "@/components/sections/FreeProtocols";
import { Roadmap } from "@/components/sections/Roadmap";
import { TargetUser } from "@/components/sections/TargetUser";
import { DataOwnership } from "@/components/sections/DataOwnership";
import { WaitlistGamification } from "@/components/sections/WaitlistGamification";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0F]/80">
      <ParallaxBackground />
      <div className="mx-auto flex flex-col items-center justify-center overflow-x-hidden w-full relative z-10">
        <Hero />
        <Problem />
        <HowItWorks />
        <FreeProtocols />
        <Roadmap />
        <TargetUser />
        <DataOwnership />
        <WaitlistGamification />
        <SocialProof />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
