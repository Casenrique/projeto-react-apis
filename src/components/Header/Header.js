import { Button, Text, Link, UnorderedList } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { HeaderContainer } from "./Header.Style"
import logo from "../../assets/pokemon-logo.svg"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { goToPokemonListPage, goToPokedexPage } from '../../Router/coordinates';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ArrowLeftIcon } from '@chakra-ui/icons'



const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const { pokelist, pokedex, addToPokedex, removeFromPokedex } = context
  const params = useParams()

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Button visibility={'hidden'} variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'} colorScheme={'gray'} leftIcon={<ArrowLeftIcon />} onClick={() => goToPokemonListPage(navigate)}>Todos Pokémons</Button>
            <img src={logo} />
            <Button
              onClick={() => goToPokedexPage(navigate)}
              colorScheme='blue'
              w={'287px'}
              h={'74px'}
              fontSize="2xl"
            >POKÉDEX
            </Button>
          </>
        )
      case "/pokedex":
        return (
          <>
            <Button variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'} colorScheme={'gray'} leftIcon={<ArrowLeftIcon />} onClick={() => goToPokemonListPage(navigate)}>Todos Pokémons</Button>
            <img src={logo} />
            <Button colorScheme='blue'
            w={'287px'}
            h={'74px'}
            fontSize="2xl" 
            visibility={'hidden'} 
            onClick={() => goToPokedexPage(navigate)}
            >
              POKÉDEX
            </Button>
          </>
        )
      case `/details/${params.pokemonName}`:
        return (
          <>
          
            <Button variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'} colorScheme={'gray'} leftIcon={<ArrowLeftIcon />} onClick={() => goToPokemonListPage(navigate)}>Todos Pokémons</Button>
            <img src={logo} />
            {pokedex.includes(params.pokemonName) ?
            <Button 
              colorScheme='red'
              w={'287px'}
              h={'74px'}
              fontSize="2xl" 
              onClick={() => removeFromPokedex(params.pokemonName)}
              >
                Remover da Pokédex
              </Button>
            : <Button 
              colorScheme='blue'
              w={'287px'}
              h={'74px'}
              fontSize="2xl" 
              onClick={() => addToPokedex(params.pokemonName)}
              >
                Capturar!
              </Button>

          }

          </>
        )
      case "*":
        return (
          <>
            <Link onClick={() => goToPokemonListPage(navigate)}>Voltar para o laboratório do Professor Carvalho</Link>
            <img src={logo} />
            <Text>ESSA PÁGINA FOI ROUBADA PELA EQUIPE ROCKET</Text>
          </>
        )
      default:
        return (
          <>
            <Button variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'} colorScheme={'gray'} leftIcon={<ArrowLeftIcon />} onClick={() => goToPokemonListPage(navigate)}>Todos Pokémons</Button>
            <img src={logo} />
            <Button colorScheme='red' onClick={() => removeFromPokedex(pokedex.name)}>Remover da Pokédex</Button>

          </>
        )
      // default:
      //   return (
      //     <>
      //       <Button variant={'ghost'} fontSize={"2xl"} fontWeight={'bold'} colorScheme={'gray'} leftIcon={<ArrowLeftIcon />} onClick={() => goToPokemonListPage(navigate)}>Todos Pokémons</Button>
      //       <img src={logo} />
      //       <Button
      //         onClick={() => goToPokedexPage(navigate)}
      //         colorScheme='blue'
      //       >POKÉDEX</Button>
      //     </>
      //   )
    }


  }

  return (
    <HeaderContainer>
      {renderHeader()}
    </HeaderContainer>
  )
}


export default Header