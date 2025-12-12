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
    <section className="w-full bg-[#0B0E11] text-white py-28">
      <div className="w-[90%] max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="bg-[#111418] border border-white/10 rounded-2xl p-10 shadow-xl">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
