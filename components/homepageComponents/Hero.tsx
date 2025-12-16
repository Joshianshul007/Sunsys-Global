"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type HeroProps = {
  setShowSidebar?: Dispatch<SetStateAction<boolean>>;
};

export default function Hero({ setShowSidebar }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_top,_rgba(79,139,255,0.15),transparent_60%)]
          bg-[#070B12]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          section-container
          min-h-[90vh]
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-16
          pt-32
        "
      >

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build World-Class <br />
            Engineering Teams <br />
            Fast, Compliant & <br />
            Affordable
          </h1>

          <p className="mt-6 text-white/70 max-w-xl">
            Connecting elite Indian & global tech talent with high-growth
            companies worldwide.
          </p>

          <p className="mt-4 text-sm text-blue-400 font-medium">
            Staffing • Offshore Teams • Talent Deployment • Global Hiring • POSH • L&D
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowSidebar?.(true)}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold"
            >
              Hire Engineering Talent
            </button>

            <button className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl font-semibold">
              Apply for Global Roles
            </button>
          </div>

          {/* TRUST */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/80">
            <span>✔ Trusted by Global Startups</span>
            <span>✔ PAN-India Networks</span>
            <span>✔ IIT/NIT Talent Pool</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <Image
              src="/hero-developers.jpg"
              alt="Engineering Talent"
              width={600}
              height={450}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
