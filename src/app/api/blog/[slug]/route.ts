import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const fullPath = path.join(blogDirectory, `${params.slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const post: BlogPost = {
      id: params.slug,
      slug: params.slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      publishedAt: new Date(data.publishedAt),
      readTime: data.readTime,
      tags: data.tags,
    }

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
  }
} 