import styled from "styled-components"
import theme from "../../config/theme"

export const PokemonCardContainer = styled.div`
   width: 350px;
   height: 150px;
   display: flex;
   border-radius: 1rem;
`

export const PokemonInfo = styled.div`
   width: 120px;
   height: 100%;
`

export const PokemonImage = styled.div`
   width: 230px;
   height: 100%;
   background-image: linear-gradient(90deg, ${theme.typeColors.firePrimary}, ${theme.typeColors.fireSecondary});
   border-radius: 0 1rem 1rem 0;
`
