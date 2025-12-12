import Image from "next/image"
import { LoginForm } from "@/components/login-form"
import Footer from "@/components/Footer"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pexel.jpg" // change this to your background image
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 -z-10 backdrop-blur-[2px]" />

      {/* Center Content */}
      <div className="flex min-h-screen items-center justify-center px-6">
        <div
          className="
            bg-white/10 
            backdrop-blur-xl 
            border border-white/20 
            shadow-2xl 
            rounded-3xl 
            p-10 
            w-full max-w-md
            animate-fadeIn
          "
        >


          <LoginForm />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
    
  )
}
