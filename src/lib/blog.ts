import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    return {
      id: slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      publishedAt: new Date(data.publishedAt),
      readTime: data.readTime,
      tags: data.tags,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id: slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      publishedAt: new Date(data.publishedAt),
      readTime: data.readTime,
      tags: data.tags,
    }
  } catch (error) {
    return undefined
  }
} 