"use client";
import { useState } from "react";

import Hero from "./homepageComponents/Hero";
import About from "./homepageComponents/about";
import Services from "./homepageComponents/services";
import WhyChoose from "./homepageComponents/whychoose";
import ForEngineers from "./homepageComponents/ForEngineers";
import ContactSection from "./homepageComponents/contactSect";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ProcessSection from "./homepageComponents/processSection";
import TrustedCompanies from "./homepageComponents/trusted";


export default function Homepage() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
    
      <Hero setShowSidebar={setShowSidebar} />

      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}

      <About />
      <Services />
      <WhyChoose />
      <ForEngineers />
      <TrustedCompanies />
      <ProcessSection />
      <ContactSection />

      <Footer />
    </>
  );
}
