import { updateGame, runPassiveIncome, tapEnergy } from "./game.js";
import { switchTab } from "./tabs.js";

import "./shop.js";
import "./upgrades.js";

const tapBtn = document.getElementById("tapBtn");

tapBtn.addEventListener("click", tapEnergy);

switchTab("shop");
updateGame();

setInterval(() => {
  runPassiveIncome();
}, 500);
