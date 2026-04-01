"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const roadmap = [
  { time: "Q4 2025", title: "Personalized Protocol Engine" },
  { time: "Q1 2026", title: "Wearable integrations" },
  { time: "Q2–Q3 2026", title: "Predictive health intelligence" },
  { time: "Q4 2026", title: "Health marketplace" },
  { time: "2027", title: "Personal health agent" },
];

export function Roadmap() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            This is just the beginning.
          </h2>
        </motion.div>

        <div className="relative mt-8">
          {/* Animated path */}
          <div className="absolute top-[28px] left-0 w-full h-[2px] bg-white/5" />
          <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-[#00F5D4] via-[#3A86FF] to-[#00F5D4] origin-left shadow-[0_0_20px_rgba(58,134,255,0.5)] z-0"
          />

          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-12 pt-0 hide-scrollbar px-4 relative z-10 snap-x snap-mandatory">
            {roadmap.map((item, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: idx * 0.2, duration: 0.8 }}
                 className="flex-shrink-0 w-64 md:w-80 relative snap-center"
              >
                 <div className="flex flex-col items-start pt-[12px]">
                    {/* Node on the line */}
                    <div className="absolute top-[12px] w-8 h-8 rounded-full bg-[#0A0A0F] border-2 border-white/20 flex items-center justify-center group cursor-pointer transition-all hover:border-[#00F5D4] shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                       <div className="w-3 h-3 rounded-full bg-[#3A86FF]/50 group-hover:bg-[#00F5D4] group-hover:shadow-[0_0_15px_#00F5D4] transition-all duration-300" />
                    </div>
                    
                    <GlassCard className="w-full mt-16 bg-[#0A0A0F]/60 backdrop-blur-md hover:bg-[#0A0A0F]/80 hover:border-[#3A86FF]/30 transition-all">
                       <p className="text-[#00F5D4] font-bold text-xs tracking-widest uppercase mb-3">
                         {item.time}
                       </p>
                       <h3 className="text-white font-medium text-[15px] leading-snug text-white/90">
                         {item.title}
                       </h3>
                    </GlassCard>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
