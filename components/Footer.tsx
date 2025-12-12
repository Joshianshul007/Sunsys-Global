import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020b2c] text-white pt-14 pb-10 border-t border-white/10">

      {/* MAIN FOOTER GRID */}
      <div className="w-[92%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ================= LEFT SECTION ================= */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"   // change if needed
              width={45}
              height={45}
              alt="Sunsys Global Logo"
            />
            <h3 className="text-xl font-semibold">Sunsys Global</h3>
          </div>

          {/* Short Description */}
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Sunsys Global is the Talent & Workforce Solutions Division of 
            Sunsys Techsol Pvt. Ltd., providing global hiring, engineering 
            talent, offshore teams, POSH services, and L&D programs.
          </p>
        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <div className="space-y-2 text-white/70 text-sm">
            <Link href="/aboutUs" className="block hover:text-white">About Us</Link>
            <Link href="/services" className="block hover:text-white">Our Services</Link>
            <Link href="/whyUs" className="block hover:text-white">Why Choose Us</Link>
            <Link href="/contactUs" className="block hover:text-white">Contact</Link>
            <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
          </div>
        </div>

        {/* ================= RIGHT SECTION (SOCIALS + WHATSAPP) ================= */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Connect With Us</h3>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <Link href="#" className="hover:text-blue-400" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>

            <Link href="#" className="hover:text-blue-400" aria-label="Facebook">
              <FaFacebook />
            </Link>

            <Link href="#" className="hover:text-blue-400" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>

          {/* WhatsApp CTA */}
          <Link
            href="https://wa.me/919105837321"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-sm font-medium px-5 py-3 rounded-lg"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </Link>
        </div>

      </div>

      {/* =============== FOOTER BOTTOM =============== */}
      <div className="mt-10 text-center text-white/50 text-xs space-y-1">
        <div>© {new Date().getFullYear()} Sunsys Global. All Rights Reserved.</div>

        <div className="text-white/40 text-[10px]">
          Designed & Developed by{" "}
          <Link href="https://anshumanjoshi.com" className="text-white/70 font-semibold">
            Anshuman Joshi
          </Link>
        </div>
      </div>

    </footer>
  );
}
