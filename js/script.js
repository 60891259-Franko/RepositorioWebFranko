/**
 * Variable global que almacena el clima actual de la página.
 * Comienza por defecto en "nublado".
 */
let weatherType = "nublado";

/**
 * Función principal para cambiar dinámicamente el clima de la página sin recargar.
 * @param {string} type - Tipo de clima ('soleado', 'nublado', 'lluvioso', 'nevado', 'niebla', 'tropical')
 */
function setWeather(type) {
  weatherType = type;

  // 1. Modificar la clase principal del body
  const body = document.body;
  body.className = `weather-${type}`;

  // 2. Actualizar el estado activo de los botones en la barra de control
  const buttons = document.querySelectorAll(".weather-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(type)) {
      btn.classList.add("active");
    }
  });

  // 3. Regenerar los efectos visuales animados según el clima seleccionado
  generateWeatherEffects(type);
}

/**
 * Genera partículas y elementos visuales dinámicos dentro del Hero según el clima.
 * @param {string} type - Tipo de clima activo
 */
function generateWeatherEffects(type) {
  const container = document.getElementById("weatherAnimation");
  if (!container) return;

  // Limpiar efectos anteriores
  container.innerHTML = "";

  switch (type) {
    case "nublado":
      for (let i = 0; i < 4; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud-particle");
        cloud.style.top = `${Math.random() * 60 + 10}px`;
        cloud.style.width = `${Math.random() * 120 + 80}px`;
        cloud.style.height = `${Math.random() * 30 + 20}px`;
        cloud.style.animationDuration = `${Math.random() * 15 + 15}s`;
        cloud.style.animationDelay = `${Math.random() * -15}s`;
        container.appendChild(cloud);
      }
      break;

    case "lluvioso":
      for (let i = 0; i < 35; i++) {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.top = `${Math.random() * -50}px`;
        drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(drop);
      }
      break;

    case "nevado":
      for (let i = 0; i < 30; i++) {
        const flake = document.createElement("div");
        flake.classList.add("snow-flake");
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.top = `${Math.random() * -20}px`;
        const size = Math.random() * 6 + 3;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        flake.style.animationDelay = `${Math.random() * 3}s`;
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        container.appendChild(flake);
      }
      break;

    case "soleado":
      const sun = document.createElement("div");
      sun.classList.add("sun-glow");
      container.appendChild(sun);
      break;

    case "niebla":
      for (let i = 0; i < 2; i++) {
        const fog = document.createElement("div");
        fog.classList.add("fog-layer");
        fog.style.top = `${i * 120}px`;
        fog.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(fog);
      }
      break;

    case "tropical":
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.classList.add("snow-flake");
        particle.style.background = "#a7f3d0";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 300}px`;
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.animationDuration = `${Math.random() * 4 + 3}s`;
        container.appendChild(particle);
      }
      break;
  }
}

// Inicializar los efectos de clima al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  generateWeatherEffects(weatherType);
});
