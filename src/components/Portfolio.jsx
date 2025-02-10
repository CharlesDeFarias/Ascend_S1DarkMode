import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

// about me, projects, contact
//multiple components in separate files with proper file structure. 
// create contact component let's start with building it in here and then split it up.p component

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <h1>THE eventually AMAZING PORTFOLIO OF THE eventually AMAZING CHARLES</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <AboutMe />
        <Projects />
        {/* <Contact /> */}
      </main>
      <footer>
        <p>&copy; 2025 RC Alum</p>
      </footer>
    </div>
  );
}

export default Portfolio;