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
  },
};

export default function About({ language, darkMode }: AboutProps) {
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
      </div>
    </section>
  );
}
