import React from "react";
import styled from "styled-components";
import Footer from "../Molecules/footer/Footer";
import NavBar from "../Molecules/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import bgPattern from '../../../content/assets/bg-pattran.png'

function Layout({ children, style,currectSiteProp }) {
  return (
    <StyledBox>
      <NavBar currectSiteProp={currectSiteProp}/>

      <a
        href="https://www.facebook.com/WyrownawczaAkademiaPilkarska"
        target="_blank"
      >
        <AbsoluteFb>
          <FontAwesomeIcon icon={faFacebookF} size="2x" color="black" />
        </AbsoluteFb>
      </a>

      <main style={style}>{children}</main>

      <Footer />
    </StyledBox>
  );
}
const StyledBox = styled.div`
  background-image: url(${bgPattern});
  background-color: black;
`;
const AbsoluteFb = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  border:2px solid black;
  width: 50px;
  height: 50px;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Layout;
