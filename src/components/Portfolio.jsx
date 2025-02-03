import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <h1 >My Portfolio</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <p>&copy; 2025 Erica Mendez</p>
      </footer>
    </div>
  );
}

export default Portfolio;