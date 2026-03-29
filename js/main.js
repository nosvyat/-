import { updateGame, runPassiveIncome, tapEnergy } from "./game.js";

import "./shop.js";
import "./upgrades.js";

const tapBtn = document.getElementById("tapBtn");

tapBtn.addEventListener("click", tapEnergy);

updateGame();

setInterval(() => {
  runPassiveIncome();
}, 500);
