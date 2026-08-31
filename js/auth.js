/*
  Einfacher Passwortschutz für eine statische GitHub-Pages-Seite.

  WICHTIG: Das ist KEINE echte Sicherheit. Der Quellcode dieser Seite
  ist auf GitHub öffentlich einsehbar, das Passwort steht im Klartext
  unten in diesem File. Das reicht, um zufällige Besucher:innen und
  Suchmaschinen fernzuhalten – aber nicht, um Inhalte wirklich geheim
  zu halten. Wer den Link zum Repo hat, kann das Passwort im Code finden.

  -> Passwort hier ändern:
*/
const SITE_PASSWORD = "D&R26";

const SESSION_KEY = "hochzeit_auth_ok";

/* Wird auf index.html (Passwort-Seite) aufgerufen */
function initGate() {
  const form = document.getElementById("gate-form");
  const input = document.getElementById("gate-password");
  const error = document.getElementById("gate-error");

  if (!form) return;

  // Falls schon eingeloggt, direkt weiterleiten
  if (sessionStorage.getItem(SESSION_KEY) === "true") {
    window.location.href = "home.html";
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = input.value.trim();

    if (value === SITE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      window.location.href = "home.html";
    } else {
      error.textContent = "Falsches Passwort – bitte noch einmal versuchen.";
      error.classList.remove("shake");
      // Reflow erzwingen, damit die Animation erneut abgespielt wird
      void error.offsetWidth;
      error.classList.add("shake");
      input.value = "";
      input.focus();
    }
  });
}

/* Wird auf allen geschützten Seiten (home, locations, ablauf, faq, rsvp) aufgerufen */
function guardPage() {
  if (sessionStorage.getItem(SESSION_KEY) !== "true") {
    window.location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initGate();
  if (document.body.dataset.protected === "true") {
    guardPage();
  }
});
