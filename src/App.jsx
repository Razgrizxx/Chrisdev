import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import GoToTheTop from "./components/GoToTheTop";
import { handleScroll } from "./utils/handleScroll";
import "./App.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      {showScrollTop && <GoToTheTop />}
    </div>
  );
}

export default App;
