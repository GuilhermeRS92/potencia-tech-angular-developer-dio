const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 251
const limit = 9
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <a onclick='getPokemonByName("${pokemon.name}")'>
                <li class="pokemon-box ${pokemon.type}">
                    <h3 class="pokemon-number">#${pokemon.id}</h3>
                    <h2 class="pokemon-name">${pokemon.name}</h2>
                    <div class="pokemon-informations">
                        <ol class="pokemon-abilities-list">
                            ${pokemon.types.map((type) => `<li class="pokemon-ability ${type}">${type}</li>`).join("")}
                        </ol>
                        <div class="pokemon-image">
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </div>
                    <img src="src/images/icon-pokeball-white.svg" class="background-image"></img>
                </li>
            </a>
            `).join('')
        const pokemonList = document.getElementById('pokemon-list-container')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else (
        loadPokemonItens(offset, limit)
    )
})