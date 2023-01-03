export const goToPokemonListPage = (navigate) => {
    navigate("/");
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
}

export const goToDetailPage = (navigate, pokemonName) => {
    // navigate(`/${pokemonName}`)
    navigate(`/details/${pokemonName}`)
}