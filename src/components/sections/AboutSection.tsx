'use client'

import { motion } from 'framer-motion'
import { SkillsGrid } from '@/components/ui/SkillsGrid'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            I'm a passionate Full Stack Developer with a keen interest in AI and machine learning. 
            I love building modern web applications that solve real-world problems and provide great user experiences.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge through blog posts and tutorials.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-slate-700 dark:text-slate-200">Skills</h3>
          <SkillsGrid />
        </motion.div>
      </div>
    </section>
  )
} 