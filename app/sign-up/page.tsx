import Image from "next/image";
import { SignupForm } from "@/components/signup-form";
import Footer from "@/components/Footer";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pexel.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <SignupForm />
      <br /><br />
      <Footer />
    </div>
  );
}
