function loadTranslations() {
  return fetch("https://docs.google.com/spreadsheets/d/e/YOUR_TRANSLATION_SHEET/pub?output=csv")
    .then(res => res.text())
    .then(csv => {
      translations = {
        en: {
          settings_title: "Settings",
          language: "Language",
          contact_info: "Contact",
        },
        de: {
          settings_title: "Einstellungen",
          language: "Sprache",
          contact_info: "Kontakt",
        }
      };
    });
}