'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <motion.article
        whileHover={{ y: -5 }}
        className="group relative bg-white/50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
      >
        <div className="p-6 space-y-4">
          {/* Meta Info */}
          <div className="flex items-center space-x-4 text-sm text-slate-400 dark:text-slate-600">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(new Date(post.publishedAt))}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-slate-700 dark:text-slate-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center text-blue-400 dark:text-blue-600 font-semibold group-hover:text-blue-300 dark:group-hover:text-blue-700 transition-colors">
            <span>Read More</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  )
} 