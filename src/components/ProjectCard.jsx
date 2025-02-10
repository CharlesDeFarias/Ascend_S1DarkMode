const ProjectCard = ({project}) => {
  //add fluff text, fake projects for now
  //add same class darkmode as in other component, even if changing it later, prob makes it easier.
    return(
        <section className="projectCard">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h4>Tech Stack:</h4>
        <p>{project.techStack.join(", ")}</p>
        <a href={project.link}>View Project</a>
      </section>
    )
 
}

export default ProjectCard;