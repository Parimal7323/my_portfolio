'use client'

import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'Cimpress(Vista)',
    position: 'SDE Intern',
    location: 'Remote',
    duration: 'January 2025 - Present',
    description: [
      'Modernized a legacy system by rebuilding it as a full-stack application with Spring Boot backend and Next.js frontend, significantly improving performance, scalability, and maintainability',
      'Revamped the frontend using React.js and Next.js, achieving 40% faster load times and enabling server-side rendering (SSR) and static site generation (SSG)',
      'Developed robust RESTful APIs in Spring Boot for secure data exchange, integrated with PostgreSQL database with optimized query performance',
      'Implemented comprehensive unit and integration testing using Jest (frontend) and JUnit (backend), achieving 85% test coverage and 80% branch coverage',
      'Dockerized the application and deployed it on AWS EC2, with AWS S3 used for static asset storage'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'TypeScript', 'Next.js', 'React.js', 'Docker', 'AWS', 'Jest']
  }
]

const education = [
  {
    id: 1,
    institution: 'Motilal Nehru National Institute of Technology Allahabad',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Prayagraj, U.P.',
    duration: '2021 - 2025',
    description: 'Pursuing B.Tech in Computer Science and Engineering with focus on software development, algorithms, and system design.'
  }
]

const achievements = [
  {
    id: 1,
    title: 'LeetCode',
    description: 'Max Rating 1615, 700+ questions solved',
    icon: '🏆'
  },
  {
    id: 2,
    title: 'GeeksforGeeks',
    description: '100+ questions solved',
    icon: '💻'
  },
  {
    id: 3,
    title: 'DevOps Foundations',
    description: 'LinkedIn Learning - April 2025',
    icon: '📜'
  },
  {
    id: 4,
    title: 'React Essential Training',
    description: 'LinkedIn Learning - March 2025',
    icon: '⚛️'
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative bg-slate-50 dark:bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Work Experience */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Work Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <Building className="w-5 h-5 text-blue-500" />
                        {exp.position} - {exp.company}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-2 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Education
            </h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Achievements & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
