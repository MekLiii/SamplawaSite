import React from "react";

import styled from "styled-components";
import "./app.css";
import loadable from "@loadable/component";

const OtherComponent = loadable(() => import("./CoutingDownEl"));

function CoutingDown() {
  return (
    <Box>
      <P>Na boisku widzimy się za:</P>
      <OtherComponent dateTo="9/15/2022"/>
    </Box>
  );
}


const Box = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const P = styled.p`
  font-size: clamp(20px, 3vw, 50px);
  color: white;
  font-family: poppins;
`;
export default CoutingDown;
