import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { POKEMON_PATH } from '../constants'
import { getPokemonList } from '../services'
import { Pokemon } from '../types'
import { urlTemplate } from '../utils'


const Pokedex: React.FC = () => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([])
   const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined)
   const { push } = useRouter()

   useEffect(() => {
      getPokemonList().then((response) => setPokemons(response.results))
   }, [])

   const handleClick = (pokemon: Pokemon) => {
      push(
         { pathname: urlTemplate(POKEMON_PATH, { name: pokemon.name }) }
      )
   }

   return (
      <div>
         Pokemons:
         {pokemons.map((pokemon) => <button onClick={() => handleClick(pokemon)}>{pokemon.name}</button>)}
      </div>
   )
}

export default Pokedex
