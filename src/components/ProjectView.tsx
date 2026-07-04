import { useParams } from 'react-router-dom'
import type { Project } from '../types/project.ts'
import ImageSlideshow from './ImageSlideshow.tsx'

type ProjectViewProps = {
  projects: Project[]
}

const ProjectView = ({ projects }: ProjectViewProps) => {
  const { id } = useParams()
  const project = projects[Number(id)] ?? projects[0]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="project-detail">
      <div className="project-title">{project.title}</div>
      <h1 className="default-header">What is it?</h1>
      <h2 className="default-text">{project.description}</h2>
      <h1 className="default-header">Technologies Used</h1>
      <div className="project-tags" aria-label="Technologies used">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <h1 className="default-header">A look into:</h1>
      <ImageSlideshow images={project.pics ?? []} title={project.title} />
    </div>
  )
}

export default ProjectView;