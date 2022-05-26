import axios from "axios";
import { POKEMON_DETAILS_URL } from "../../constants";
import { PokemonDetails } from "../../types";
import { urlTemplate } from "../../utils";

export const getPokemonDetails = async (pokemonName?: string): Promise<PokemonDetails> => {
      const endpoint = urlTemplate(POKEMON_DETAILS_URL, { name: pokemonName });
      const response = await axios.get<PokemonDetails>(endpoint);
      return response.data;
}