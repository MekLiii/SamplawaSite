import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.png";
import styled from "styled-components";
import "./navbar.module.css";
import Burger from "../../Atoms/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  return (
    <StyledNav>
      <Burger />
      <StyledSide>
        <NavElement style={{ flex: 1 }}>
          <Flag>
            <StyledLogo>
              <StyledImg src={logo} alt={logo} />
            </StyledLogo>
          </Flag>
        </NavElement>
        <NavElement style={{ flex: 2 }}>
          <NavLinks>
            <Link to="/" style={text}>
              <PnavLinksMain
                style={{
                  backgroundColor: "#ffe600",
                  padding: "8px",
                  borderRadius: "11px",
                  color: "black",
                }}
              >
                Główna
              </PnavLinksMain>
            </Link>
          </NavLinks>
          <NavLinks>
            <Link to="/Kadra" style={text}>
              <PnavLinks>Kadra</PnavLinks>
            </Link>
          </NavLinks>
          <NavLinks>
            <Link to="/Sklep" style={text}>
              <PnavLinks>Sklep</PnavLinks>
            </Link>
          </NavLinks>
          <NavLinks>
            <Link to="/Galeria" style={text}>
              <PnavLinks>Galeria</PnavLinks>
            </Link>
          </NavLinks>
          <NavLinks>
            <Link to="/Oklubie" style={text}>
              <PnavLinks>O klubie</PnavLinks>
            </Link>
          </NavLinks>
          <NavLinks>
            <Link to="/Klub100" style={text}>
              <PnavLinks>Klub100</PnavLinks>
            </Link>
          </NavLinks>
        </NavElement>
        <NavElement style={{ flex: 1,justifyContent: 'center',gap:"15px" }}>
          <a
            href="https://www.facebook.com/WyrownawczaAkademiaPilkarska"
            target="_blank"
          >
            <div
              style={{
                width: "37px",
                height: "37px",
                backgroundColor: "#ffe600",
                borderRadius: "11px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} size="1x" color="black" />
              
            </div>
          </a>
          <a
            href="https://www.instagram.com/pft_drewneks_samplawa/"
            target="_blank"
          >
            <div
              style={{
                width: "37px",
                height: "37px",
                backgroundColor: "#ffe600",
                borderRadius: "11px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
              
            </div>
          </a>
        </NavElement>
        
      </StyledSide>
    </StyledNav>
  );
}
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
const StyledSide = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  ${"" /* background-color:pink; */}
  ${"" /* align-items: flex-end; */}
  z-index:2;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
const NavElement = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledLogo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLinks = styled.div``;
const PnavLinks = styled.p`
  font-size: 17px;
  color: white;
  font-family: "Poppins", sans-serif;
`;
const PnavLinksMain = styled.p`
  box-shadow: -1px -1px 3px 0px #c2af00e5 inset;
  box-shadow: 1px 1px 2px 0px #ffff00e5 inset;
  box-shadow: -1px 1px 2px 0px #c2af0033 inset;
  box-shadow: 1px -1px 2px 0px #c2af0033 inset;
  box-shadow: 1px 1px 2px 0px #c2af0080;
  box-shadow: -1px -1px 2px 0px #ffff004d;
  font-size: 17px;
  color: white;
  font-family: "Poppins", sans-serif;
`;
const navText = {
  height: "50%",
  width: "100%",
  borderTop: "3px solid #ffe600",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const StyledImg = styled.img`
  width: 100px;

  @media (max-width: 800px) {
    display: none;
  }
`;
const Flag = styled.div`
  background-color: #ffe600;
  height: 200px;
  width: 100px;
  display: flex;
  justify-content:center;
  align-items:center;
  clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 0);
`;
const text = {
  color: "white",
  fontWeight: "500",
  fontSize: "30px",
};

export default NavBar;
