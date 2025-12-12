"use client";

import React from "react";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

type From = "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  from?: From;
}

export default function Reveal({ children, from = "left" }: RevealProps): JSX.Element {
  const direction = {
    left: { x: -50, opacity: 0 },   // smaller slide distance
    right: { x: 50, opacity: 0 },   // smaller slide distance
  } as const;

  return (
    <motion.div
      initial={direction[from]}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}  // 👈 slower and smoother
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
