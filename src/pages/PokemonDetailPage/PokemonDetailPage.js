import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import PokeDetailsCard from '../../components/PokeDetailsCard/PokeDetailsCard'
import { ContainerCard } from '../PokemonDetailPage/PokemonDetailPage.Style'

const PokemonDetailPage = () => {
const context = useContext(GlobalContext)
const { removeFromPokedex } = context

  return (
    <>
          <Header/>
          <ContainerCard>
            <Heading>DETALHES</Heading>
            <PokeDetailsCard />
          </ContainerCard>
    </>
  )
}

export default PokemonDetailPage