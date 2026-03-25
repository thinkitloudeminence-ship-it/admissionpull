'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    { icon: '📈', title: 'Digital Growth', description: 'Boost your institution\'s online presence and reach more students.' },
    { icon: '🤝', title: 'Student Engagement', description: 'Interactive tools to connect with prospective students.' },
    { icon: '🤖', title: 'AI Analytics', description: 'Data-driven insights for better decision making.' },
    { icon: '🎯', title: 'Smart Targeting', description: 'Reach the right students with precision marketing.' },
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to help your institution grow and succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="px-8 py-3 rounded-full border-2 border-[#4ECDC4] text-white font-semibold hover:bg-[#4ECDC4]/10 transition-all duration-300">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}