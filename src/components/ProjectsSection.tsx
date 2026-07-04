import type { Project } from '../types/project.ts';
import { useNavigate } from 'react-router-dom';
import ImageSlideshow from './ImageSlideshow';
import Layout from './Layout.tsx';

export type ProjectsSectionProps = {
    projects: Project[];
};

const ProjectsSection = (props: ProjectsSectionProps) => {
  const navigate = useNavigate();

  const handleProjectClick = (index: number) => {
    navigate(`/projects/${index}`);
  };

  return (
    <>
    <Layout />
    <h1 className="default-header">Projects</h1>
    <h2 className="default-text">Here you will find a selection of projects I have worked on.</h2>
    <section id="projects" className="projects">
        {props.projects.map((project, index) => (
            <div key={index} className="project" onClick={() => handleProjectClick(index)}>
                <ImageSlideshow images={project.pics ?? []} title={project.title} />
                <div className="project-tags" aria-label={`Tags for ${project.title}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={`${project.title}-${tag}-${tagIndex}`} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
                <div>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>
        ))}
    </section>
    </>
  );
};

export default ProjectsSection;
