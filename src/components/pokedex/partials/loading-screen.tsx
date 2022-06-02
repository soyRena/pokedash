import React from "react"
import { LoadingContainer } from "./style"

export const PokedexLoadingScreen = () => {  
   return (
      <LoadingContainer>
         <img src="../../assets/loading.gif" alt="Loading..." />
      </LoadingContainer>
   )
}