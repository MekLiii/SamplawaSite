import React from "react";
import styled from "styled-components";
import "./aktu.module.css";

function AktuEl({ img, heading, text, data }) {
  return (
    <StyledBox className="box" id="box">
      <div style={leftSide}>
        <AbsoluteDiv>
          <p>{data}</p>
        </AbsoluteDiv>
        <div style={imagine}>
          <img src={img} style={imagine} alt={img} />
        </div>
      </div>
      <div style={rightSide}>
        <p>{data}</p>
        <h1 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{heading}</h1>
        <p style={{ fontSize: "17px", fontWeight: "100" }}>{text}</p>
      </div>
    </StyledBox>
  );
}

const box = {
  width: "100%",
  backgroundColor: "#fed053",
  display: "flex",
  marginBottom: "10px",
};
const StyledBox = styled.div`
  width: 350px;
  min-height: 655px;
  background-color: white;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;
const AbsoluteDiv = styled.div`
  position: absolute;

  width: 110px;
  height: 25px;
  background-color: white;
  z-index: 100;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 84% 100%, 0 100%, 0% 50%);
  padding-left: 10px;
`;

const leftSide = {
  display: "flex",
  width: "100%",
  flex:'1'
};
const rightSide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "20px",
  flex: "1",
};
const imagine = {
  width: "100%",
  height: "100%",
  backgroundColor:'black'
};

export default AktuEl;
