'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    Services: [
      { name: 'Digital Growth', href: '/services#growth' },
      { name: 'Student Engagement', href: '/services#engagement' },
      { name: 'Analytics', href: '/services#analytics' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '🔗', href: '#' },
    { name: 'GitHub', icon: '💻', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
  ]

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
                  admissionPull
                </h3>
                <p className="text-sm text-gray-400">Empowering Education Digitally</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming educational institutions through innovative digital solutions and intelligent growth systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#4ECDC4] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#4ECDC4] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} admissionPull. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-[#4ECDC4] text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#4ECDC4] text-sm transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-[#4ECDC4] text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}