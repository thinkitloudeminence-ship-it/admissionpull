/* eslint-disable */
// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { label: "Admission Increase", value: 156, suffix: "%", color: "from-[#FF6B6B] to-[#FF8E53]" },
  { label: "Student Engagement", value: 243, suffix: "%", color: "from-[#4ECDC4] to-[#6c5ce7]" },
  { label: "Brand Visibility", value: 892, suffix: "%", color: "from-[#FF6B6B] to-[#4ECDC4]" },
  { label: "Conversion Rate", value: 78, suffix: "%", color: "from-[#4ECDC4] to-[#FF6B6B]" }
]

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </span>
  )
}

export default function ImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B6B]/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Impact,
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Measurable Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Institutions using our system are seeing unprecedented growth across all metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="relative z-10">
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-lg text-gray-300 mt-4">{stat.label}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}