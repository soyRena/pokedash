import { usePokemonDetails } from "../../hooks"
import { FlexContainer } from "../shared-components"
import { PokemonCardContainer, PokemonImage, PokemonInfo } from "./pokemon-card.style"

interface PokemonCardProps {
   pokemonName: string
   onClick(): void
}

export function PokemonCard(props: PokemonCardProps) {
   const { pokemonName } = props

   const { data: pokemonDetails } = usePokemonDetails(pokemonName)

   return (
      <PokemonCardContainer>
         <FlexContainer>
            <PokemonInfo>
               {pokemonName}
               <FlexContainer>
               HP: {pokemonDetails.stats[0].base_stat}
               AT: {pokemonDetails.stats[1].base_stat}
               </FlexContainer>
               TYPES
               <FlexContainer>
                  {pokemonDetails.types.map((type) => type.type.name)}
               </FlexContainer>
            </PokemonInfo>
            <PokemonImage />
         </FlexContainer>
      </PokemonCardContainer >
   )
}
