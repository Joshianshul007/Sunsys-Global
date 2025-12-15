"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({
  setShowSidebar,
}: {
  setShowSidebar: (show: boolean) => void;
}) {
  return (
<main className="min-h-screen flex items-center section-spacing-lg">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build World-Class <br /> Engineering Teams <br /> Fast, Compliant & Affordable
          </h1>

          <p className="text-white/70 mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
            Connecting elite Indian & global tech talent with high-growth companies worldwide.
          </p>

          <p className="mt-4 text-blue-400 font-semibold tracking-wide text-sm sm:text-base">
            Staffing • Offshore Teams • Talent Deployment • Global Hiring • POSH • L&D
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowSidebar(true)}
              className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-4 md:py-5 rounded-xl text-base md:text-lg"
            >
              Hire Engineering Talent
            </button>

            <Link
              href="/careers"
              className="border border-white/20 px-6 md:px-8 py-4 md:py-5 rounded-xl bg-[#0B0E11] hover:bg-white/10 text-base md:text-lg"
            >
              Apply for Global Roles
            </Link>
          </div>
          {/* TRUST & CERTIFICATIONS */}
<div className="mt-12">

  {/* divider */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

  <div className="flex flex-wrap items-center gap-8">

    {/* ISO 9001 */}
    <div className="flex items-center gap-4">
      <Image
        src="/iso.png"
        alt="ISO 9001 Certified"
        width={70}
        height={70}
        className="object-contain"
      />
      <div>
        <p className="font-semibold text-white text-sm">
          ISO 9001:2015 Certified
        </p>
        <p className="text-xs text-white/60 max-w-[220px]">
          Globally recognized quality management standards ensuring consistent and reliable service delivery.
        </p>
      </div>
    </div>

    {/* RQC */}
    <div className="flex items-center gap-4">
      <Image
        src="/rqc.png"
        alt="RQC Certified"
        width={70}
        height={70}
        className="object-contain"
      />
      <div>
        <p className="font-semibold text-white text-sm">
          RQC Certified
        </p>
        <p className="text-xs text-white/60 max-w-[220px]">
          Certified recruitment practices with strong compliance, ethics, and data security.
        </p>
      </div>
    </div>

  </div>
</div>


          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Trusted by Global Startups",
              "PAN-India Networks",
              "IIT/NIT Talent Pool",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <p className="text-white/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/hero-developers.jpg"
            alt="Global engineering teams"
            width={600}
            height={500}
            className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[600px] object-contain rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
