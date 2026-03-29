import { state } from "./state.js";
import { updateUI } from "./ui.js";

import "./shop.js";
import "./upgrades.js";

const tapBtn = document.getElementById("tapBtn");

function recalculateIncome() {
  const starIncome = state.stars * state.starLevel * 2;
  const planetIncome = state.planets * state.planetLevel * 1;

  state.incomePerSecond = starIncome + planetIncome;
}

function tapEnergy() {
  state.energy += state.tapPower;
  updateGame();
}

function gameLoop() {
  state.energy += state.incomePerSecond / 2;
  updateUI();
}

function updateGame() {
  recalculateIncome();
  updateUI();
}

tapBtn.addEventListener("click", tapEnergy);

updateGame();

setInterval(() => {
  gameLoop();
}, 500);

export { updateGame, recalculateIncome };
