import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Section, Grid } from '../components/global-styles'

// Styled Component example - here we just pass in our gatsby Img component
const Image = styled(Img)`
  border-radius: none;
`

// In the render below, the <Image /> component is our gatsby <Img /> component extended via styled-components - see line 9
const TracedPage = props => (
  <Layout>
    <Section>
      <Grid>
        <Image fluid={props.data.imageRainbow.childImageSharp.fluid} />
        <Img fluid={props.data.imageField.childImageSharp.fluid} />
        <Image fluid={props.data.imageTan.childImageSharp.fluid} />
        <Img fluid={props.data.imageWater.childImageSharp.fluid} />
      </Grid>
    </Section>
  </Layout>
)

export default TracedPage

export const pageQuery = graphql`
  query {
    imageRainbow: file(relativePath: { eq: "rainbow.jpeg" }) {
      ...traceImage
    }
    imageField: file(relativePath: { eq: "field.jpeg" }) {
      ...traceImage
    }
    imageTan: file(relativePath: { eq: "tan.jpeg" }) {
      ...traceImage
    }
    imageWater: file(relativePath: { eq: "water.jpeg" }) {
      ...traceImage
    }
  }
`
// SVG trace
export const traceImage = graphql`
  fragment traceImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
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
