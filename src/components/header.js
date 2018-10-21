import React from 'react'
import { Link } from 'gatsby'
import { GlobalStyle } from './global-styles'
import styled from 'styled-components'

// for use on scroll box-shadow: 0px 1px 3px rgba(72, 76, 87, 0.1);
const HeaderContainer = styled.div`
  background: white;
  border-bottom: 1px solid #eee;
  display: grid;
  height: 8rem;
  @media (max-width: 600px) {
    height: auto;
  }
`
const HeaderBar = styled.div`
  text-align: center;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const HeaderLogoText = styled.h1`
  justify-self: start;
  padding-left: 4rem;
  display: grid;
  @media (max-width: 600px) {
    justify-self: center;
    padding: 2rem 0 1rem;
  }
`
const LinkGroup = styled.h2`
  justify-self: end;
  align-items: center;
  padding-right: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 600px) {
    justify-self: center;
    padding: 1rem 0 2rem;
  }
`
const PageLink = styled(Link)`
  font-weight: 300;
  text-decoration: none;
  color: #4b4b4b;
  margin: 0 0 0 2rem;
  font-size: 2rem;
  @media (max-width: 600px) {
    margin: 0 2rem;
  }
`

const HeaderLogoLink = styled(Link)`
  color: #1b1b1b;
  text-decoration: none;
  font-size: 2.4rem;
  align-self: center;
`

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <GlobalStyle />
    <HeaderContainer>
      <HeaderBar>
        <HeaderLogoText>
          <HeaderLogoLink to="/">{siteTitle}</HeaderLogoLink>
        </HeaderLogoText>
        <LinkGroup>
          <PageLink to="/" exact activeClassName="active">
            Blur
          </PageLink>
          <PageLink to="/traced" exact activeClassName="active">
            Traced
          </PageLink>
          <PageLink to="/color" exact>Color</PageLink>
        </LinkGroup>
      </HeaderBar>
    </HeaderContainer>
  </React.Fragment>
)

export default Header
