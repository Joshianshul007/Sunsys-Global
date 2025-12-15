"use client";

import Reveal from "../animate";
import Link from "next/link";

export default function ForEngineers() {
  return (
    <section className="section-spacing">
      <Reveal from="left">
        <div className="section-container text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Build Your <span className="text-blue-500">Global Tech Career</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
            We help Indian engineers access remote international roles,
            relocation opportunities, and global startup engineering positions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/Apply"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-base md:text-lg"
            >
              Apply Now
            </Link>

            <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 text-base md:text-lg">
              Join Talent Community
            </button>
          </div>

          {/* subtle divider for breathing space */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        </div>
      </Reveal>
    </section>
  );
}
