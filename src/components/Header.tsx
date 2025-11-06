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
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";

interface HeaderProps {
  language: "es" | "en";
  toggleLanguage: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const texts = {
  es: {
    greeting: "Hola, soy Facundo Robles",
    subtitle: "Desarrollador Web FullStack | PenTester Trainee | Scrum Master",
    description:
      "Me apasiona construir sistemas eficientes, limpios y con buen diseño que aporten valor.",
    downloadCv: "Descargar CV",
    connect: "Conectar",
    stats: [
      { value: "1+", label: "Años experiencia" },
      { value: "5+", label: "Proyectos completados" },
    ],
  },
  en: {
    greeting: "Hi, I am Facundo Robles",
    subtitle: "FullStack Web Developer | PenTester Trainee | Scrum Master",
    description:
      "I am passionate about building efficient, clean, and well-designed systems that add value.",
    downloadCv: "Download CV",
    connect: "Connect",
    stats: [
      { value: "1+", label: "Years experience" },
      { value: "5+", label: "Projects completed" },
    ],
  },
};

// Agregar URLs de los CVs
const cvFiles = {
  es: {
    url: "/CV_Facundo_Ezequiel_Robles_ES.pdf",
    filename: "CV_Facundo_Ezequiel_Robles_ES.pdf",
  },
  en: {
    url: "/CV_Facundo_Ezequiel_Robles_EN.pdf",
    filename: "CV_Facundo_Ezequiel_Robles_EN.pdf",
  },
};

export default function Header({
  language,
  toggleLanguage,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (target: string) => {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Obtener el CV correspondiente al idioma actual
  const currentCv = cvFiles[language];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 w-full relative overflow-hidden pt-16 pb-8">
      {/* Controles de tema e idioma en la esquina superior derecha */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-800"
          >
            <div className="container mx-auto h-full flex flex-col">
              <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="font-bold text-lg text-blue-600 dark:text-blue-400">
                  Facundo Robles
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="py-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={toggleDarkMode}
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    {language === "es" ? "English" : "Español"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Foto de perfil */}
          <motion.div
            className="w-40 h-40 md:w-56 md:h-56 relative mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Anillos de habilidades */}
            <div className="absolute -inset-4 border-2 border-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -inset-6 border-2 border-purple-500 rounded-full opacity-20 animate-pulse delay-100"></div>

            {/* Contenedor de la imagen */}
            <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden">
              <motion.img
                src="/images/profile1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                }}
              />
            </div>
          </motion.div>

          {/* Textos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {texts[language].greeting}
            </h1>
            <h2 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4">
              {texts[language].subtitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto px-4">
              {texts[language].description}
            </p>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            className="flex justify-center gap-4 mb-8 w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {texts[language].stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 max-w-24 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
              >
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg transition flex items-center justify-center gap-2"
            >
              {texts[language].connect}
              <FiMail />
            </button>
            {/* Botón de descarga dinámico */}
            <a
              href={currentCv.url}
              download={currentCv.filename}
              className="flex-1 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg text-lg transition flex items-center justify-center gap-2"
            >
              {texts[language].downloadCv}
              <FiDownload />
            </a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="https://github.com/FacuRob"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition shadow-sm"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/frobles-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition shadow-sm"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://tryhackme.com/p/[tu_usuario_de_TryHackMe]"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition shadow-sm"
              title="TryHackMe"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <img
                  src="/images/hack.png"
                  alt="TryHackMe"
                  className="dark:invert dark:brightness-200 brightness-0"
                />
              </div>
            </a>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={() => handleScrollTo("#about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                {language === "es" ? "Desplazar" : "Scroll"}
              </span>
              <FiArrowDown
                size={24}
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
