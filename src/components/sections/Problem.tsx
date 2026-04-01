"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function Problem() {
  return (
    <section className="py-32 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-16">
            You&apos;re doing everything right.<br className="hidden md:block"/>
            <span className="text-white/40">Still getting nowhere.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy & "Clutter" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 px-4"
          >
             <div className="space-y-4 text-xl md:text-3xl font-medium text-white/80 tracking-tight">
                <p>You track your sleep.</p>
                <p>You run tests.</p>
                <p>You try supplements.</p>
             </div>
             
             <div className="w-12 h-px bg-white/20" />

             <div className="space-y-6 text-white/50 text-lg leading-relaxed max-w-md">
               <p className="font-semibold text-white/80">But nothing connects.</p>
               <p>Health today is fragmented. Each signal exists in isolation. No system turns it into direction.</p>
               <p className="text-white mt-4 p-5 border-l-2 border-[#00F5D4] bg-white/5 backdrop-blur-md rounded-r-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                 Alera unifies your biology into one adaptive intelligence layer — 
                 <span className="text-gradient block mt-1 font-semibold">so every action actually moves you forward.</span>
               </p>
             </div>
          </motion.div>

          {/* Right: Clean UI vs Clotted background */}
          <div className="relative h-[500px] w-full mt-12 md:mt-0 flex items-center justify-center [perspective:1000px]">
            {/* Clutter Background */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               style={{ rotateZ: -5, rotateY: 10 }}
               className="absolute top-10 right-10 w-48 h-64 bg-white/5 backdrop-blur-sm border border-red-500/10 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl"
            >
               <div className="h-4 w-1/2 bg-red-400/20 rounded-md"/>
               <div className="h-4 w-3/4 bg-red-400/20 rounded-md"/>
               <div className="mt-auto h-12 w-full bg-red-400/10 rounded-md border border-red-400/20 flex flex-col items-center justify-center text-red-500/50 text-[10px] uppercase font-bold tracking-widest gap-1">
                 <span className="block border-b border-red-500/20 pb-0.5">Isolated Data</span>
                 <span>Meaningless</span>
               </div>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               style={{ rotateZ: 8, rotateY: -15, z: -50 }}
               className="absolute bottom-10 left-0 w-48 h-64 bg-white/5 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl"
            >
               <div className="h-24 w-full bg-orange-400/20 rounded-xl"/>
               <div className="h-4 w-3/4 bg-orange-400/20 rounded-md"/>
               <div className="h-4 w-1/2 bg-orange-400/20 rounded-md"/>
            </motion.div>

            {/* Clean UI In front */}
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
               className="relative z-10 w-full max-w-sm"
               style={{ translateZ: 50 }}
            >
              <GlassCard className="border-[#00F5D4]/30 shadow-[0_0_40px_rgba(0,245,212,0.1)] bg-[#0A0A0F]/90 backdrop-blur-2xl flex flex-col items-center p-8">
                 <div className="w-16 h-16 rounded-full bg-[#00F5D4]/10 flex items-center justify-center mb-6 border border-[#00F5D4]/30">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F5D4] to-[#3A86FF] shadow-[0_0_20px_#3A86FF] animate-pulse"/>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Unified State</h3>
                 <p className="text-sm text-center text-white/50">
                   All signals synthesized. <br/> Your master protocol ready.
                 </p>
                 <div className="mt-8 w-full p-4 rounded-xl bg-gradient-to-r from-[#00F5D4]/10 to-[#3A86FF]/10 border border-white/5 flex items-center justify-between">
                   <span className="text-sm font-semibold text-[#00F5D4]">Evolution Layer Active</span>
                   <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-bounce"/>
                     <div className="w-2 h-2 rounded-full bg-[#3A86FF] animate-bounce" style={{ animationDelay: "0.1s" }}/>
                   </div>
                 </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
