"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import Link from "next/link";


const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/why-us", label: "Why Us?" },
  { href: "/EngineerSection", label: "For Engineer" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Get in Touch" },
  { href: "/sign-up", icon: "/profile.png" },  
];

export default function Navbar() {
  const router = useRouter();
const [toggle, setToggle] = useState(false);

// Load saved state on component mount
useEffect(() => {
  const saved = localStorage.getItem("hireToggle");
  if (saved === "true") setToggle(true);
}, []);

const handleHireDevelopers = () => {
  if (!toggle) {
    // First click → Go to About Page
    localStorage.setItem("hireToggle", "true");
    setToggle(true);
    router.push("/aboutUs");
  } else {
    // Second click → Go to Home
    localStorage.setItem("hireToggle", "false");
    setToggle(false);
    router.push("/");
  }
};


  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0B0E11] flex justify-center py-4 shadow-lg">
      <div className="w-[90%] max-w-7xl h-20 border border-white/10 rounded-xl bg-[#0B0E11] flex items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-widest text-white">
            SUNSYS <span className="text-blue-500">GLOBAL</span> JOBS
          </span>
        </Link>

        {/* Nav Links */}
      

<nav className="hidden md:flex items-center space-x-10 text-white/80 text-sm font-medium">
  {NAV_LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="hover:text-white flex items-center"
    >
      {/* If icon exists → render image */}
      {link.icon ? (
        <Image
          src={link.icon}
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full hover:opacity-80 transition"
        />
      ) : (
        link.label
      )}
    </Link>
  ))}
</nav>


       
      </div>
    </header>
  );
}
