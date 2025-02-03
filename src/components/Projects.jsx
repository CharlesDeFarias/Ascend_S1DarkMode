import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
      
        <section>
          <h2>Projects</h2>
          <section className="projectsContainer">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </section>
        </section>
    )
}

export default Projects;