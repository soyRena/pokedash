import axios from "axios"
import { PokemonList } from "../../types"

export const getPokemonList = async (): Promise<PokemonList> => {
   const endpoint = `https://pokeapi.co/api/v2/pokemon/`

   const response = await axios.get<PokemonList>(endpoint)

   return response.data
}
