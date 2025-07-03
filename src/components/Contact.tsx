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
  },
  en: {
    contact: "Contact",
    contactText: "You can contact me to collaborate or work together.",
    sendMessage: "Send Message",
    name: "Name",
    email: "Email",
    message: "Message",
  },
};

export default function Contact({ language, darkMode }: ContactProps) {
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
      <form className="flex flex-col gap-4 w-full max-w-md text-left">
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
    </section>
  );
}
