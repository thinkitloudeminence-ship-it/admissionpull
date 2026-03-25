'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    icon: "📉",
    title: "Low Admissions",
    description: "Struggling to attract qualified students despite having excellent programs and facilities.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: "👁️",
    title: "Poor Visibility",
    description: "Hidden in search results, losing to competitors who dominate digital presence.",
    color: "from-yellow-500 to-red-500"
  },
  {
    icon: "👥",
    title: "Weak Engagement",
    description: "Prospective students lose interest due to outdated communication methods.",
    color: "from-purple-500 to-pink-500"
  }
]

export default function ProblemSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 100,
          rotationX: 15,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out"
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Challenge of
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Modern Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional methods are failing. Institutions face unprecedented challenges in reaching and converting modern students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card p-8 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="text-6xl mb-6">{problem.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}