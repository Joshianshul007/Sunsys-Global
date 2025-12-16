"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function OurProcess() {
  const ref = useRef<HTMLDivElement>(null);

  const SECTION_HEIGHT = 4000;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // ✅ VALID OFFSET
  });

  /* ---------------- CIRCLE BACKGROUND ---------------- */
  const circle1 = useTransform(scrollYProgress, v =>
    v < 0.18 ? "#ffffff" : "#0B1220"
  );
  const circle2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? "#ffffff" : "#0B1220"
  );
  const circle3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.6 ? "#ffffff" : "#0B1220"
  );
  const circle4 = useTransform(scrollYProgress, v =>
    v >= 0.6 ? "#ffffff" : "#0B1220"
  );

  /* ---------------- ICON COLOR ---------------- */
  const icon1 = useTransform(scrollYProgress, v =>
    v < 0.18 ? "invert(0)" : "invert(1)"
  );
  const icon2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? "invert(0)" : "invert(1)"
  );
  const icon3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.6 ? "invert(0)" : "invert(1)"
  );
  const icon4 = useTransform(scrollYProgress, v =>
    v >= 0.6 ? "invert(0)" : "invert(1)"
  );

  /* ---------------- SCALE ---------------- */
  const scale1 = useTransform(scrollYProgress, v =>
    v < 0.18 ? 1.25 : 0.7
  );
  const scale2 = useTransform(scrollYProgress, v =>
    v >= 0.18 && v < 0.38 ? 1.25 : 0.7
  );
  const scale3 = useTransform(scrollYProgress, v =>
    v >= 0.38 && v < 0.6 ? 1.25 : 0.7
  );
  const scale4 = useTransform(scrollYProgress, v =>
    v >= 0.6 ? 1.25 : 0.7
  );

  /* ---------------- LINE PROGRESS ---------------- */
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} style={{ height: SECTION_HEIGHT }} className="relative w-full">
      <div className="sticky top-0 pt-32 pb-40">

        <h2 className="text-center text-5xl font-extrabold mb-24">
          Our Process
        </h2>

        {/* LINE */}
        <div className="relative max-w-6xl mx-auto h-10">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-white/20" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-blue-500 rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-4 max-w-6xl mx-auto mt-20 text-center gap-6">

          {/* STEP 1 */}
          <Step
            title="Scale Globally"
            img="/scaleglobally.png"
            bg={circle1}
            scale={scale1}
            filter={icon1}
          />

          {/* STEP 2 */}
          <Step
            title="Onboard Smoothly"
            img="/onboarding.png"
            bg={circle2}
            scale={scale2}
            filter={icon2}
          />

          {/* STEP 3 */}
          <Step
            title="Compliance Risk"
            img="/compliance.png"
            bg={circle3}
            scale={scale3}
            filter={icon3}
          />

          {/* STEP 4 */}
          <Step
            title="Top Tech Talent"
            img="/toptechtalent.png"
            bg={circle4}
            scale={scale4}
            filter={icon4}
          />

        </div>
      </div>
    </section>
  );
}

/* ---------------- STEP COMPONENT ---------------- */
function Step({
  title,
  img,
  bg,
  scale,
  filter,
}: any) {
  return (
    <div className="relative">
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center
          border border-white/10 absolute left-1/2 -translate-x-1/2 top-[-32px]"
        style={{ backgroundColor: bg, scale }}
      >
        <motion.div style={{ filter: filter as any, scale }}>
          <Image src={img} width={40} height={40} alt={title} />
        </motion.div>
      </motion.div>

      <h3 className="mt-14 text-xl font-semibold">{title}</h3>
    </div>
  );
}
