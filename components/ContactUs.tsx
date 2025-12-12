"use client";

export default function ContactUs() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* LEFT SIDE - CONTACT DETAILS + MAP */}
      <div className="space-y-10">

        {/* CALL */}
        <div className="bg-[#111418]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">📞 Call Us</h3>
          <p className="text-white/70">+91 730 XXX XXXX</p>
        </div>

        {/* EMAIL */}
        <div className="bg-[#111418]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">📧 Email</h3>
          <p className="text-white/70">support@sunsysglobaljobs.com</p>
        </div>

        {/* VISIT */}
        <div className="bg-[#111418]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">📍 Visit Us</h3>
          <p className="text-white/70 leading-relaxed">
            1503, Tower - 4, Panchsheel Wellington,<br />
            Crossing Republic, Ghaziabad, U.P - 201016
          </p>
        </div>

        {/* BUSINESS HOURS */}
        <div className="bg-[#111418]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">🕒 Business Hours</h3>
          <p className="text-white/70">Mon – Fri: 9:00 AM – 7:00 PM</p>
          <p className="text-white/70">Sat: 10:00 AM – 4:00 PM</p>
          <p className="text-white/70">Sun: Closed</p>
        </div>

        {/* GOOGLE MAP */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.4479874098797!2d77.443524!3d28.630214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee0ba5a6f7f1%3A0xf7c82948550d4a9!2sPanchsheel%20Wellington%2C%20Crossing%20Republic!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="260"
            className="opacity-90"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
<div className="bg-[#111418]/80 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
  <h3 className="text-2xl font-semibold text-blue-400 mb-6">
    Send us a Message
  </h3>

  <form className="space-y-6">

    {/* FULL NAME */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Full Name</label>
      <input
        type="text"
        placeholder="John Doe"
        className="contact-field"
      />
    </div>

    {/* COMPANY NAME */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Company Name</label>
      <input
        type="text"
        placeholder="Your Company"
        className="contact-field"
      />
    </div>

    {/* EMAIL ADDRESS */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Email Address</label>
      <input
        type="email"
        placeholder="john@example.com"
        className="contact-field"
      />
    </div>

    {/* PHONE NUMBER */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Phone Number</label>
      <input
        type="text"
        placeholder="730 320 4500"
        className="contact-field"
      />
    </div>

    {/* WEBSITE */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Website</label>
      <input
        type="text"
        placeholder="https://yourcompany.com"
        className="contact-field"
      />
    </div>

    {/* ADDRESS */}
    <div>
      <label className="block text-sm text-white/70 mb-2">Address</label>
      <input
        type="text"
        placeholder="Street, City, State, ZIP"
        className="contact-field"
      />
    </div>

    {/* MESSAGE */}
    <div>
      <label className="block text-sm text-white/70 mb-2">
        Brief message or Enquiry
      </label>
      <textarea
        rows={5}
        placeholder="Tell us about your staffing needs..."
        className="contact-field"
      ></textarea>
    </div>

    {/* BUTTON */}
    <button className="w-full bg-gradient-to-r from-[#7b2fff] to-[#4a93ff] hover:opacity-90 py-3 rounded-xl text-white font-semibold shadow-lg transition">
      Send Message
    </button>

  </form>
</div>

    </section>
  );
}
