"use client";

import { useState } from "react";
import Link from "next/link";
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
      title: "QA Engineering",
      tech: ["Selenium", "JUnit", "Postman", "Cypress"],
    },
    {
      title: "Cybersecurity",
      tech: ["Network Security", "SIEM", "SOC", "Pen-Testing", "Incident Response"],
    },
    {
      title: "Blockchain",
      tech: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "Hyperledger"],
    },
    {
      title: "DevOps",
      tech: ["CI/CD", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    },
    {
      title: "C++ Development",
      tech: ["C++", "STL", "Boost", "Qt", "Embedded"],
    },
    {
      title: "SAP ABAP",
      tech: ["SAP ABAP", "SAP Fiori", "SAP HANA", "Integration"],
    },
    {
      title: "AI / ML Engineering",
      tech: ["TensorFlow", "PyTorch", "OpenCV", "Deep Learning", "NLP"],
    },
    {
      title: "UI / UX Design",
      tech: ["Figma", "Adobe XD", "Sketch", "Webflow"],
    },
    {
      title: "Cloud Engineering",
      tech: ["AWS", "Azure", "Google Cloud", "Serverless"],
    },
    {
      title: "App Development",
      tech: ["iOS", "Android", "Flutter", "React Native"],
    },
  ];

  return (
    <section className="w-full bg-[#0B0E11] text-white py-28">
      <div className="w-[90%] max-w-7xl mx-auto">

        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
          Browse Developers by Expertise
        </h2>

        <p className="text-center text-white/60 text-lg max-w-3xl mx-auto mb-20">
          Choose from highly skilled professionals across all major technologies and engineering domains.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#111418] border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-5">{cat.title}</h3>

              <div className="flex flex-wrap gap-2 mb-8">
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
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm shadow-lg transition"
              >
                Hire Now →
              </button>
            </div>
          ))}
        </div>

      </div>
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </section>
  );
}
