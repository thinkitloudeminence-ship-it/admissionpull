'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSystem() {
  const ref = useRef()
  const count = 5000
  const radius = 20

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
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={ref}>
      <Points>
        <PointMaterial
          transparent
          vertexColors={false}
          color="#3B82F6"
          size={0.1}
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

export default function ThreeBackground() {
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    // Check if WebGL is available
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setHasWebGL(false)
    }
  }, [])

  if (!hasWebGL) {
    // Fallback gradient background if WebGL not available
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a1a] to-[#0f0f2a]" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ParticleSystem />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}