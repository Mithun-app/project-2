const startButton = document.querySelector("#start-button");
const buttonHint = document.querySelector("#button-hint");

startButton.addEventListener("click", () => {
  document.querySelector("#next").scrollIntoView({ behavior: "smooth" });
  buttonHint.textContent = "You’re already on your way. Keep going!";
});
