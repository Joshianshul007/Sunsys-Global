"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function OurProcess() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Increase scroll height so the animation has enough space to reach step 4
  const SECTION_HEIGHT = 2400; // increased from 1200 → FIX

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  // Progress for line (full scroll = full line)
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["5%", "100%"]);

  // Step activation ranges (scrub forward/backward)
  const step1 = useTransform(scrollYProgress, [0, 0.20], [1, 0.4]);
  const step2 = useTransform(scrollYProgress, [0.20, 0.45], [0.4, 1]);
  const step3 = useTransform(scrollYProgress, [0.45, 0.70], [0.4, 1]);
  const step4 = useTransform(scrollYProgress, [0.70, 1], [0.4, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#05070D] text-white"
      style={{ height: SECTION_HEIGHT }} // full scroll area
    >
      <div className="sticky top-0 pt-32 pb-48">
        <h2 className="text-center text-5xl font-extrabold mb-24">
          Our Process
        </h2>

        {/* LINE */}
        <div className="relative w-full max-w-6xl mx-auto mt-12">
          {/* dashed line */}
          <div className="absolute left-0 right-0 top-5 border-t-2 border-dashed border-white/20"></div>

          {/* animated blue progress */}
          <motion.div
            className="absolute top-5 left-0 h-[3px] bg-blue-500 rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        {/* STEPS */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-4 gap-6 text-center">
          
          {/* STEP 1 */}
          <motion.div style={{ opacity: step1, scale: step1 }}>
            <div className="w-14 h-14 bg-[#0B1220] rounded-full flex items-center justify-center border border-white/10 mx-auto">
              <Image src="/icons/globe.svg" alt="1" width={30} height={30} />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Scale Globally</h3>
          </motion.div>

          {/* STEP 2 */}
          <motion.div style={{ opacity: step2, scale: step2 }}>
            <div className="w-14 h-14 bg-[#0B1220] rounded-full flex items-center justify-center border border-white/10 mx-auto">
              <Image src="/icons/team.svg" alt="2" width={30} height={30} />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Onboard Smoothly</h3>
          </motion.div>

          {/* STEP 3 */}
          <motion.div style={{ opacity: step3, scale: step3 }}>
            <div className="w-14 h-14 bg-[#0B1220] rounded-full flex items-center justify-center border border-white/10 mx-auto">
              <Image src="/icons/compliance.svg" alt="3" width={30} height={30} />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Compliance Risk</h3>
          </motion.div>

          {/* STEP 4 */}
          <motion.div style={{ opacity: step4, scale: step4 }}>
            <div className="w-14 h-14 bg-[#0B1220] rounded-full flex items-center justify-center border border-white/10 mx-auto">
              <Image src="/icons/talent.svg" alt="4" width={30} height={30} />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Top Tech Talent</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
