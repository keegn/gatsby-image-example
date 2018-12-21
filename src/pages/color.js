import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Section, Grid } from '../components/global'

// Styled Component example - here we just pass in our gatsby Img component
const Image = styled(Img)`
  border-radius: none;
`

// In the return below, the <Image /> component is our gatsby <Img /> component extended via styled-components - see line 9
const ColorPage = props => (
  <Layout>
    <Section>
      <Grid>
        <Image
          fluid={props.data.imageIreland.childImageSharp.fluid}
          backgroundColor="#2F80ED"
        />
        <Image
          fluid={props.data.imageCliffs.childImageSharp.fluid}
          backgroundColor="#2D9CDB"
        />
        <Image
          fluid={props.data.imageFall.childImageSharp.fluid}
          backgroundColor="#56CCF2"
        />
        <Image
          fluid={props.data.imageYosemite.childImageSharp.fluid}
          backgroundColor="#9B51E0"
        />
      </Grid>
    </Section>
  </Layout>
)

export default ColorPage

export const pageQuery = graphql`
  query {
    imageIreland: file(relativePath: { eq: "ireland.jpeg" }) {
      ...fluidImages
    }
    imageFall: file(relativePath: { eq: "fall.jpeg" }) {
      ...fluidImages
    }
    imageCliffs: file(relativePath: { eq: "cliffs.jpeg" }) {
      ...fluidImages
    }
    imageYosemite: file(relativePath: { eq: "yosemite.jpeg" }) {
      ...fluidImages
    }
  }
`
// Blur up
export const fluidImages = graphql`
  fragment fluidImages on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

/* 
Some notes:

Duotone example
childImageSharp {
  fluid(maxWidth: 1000, quality: 100, duotone: { shadow: "#222222", highlight: "#454848" }) {
    ...GatsbyImageSharpFluid_noBase64
  }
   
Great tutorial on Gatsby Image V2
https://codebushi.com/using-gatsby-image/ 

we implemented a DRY pattern above with the helper graphql query of fluidImg, without it our pageQuery would be very repititive if we had a lot of images, see the example below to get an idea of why we did the above.

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

We can also change the background load color 
<Img fluid={props.data.imageTest.childImageSharp.fluid} backgroundColor="purple" />

*/
