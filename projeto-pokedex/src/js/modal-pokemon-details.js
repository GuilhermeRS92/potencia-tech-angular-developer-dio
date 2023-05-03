let mainSection = document.getElementById('main-section')

function getPokemonByName(pokemon){
    pokeApi.getPokemonByName(pokemon).then((pokemon = {}) => {
        const newHtml = `
        <section id="modal-detail-pokemon" class="modal-detail-pokemon">

            <div class="pokemon-box ${pokemon.type}">
                <div class="top-menu">
                    <a onclick='closeModal()'>
                        <img src="src/images/icon-close-red.svg" class="close-button" alt="Close button" title="Close"></img>
                    </a>
                </div>
                <div class="top-informations">
                    <h2 class="pokemon-name">${pokemon.name}</h2>
                    <h3 class="pokemon-number">#${pokemon.id}</h3>
                    <ol class="pokemon-abilities-list">
                        ${pokemon.types.map((type) => `<li class="pokemon-ability ${type}">${type}</li>`).join("")}
                    </ol>
                </div>
                <div class="pokemon-image">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="pokemon-details">
                    <h3 class="title">About</h3>
                    <div class="pokemon-informations">
                        <ul class="pokemon-informations-list">
                            <li class="list-item">
                                <p class="information">Height</p>
                                <p class="value">${pokemon.height}</p>
                            </li>
                            <li class="list-item">
                                <p class="information">Weight</p>
                                <p class="value">${pokemon.weight}</p>
                            </li>
                            <li class="list-item">
                                <p class="information">Abilities</p>
                                <p class="value">${pokemon.abilities.join(", ")}</p>
                            </li>
                        </ul>
                        <h4 class="subtitle">Status</h4>
                        <ul class="pokemon-informations-list">
                            ${pokemon.stats.map((stats) => `
                            <li class="list-item">
                                <p class="information">${stats}</p>
                                <p class="value">Available</p>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
                <div class="background-box">
                    <img src="src/images/icon-pokeball-white.svg" class="background-image"></img>
                </div>
            </div>
        </section>
    `
    mainSection.outerHTML += newHtml

    })
}

function closeModal(){
    const modalDetailPokemon = document.getElementById('modal-detail-pokemon')
    modalDetailPokemon.remove()
    mainSection = document.getElementById('main-section')
}