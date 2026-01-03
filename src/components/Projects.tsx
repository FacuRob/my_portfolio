interface ProjectsProps {
  language: "es" | "en";
  darkMode: boolean;
}

interface Project {
  title: string;
  image: string;
  description: string;
  githubUrl: string;
  websiteUrl?: string;
  technologies?: string[]; // Nuevo campo para tecnologías
}

const texts = {
  es: {
    projects: "Proyectos",
    description: "Aquí puedes ver algunos de mis proyectos recientes.",
    viewCode: "Ver GitHub",
    viewWebsite: "Ver Sitio Web",
  },
  en: {
    projects: "Projects",
    description: "Here you can see some of my recent projects.",
    viewCode: "View GitHub",
    viewWebsite: "View Website",
  },
};

const projectsData: Project[] = [
  {
    title: "DevTree (Clon LinkTree)",
    image: "images/DevTree.PNG",
    description:
      "Clon de LinkTree personalizado para desarrolladores. Creado con React + Vite + TypeScript y base de datos MongoDB.",
    githubUrl: "https://github.com/FacuRob/DevTree",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "TypeScript",
      "npm",
      "MongoDB",
      "Cloudinary",
    ],
    websiteUrl: "https://github.com/FacuRob/DevTree",
  },
  {
    title: "Menu Digital",
    image: "images/MenuDigital.png",
    description:
      "Resúmenes en PDF de máquinas virtuales y conceptos de ciberseguridad por TryHackMe.",
    githubUrl: "https://github.com/FacuRob/Menu_Digital",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "npm",
      "Postgresql"
    ]
  },
  {
    title: "CyberTools Pro - Ciberseguridad con Python",
    image: "images/CyberTools.png",
    description:
      "Conjunto de herramientas de CiberSeguridad realizadas con Python, con funcion de análisis de puertos web, generador de claves y analisis de Metadatos.",
    githubUrl: "https://github.com/FacuRob/CyberTools",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Python",
      "Security",
      "Networking",
    ],
    websiteUrl: "https://cybertools-3f82.onrender.com/",
  },
  {
    title: "CiberSeguridad con Python",
    image: "images/Ciberseguridad.jfif",
    description:
      "Proyectos Backend realizados con Python 3, para ser ejecutados por consola.",
    githubUrl: "https://github.com/FacuRob/CyberSeguridadPy",
    technologies: [
      "Python",
      "Security",
      "Networking",
      "Terminal",
      "KaliLinux",
      "Linux",
    ],
  },
  {
    title: "TryHackMe - PDF",
    image: "images/TryHackMe.png",
    description:
      "Resúmenes en PDF de máquinas virtuales y conceptos de ciberseguridad por TryHackMe.",
    githubUrl: "https://github.com/FacuRob/TryHackMe",
    technologies: ["Security", "Networking", "PDF Generation", "Markdown"],
  },
];

const technologyBadges: Record<string, string> = {
  HTML5:
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  CSS3: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  JavaScript:
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  Bootstrap:
    "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
  React:
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  TypeScript:
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  MongoDB:
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  Postgresql:
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  Vite: "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E",
  Python:
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  "PDF Generation":
    "https://img.shields.io/badge/PDF-FF0000?style=for-the-badge&logo=adobeacrobatreader&logoColor=white",
  Markdown:
    "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
  Security:
    "https://img.shields.io/badge/Security-4EA94B?style=for-the-badge&logo=securityscorecard&logoColor=white",
  Networking:
    "https://img.shields.io/badge/Networking-00599C?style=for-the-badge&logo=cisco&logoColor=white",
  TailwindCSS:
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  NodeJS:
    "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  Express:
    "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  npm: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
  Cloudinary:
    "https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white",
  Terminal:
    "https://img.shields.io/badge/Terminal-%234D4D4D.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
  KaliLinux:
    "https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kalilinux&logoColor=white",
  Linux:
    "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
};

export default function Projects({ language, darkMode }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12 w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {texts[language].projects}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-12 text-center">
        {texts[language].description}
      </p>

      <div className="space-y-16 w-full max-w-6xl px-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {project.technologies && (
                <div className="flex flex-wrap gap-2 py-2">
                  {project.technologies.map(
                    (tech) =>
                      technologyBadges[tech] && (
                        <img
                          key={tech}
                          src={technologyBadges[tech]}
                          alt={tech}
                          className="h-7"
                        />
                      )
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 rounded-lg transition"
                >
                  {texts[language].viewCode}
                </a>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition"
                  >
                    {texts[language].viewWebsite}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
