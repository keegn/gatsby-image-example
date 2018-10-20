import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

// Global styles injection - see layout render for implementation info
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

}

a {
    color: #5334F5;
    font-weight: 600;
}

.active {
    font-weight: 700;
    color: rgba(22, 23, 26, 1);
}
`
// Global styled components

export const Section = styled.div`
  display: grid;
  align-items: center;
  padding: 2rem 0 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: center;
  padding: 2rem 4rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

