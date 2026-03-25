'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      title: 'Digital Growth Strategy',
      description: 'Custom digital marketing strategies designed specifically for educational institutions.',
      icon: '📈',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'ROI Tracking']
    },
    {
      title: 'Student Engagement Platform',
      description: 'Interactive tools to engage prospective students and build meaningful connections.',
      icon: '🤝',
      features: ['Virtual Tours', 'Chat Systems', 'Event Management', 'Feedback Tools']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics to understand student behavior and optimize admissions.',
      icon: '🤖',
      features: ['Predictive Modeling', 'Behavior Analysis', 'Conversion Tracking', 'Real-time Reports']
    },
    {
      title: 'Content Marketing',
      description: 'Compelling content that showcases your institution\'s unique value proposition.',
      icon: '📝',
      features: ['Blog Posts', 'Video Content', 'Social Media', 'Email Campaigns']
    },
    {
      title: 'SEO & Visibility',
      description: 'Improve your online presence and attract more qualified students.',
      icon: '🔍',
      features: ['Keyword Strategy', 'Local SEO', 'Technical SEO', 'Link Building']
    },
    {
      title: 'Admission Automation',
      description: 'Streamline your admission process with intelligent automation tools.',
      icon: '⚙️',
      features: ['Application Management', 'Document Processing', 'Status Tracking', 'Communication']
    },
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
              Our
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive solutions to help your institution thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#4ECDC4] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="text-[#4ECDC4]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}