'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © 2025 Aryan Mishra. Built with{' '}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            using Next.js and Tailwind CSS.
          </p>
          <p className="text-sm text-slate-500">
            "Code is poetry written for machines to understand and humans to admire."
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 