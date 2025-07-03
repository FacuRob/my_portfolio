import { motion } from "framer-motion";

interface EducationProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    title: "Estudios y Certificaciones",
    education: [
      {
        title: "Tecnicatura Superior en Programación",
        institution: "Universidad Tecnologia Tucuman",
        year: "2020-2024",
        description:
          "Formación completa en desarrollo de software y gestión de proyectos tecnológicos.",
      },
      {
        title: "Desarrollador Web FullStack",
        institution: "Bootcamp ABC",
        year: "2019",
        description:
          "Programa intensivo de 6 meses enfocado en JavaScript, React, Node.js y bases de datos.",
      },
      {
        title: "Ingeniero en CiberSeguridad",
        institution: "EndPoint",
        year: "2025",
        description:
          "Programa intensivo de 6 meses enfocado en JavaScript, React, Node.js y bases de datos.",
      },
    ],
    certifications: [
      {
        title: "AWS Certified Developer",
        institution: "Amazon Web Services",
        year: "2023",
      },
      {
        title: "Scrum Master Certification",
        institution: "Argentina Programa 4.0 (Codo a Codo)",
        year: "2022",
      },
    ],
  },
  en: {
    title: "Education & Certifications",
    education: [
      {
        title: "Computer Systems Engineering",
        institution: "XYZ University",
        year: "2020-2024",
        description:
          "Comprehensive training in software development and technology project management.",
      },
      {
        title: "FullStack Web Developer",
        institution: "ABC Bootcamp",
        year: "2019",
        description:
          "6-month intensive program focused on JavaScript, React, Node.js and databases.",
      },
    ],
    certifications: [
      {
        title: "AWS Certified Developer",
        institution: "Amazon Web Services",
        year: "2023",
      },
      {
        title: "Scrum Master Certification",
        institution: "Scrum Alliance",
        year: "2022",
      },
    ],
  },
};

export default function Education({ language, darkMode }: EducationProps) {
  return (
    <section
      id="education"
      className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          {texts[language].title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Educación Formal */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Educación Formal" : "Formal Education"}
            </h3>
            {texts[language].education.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {item.institution}
                </p>
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full mt-2">
                  {item.year}
                </span>
                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Certificaciones" : "Certifications"}
            </h3>
            {texts[language].certifications.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start"
              >
                <div className="mr-4 mt-1">
                  <svg
                    className="w-6 h-6 text-blue-500 dark:text-blue-400"
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
                  <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full mt-2">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
