"use client";
import Reveal from "../animate";

export default function WhyChoose() {
  return (
    <section className="section-spacing">
      <Reveal from="right">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
          Why Choose <span className="text-blue-500">Sunsys Global</span>
        </h2>

        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            "🎯 Elite IIT/NIT/IIIT talent + job-ready freshers",
            "🚀 Fast hiring cycles (72hrs–7 days)",
            "🌍 Offshore team structure with delivery oversight",
            "📈 Professional growth via L&D programs",
            "🔐 Safer workplace via POSH programs",
            "📊 Up to 40% cost advantage",
          ].map((item, i) => (
            <div
              key={i}
              className="p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/20 to-transparent"
            >
              <div className="p-8 rounded-3xl bg-[#0f1115]/90 border border-white/10 text-center">
                <p className="text-white/90 text-base sm:text-lg">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
