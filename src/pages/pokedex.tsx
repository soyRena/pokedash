import React, { useState } from 'react'

const pokemonArray: string[] = ['Bulbassauro', 'Suicune', 'Larvitar', 'Greninja']

const Pokedex: React.FC = () => {
   const [pokemons, setPokemons] = useState([])
   const [selectedPokemon, setSelectedPokemon] = useState<String | undefined>(undefined)

   return (
      <div>
         {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button>)}

         <h2>Pokemon selecionado: {selectedPokemon}</h2>
      </div>
   )
}

export default Pokedex
