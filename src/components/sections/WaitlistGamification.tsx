"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Users, Award, Share2 } from "lucide-react";

export function WaitlistGamification() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3A86FF]/30 bg-[#3A86FF]/10 mb-6">
            <Award className="w-4 h-4 text-[#3A86FF]" />
            <span className="text-sm font-medium text-[#3A86FF]">Limited Time</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Early access is <span className="text-gradient">earned.</span>
          </h2>
          <p className="text-xl text-white/60">
            We&apos;re giving <strong className="text-white">50 lifetime memberships</strong> to the most engaged early users.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 relative overflow-hidden border-[#00F5D4]/30 shadow-[0_0_50px_rgba(0,245,212,0.1)]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,245,212,0.1)_0%,_transparent_60%)]" />
             <div className="relative z-10">
                <div className="flex justify-between text-sm font-medium text-white/80 mb-3 px-1">
                   <span>Current Rank: <strong className="text-[#00F5D4]">#237</strong></span>
                   <span>Target: <strong className="text-white">Top 50</strong></span>
                </div>
                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden mb-8 shadow-inner relative">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "65%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                     className="h-full bg-gradient-to-r from-[#3A86FF] to-[#00F5D4] relative overflow-hidden"
                   >
                     <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                     />
                   </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                   {[
                     { icon: Users, label: "Refer Users", points: "+50 pts" },
                     { icon: Share2, label: "Share Content", points: "+20 pts" },
                     { icon: Award, label: "Engage Socially", points: "+10 pts" },
                   ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <item.icon className="w-6 h-6 text-white/70 mb-2 group-hover:text-[#00F5D4] transition-colors" />
                        <span className="text-sm font-medium text-white/90">{item.label}</span>
                        <span className="text-xs text-[#00F5D4] mt-1 font-bold">{item.points}</span>
                      </div>
                   ))}
                </div>

                <GlowButton className="w-full sm:w-auto px-10">
                  Join Waitlist — Compete for Lifetime Access
                </GlowButton>
             </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
