import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Literata|Roboto&display=swap');
  body {
    background: ${props => (props.Bg ? '#f1f1f1' : 'black')};
    font-family: 'Roboto', sans-serif;
    margin:0;
    position:relative;
  }

  h1, h2, h3, h4 {
    font-family: 'Literata', serif;
  }
`