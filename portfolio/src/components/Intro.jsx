import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Intro({ onEnter }) {
  const { i18n } = useTranslation();
  const [hidden, setHidden] = useState(false);

  const handleEnter = () => {
    // animation rapide avant disparition
    setHidden(true);

    setTimeout(() => {
      onEnter(); // signale au parent que l’intro est terminée
    }, 400); // temps du fade-out
  };

  if (hidden) return null; // <-- L'intro disparaît VRAIMENT

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50 transition-opacity duration-500">
      <div className="bg-white rounded-3xl p-10 shadow-xl text-center w-[380px]">
        <h1 className="text-2xl font-bold mb-6">Préparez-vous...</h1>

        <button
          onClick={handleEnter}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
        >
          Entrer
        </button>

        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
          }
          className="ml-3 px-4 py-3 border border-gray-300 rounded-xl font-semibold"
        >
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>

        <p className="mt-4 text-gray-500 text-sm">
          Tip: change language with the button ⤴
        </p>
      </div>
    </div>
  );
}
