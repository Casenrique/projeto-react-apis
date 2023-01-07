import { Heading, HStack, Input, InputGroup, InputLeftAddon, Select, Stack, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { PokelistContainer, ContainerCards } from "./PokemonlistPage.Style"

const PokemonListPage = () => {
  const context = useContext(GlobalContext)
  const { 
    pokelist, 
    pokedex, 
    addToPokedex ,
    nameSearch,
    setNameSearch,
    order,
    setOrder,
    selectGeneration,
    setSelectGeneration
  } = context

  const handleNameSearch = (e) => {
    setNameSearch(e.target.value)
  }

  const handleSelect = (e) => {
    setSelectGeneration(e.target.value)
  }

  return (
    <>
      <Header />
      <PokelistContainer>
        <HStack spacing={4} gap={4}>
          <Heading p={16} ml={10} fontSize={"6xl"} fontFamily={'Poppins'} color={'white'} fontWeight={'bold'}>
            Todos Pokémons
          </Heading>
          <VStack gap={4}>
          <InputGroup > 
            <InputLeftAddon children='Pokémon' />
            <Input
            size='md'
            variant='filled'
            type="text"
            placeholder='Busca por nome'
            onChange={handleNameSearch}
            value={nameSearch}
            />
            </InputGroup>            
          </VStack>
          <VStack gap={4}>
            <Select value={order} onChange={(e) => setOrder(e.target.value)} placeholder='Selecione a ordenação' variant='filled' >
              <option value={'asc'}>Ascendente</option>
              <option value={'desc'}>Descendente</option>
            </Select>            
          </VStack>
          <VStack>
          <Select value={selectGeneration} onChange={handleSelect} placeholder='Selecione a geração ' variant='filled' >
              <option value={'gen-1'}>Primeira Geração</option>
              <option value={'gen-2'}>Segunda Geração</option>
              <option value={'gen-3'}>Terceira Geração</option>
              <option value={'gen-4'}>Quarta Geração</option>
              <option value={'gen-5'}>Quinta Geração</option>
              <option value={'gen-6'}>Sexta Geração</option>
              <option value={'gen-7'}>Sétima Geração</option>
              <option value={'gen-8'}>Oitava Geração</option>
              <option value={'gen-9'}>Nona Geração</option>
            </Select>
          </VStack>
        </HStack>
        <ContainerCards>
        {
        pokelist
        .filter((pokemon) => (
          pokemon.name.toLowerCase().includes(nameSearch.toLowerCase())
        ))
        .sort((currentPokemon, nextPokemon) => {
          return currentPokemon.name.localeCompare(nextPokemon.name)
        })
        .sort((currentPokemon, nextPokemon) => {
          if(order === "asc"){
            return 1
          } else {
            return -1
          }
        })
        // .sort((currentPokemon, nextPokemon) => {
        //   if(currentPokemon.name >  nextPokemon.name){
        //     return 1
        //   } else if (currentPokemon.name < nextPokemon.name) {
        //     return -1
        //   } return 0
        // })
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