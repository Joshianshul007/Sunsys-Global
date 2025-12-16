"use client";

import { ReactNode } from "react";

export default function HomepageWrapper({ children }: { children: ReactNode }) {
  return (
    <div
  className="
    relative w-full text-white
    bg-[url('/background.jpg')]
    bg-cover bg-center bg-no-repeat
  "
>

      {/* Optional subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,139,255,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
