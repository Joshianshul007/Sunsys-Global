"use client";
import Reveal from "../animate";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#0B0E11] text-white py-16">
      <Reveal from="right">
        {/* GRID LAYOUT → ABOUT + FORM */}
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT PART — ABOUT US */}
          <div>
            <h2 className="text-4xl font-extrabold">Contact Us</h2>

            <p className="text-white/70 mt-4 leading-relaxed text-lg">
              Sunsys Global — Talent & Workforce Solutions Division
              <br />📧 careers@sunsystechsol.com
              <br />📞 +91 9105837321
              <br />🌐 www.sunsysglobal.com
            </p>
          </div>

          {/* RIGHT PART — CONTACT FORM (Reduced Width) */}
          <form className="grid grid-cols-1 gap-5 bg-[#111418] p-8 rounded-2xl border border-white/10 shadow-xl lg:w-[85%] mx-auto">
            <input className="bg-[#0B0E11] p-4 rounded-xl border border-white/10" placeholder="Name" />
            <input className="bg-[#0B0E11] p-4 rounded-xl border border-white/10" placeholder="Email" />
            <input className="bg-[#0B0E11] p-4 rounded-xl border border-white/10" placeholder="Phone" />
            <input className="bg-[#0B0E11] p-4 rounded-xl border border-white/10" placeholder="Requirement" />
            
            <input
              type="file"
              className="bg-[#0B0E11] p-4 rounded-xl border border-white/10"
            />

            <button className="bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-lg">
              Submit
            </button>
          </form>

        </div>
      </Reveal>
    </section>
  );
}
