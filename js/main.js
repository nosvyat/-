import { state } from "./state.js";
import { updateUI } from "./ui.js";

const tapBtn = document.getElementById("tapBtn");

function recalculateIncome() {
  const starIncome = state.stars * state.starLevel * 2;
  const planetIncome = state.planets * state.planetLevel * 1;
  state.incomePerSecond = starIncome + planetIncome;
}

function tapEnergy() {
  state.energy += state.tapPower;
  updateUI();
}

function gameLoop() {
  state.energy += state.incomePerSecond / 2;
  updateUI();
}

tapBtn.addEventListener("click", tapEnergy);

recalculateIncome();
updateUI();

setInterval(() => {
  gameLoop();
}, 500);
