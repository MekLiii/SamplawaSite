import React from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.png";
import styled from "styled-components";
import './navbar.module.css'

function NavBar() {
  return (
    <StyledNav>
      <StyledRotate>
      <StyledImg src={logo} alt="logo" />
      
      <StyledUl>
        <li>
          <Link to="/" style={text}>Strona głowna</Link>
        </li>
        <li>
          <Link to="/Druzyna" style={text}>Drużyna</Link>
        </li>
        <li>
          <Link to="/Galeria" style={text}>Galeria</Link>
        </li>
        <li>
          <Link to="/Sponsorzy" style={text}>Sponsorzy</Link>
        </li>
        <li>
          <Link to="/Kontakt" style={text}>Kontakt</Link>
        </li>
      </StyledUl>
      </StyledRotate>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  @media (max-width:500px){
    justify-content: center;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  transform: rotate(-4deg);
  @media (max-width:500px){
    width: 100%;
  }

`;
const StyledRotate = styled.div`
  height: 100%;
  ${'' /* transform: rotate(-4.5deg); */}
  clip-path: polygon(0 0, 100% 1%, 100% 31%, 0 100%);
  background-color: #ffe600;
  width: 100%;
  display: flex;
  justify-content: space-around;
`



const StyledImg = styled.img`
  width: auto;

  @media (max-width:500px){
    display: none;
  }
`

const text = {
  color: 'black',
  fontWeight: 'bold',
  fontSize:'30px'
}

export default NavBar;
