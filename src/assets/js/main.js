const pokedex = document.getElementById("pokedex");

function openClose() {
  if (pokedex.classList.contains("open")) {
    closeCover();
    return;
  }

  openCover();
}

function openCover() {
  pokedex.classList.add("open");

  setTimeout(() => {
    powerOn();
  }, 500);
}

function closeCover() {
  if (isPower()) {
    powerOff();
    setTimeout(() => {
      pokedex.classList.remove("open");
    }, 500);
    return;
  }

  pokedex.classList.remove("open");
}

function isPower() {
  return pokedex.classList.contains("on");
}

function power() {
  if (isPower()) {
    powerOff();
    return;
  }

  powerOn();
}

function powerOn() {
  pokedex.classList.add("on");
  document.getElementById("pokemon-wrapper-image").classList.remove("hidden");
}

function powerOff() {
  pokedex.classList.remove("on");
  document.querySelectorAll(".screen div").forEach((item) => {
    item.classList.add("hidden");
  });
}

function toggleAbout() {
  document.querySelectorAll(".screen div").forEach((item) => {
    item.classList.add("hidden");
  });
  document.getElementById("about").classList.toggle("hidden");
}
