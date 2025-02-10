import Portfolio from "./components/Portfolio";
import "./styles.css";

const App = () => {
  //want to start with darkmode by default because it's the superior mode. fite me.
  const [isDark, setDarkMode] = useState(true);

  const handleToggle = () => {
    console.log(`theme mode handle toggle before set - ${isDark}`);
    setDarkMode(!isDark);
  };

  const themeMode = isDark ? "dark":"light"

  return (
    <div>
      <Portfolio theme = {themeMode} isDark={isDark} handleToggle={handleToggle} />
    </div>
  );
};

export default App;
