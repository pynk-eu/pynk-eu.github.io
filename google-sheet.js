function fetchMenu() {
  return fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8pMksqCLC76_vMUxFaHu72LdBIQOf8qTgh1fZEQlESzZslRELVMt3zMd9ui8ZcC0sTpBGwekEaDir/pub?gid=1611185556&single=true&output=csv")
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
  return fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8pMksqCLC76_vMUxFaHu72LdBIQOf8qTgh1fZEQlESzZslRELVMt3zMd9ui8ZcC0sTpBGwekEaDir/pub?gid=985155781&single=true&output=csv")
    .then(res => res.text())
    .then(csv => {
      const lines = csv.trim().split("\n").slice(1);
      return lines.map(line => {
        const [user, comment] = line.split(",");
        return { user, comment };
      });
    });
}
