import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.png";
import styled from "styled-components";
import "./navbar.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Menu } from "react-ionicons";
import Burger from "../../Atoms/Burger";

function NavBar() {
  const StyledNav = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 500px) {
      justify-content: center;
      height: 10vh;
    }
  `;
  return (
    <StyledNav>
      <Burger />
      <StyledSide>
        <div style={navText}>
          <Link to="/" style={text}>
            Głowna
          </Link>
          <Link to="/Druzyna" style={text}>
            Drużyna
          </Link>
          <Link to="/Sklep" style={text}>
            Sklep
          </Link>
        </div>
      </StyledSide>
      <StyledLogo>
        <StyledImg src={logo} alt="logo" />
      </StyledLogo>
      <StyledSide>
        <div style={navText}>
          <Link to="/Galeria" style={text}>
            Galeria
          </Link>
          <Link to="/Oklubie" style={text}>
            O klubie
          </Link>
          <Link to="/Klub100" style={text}>
            Klub100
          </Link>
        </div>
      </StyledSide>
    </StyledNav>
  );
}
const StyledSide = styled.div`
  width: 45%;

  height: 100%;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const StyledLogo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const navText = {
  height: "50%",
  width: "100%",
  borderTop: "3px solid #ffe600",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;

    display: none;
  }
`;
const StyledRotate = styled.div`
  height: 100%;
  background-color: #ffe600;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const StyledImg = styled.img`
  width: 100px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const text = {
  color: "white",
  fontWeight: "500",
  fontSize: "30px",
};

export default NavBar;

// <StyledRotate>
//         <Link to="/" style={text}>
//           <StyledImg src={logo} alt="logo" />
//         </Link>
//         <StyledUl>
//         <li>
//             <Link to="/" style={text}>
//               Głowna
//             </Link>
//           </li>
//           <li>
//             <Link to="/Druzyna" style={text}>
//               Drużyna
//             </Link>
//           </li>
//           <li>
//             <Link to="/Galeria" style={text}>
//               Galeria
//             </Link>
//           </li>
//           <li>
//             <Link to="/Sponsorzy" style={text}>
//               Sponsorzy
//             </Link>
//           </li>
//           <li>
//             <Link to="/Kontakt" style={text}>
//               Kontakt
//             </Link>
//           </li>
//         </StyledUl>
//       </StyledRotate>
