'use client'

import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { ArrowLeft, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/types'
import ReactMarkdown from 'react-markdown'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.slug}`)
        if (!response.ok) notFound()
        const data = await response.json()
        setPost(data)
      } catch (error) {
        notFound()
      }
    }
    fetchPost()
  }, [params.slug])

  if (!post) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/#blog">
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
            <Link href="/#blog">
              <Button variant="ghost" size="sm" className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Post Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700"
          >
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                <time dateTime={new Date(post.publishedAt).toISOString()}>
                  {formatDate(new Date(post.publishedAt))}
                </time>
                <span>{post.readTime} min read</span>
              </div>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-slate-100 mb-4" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-slate-100 mb-3" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-slate-100 mb-2" {...props} />,
                    p: ({ node, ...props }) => <p className="text-slate-300 mb-4" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 text-slate-300" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 text-slate-300" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                    a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-slate-700/50 px-1 py-0.5 rounded text-sm" {...props} />,
                    pre: ({ node, ...props }) => <pre className="bg-slate-700/50 p-4 rounded-lg mb-4 overflow-x-auto" {...props} />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.div>
  )
} 