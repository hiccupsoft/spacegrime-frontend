import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { ButtonMenu, ButtonMenuItem } from 'spacegrime-uikit'
import TranslatedText from '../TranslatedText'
import DarkLogo from "../../assets/Logo/SpaceGrime Text Logo (Dark).png"
import LightLogo from "../../assets/Logo/SpaceGrime Text Logo (Light).png"

const StyledNav = styled.div`
  margin-bottom: 40px;
  margin-top: 10px;
  text-align: center;
`

const StyledUl = styled.div`
  list-style-type: none;
  text-align: center;
  padding-right: 109px;
`
const StyledLi = styled.div`
  display: inline-block;
  padding: 10px;
  color: #6f7099;
`


const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const mode = useSelector<any>((state) => state.user.isDarkMode );
  return (<StyledNav>
      <img src={`${mode ? LightLogo : DarkLogo}`} alt="" width={`${mode ? '50%' : '35%'}`} style={{marginBottom: '80px'}}/>
      <StyledUl>
        <StyledLi style={{ color: `${activeIndex === 0 && '#7f7fa2'}`}}>
          <Link to="/swap">SWAP</Link>
        </StyledLi>
        <StyledLi style={{marginLeft: '0', color: `${activeIndex === 1 && '#7f7fa2'}`}}>
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
  }
export default Nav
