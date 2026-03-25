/* eslint-disable */
// @ts-nocheck
'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import ImpactSection from './components/ImpactSection'
import CTASection from './components/CTASection'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    /**
     * Animation frame handler
     * @param {number} time - The timestamp from requestAnimationFrame
     */
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ImpactSection />
      <CTASection />
    </main>
  )
}