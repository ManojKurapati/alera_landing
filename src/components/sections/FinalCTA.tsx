"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function FinalCTA() {
  return (
    <section className="py-40 relative z-10 w-full overflow-hidden flex justify-center items-center flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,245,212,0.08)_0%,_transparent_50%)]" />
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true, margin: "-100px" }}
         className="text-center relative z-10 max-w-3xl px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Take control of your biology.
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto">
          Join early. Personalize everything. Win lifetime access.
        </p>

        <div className="flex flex-col items-center gap-6 mt-4">
           <GlowButton className="text-lg px-12 py-5 shadow-[0_0_40px_rgba(0,245,212,0.2)] border-[#00F5D4]/40 hover:border-[#00F5D4] transition-all duration-500">
             Join Now — Limited Lifetime Seats
           </GlowButton>
           
           <div className="text-sm font-medium text-white/50 flex items-center gap-3 mt-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
             <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse" />
             <span>Only <strong className="text-white mx-1 text-lg font-[var(--font-satoshi)]"><AnimatedCounter value={50} direction="down" /></strong> seats remaining</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
