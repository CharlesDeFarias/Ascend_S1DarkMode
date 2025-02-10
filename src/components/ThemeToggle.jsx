function ThemeToggle({ handleToggle, themeMode, isDark}) {
    const message = isDark ? "Go ahead, click it and blind yourself" : "Join the dark side and unfurrow that brow"
    return (
        <div id="toggleDiv" class="ParentDiv" >
          <button
            className="btn"
            onClick={handleToggle}
          >
            Switch to ${themeMode} Mode Theme.
          </button>
          <span>{message}</span>
        </div>
    );
  }
  export default ThemeToggle;