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
            <strong>DevTree</strong> (un clon personalizable de LinkTree) y la
            página web de <strong>BarPintas</strong>.
          </li>
          <li>
            <strong>💻 Tecnologías</strong>: Profundizando en{" "}
            <strong>React, Node.js, NestJS</strong> y bases de datos para
            construir aplicaciones escalables.
          </li>
        </ul>
        Me apasiona construir cosas útiles, desde interfaces intuitivas hasta
        APIs eficientes, siempre con un enfoque en la seguridad y optimización.
      </>
    ),
    downloadCV: "Descargar CV",
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
            <strong>DevTree</strong> (a customizable LinkTree clone) and{" "}
            <strong>BarPintas</strong> website.
          </li>
          <li>
            <strong>💻 Technologies</strong>: Deepening my knowledge in{" "}
            <strong>React, Node.js, NestJS</strong> and databases for scalable
            applications.
          </li>
        </ul>
        I'm passionate about building useful things, from intuitive interfaces
        to efficient APIs, always with a focus on security and optimization.
      </>
    ),
    downloadCV: "Download CV",
  },
};

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
      className={`h-screen flex flex-col items-center justify-center px-4 text-center w-full ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-600"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {texts[language].about}
      </h2>
      <div
        className={`max-w-2xl text-left ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {texts[language].aboutText}

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {/* Botón Descargar CV */}
          <button
            onClick={handleDownloadCV}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {texts[language].downloadCV}
          </button>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/frobles-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-lg font-medium transition-all border ${
              darkMode
                ? "border-blue-400 text-blue-400 hover:bg-blue-900/30"
                : "border-blue-500 text-blue-500 hover:bg-blue-50"
            }`}
          >
            LinkedIn
          </a>

          {/* Botón GitHub */}
          <a
            href="https://github.com/FacuRob"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-lg font-medium transition-all border ${
              darkMode
                ? "border-gray-400 text-gray-400 hover:bg-gray-900/30"
                : "border-gray-500 text-gray-500 hover:bg-gray-50"
            }`}
          >
            GitHub
          </a>

          {/* Botón TryHackMe */}
          <a
            href="https://tryhackme.com/p/roblesfacundo7"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-lg font-medium transition-all border ${
              darkMode
                ? "border-red-400 text-red-400 hover:bg-red-900/30"
                : "border-red-500 text-red-500 hover:bg-red-50"
            }`}
          >
            TryHackMe
          </a>
        </div>
      </div>
    </section>
  );
}
