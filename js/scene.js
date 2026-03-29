import { state } from "./state.js";

const universe = document.getElementById("universe");
const core = document.getElementById("core");

function clearSceneObjects() {
  const objects = universe.querySelectorAll(".orbit-object");
  objects.forEach((item) => item.remove());
}

function createOrbit(size, duration, reverse = false) {
  const orbit = document.createElement("div");
  orbit.className = "orbit-object orbit";

  orbit.style.width = `${size}%`;
  orbit.style.height = `${size}%`;
  orbit.style.left = `calc(50% - ${size / 2}%)`;
  orbit.style.top = `calc(50% - ${size / 2}%)`;
  orbit.style.animationDuration = `${duration}s`;

  if (reverse) {
    orbit.style.animationDirection = "reverse";
  }

  return orbit;
}

function createStar(index) {
  const orbitSize = 46 + index * 10;
  const orbit = createOrbit(orbitSize, 14 + index * 4, index % 2 !== 0);

  const star = document.createElement("div");
  star.className = "orbit-object-body star-body";

  const size = 10 + state.starLevel * 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${-size / 2}px`;
  star.style.left = `calc(50% - ${size / 2}px)`;

  orbit.appendChild(star);
  universe.appendChild(orbit);
}

function createPlanet(index) {
  const orbitSize = 36 + index * 12;
  const orbit = createOrbit(orbitSize, 18 + index * 5, index % 2 === 0);

  const planet = document.createElement("div");
  const variant = ["planet-1", "planet-2", "planet-3", "planet-4"][index % 4];

  planet.className = `orbit-object-body planet-body ${variant}`;

  const size = 14 + state.planetLevel * 2;
  planet.style.width = `${size}px`;
  planet.style.height = `${size}px`;
  planet.style.top = `${-size / 2}px`;
  planet.style.left = `calc(50% - ${size / 2}px)`;

  orbit.appendChild(planet);
  universe.appendChild(orbit);
}

function renderScene() {
  clearSceneObjects();

  for (let i = 0; i < state.planets; i += 1) {
    createPlanet(i);
  }

  for (let i = 0; i < state.stars; i += 1) {
    createStar(i);
  }
}

function animateTap() {
  core.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.08)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 260,
      easing: "ease-out"
    }
  );
}

function showFloatingEnergy(text = `+${state.tapPower}`) {
  const el = document.createElement("div");
  el.className = "floating-energy";
  el.textContent = text;

  el.style.left = "50%";
  el.style.top = "50%";

  universe.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 900);
}

function handleTapEffect() {
  animateTap();
  showFloatingEnergy(`+${state.tapPower} ⚡`);
}

export {
  renderScene,
  handleTapEffect
};
