import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonErrorPage from '../pages/PokemonErrorPage/PokemonErrorPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details" element={<PokemonDetailPage />} />
        <Route path="*" element={<PokemonErrorPage />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default Router