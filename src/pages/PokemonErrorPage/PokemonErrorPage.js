import { Text, Image } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header/Header'
import EquipeRocket from '../../assets/Equipe-Rocket.png'
import { ContainerPage } from './PokemonErrorPage.Style'


const PokemonErrorPage = () => {
  return (
    <>
    <Header/>
    <ContainerPage>
      <Text textAlign={'center'}>PREPARE-SE PARA ENCRENCA...</Text>
      <Image display={'flex'} align={'center'} justifyContent={'center'} src={EquipeRocket} alt='Equipe Rocket' />
    </ContainerPage>
    </>
  )
}

export default PokemonErrorPage