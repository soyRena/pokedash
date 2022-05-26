import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getPokemonDetails, getPokemonList } from '../services'
import { Pokemon, PokemonDetails } from '../types'


const Pokedex: React.FC = () => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([])
   const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined)
   const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetails | undefined>(undefined)

   useEffect(() => {
    getPokemonList().then((response) => setPokemons(response.results))
   }, [])

   useEffect(() => {
      getPokemonDetails(selectedPokemon?.name).then((response) => setSelectedPokemonDetails(response))
   })

   return (
      <div>
         Pokemons:
         {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

         <h2>Pokemon selecionado: {selectedPokemon?.name || 'Nenhum pokemon selecionado'}</h2>
         {JSON.stringify(selectedPokemonDetails, undefined, 2)}
      </div>
   )
}

export default Pokedex
