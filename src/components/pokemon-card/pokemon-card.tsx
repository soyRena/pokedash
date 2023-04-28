import {
   Avatar,
   Box,
   Card,
   CardActionArea,
   CardContent,
   Chip,
   IconButton,
   Stack,
   Typography
} from '@mui/material'
import { usePokemonDetails } from '../../hooks'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { typeColors } from '../../helpers/type-colors'

interface PokemonCardProps {
   pokemonName: string
   onClick(): void
}

export function PokemonCard(props: PokemonCardProps) {
   const { pokemonName, onClick } = props

   const { data: pokemonDetails } = usePokemonDetails(pokemonName)

   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardActionArea onClick={onClick}>
            <Box
               display="flex"
               justifyContent="center"
               flexDirection="column"
               alignItems="center"
               p={2}
            >
               <Typography gutterBottom variant="h6" component="div" mb={2}>
                  {pokemonName.toUpperCase()}
               </Typography>
               <Avatar
                  alt={pokemonName}
                  src={
                     pokemonDetails?.sprites.other['official-artwork']
                        .front_default
                  }
                  sx={{
                     width: 150,
                     height: 150,
                     backgroundColor: typeColors(
                        pokemonDetails.types[0].type.name
                     )
                  }}
               />
            </Box>
            <CardContent>
               <Stack justifyContent="space-between" spacing={2}>
                  <Stack justifyContent="center" alignItems="center">
                     <Typography variant="caption" color="text.secondary">
                        &#35;{pokemonDetails?.id}
                     </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="center" spacing={3}>
                     {pokemonDetails?.types.map((type) => (
                        <Chip
                           label={type.type.name}
                           sx={{
                              backgroundColor: typeColors(type.type.name),
                              fontWeight: 'bold',
                              color: 'white'
                           }}
                        />
                     ))}
                  </Stack>
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     <IconButton children={<AddCircleOutlineIcon />} />
                  </Box>
               </Stack>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}
