"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowButton({ className, children, ...props }: HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-full px-8 py-4 font-semibold text-white overflow-hidden",
        "bg-white/5 backdrop-blur-md",
        "border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]",
        "hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:border-[#00F5D4]/50 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5D4] to-[#3A86FF] opacity-0 hover:opacity-20 transition-opacity duration-300" />
      <span className="relative z-10">{children as React.ReactNode}</span>
    </motion.button>
  );
}
