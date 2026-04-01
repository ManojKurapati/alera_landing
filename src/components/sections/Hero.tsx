"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle2, TrendingUp, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-16">
      <div className="flex-1 z-10 flex flex-col justify-center space-y-8 max-w-2xl px-4 lg:pl-16 xl:pl-32">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/5 mb-6">
            <Activity className="w-4 h-4 text-[#00F5D4]" />
            <span className="text-sm font-medium text-[#00F5D4]">V3 Early Access Now Open</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your biology already <br className="hidden md:block"/> knows the answer. <br className="hidden md:block"/>
            <span className="text-gradient">Alera makes it actionable.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Stop guessing your health. Alera transforms your DNA, labs, and
            lifestyle into precise, evolving protocols built for real outcomes.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <GlowButton>Join Waitlist — Win Lifetime Access</GlowButton>
          <button className="px-8 py-4 rounded-full font-semibold text-white/80 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md">
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Right Side: Floating Glass Dashboard */}
      <div className="flex-1 z-10 relative flex justify-center items-center mt-16 md:mt-0 px-4">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-md"
        >
          {/* Main Dashboard Card */}
          <GlassCard className="relative overflow-hidden border-[#3A86FF]/30 shadow-[0_0_50px_rgba(58,134,255,0.15)] bg-white/5">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-white/50 mb-1">Health Score</p>
                <div className="text-4xl font-bold font-[var(--font-satoshi)] text-gradient flex items-baseline gap-1">
                  <AnimatedCounter value={96} direction="up" />
                  <span className="text-xl">%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00F5D4]/20 to-[#3A86FF]/20 flex items-center justify-center border border-white/10">
                <TrendingUp className="w-6 h-6 text-[#00F5D4]" />
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium text-white/70">Daily Stack</p>
              {[
                { label: "Morning Protocol Sync", delay: 0.5 },
                { label: "Glucose Stabilizer", delay: 1.0 },
                { label: "Deep Sleep Inducer", delay: 1.5 },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + item.delay, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.2 + item.delay }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00F5D4]" />
                  </motion.div>
                  <span className="text-sm text-white/90">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Trend Graph Mockup */}
            <div className="h-24 w-full relative flex items-end gap-2 pb-2">
              {[40, 45, 60, 55, 75, 80, 95].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.8, type: "spring" }}
                  className="flex-1 bg-gradient-to-t from-[#3A86FF]/50 to-[#00F5D4] rounded-t-sm"
                />
              ))}
            </div>
            
            {/* Pulsing overlay for metric updates */}
            <motion.div 
               animate={{ opacity: [0, 0.1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-[#00F5D4] pointer-events-none mix-blend-overlay"
            />
          </GlassCard>

          {/* Floating UI element 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 -bottom-8 w-48 hidden sm:block"
          >
            <GlassCard className="p-4 bg-[#0A0A0F]/80 backdrop-blur-xl border-[#00F5D4]/20 shadow-[0_0_30px_rgba(0,245,212,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
                <span className="text-xs font-medium text-white/80">Protocol Updated</span>
              </div>
              <p className="text-[10px] text-white/50 mt-1">Based on latest bloodwork</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
