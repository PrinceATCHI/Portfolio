import React from "react";
export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">À propos</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Élève ingénieur (Option Réseaux & Télécoms) à l'EPAC. Passionné par la fibre optique,
          l'IoT, la programmation et les systèmes qui rendent le monde connecté. Otaku assumé,
          homme de foi, sociable et amateur de bons repas. Mon approche : clarté technique,
          créativité, et une pointe d'assurance — parce que la confiance fait partie du métier.
        </p>
      </div>
    </section>
  );
}
