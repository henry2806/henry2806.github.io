import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dissertation from "./components/X_Dissertation";
import ScrollToHash from "./components/ScrollToHash";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Dissertation />
      <Contact />
    </main>
  );
}

/**
 * App – Hauptkomponente mit Routing.
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
