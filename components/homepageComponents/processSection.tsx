"use client";

import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="w-full py-32 bg-transparent">
      <h2 className="text-center text-5xl font-extrabold mb-24">
        Our Process
      </h2>

      {/* TIMELINE LINE */}
      <div className="relative w-full max-w-6xl mx-auto h-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 border-t-2 border-dashed border-white/20" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[3px] w-full bg-blue-500 rounded-full" />
      </div>

      {/* STEPS */}
      <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

        {/* STEP 1 */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center
            bg-white border border-white/10 mx-auto absolute
            left-1/2 -translate-x-1/2 top-[-32px] scale-110
          ">
            <Image
              src="/scaleglobally.png"
              width={40}
              height={40}
              alt="Scale Globally"
              className="invert-0"
            />
          </div>
          <h3 className="mt-14 font-semibold text-xl">
            Scale Globally
          </h3>
        </div>

        {/* STEP 2 */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center
            bg-[#0B1220] border border-white/10 mx-auto absolute
            left-1/2 -translate-x-1/2 top-[-32px]
          ">
            <Image
              src="/onboarding.png"
              width={40}
              height={40}
              alt="Onboard Smoothly"
              className="invert"
            />
          </div>
          <h3 className="mt-14 font-semibold text-xl">
            Onboard Smoothly
          </h3>
        </div>

        {/* STEP 3 */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center
            bg-[#0B1220] border border-white/10 mx-auto absolute
            left-1/2 -translate-x-1/2 top-[-32px]
          ">
            <Image
              src="/compliance.png"
              width={40}
              height={40}
              alt="Compliance Risk"
              className="invert"
            />
          </div>
          <h3 className="mt-14 font-semibold text-xl">
            Compliance Risk
          </h3>
        </div>

        {/* STEP 4 */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full flex items-center justify-center
            bg-[#0B1220] border border-white/10 mx-auto absolute
            left-1/2 -translate-x-1/2 top-[-32px]
          ">
            <Image
              src="/toptechtalent.png"
              width={40}
              height={40}
              alt="Top Tech Talent"
              className="invert"
            />
          </div>
          <h3 className="mt-14 font-semibold text-xl">
            Top Tech Talent
          </h3>
        </div>

      </div>
    </section>
  );
}
