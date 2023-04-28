import axios from 'axios'
import { PokemonList } from '../../types'

export const getPokemonList = async (): Promise<PokemonList> => {
   const response = await axios.get<PokemonList>(
      'https://pokeapi.co/api/v2/pokemon/'
   )

   return response.data
}
