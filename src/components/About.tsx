interface AboutProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    about: "Sobre mí",
    aboutText: (
      <>
        ¡Hola! Soy <strong>Desarrollador FullStack</strong> con formación en
        programación y experiencia en <strong>soporte técnico</strong> y{" "}
        <strong>atención al cliente</strong>, lo que me ha dado una visión
        integral para resolver problemas eficientemente.
        <br />
        <br />
        Actualmente estoy enfocado en:
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>
            <strong>🔒 Ciberseguridad</strong>: Aprendiendo y practicando con
            plataformas como TryHackMe.
          </li>
          <li>
            <strong>🚀 Desarrollo de Proyectos</strong>: Creando soluciones como{" "}
            <strong>DevTree</strong> (Clon personalizable de LinkTree) y el
            sitio web de <strong>CyberTools</strong> (Conjunto de herramientas
            de Ciberseguridad).
          </li>
          <li>
            <strong>💻 Tecnologías</strong>: Profundizando en{" "}
            <strong>React, Node.js, TypeScript</strong> y bases de datos para
            construir aplicaciones escalables.
          </li>
        </ul>
        Me apasiona construir cosas útiles, desde interfaces intuitivas hasta
        APIs eficientes, siempre con un enfoque en la seguridad y optimización.
      </>
    ),
    skillsTitle: "Tecnologías y Herramientas",
  },
  en: {
    about: "About Me",
    aboutText: (
      <>
        Hi! I'm a <strong>FullStack Developer</strong> with programming training
        and experience in <strong>technical support</strong> and{" "}
        <strong>customer service</strong>, which has given me comprehensive
        problem-solving skills.
        <br />
        <br />
        Currently focused on:
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>
            <strong>🔒 Cybersecurity</strong>: Learning and practicing with
            platforms like TryHackMe.
          </li>
          <li>
            <strong>🚀 Project Development</strong>: Building solutions like{" "}
            <strong>DevTree</strong> (Customizable LinkTree clone) and{" "}
            <strong>CyberTools</strong> website (Cybersecurity Toolkit ).
          </li>
          <li>
            <strong>💻 Technologies</strong>: Deepening my knowledge in{" "}
            <strong>React, Node.js, TypeScript</strong> and databases for
            scalable applications.
          </li>
        </ul>
        I'm passionate about building useful things, from intuitive interfaces
        to efficient APIs, always with a focus on security and optimization.
      </>
    ),
    skillsTitle: "Technologies & Tools",
  },
};

// Lista de iconos de habilidades y lenguajes
const skillsIcons = [
  "html",
  "css",
  "js",
  "bootstrap",
  "react",
  "vite",
  "tailwind",
  "nodejs",
  "express",
  "npm",
  "ts",
  "mysql",
  "mongo",
  "py",
  "kali",
  "linux",
  "windows",
  "git",
  "github",
  "vscode",
  "visualstudio",
  "postman",
  "netlify",
  "aws",
];

export default function About({ language, darkMode }: AboutProps) {
  const handleDownloadCV = () => {
    const pdfUrl = "/Facundo_Robles_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Facundo_Robles_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className={`h-auto min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center w-full ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-600"
      }`}
    >
      <div className="max-w-4xl w-full">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {texts[language].about}
        </h2>
        <div
          className={`max-w-2xl mx-auto text-left ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {texts[language].aboutText}
        </div>

        {/* Sección de habilidades y lenguajes con animación */}
        <div className="mt-12">
          <h3
            className={`text-2xl md:text-3xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {texts[language].skillsTitle}
          </h3>
          <div
            className={`p-6 rounded-lg overflow-hidden relative ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <div className="flex w-max animate-infinite-scroll">
              {skillsIcons.map((icon, index) => (
                <div key={index} className="mx-4">
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={icon}
                    className="h-12 w-12"
                  />
                </div>
              ))}
              {/* Duplicamos los iconos para el efecto de loop continuo */}
              {skillsIcons.map((icon, index) => (
                <div key={`duplicate-${index}`} className="mx-4">
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={icon}
                    className="h-12 w-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
