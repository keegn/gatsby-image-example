import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

// Styled Component example - here we just pass in our gatsby Img component
const Image = styled(Img)`
  border-radius: none;
`
const SectionHeader = styled.h2`
  font-weight: 300;
  text-align: center;
  padding: 5rem 1rem 0;
  color: #4b4b4b;
  font-size: 2.4rem;
`
const Section = styled.div`
  display: grid;
  align-items: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  padding: 2rem;
  @media (max-width: 400px) {
    grid-gap: 2rem;
    grid-template-columns: 1fr;
  }
`

const IndexPage = props => (
  <Layout>
    <Section>
      <SectionHeader>Blur-up technique</SectionHeader>
      <Grid>
        <Image fluid={props.data.imageMountain.childImageSharp.fluid} />
        <Img fluid={props.data.imageApp.childImageSharp.fluid} />
      </Grid>
      <SectionHeader>Traced placeholder</SectionHeader>
      <Grid>
        <Image fluid={props.data.imageDesert.childImageSharp.fluid} />
        <Img fluid={props.data.imageBoat.childImageSharp.fluid} />
      </Grid>
    </Section>
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
    imageDesert: file(relativePath: { eq: "desert.jpeg" }) {
      ...traceImage
    }
    imageBoat: file(relativePath: { eq: "boats.jpeg" }) {
      ...traceImage
    }
  }
`
// Blur up
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
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
