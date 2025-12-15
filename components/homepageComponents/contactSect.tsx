"use client";
import Reveal from "../animate";

export default function ContactSection() {
  return (
<section className="section-spacing-lg">
      <Reveal from="right">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Contact Us</h2>
            <p className="text-white/70 mt-4 leading-relaxed text-base sm:text-lg">
              Sunsys Global — Talent & Workforce Solutions Division
              <br />📧 careers@sunsystechsol.com
              <br />📞 +91 9105837321
              <br />🌐 www.sunsysglobal.com
            </p>
          </div>

          <form className="grid gap-4 bg-[#111418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-[480px] mx-auto">
            <input className="contact-field" placeholder="Name" />
            <input className="contact-field" placeholder="Email" />
            <input className="contact-field" placeholder="Phone" />
            <input className="contact-field" placeholder="Requirement" />
            <input type="file" className="contact-field" />
            <button className="bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-base sm:text-lg">
              Submit
            </button>
          </form>

        </div>
      </Reveal>
    </section>
  );
}
