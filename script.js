const main = document.getElementById("main-content");
const lang = Telegram.WebApp.initDataUnsafe?.user?.language_code || "en";
let translations = {};

function navigate(section) {
  main.innerHTML = "<p>Loading " + section + "...</p>";
  if (section === "menu") {
    showMenu();
  } else if (section === "reviews") {
    showReviews();
  } else if (section === "orders") {
    main.innerHTML = "<p>Coming soon: Order history</p>";
  } else if (section === "settings") {
    showSettings();
  }
}

function showMenu() {
  fetchMenu().then(items => {
    const html = items.map(item => \`
      <div class="menu-item">
        <h3>\${item.name}</h3>
        <p>\${item.description}</p>
        <strong>€\${item.price}</strong>
        <button>Add to Cart</button>
      </div>
    \`).join("");
    main.innerHTML = html;
  });
}

function showReviews() {
  fetchReviews().then(reviews => {
    const html = reviews.map(r => \`
      <div class="review">
        <p>"\${r.comment}"</p>
        <small>- \${r.user}</small>
      </div>
    \`).join("");
    main.innerHTML = html;
  });
}

function showSettings() {
  main.innerHTML = \`
    <h2>\${t("settings_title")}</h2>
    <p>\${t("language")}: \${lang}</p>
    <p>\${t("contact_info")}: info@thepynkspice.com</p>
  \`;
}

function t(key) {
  return translations[lang]?.[key] || translations["en"]?.[key] || key;
}

window.addEventListener("load", () => {
  loadTranslations().then(() => navigate("menu"));
});