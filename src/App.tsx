import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import AboutPage from './pages/AboutPage.tsx'
import NotFound from './pages/NotFound.tsx'
//import heroImg from './assets/hero.png'
import './App.css'
import ProjectsSection from './components/ProjectsSection.tsx'
import ProjectView from './components/ProjectView.tsx'
import type { Project } from './types/project.ts'
import plants1 from './assets/plants1.jpg'
import plants2 from './assets/plants2.jpg'
import plants3 from './assets/plants3.jpg'
import plants4 from './assets/plants4.jpg'
import kappersapp1 from './assets/kappersapp1.jpg'
import kappersapp2 from './assets/kappersapp2.jpg'
import kappersapp3 from './assets/kappersapp3.jpg'
import quad1 from './assets/quad1.jpg'
import quad2 from './assets/quad2.jpg'
import quad3 from './assets/quad3.jpg'
import WoodWideWeb1 from './assets/WoodWideWeb1.jpg'
import WoodWideWeb2 from './assets/WoodWideWeb2.jpg'
import WoodWideWeb3 from './assets/WoodWideWeb3.jpg'
import WoodWideWeb4 from './assets/WoodWideWeb4.jpg'
import WoodWideWeb5 from './assets/WoodWideWeb5.jpg'
import WoodWideWeb6 from './assets/WoodWideWeb6.jpg'
import WoodWideWeb7 from './assets/WoodWideWeb7.jpg'
import crashed1 from './assets/crashed1.jpg'
import crashed2 from './assets/crashed2.jpg'
import crashed3 from './assets/crashed3.jpg'
import crashed4 from './assets/crashed4.jpg'
import crashed5 from './assets/crashed5.jpg'
import goodchain1 from './assets/goodchain1.jpg'
import goodchain2 from './assets/goodchain2.jpg'
import goodchain3 from './assets/goodchain3.jpg'
import goodchain4 from './assets/goodchain4.jpg'
import goodchain5 from './assets/goodchain5.jpg'
import goodchain6 from './assets/goodchain6.jpg'
import Footer from './components/Footer.tsx'
import CircuitBackground from './components/CircuitBackground.tsx'


const projects: Project[] = [
  {
    title: 'Plants Project',
    description: 'A botanical showcase featuring plant photography and collection management',
    tags: ['React', 'TypeScript', 'C#', 'Database', 'Data Visualization'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Kappers App',
    description: 'A professional barber/salon booking application with appointment management and customer scheduling',
    tags: ['Html', 'CSS'],
    repo: ' ',
    live: ' ',
    pics: [kappersapp1, kappersapp2, kappersapp3]
  },
  {
    title: 'Quad Project',
    description: 'An interactive quad-based project showcasing dynamic data visualization and control systems',
    tags: ['API Developmnent', 'C#', 'Full Stack'],
    repo: ' ',
    live: ' ',
    pics: [quad1, quad2, quad3]
  },
  {
    title: 'Wood Wide Web',
    description: 'A comprehensive project exploring tree connectivity and forest ecosystem visualization through interactive mapping',
    tags: ['Unity', 'C#', 'Simulation'],
    repo: ' ',
    live: ' ',
    pics: [WoodWideWeb1, WoodWideWeb2, WoodWideWeb3, WoodWideWeb4, WoodWideWeb5, WoodWideWeb6, WoodWideWeb7]
  },
  {
    title: 'Crashed',
    description: 'A dynamic arcade-style crash game with physics-based gameplay',
    tags: ['Unity', 'C#', 'Game Development'],
    repo: ' ',
    live: ' ',
    pics: [crashed1, crashed2, crashed3, crashed4, crashed5]
  },
  {
    title: 'Goodchain',
    description: 'A crypto trading platform with a minimalistic design with focus on transparancy and accessibility',
    tags: ['Python', 'Tkinter', 'SQLite'],
    repo: ' ',
    live: ' ',
    pics: [goodchain1, goodchain2, goodchain3, goodchain4, goodchain5, goodchain6]
  }
];


function App() {

  return (
    <>
    <CircuitBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/projects" element={<ProjectsSection projects={projects} />}>
          </Route>
             <Route path="/projects/:id" element={<ProjectView projects={projects} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
