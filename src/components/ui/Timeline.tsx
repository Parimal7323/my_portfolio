'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const timelineData = [
  {
    title: 'Lumiq.ai Internship',
    description: 'AI Development & Implementation',
    date: '2024',
    isCompleted: true
  },
  {
    title: 'Competitive Programming Achievement',
    description: 'Rank 598/38,000 participants',
    date: '2023',
    isCompleted: true
  },
  {
    title: 'Computer Science Student',
    description: 'Pursuing Bachelor\'s Degree',
    date: '2022-Present',
    isCompleted: false
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