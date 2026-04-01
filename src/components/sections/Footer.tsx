import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050508] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="flex flex-col items-center md:items-start flex-1">
           <div className="text-3xl font-bold font-[var(--font-satoshi)] tracking-tight text-white mb-4">
             Alera
           </div>
           <p className="text-xs text-white/40 max-w-xs text-center md:text-left leading-relaxed">
             Alera provides informational guidance only and is not a medical device. Always consult your physician or healthcare provider before making medical decisions.
           </p>
        </div>
        
        <div className="flex gap-16 text-sm font-medium text-white/60">
           <div className="flex flex-col gap-4">
             <a href="#" className="hover:text-white transition-colors">About</a>
             <a href="#" className="hover:text-white transition-colors">Protocols</a>
           </div>
           <div className="flex flex-col gap-4">
             <a href="#" className="hover:text-white transition-colors">Careers</a>
             <a href="#" className="hover:text-white transition-colors">Investors</a>
           </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4 text-xs text-white/40 flex-1">
           <span className="mb-2">Alera © 2026</span>
           <div className="flex flex-wrap justify-center md:justify-end gap-6 w-full">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Data Protection</a>
             <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
