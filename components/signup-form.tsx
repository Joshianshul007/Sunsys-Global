"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};

export function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!name) newErrors.name = "Name is required";

    if (!email) newErrors.email = "Email is required";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    setTimeout(() => {
      router.push("/Log-in");
    }, 2000);
  };

  return (
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
          <form onSubmit={handleSubmit} className="w-full max-w-md text-white">

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 text-6xl">🎉</div>
          <h2 className="text-3xl font-bold text-center text-green-400">
            Account Created!
          </h2>
          <p className="text-center text-white/70 mt-2">
            Redirecting to Login...
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

          {/* NAME */}
          <div className="mb-4">
            <label>Name:</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

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

          {/* CONFIRM PASSWORD */}
          <div className="mb-4">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="w-full mt-2 p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* SIGNUP BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all"
          >
            Sign Up
          </button>

          {/* LOGIN LINK */}
          <p className="text-center mt-5 text-white/80">
            Already have an account? <br />
            <Link href="/log-in" className="text-white underline">
              Login
            </Link>
          </p>
        </>
      )}
    </form>
        </div>
      </div>
    
  );
}
