import React from "react";
import styled from "styled-components";
import img from "../../../images/soccer.png";
import { Time } from "react-ionicons";

function NextMatch() {
  return (
    <StyledDiv>
      <div style={displayFlex}>
        <h1>Następny mecz</h1>
      </div>
      <div style={versusDiv}>
        <p>Motor</p>
        <p>-:-</p>
        <p>Sampława</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <p>
          <StyledImg src={img} />
          Byszwald
        </p>
        <p>
        <Time
            color={"#00000"}
            rotate
            height="40px"
            width="40px"
          />
          07.12.2021
        </p>
        <p>
         
          B klasa
        </p>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 40%;
`;
const versusDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  width: "100%",
};
const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const StyledImg = styled.img`
  width: 40px;
`;

export default NextMatch;
