import styled from 'styled-components'

interface ContainerProps {
   padding?: string,
   margin?: string,
   width?: string,
   height?: string,
   flex?: boolean
}

interface FlexContainerProps extends ContainerProps {
   justifyContent?: string,
   flexDirection?: string
}

export const Container = styled.div<ContainerProps>`
 display: ${props => props.flex ? 'flex' : 'inherit'};
 width: ${props => props.width ? props.width : '100%'};
 height: ${props => props.height ? props.height : ''};
 margin: ${props => props.margin ? props.margin : '0'};
 padding: ${props => props.padding ? props.padding : '0'};
`

export const FlexContainer = styled.div<FlexContainerProps>`
 display: flex;
 justify-content: ${props => props.justifyContent ? props.justifyContent : ''};
 flex-direction: ${props => props.flexDirection ? props.flexDirection : ''};
`
