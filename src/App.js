import React, { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { BASE_URL } from "./constants/url";
import Router from "./router/Router";
import axios from "axios";
import { generations } from "./utils/SearchGen"
import { GlobalContext } from "./contexts/GlobalContext";


function App() {

  const [ pokelist, setPokelist ] = useState([])
  const [ pokedex, setPokedex ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ nameSearch, setNameSearch ] = useState("")
  const [ order, setOrder ] = useState("")
  const [ selectGeneration, setSelectGeneration ] = useState("gen-1")


  useEffect(() => {
    fetchPokemonList()
  }, [selectGeneration])

  const fetchPokemonList = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`${BASE_URL}/pokemon/${generations(selectGeneration)}`, 
      // const response = await axios.get(`${BASE_URL}/pokemon/?limit=150&offset=150`, 
      )
      // console.log(response.data)
      setPokelist(response.data.results)
      setIsLoading(false)
    } catch(error) {
      setIsLoading(false)
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response)
    }
  } 
  const addToPokedex = (pokemonToAdd) => {
    const newPokedex = [...pokedex]
    const pokemonSearchOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd
    )
    if(!pokemonSearchOnPokedex) {
        newPokedex.push(pokemonToAdd)
        setPokedex(newPokedex)
    }
    setIsOpen(true)
    const pokedexStringify = JSON.stringify(newPokedex)
    window.localStorage.setItem('pokemons', pokedexStringify)
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex !== pokemonToRemove
    )
    setPokedex(newPokedex)
    setIsOpen(true)
    const pokedexStringify = JSON.stringify(newPokedex)
    window.localStorage.setItem('pokemons', pokedexStringify)
  }

  const removeAllFromPokedex = () => {
    const newPokedex = []
    setPokedex(newPokedex)
    window.localStorage.removeItem('pokemons')
    setIsOpen(true)
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
    removeAllFromPokedex,
    BASE_URL,
    isOpen,
    setIsOpen,
    nameSearch,
    setNameSearch,
    order,
    setOrder,
    selectGeneration,
    setSelectGeneration
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
