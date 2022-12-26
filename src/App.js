import React, { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { BASE_URL } from "./constants/url";
import Router from "./Router/Router";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";



function App() {

  const [ pokelist, setPokelist ] = useState([])
  const [ pokedex, setPokedex ] = useState([])

  useEffect(() => {
    fetchPokemonList()
  }, [])

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/?limit=20`, 
      // const response = await axios.get(`${BASE_URL}/?limit=150&offset=150`, 
      )
      console.log(response.data)
      setPokelist(response.data.results)
    } catch(error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response)
    }
  } 
  const addToPokedex = (pokemonToAdd) => {
    const pokemonSearchOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    )
    if(!pokemonSearchOnPokedex) {
        const newPokedex = [...pokedex, pokemonToAdd]
        setPokedex(newPokedex)
    }
    console.log(pokedex)
    alert(`Gotcha! ${pokemonToAdd.name} foi adicionado à sua Pokedex` )
    const pokedexStringify = JSON.stringify(pokedex)
    window.localStorage.setItem('pokemons', pokedexStringify)
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )
    // console.log(newPokedex)    
    setPokedex(newPokedex)
    alert(`Oh, no! ${pokemonToRemove.name} foi removido da sua Pokedex` )
  }

  const savePokedex = () => {
    if(window.localStorage.getItem('pokemons')) {
    const getPokedex = window.localStorage.getItem('pokemons')
    const arrayPokedex = JSON.parse(getPokedex)
    setPokedex(arrayPokedex)
    }
  }

  useEffect(()=> {
    savePokedex()
  },[])


    
  const context = {
    pokelist: pokelist,
    setPokelist: setPokelist,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex,
  }

  console.log(context)

  return (
    <GlobalContext.Provider value={context} >
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
