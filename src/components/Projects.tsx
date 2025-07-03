interface ProjectsProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    projects: "Proyectos",
    description:
      "Aquí podrás mostrar tus proyectos con tarjetas visuales en el futuro.",
  },
  en: {
    projects: "Projects",
    description:
      "Here you can display your projects with visual cards in the future.",
  },
};

export default function Projects({ language, darkMode }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 text-center w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {texts[language].projects}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        {texts[language].description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg">
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
            Proyecto 1
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Descripción breve</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg">
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
            Proyecto 2
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Descripción breve</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-lg">
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
            Proyecto 3
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Descripción breve</p>
        </div>
      </div>
    </section>
  );
}
