'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  { icon: "⚡", title: "Real-time Analytics", description: "Instant insights into student behavior and campaign performance" },
  { icon: "📈", title: "Predictive Growth", description: "AI-powered forecasting for strategic decision making" },
  { icon: "🎯", title: "Smart Targeting", description: "Reach the right students with precision engagement" },
  { icon: "👥", title: "Community Building", description: "Create lasting connections with prospective families" },
  { icon: "🌍", title: "Global Reach", description: "Expand your institution's visibility worldwide" },
  { icon: "🛡️", title: "Data Security", description: "Enterprise-grade protection for sensitive information" }
]

export default function PlatformSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          rotation: i % 2 === 0 ? -5 : 5,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out"
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> to Succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive growth system designed specifically for educational institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{capability.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-300">{capability.description}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}