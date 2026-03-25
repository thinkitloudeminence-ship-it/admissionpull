'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">

      {/* ICON */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute w-14 h-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-70 group-hover:opacity-100 transition"></div>

        {/* Core */}
        <div className="relative w-10 h-10 rounded-full bg-black border border-cyan-400 flex items-center justify-center">
          
          {/* Animated pulse ring */}
          <motion.div
            className="absolute w-full h-full border border-cyan-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Center dot */}
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-baseline gap-1"
      >
        {/* admission */}
        {"admision".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-white text-xl font-medium"
          >
            {char}
          </motion.span>
        ))}

        {/* Full (highlighted) */}
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          animate={{
            textShadow: [
              "0 0 5px rgba(34,211,238,0.5)",
              "0 0 20px rgba(168,85,247,1)",
              "0 0 5px rgba(34,211,238,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Full
        </motion.span>
      </motion.div>
    </Link>
  )
}