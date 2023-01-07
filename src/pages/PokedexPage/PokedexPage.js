import { Heading } from '@chakra-ui/react'
import React, { createContext, useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'
import { PokedexContainer, ContainerCards } from './PokedexPage.style'

const PokedexPage = () => {
  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context

  return (
    <>
      <Header/>
      <PokedexContainer>
        <Heading p={16} ml={10} fontSize={"6xl"} fontFamily={'Poppins'} color={'white'} fontWeight={'bold'}>
          Meus Pokémons
        </Heading>
        <ContainerCards>
        {
        pokedex
        .map((pokemon) => (
          <PokemonCard 
          key={pokemon}
          urlPokemon={`${BASE_URL}/pokemon/${pokemon}`}
          removeFromPokedex={removeFromPokedex}
          />
        )
        )}
        </ContainerCards>
      </PokedexContainer>
    </>
  )
}

export default PokedexPage