"use client";


export default function AboutPage() {
  return (
    <main
      className="pt-40 pb-28 px-8 relative text-white"
      style={{
        backgroundColor: "#0B0E11",
        backgroundImage: "url('/sunsys.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">

        {/* =========================================================
            SECTION 2 — ABOUT SUNSYS GLOBAL
        ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              About Sunsys Global
            </h1>

            <p className="text-white/70 text-lg mt-6 leading-relaxed">
              Sunsys Global is the international Talent & Workforce Solutions Division 
              of <strong>Sunsys Techsol Pvt. Ltd.</strong>  
              We help global companies scale engineering capacity with elite developers, 
              skilled professionals, and fresh talent — at up to 
              <span className="text-blue-400 font-semibold"> 40% lower cost.</span>
            </p>

            <p className="text-white/70 text-lg mt-6 leading-relaxed">
              We also open global career pathways for Indian engineers through  
              <strong> remote roles, international deployments, onsite projects,</strong>  
              and opportunities with global startups.
            </p>
          </div>

          {/* RIGHT — STATS BLOCK */}
          <div className="grid grid-cols-2 gap-6">
            {[
              ["40% Cost Advantage"],
              ["72 Hours–7 Days Deployment"],
              ["500+ Tech Professionals Network"],
              ["Global Talent Mobility Enabled"],
            ].map(([label], idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg backdrop-blur-sm"
              >
                <p className="text-xl font-bold text-blue-400">{label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================
            SECTION 3 — OUR SERVICES (6-CARDS)
        ========================================================= */}
        <section className="mt-28">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold mb-2">IT Staffing & Contract Hiring</h3>
              <p className="text-white/70">
                Developers, QA, UI/UX, Data Engineers, PMs, freshers & emerging roles.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-2">Offshore Engineering Teams</h3>
              <p className="text-white/70">
                Dedicated India delivery pods with engineering leadership & delivery management.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-2">Long-Term Talent Deployment</h3>
              <p className="text-white/70">
                Full-time, contract-to-hire, hybrid & remote developer integration.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-2">Global Talent Mobility</h3>
              <p className="text-white/70">
                Remote international jobs, visa support & client-site deployments.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-2">POSH Compliance & Training</h3>
              <p className="text-white/70">
                External IC member, workshops, documentation & sensitization programs.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl text-center">
              <div className="text-blue-500 text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2">Learning & Development (L&D)</h3>
              <p className="text-white/70">
                Communication, leadership, workplace behavior & job-readiness programs.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
