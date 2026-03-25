/* eslint-disable */
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function CTASection() {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20" />
      <div ref={glowRef} className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Institution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join forward-thinking institutions that are already using admissionfull to achieve unprecedented growth.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10">Start Your Growth Journey →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}