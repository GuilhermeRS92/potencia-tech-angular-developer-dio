function convertPokemontToLi(pokemon) {
    return `
    <li class="pokemon-box">
        <h3 class="pokemon-number">#002</h3>
        <h2 class="pokemon-name">${pokemon.name}</h2>
        <div class="pokemon-informations">
            <div class="pokemon-abilities-list">
                <p class="pokemon-ability">Grass</p>
                <p class="pokemon-ability">Poison</p>
            </div>
            <div class="pokemon-image">
                <img src="src/images/bulbasaur.webp" alt="${pokemon.name}">
            </div>
        </div>
        <img src="src/images/icon-pokeball-white.svg" class="background-image"></img>
    </li>
    `
}

const pokemonList = document.getElementById('pokemon-list-container')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemontToLi).join('')
})