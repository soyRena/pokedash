import axios from 'axios'
import { PokemonDetails } from '../../types'

export const getPokemonDetails = async (
   pokemonName?: string
): Promise<PokemonDetails> => {
   const response = await axios.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
   )
   return response.data
}
