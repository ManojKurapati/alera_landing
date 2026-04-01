"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PlayCircle } from "lucide-react";

const experts = [
  { domain: "Genetics", name: "Dr. E. Thorne" },
  { domain: "AI Systems", name: "S. Varma" },
  { domain: "Longevity", name: "Dr. A. Chen" },
];

export function SocialProof() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden bg-black/40 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Built with scientific rigor. <br/>
            Backed by real operators.
          </h2>
          <p className="text-xl text-white/60">
            Alera combines expertise from leading fields.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
           {experts.map((item, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
             >
                <GlassCard className="aspect-video relative overflow-hidden group p-0 flex items-center justify-center cursor-pointer border-white/10 hover:border-[#3A86FF]/50 transition-colors">
                  <div className="absolute inset-0 bg-[#0A0A0F]/80 mix-blend-overlay z-10 group-hover:bg-[#0A0A0F]/40 transition-colors duration-500" />
                  {/* Mock Video Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]/20 to-[#00F5D4]/20" />
                  
                  {/* Play Button */}
                  <div className="relative z-20 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <PlayCircle className="w-8 h-8 text-white/80 group-hover:text-white" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-20 text-left">
                     <span className="glass-tag px-2 py-1 rounded text-[10px] font-bold tracking-widest text-[#00F5D4] uppercase bg-black/50 border border-[#00F5D4]/20 mb-2 inline-block shadow-[0_0_10px_rgba(0,245,212,0.1)]">
                       {item.domain}
                     </span>
                     <p className="text-white font-medium text-lg">{item.name}</p>
                  </div>
                </GlassCard>
             </motion.div>
           ))}
        </div>

        {/* Logos */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="text-2xl font-bold font-[var(--font-satoshi)] tracking-tighter mix-blend-screen text-white/80">STANFORD</div>
           <div className="text-2xl font-bold font-[var(--font-satoshi)] tracking-tighter mix-blend-screen text-white/80">MIT</div>
           <div className="text-2xl font-bold font-[var(--font-satoshi)] tracking-tighter mix-blend-screen text-white/80">Y COMBINATOR</div>
           <div className="text-2xl font-bold font-[var(--font-satoshi)] tracking-tighter mix-blend-screen text-white/80">NATURE</div>
        </div>
      </div>
    </section>
  );
}
