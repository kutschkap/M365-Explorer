/* =====================================================================
   M365 Lizenz-Explorer — Datenmodell
   ---------------------------------------------------------------------
   Diese Datei ist BEWUSST von der Darstellung getrennt.
   Komponenten hier pflegen, ohne den App-Code anzufassen.

   Pläne werden über ihren key referenziert. Pro Komponente gibt es ein
   "in"-Objekt: { planKey: 1 } = enthalten. Fehlt der key, ist sie nicht
   enthalten. Optionales "addon": true markiert eine kostenpflichtige
   Zusatzlizenz statt eines Plan-Bestandteils.

   desc  = 2-Satz-Erklärung (anbieterneutral)
   learn = offizielle Microsoft-Learn / Microsoft-URL
   ===================================================================== */

const LEARN = "https://learn.microsoft.com";

window.M365 = {

  /* ---- Pläne / Spalten ----------------------------------------- */
  plans: [
    { key:'bb', fam:'Business',   name:'Business Basic',    short:'BB', color:'#93c5fd' },
    { key:'bs', fam:'Business',   name:'Business Standard', short:'BS', color:'#3b82f6' },
    { key:'bp', fam:'Business',   name:'Business Premium',  short:'BP', color:'#1e40af' },
    { key:'oe1', fam:'Office 365', name:'Office 365 E1',    short:'O E1', color:'#67e8f9' },
    { key:'oe3', fam:'Office 365', name:'Office 365 E3',    short:'O E3', color:'#06b6d4' },
    { key:'oe5', fam:'Office 365', name:'Office 365 E5',    short:'O E5', color:'#155e75' },
    { key:'e3', fam:'Microsoft 365 Enterprise', name:'Microsoft 365 E3',  short:'E3', color:'#fcd34d' },
    { key:'e5', fam:'Microsoft 365 Enterprise', name:'Microsoft 365 E5',  short:'E5', color:'#d97706' },
    { key:'e7', fam:'Microsoft 365 Enterprise', name:'Microsoft 365 E7',  short:'E7', color:'#78350f' },
    { key:'f1', fam:'Microsoft 365 Frontline',  name:'Microsoft 365 F1',  short:'F1', color:'#86efac' },
    { key:'f3', fam:'Microsoft 365 Frontline',  name:'Microsoft 365 F3',  short:'F3', color:'#15803d' },
    { key:'of3',fam:'Office 365 Frontline',     name:'Office 365 F3',     short:'O F3', color:'#0d9488' },
  ],

  /* ---- Add-ons (eigene Lizenzen, kein Plan-Bestandteil) -------- */
  addons: [
    { key:'phone',   name:'Teams Phone',             color:'#0d9488' },
    { key:'tprem',   name:'Teams Premium',           color:'#0e7490' },
    { key:'visio',   name:'Visio Plan 2',            color:'#15803d' },
    { key:'project', name:'Project Plan 3',          color:'#15803d' },
    { key:'pbi',     name:'Power BI Pro',            color:'#ca8a04' },
    { key:'copilot', name:'Microsoft 365 Copilot',   color:'#7c3aed' },
    { key:'defpurbpsuite', name:'Defender + Purview Suite (BP)',  color:'#7c2d12' },
    { key:'defbpsuite',    name:'Defender Suite (BP)',            color:'#dc2626' },
    { key:'purbpsuite',    name:'Purview Suite (BP)',             color:'#1d4ed8' },
    { key:'defentsuite',   name:'Defender Suite (E3)',            color:'#b91c1c' },
    { key:'purentsuite',   name:'Purview Suite (E3)',             color:'#1e3a8a' },
    { key:'entrasuite',    name:'Microsoft Entra Suite',          color:'#0f766e' },
    { key:'intunesuite',   name:'Microsoft Intune Suite',         color:'#6d28d9' },
    { key:'flwdefsuite',   name:'Defender Suite (Frontline)',     color:'#9f1239' },
    { key:'flwpursuite',   name:'Purview Suite (Frontline)',      color:'#1e40af' },
    { key:'seccopilot',    name:'Microsoft Security Copilot',     color:'#a16207' },
    { key:'agent365',      name:'Microsoft Agent 365',            color:'#581c87' },
  ],

  /* ---- Kategorien & Komponenten -------------------------------- */
  categories: [
    {
      cat:'Office-Apps & Produktivität',
      items:[
        { n:'Office im Web', desc:'Word, Excel, PowerPoint und OneNote direkt im Browser, ohne lokale Installation. Ideal für gelegentliche Bearbeitung und geteilte Geräte. In Microsoft 365 F1 nur lesender Zugriff (kein Bearbeiten).',
          learn:LEARN+'/office365/servicedescriptions/office-online-service-description/office-online-service-description', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Office Desktop-Apps', desc:'Die vollwertigen, lokal installierten Office-Programme (Word, Excel, PowerPoint, Outlook, Access, Publisher — letzterer wird zum Oktober 2026 abgekündigt). Bieten den vollen Funktionsumfang auch offline.',
          learn:LEARN+'/microsoft-365-apps/', in:{bs:1,bp:1,oe3:1,oe5:1,e3:1,e5:1,e7:1} },
        { n:'OneNote', desc:'Digitales Notizbuch zum Sammeln von Text, Bildern, Skizzen und Dateien in frei strukturierbaren Seiten. Synchronisiert über alle Geräte hinweg. In Microsoft 365 F1 nur lesender Zugriff über das Web (kein Bearbeiten).',
          learn:LEARN+'/office365/servicedescriptions/office-online-service-description/onenote-online', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Clipchamp', desc:'Einfacher Videoeditor zum Schneiden, Vertonen und Exportieren von Clips im Browser, mit Vorlagen, Übergängen und Aufnahmefunktionen. Premium-Funktionen wie 4K-Export oder Stockmaterial nur über eine separate Clipchamp-Premium-Zusatzlizenz.',
          learn:LEARN+'/office365/servicedescriptions/windows-365-service-description/microsoft-clipchamp-service-description', in:{bs:1,bp:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1} },
        { n:'Microsoft Loop', desc:'Flexible Arbeitsfläche mit synchronisierten Komponenten (Listen, Tabellen, Notizen), die mehrere Personen in Echtzeit bearbeiten — Loop-App und Workspaces ab Business Standard. Eingebettete Loop-Komponenten in Outlook, Teams und Word funktionieren auch in Business Basic.',
          learn:LEARN+'/microsoft-365/loop/loop-requirements', in:{bs:1,bp:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
      ]
    },
    {
      cat:'Postfach & Kalender',
      items:[
        { n:'Exchange Online', desc:'Gehostetes E-Mail- und Kalendersystem mit eigenem Postfach pro Nutzer, geteilten Kalendern und Kontakten. Postfachgröße 50 GB in den Business-Plänen, 100 GB in E3 und E5; zusätzliches, mitwachsendes Archivpostfach in Business Premium, E3 und E5.',
          learn:LEARN+'/exchange/exchange-online', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'Bookings', desc:'Online-Terminbuchungssystem mit eigener Buchungsseite, das Termine automatisch mit Kalendern abgleicht. Reduziert Hin-und-her bei der Terminfindung.',
          learn:LEARN+'/microsoft-365/bookings/bookings-overview', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Exchange Online Protection', desc:'Eingebauter Basis-Schutz gegen Spam, Schadsoftware und Phishing für ein- und ausgehende E-Mails. Standardmäßig in allen Plänen mit Exchange enthalten und heute redaktionell Teil von Defender for Office 365.',
          learn:LEARN+'/defender-office-365/eop-about', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
      ]
    },
    {
      cat:'Teamarbeit & Speicher',
      items:[
        { n:'Microsoft Teams', desc:'Plattform für Chat, Meetings und Zusammenarbeit, in den klassischen Microsoft-365-Suiten enthalten. Seit der Entbündelung 2023/2024 (zuerst im Europäischen Wirtschaftsraum, ab April 2024 weltweit) auch als günstigere „ohne Teams"-Variante erhältlich, bei der Microsoft Teams separat lizenziert werden muss.',
          learn:LEARN+'/microsoftteams/', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'SharePoint Online', desc:'Cloud-Plattform für Teamwebsites und gemeinsame Dokumentenablage mit Versionierung und Berechtigungen. Grundlage für Intranets und Dateifreigabe.',
          learn:LEARN+'/sharepoint/introduction', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'OneDrive', desc:'Persönlicher Cloud-Speicher pro Nutzer mit Synchronisierung und Freigabe. Standardmäßig 1 TB pro Person, in E3 und E5 auf bis zu 5 TB erweiterbar.',
          learn:LEARN+'/office365/servicedescriptions/onedrive-for-business-service-description', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'Microsoft Lists', desc:'App zum Erfassen und Verfolgen strukturierter Informationen in anpassbaren Listen mit Ansichten und Regeln. Eignet sich für Vorgänge, Inventare oder Aufgaben.',
          learn:LEARN+'/microsoftteams/manage-lists-app', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Planner', desc:'Aufgaben- und Projektplanung mit Boards, Zuständigkeiten und Fortschrittsanzeige, in Teams integriert für gemeinsame Vorhaben. Erweiterte Funktionen wie Zeitachsen oder Abhängigkeiten erfordern Planner Premium als kostenpflichtige Zusatzlizenz.',
          learn:LEARN+'/planner/', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Forms', desc:'Werkzeug zum Erstellen von Umfragen, Quizzen und Formularen mit automatischer Auswertung. Antworten lassen sich nach Excel exportieren.',
          learn:LEARN+'/office365/servicedescriptions/microsoft-forms-service-description', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Viva Engage', desc:'Internes soziales Netzwerk für unternehmensweite Kommunikation, Communities und Wissensaustausch. Premium-Funktionen wie Leadership-Analysen oder gesteuerte Kampagnen erfordern eine separate Viva-Lizenz.',
          learn:LEARN+'/viva/engage/overview', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'Visio für das Web', desc:'Diagramm-Werkzeug für Flussdiagramme, Organigramme und Pläne im Browser, eingeschränkter Funktionsumfang gegenüber dem Visio-Desktop. Voller Umfang nur über eine separate Visio-Abo-Lizenz (Plan 1 oder Plan 2).',
          learn:LEARN+'/office365/servicedescriptions/visio-online-service-description/visio-online-service-description', in:{oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1} },
        { n:'Microsoft Places', desc:'Werkzeug zur Belegungs- und Raumverwaltung für hybride Arbeitsmodelle. Zeigt an, welche Kollegen wann ins Büro kommen, und hilft bei der Suche nach freien Räumen und deren Buchung (Places Explorer und Places Finder).',
          learn:LEARN+'/microsoft-365/places/', in:{} },
      ]
    },
    {
      cat:'Geräteverwaltung (Intune)',
      items:[
        { n:'Microsoft Intune Plan 1', desc:'Cloud-Dienst zum Verwalten und Absichern von Geräten und Apps über Richtlinien, deckt Smartphones, Tablets, Laptops und Windows-Rechner ab. Erweiterte Funktionen wie Remote-Hilfe oder erweiterte Analyse erfordern Intune Plan 2 oder die Intune Suite als kostenpflichtige Zusatzlizenz.',
          learn:LEARN+'/intune/fundamentals/what-is-intune', in:{bp:1,e3:1,e5:1,e7:1,f3:1} },
        { n:'Komplette Geräteverwaltung', desc:'Zentrale Verwaltung kompletter Geräte inklusive Konfiguration, Sicherheitsrichtlinien und Fernlöschung. Greift auf Geräteebene.',
          learn:LEARN+'/intune/device-enrollment/guide', in:{bp:1,e3:1,e5:1,e7:1,f3:1} },
        { n:'App-Verwaltung (auch auf privaten Geräten)', desc:'Schützt Unternehmensdaten auf App-Ebene, etwa durch Kopier-Sperren oder selektives Löschen. Funktioniert auch auf privaten Geräten ohne volle Verwaltung.',
          learn:LEARN+'/intune/app-management/overview', in:{bp:1,e3:1,e5:1,e7:1,f1:1,f3:1} },
        { n:'Windows Autopilot', desc:'Automatisierte Erstkonfiguration neuer Windows-Geräte direkt ab Werk, ohne manuelles Aufsetzen. Das Gerät richtet sich beim ersten Anmelden selbst ein.',
          learn:LEARN+'/autopilot/overview', in:{bp:1,e3:1,e5:1,e7:1,f3:1} },
      ]
    },
    {
      cat:'Identität & Zugriff (Entra)',
      items:[
        { n:'Microsoft Entra ID', desc:'Cloud-Verzeichnis für Benutzerkonten, Gruppen und Anmeldung an Microsoft-365-Diensten. Grundlage jeder Identität im Tenant.',
          learn:LEARN+'/entra/fundamentals/what-is-entra', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'Multi-Faktor-Authentifizierung', desc:'Zusätzlicher Anmeldenachweis neben dem Passwort — etwa über die Authenticator-App, einen Passkey, eine SMS oder einen Hardware-Token. Schützt Konten auch bei gestohlenen Kennwörtern.',
          learn:LEARN+'/entra/identity/authentication/concept-mfa-howitworks', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f1:1,f3:1,of3:1} },
        { n:'Bedingter Zugriff (Conditional Access)', desc:'Regelwerk, das den Zugriff abhängig von Nutzer, Gerät, Standort und Risiko erlaubt, mit einer zusätzlichen Anmeldung absichert oder blockiert. Kernbaustein eines Zero-Trust-Ansatzes.',
          learn:LEARN+'/entra/identity/conditional-access/overview', in:{bp:1,e3:1,e5:1,e7:1,f1:1,f3:1} },
        { n:'Passwort selbst zurücksetzen', desc:'Ermöglicht Nutzern, ihr Passwort selbst zurückzusetzen — über einen zweiten Faktor statt eines Helpdesk-Anrufs. In hybriden Umgebungen wird das neue Passwort auch ins lokale Active Directory zurückgeschrieben.',
          learn:LEARN+'/entra/identity/authentication/concept-sspr-howitworks', in:{bp:1,e3:1,e5:1,e7:1,f1:1,f3:1} },
        { n:'Identitätsschutz (Microsoft Entra ID Plan 2)', desc:'Erkennt verdächtige Anmeldungen automatisch (z.B. geleakte Passwörter oder unmögliche Reisemuster) und kann gezielte Schutzmaßnahmen erzwingen oder Konten sperren. Enthält außerdem das zeitlich begrenzte Aktivieren privilegierter Rollen (Privileged Identity Management).',
          learn:LEARN+'/entra/id-protection/overview-identity-protection', in:{e5:1,e7:1} },
      ]
    },
    {
      cat:'Sicherheit (Defender)',
      items:[
        { n:'Defender for Office 365 Plan 1', desc:'Erweiterter Schutz für E-Mails und Office-Dokumente: prüft Links beim Anklicken in Echtzeit und öffnet verdächtige Anhänge zuerst in einer abgeschotteten Umgebung. In Business Premium und E5 enthalten, in Microsoft 365 E3 und Office 365 E3 derzeit nur als kostenpflichtige Zusatzlizenz (ab 01.07.2026 dort standardmäßig enthalten).',
          learn:LEARN+'/defender-office-365/mdo-about', in:{bp:1,oe5:1,e5:1,e7:1} },
        { n:'Defender for Office 365 Plan 2', desc:'Erweitert Plan 1 um Werkzeuge für Sicherheitsteams: automatische Untersuchung von Vorfällen, vertiefte Bedrohungsanalyse und Übungs-Phishing-Kampagnen zur Mitarbeiterschulung. In E5 enthalten.',
          learn:LEARN+'/defender-office-365/mdo-about', in:{oe5:1,e5:1,e7:1} },
        { n:'Defender for Business', desc:'Endpunktschutz mit Erkennung und Antwort auf Bedrohungen für Server und Clients, zugeschnitten auf kleinere Organisationen (bis 300 Nutzer). In Business Premium enthalten; für Business Basic und Business Standard als kostenpflichtiges Add-on erhältlich.',
          learn:LEARN+'/defender-business/mdb-overview', in:{bp:1} },
        { n:'Defender for Endpoint Plan 1', desc:'Endpunktschutz für PCs, Macs und Server mit Härtungsregeln und manuellen Reaktionsmaßnahmen bei Vorfällen. In Microsoft 365 E3 enthalten.',
          learn:LEARN+'/defender-endpoint/defender-endpoint-plan-1', in:{e3:1,f3:1} },
        { n:'Defender for Endpoint Plan 2', desc:'Vollständiger Endpunktschutz mit automatischer Vorfall-Untersuchung, gezielter Bedrohungssuche und Verwaltung von Schwachstellen. Höchste Stufe des Endpunktschutzes.',
          learn:LEARN+'/defender-endpoint/microsoft-defender-endpoint', in:{e5:1,e7:1} },
        { n:'Defender for Cloud Apps', desc:'Verschafft Sicht und Kontrolle über alle in der Organisation genutzten Cloud-Anwendungen. Erkennt unautorisiert eingesetzte Dienste, bewertet deren Risiko und schützt Daten in Cloud-Apps.',
          learn:LEARN+'/defender-cloud-apps/what-is-defender-for-cloud-apps', in:{e5:1,e7:1} },
        { n:'Safe Links', desc:'Prüft angeklickte Links in E-Mails und Dokumenten in Echtzeit auf Schädlichkeit. Schützt auch vor Links, die erst nach Zustellung bösartig werden.',
          learn:LEARN+'/defender-office-365/safe-links-about', in:{bp:1,oe5:1,e5:1,e7:1} },
        { n:'Safe Attachments', desc:'Öffnet E-Mail-Anhänge in einer abgeschotteten Umgebung und prüft ihr Verhalten vor Zustellung. Fängt unbekannte Schadsoftware ab, die Signaturfilter übersehen.',
          learn:LEARN+'/defender-office-365/safe-attachments-about', in:{bp:1,oe5:1,e5:1,e7:1} },
        { n:'Regeln zur Verkleinerung der Angriffsfläche', desc:'Regeln auf Windows-Endgeräten, die typische Angriffsmuster blockieren — etwa missbrauchte Office-Makros, verdächtige Skripte oder Diebstahl von Anmeldedaten. Verringert die Zahl der Wege, über die ein Gerät kompromittiert werden kann.',
          learn:LEARN+'/defender-endpoint/attack-surface-reduction-rules-overview', in:{bp:1,e3:1,e5:1,e7:1,f3:1} },
        { n:'Automatische Untersuchung und Reaktion', desc:'Untersucht Sicherheitswarnungen auf Endgeräten automatisch, ermittelt den Sachverhalt und ergreift bei Bedarf selbstständig Gegenmaßnahmen (z.B. eine Datei in Quarantäne stellen). Entlastet Sicherheitsteams bei der Bearbeitung großer Alarmmengen.',
          learn:LEARN+'/defender-endpoint/automated-investigations', in:{bp:1,oe5:1,e5:1,e7:1} },
        { n:'Microsoft Defender Vulnerability Management', desc:'Findet und priorisiert Schwachstellen und Fehlkonfigurationen auf Endgeräten nach tatsächlichem Risiko und liefert konkrete Empfehlungen zur Behebung. Kernfunktionen in E5 und Business Premium enthalten; erweiterte Funktionen wie authentifizierte Scans als kostenpflichtige Zusatzlizenz.',
          learn:LEARN+'/defender-vulnerability-management/defender-vulnerability-management', in:{bp:1,e5:1,e7:1} },
        { n:'Anbindung an Microsoft Sentinel (separat lizenziert)', desc:'Microsoft Sentinel ist Microsofts cloud-basiertes Werkzeug zur zentralen Sammlung und Auswertung von Sicherheitsereignissen über den ganzen Tenant. Es ist nicht Teil der Microsoft-365-Pläne, sondern ein separat zu buchender Azure-Dienst, der nach eingelagertem Datenvolumen abgerechnet wird.',
          learn:LEARN+'/azure/sentinel/overview', in:{} },
      ]
    },
    {
      cat:'Information Protection & Compliance',
      items:[
        { n:'Vertraulichkeitsbezeichnungen', desc:'Kennzeichnungen für Dokumente und E-Mails (Microsoft Purview Information Protection), die Verschlüsselung, Wasserzeichen und Zugriffsregeln durchsetzen und am Inhalt haften bleiben — auch beim Teilen. Automatische Klassifizierung ist eine E5-Funktion.',
          learn:LEARN+'/purview/sensitivity-labels', in:{bp:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Schutz vor Datenverlust', desc:'Regeln (Microsoft Purview Data Loss Prevention), die das versehentliche Teilen sensibler Daten wie Kreditkartennummern oder Personalausweisnummern blockieren oder warnen. Greift in E-Mail, Dateien und Teams-Nachrichten; der Schutz auf Endgeräten selbst (Endpoint DLP) ist nur in E5 enthalten.',
          learn:LEARN+'/purview/dlp-learn-about-dlp', in:{oe3:1,oe5:1,e3:1,e5:1,e7:1,of3:1} },
        { n:'E-Mail-Verschlüsselung', desc:'Verschlüsselt einzelne E-Mails (Microsoft Purview Message Encryption), sodass auch externe Empfänger sie sicher öffnen können. Erweiterte Funktionen wie Ablaufdatum und Widerruf sind nur in E5 enthalten.',
          learn:LEARN+'/purview/ome', in:{bp:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,of3:1} },
        { n:'Aufbewahrung & Lebenszyklus', desc:'Richtlinien (Microsoft Purview Data Lifecycle Management), die Inhalte über definierte Zeiträume aufbewahren oder löschen — manuell oder regelbasiert. Automatische Anwendung von Aufbewahrungsbezeichnungen und adaptive Bereiche sind nur in E5 enthalten.',
          learn:LEARN+'/purview/retention', in:{oe3:1,oe5:1,e3:1,e5:1,e7:1,of3:1} },
        { n:'Erweiterte eDiscovery (Premium)', desc:'Rechtliche Recherche über Postfächer, Dateien und Teams-Nachrichten mit Fallverwaltung, Legal Hold, Review-Sets und Predictive Coding. Die einfachere eDiscovery-Standardvariante mit Such- und Export-Funktionen ist bereits in E3 enthalten.',
          learn:LEARN+'/purview/ediscovery', in:{oe5:1,e5:1,e7:1} },
        { n:'Insider-Risiko-Management', desc:'Erkennt riskantes Verhalten von Mitarbeitenden auf Basis pseudonymisierter Signale, z.B. Datenabfluss vor einer Kündigung oder ungewöhnliche Zugriffe auf sensible Daten. Microsoft Purview Insider Risk Management mit Vorlagen für gängige Szenarien.',
          learn:LEARN+'/purview/insider-risk-management', in:{e5:1,e7:1} },
        { n:'Kommunikations-Compliance', desc:'Überwacht interne Kommunikation in Teams, Exchange und Viva Engage auf Richtlinienverstöße wie Belästigung oder Geheimnisverrat. Microsoft Purview Communication Compliance, standardmäßig mit pseudonymisierten Benutzernamen.',
          learn:LEARN+'/purview/communication-compliance', in:{e5:1,e7:1} },
        { n:'Datensatzverwaltung (Records Management)', desc:'Markiert Dokumente und E-Mails als formale Datensätze mit Sperr-, Versions- und Lösch-Nachweis über ihren gesamten Lebenszyklus. Microsoft Purview Records Management unterscheidet entsperrbare Standard-Datensätze und unwiderrufliche regulatorische Datensätze.',
          learn:LEARN+'/purview/records-management', in:{e5:1,e7:1} },
        { n:'Customer Key', desc:'Erlaubt der Organisation, eigene Root-Verschlüsselungsschlüssel für Exchange-, SharePoint-, OneDrive- und Teams-Daten bereitzustellen — zusätzlich zur Standardverschlüsselung von Microsoft. Für hohe Anforderungen an Datenhoheit und regulatorische Kontrolle.',
          learn:LEARN+'/purview/customer-key-overview', in:{oe5:1,e5:1,e7:1} },
        { n:'Erweiterte Überwachung (Audit Premium)', desc:'Audit-Protokolle bis zu einem Jahr (Standard: 180 Tage), benutzerdefinierte Aufbewahrungsregeln und zusätzliche Ereignisse für Sicherheitsuntersuchungen. Eine Aufbewahrung von zehn Jahren erfordert eine separate kostenpflichtige Zusatzlizenz.',
          learn:LEARN+'/purview/audit-solutions-overview', in:{oe5:1,e5:1,e7:1} },
        { n:'Compliance Manager', desc:'Bewertet die Compliance-Lage anhand von Vorgaben wie DSGVO, ISO 27001 oder HIPAA, schlägt konkrete Maßnahmen vor und liefert einen messbaren Compliance-Score. In E5 ist die Anzahl der verfügbaren Bewertungs-Vorlagen deutlich höher als in E3.',
          learn:LEARN+'/purview/compliance-manager', in:{oe3:1,oe5:1,e3:1,e5:1,e7:1,of3:1} },
      ]
    },
    {
      cat:'Teams Telefonie & Meetings',
      items:[
        { n:'Telefoneinwahl in Meetings', desc:'Einwahl in Teams-Meetings per Telefon über lokale, gebührenfreie und internationale Servicenummern. In E5 enthalten; für Business-Pläne und E3 als kostenpflichtige Zusatzlizenz erhältlich. Eine eingeschränkte Variante mit Wählverbindung nach USA und Kanada ist breiter verfügbar.',
          learn:LEARN+'/microsoftteams/audio-conferencing-in-office-365', in:{oe5:1,e5:1,e7:1} },
        { n:'Teams Webinare', desc:'Strukturierte Online-Veranstaltungen mit Registrierungsseite, Wartesaal und Auswertung — bis zu 1.000 Teilnehmende. Erweiterte Funktionen wie detailliertes Branding oder erweiterte Meeting-Themes erfordern Teams Premium.',
          learn:LEARN+'/microsoftteams/plan-webinars', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Großveranstaltungen (Town Halls)', desc:'Großveranstaltungen für unternehmensweite Ansprachen mit Produktions-Funktionen, virtuellem Greenroom und Fragerunden — standardmäßig bis 10.000 Zuschauer. Eine Skalierung auf bis zu 100.000 Teilnehmende benötigt eine kostenpflichtige Zusatzlizenz. Nachfolger der eingestellten Live Events.',
          learn:LEARN+'/microsoftteams/plan-town-halls', in:{bb:1,bs:1,bp:1,oe1:1,oe3:1,oe5:1,e3:1,e5:1,e7:1,f3:1,of3:1} },
        { n:'Immersive Events', desc:'Großveranstaltungen in einer 3D-Umgebung mit Avataren für moderne Konferenz- und Networking-Formate. Im April 2026 als Erweiterung der Teams-Meetings eingeführt.',
          learn:LEARN+'/microsoftteams/immersive-spaces-in-teams', in:{} },
        { n:'Teams Shared Space License', desc:'Lizenz für gemeinsam genutzte Geräte ohne festen Nutzer, z.B. an Empfangstresen oder in Meeting-Räumen. Erlaubt, das Gerät als anonymes Teams-Endgerät zu betreiben.',
          learn:LEARN+'/microsoftteams/devices/shared-device-licensing', in:{} },
        { n:'Teams Rooms Pro', desc:'Lizenz für Teams-zertifizierte Konferenzraum-Geräte mit erweiterten Funktionen wie intelligenter Audio-Wahrnehmung, Whiteboard-Sharing und Raumanalyse. Für ausgestattete Meetingräume.',
          learn:LEARN+'/microsoftteams/rooms/rooms-licensing', in:{} },
      ]
    },
    {
      cat:'Windows & Lizenzrechte',
      items:[
        { n:'Windows 11 Enterprise (Upgrade-Recht)', desc:'Per-Nutzer-Upgrade-Recht auf Windows 11 Enterprise (Step-up von Windows 11 Pro), mit erweiterten Sicherheits- und Verwaltungsfunktionen wie Credential Guard und Personal Data Encryption. Business Premium berechtigt nur zu Windows 11 Pro, nicht zu Enterprise.',
          learn:LEARN+'/windows/whats-new/windows-licensing', in:{e3:1,e5:1,e7:1} },
        { n:'Windows-Virtualisierungsrechte', desc:'Recht zur Nutzung von Windows 11 Enterprise in virtuellen Umgebungen wie Azure Virtual Desktop oder Windows 365 Enterprise. Erlaubt bis zu fünf gleichzeitige Windows-Instanzen pro lizenziertem Nutzer; in Business-Plänen nicht enthalten.',
          learn:LEARN+'/azure/virtual-desktop/prerequisites', in:{e3:1,e5:1,e7:1} },
        { n:'Universal Print', desc:'Cloud-basierter Druckdienst ohne lokale Druckserver, verwaltet Drucker zentral über Microsoft Entra ID. Enthalten in Business Premium, E3 und E5 mit 100 Druckjobs pro Nutzer und Monat aus einem geteilten Pool.',
          learn:LEARN+'/universal-print/get-access-to-universal-print', in:{bp:1,e3:1,e5:1,e7:1,f3:1} },
      ]
    },
    {
      cat:'Add-ons (separat lizenziert)',
      addonCat:true,
      items:[
        { n:'Teams Phone', desc:'Fügt Teams eine vollwertige Cloud-Telefonanlage hinzu — Anrufe, Voicemail, Anrufweiterleitung, Anrufgruppen, automatische Telefonzentralen. In Microsoft 365 E5 als „Teams Phone Standard" enthalten; in Business-Plänen und E3 als separates Add-on. Für Anrufe ins öffentliche Telefonnetz ist zusätzlich ein Sprachkanal nötig — entweder Microsofts eigener Calling Plan oder eine Anbindung über einen lokalen Telefonanbieter (Operator Connect oder Direct Routing).',
          learn:LEARN+'/microsoftteams/what-is-phone-system-in-office-365', addon:true, in:{phone:1,oe5:1,e5:1,e7:1} },
        { n:'Teams Premium', desc:'Erweitert Teams um vier Bereiche: erweiterter Meeting-Schutz (Wasserzeichen, Ende-zu-Ende-Verschlüsselung), Anrufwarteschlangen-Verwaltung, individuelles Branding und KI-Funktionen wie intelligente Meeting-Zusammenfassungen. Seit April 2026 sind einige zuvor exklusive Funktionen auch in den Standard-Teams-Lizenzen verfügbar.',
          learn:LEARN+'/microsoftteams/teams-add-on-licensing/licensing-enhance-teams', addon:true, in:{tprem:1} },
        { n:'Visio Plan 2', desc:'Vollwertiges Diagramm-Werkzeug als Desktop-App und im Web mit erweiterten Schablonen und Datenverknüpfung. Plan 2 enthält zusätzlich zur Web-Version die Desktop-App und erweiterte Datenintegration; für reine Web-Nutzung reicht der günstigere Visio Plan 1.',
          learn:LEARN+'/office365/servicedescriptions/visio-online-service-description/visio-online-service-description', addon:true, in:{visio:1} },
        { n:'Project Plan 3', desc:'Projektmanagement-Lösung für Planung, Ressourcen, Zeitpläne und Gantt-Diagramme. Microsoft führt Project for the Web in den neuen Microsoft Planner über — die Plan-3-Lizenz schaltet dort die Premium-Projektfunktionen wie Abhängigkeiten, Zeitachsen und Portfolios frei.',
          learn:LEARN+'/planner/', addon:true, in:{project:1} },
        { n:'Power BI Pro', desc:'Werkzeug zum Erstellen und Teilen interaktiver Berichte und Dashboards aus über 100 Datenquellen — die Benutzerlizenz für den Power-BI-Dienst (Veröffentlichen, Teilen, Workspaces). In Microsoft 365 E5 und Office 365 E5 als Bestandteil enthalten; für alle anderen Pläne als separate Zusatzlizenz. Heute Teil der Microsoft-Fabric-Plattform.',
          learn:LEARN+'/power-bi/fundamentals/power-bi-overview', addon:true, in:{pbi:1,oe5:1,e5:1,e7:1} },
        { n:'Microsoft 365 Copilot', desc:'KI-Assistent in Word, Excel, PowerPoint, Outlook, Teams, OneNote und Loop zum Erstellen, Zusammenfassen und Auswerten von Inhalten. Greift auf die Daten im eigenen Tenant zu (Mails, Dokumente, Meetings), aber strikt nur auf das, worauf der Nutzer ohnehin Zugriff hat. In Microsoft 365 E7 als Bestandteil enthalten; für alle anderen Microsoft-365- oder Office-365-Pläne als separate Zusatzlizenz erhältlich.',
          learn:LEARN+'/microsoft-365/copilot/microsoft-365-copilot-overview', addon:true, in:{copilot:1,e7:1} },
        { n:'Microsoft Security Copilot', desc:'KI-Assistent speziell für Sicherheits-Teams: analysiert Vorfälle, fasst Bedrohungen zusammen, schlägt Reaktionen vor und automatisiert Routineaufgaben in Defender, Sentinel und Intune. Im Dezember 2025 als Add-on eingeführt; Microsoft 365 E5 und E7 enthalten 400 Security-Compute-Units pro 1.000 Lizenzen pro Monat als Basis-Kontingent.',
          learn:LEARN+'/copilot/security/microsoft-security-copilot', addon:true, in:{seccopilot:1,e5:1,e7:1} },
        { n:'Microsoft Agent 365', desc:'Plattform für KI-Agenten im eigenen Tenant: Erstellen, Bereitstellen und Verwalten von Agenten mit eigener Identität, Sicherheits-Richtlinien, Lifecycle-Management und Nutzungs-Analyse. Im Mai 2026 eingeführt — in Microsoft 365 E7 als Bestandteil enthalten, für alle anderen Pläne als separate Subscription erhältlich.',
          learn:'https://www.microsoft.com/microsoft-365/agent-365', addon:true, in:{agent365:1,e7:1} },
      ]
    },
    {
      cat:'Security & Compliance Suites',
      addonCat:true,
      items:[
        { n:'Defender + Purview Suite (BP)', desc:'Spar-Bundle für Business-Premium-Kunden, das die Defender Suite und die Purview Suite zu einem günstigeren Gesamtpreis kombiniert. Bringt erweiterte Bedrohungserkennung, Datenschutz und Compliance-Funktionen in einem Schritt — Funktionen, die sonst dem Enterprise-Plan E5 vorbehalten sind.',
          learn:'https://www.microsoft.com/de-de/security/pricing/small-medium-business/security-add-on-plans', addon:true, in:{defpurbpsuite:1}, for:['bp'] },
        { n:'Defender Suite (BP)', desc:'Erweitert Microsoft 365 Business Premium um den erweiterten Sicherheits-Stack über Endgeräte, Identitäten, Cloud-Apps und E-Mails hinweg. Bringt kleinen und mittleren Organisationen Funktionen wie Identitätsschutz, Cloud-App-Sicherheit und automatische Untersuchung, die sonst nur in Microsoft 365 E5 enthalten sind.',
          learn:'https://www.microsoft.com/de-de/security/pricing/small-medium-business/security-add-on-plans', addon:true, in:{defbpsuite:1}, for:['bp'] },
        { n:'Purview Suite (BP)', desc:'Erweitert Microsoft 365 Business Premium um die volle Compliance-Suite — Schutz vor Datenverlust auf Endgeräten, Datenklassifizierung, Insider-Risiko-Management und Datensatzverwaltung. Bringt kleinen und mittleren Organisationen den Compliance-Funktionsumfang von Microsoft 365 E5.',
          learn:'https://www.microsoft.com/de-de/security/pricing/small-medium-business/security-add-on-plans', addon:true, in:{purbpsuite:1}, for:['bp'] },
        { n:'Defender Suite (E3)', desc:'Bringt Microsoft-365-E3-Kunden den vollen Defender-Stack der Enterprise-Klasse — erweiterten Endpunktschutz, Identitätsschutz, Cloud-App-Sicherheit und automatische Untersuchung. Entspricht im Wesentlichen dem Sicherheits-Teil von Microsoft 365 E5; ehemals als „Microsoft 365 E5 Security" verkauft.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{defentsuite:1}, for:['e3'] },
        { n:'Purview Suite (E3)', desc:'Bringt Microsoft-365-E3-Kunden die volle Compliance-Suite — Insider-Risiko-Management, Kommunikations-Compliance, Datensatzverwaltung, Customer Key, erweiterte Überwachung und erweiterte eDiscovery. Entspricht im Wesentlichen dem Compliance-Teil von Microsoft 365 E5; ehemals als „Microsoft 365 E5 Compliance" verkauft.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{purentsuite:1}, for:['e3'] },
        { n:'Microsoft Entra Suite', desc:'Bündelt mehrere kostenpflichtige Entra-Erweiterungen: Identitäts-Governance, Verified ID Premium sowie sicheren Netzwerkzugriff über Internet Access und Private Access (Microsofts Antwort auf klassisches VPN). Ergänzt jeden M365-Plan, der Microsoft Entra ID enthält.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{entrasuite:1}, for:['bp','e3','e5','e7','f1','f3'] },
        { n:'Microsoft Intune Suite', desc:'Erweitert Microsoft Intune Plan 1 um Remote-Hilfe, Cloud-PKI, KI-gestützte Endpunkt-Analyse, erweiterten App-Schutz und die Patch-Verwaltung von Drittanbieter-Software. Microsofts vollständiges Geräteverwaltungs-Paket über die Plan-1-Basis hinaus.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{intunesuite:1}, for:['bp','e3','e5','e7','f3'] },
        { n:'Defender Suite (Frontline)', desc:'Erweitert Microsoft 365 F3 um den Defender-Stack für Frontline-Worker — Endpunktschutz, Identitätsschutz und Cloud-App-Sicherheit. Pendant zur Defender Suite für Information Worker, zugeschnitten auf die Frontline-Lizenzbasis.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{flwdefsuite:1}, for:['f3'] },
        { n:'Purview Suite (Frontline)', desc:'Erweitert Microsoft 365 F3 um die Compliance-Suite für Frontline-Worker — Schutz vor Datenverlust, Datenklassifizierung und Insider-Risiko-Management. Pendant zur Purview Suite für Information Worker.',
          learn:'https://www.microsoft.com/de-de/security/pricing/enterprise/security-suites', addon:true, in:{flwpursuite:1}, for:['f3'] },
      ]
    },
  ]
};
