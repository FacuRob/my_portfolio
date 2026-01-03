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
        title: "Seguridad Ofensiva (RedTeam)",
        institution: "EndPoint",
        year: "2025",
        description:
          "Formación en técnicas ofensivas de seguridad informática con enfoque en EndPoint.",
      },
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
        description:
          "Programa Frontend de 6 meses, aprendiendo HTML, CSS, JavaScript.",
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
        link: "https://www.credly.com/badges/53ec5a0d-7943-4be3-a9ce-fb8c38b3f2ab/linked_in_profile",
      },
      {
        title:
          "Introducción a las habilidades profesionales en análisis de datos",
        institution: "LinkedIn Learning",
        year: "2025",
        link: "https://www.linkedin.com/learning/certificates/2e4a95a3b0790e4455cec51e169ce8dae62189a5ad56152963d131880fa0e831?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPIE5b%2BzhQ3meBc6O7TBHQw%3D%3D",
      },
      /*{
        title: "Análisis de datos: Fundamentos",
        institution: "LinkedIn Learning",
        year: "2025",
        //link: "https://example.com/certificate-linkedin2",
      },*/
    ],
    viewCertificate: "Ver Certificado",
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
        title: "Offensive Security (RedTeam)",
        institution: "EndPoint",
        year: "2025",
        description:
          "Training in offensive cybersecurity techniques with focus on EndPoint.",
      },
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
        description:
          "6-month Frontend Program, learning HTML, CSS, JavaScript.",
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
        link: "https://www.credly.com/badges/53ec5a0d-7943-4be3-a9ce-fb8c38b3f2ab/linked_in_profile",
      },
      {
        title: "Introduction to Professional Skills in Data Analysis",
        institution: "LinkedIn Learning",
        year: "2025",
        link: "https://www.linkedin.com/learning/certificates/2e4a95a3b0790e4455cec51e169ce8dae62189a5ad56152963d131880fa0e831?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPIE5b%2BzhQ3meBc6O7TBHQw%3D%3D",
      },
      /*{
        title: "Data Analysis: Fundamentals",
        institution: "LinkedIn Learning",
        year: "2025",
        link: "https://example.com/certificate-linkedin2",
      },*/
    ],
    viewCertificate: "View Certificate",
  },
};

export default function Education({ language, darkMode }: EducationProps) {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 w-full relative overflow-hidden pt-16 pb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {texts[language].title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Educación Formal - Efectos Azules */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Educación Formal" : "Formal Education"}
            </h3>
            {texts[language].education.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-blue-300 dark:hover:border-blue-700 group relative overflow-hidden"
              >
                {/* Efecto de fondo azul al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                <div className="z-10 relative">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.institution}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full mt-2 border border-blue-200 dark:border-blue-700 group-hover:scale-105 transition-transform">
                    {item.year}
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Efecto de olas sutiles en el borde inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden -z-0">
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 wave-animation" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cursos - Efectos Morados */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Cursos" : "Courses"}
            </h3>
            {texts[language].cursos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-purple-300 dark:hover:border-purple-700 group relative overflow-hidden"
              >
                {/* Efecto de fondo morado al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                <div className="z-10 relative">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.institution}
                  </p>
                  <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs rounded-full mt-2 border border-purple-200 dark:border-purple-700 group-hover:scale-105 transition-transform">
                    {item.year}
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Efecto de partículas moradas sutiles */}
                <div className="absolute inset-0 overflow-hidden -z-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-purple-300 dark:bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                      style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificaciones - Efectos Verdes (se mantiene igual) */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              {language === "es" ? "Certificaciones" : "Certifications"}
            </h3>
            {texts[language].certifications.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-green-300 dark:hover:border-green-700 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                <div className="flex items-start z-10 relative">
                  <div className="mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-500 dark:text-green-400 group-hover:scale-110 transition-transform"
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
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {item.institution}
                    </p>
                    <span className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs rounded-full mt-2 border border-green-200 dark:border-green-700">
                      {item.year}
                    </span>
                  </div>
                </div>
                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-4 w-full flex justify-center items-center px-4 py-2 rounded-full text-sm font-medium border-2 border-green-400 dark:border-green-500 text-green-600 dark:text-green-300 hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-all group/btn overflow-hidden relative`}
                  >
                    <span className="relative z-10 flex items-center">
                      {texts[language].viewCertificate}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 rounded-full scale-0 group-hover/btn:scale-100 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 -z-0" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Estilos para las animaciones */}
      <style>{`
        .wave-animation {
          animation: wave 2s ease-in-out infinite;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.4),
            transparent
          );
        }
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
