import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   background-image: linear-gradient(45deg, ${theme.uiColors.white}, ${theme.uiColors.lightGrey});
   color: ${theme.uiColors.text};
   font: 400 1rem Sora, sans-serif;
}
`
