import { useQuery } from "react-query"
import { getPokemonDetails } from "../services"
import { PokemonDetails } from "../types/pokemon-details"

export function usePokemonDetails(pokemonName: string) {
   const { data: response, ...restQuery } = useQuery<PokemonDetails>(
      ['pokemonDetails', pokemonName],
      () => getPokemonDetails(pokemonName)
   )

   return { data: response }
}
