/* Pannello accessibilità della Famiglia Tavolo.
   Le scelte restano salvate in questo browser (archiviazione locale) e non vengono inviate a nessuno. */
(function () {
  "use strict";
  var CHIAVE = "famigliatavolo-accessibilita";
  var OPZ = [
    { k: "testo", nome: "Testo più grande", livelli: ["Normale", "Grande", "Molto grande"] },
    { k: "contrasto", nome: "Alto contrasto" },
    { k: "fermo", nome: "Ferma le animazioni" },
    { k: "leggibile", nome: "Carattere più leggibile" },
    { k: "spazi", nome: "Più spazio tra le righe" },
    { k: "link", nome: "Evidenzia link e pulsanti" }
  ];
  var stato = {};
  try { stato = JSON.parse(localStorage.getItem(CHIAVE) || "{}") || {}; } catch (e) { stato = {}; }
  var html = document.documentElement;

  function applica() {
    html.classList.remove("a11y-testo-1", "a11y-testo-2");
    if (stato.testo) html.classList.add("a11y-testo-" + stato.testo);
    ["contrasto", "fermo", "leggibile", "spazi", "link"].forEach(function (k) { html.classList.toggle("a11y-" + k, !!stato[k]); });
    try { localStorage.setItem(CHIAVE, JSON.stringify(stato)); } catch (e) {}
    document.dispatchEvent(new CustomEvent("accessibilita", { detail: stato }));
  }
  applica();

  function avvia() {
    var annuncio = document.createElement("div");
    annuncio.className = "sr-only"; annuncio.setAttribute("role", "status"); annuncio.setAttribute("aria-live", "polite");
    var btn = document.createElement("button");
    btn.className = "a11y-btn"; btn.type = "button";
    btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "a11y-pannello");
    btn.innerHTML = '<span class="sr-only">Opzioni di accessibilità</span><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><circle cx="12" cy="4" r="2"/><path d="M20.5 7.1 15 8.6v4.1l1.8 7.6a1.1 1.1 0 0 1-2.1.5L12.6 14h-1.2l-2.1 6.8a1.1 1.1 0 0 1-2.1-.5L9 12.7V8.6L3.5 7.1a1.1 1.1 0 1 1 .6-2.1L10 6.6h4l5.9-1.6a1.1 1.1 0 1 1 .6 2.1Z"/></svg>';
    var pan = document.createElement("div");
    pan.className = "a11y-pan"; pan.id = "a11y-pannello"; pan.hidden = true;
    pan.setAttribute("role", "region"); pan.setAttribute("aria-labelledby", "a11y-titolo");
    function disegna() {
      pan.innerHTML = '<h2 id="a11y-titolo">Accessibilità</h2><p>Adatta il sito a come leggi meglio. Le scelte restano su questo dispositivo.</p><div class="opz">' +
        OPZ.map(function (o) {
          var v = stato[o.k] || 0, on = !!v, st = o.livelli ? o.livelli[v] : (on ? "Attivo" : "Spento");
          return '<button type="button" class="op" data-k="' + o.k + '" aria-pressed="' + on + '"><span>' + o.nome + '</span><span class="st">' + st + "</span></button>";
        }).join("") +
        '</div><div class="piede"><button type="button" data-azione="ripristina">Ripristina</button><a href="' + (document.body.dataset.radice || "") + 'accessibilita.html">Dichiarazione di accessibilità</a><button type="button" data-azione="chiudi">Chiudi</button></div>';
    }
    disegna();
    function apri(si) {
      pan.hidden = !si; btn.setAttribute("aria-expanded", String(si));
      if (si) { var b = pan.querySelector("button.op"); if (b) b.focus(); } else btn.focus();
    }
    btn.addEventListener("click", function () { apri(pan.hidden); });
    pan.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.azione === "chiudi") return apri(false);
      if (b.dataset.azione === "ripristina") { stato = {}; applica(); disegna(); annuncio.textContent = "Impostazioni ripristinate"; pan.querySelector("button.op").focus(); return; }
      var k = b.dataset.k; if (!k) return;
      var o = OPZ.filter(function (x) { return x.k === k; })[0];
      stato[k] = o.livelli ? ((stato[k] || 0) + 1) % o.livelli.length : !stato[k];
      if (!stato[k]) delete stato[k];
      applica(); disegna();
      var nb = pan.querySelector('button[data-k="' + k + '"]'); if (nb) nb.focus();
      annuncio.textContent = o.nome + ": " + (o.livelli ? o.livelli[stato[k] || 0] : (stato[k] ? "attivo" : "spento"));
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !pan.hidden) apri(false); });
    var zona = document.createElement("aside"); zona.setAttribute("aria-label", "Accessibilità");
    zona.appendChild(annuncio); zona.appendChild(pan); zona.appendChild(btn); document.body.appendChild(zona);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia); else avvia();
})();
