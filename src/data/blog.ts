export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'building-modern-web-applications-with-nextjs',
    title: 'Building Modern Web Applications with Next.js',
    description: 'Learn how to build fast, scalable, and SEO-friendly web applications using Next.js 14 and its latest features.',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    slug: 'mastering-typescript-for-better-development',
    title: 'Mastering TypeScript for Better Development',
    description: 'A comprehensive guide to TypeScript features that will help you write more maintainable and type-safe code.',
    date: '2024-03-10',
    readTime: '7 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    slug: 'future-of-ai-in-software-development',
    title: 'The Future of AI in Software Development',
    description: 'Exploring how artificial intelligence is transforming the way we write, test, and maintain software.',
    date: '2024-03-05',
    readTime: '6 min read',
    tags: ['AI', 'Machine Learning', 'Software Development']
  }
] 