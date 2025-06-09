export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  categories: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: Date
  readTime: number
  tags: string[]
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft'
  proficiency: number
} 