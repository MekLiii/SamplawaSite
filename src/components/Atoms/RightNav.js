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
  @media (max-width: 768px) {
    z-index: 120;
    flex-flow: column nowrap;
    background-color: #ffe600;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" style={text}>
        <StyledImg src={logo} alt="logo" />
      </Link>
      <Link to="/Druzyna" style={text}>
        Drużyna
      </Link>
      <Link to="/Galeria" style={text}>
        Galeria
      </Link>
      <Link to="/Sponsorzy" style={text}>
        Sponsorzy
      </Link>
      <Link to="/Kontakt" style={text}>
        Kontakt
      </Link>
    </Ul>
  );
};
const StyledImg = styled.img`
  width: auto;

  @media (max-width: 500px) {
  }
`;
const text = {
  color: "black",
  fontWeight: "bold",
  fontSize: "30px",
};

export default RightNav;
