import { useState } from "react";
import Projects from "./Projects";

//may have to move aboutme and contact into here afte rall

const Portfolio = (theme, isDark) => {
 
  return (
    <div className={`parentDiv ${theme}`} id="portfolioParent">
      <header>
        <h1>THE eventually AMAZING PORTFOLIO OF THE eventually AMAZING CHARLES</h1>
      </header>
      <main>
        <Projects />
      </main>
      <footer>
        <p>&copy; 2025 RC Alum</p>
      </footer>
    </div>
  );
}

export default Portfolio;