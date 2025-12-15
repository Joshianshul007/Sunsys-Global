"use client";
import Footer from "./Footer";
export default function WhyUsPage() {
  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-28"
      style={{
        backgroundImage: "url('/prog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto text-white text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Why Choose <span className="text-blue-400">Sunsys Global?</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-16">
          We empower companies worldwide with elite engineering talent, faster hiring cycles,
          global-ready teams, and scalable workforce solutions — all at a significantly lower cost.
        </p>

        {/* BENEFITS GRID (3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* 1 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Elite Talent Pool</h3>
            <p className="text-white/70">
              IIT/NIT/IIIT engineers + industry-ready freshers.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Hiring Cycles</h3>
            <p className="text-white/70">
              Get vetted developers deployed within 72 hours–7 days.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Offshore Delivery Teams</h3>
            <p className="text-white/70">
              Structured pods with leadership, reporting & delivery oversight.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
            <p className="text-white/70">
              Powered by L&D programs for skill, leadership & communication.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-2">POSH-Compliant Workplace</h3>
            <p className="text-white/70">
              External IC member + training + complete compliance support.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl py-10 px-6 shadow-xl backdrop-blur-sm">
            <div className="text-5xl mb-4">📉</div>
            <h3 className="text-xl font-bold mb-2">Up to 40% Cost Advantage</h3>
            <p className="text-white/70">
              High-quality engineering talent at optimized cost structures.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
