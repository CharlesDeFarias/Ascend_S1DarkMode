function ThemeToggle({ handleToggle, theme, isDark}) {
    const message = isDark ? "Go ahead, click it and blind yourself" : "Join the dark side and unfurrow that brow"
    
    return (
        <div id="toggleDiv" className={`parentDiv ${theme} contactCard`}>
          <button
            className="btn"
            onClick={handleToggle}
          >
            Switch to ${theme} Mode Theme.
          </button>
          <span>{message}</span>
        </div>
    );
  }

  export default ThemeToggle;