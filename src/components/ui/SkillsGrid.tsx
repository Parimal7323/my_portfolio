import dynamic from 'next/dynamic'
import { skills } from '@/data/skills'

// Icon mapping for skills
const iconMap: { [key: string]: string } = {
  react: 'R',
  next: 'N',
  ts: 'TS',
  tailwind: 'TW',
  html: 'HTML',
  node: 'Node',
  python: 'Py',
  fastapi: 'FA',
  postgres: 'PG',
  mongo: 'MDB',
  tensorflow: 'TF',
  pytorch: 'PT',
  sklearn: 'SK',
  nlp: 'NLP',
  cv: 'CV',
  git: 'Git',
  docker: 'Dkr',
  aws: 'AWS',
  linux: 'Linux',
  cicd: 'CI/CD',
  problem: 'PS',
  comm: 'Comm',
  lead: 'Lead',
  pm: 'PM',
  agile: 'Agile'
}

function SkillsGridComponent() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <button
          key={skill.name}
          onClick={() => {
            // You can add click handling here if needed
            console.log(`Clicked on ${skill.name}`)
          }}
          className="group relative text-center p-4 bg-slate-800/50 dark:bg-slate-100/50 rounded-lg hover:bg-slate-700/50 dark:hover:bg-slate-200/50 transition-all duration-300 cursor-pointer border border-slate-700/50 dark:border-slate-200/50 w-full text-left hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <div className="text-2xl font-bold mb-2 text-blue-400 dark:text-blue-600 group-hover:scale-110 transition-transform">
            {iconMap[skill.icon] || skill.icon}
          </div>
          <p className="text-sm font-medium text-slate-200 dark:text-slate-800">{skill.name}</p>
          <div className="absolute bottom-1 left-1 right-1 px-2">
            <div className="w-full bg-slate-700/50 dark:bg-slate-300/50 rounded-full h-1">
              <div 
                className="bg-blue-500 dark:bg-blue-600 h-1 rounded-full transition-all duration-500"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

// Export a dynamically imported version of the component with SSR disabled
export const SkillsGrid = dynamic(() => Promise.resolve(SkillsGridComponent), {
  ssr: false
}) 