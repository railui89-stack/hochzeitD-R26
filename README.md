# Hochzeitsseite Anna & Thomas

Statische, passwortgeschützte Website für die Hochzeit, gebaut mit reinem
HTML/CSS/JS – ohne Framework, ohne Build-Schritt. Läuft direkt auf GitHub Pages.

## Struktur

```
index.html        Passwort-Startseite (das ist die erste Seite, die alle sehen)
home.html          Landingpage nach dem Login
locations.html     Trauung & Feier
ablauf.html        Zeitstrahl des Tages
faq.html           Häufige Fragen (aufklappbar)
rsvp.html          Zu-/Absage-Formular (aktuell nur Vorschau, siehe unten)
css/style.css      Alle Styles
js/auth.js         Passwortschutz
js/main.js         Countdown, FAQ, RSVP-Feedback
img/monogram.svg   Zier-Monogramm "A & T"
```

## 1. Auf GitHub veröffentlichen

1. Neues Repository auf GitHub anlegen (z. B. `hochzeit-anna-thomas`).
2. Diesen Ordnerinhalt in das Repo pushen:
   ```bash
   git init
   git add .
   git commit -m "Hochzeitsseite"
   git branch -M main
   git remote add origin https://github.com/<dein-nutzername>/<repo-name>.git
   git push -u origin main
   ```
3. Im Repo: **Settings → Pages → Source** auf `main` / `/ (root)` stellen und speichern.
4. Nach ein paar Minuten ist die Seite unter
   `https://<dein-nutzername>.github.io/<repo-name>/` erreichbar.

Da `index.html` im Root liegt, landen Besucher:innen automatisch zuerst auf der
Passwort-Seite – genau wie gewünscht.

## 2. Passwort ändern

In `js/auth.js` ganz oben:

```js
const SITE_PASSWORD = "unsereHochzeit2026";
```

**Wichtig zu wissen:** GitHub-Pages-Seiten (auf dem kostenlosen Plan) sind
öffentlich einsehbar – auch der Quellcode. Das Passwort ist also kein echter
Schutz vor technisch versierten Personen, sondern eher eine Hürde gegen
zufällige Besucher:innen, Suchmaschinen & Weiterleitungen. Für echte
Vertraulichkeit bräuchtet ihr entweder ein GitHub-Team-/Enterprise-Konto mit
privaten Pages oder ein anderes Hosting mit echtem Server-Login.

## 3. Inhalte anpassen

Einfach per Suchen & Ersetzen in allen `.html`-Dateien:

- `Anna & Thomas` → eure Namen
- `20. Juni 2026` → euer Datum (zusätzlich in `js/main.js` bei `weddingDate` anpassen, Format `"YYYY-MM-DDTHH:MM:SS"`)
- Adressen in `locations.html`
- Zeiten/Programm in `ablauf.html`
- Fragen/Antworten in `faq.html`

Das Monogramm in `img/monogram.svg` zeigt aktuell "A&T" – Initialen im Text-Element anpassen.

## 4. RSVP-Formular wirklich anbinden

Aktuell zeigt `rsvp.html` beim Absenden nur eine Bestätigung an – es werden
**keine Daten gespeichert oder verschickt**. Um echte Zusagen zu sammeln,
zwei einfache Optionen ohne eigenen Server:

- **Formspree** (https://formspree.io): kostenloses Konto, `action="https://formspree.io/f/DEINE-ID"` und `method="POST"` im `<form>`-Tag in `rsvp.html` ergänzen, das `preventDefault()` in `js/main.js` (`initRsvpForm`) entfernen.
- **Google Forms**: alternativ ein Google-Formular bauen und in `rsvp.html` per iframe einbetten oder verlinken.

## Design

- Schriften: „Cormorant Garamond“ (Überschriften, kursiv) + „EB Garamond“ (Fließtext), über Google Fonts eingebunden.
- Farben: Elfenbein-Papier, warmes Anthrazit-Pflaume als Textfarbe, Salbeigrün und Altrosa als Nebenfarben, Antik-Gold für Linien und Akzente.
- Wiederkehrendes Signature-Element: das Monogramm sowie der schlichte Gold-Fleuron-Trenner (Linie–Raute–Linie).
