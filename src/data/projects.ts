/**
 * Projektdaten – hier kannst du deine eigenen Projekte eintragen.
 * Jedes Projekt hat einen Titel, eine Beschreibung, einen Tech-Stack
 * und optional einen GitHub-Link.
 */

// TypeScript-Typ für ein einzelnes Projekt
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string; // optional
}

// Beispielprojekte – einfach anpassen oder erweitern
const projects: Project[] = [
  
    {
    title: "Rechnungs-SaaS",
    description:
      "Eine SaaS für die Verwaltung von Rechnungen. Kleinunternehmmen können damit ihre Rechnungen erstellen, versenden und verwalten. Inklusive Dashboard mit Umsatzstatistiken.",
    techStack: ["React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/maxmustermann/studienplaner",
  },
  {
    title: "Bibel App",
    description:
      "Eine Flutter basierte App und Webanwendung, die es Nutzern ermöglicht, die Bibel zu lesen, Lesepläne zu erstellen und Notizen zu machen. Inklusive Suchfunktion und RAG basierten Bibelbot. Die Nutzerdaten werden plattfromübergreifend mit Firebase synchronisiert.",
    techStack: ["Flutter", "Railway", "Firebase"],
    githubUrl: "https://github.com/henry2806/flutter_project_bibel_app",
  },
  {
    title: "RAG Bot",
    description:
      "Ein Dashboard, das aktuelle Wetterdaten von einer öffentlichen API abruft und übersichtlich darstellt. Mit Suchfunktion nach Städten.",
    techStack: ["React", "CSS", "OpenWeather API"],
    githubUrl: "https://github.com/maxmustermann/wetter-dashboard",
  },
 
];

export default projects;
