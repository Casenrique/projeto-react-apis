import { Button, Text, Link } from '@chakra-ui/react';
import React from 'react'
import { HeaderContainer } from "./Header.Style"
import logo from "../../assets/pokemon-logo.svg"
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokemonListPage, goToPokedexPage } from '../../Router/coordinates';

const Header = () => {  
  const navigate = useNavigate()
  const location = useLocation()

  const renderHeader =() => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <Link visibility={'hidden'} onClick={() => goToPokemonListPage(navigate)}>Lista de Pokemons</Link>
            <img src={logo}/>
            <Button 
            onClick={() => goToPokedexPage(navigate)}
            colorScheme='blue'
            >POKEDEX</Button>
          </>     
        )      
      case '/pokedex':
        return (
          <>
            <Link onClick={() => goToPokemonListPage(navigate)}>Lista de Pokemons</Link>
            <img src={logo}/>
            <Button colorScheme='blue' visibility={'hidden'} onClick={() => goToPokedexPage(navigate)}>POKEDEX</Button>
          </> 
        )  
      case '/details':
        return (
          <>
            <Link visibility={'hidden'} onClick={() => goToPokemonListPage(navigate)}>Lista de Pokemons</Link>
            <img src={logo}/>
            <Button colorScheme='blue' visibility={'hidden'} onClick={() => goToPokedexPage(navigate)}>POKEDEX</Button>
          </> 
        )
      default:
        return (
          <>
            <Link onClick={() => goToPokemonListPage(navigate)}>Voltar para o laboratório do Professor Carvalho</Link>
            <img src={logo}/>
            <Text>ESSA PÁGINA FOI ROUBADA PELA EQUIPE ROCKET</Text>
          </>
        )
      }
        
      
    }
    
    return (
    <HeaderContainer>
      {renderHeader()}
    </HeaderContainer>
)
}


export default Header