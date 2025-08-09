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
            I'm Parimal Priyanshu, a passionate Software Development Engineer currently working as an SDE Intern at Cimpress(Vista). 
            I specialize in full-stack development with expertise in Java, Spring Boot, React.js, and Next.js, building scalable applications that solve real-world problems.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Currently pursuing my Bachelor of Technology in Computer Science and Engineering from Motilal Nehru National Institute of Technology Allahabad (2021-2025), 
            I have hands-on experience in modernizing legacy systems, implementing robust APIs, and optimizing database performance.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            With a strong foundation in machine learning and cybersecurity, I've developed projects ranging from network anomaly detection systems to full-stack web applications. 
            I'm passionate about clean code, system optimization, and delivering exceptional user experiences.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-slate-700 dark:text-slate-200">Skills</h3>
          <SkillsGrid />
        </motion.div>
      </div>
    </section>
  )
} 