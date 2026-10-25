# Famiglia Tavolo

Sito di Tavolo, Vassoio, Poltrona e Bancone: gestionali per ristoranti, pasticcerie, saloni e locali notturni a Catania.

## Cosa c'è
- `index.html`: il sito
- `privacy.html`: privacy policy (GDPR)
- `accessibilita.html`: dichiarazione di accessibilità (WCAG 2.1 AA)
- `demo/`: demo complete di Vassoio, Poltrona e Bancone (PIN 1234; i dati restano nel browser di chi le prova)
- `assets/`: caratteri ospitati nel sito (licenza SIL OFL 1.1), pannello accessibilità, stili delle pagine di testo
- `.nojekyll`: serve a GitHub Pages per pubblicare la cartella `assets` così com'è

Il sito non usa cookie, statistiche o servizi esterni: nessuna richiesta parte verso Google o altri.
I collegamenti a WhatsApp, Instagram e TikTok si aprono solo se la persona li tocca.

## Pubblicarlo con GitHub Pages
1. Su github.com crea un repository nuovo, per esempio `famiglia-tavolo`, **pubblico**.
2. "Add file" > "Upload files": trascina **tutto** il contenuto di questa cartella, comprese le cartelle `assets` e `demo` e il file `.nojekyll` (sul Mac i file che iniziano col punto sono nascosti: nel Finder premi Cmd+Maiusc+. per vederli). "Commit changes".
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, cartella `/ (root)`. Save.
4. Dopo 1-2 minuti il sito è su `https://TUONOME.github.io/famiglia-tavolo/`.
5. In Settings > Pages spunta "Enforce HTTPS" se non è già attivo.

## Dominio tuo (facoltativo)
Compra il dominio (es. hellotavolo.it), in Settings > Pages > Custom domain scrivi il dominio,
e dal pannello del dominio crea un record CNAME `www` verso `TUONOME.github.io`.

## Da aggiornare quando apri la Partita IVA
In fondo alla pagina principale (riga "© Famiglia Tavolo") e nella privacy policy (sezione "Chi tratta i dati")
aggiungi ragione sociale, indirizzo e Partita IVA: per un'attività con P.IVA sono obbligatori sul sito.
