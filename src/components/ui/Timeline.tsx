'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const timelineData = [
  {
    title: 'Cimpress(Vista) - SDE Intern',
    description: 'Modernizing legacy systems with Spring Boot & Next.js, achieving 40% faster load times and 85% test coverage',
    date: 'January 2025 - Present',
    isCompleted: false
  },
  {
    title: 'Computer Science Student',
    description: 'Pursuing B.Tech in CSE from MNNIT Allahabad',
    date: '2021 - 2025',
    isCompleted: false
  },
  {
    title: 'LeetCode Achievement',
    description: 'Max Rating 1615, Solved 700+ Problems',
    date: '2023 - Present',
    isCompleted: true
  },
  {
    title: 'DevOps Foundations Certificate',
    description: 'LinkedIn Learning Certification',
    date: 'April 2025',
    isCompleted: true
  },
  {
    title: 'React Essential Training',
    description: 'LinkedIn Learning Certification',
    date: 'March 2025',
    isCompleted: true
  }
]

export function Timeline() {
  return (
    <div className="space-y-6">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center space-x-4"
        >
          <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 ${
            item.isCompleted 
              ? 'bg-blue-500 border-blue-500' 
              : 'border-slate-400'
          }`}>
            {item.isCompleted && (
              <CheckCircle className="w-4 h-4 text-white" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white">{item.title}</h4>
            <p className="text-sm text-slate-400">{item.description}</p>
            <p className="text-xs text-slate-500">{item.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 