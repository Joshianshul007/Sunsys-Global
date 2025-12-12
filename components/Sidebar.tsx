"use client";
import { useEffect, useState } from "react";

export default function ContactSidebar({ onClose }: { onClose?: () => void }) {
  const [open, setOpen] = useState(false);

  // Auto-open sidebar when component loads
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => {
            setOpen(false);
            if (onClose) setTimeout(() => onClose(), 350);
          }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-[430px]
          bg-[#111418]/95 backdrop-blur-xl border-l border-white/10
          shadow-2xl p-10 z-[100]
          transform transition-transform duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE */}
        <button
          onClick={() => {
            setOpen(false);
            if (onClose) setTimeout(() => onClose(), 350);
          }}
          className="text-white/60 hover:text-white text-2xl absolute top-6 right-6"
        >
          ✕
        </button>

        <h3 className="text-3xl font-extrabold text-blue-400 mb-10">
          Send us a Message
        </h3>

        <form className="space-y-6">
          <div>
            <label className="block text-sm text-white/70 mb-2">Full Name</label>
            <input type="text" placeholder="John Doe" className="contact-field" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Company Name</label>
            <input type="text" placeholder="Your Company" className="contact-field" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Email Address</label>
            <input type="email" placeholder="john@example.com" className="contact-field" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Phone Number</label>
            <input type="text" placeholder="730 320 4500" className="contact-field" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="contact-field"
            ></textarea>
          </div>

          <button
            className="w-full bg-gradient-to-r from-[#7b2fff] to-[#4a93ff] hover:opacity-90 py-3 rounded-xl text-white font-semibold shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
