"use client";
import Reveal from "../animate";

export default function Services() {
  const services = [
    { icon: "🧑‍💻", title: "IT Staffing & Contract Hiring" },
    { icon: "👨‍🔧", title: "Offshore Engineering Teams" },
    { icon: "📝", title: "Long-Term Talent Deployment" },
    { icon: "🌍", title: "Global Talent Mobility" },
    { icon: "🔐", title: "POSH Compliance & Training" },
    { icon: "📘", title: "Learning & Development (L&D)" },
  ];

  return (
<section className="section-spacing">
      <Reveal from="left">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-[#111418] border border-white/10 rounded-2xl p-8 shadow-xl"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
