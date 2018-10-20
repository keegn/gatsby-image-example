import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: white;
  box-shadow: 0px 1px 3px rgba(72, 76, 87, 0.1);
  display: grid;
  height: 8rem;
`
const HeaderBar = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  text-align: center;
  display: grid;
  align-items: center;
`
const HeaderText = styled.h1`
  margin: 0 auto;
`
const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2.8rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderBar>
      <HeaderText>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderText>
    </HeaderBar>
  </HeaderContainer>
)

export default Header
