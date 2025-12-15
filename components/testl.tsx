"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <main className="bg-[#0B0E11] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[95vh] flex items-center pt-36 pb-24 px-6">
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              Build World-Class <br />
              Engineering Teams <br />
              <span className="text-blue-500">
                Fast, Compliant & Affordable
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mt-8 max-w-xl leading-relaxed">
              Connecting elite Indian & global tech talent with high-growth
              companies worldwide.
            </p>

            {/* SERVICES */}
            <div className="mt-6 text-white/60 font-medium">
              Staffing • Offshore Teams • Talent Deployment • Global Hiring
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
                Hire Engineering Talent
              </button>

              <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-lg transition">
                Apply for Global Roles
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="flex gap-6 mt-10 text-white/70 text-sm">
              <span>✔ Trusted by Global Startups</span>
              <span>✔ PAN-India Network</span>
              <span>✔ IIT-Level Talent</span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-blue-600/20 blur-3xl rounded-full"></div>

            <Image
              src="/hero-dev.png" // put image in /public
              alt="Global Engineering Teams"
              width={700}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES STRIP ================= */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Hire Top Engineers",
              desc: "Pre-vetted senior engineers ready to deploy globally.",
            },
            {
              title: "Build Offshore Teams",
              desc: "Dedicated teams with full compliance & payroll handling.",
            },
            {
              title: "Scale Faster",
              desc: "Reduce hiring costs by up to 40% without compromising quality.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111418] border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <section className="py-28 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to Build Your Dream Team?
          </h2>

          <p className="text-white/70 mt-6 text-lg">
            Let’s help you hire faster, smarter, and globally.
          </p>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-xl text-lg font-semibold transition">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
