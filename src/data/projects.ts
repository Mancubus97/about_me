export interface Project {
  title: string
  description: string
  tags: string[]
  repo: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio site',
    description: 'This site, built with Vite + React',
    tags: ['React', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com/you/portfolio',
    live: 'https://yoursite.dev',
  },
]