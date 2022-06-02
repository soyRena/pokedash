import { useQuery } from "react-query"
import { getPokemonList } from "../services"
import { PokemonList } from "../types"

export const usePokemonList = () => {
  const { data: response, ...restQuery } = useQuery<PokemonList>(
   ['pokemonList'],
   () => getPokemonList(),
  )

  return {
     ...restQuery,
     data: response
  }
}