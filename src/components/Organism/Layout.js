import React from "react";
import styled from "styled-components";
import Footer from "../Molecules/footer/Footer";

import NavBar from "../Molecules/navbar/NavBar";

function Layout({ children, pathSpons }) {
  return (
    <StyledBox >
      <NavBar pathSpons={pathSpons} />
      <main>{children}</main>
      <Footer />
    </StyledBox>
  );
}

const cointainer = {
  height: "auto",
  backgroundImage: 'url("")',
  // backgroundColor: 'black',

  // backgroundColor: '#fed053'
};
const StyledBox = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  background-color:black;
`;
export default Layout;
