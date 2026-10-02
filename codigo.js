/* =========================================
   PORTAFOLIO FRANKO MENDOZA
   SISTEMA DE CLIMAS
========================================= */

/* =========================================
   VARIABLE PRINCIPAL DEL CLIMA
========================================= */

let weatherType = "nublado";

/* =========================================
   ELEMENTOS HTML
========================================= */

const body = document.body;

const weatherButton = document.getElementById("themeButton");

const weatherText = document.getElementById("weatherText");

const temperature = document.getElementById("temperature");

const weatherIcon = document.querySelector(".weather-icon");

/* =========================================
   CONFIGURACIÓN DE CADA CLIMA
========================================= */

const weatherData = {
  soleado: {
    temperature: "24°C",

    text: "Soleado",

    icon: "fa-sun",
  },

  nublado: {
    temperature: "18°C",

    text: "Nublado",

    icon: "fa-cloud",
  },

  lluvioso: {
    temperature: "16°C",

    text: "Lluvia",

    icon: "fa-cloud-rain",
  },

  nevado: {
    temperature: "4°C",

    text: "Nevado",

    icon: "fa-snowflake",
  },

  niebla: {
    temperature: "11°C",

    text: "Niebla",

    icon: "fa-smog",
  },

  tropical: {
    temperature: "27°C",

    text: "Tropical",

    icon: "fa-sun",
  },
};

/* =========================================
   FUNCIÓN PARA CAMBIAR EL CLIMA
========================================= */

function setWeather(weather) {
  /* Guardamos el nuevo clima */

  weatherType = weather;

  /* Quitamos las clases anteriores */

  body.classList.remove(
    "weather-soleado",
    "weather-nublado",
    "weather-lluvioso",
    "weather-nevado",
    "weather-niebla",
    "weather-tropical",
  );

  /* Agregamos la nueva clase */

  body.classList.add(`weather-${weather}`);

  /* Obtenemos información */

  const data = weatherData[weather];

  /* Actualizamos temperatura */

  temperature.textContent = data.temperature;

  /* Actualizamos texto */

  weatherText.textContent = data.text;

  /* Cambiamos icono */

  weatherIcon.className = `fa-solid ${data.icon} weather-icon`;

  /* Cambiamos el fondo visual */

  changeWeatherBackground(weather);
}

/* =========================================
   CAMBIAR FONDO SEGÚN CLIMA
========================================= */

function changeWeatherBackground(weather) {
  const hero = document.querySelector(".hero");

  const contact = document.querySelector(".contact");

  const backgrounds = {
    soleado:
      "linear-gradient(rgba(45,90,120,.35), rgba(38,52,66,.75)), url('../img/clima-soleado.jpg')",

    nublado:
      "linear-gradient(rgba(24,35,47,.62), rgba(38,52,66,.88)), url('../img/clima-nublado.jpg')",

    lluvioso:
      "linear-gradient(rgba(15,30,45,.70), rgba(18,34,48,.92)), url('../img/clima-lluvioso.jpg')",

    nevado:
      "linear-gradient(rgba(50,80,105,.40), rgba(30,50,70,.82)), url('../img/clima-nevado.jpg')",

    niebla:
      "linear-gradient(rgba(80,90,100,.55), rgba(50,60,70,.85)), url('../img/clima-niebla.jpg')",

    tropical:
      "linear-gradient(rgba(25,90,80,.35), rgba(15,60,55,.80)), url('../img/clima-tropical.jpg')",
  };

  hero.style.backgroundImage = backgrounds[weather];

  contact.style.backgroundImage = backgrounds[weather];
}

/* =========================================
   BOTÓN DE CLIMA
========================================= */

weatherButton.addEventListener("click", () => {
  const climates = [
    "soleado",
    "nublado",
    "lluvioso",
    "nevado",
    "niebla",
    "tropical",
  ];

  const currentIndex = climates.indexOf(weatherType);

  const nextIndex = (currentIndex + 1) % climates.length;

  setWeather(climates[nextIndex]);
});

/* =========================================
   FORMULARIO
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(`¡Gracias, ${name}! Tu mensaje ha sido preparado correctamente.`);

  contactForm.reset();
});

/* =========================================
   INICIAR PORTAFOLIO
========================================= */

setWeather("nublado");
