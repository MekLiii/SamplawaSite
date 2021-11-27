import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.css";
import logo from "../../../images/logo.png";
import styled from "styled-components";

function NavBar() {
  return (
    <StyledNav>
      <StyledImg src={logo} alt="logo" />
      <StyledUl>
        <li>
          <Link to="/">Strona głowna</Link>
        </li>
        <li>
          <Link to="/Druzyna">Drużyna</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/Sponsorzy">Sponsorzy</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #fed053;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

  @media (max-width:500px){
    justify-content: center;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;
  width: 50%;
  @media (max-width:500px){
    width: 100%;
  }

`;

const StyledImg = styled.img`
  width: auto;

  @media (max-width:500px){
    display: none;
  }
`

export default NavBar;
