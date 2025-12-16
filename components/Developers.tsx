"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function BrowseDevelopers() {
  const [showSidebar, setShowSidebar] = useState(false);

  const categories = [
    {
      title: "Web Development",
      tech: ["PHP", "Express.js", "ASP.Net", "Django", "Ruby on Rails", "Node.js"],
    },
    {
      title: "Frontend Development",
      tech: ["React.js", "Vue.js", "Angular", "jQuery"],
    },
    {
      title: "Mobile Development",
      tech: ["React Native", "Flutter", "Xamarin", "Firebase", "Swift", "Kotlin"],
    },
    {
      title: "Backend Development",
      tech: ["Python", "Java", "PostgreSQL", "REST", "Express.js", "Docker"],
    },
    {
      title: "Full Stack Development",
      tech: ["MERN", "MEAN", "Java", ".NET"],
    },
    {
      title: "DevOps",
      tech: ["CI/CD", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    },
  ];

  return (
    <>
      <section className="w-full section-spacing overflow-x-hidden bg-[#0B0E11]">
        <div className="section-container">
          
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-white">
              Hire Developers by Expertise
            </h2>
            <p className="mt-3 text-white/60 max-w-2xl mx-auto">
              Choose from specialized engineering domains with vetted, job-ready talent.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="
                  relative rounded-2xl p-7
                  bg-gradient-to-br from-[#0f131a] to-[#0a0d12]
                  border border-white/10
                  shadow-lg
                  hover:shadow-[0_30px_90px_-30px_rgba(79,139,255,0.35)]
                  transition-all duration-300
                "
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cat.title}
                </h3>

                {/* Accent */}
                <div className="w-12 h-[2px] bg-blue-500/70 rounded-full mb-5" />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1.5 text-xs font-semibold
                        rounded-full
                        bg-[#0f1f1a]
                        text-[#53ffa1]
                        border border-[#1f4d3c]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setShowSidebar(true)}
                  className="
                    inline-flex items-center gap-2
                    bg-blue-600 hover:bg-blue-500
                    px-5 py-2.5
                    rounded-lg text-sm font-semibold
                    text-white
                    transition
                  "
                >
                  Hire Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
}
