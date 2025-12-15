"use client";



import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Errors = {
  email?: string;
  password?: string;
};

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md text-white"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 text-6xl">✅</div>
          <h2 className="text-3xl font-bold text-center text-green-400">Login Successful!</h2>
          <p className="text-center text-white/70 mt-2">Redirecting to homepage...</p>
        </div>
      ) : (
        <>
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* EMAIL */}
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="text"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            className="w-full mt-2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all"
        >
          Login
        </button>

        {/* SIGN UP LINK */}
        <p className="text-center mt-5 text-white/80">
          Don’t have an account? <br />
          <Link href="/sign-up" className="text-white underline">
            Sign Up
        </Link>
      </p>
        </>
      )}
    </form>
  );
}