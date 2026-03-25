/**
 * Projektdaten – hier kannst du deine eigenen Projekte eintragen.
 * Jedes Projekt hat einen Titel, eine Beschreibung, einen Tech-Stack
 * und optional einen GitHub-Link.
 */

// TypeScript-Typ für ein einzelnes Projekt
export interface Dissertation {
  title: string;
  description: string;
  techStack?: string[];
  githubUrl?: string; // optional
}

// Beispielprojekte – einfach anpassen oder erweitern
const dissertation: Dissertation[] = [
  
  {
    title: "Machine Learning: Regressionsanalyse sozioökonomischer Treiber der Fertilität (194 Länder, 1960-2020)",
    description:
      "Ein Tool zur Visualisierung von Sortier- und Suchalgorithmen. Entstanden im Rahmen einer Vorlesung zu Algorithmen und Datenstrukturen."
   
  },
   {
    title: "Softwaremodellierung: AI basierte Termin-Buchungsapp",
    description:
      "Ein Tool zur Visualisierung von Sortier- und Suchalgorithmen. Entstanden im Rahmen einer Vorlesung zu Algorithmen und Datenstrukturen.",
   
  },
];

export default dissertation;
