# Famiglia Tavolo

Sito di Tavolo, Vassoio, Poltrona e Bancone: gestionali per ristoranti, pasticcerie, saloni e locali notturni a Catania.

- `index.html`: il sito
- `demo/vassoio.html`, `demo/poltrona.html`, `demo/bancone.html`: le demo complete (PIN 1234, i dati restano nel browser di chi le prova)

## Pubblicarlo con GitHub Pages
1. Su github.com crea un repository nuovo, per esempio `famiglia-tavolo`, pubblico.
2. "Add file" > "Upload files": trascina tutto il contenuto di questa cartella (anche la cartella `demo` e il file `.nojekyll`). "Commit changes".
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, cartella `/ (root)`. Save.
4. Dopo 1-2 minuti il sito è su `https://TUONOME.github.io/famiglia-tavolo/`.

## Dominio tuo (facoltativo)
Compra il dominio (es. hellotavolo.it), in Settings > Pages > Custom domain scrivi il dominio,
e dal pannello del dominio crea un record CNAME `www` verso `TUONOME.github.io`.
