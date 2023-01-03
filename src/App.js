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
      const response = await axios.get(`${BASE_URL}/pokemon/?limit=20&offset=150`, 
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
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd
    )
    if(!pokemonSearchOnPokedex) {
        const newPokedex = [...pokedex, pokemonToAdd]
        setPokedex(newPokedex)
    }
    console.log(pokedex)
    alert(`Gotcha! ${pokemonToAdd} foi adicionado à sua Pokedex` )
    const pokedexStringify = JSON.stringify(pokedex)
    window.localStorage.setItem('pokemons', pokedexStringify)
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex !== pokemonToRemove
    )
    console.log(newPokedex)    
    setPokedex(newPokedex)
    alert(`Oh, no! ${pokemonToRemove} foi removido da sua Pokedex` )
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
    BASE_URL,
  }

  // console.log(context)

  return (
    <GlobalContext.Provider value={context} >
      <ChakraProvider resetCSS>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
