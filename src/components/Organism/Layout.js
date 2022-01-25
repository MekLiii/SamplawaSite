import React from "react";
import styled from "styled-components";
import Footer from "../Molecules/footer/Footer";
import NavBar from "../Molecules/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

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
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  background-color: black;
`;
const AbsoluteFb = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Layout;
