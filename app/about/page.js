'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology', icon: '💡' },
    { title: 'Excellence', description: 'Delivering nothing but the best for our clients', icon: '⭐' },
    { title: 'Collaboration', description: 'Working together for mutual success', icon: '🤝' },
    { title: 'Impact', description: 'Creating meaningful change in education', icon: '🌍' },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> admissionfull</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to revolutionize how educational institutions connect with students and grow digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                To empower educational institutions with intelligent digital solutions that drive growth, engagement, and student success.
              </p>
              <p className="text-gray-400">
                We believe every institution deserves to reach its full potential. Our platform combines cutting-edge technology with deep educational expertise to deliver measurable results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-300">
                To become the leading growth platform for educational institutions worldwide, transforming the future of education through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">100+</div>
              <p className="text-gray-300 mt-2">Institutions Served</p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">500K+</div>
              <p className="text-gray-300 mt-2">Students Reached</p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">98%</div>
              <p className="text-gray-300 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}