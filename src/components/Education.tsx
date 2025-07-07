import { motion } from "framer-motion";

interface EducationProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    title: "Estudios, Cursos y Certificaciones",
    education: [
      {
        title: "Tecnicatura Superior en Programación",
        institution: "Universidad Tecnologia Tucuman",
        year: "2016 - Tesis en desarrollo",
        description: "Formación Universitaria",
      },
      {
        title: "Ciencias Naturales",
        institution: "Instituto Dr. Carlos Pellegrini",
        year: "2012",
        description: "Formación Secundaria",
      },
    ],
    cursos: [
      {
        title: "Desarrollador Web Full Stack",
        institution: "Argentina Programa 4.0 - Gobierno de Buenos Aires",
        year: "2024",
        description:
          "Formación en desarrollo de software de 6 meses enfocada en HTML, CSS, JS, Node.JS y base de datos SQL.",
      },
      {
        title: "Desarrollador Web Desde Cero",
        institution: "EGG LIVE",
        year: "2023",
        description: "Programa intensivo de 6 meses enfocada en FrontEnd.",
      },
      {
        title: "Soporte Tecnico en Sorfware y Hardware",
        institution: "INI Capacitación - Tucumán",
        year: "2018",
        description:
          "Curso de reparación de Hardware e instalación de Software.",
      },
    ],
    certifications: [
      {
        title: "AWS Educate Introduction to Generative AI",
        institution: "Amazon Web Services",
        year: "2025",
      },
      {
        title:
          "Introducción a las habilidades profesionales en análisis de datos",
        institution: "LinkedIn Learning",
        year: "2025",
      },
      {
        title: "Análisis de datos: Fundamentos",
        institution: "LinkedIn Learning",
        year: "2025",
      },
    ],
  },
  en: {
    title: "Education, Courses and Certifications",
    education: [
      {
        title: "Higher Technician in Programming",
        institution: "Technological University of Tucuman",
        year: "2016 - Thesis in progress",
        description: "University Education",
      },
      {
        title: "Natural Sciences",
        institution: "Dr. Carlos Pellegrini Institute",
        year: "2012",
        description: "Secondary Education",
      },
    ],
    cursos: [
      {
        title: "Full Stack Web Developer",
        institution: "Argentina Program 4.0 - Buenos Aires Government",
        year: "2024",
        description:
          "6-month software development training focused on HTML, CSS, JS, Node.JS and SQL databases.",
      },
      {
        title: "Web Developer From Scratch",
        institution: "EGG LIVE",
        year: "2023",
        description: "6-month intensive program focused on FrontEnd.",
      },
      {
        title: "Software and Hardware Technical Support",
        institution: "INI Training - Tucumán",
        year: "2018",
        description: "Hardware repair and Software installation course.",
      },
    ],
    certifications: [
      {
        title: "AWS Educate Introduction to Generative AI",
        institution: "Amazon Web Services",
        year: "2025",
      },
      {
        title: "Introduction to Professional Skills in Data Analysis",
        institution: "LinkedIn Learning",
        year: "2025",
      },
      {
        title: "Data Analysis: Fundamentals",
        institution: "LinkedIn Learning",
        year: "2025",
      },
    ],
  },
};

export default function Education({ language, darkMode }: EducationProps) {
  return (
    <section
      id="education"
      className="min-h-screen py-16 flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-4 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          {texts[language].title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Educación Formal */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Educación Formal" : "Formal Education"}
            </h3>
            {texts[language].education.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {item.institution}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mt-2">
                  {item.year}
                </span>
                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Cursos */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Cursos" : "Courses"}
            </h3>
            {texts[language].cursos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {item.institution}
                </p>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mt-2">
                  {item.year}
                </span>
                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Certificaciones" : "Certifications"}
            </h3>
            {texts[language].certifications.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-start"
              >
                <div className="mr-4 mt-1">
                  <svg
                    className="w-6 h-6 text-green-500 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.institution}
                  </p>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mt-2">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
