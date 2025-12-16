"use client";

import { ReactNode } from "react";

export default function HomepageWrapper({ children }: { children: ReactNode }) {
  return (
    <main
      className="
        relative
        w-full
        min-h-screen
        text-white
        overflow-x-hidden

        /* Background image */
        bg-[url('/background.jpg')]
        bg-no-repeat
        bg-top
        bg-[length:100%_auto]
        md:bg-cover
      "
    >
      {/* Subtle glow effect */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_top,_rgba(79,139,255,0.12),transparent_60%)]
        "
      />

      {/* CONTENT WRAPPER */}
      <div
        className="
          relative z-10
          w-full
        "
      >
        {children}
      </div>
    </main>
  );
}
