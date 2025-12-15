"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote — US Client",
    img: "/react.jpg",
  },
  {
    title: "Full-Stack Engineer (Node + React)",
    location: "Remote — Europe",
    img: "/fullstack.jpg",
  },
  {
    title: "AI/ML Engineer",
    location: "Hybrid — Bangalore",
    img: "/ai.jpg",
  },
  {
    title: "Backend Engineer (Python)",
    location: "Remote — Canada",
    img: "/backend.jpg",
  },
];

export default function FeaturedOpenings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 text-white">
      <div className="section-container">

        {/* HEADING */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          Featured Openings
        </h3>

        <div className="relative w-full max-w-7xl mx-auto">

          {/* ⭐ PREMIUM CARD */}
          <div
            className="
              relative overflow-hidden rounded-3xl p-8 
              bg-[#0f1115] backdrop-blur-xl 
              border border-white/10 
              shadow-[0_0_40px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_70px_rgba(0,0,0,0.95)]
              transition-all duration-500
              hover:-translate-y-1
            "
          >
            {/* GLOW TOP RIGHT */}
            <div className="absolute -top-24 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full opacity-30" />

            {/* GLOW BOTTOM LEFT */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full opacity-20" />

            {/* GLASS SHINE */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            {/* IMAGE */}
            <Image
              src={jobs[currentIndex].img}
              alt={jobs[currentIndex].title}
              width={1600}
              height={800}
              priority
              className="
                relative z-10 rounded-2xl object-cover mb-6 
                h-[450px] w-full
                shadow-[0_0_25px_rgba(0,0,0,0.6)]
                transition-all duration-500
                hover:scale-[1.03]
              "
            />

            {/* TEXT */}
            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-3 drop-shadow-md">
                {jobs[currentIndex].title}
              </h4>
              <p className="text-white/70 text-lg">
                {jobs[currentIndex].location}
              </p>
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-3 mt-6 relative z-20">
            {jobs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-3 w-3 rounded-full transition-all duration-300 
                  ${
                    currentIndex === index
                      ? "bg-blue-500 scale-150 shadow-[0_0_10px_rgba(37,99,235,0.9)]"
                      : "bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
