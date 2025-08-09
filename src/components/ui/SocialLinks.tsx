'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Parimal7323', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/parimal-priyanshu01/', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, url: 'mailto:parimalpriyanshu@gmail.com', color: 'hover:text-red-400' },
]

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl text-slate-400 dark:text-slate-600 ${link.color} transition-all duration-300`}
            aria-label={link.name}
          >
            <IconComponent className="h-6 w-6" />
          </motion.a>
        )
      })}
    </div>
  )
} 