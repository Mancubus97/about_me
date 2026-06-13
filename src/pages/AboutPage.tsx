import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import HeroSection from '../components/HeroSection.tsx'
import AboutSection from '../components/AboutSection.tsx'
import SkillsSection from '../components/SkillsSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import pictureOfMe from '../assets/picture_of_me.jpg'
import type { Project } from '../types/project.ts'
import ImageSlideshow from '../components/ImageSlideshow.tsx'
import plants1 from '../assets/plants1.jpg'
import plants2 from '../assets/plants2.jpg'

export default function AboutPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])


  const project: Project = 
  {
    title: 'Project 1',
    description: 'Description of project 1',
    tags: ['React', 'TypeScript'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2]
  };

  return (
    <>
      <img src={pictureOfMe} alt="Picture of Me" className="" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <div className="project-row">
        <div className="projects-preview project-slideshow">
          <ImageSlideshow images={project.pics ?? []} title={project.title} />
        </div>

        <button className="nav-button project-button" onClick={() => navigate('/projects')}>
          Projects
        </button>
      </div>
      <div className="spacer" style={{ height: '150px' }}></div>
      <a href="#contact"></a>
      <ContactSection />
    </>
  )
}