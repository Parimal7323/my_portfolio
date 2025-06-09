import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export async function GET() {
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    const allPostsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        id: slug,
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content,
        publishedAt: data.publishedAt,
        readTime: data.readTime,
        tags: data.tags,
      }
    })

    const sortedPosts = allPostsData.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )

    return NextResponse.json(sortedPosts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
} 