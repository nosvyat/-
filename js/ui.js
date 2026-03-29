import { state } from "./state.js";

const elements = {
  energy: document.getElementById("energy"),
  income: document.getElementById("income"),
  universeLevel: document.getElementById("universeLevel"),
  stars: document.getElementById("stars"),
  planets: document.getElementById("planets"),

  infoEnergy: document.getElementById("infoEnergy"),
  infoIncome: document.getElementById("infoIncome"),

  buyStar: document.getElementById("buyStar"),
  buyPlanet: document.getElementById("buyPlanet"),
  upgradeStars: document.getElementById("upgradeStars"),
  upgradePlanets: document.getElementById("upgradePlanets"),
  upgradeUniverse: document.getElementById("upgradeUniverse")
};

export function updateUI() {
  elements.energy.textContent = `⚡ ${Math.floor(state.energy)}`;
  elements.income.textContent = `${state.incomePerSecond}/с`;
  elements.universeLevel.textContent = `${state.universeLevel} ур.`;

  elements.stars.textContent = state.stars;
  elements.planets.textContent = state.planets;

  elements.infoEnergy.textContent = Math.floor(state.energy);
  elements.infoIncome.textContent = state.incomePerSecond;

  elements.buyStar.textContent = `⭐ Купить звезду (${state.starCost})`;
  elements.buyPlanet.textContent = `🪐 Купить планету (${state.planetCost})`;

  elements.upgradeStars.textContent = `⬆️ Улучшить звёзды (${state.starUpgradeCost})`;
  elements.upgradePlanets.textContent = `⬆️ Улучшить планеты (${state.planetUpgradeCost})`;
  elements.upgradeUniverse.textContent = `🌌 Улучшить вселенную (${state.universeUpgradeCost})`;

  elements.buyStar.disabled = state.energy < state.starCost;
  elements.buyPlanet.disabled = state.energy < state.planetCost;
  elements.upgradeStars.disabled = state.energy < state.starUpgradeCost;
  elements.upgradePlanets.disabled = state.energy < state.planetUpgradeCost;
  elements.upgradeUniverse.disabled = state.energy < state.universeUpgradeCost;
}
