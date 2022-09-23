let currentIndex = 1;

async function fetchPokemon(index) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);

  if (response.status == 200) {
    const data = await response.json();
    return data;
  }
}

const pokemonName = document.getElementById("pokemon-name");
const pokemonImage = document.getElementById("pokemon-image");

async function render(index) {
  const data = await fetchPokemon(index);

  // pokemonImage.style.display = "block";
  pokemonName.innerHTML = `${data.id} - ${data.name}`;
  pokemonImage.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
  currentIndex = data.id;
}

function next() {
  currentIndex += 1;
  render(currentIndex);
}

function prev() {
  currentIndex -= 1;
  render(currentIndex);
}

render(currentIndex);
