import type { Dissertation } from "../data/dissertation";
import "./ProjectCard.css";

/**
 * ProjectCard – zeigt ein einzelnes Projekt an.
 * Bekommt die Projektdaten als Props übergeben.
 */
interface ProjectCardProps {
  project: Dissertation;
}

function DissertationCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-card__tech">
        {project.techStack?.map((tech) => (
          <span key={tech} className="project-card__tag">
            {tech}
          </span>
        ))}
      </div>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          GitHub →
        </a>
      )}
    </div>
  );
}

export default DissertationCard;
