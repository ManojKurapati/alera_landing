"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BatteryCharging, Activity, Brain, Droplet, HeartPulse, Lock } from "lucide-react";

const protocols = [
  { icon: BatteryCharging, title: "Energy & Fatigue", color: "from-yellow-400 to-orange-500" },
  { icon: HeartPulse, title: "Longevity Baseline", color: "from-teal-400 to-emerald-500" },
  { icon: Brain, title: "Cognitive Performance", color: "from-blue-400 to-indigo-500" },
  { icon: Droplet, title: "Hormone Balance", color: "from-pink-400 to-rose-500" },
  { icon: Activity, title: "Post-GLP-1 Recovery", color: "from-purple-400 to-fuchsia-500" },
];

export function FreeProtocols() {
  return (
    <section className="py-32 relative z-10 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-16 text-white pt-12">
            Start optimizing today.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Access clinically structured starter protocols built on the same intelligence powering Alera.
          </p>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-6 px-4 md:px-12 xl:px-[calc((100vw-80rem)/2)] pb-16 pt-8 max-w-full">
        {protocols.map((proto, idx) => (
          <motion.div
             key={idx}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ delay: idx * 0.1, duration: 0.5 }}
             className="snap-center shrink-0 w-[300px] md:w-[350px]"
          >
            <GlassCard className="h-72 relative group overflow-hidden flex flex-col cursor-pointer">
              {/* Blur overlay */}
              <div className="absolute inset-0 z-20 backdrop-blur-xl bg-[#0A0A0F]/60 flex flex-col items-center justify-center transition-all duration-500 group-hover:backdrop-blur-sm group-hover:bg-[#0A0A0F]/10">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-90 group-hover:opacity-0 transition-transform">
                  <Lock className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-[13px] font-bold tracking-widest uppercase text-white/70 group-hover:opacity-0 transition-opacity">Unlock Protocol</span>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between p-2">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proto.color} flex items-center justify-center bg-opacity-20 backdrop-blur-md shadow-lg border border-white/20 pb-px`}>
                   <proto.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-4">{proto.title}</h3>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className={`h-full bg-gradient-to-r ${proto.color} w-3/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out translate-x-[-100%] group-hover:translate-x-0`} />
                   </div>
                </div>
              </div>
              {/* Background Glow */}
              <div className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[60px] bg-gradient-to-br ${proto.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-10 py-5 rounded-full font-bold text-white/90 hover:text-white border border-[#00F5D4]/40 hover:border-[#00F5D4]/80 shadow-[0_0_20px_rgba(0,245,212,0.15)] hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] bg-[#0A0A0F]/50 hover:bg-[#00F5D4]/10 transition-all duration-300 backdrop-blur-xl">
           Unlock Free Protocols
        </button>
      </div>
    </section>
  );
}
