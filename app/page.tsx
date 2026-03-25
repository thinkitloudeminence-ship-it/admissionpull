/* eslint-disable */
// @ts-nocheck
'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SystemSection from './components/SystemSection'
import ImpactSection from './components/ImpactSection'
import PlatformSection from './components/PlatformSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

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
      <ProblemSection />
      <SystemSection />
      <ImpactSection />
      <PlatformSection />
      <CTASection />
      <ContactSection />
    </main>
  )
}