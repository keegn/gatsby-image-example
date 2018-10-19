import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'


import Layout from '../components/layout'

// Styled Component example - here we just pass in our gatsby Img component
const Image = styled(Img)`
  border-radius: 24px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 50px;
`

const IndexPage = (props) => (
  <Layout>
    <Grid>
    <Image fluid={props.data.imageMountain.childImageSharp.fluid} />
    <Img fluid={props.data.imageApp.childImageSharp.fluid} />  
    </Grid>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageMountain: file(relativePath: { eq: "lake.jpeg" }) {
     ...fluidImage
    }
    imageApp: file(relativePath: { eq: "waves.jpg" }) {
      ...fluidImage
    }
  }
`

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
     fluid(maxWidth: 1000, quality: 100) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

/* 
Some notes: 
Check out documentation 
childImageSharp {
  fluid(maxWidth: 1000, quality: 100, duotone: { shadow: "#222222", highlight: "#454848" }) {
    ...GatsbyImageSharpFluid_noBase64
  }
   
Great tutorial on Gatsby Image V2
https://codebushi.com/using-gatsby-image/ 

we implemented a DRY pattern above with the helper graphql query of fluidImg, without it our pageQuery would be very repititive if we have a lot of images, see the example below to get an idea of why we did the above.

query {
  imageOne: file(relativePath: { eq: "one.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "two.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(relativePath: { eq: "three.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

we can also change the background load color 
<Img fluid={props.data.imageTest.childImageSharp.fluid} backgroundColor="purple" />

*/


