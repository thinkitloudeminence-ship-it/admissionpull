'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
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
              Get in
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? We'd love to hear from you. Let's start a conversation about your institution's future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}