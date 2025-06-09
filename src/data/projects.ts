import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Journaling Assistant',
    description: 'A full-stack journaling platform used by 50+ users with AI-generated summaries, personalized insights, and mood analytics.',
    image: '/images/projects/ai-journal.jpg',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Gemini API', 'Docker', 'JWT', 'LangChain'],
    liveUrl: 'https://ai-journal-assistant.onrender.com',
    githubUrl: 'https://github.com/aryanmishra24/Ai_journal_assistant',
    featured: true,
    categories: ['ai', 'fullstack']
  },
  {
    id: '2',
    title: 'VeriFind',
    description: 'A real-time fact-checking tool using NLP pipelines with 95% precision, result filtering, Redis caching, and live deployment.',
    image: '/images/projects/verifind.jpg',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'NLTK', 'NewsAPI', 'Redis'],
    liveUrl: 'https://verifind.onrender.com',
    githubUrl: 'https://github.com/aryanmishra24/VeriFind',
    featured: true,
    categories: ['ai']
  },
]
