'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', details: '123 Innovation Hub, Silicon Valley, CA 94025' },
    { icon: '📧', title: 'Email Us', details: 'hello@admissionpull.com', link: 'mailto:hello@admissionpull.com' },
    { icon: '📞', title: 'Call Us', details: '+1 (234) 567-890', link: 'tel:+1234567890' },
    { icon: '🕒', title: 'Business Hours', details: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✓</div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4ECDC4] transition-colors text-white"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-black/80 text-sm text-[#4ECDC4]">
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4ECDC4] transition-colors text-white"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-black/80 text-sm text-[#4ECDC4]">
                    Email Address
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4ECDC4] transition-colors text-white"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-black/80 text-sm text-[#4ECDC4]">
                    Institution Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4ECDC4] transition-colors text-white"
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-black/80 text-sm text-[#4ECDC4]">
                    Phone Number (Optional)
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4ECDC4] transition-colors text-white resize-none"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 px-2 bg-black/80 text-sm text-[#4ECDC4]">
                    Your Message
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-semibold relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="relative z-10">Send Message</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <div className="bg-white/5 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}