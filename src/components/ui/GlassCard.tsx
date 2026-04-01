"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("glass-card rounded-3xl p-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
