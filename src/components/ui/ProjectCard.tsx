'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700 hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300" />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 bg-yellow-500/90 text-black text-xs px-3 py-1 rounded-full font-semibold">
              <Star className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-slate-700 dark:text-slate-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full group/btn"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full group/btn"
              >
                <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 