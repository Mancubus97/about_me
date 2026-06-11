import type { Project } from '../types/project.ts';


export type ProjectsSectionProps = {
    projects: Project[];
};

const ProjectsSection = (props: ProjectsSectionProps) => {

  return (
    <section className="projects">
      <h2>Projects Section</h2>
        {props.projects.map((project, index) => (
            <div key={index} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Tags: {project.tags.join(', ')}</p>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
        ))}
    </section>
  );
};

export default ProjectsSection;
