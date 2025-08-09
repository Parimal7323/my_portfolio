'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-8 text-center text-sm text-slate-500">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()} Parimal Priyanshu. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2"
        >
          Built with Next.js, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </footer>
  )
} 