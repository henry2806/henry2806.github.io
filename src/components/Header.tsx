import { Link, useLocation } from "react-router-dom";
import "./Header.css";

/**
 * Header – enthält die Navigation.
 * "Über mich" führt zur eigenen Seite, der Rest sind Anker-Links auf der Hauptseite.
 */
function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          Henry Brell
        </Link>
        <ul className="header__links">
          <li><Link to="/about">Über mich</Link></li>
          <li>{isHome ? <a href="#projects">Projekte</a> : <Link to="/#projects">Projekte</Link>}</li>
          <li>{isHome ? <a href="#contact">Kontakt</a> : <Link to="/#contact">Kontakt</Link>}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
