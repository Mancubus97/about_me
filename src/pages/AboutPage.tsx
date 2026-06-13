import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection.tsx'
import AboutSection from '../components/AboutSection.tsx'
import SkillsSection from '../components/SkillsSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import pictureOfMe from '../assets/picture_of_me.jpg'

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <>
      <img src={pictureOfMe} alt="Picture of Me" className="" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <div style={{ margin: '32px 0', textAlign: 'center' }}>
        <button className="nav-button" onClick={() => navigate('/projects')}>
            Projects
        </button>
      </div>
      <ContactSection />
    </>
  )
}