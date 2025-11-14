import React from "react";

export default function Projects() {
  const projects = [
    { title: "PharmarKet", desc: "Plateforme e-commerce (PHP, MySQL)" },
    { title: "Commande vocale (IoT)", desc: "Prototype contrôle vocal (ESP32, MQTT)" },
    { title: "Réseaux Fibre — Ouédo", desc: "Conception & tests de distribution souterraine" },
    { title: "Suivi panneau solaire", desc: "Système de suivi pour optimiser exposition" }
  ];
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow hover:scale-[1.02] transition-transform">
            <h4 className="font-bold text-blue-800">{p.title}</h4>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
