const themeToggle = document.querySelector("#theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191c19" : "#f6f4ef";
  try { localStorage.setItem("first-project-theme", theme); } catch { /* Storage may be unavailable for local files. */ }
}

let savedTheme = "light";
try { savedTheme = localStorage.getItem("first-project-theme") || "light"; } catch { /* Use the light theme when storage is unavailable. */ }
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
