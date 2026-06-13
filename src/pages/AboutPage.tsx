import { useNavigate } from 'react-router-dom'
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
      <div style={{ margin: '32px 0', textAlign: 'center' }}>
      <div className="project">
        <ImageSlideshow images={project.pics ?? []} title={project.title} />
      </div>


        <button className="nav-button" onClick={() => navigate('/projects')}>
            Projects
        </button>
      </div>
      <ContactSection />
    </>
  )
}