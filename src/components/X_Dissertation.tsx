import projects from "../data/dissertation";
import DissertationCard from "./X_DissertationCard";
import "./X_Dissertation.css";

/**
 * Projects – zeigt alle Projekte aus der Datenliste an.
 * Die Daten kommen aus src/data/projects.ts.
 */
function Projects() {
  return (
    <section id="dissertation" className="dissertation">
      <h2>Dissertations</h2>
      <div className="dissertation__grid">
        {projects.map((dissertation) => (
          <DissertationCard key={dissertation.title} project={dissertation} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
