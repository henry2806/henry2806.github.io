import { Link } from "react-router-dom";
import "./About.css";

/**
 * AboutPage – vollständige "Über mich"-Seite unter /about.
 */
function AboutPage() {
  return (
    <section className="about">
      <h2>Über mich</h2>
     <p>
        Ich bin seit Oktober 2023 dualer Student der Wirtschaftsinformatik bei
        der Deutschen Telekom. In meinem Praxiseinsatz in Darmstadt konnte ich vielfältige
        Erfahrungen in der Softwareentwicklung und der Prozessautomatisierung
        sammeln: Fullstack-Webentwicklung von Dashboardseiten für die
        Geschäftsführung in Razor Pages mitsamt SQL-Abfragen an die Datenbank,
        Workflow-Modellierungen mit Camunda, Prozessautomatisierungen mit Power
        Automate und Excel-Automatisierungen mit Pivot-Tabellen sind einige
        Beispiele.
      </p>

      <p>
        An meiner sehr praxisorientierten Hochschule FHDW in Bielefeld wurde ich
        in den ersten Semestern mit Modulen zu C, Java, SQL und allgemeiner
        Informatik mit dem nötigen Grundwissen ausgestattet, um in den
        Praxisphasen selbstständig an Projekten arbeiten zu können und auch
        eigene Projekte für die Universität umsetzen zu können.
      </p>
      <br />

     
       <p>
        Ich hatte das Glück, in meiner Praxiszeit bei einem agil arbeitenden Team mit 
        sowohl jungen als auch älteren Mitarbeitern zu landen, das Softwarelösungen für 
        andere Bereiche in der Telekom Technik entwickelt. Das Team besteht aus 10–15 Mitarbeitern, 
        in dem es einen Scrum-Master und Team-Leiter gibt und der Rest entweder Software-Entwickler 
        oder duale Studenten sind.

        


        Ich wurde von Anfang an in unterschiedliche Projekte eingebunden und konnte so viele verschiedene Technologien 
        und Tools kennenlernen, wie z.B. Camunda, Power Automate, SQL, Razor Pages, 
        GitHub, Jira und viele mehr. Es war eine tolle Erfahrung, 
        von Anfang an Verantwortung zu übernehmen und an echten Projekten mitzuarbeiten.

         <br />
          <br />

        Ein besonders spannendes Projekt war die Entwicklung eines Dashboards für die Geschäftsführung, 
        das wichtige Kennzahlen und Informationen übersichtlich darstellt. Dabei konnte ich meine Fähigkeiten 
        in der Fullstack-Webentwicklung mit Razor Pages und SQL-Abfragen an die Datenbank vertiefen. Von der 
        Universität war mir lediglich SQL bekannt, aber anhand von ähnlichen Seiten in der Web-Anwendung konnte 
        ich die Syntax von Razor Pages schnell verstehen und eigene Seiten erstellen. Die Herausforderung bestand 
        danach vor allem darin, die richtigen Daten aus den Datenbanken mit langen SQL-Abfragen zu ziehen, 
        um die relevanten Informationen in Prozentzahlen, Kuchencharts oder als Ampel darzustellen. 
        Zur genauen Absprache besprach ich mit einem Kollegen und der Geschäftsführung in kleiner Runde 
        von oft weniger als 5 Leuten in einem wöchentlichen Meeting die Anforderungen in einem iterativen Prozess. 
        Die von mir entwickelte Dashboardseite wird nun von der Geschäftsführung regelmäßig genutzt und 
        in großen Team-Meetings in Präsentationen gezeigt. 
         <br />
         <br />

        Ein weiteres Highlight war die Prozessautomatisierung mit Power Automate, bei der ich verschiedene 
        Workflows modellieren und automatisieren konnte. Eine Automatisierung davon, die automatisch eine 
        Nachricht in einen eigenen Teams-Kanal sendet, wenn ein Entwickler einen Merge Request erstellt, 
        wird täglich von meinen Kollegen genutzt, um sich über Code Reviews abzustimmen und sich gegenseitig 
        auf dem Laufenden zu halten.

  
       </p>
            <br />

      <p>
        Im vierten Semester meines Studiums bekam ich die Möglichkeit, einen
        Auslandseinsatz in Budapest zu absolvieren. In einem Programm für
        Auslandseinsätze erhielt ich keinen Platz, obwohl ich die Anforderungen
        an sehr gute Noten in der Uni erfüllte, doch glücklicherweise konnte
        mein Business Experte einen Kontakt zu einem Team in Budapest
        herstellen, das dringend Unterstützung bei der Entwicklung einer
        Webanwendung brauchte. So konnte ich doch noch einen Auslandseinsatz
        absolvieren, der mir viele neue Erfahrungen in der Zusammenarbeit mit 
        internationalen Kollegen und Einblicke in eine neue (Arbeits-)Kultur ermöglichte.
      </p>
    

      <br />
      <p>
        Vor meinem dualen Studium der Wirtschaftsinformatik schloss ich einen
        Bachelor in Geschichtswissenschaft mit dem Nebenfach
        Wirtschaftswissenschaften erfolgreich ab. Ursprünglich hatte ich mit
        Französisch als Nebenfach begonnen, mich dann jedoch für den Wechsel zu
        Wirtschaftswissenschaften entschieden, da ich mir eine spätere Tätigkeit
        als Lehrer nicht mehr vorstellen konnte und ich mir durch das
        wirtschaftswissenschaftliche Nebenfach bessere Chancen auf dem
        Arbeitsmarkt erhoffte.
      </p>

      <p>
        Der Wechsel zu einem unternehmensnäheren Nebenfach ermöglichte es mir,
        praktische Erfahrung in EY zu sammeln, einer der "Big Four"
        Wirtschaftsprüfungsgesellschaften. Ich arbeitete dort zuerst als
        Praktikant und wurde später als Werkstudent übernommen. Ich lernte
        einen souveränen Umgang mit Open Office, insbesondere Excel, fand die
        Tätigkeit jedoch nicht besonders spannend, da mich die Arbeit im
        steuerlichen Bereich nicht interessierte und das recht einfache Zuarbeiten 
        von Dokumenten mir
        nicht genug Herausforderungen boten. Dennoch war es eine wertvolle
        Erfahrung, die mir Einblicke in die Arbeitswelt ermöglichte und meine
        Fähigkeiten im Umgang mit Office-Tools verbesserte.
      </p>
      <br />

      <p>
        Ich interessierte mich schon lange für Informatik, hatte mich aber
        vorher nicht getraut, den Schritt zu einem Informatik-Studium zu wagen,
        weil ich fürchtete, dass mir die nötigen Vorkenntnisse fehlen würden.
        Nach einer intensiven Reflexion zu meinem späteren Berufsweg entschied
        ich mich gegen einen Master in Geschichtswissenschaften oder einen
        weiteren Weg im BWL-Bereich und wagte den Schritt in die Informatik.
        Ausschlaggebend in meiner Entscheidung war, dass ich gerne
        schwierige Zusammenhänge verstehen und eigene Produkte entwickeln
        wollte. Nach einem Bachelor in einer Geisteswissenschaft und ohne
        Vorkenntnisse aus der Schule war der Wechsel in das neue Studium ein
        großer Schritt, auf den ich heute stolz zurückschaue. Das duale Studium bei der Telekom
        ermöglichte es mir, in einem großen Konzern direkt Erfahrungen zu
        sammeln und während des Studiums schon etwas Geld zu verdienen.
      </p>
      <br />


      <br />

      <p>
        In meiner Freizeit bastel ich gerne an kleinen Softwareprojekten, mache
        viel Sport und lerne leidenschaftlich gerne Sprachen. Neben Englisch
        spreche ich auch Französisch und Spanisch fließend auf einem C1- und
        B2-Niveau und lerne gerade Russisch. In Zukunft würde ich gerne noch
        weitere Sprachen lernen, möglicherweise Ungarisch oder Chinesisch.
        Ansonsten halte ich mein historisches Interesse mit Podcasts, Büchern
        und Dokus aufrecht. Meine Lieblingsfilme sind The Big Lebowski und
        Heat.
      </p>

      <Link to="/" className="about-toggle">
        &larr; Zurück zur Startseite
      </Link>
    </section>
  );
}

export default AboutPage;
