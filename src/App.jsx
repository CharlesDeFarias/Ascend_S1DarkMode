import Portfolio from "./components/Portfolio";
import "./styles.css";
import ThemeToggle from "./components/ThemeToggle";
import ContactCard from "./components/ContactCard";
import AboutCard from "./components/AboutCard";

//Add darkmode at this level so it can apply across all pages of this app theoretically, if it were to expand.
//Let's create the component in here for now and then separate it into another file later.

// const [darkMode, setDarkMode] = useState(
//   localStorage.getItem("theme") === "dark"
// )
// useEffect if dark -> add dark class and change the theme variable, else same but with light

const App = () => {
  const [isDark, setDarkMode] = useState(true);

  const handleToggle = () => {
    console.log(`darkmode handle toggle before set - ${isDark}`);
    setDarkMode(!isDark);
  };

  const themeMode = isDark ? "dark":"light"

  return (
    <div>
      <ThemeToggle toggle ={handleToggle} theme = {themeMode}/>
      <AboutCard theme = {themeMode} />
      <ContactCard theme = {themeMode} />
      <Portfolio theme = {themeMode} />
    </div>
  );
};

export default App;
