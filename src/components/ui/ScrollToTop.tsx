'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={scrollToTop}
        variant="ghost"
        size="icon"
        className="rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  )
} 