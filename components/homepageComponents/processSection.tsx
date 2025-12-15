"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function OurProcess() {
  const ref = useRef<HTMLDivElement | null>(null);

  const SECTION_HEIGHT = 5000;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ---------------------------------------------
  // CIRCLE BACKGROUND (white when active)
  // Timing corrected to match line-through position
  // ---------------------------------------------
  const circle1 = useTransform(scrollYProgress, v =>
    v >= 0.00 && v < 0.18 ? "#ffffff" : "#0B1220"
  );
  const circle2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? "#ffffff" : "#0B1220"
  );
  const circle3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.60 ? "#ffffff" : "#0B1220"
  );
  const circle4 = useTransform(scrollYProgress, v =>
    v >= 0.60 ? "#ffffff" : "#0B1220"
  );

  // ---------------------------------------------
  // ICON COLOR (white icon → black when active)
  // ---------------------------------------------
  const icon1 = useTransform(scrollYProgress, v =>
    v >= 0.00 && v < 0.18 ? "invert(0)" : "invert(1)"
  );
  const icon2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? "invert(0)" : "invert(1)"
  );
  const icon3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.60 ? "invert(0)" : "invert(1)"
  );
  const icon4 = useTransform(scrollYProgress, v =>
    v >= 0.60 ? "invert(0)" : "invert(1)"
  );

  // ---------------------------------------------
  // CIRCLE + ICON SCALE (correct synced activation)
  // ---------------------------------------------
  const circleScale1 = useTransform(scrollYProgress, v =>
    v >= 0.00 && v < 0.18 ? 1.25 : 0.6
  );
  const circleScale2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? 1.25 : 0.6
  );
  const circleScale3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.60 ? 1.25 : 0.6
  );
  const circleScale4 = useTransform(scrollYProgress, v =>
    v >= 0.60 ? 1.25 : 0.6
  );

  // ---------------------------------------------
  // PROGRESS LINE WIDTH
  // ---------------------------------------------
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["5%", "108%"]);

  // ---------------------------------------------
  // STEP TEXT VISIBILITY (fade in/out)
  // ---------------------------------------------
  const step1 = useTransform(scrollYProgress, [0.00, 0.18], [1, 0.4]);
  const step2 = useTransform(scrollYProgress, [0.18, 0.38], [0.4, 1]);
  const step3 = useTransform(scrollYProgress, [0.38, 0.60], [0.4, 1]);
  const step4 = useTransform(scrollYProgress, [0.60, 1.00], [0.4, 1]);


  return (
    <section
      ref={ref}
      className="relative w-full "
      style={{ height: SECTION_HEIGHT }}
    >
      <div className="sticky top-0 pt-32 pb-48">

        <h2 className="text-center text-5xl font-extrabold mb-24">
          Our Process
        </h2>

        {/* TIMELINE LINE */}
        <div className="relative w-full max-w-6xl mx-auto mt-12 h-10">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 border-t-2 border-dashed border-white/20"></div>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-0 h-[3px] bg-blue-500 rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        {/* STEPS GRID */}
        <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-4 gap-6 text-center">

          {/* STEP 1 */}
          <motion.div style={{ opacity: step1, scale: step1 }} className="relative">
            <motion.div
              className="
                w-16 h-16 rounded-full flex items-center justify-center
                border border-white/10 mx-auto absolute 
                left-1/2 -translate-x-1/2 top-[-32px]
              "
              style={{ backgroundColor: circle1, scale: circleScale1 }}
            >
              <motion.div style={{ filter: icon1, scale: circleScale1 }}>
                <Image src="/scaleglobally.png" width={40} height={40} alt="Scale Globally" />
              </motion.div>
            </motion.div>

            <h3 className="mt-14 font-semibold text-xl">Scale Globally</h3>
          </motion.div>

          {/* STEP 2 */}
          <motion.div style={{ opacity: step2, scale: step2 }} className="relative">
            <motion.div
              className="
                w-16 h-16 rounded-full flex items-center justify-center
                border border-white/10 mx-auto absolute 
                left-1/2 -translate-x-1/2 top-[-32px]
              "
              style={{ backgroundColor: circle2, scale: circleScale2 }}
            >
              <motion.div style={{ filter: icon2, scale: circleScale2 }}>
                <Image src="/onboarding.png" width={40} height={40} alt="Onboard Smoothly" />
              </motion.div>
            </motion.div>

            <h3 className="mt-14 font-semibold text-xl">Onboard Smoothly</h3>
          </motion.div>

          {/* STEP 3 */}
          <motion.div style={{ opacity: step3, scale: step3 }} className="relative">
            <motion.div
              className="
                w-16 h-16 rounded-full flex items-center justify-center
                border border-white/10 mx-auto absolute
                left-1/2 -translate-x-1/2 top-[-32px]
              "
              style={{ backgroundColor: circle3, scale: circleScale3 }}
            >
              <motion.div style={{ filter: icon3, scale: circleScale3 }}>
                <Image src="/compliance.png" width={40} height={40} alt="Compliance Risk" />
              </motion.div>
            </motion.div>

            <h3 className="mt-14 font-semibold text-xl">Compliance Risk</h3>
          </motion.div>

          {/* STEP 4 */}
          <motion.div style={{ opacity: step4, scale: step4 }} className="relative">
            <motion.div
              className="
                w-16 h-16 rounded-full flex items-center justify-center
                border border-white/10 mx-auto absolute 
                left-1/2 -translate-x-1/2 top-[-32px]
              "
              style={{ backgroundColor: circle4, scale: circleScale4 }}
            >
              <motion.div style={{ filter: icon4, scale: circleScale4 }}>
                <Image src="/toptechtalent.png" width={40} height={40} alt="Top Tech Talent" />
              </motion.div>
            </motion.div>

            <h3 className="mt-14 font-semibold text-xl">Top Tech Talent</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
