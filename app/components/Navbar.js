"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-black text-white">
      <h1 className="hero-text text-5xl font-bold text-center">
        Helping Institutions Grow Digitally
      </h1>
      <p className="hero-text mt-4 text-lg">
        Build trust. Drive admissions. Scale faster.
      </p>

      <button className="hero-text mt-6 px-6 py-3 bg-white text-black rounded-full hover:scale-110 transition">
        Start Now
      </button>
    </section>
  );
}