interface ContactProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    title: "Trabajemos juntos!",
    email: "Email",
    whatsapp: "Whatsapp",
  },
  en: {
    title: "Let's work together!",
    email: "Email",
    whatsapp: "Whatsapp",
  },
};

export default function Contact({ language, darkMode }: ContactProps) {
  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-12 md:px-16 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      {/* Imagen decorativa */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/images/imagen.jpeg"
            alt="Trabajo en equipo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Información de contacto */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          {texts[language].title}
        </h2>

        <div className="space-y-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {texts[language].email}
            </p>
            <a
              href="mailto:facurob.dev@gmail.com"
              className="text-xl text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              <img
                src="images/email-icon.png"
                alt="Email icon"
                className="h-6 w-6"
              />
              facurob.dev@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {texts[language].whatsapp}
            </p>
            <a
              href="https://wa.me/543815052050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-600 dark:text-green-400 hover:underline flex items-center gap-2"
            >
              <img
                src="images/whatsapp-icon.png"
                alt="WhatsApp icon"
                className="h-6 w-6"
              />
              +54 381 5052050
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
