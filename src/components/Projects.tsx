import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

/**
 * Projects – zeigt alle Projekte aus der Datenliste an.
 * Die Daten kommen aus src/data/projects.ts.
 */
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projekte</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
