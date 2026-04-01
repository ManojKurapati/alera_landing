"use client";
import React from "react";
import { motion } from "framer-motion";

const users = [
  { tag: "Biohacker", desc: "Optimize cognitive and physical performance" },
  { tag: "Longevity Seeker", desc: "Extend healthspan" },
  { tag: "Quantified Self", desc: "Understand biology deeply" },
  { tag: "High Performer", desc: "Prevent instead of react" },
  { tag: "Athlete", desc: "Track real progress" },
  { tag: "Data Sovereign", desc: "Own their data" },
];

export function TargetUser() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A86FF]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Built for people who don&apos;t leave health to chance.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {users.map((item, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
             >
                {/* Background placeholder - in real life this would be images */}
                <div className="absolute inset-0 bg-[#0A0A0F] border border-white/10 rounded-2xl group-hover:border-[#3A86FF]/40 transition-colors duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-[#3A86FF]/5 group-hover:bg-[#3A86FF]/10 transition-colors duration-500" />
                  <div className="absolute w-full h-full bg-[url('/noise.svg')] opacity-[0.03]" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                   <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                     <span className="glass-tag px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-[#00F5D4]/80 uppercase backdrop-blur-md bg-black/40 border border-[#00F5D4]/20 shadow-[0_0_10px_rgba(0,245,212,0.1)]">
                       {item.tag}
                     </span>
                   </div>
                   
                   <div>
                     <p className="text-xl font-medium text-white/80 group-hover:text-white transition-colors">
                       {item.desc}
                     </p>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
