"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = ["facebook", "slack", "framer", "netflix", "google", "linkedin"];

export default function TrustedCompanies() {
  return (
<section className="section-spacing-sm overflow-hidden">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Trusted by High-Growth Companies
        </motion.h2>

        <p className="mt-4 text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
          Partnering with global startups and enterprises to build compliant,
          scalable, and world-class engineering teams.
        </p>

        <div className="relative w-full h-[120px] sm:h-[150px] flex items-center overflow-hidden mt-12">
          <div className="flex w-[200%] animate-marquee items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex justify-center w-56 opacity-80">
                <Image
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${logo}.svg`}
                  alt={logo}
                  width={150}
                  height={44}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
