import React, { createContext, useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerCards } from './PokedexPage.style'

const PokedexPage = () => {
  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context
  console.log(pokedex)
  return (
    <>
      <Header/>
      <ContainerCards>
      {pokedex.map((pokemon) => (
        <PokemonCard 
        key={pokemon.name}
        urlPokemon={`${BASE_URL}/${pokemon.name}`}
        removeFromPokedex={removeFromPokedex}
        />
      )
      )}
      </ContainerCards>
    </>
  )
}

export default PokedexPage