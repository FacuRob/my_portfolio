interface ContactProps {
  language: "es" | "en";
  darkMode: boolean;
}

const texts = {
  es: {
    contact: "Contacto",
    contactText: "Puedes contactarme para colaborar o trabajar juntos.",
    sendMessage: "Enviar mensaje",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    orContact: "O contáctame directamente:",
  },
  en: {
    contact: "Contact",
    contactText: "You can contact me to collaborate or work together.",
    sendMessage: "Send Message",
    name: "Name",
    email: "Email",
    message: "Message",
    orContact: "Or contact me directly:",
  },
};

export default function Contact({ language }: ContactProps) {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 text-center w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {texts[language].contact}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        {texts[language].contactText}
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md text-left mb-8">
        <input
          type="text"
          placeholder={texts[language].name}
          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border border-gray-300 dark:border-gray-600"
        />
        <input
          type="email"
          placeholder={texts[language].email}
          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border border-gray-300 dark:border-gray-600"
        />
        <textarea
          placeholder={texts[language].message}
          rows={4}
          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border border-gray-300 dark:border-gray-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg transition"
        >
          {texts[language].sendMessage}
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {texts[language].orContact}
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:roblesfacundo7@gmail.com"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            roblesfacundo7@gmail.com
          </a>
          <a
            href="https://wa.me/543815052050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            +54 381 5052050
          </a>
        </div>
      </div>
    </section>
  );
}
