import {
   Avatar,
   Box,
   Card,
   CardActionArea,
   CardContent,
   CardMedia,
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
            <CardMedia
               component="img"
               image={
                  pokemonDetails?.sprites.other['official-artwork']
                     .front_default
               }
            />
            <CardContent>
               <Stack justifyContent="space-between" spacing={2}>
                  <Stack justifyContent="center" alignItems="center">
                     <Typography gutterBottom variant="h5" component="div">
                        {pokemonName.toUpperCase()}
                     </Typography>
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
