import { Link } from "react-router-dom";
import "./About.css";

/**
 * About – kompakte Vorschau auf der Hauptseite.
 * Der volle Text ist unter /about erreichbar.
 */
function About() {
  return (
    <section id="about" className="about">
      <h2>Über mich</h2>
      <p>
        Ich bin seit Oktober 2023 dualer Student der Wirtschaftsinformatik bei
        der Deutschen Telekom. In meinem Praxiseinsatz konnte ich vielfältige
        Erfahrungen in der Softwareentwicklung und der Prozessautomatisierung
        sammeln: Fullstack-Webentwicklung von Dashboardseiten für die
        Geschäftsführung in Razor Blades mitsamt SQL-Abfragen an die Datenbank,
        Workflow-Modellierungen mit Camunda, Prozessautomatisierungen mit Power
        Automate und Excel-Automatisierungen mit Pivot-Tabellen sind einige
        Beispiele.
      <br />
        An meiner sehr praxisorientierten Hochschule FHDW in Bielefeld wurde ich
        in den ersten Semestern mit Modulen zu C, Java, SQL und allgemeiner
        Informatik mit dem nötigen Grundwissen ausgestattet, um in den
        Praxisphasen selbstständig an Projekten arbeiten zu können und auch
        eigene Projekte für die Universität umsetzen zu können.
      </p>

      <Link to="/about" className="about-toggle">
        Mehr lesen
      </Link>
    </section>
  );
}

export default About;
