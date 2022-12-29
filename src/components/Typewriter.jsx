import { useState, useEffect } from "react";

let typingTimer;
let deletingTimer;

function Typewriter() {
  const [currentText, setCurrentText] = useState("");
  const originalText =
    "is a Graphic Designer living and working between Paris and Barcelona.";

  function startTyping() {
    let index = 0;

    typingTimer = setInterval(() => {
      setCurrentText(originalText.substring(0, index));
      index++;

      if (index > originalText.length) {
        clearInterval(typingTimer);
        startDeleting();
      }
    }, 150); // Exécute la fonction toutes les 50 millisecondes
  }

  function startDeleting() {
    clearInterval(typingTimer); // arrêtez le timer d'ajout de caractères avant de démarrer celui de suppression

    let index = originalText.length; // démarrez à l'index de la dernière lettre de originalText

    deletingTimer = setInterval(() => {
      setCurrentText((prevText) => prevText.substring(0, index)); // utilisez une fonction de rappel pour accéder à la valeur la plus récente de currentText
      index--;

      if (index <= 0) {
        clearInterval(deletingTimer);
        startTyping();
      }
    }, 150); // Exécute la fonction toutes les 50 millisecondes
  }

  useEffect(() => {
    startTyping();

    // Nettoyez les timers lorsque le composant se démonte
    return () => {
      clearInterval(typingTimer);
      clearInterval(deletingTimer);
    };
  }, []);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
}

export default Typewriter;
