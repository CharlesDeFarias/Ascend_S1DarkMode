import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    // console.log(`projects component before render`);

    return (
      
        <div classname="parentDiv projects">
          <h2>Projects</h2>
          <section className="projectsContainer">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </section>
        </div>
    )
}

export default Projects;