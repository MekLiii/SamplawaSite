import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logo from "../../images/logo.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 990px) {
    z-index: 120;
    flex-flow: column nowrap;
    background-color: #ffe600;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
  @media (min-width: 990px) {
    display: none;
  }
`;

const RightNav = ({ open,close }) => {
  return (
    <Ul open={open}>
  
      <Link to="/" style={text}>
        <StyledImg src={logo} alt="logo" />
      </Link>
      <Link to="/" style={text}>
        <P onClick={close}>Główna</P>
      </Link>
      <Link to="/Sklep" style={text}>
        <P onClick={close}>Sklep</P>
      </Link>
      <Link to="/Kadra" style={text}>
        <P onClick={close}>Kadra</P>
      </Link>
      <Link to="/Galeria" style={text}>
        <P onClick={close}>Galeria</P>
      </Link>
      <Link to="/Sponsorzy" style={text}>
        <P onClick={close}>Sponsorzy</P>
      </Link>
      <Link to="/Oklubie" style={text}>
        <P onClick={close}>O klubie</P>
      </Link>
      <Link to="/Klub100" style={text}>
        <P onClick={close}>Klub100</P>
      </Link>
    </Ul>
  );
};
const StyledImg = styled.img`
  width: auto;

  @media (max-width: 768px) {
  }
`;
const text = {
  color: "black",
  fontWeight: "bold",
  fontSize: "30px",
};
const P = styled.span`
  font-family: poppins;
`

export default RightNav;
