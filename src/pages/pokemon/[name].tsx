import React from 'react'
import { getPokemonDetails, getPokemonList } from '../../services'

export default function Pokemon({pokemon}) {
   return (
      <div>
         <h2>{pokemon.name}</h2>
      </div>
   )
}

export async function getStaticProps({ params }) {
   const pokemon = await getPokemonDetails(params.name)
   return { props: { pokemon } }
}

export async function getStaticPaths() {
   const pokemons = await getPokemonList()
   return {
      paths: pokemons.results.map((pokemon) => ({
        params: {
         name: pokemon.name,
        },
      })),
      fallback: false,
    }
}
