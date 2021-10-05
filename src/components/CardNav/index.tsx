import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'spacegrime-uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
  margin-top: 10px
`

const StyledUl = styled.div`
  list-style-type: none;
  text-align: center;
  display: flex;
`
const StyledLi = styled.div`
  display: inline-block;
  padding: 10px;
  color: #6f7099;
`


const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
      <StyledUl>
        <StyledLi style={{ color: `${activeIndex === 0 && '#7f7fa2'}`}}>
          <Link to="/swap">SWAP</Link>
        </StyledLi>
        <StyledLi style={{marginLeft: '150px', color: `${activeIndex === 1 && '#7f7fa2'}`}}>
          <Link to="/pool">POOL</Link>
        </StyledLi>
      </StyledUl>
    {/* <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>SWAP</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>POOL</TranslatedText>
      </ButtonMenuItem>
    </ButtonMenu> */}
  </StyledNav>
)

export default Nav
