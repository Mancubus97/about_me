import type { Project } from '../types/project.ts';
import ImageSlideshow from './ImageSlideshow';
import Layout from './Layout.tsx';

export type ProjectsSectionProps = {
    projects: Project[];
};

const ProjectsSection = (props: ProjectsSectionProps) => {

  return (
    <>
    <Layout />
    <h1>Projects</h1>
    <h2>Here you will find a selection of projects I have worked on.</h2>
    <section id="projects" className="projects">
        {props.projects.map((project, index) => (
            <div key={index} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ImageSlideshow images={project.pics ?? []} title={project.title} />

                <p>Tags: {project.tags.join(', ')}</p>
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
