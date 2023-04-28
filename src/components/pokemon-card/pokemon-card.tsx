import {
   Avatar,
   Box,
   Card,
   CardActionArea,
   CardContent,
   IconButton,
   Skeleton,
   Stack,
   Typography
} from '@mui/material'
import { usePokemonDetails } from '../../hooks'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { typeColors } from '../../helpers/type-colors'
import { typeIcons } from '../../helpers/type-icons'

interface PokemonCardProps {
   pokemonName: string
   onClick(): void
}

export function PokemonCard(props: PokemonCardProps) {
   const { pokemonName, onClick } = props

   const { data: pokemonDetails, isLoading } = usePokemonDetails(pokemonName)

   return (
      <Card
         sx={{
            maxWidth: 345,
            backgroundColor: isLoading ? 'white' : typeColors(pokemonDetails.types[0].type.name)
         }}
      >
         {isLoading ? (
            <Skeleton variant="rounded" animation="wave" height={400} />
         ) : (
            <CardActionArea onClick={onClick}>
               <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  p={2}
               >
                  <Typography
                     gutterBottom
                     variant="h6"
                     component="div"
                     color="white"
                     mb={2}
                  >
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
                        <Typography variant="caption" color="white">
                           &#35;{pokemonDetails?.id}
                        </Typography>
                     </Stack>
                     <Stack direction="row" justifyContent="center" spacing={3}>
                        {pokemonDetails?.types.map((type, index) => (
                           <Box
                              display="flex"
                              justifyContent="center"
                              flexDirection="column"
                              alignItems="center"
                              width={40}
                              height={40}
                              bgcolor={typeColors(type.type.name)}
                              border={2}
                              borderRadius={50}
                              borderColor="white"
                           >
                              <img
                                 src={typeIcons(type.type.name)}
                                 alt={`Type ${index + 1}`}
                                 style={{
                                    width: 20,
                                    height: 20
                                 }}
                              />
                           </Box>
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
         )}
      </Card>
   )
}
