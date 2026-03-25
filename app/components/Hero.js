'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll('.word')
      
      gsap.from(words, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      })
    })

    return () => ctx.revert()
  }, [])

  const words = "Empower Your Educational Institution with Digital Excellence".split(" ")

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 text-[#FF6B6B] text-sm font-semibold backdrop-blur-sm border border-[#FF6B6B]/30">
            🚀 The Future of Education Technology
          </span>
        </motion.div>

        <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          {words.map((word, i) => (
            <span key={i} className="word inline-block mx-2">
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#4ECDC4] bg-clip-text text-transparent">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Transform your institution with our intelligent growth platform. 
          Experience unprecedented visibility, engagement, and student success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Start Your Journey →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
          
          <Link href="/services">
            <button className="px-8 py-4 rounded-full border-2 border-[#4ECDC4] text-white font-semibold text-lg hover:bg-[#4ECDC4]/10 transition-all duration-300">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}