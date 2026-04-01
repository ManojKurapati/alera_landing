"use client";
import React, { useEffect, useState } from "react";

export function ParallaxBackground() {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-bg-deep">
      {/* Top Left Bio-Teal Glow */}
      <div 
        className="absolute top-[0%] left-[-20%] w-[120%] h-[100%] bg-[radial-gradient(circle_at_40%_10%,_rgba(0,245,212,0.08)_0%,_transparent_50%)] opacity-70 blur-[100px]"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />
      {/* Bottom Right AI-Blue Glow */}
      <div 
        className="absolute top-[30%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_70%_50%,_rgba(58,134,255,0.05)_0%,_transparent_60%)] opacity-70 blur-[120px]"
        style={{ transform: `translateY(${offsetY * -0.05}px)` }}
      />
    </div>
  );
}
