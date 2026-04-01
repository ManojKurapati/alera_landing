"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Dna, Cpu, ListChecks, RefreshCcw } from "lucide-react";

const steps = [
  { icon: Dna, title: "Input your biology", desc: "DNA, bloodwork, lifestyle" },
  { icon: Cpu, title: "AI decoding layer", desc: "Multi-signal interpretation engine" },
  { icon: ListChecks, title: "Personal protocol", desc: "Daily supplements, nutrition, routines" },
  { icon: RefreshCcw, title: "Adaptive feedback", desc: "Improves as you evolve" },
];

export function HowItWorks() {
  return (
    <section className="py-32 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-16 text-white pb-2 text-gradient inline-block">
            From raw data to precise action.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block" />
          {/* Glowing Line Animation */}
          <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#00F5D4] to-[#3A86FF] origin-left -translate-y-1/2 shadow-[0_0_15px_rgba(0,245,212,0.5)] hidden lg:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: idx * 0.2, duration: 0.8 }}
                 className="relative z-10"
              >
                <GlassCard className="h-full flex flex-col items-center text-center !p-8 group">
                   <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center mb-6 group-hover:bg-[#3A86FF]/10 group-hover:border-[#3A86FF]/50 transition-colors duration-500 shadow-xl overflow-hidden relative">
                      {/* Inner glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <step.icon className="w-7 h-7 text-white/70 group-hover:text-[#00F5D4] transition-colors relative z-10" />
                   </div>
                   {/* Timeline node connection point */}
                   <div className="absolute top-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0A0A0F] border-2 border-[#00F5D4] hidden lg:block shadow-[0_0_10px_#00F5D4] group-hover:scale-150 transition-transform duration-300" />
                   
                   <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                   <p className="text-sm text-white/50 max-w-[200px]">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
