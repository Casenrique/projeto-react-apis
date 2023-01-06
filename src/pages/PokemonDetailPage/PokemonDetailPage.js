import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import PokeDetailsCard from '../../components/PokeDetailsCard/PokeDetailsCard'
import { ContainerCard } from '../PokemonDetailPage/PokemonDetailPage.Style'
import { useParams } from 'react-router-dom';

const PokemonDetailPage = () => {
const context = useContext(GlobalContext)
const { pokelist, pokedex, setPokedex, addToPokedex, removeFromPokedex } = context
const params = useParams()

const addIfisNotInPokedex = (pokemonToAdd) => {

  const newPokedex = [...pokedex]
  const pokemonSearch = newPokedex.find(
    (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
  )
    if(!pokemonSearch) {
      const newPokedex = [...pokedex, pokemonToAdd]
      setPokedex(newPokedex)
    }
  }

  return (
    <>
          <Header
          addToPokedex={addToPokedex}
          removeFromPokedex={removeFromPokedex}
          />
          <ContainerCard>
            <Heading alignSelf={'flex-start'} p={16} ml={10} fontSize={"6xl"} fontFamily={'Poppins'} color={'white'} fontWeight={'bold'} >Detalhes</Heading>
            
                <PokeDetailsCard />
          </ContainerCard>
    </>
  )
}

export default PokemonDetailPage