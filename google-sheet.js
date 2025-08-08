function fetchMenu() {
  return fetch("https://docs.google.com/spreadsheets/d/e/YOUR_MENU_SHEET/pub?output=csv")
    .then(res => res.text())
    .then(csv => {
      const lines = csv.trim().split("\n").slice(1);
      return lines.map(line => {
        const [name, description, price] = line.split(",");
        return { name, description, price };
      });
    });
}

function fetchReviews() {
  return fetch("https://docs.google.com/spreadsheets/d/e/YOUR_REVIEW_SHEET/pub?output=csv")
    .then(res => res.text())
    .then(csv => {
      const lines = csv.trim().split("\n").slice(1);
      return lines.map(line => {
        const [user, comment] = line.split(",");
        return { user, comment };
      });
    });
}