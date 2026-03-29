import { state } from "./state.js";
import { updateUI } from "./ui.js";

function recalculateIncome() {
  const starIncome = state.stars * state.starLevel * 2;
  const planetIncome = state.planets * state.planetLevel * 1;

  state.incomePerSecond = starIncome + planetIncome;
}

function updateGame() {
  recalculateIncome();
  updateUI();
}

function runPassiveIncome() {
  state.energy += state.incomePerSecond / 2;
  updateUI();
}

function tapEnergy() {
  state.energy += state.tapPower;
  updateGame();
}

export {
  recalculateIncome,
  updateGame,
  runPassiveIncome,
  tapEnergy
};
