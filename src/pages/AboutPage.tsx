import HeroSection from '../components/HeroSection.tsx'
import AboutSection from '../components/AboutSection.tsx'
import SkillsSection from '../components/SkillsSection.tsx'
import ProjectsSection from '../components/ProjectsSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import type { Project } from '../types/project.ts';


const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    tags: ['React', 'TypeScript'],
    repo: ' ',
    live: ' '
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' '
  }
];


export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  )
}