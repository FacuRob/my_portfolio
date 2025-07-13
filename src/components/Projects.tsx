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
    /*websiteUrl: "https://example.com", PROXIMAMENTE*/
  },
  {
    title: "TryHackMe - PDF",
    image: "images/TryHackMe.png",
    description:
      "Resúmenes en PDF de máquinas virtuales y conceptos de ciberseguridad por TryHackMe.",
    githubUrl: "https://github.com/FacuRob/TryHackMe",
  },
  {
    title: "Proyecto 3",
    image: "https://via.placeholder.com/400x250?text=Project+3",
    description: "Descripción breve del tercer proyecto y sus características.",
    githubUrl: "https://github.com",
    websiteUrl: "https://example.com",
  },
];

export default function Projects({ language }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12 w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {texts[language].projects}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
        {texts[language].description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-center transition"
                >
                  {texts[language].viewCode}
                </a>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-center transition"
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
