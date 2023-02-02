import axios from "axios"
import { PokemonDetails } from "../../types"

export const getPokemonDetails = async (pokemonName?: string): Promise<PokemonDetails> => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      const response = await axios.get<PokemonDetails>(endpoint)
      return response.data
}
