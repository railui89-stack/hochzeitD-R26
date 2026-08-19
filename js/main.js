/* Countdown bis zum Hochzeitstag (nur auf home.html vorhanden) */
function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  // -> Datum & Uhrzeit der Hochzeit hier eintragen
  const weddingDate = new Date("2026-10-10T17:00:00");

  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");

  function update() {
    const now = new Date();
    let diff = weddingDate - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minsEl) minsEl.textContent = String(mins).padStart(2, "0");
  }

  update();
  setInterval(update, 30000);
}

function initFaqSingleOpen() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initCountdown();
  initFaqSingleOpen();
});
