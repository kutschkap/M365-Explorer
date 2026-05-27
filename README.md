# Microsoft 365 Lizenz-Explorer

Ein anbieterneutrales, statisches Tool zum Vergleichen von Microsoft-365-Lizenzen
auf Komponentenebene — mit Kurzerklärungen und Links zur offiziellen Microsoft-Doku.

## Aufbau

Bewusst getrennt, damit sich Daten ohne Code-Kenntnisse pflegen lassen:

```
.
├── index.html   → Darstellung & Logik (anfassen nur bei Funktions-Änderungen)
├── data.js      → ALLE Lizenzdaten (hier pflegt man Inhalte)
└── README.md
```

Kein Build, kein Framework, keine Abhängigkeiten. Reines HTML/CSS/JS.

## Lokal öffnen

`index.html` und `data.js` im selben Ordner ablegen, dann `index.html` im Browser öffnen.

## Daten pflegen (`data.js`)

### Eine Komponente hinzufügen
In die passende Kategorie unter `categories` ein Objekt einfügen:

```js
{ n:'Anzeigename',
  desc:'Zwei-Satz-Erklärung. Was ist es, wofür nutzt man es.',
  learn:LEARN+'/pfad/zur-doku',
  in:{ bp:1, e3:1, e5:1 } },   // enthalten in diesen Plänen
```

- `in:` enthält nur die Plan-Keys, in denen die Komponente **enthalten** ist.
  Fehlt ein Key, wird automatisch „nicht enthalten“ dargestellt.
- `learn:` immer mit dem `LEARN`-Präfix → ergibt eine `learn.microsoft.com`-URL.
- `desc:` zwei knappe Sätze, anbieterneutral.

### Einen Plan oder ein Add-on hinzufügen
Unter `plans` bzw. `addons` eine Zeile ergänzen. Der `key` ist die ID, die in
`in:{}` referenziert wird:

```js
{ key:'f3', fam:'Frontline', name:'Microsoft 365 F3', short:'F3', color:'#0d9488' },
```

Danach diesen Key in den `in:{}`-Objekten der zugehörigen Komponenten ergänzen.

## Auf GitHub Pages veröffentlichen

1. Repo anlegen, beide Dateien + README pushen.
2. Repo → **Settings → Pages → Source: Deploy from a branch**, Branch `main`, Ordner `/root`.
3. Nach ~1 Min. live unter `https://<username>.github.io/<repo>/`.

## Mit Claude Code weiterentwickeln

Sinnvolle nächste Schritte, die sich gut delegieren lassen:
- `data.js` systematisch gegen die Microsoft-Learn-Doku pflegen und erweitern.
- Weitere Lizenzfamilien als eigene Pläne ergänzen (Frontline F1/F3, Office 365 E1/E3/E5).
- Export-Funktion (PDF/Print-Ansicht) für eine ausgewählte Spaltenkombination.
- Deep-Link, der eine bestimmte Lizenz-Auswahl per URL teilbar macht.

## Haftungshinweis

Orientierungshilfe auf Basis der offiziellen Microsoft-Service-Beschreibungen (Stand 2026).
Kein Ersatz für die verbindlichen Microsoft-Lizenzbedingungen. Vor verbindlichen
Entscheidungen stets gegen die aktuelle Microsoft-Dokumentation prüfen.
