import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import AboutPage from './pages/AboutPage.tsx'
import NotFound from './pages/NotFound.tsx'
//import heroImg from './assets/hero.png'
import './App.css'
import ProjectsSection from './components/ProjectsSection.tsx'
import type { Project } from './types/project.ts'
import plants1 from './assets/plants1.jpg'
import plants2 from './assets/plants2.jpg'
import plants3 from './assets/plants3.jpg'
import plants4 from './assets/plants4.jpg'
import Footer from './components/Footer.tsx'
import CircuitBackground from './components/CircuitBackground.tsx'


const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    tags: ['React', 'TypeScript'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Project 3',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Project 4',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Project 5',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
  },
  {
    title: 'Project 6',
    description: 'Description of project 2',
    tags: ['Node.js', 'Express'],
    repo: ' ',
    live: ' ',
    pics: [plants1, plants2, plants3, plants4]
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
          <Route path="/projects" element={<ProjectsSection projects={projects} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
