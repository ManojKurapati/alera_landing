"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function DataOwnership() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Your data. <br/>
            <span className="text-gradient">Fully controlled.</span> <br/>
            Never exploited.
          </h2>
          <p className="text-xl text-white/70 max-w-md">
            Alera is built on a zero-compromise privacy architecture.
          </p>

          <ul className="space-y-5 mt-8">
            {[
              "AES-256 encryption",
              "No data selling. Ever.",
              "HIPAA, GDPR, PDPL aligned",
              "User-controlled access",
              "Future: decentralized identity layer"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-white/80 font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-[#00F5D4]/20 flex justify-center items-center shadow-[0_0_10px_rgba(0,245,212,0.1)] shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A86FF] to-[#00F5D4] rounded-xl blur-md opacity-20" />
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl p-5 shadow-lg">
              <p className="text-sm font-medium text-white/60 flex items-center gap-2">
                <span className="text-[#3A86FF] font-bold uppercase tracking-wider text-xs">Optional</span>
                Monetize anonymized insights for research.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Vault / DNA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative h-[450px] flex items-center justify-center [perspective:1000px] w-full mt-12 md:mt-0"
        >
          {/* Glass Vault */}
          <div className="relative w-full max-w-sm aspect-[3/4] bg-[#0A0A0F]/60 border border-white/10 backdrop-blur-md rounded-[2.5rem] shadow-[0_0_60px_rgba(58,134,255,0.1)] flex items-center justify-center overflow-hidden">
             
             {/* DNA Animation (CSS) */}
             <div className="relative w-24 h-[60%] flex flex-col justify-between py-4">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
                    className="relative w-full h-px flex justify-between items-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                     <div className="w-full h-px bg-gradient-to-r from-[#00F5D4]/40 to-[#3A86FF]/40 absolute top-0" />
                     <div className="w-[10px] h-[10px] rounded-full bg-[#00F5D4] shadow-[0_0_15px_#00F5D4] absolute -left-[5px] top-1/2 -translate-y-1/2" style={{ transform: "translateZ(30px)" }} />
                     <div className="w-[10px] h-[10px] rounded-full bg-[#3A86FF] shadow-[0_0_15px_#3A86FF] absolute -right-[5px] top-1/2 -translate-y-1/2" style={{ transform: "translateZ(-30px)" }} />
                  </motion.div>
                ))}
             </div>
             
             {/* Vault Overlay Gradients & Highlights */}
             <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay"/>
             <div className="absolute top-0 inset-x-0 h-1/4 bg-gradient-to-b from-[#0A0A0F] to-transparent pointer-events-none"/>
             <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none"/>

             <div className="absolute -inset-1 rounded-[2.5rem] border border-white/5 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
