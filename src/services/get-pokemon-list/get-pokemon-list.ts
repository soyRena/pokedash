import axios from "axios"
import { POKEMON_API } from "../../constants"
import { PokemonList } from "../../types"
import { urlTemplate } from "../../utils"

export const getPokemonList = async (): Promise<PokemonList> => {
   const endpoint = urlTemplate(POKEMON_API, { endpoint: 'pokemon' });

   const response = await axios.get<PokemonList>(endpoint)

   return response.data 
}