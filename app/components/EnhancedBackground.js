'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingSpheres() {
  const spheres = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15 - 5,
      ],
      scale: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#FF6B6B' : '#4ECDC4',
    }))
  }, [])

  useFrame((state) => {
    spheres.forEach((sphere, i) => {
      // Animate spheres
    })
  })

  return (
    <>
      {spheres.map((sphere, i) => (
        <Sphere key={i} position={sphere.position} scale={sphere.scale}>
          <MeshDistortMaterial
            color={sphere.color}
            distort={0.3}
            speed={1}
            roughness={0.2}
            metalness={0.8}
            opacity={0.6}
            transparent
          />
        </Sphere>
      ))}
    </>
  )
}

function ParticleField() {
  const ref = useRef()
  const count = 8000
  const radius = 25

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <group ref={ref}>
      <Points>
        <PointMaterial
          transparent
          vertexColors={false}
          color="#FF6B6B"
          size={0.08}
          blending={THREE.AdditiveBlending}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </group>
  )
}

export default function EnhancedBackground() {
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setHasWebGL(false)
    }
  }, [])

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B6B" />
        <FloatingSpheres />
        <ParticleField />
      </Canvas>
    </div>
  )
}