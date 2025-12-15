"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function BrowseDevelopers() {
  const [showSidebar, setShowSidebar] = useState(false);

  const categories = [
    { title: "Web Development", tech: ["PHP", "Express.js", "ASP.Net", "Django", "Ruby on Rails", "Node.js"] },
    { title: "Frontend Development", tech: ["React.js", "Vue.js", "Angular", "jQuery"] },
    { title: "Mobile Development", tech: ["React Native", "Flutter", "Xamarin", "Firebase", "Swift", "Kotlin"] },
    { title: "Backend Development", tech: ["Python", "Java", "PostgreSQL", "REST", "Express.js", "Docker"] },
    { title: "Full Stack Development", tech: ["MERN", "MEAN", "Java", ".NET"] },
    { title: "DevOps", tech: ["CI/CD", "Kubernetes", "Jenkins", "Terraform", "AWS"] },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-[#111418] border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {cat.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-[#0d2d23] text-[#53ffa1] border border-[#1f4d3c]"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowSidebar(true)}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm"
            >
              Hire Now →
            </button>
          </div>
        ))}
      </div>

      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
}
