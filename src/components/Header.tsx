import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiUser,
  FiBriefcase,
  FiAward,
  FiMail,
} from "react-icons/fi";
import profileImage from "@/assets/images/profile.jpg";

interface HeaderProps {
  language: "es" | "en";
  toggleLanguage: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const texts = {
  es: {
    greeting: "Hola, soy Facundo Robles",
    subtitle: "Desarrollador Web FullStack",
    description:
      "Me apasiona construir sistemas eficientes, limpios y con buen diseño que aporten valor.",
    menuItems: [
      { name: "Sobre mí", icon: <FiUser />, target: "#about" },
      { name: "Estudios", icon: <FiAward />, target: "#education" },
      { name: "Proyectos", icon: <FiBriefcase />, target: "#projects" },
      { name: "Contacto", icon: <FiMail />, target: "#contact" },
    ],
  },
  en: {
    greeting: "Hi, I am Facundo Robles",
    subtitle: "FullStack Web Developer",
    description:
      "I am passionate about building efficient, clean, and well-designed systems that add value.",
    menuItems: [
      { name: "About", icon: <FiUser />, target: "#about" },
      { name: "Education", icon: <FiAward />, target: "#education" },
      { name: "Projects", icon: <FiBriefcase />, target: "#projects" },
      { name: "Contact", icon: <FiMail />, target: "#contact" },
    ],
  },
};

export default function Header({
  language,
  toggleLanguage,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-center px-4 w-full relative">
      {/* Botón de menú hamburguesa (solo móvil) */}
      <button
        className="md:hidden absolute top-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-800 shadow-lg w-64 pt-20 px-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {texts[language].menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.target}
                  className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-2xl"
              >
                {language === "es" ? "English" : "Español"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl ${
          mobileMenuOpen ? "blur-sm md:blur-0" : ""
        }`}
      >
        {/* Foto de perfil */}
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
          <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-700 shadow-xl overflow-hidden">
            <img
              src={profileImage}
              alt={
                language === "es"
                  ? "Foto de Facundo Robles"
                  : "Photo of Facundo Robles"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Textos */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {texts[language].greeting}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {texts[language].subtitle}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {texts[language].description}
          </p>

          {/* Navegación desktop (oculta en móvil) */}
          <div className="hidden md:flex gap-4 justify-center">
            {texts[language].menuItems.map((item, index) => (
              <a
                key={index}
                href={item.target}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Controles (ocultos en móvil porque están en el menú) */}
          <div className="hidden md:flex gap-2 justify-center mt-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-2xl transition"
            >
              {language === "es" ? "English" : "Español"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
