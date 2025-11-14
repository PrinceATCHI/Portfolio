import React from "react";
export default function Skills() {
  const skills = [
    "Réseaux & Fibre optique",
    "TCP/IP, Routage, Sécurité",
    "Linux, Admin systèmes",
    "C / C++ / PHP / JS",
    "Wireshark, Packet Tracer",
    "IoT & Microcontrôleurs"
  ];
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="p-4 bg-blue-50 rounded-xl shadow-sm">
            <div className="font-semibold text-blue-700">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
