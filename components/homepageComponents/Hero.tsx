"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({ setShowSidebar }: { setShowSidebar: (show: boolean) => void }) {
  return (
    <main className="pt-40 px-8 bg-black text-white min-h-screen flex items-center relative overflow-hidden">

     <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        {/* LEFT HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build World-Class <br /> Engineering Teams <br /> Fast, Compliant & Affordable
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/70 mt-6 max-w-xl leading-relaxed"
          >
            Connecting elite Indian & global tech talent with high-growth companies worldwide.
          </motion.p>

          <p className="mt-4 text-blue-400 font-semibold tracking-wide">
            Staffing • Offshore Teams • Talent Deployment • Global Hiring • POSH • L&D
          </p>

          <motion.div
            className="mt-10 flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowSidebar(true)}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Hire Engineering Talent
            </button>

            <Link
              href="/Apply"
              className="border border-white/20 text-lg px-8 py-6 rounded-xl bg-[#0B0E11] text-white hover:bg-white/10"
            >
              Apply for Global Roles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              "Trusted by Global Startups",
              "PAN-India Networks",
              "IIT/NIT Talent Pool",
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✔</span>
                <p className="text-white/70 text-sm">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/hero-developers.jpg"
            alt="Global engineering teams"
            width={600}
            height={500}
            className="object-contain drop-shadow-2xl rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
