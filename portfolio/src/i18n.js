import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        heroText: `Bonjour/Bonsoir, je suis Prince ATCHI, bienvenue dans mon portfolio!\nVous en apprendrez un rayon sur moi, et j'en suis sûr, vous serez wow.\n\nJe suis le genre d'homme que l'on remarque avant même qu'il n'ouvre la bouche.\nLà où d'autres suivent, je crée des autoroutes. Je n'avance pas — j'impose le rythme.\nRien chez moi n'est laissé au hasard : talent, travail et une grâce qui dépasse.\nRestez, vous allez voir pourquoi.`,
        buttonContact: "Contactez-moi",
        buttonKnow: "Me connaître",
        enter: "Entrer"
      }
    },
    en: {
      translation: {
        heroText: `Hello/Good evening, I am Prince ATCHI, welcome to my portfolio!\nYou will learn a lot about me, and I'm sure you'll be wowed.\n\nI'm the kind of man people notice before I even speak.\nWhere others follow, I create highways. I don't move forward — I set the pace.\nNothing about me is random: talent, work and a grace beyond measure.\nStay, you'll soon understand why.`,
        buttonContact: "Contact me",
        buttonKnow: "Know me",
        enter: "Enter"
      }
    }
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false }
});
