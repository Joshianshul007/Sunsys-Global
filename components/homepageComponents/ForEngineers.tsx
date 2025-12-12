"use client";
import Reveal from "../animate";
import Link from "next/link";

export default function ForEngineers() {
  return (
    <section className="w-full bg-[#0B0E11] text-white py-16 flex justify-center">
      <Reveal from="left">
       <div className="section-container relative overflow-hidden rounded-3xl p-12">


          <h2 className="text-4xl md:text-5xl font-extrabold">
            Build Your <span className="text-blue-500">Global Tech Career</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed text-lg">
            We help Indian engineers of all levels access remote international roles,
            relocation opportunities, and startup engineering positions.
          </p>

          <div className="flex justify-center gap-6 mt-10">
            <Link href="/Apply" className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-lg">
              Apply Now
            </Link>

            <button className="border border-white/20 px-10 py-4 rounded-xl hover:bg-white/10 text-lg">
              Join Talent Community
            </button>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
