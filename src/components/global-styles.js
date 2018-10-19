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
    font-size: 300px;
}

h2 {
    font-size: 40px;
}

a {
    color: #5334F5;
    font-weight: 600;
}

`