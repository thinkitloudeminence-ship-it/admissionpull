'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Logo3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(200, 200)
    mountRef.current.appendChild(renderer.domElement)

    // Geometry (particles)
    const geometry = new THREE.BufferGeometry()
    const particlesCount = 500

    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 5
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: '#00ffff'
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particles.rotation.y += 0.002
      particles.rotation.x += 0.001

      particles.rotation.y += mouseX * 0.01
      particles.rotation.x += mouseY * 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="flex items-center gap-4">
      <div ref={mountRef} />

      <h1 className="text-2xl font-bold text-white">
        admision<span className="text-cyan-400">Full</span>
      </h1>
    </div>
  )
}