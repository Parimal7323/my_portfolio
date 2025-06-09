import { BlogPost } from '@/types'

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js',
    slug: 'building-modern-web-applications-with-nextjs',
    excerpt: 'Learn how to build fast, scalable, and SEO-friendly web applications using Next.js 14 and its latest features.',
    content: 'Next.js has revolutionized the way we build web applications...',
    publishedAt: new Date('2024-03-15'),
    readTime: 5,
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'Mastering TypeScript for Better Development',
    slug: 'mastering-typescript-for-better-development',
    excerpt: 'A comprehensive guide to TypeScript features that will help you write more maintainable and type-safe code.',
    content: 'TypeScript brings static typing to JavaScript...',
    publishedAt: new Date('2024-03-10'),
    readTime: 7,
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '3',
    title: 'The Future of AI in Software Development',
    slug: 'future-of-ai-in-software-development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we write, test, and maintain software.',
    content: 'Artificial Intelligence is reshaping the software development landscape...',
    publishedAt: new Date('2024-03-05'),
    readTime: 6,
    tags: ['AI', 'Machine Learning', 'Software Development']
  }
] 