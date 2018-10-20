import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;

    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
     -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    font-size: 1.6rem;
    margin: 0;
}

h1, h2, h3 {
    margin: 0;
    line-height: 0;
}

a {
    color: #5334F5;
    font-weight: 600;
}
`
