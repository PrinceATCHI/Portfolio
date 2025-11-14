import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../styles/particles.json";
import { useTranslation } from "react-i18next";

export default function Hero({ started = false }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!started) return; // ne rien faire tant que l'utilisateur n'a pas cliqué Entrer

    const text = t("heroText");
    let i = 0;
    const speed = 38;
    const container = document.getElementById("typed");
    if (container) container.innerText = "";

    function type() {
      if (!container) return;
      if (i < text.length) {
        container.innerText += text[i];
        i++;
        setTimeout(type, speed);
      } else {
        const actions = document.getElementById("hero-actions");
        if (actions) actions.classList.remove("opacity-0");
      }
    }

    const starter = setTimeout(() => type(), 400); // petit délai après Entrer
    return () => clearTimeout(starter);
  }, [t, started]);

  async function particlesInit(main) { await loadFull(main); }

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <Particles init={particlesInit} options={particlesConfig} className="absolute inset-0 -z-10" />
      <div className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-2xl overflow-hidden">
        <img src="/src/assets/profile.jpg" alt="Prince ATCHI" className="w-full h-full object-cover" />
      </div>

      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-blue-800">Prince ATCHI</h1>

      <p id="typed" className="mt-6 max-w-3xl text-lg md:text-xl text-slate-700 leading-relaxed whitespace-pre-line"></p>

      <div id="hero-actions" className="opacity-0 transition-opacity duration-700 mt-8 flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">Contact</a>
        <a href="#about" className="px-6 py-3 bg-white/60 backdrop-blur border border-blue-200 text-blue-700 rounded-xl">Me connaître</a>
      </div>
    </section>
  );
}
