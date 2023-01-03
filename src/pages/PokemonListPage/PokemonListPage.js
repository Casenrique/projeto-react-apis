import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerCards } from "./PokelistPage.Style"

const PokemonListPage = () => {
  const context = useContext(GlobalContext)
  const { pokelist, pokedex, addToPokedex } = context

  
  
  return (
    <>
      <Header />
      <ContainerCards>
      {
      pokelist
      .filter((pokemon) => (
        !pokedex.find(
          (pokemonInPokedex) => pokemon.name === pokemonInPokedex
          
      )))
      .map((pokemon) => (
        <PokemonCard
          key={pokemon.url}
          urlPokemon={pokemon.url}
          addToPokedex={addToPokedex}
        />
      ))}
      </ContainerCards>
    </>
  )
}

export default PokemonListPage