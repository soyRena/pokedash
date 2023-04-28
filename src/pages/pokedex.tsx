import { useRouter } from 'next/router'
import { PokemonCard } from '../components'
import { usePokemonList } from '../hooks'
import { Pokemon } from '../types'
import { Grid, Skeleton } from '@mui/material'

function Pokedex() {
   const { push } = useRouter()

   const { data, isLoading } = usePokemonList()

   const skeletonMap = new Array(20).fill(null)

   const handleClick = (pokemon: Pokemon) => {
      push({ pathname: `/pokemon/${pokemon.name}` })
   }

   return (
      <>
         {isLoading ? (
            <Grid
               container
               rowSpacing={1}
               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
               {skeletonMap.map((_, index) => (
                  <Grid item xs={2} sm={2} md={2} mt={2} key={index}>
                  <Skeleton
                     variant="rounded"
                     animation="wave"
                     height={375}
                     sx={{ maxWidth: 345 }}
                     key={index}
                  />
                  </Grid>
               ))}
            </Grid>
         ) : (
            <Grid
               container
               rowSpacing={1}
               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
               {data.map((pokemon, index) => (
                  <Grid item xs={2} sm={2} md={2} mt={2} key={index}>
                     <PokemonCard
                        key={pokemon.name}
                        pokemonName={pokemon.name}
                        onClick={() => handleClick(pokemon)}
                     />
                  </Grid>
               ))}
            </Grid>
         )}
      </>
   )
}

export default Pokedex
