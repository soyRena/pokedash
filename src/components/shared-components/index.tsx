import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
   padding?: string,
   margin?: string,
   width?: string,
   height?: string,
   flex?: boolean
}

const StyledContainer = styled.div<ContainerProps>`
 display: ${props => props.flex ? 'flex' : 'inherit'};
 width: ${props => props.width ? props.width : '100%' };
 height: ${props => props.height ? props.height : '' };
 margin: ${props => props.margin ? props.margin : '0' };
 padding: ${props => props.padding ? props.padding : '0' };
`

export const Container = (children: JSX.Element) => {
   return (
      <StyledContainer>
         {children}
      </StyledContainer>
   )
}