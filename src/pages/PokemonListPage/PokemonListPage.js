import { Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { PokelistContainer, ContainerCards } from "./PokemonlistPage.Style"

const PokemonListPage = () => {
  const context = useContext(GlobalContext)
  const { pokelist, pokedex, addToPokedex } = context

  
  
  return (
    <>
      <Header />
      <PokelistContainer>
        <Heading p={16} ml={10} fontSize={"6xl"} fontFamily={'Poppins'} color={'white'} fontWeight={'bold'}>
          Todos Pokémons
        </Heading>
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
      </PokelistContainer>
    </>
  )
}

export default PokemonListPage