'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const stages = [
  {
    title: "Discovery",
    description: "AI-powered discovery engine identifies ideal students",
    color: "#3B82F6"
  },
  {
    title: "Trust",
    description: "Build authentic connections through personalized engagement",
    color: "#8B5CF6"
  },
  {
    title: "Engagement",
    description: "Interactive experiences that showcase your institution",
    color: "#06B6D4"
  },
  {
    title: "Conversion",
    description: "Seamless admission process with intelligent guidance",
    color: "#EC489A"
  }
]

export default function SystemSection() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
        opacity: 0,
        x: -100,
        stagger: 0.3,
        duration: 1,
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
            Intelligent Growth
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> System</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A revolutionary approach that transforms how institutions connect with students.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {stages.map((stage, index) => (
            <div key={index} className="flex mb-12 last:mb-0 group">
              <div className="flex-shrink-0 mr-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  {index < stages.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />
                  )}
                </div>
              </div>
              <div className="flex-grow glass-card p-6 group-hover:transform group-hover:translate-x-4 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2" style={{ color: stage.color }}>
                  {stage.title}
                </h3>
                <p className="text-gray-300">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}