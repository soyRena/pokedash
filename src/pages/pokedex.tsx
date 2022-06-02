import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PokedexLoadingScreen } from '../components'
import { POKEMON_PATH } from '../constants'
import { usePokemonList } from '../hooks'
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

   const { data, isLoading } = usePokemonList()

   const handleClick = (pokemon: Pokemon) => {
      push(
         { pathname: urlTemplate(POKEMON_PATH, { name: pokemon.name }) }
      )
   }

   return (
      <>
         {isLoading ? (<PokedexLoadingScreen />) : (
            <div>
               Pokemons:
               {pokemons.map((pokemon) => <button onClick={() => handleClick(pokemon)}>{pokemon.name}</button>)}
            </div>
         )}
      </>
   )
}

export default Pokedex
