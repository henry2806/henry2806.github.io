import "./Contact.css";

/**
 * Contact – einfacher Kontaktbereich mit E-Mail-Link.
 * Kein Formular, kein Backend nötig.
 */
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Kontakt</h2>
      <p>
        Du möchtest mich kontaktieren? Schreib mir gerne eine E-Mail:
      </p>
      <a href="mailto:henry.brell@telekom.de" className="contact__email">
        henry.brell@telekom.de
      </a>
    </section>
  );
}

export default Contact;
