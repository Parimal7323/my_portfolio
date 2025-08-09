import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'StrayCam',
    description: 'A full-stack web app to manage 100+ stray animal cases with geotagged image support, interactive map dashboards, and foster/adoption forms with JWT authentication.',
    image: '/images/projects/straycam.jpg',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'JWT', 'REST API'],
    liveUrl: 'https://straycam.vercel.app',
    githubUrl: 'https://github.com/Parimal7323/straycam',
    featured: true,
    categories: ['fullstack']
  },
  
  {
    id: '2',
    title: 'Network Anomaly Detection',
    description: 'A machine learning-based security system using Isolation Forest, Random Forest, and DBSCAN achieving 92% precision and 87% recall in detecting network anomalies.',
    image: '/images/projects/network-anomaly.jpg',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'Machine Learning', 'Cybersecurity'],
    liveUrl: 'https://network-anomaly-detection.vercel.app',
    githubUrl: 'https://github.com/Parimal7323/network-anomaly-detection',
    featured: true,
    categories: ['ai', 'security']
  },
  {
    id: '3',
    title: 'BeBanjaara',
    description: 'A real-time blog application using MERN stack with secure JWT authentication, live content updates, search, filtering, and pagination features.',
    image: '/images/projects/bebanjaara.jpg',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    liveUrl: 'https://bebanjaara.vercel.app',
    githubUrl: 'https://github.com/Parimal7323/bebanjaara',
    featured: true,
    categories: ['fullstack', 'web']
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS showcasing projects, skills, and professional experience.',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Responsive Design'],
    liveUrl: 'https://parimalpriyanshu.vercel.app',
    githubUrl: 'https://github.com/Parimal7323/my_portfolio',
    featured: false,
    categories: ['frontend', 'web']
  },
  
  

]
