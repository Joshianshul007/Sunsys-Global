"use client";
import Reveal from "../animate";

export default function ClientLogos() {
  const logos = ["Logo A", "Logo B", "Logo C", "Logo D"];

  return (
    <section className="w-full bg-[#0B0E11] text-white py-12">
      <Reveal from="right">
        <div className="section-container text-center">

          <h3 className="text-2xl font-bold mb-6">Trusted By</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {logos.map((l, i) => (
              <div
                key={i}
                className="bg-[#111418] p-6 rounded-xl flex items-center justify-center text-white/80"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
