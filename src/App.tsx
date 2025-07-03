import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [darkMode, setDarkMode] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen text-white transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Header
          language={language}
          toggleLanguage={toggleLanguage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <About language={language} darkMode={darkMode} />
        <Education language={language} darkMode={darkMode} />
        <Projects language={language} darkMode={darkMode} />
        <Contact language={language} darkMode={darkMode} />
      </div>
    </div>
  );
}
