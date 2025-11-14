import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const send = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
      .then(() => alert("Message envoyé ✅"))
      .catch(() => alert("Erreur lors de l'envoi ❌"));
  };

  return (
    <section id="contact" className="py-12 px-6 bg-white/30">
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact</h3>
        <form ref={form} onSubmit={send} className="grid gap-3">
          <input name="user_name" required placeholder="Nom" className="p-3 border rounded" />
          <input name="user_email" required type="email" placeholder="Email" className="p-3 border rounded" />
          <input name="subject" placeholder="Sujet" className="p-3 border rounded" />
          <textarea name="message" placeholder="Message" required rows="5" className="p-3 border rounded"></textarea>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
