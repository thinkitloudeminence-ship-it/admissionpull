'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> admissionPull</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              We're revolutionizing how educational institutions connect with students in the digital age.
            </p>
            <p className="text-gray-400 mb-6">
              Our platform combines cutting-edge technology with educational expertise to deliver measurable growth for schools and colleges worldwide.
            </p>
            <Link href="/about">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold hover:scale-105 transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">100+</div>
                <p className="text-gray-400 text-sm">Institutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">500K+</div>
                <p className="text-gray-400 text-sm">Students Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">98%</div>
                <p className="text-gray-400 text-sm">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">24/7</div>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}